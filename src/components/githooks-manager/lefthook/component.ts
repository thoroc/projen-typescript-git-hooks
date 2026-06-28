import type { Component, Project } from "projen";
import { NodePackageManager } from "projen/lib/javascript";
import type { GitHooksEnabledProject } from "../../../typescript/githooks-enabled-project";
import { GitHooksManager } from "../manager";
import { GitClientHook } from "../types";
import { LefthookCommand, type LefthookCommandOptions } from "./command";
import { LefthookConfig } from "./config";
import { LefthookFile } from "./file";
import { kebabCase } from "../../../utils/case";
import type { LefthookScriptOptions } from "./script";

export interface LefthookOptions {
	/**
	 * Lefthook config
	 */
	readonly config?: LefthookConfig;
}

/**
 * @pjid lefthook
 */
export class Lefthook extends GitHooksManager {
	/**
	 * Returns the singletone component of a project or undefined if there is none.
	 */
	public static of(project: Project): GitHooksManager | undefined {
		const singleton = (c: Component): c is Lefthook => c instanceof Lefthook;
		return (project as GitHooksEnabledProject).components.find(singleton);
	}

	config: LefthookConfig;

	constructor(project: GitHooksEnabledProject, options?: LefthookOptions) {
		super(project);

		project.addDevDeps("lefthook");

		this.config = new LefthookConfig(
			options?.config ?? {
				actions: [],
			},
		);

		this.addCommand(GitClientHook.PRE_COMMIT, {
			name: "typecheck",
			run: "npx tsc --noEmit -p tsconfig.dev.json",
			stagedFiles: false,
		});
	}

	public addHook(hook: GitClientHook, command: string): void {
		this.addCommand(hook, { name: kebabCase(command), run: command });
	}

	public addCommand(hookName: GitClientHook, command: LefthookCommandOptions) {
		const action = this.config.actions?.find(
			(hook) => hook.actionName === hookName,
		);

		if (!action) {
			this.config.actions.push({
				actionName: hookName,
				commands: [new LefthookCommand(command)],
			});
		}

		action?.commands?.push(command);
	}

	public addScript(hookName: GitClientHook, script: LefthookScriptOptions) {
		const index = this.config.actions.findIndex(
			(hook) => hook.actionName === hookName,
		);

		if (index === -1) {
			this.config.actions.push({
				actionName: hookName,
				scripts: [script],
			});
			return;
		}

		const action = this.config.actions[index];
		if (action.scripts) {
			action.scripts.push(script);
		} else {
			this.config.actions[index] = { ...action, scripts: [script] };
		}
	}

	preSynthesize(): void {
		const pkg = (this.project as GitHooksEnabledProject).package;
		const script =
			pkg.packageManager === NodePackageManager.YARN_BERRY
				? "postinstall"
				: "prepare";
		pkg.setScript(script, "npx lefthook install");

		new LefthookFile(this.project, this.config.serialize());
	}
}
