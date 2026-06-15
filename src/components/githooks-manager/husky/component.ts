import type { Component, Project } from "projen";
import { NodePackageManager } from "projen/lib/javascript/node-package";
import type { GitHooksEnabledProject } from "../../../typescript/githooks-enabled-project";
import { type GitClientHook, GitHooksManager } from "..";
import { HuskyHookFile } from "./hook-file";
import { LintStaged, type LintStagedOptions } from "./lintstaged";

export interface HuskyOptions {
  /**
   * Enable linting and re-adding of staged files pre commit.
   *
   * @default true
   */
  readonly lintStaged?: LintStaged;
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
  public static of(project: Project): Husky | undefined {
    const singleton = (c: Component): c is Husky => c instanceof Husky;
    return (project as GitHooksEnabledProject).components.find(singleton);
  }

  readonly lintStaged?: LintStaged;

  constructor(project: GitHooksEnabledProject, options?: HuskyOptions) {
    super(project);

    if (project.parent) {
      throw Error(`${JSON.stringify(project)}: GitHooksManager can only be configured on the root project.`);
    }

    (this.project as GitHooksEnabledProject).addDevDeps("husky");

    if (options?.lintStaged ?? true) {
      this.lintStaged = new LintStaged(this.project as GitHooksEnabledProject, options?.lintStagedOptions);
    }
  }

  createHook(hook: GitClientHook, command: Array<string>): void {
    const gitHookFilename = `.husky/${hook}`;
    const gitHookFile = this.project.tryFindFile(gitHookFilename);

    if (gitHookFile === undefined) {
      new HuskyHookFile(this.project, {
        hook: hook,
        command: command.join("\n"),
      });
    }
  }

  preSynthesize(): void {
    const pkg = (this.project as GitHooksEnabledProject).package;
    const script = pkg.packageManager === NodePackageManager.YARN_BERRY ? "postinstall" : "prepare";
    pkg.setScript(script, "npx husky install");
  }
}
