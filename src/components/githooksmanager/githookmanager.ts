import { Component, Project } from "projen";
import { GitHooksEnabledProject } from "../../typescript/githooks-enabled-project";

/**
 * The list of git cient-side hooks
 * @see https://git-scm.com/docs/githooks
 */
export enum GitClientHook {
  PRE_COMMIT = "pre-commit",
  PRE_PUSH = "pre-push",
  PRE_COMMIT_MESSAGE = "prepare-commit-msg",
}

export enum GitHooksManagerType {
  HUSKY = "husky",
  LEFTHOOK = "lefthook",
}

export interface GitHooksAction {
  readonly glob: string;
  readonly name?: string;
  readonly commands: string | Array<string>;
  readonly githookType: GitClientHook;
}

export abstract class GitHooksManager extends Component {
  readonly project: Project;

  constructor(project: GitHooksEnabledProject) {
    super(project);

    if (project.parent) {
      throw Error(`${JSON.stringify(project)}: GitHooksManager can only be configured on the root project.`);
    }

    this.project = project;
  }

  preSynthesize(): void {
    // loop over registrableComponents and set the hooks by calling register
  }
}
