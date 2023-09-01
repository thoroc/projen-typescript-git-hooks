import { Component } from "projen";
import { GitHooksEnabledProject } from "../../projects";
import { Markdownlint, MarkdownlintOptions } from "../codestandards";
import { CommitizenOptions } from "../codestandards/commitizen";

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

export type GitHooksManagerOptions = {
  /**
   * Enable commitizen and re-adding of staged files pre commit.
   *
   * @default true
   */
  readonly commitizen?: boolean;

  /**
   * Set rules for commitizen
   *
   * @default {}
   */
  readonly commitizenOptions?: CommitizenOptions;

  /**
   * Enable markdownlint
   *
   * @default true
   */
  readonly markdownlint?: boolean;

  /**
   * Markdownlint options
   *
   * @default {}
   */
  readonly markdownlintOptions?: MarkdownlintOptions;
};

export abstract class GitHooksManager extends Component {
  /**
   * Returns the singletone component of a project or undefined if there is none.
   */
  public static of(project: GitHooksEnabledProject): GitHooksManager | undefined {
    const singleton = (c: Component): c is GitHooksManager => c instanceof GitHooksManager;
    return project.components.find(singleton);
  }

  public project: GitHooksEnabledProject;
  readonly markdownlint?: Markdownlint;

  constructor(project: GitHooksEnabledProject, options?: GitHooksManagerOptions) {
    super(project);

    if (project.parent) {
      throw Error(`${JSON.stringify(project)}: GitHooksManager can only be configured on the root project.`);
    }

    this.project = project;

    if (options?.markdownlint ?? true) {
      if (this.project.debug) console.log("Markdownlint enabled");
      this.markdownlint = new Markdownlint(this.project, options?.markdownlintOptions);
    }
  }
}

export { Husky, HuskyOptions } from "./husky";
export { LintStaged, LintStagedRule, LintStagedOptions } from "./utils/lintstaged";
export {
  Lefthook,
  LefthookAction,
  LefthookConfig,
  LefthookConfigOptions,
  LefthookOptions,
  LefthookCommandOptions,
  LefthookScriptOptions,
} from "./lefthook";
