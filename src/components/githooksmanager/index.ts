import { Component, javascript } from "projen";

/**
 * The list of git cient-side hooks
 * @see https://git-scm.com/docs/githooks
 */
export enum GitClientHook {
  PRE_COMMIT = "pre-commit",
  PRE_PUSH = "pre-push",
}

export enum GitHooksManagerType {
  HUSKY = "husky",
  LEFTHOOK = "lefthook",
}

export interface GitHooksManagerOptions {}

export abstract class GitHooksManager extends Component {
  /**
   * Returns the singletone component of a project or undefined if there is none.
   */
  public static of(project: javascript.NodeProject): GitHooksManager | undefined {
    const singleton = (c: Component): c is GitHooksManager => c instanceof GitHooksManager;
    return project.components.find(singleton);
  }

  readonly project: javascript.NodeProject;

  constructor(project: javascript.NodeProject) {
    super(project);

    if (project.parent) {
      throw Error(`${JSON.stringify(project)}: GitHooksManager can only be configured on the root project.`);
    }

    this.project = project;
  }
}

export { Husky, HuskyOptions } from "./husky";
export { Lefthook, LefthookOptions, LefthookCommand } from "./lefthook";
