import { Component } from "projen";
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

export interface Registrable {
  readonly glob: string;
  readonly exec: string;
  readonly name?: string;
  readonly actionType?: GitClientHook;
}

export interface RegistrableComponent {
  readonly githookOptions: Registrable;
}

export abstract class GitHooksManager extends Component {
  registrableComponents: Array<RegistrableComponent>;
  constructor(project: GitHooksEnabledProject) {
    super(project);

    if (project.parent) {
      throw Error(`${JSON.stringify(project)}: GitHooksManager can only be configured on the root project.`);
    }

    project.addDeps("change-case");

    this.registrableComponents = [];
  }

  addRegistrableComponent(component: RegistrableComponent): void {
    this.registrableComponents.push(component);
  }

  abstract register(component: RegistrableComponent): void;

  preSynthesize(): void {
    // loop over registrableComponents and set the hooks by calling register
    for (const component of this.registrableComponents) {
      this.register(component);
    }
  }
}
