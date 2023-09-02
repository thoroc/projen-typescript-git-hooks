import { Component, Project } from 'projen';
import { GitHooksEnabledProject } from '../../typescript/githooks-enabled-project';
import { Markdownlint, MarkdownlintOptions } from '../codestandards';
import { CommitizenOptions } from '../codestandards/commitizen';

/**
 * The list of git cient-side hooks
 * @see https://git-scm.com/docs/githooks
 */
export enum GitClientHook {
  PRE_COMMIT = 'pre-commit',
  PRE_PUSH = 'pre-push',
  PRE_COMMIT_MESSAGE = 'prepare-commit-msg',
}

export enum GitHooksManagerType {
  HUSKY = 'husky',
  LEFTHOOK = 'lefthook',
}

export interface GitHooksManagerOptions {
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
  readonly project: Project;
  readonly markdownlint?: Markdownlint;

  constructor(project: GitHooksEnabledProject, options?: GitHooksManagerOptions) {
    super(project);

    if (project.parent) {
      throw Error(`${JSON.stringify(project)}: GitHooksManager can only be configured on the root project.`);
    }

    this.project = project;

    if (options?.markdownlint ?? true) {
      if ((this.project as GitHooksEnabledProject).debug) console.log('Markdownlint enabled');
      this.markdownlint = new Markdownlint(this.project as GitHooksEnabledProject, options?.markdownlintOptions);
    }
  }
}

export * from './husky';
export * from './lintstaged';
export * from './lefthook';
