import { Component, TextFile } from "projen";
import { NodePackageManager } from "projen/lib/javascript/node-package";
import { GitClientHook, GitHooksManager, GitHooksManagerOptions } from ".";
import { LintStaged, LintStagedOptions } from "./utils/lintstaged";
import { GitHooksEnabledProject } from "../../projects";

export interface HuskyOptions extends GitHooksManagerOptions {
  /**
   * Enable linting and re-adding of staged files pre commit.
   *
   * @default true
   */
  readonly lintStaged?: boolean;

  /**
   * Set rules for lint-staged
   *
   * @default {}
   */
  readonly lintStagedOptions?: LintStagedOptions;
}

export class Husky extends GitHooksManager {
  /**
   * Returns the singletone component of a project or undefined if there is none.
   */
  public static of(project: GitHooksEnabledProject): Husky | undefined {
    const singleton = (c: Component): c is Husky => c instanceof Husky;
    return project.components.find(singleton);
  }

  readonly project: GitHooksEnabledProject;

  public readonly lintStaged?: LintStaged;

  constructor(project: GitHooksEnabledProject, options?: HuskyOptions) {
    super(project);

    if (project.parent) {
      throw Error(`${JSON.stringify(project)}: GitHooksManager can only be configured on the root project.`);
    }

    this.project = project;
    this.project.addDevDeps("husky");

    if (options?.lintStaged ?? true) {
      this.lintStaged = new LintStaged(this, options?.lintStagedOptions);
    }
  }

  private createHook(hook: GitClientHook, command: Array<string>): TextFile {
    if (this.project.debug)
      console.log(`${this.constructor.name}: Creating new husky hook for ${hook} hook.`);
    const shebang = "#!/bin/sh";
    return new TextFile(this.project, `.husky/${hook}`, {
      executable: true,
      lines: [shebang, '. "$(dirname "$0")/_/husky.sh"', "", command.join("\n")],
    });
  }

  preSynthesize(): void {
    const script =
      this.project.package.packageManager === NodePackageManager.YARN ? "postinstall" : "prepare";
    this.project.package.setScript(script, "npx husky install");

    this.createHook(GitClientHook.PRE_COMMIT, [this.lintStaged ? "npx lint-staged" : ""]);
    this.createHook(GitClientHook.PRE_PUSH, ["npx project test"]);
  }
}
