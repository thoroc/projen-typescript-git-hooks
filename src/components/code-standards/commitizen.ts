import { Component, JsonFile, type Project } from "projen";
import type { GitHooksEnabledProject } from "../../typescript/githooks-enabled-project";
import { GitClientHook, Husky, Lefthook } from "../githooks-manager";

export interface CommitizenOptions {
	readonly json?: boolean;
}

export interface CommitizenConfig {
	readonly path: string;
}

export class Commitizen extends Component {
	public static config: CommitizenConfig = {
		path: "./node_modules/cz-conventional-changelog",
	};

	/**
	 * Returns the singletone component of a project or undefined if there is none.
	 */
	public static of(project: GitHooksEnabledProject): Commitizen | undefined {
		const singleton = (c: Component): c is Commitizen =>
			c instanceof Commitizen;
		return project.components.find(singleton);
	}

	readonly options?: CommitizenOptions;

	readonly project: Project;

	constructor(project: GitHooksEnabledProject, options?: CommitizenOptions) {
		super(project);

		this.project = project;
		this.options = options;

		(this.project as GitHooksEnabledProject).addDevDeps(
			"@commitlint/cli",
			"@commitlint/config-conventional",
			"commitizen",
			"cz-conventional-changelog",
		);

		this.project.addTask("commitizen", {
			description: "Commitizen's commit",
			exec: "cz",
		});

		(Husky.of(this.project as GitHooksEnabledProject) as Husky | undefined)?.createHook(
			GitClientHook.PRE_COMMIT_MESSAGE,
			["exec < /dev/tty && npx cz --hook || true"],
		);

		(Lefthook.of(this.project as GitHooksEnabledProject) as Lefthook | undefined)?.addCommand(
			GitClientHook.PRE_COMMIT_MESSAGE,
			{
				name: "commitizen",
				run: "exec < /dev/tty && npx cz --hook || true",
				stagedFiles: false,
			},
		);
	}

	preSynthesize(): void {
		if (this.options?.json) {
			new JsonFile(this.project, ".czrc", {
				obj: Commitizen.config,
			});
		} else {
			const packageJson = this.project.tryFindObjectFile("package.json");

			packageJson?.addOverride("config", {
				commitizen: Commitizen.config,
			});
		}
	}
}
