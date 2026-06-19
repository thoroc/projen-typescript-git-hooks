import { Component, type Project } from "projen";
import type { GitHooksEnabledProject } from "../../typescript/githooks-enabled-project";
import type { GitClientHook } from "./types";

export abstract class GitHooksManager extends Component {
	public static of(project: Project): GitHooksManager | undefined {
		const singleton = (c: Component): c is GitHooksManager =>
			c instanceof GitHooksManager;
		return (project as GitHooksEnabledProject).components.find(singleton);
	}

	constructor(project: GitHooksEnabledProject) {
		super(project);

		if (project.parent) {
			throw Error(
				`${JSON.stringify(project)}: GitHooksManager can only be configured on the root project.`,
			);
		}

		project.addDeps("change-case");
	}

	public abstract addHook(hook: GitClientHook, command: string): void;

	preSynthesize(): void {
		// loop over registrableComponents and set the hooks by calling register
	}
}
