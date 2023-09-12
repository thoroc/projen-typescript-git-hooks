import { Component, Project, TextFile } from "projen";
import { NodePackageManager } from "projen/lib/javascript/node-package";
import { LintStaged, LintStagedOptions } from "./lintstaged";
import { GitHooksEnabledProject } from "../../../typescript/githooks-enabled-project";
import { GitHooksManager, GitClientHook } from "../githookmanager";

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

    if ((this.project as GitHooksEnabledProject).debug) {
      console.log(`Husky Options: ${JSON.stringify(options, undefined, 2)}`);
    }

    if (options?.lintStaged ?? true) {
      if ((this.project as GitHooksEnabledProject).debug) console.log("LintStaged enabled");
      this.lintStaged = new LintStaged(this.project as GitHooksEnabledProject, options?.lintStagedOptions);
    }
  }

  createHook(hook: GitClientHook, command: Array<string>): void {
    const gitHookFilename = `.husky/${hook}`;
    const gitHookFile = this.project.tryFindFile(gitHookFilename);

    if (gitHookFile === undefined) {
      if ((this.project as GitHooksEnabledProject).debug) {
        console.log(`${this.constructor.name}: Creating new husky hook for ${hook} hook.`);
      }

      new TextFile(this.project, gitHookFilename, {
        executable: true,
        lines: ["#!/bin/sh", '. "$(dirname "$0")/_/husky.sh"', "", command.join("\n")],
      });
    }
  }

  preSynthesize(): void {
    const pkg = (this.project as GitHooksEnabledProject).package;
    const script = pkg.packageManager === NodePackageManager.YARN ? "postinstall" : "prepare";
    pkg.setScript(script, "npx husky install");
  }
}
