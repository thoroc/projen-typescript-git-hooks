import { Component, JsonFile } from "projen";
import { GitHooksManager } from "..";
import { GitHooksEnabledProject } from "../../../projects";

export interface CommitizenOptions {
  readonly json?: boolean;
}

export class Commitizen extends Component {
  static config = { path: "./node_modules/cz-conventional-changelog" };

  /**
   * Returns the singletone component of a project or undefined if there is none.
   */
  public static of(project: GitHooksEnabledProject): Commitizen | undefined {
    const singleton = (c: Component): c is Commitizen => c instanceof Commitizen;
    return project.components.find(singleton);
  }

  options?: CommitizenOptions;
  project: GitHooksEnabledProject;
  constructor(component: GitHooksManager, options?: CommitizenOptions) {
    super(component.project);

    this.project = component.project;
    this.options = options;
    this.project.addDevDeps(
      "@commitlint/cli",
      "@commitlint/config-conventional",
      "commitizen",
      "cz-conventional-changelog",
    );

    this.project.addTask("commit", {
      description: "Commitizen's commit",
      exec: "./node_modules/.bin/cz",
    });
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
