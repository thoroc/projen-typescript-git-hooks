import { Component, JsonFile } from "projen";
import { GitHooksEnabledProject } from "../../projects";
import { GitClientHook, Husky } from "../githooksmanager";

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

  readonly options?: CommitizenOptions;

  project: GitHooksEnabledProject;

  constructor(project: GitHooksEnabledProject, options?: CommitizenOptions) {
    super(project);

    this.project = project;
    this.options = options;

    this.project.addDevDeps(
      "@commitlint/cli",
      "@commitlint/config-conventional",
      "commitizen",
      "cz-conventional-changelog",
    );

    this.project.addTask("commitizen", {
      description: "Commitizen's commit",
      exec: "cz",
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

    Husky.of(this.project)?.createHook(GitClientHook.PRE_COMMIT_MESSAGE, [
      "exec < /dev/tty && npx cz --hook || true",
    ]);
  }
}
