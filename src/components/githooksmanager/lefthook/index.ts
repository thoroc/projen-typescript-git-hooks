import { Component, YamlFile } from "projen";
import { NodePackageManager } from "projen/lib/javascript";
import { LefthookCommand, LefthookCommandOptions } from "./command";
import { LefthookConfig } from "./config";
import { LefthookScriptOptions } from "./script";
import { GitClientHook, GitHooksManager, GitHooksManagerOptions } from "..";
import { GitHooksEnabledProject } from "../../../projects";

export interface LefthookOptions extends GitHooksManagerOptions {
  config?: LefthookConfig;
}

export class Lefthook extends GitHooksManager {
  /**
   * Returns the singletone component of a project or undefined if there is none.
   */
  public static of(project: GitHooksEnabledProject): Lefthook | undefined {
    const singleton = (c: Component): c is Lefthook => c instanceof Lefthook;
    return project.components.find(singleton);
  }

  project: GitHooksEnabledProject;
  config: LefthookConfig;

  constructor(project: GitHooksEnabledProject, options?: LefthookOptions) {
    super(project);

    project.addDevDeps("lefthook");

    this.config = new LefthookConfig(
      options?.config ?? {
        actions: [],
      },
    );

    this.project = project;
    if (this.project.debug) console.log("Initiating Lefthook");
  }

  public addCommand(hookName: GitClientHook, command: LefthookCommandOptions) {
    const action = this.config.actions?.find((hook) => hook.actionName === hookName);

    if (this.project.debug)
      console.log(`${this.constructor.name}: Adding new Command: ${action?.actionName}.`);

    if (!action) {
      this.config.actions.push({
        actionName: hookName,
        commands: [new LefthookCommand(command)],
      });
    }

    action?.commands?.push(command);
  }

  public addScript(hookName: GitClientHook, script: LefthookScriptOptions) {
    const action = this.config.actions?.find((hook) => hook.actionName === hookName);

    if (!action) {
      this.config.actions.push({
        actionName: hookName,
        scripts: [script],
      });
    }

    action?.scripts?.push(script);
  }

  preSynthesize(): void {
    const script =
      this.project.package.packageManager === NodePackageManager.YARN ? "postinstall" : "prepare";
    this.project.package.setScript(script, "npx lefthook install");

    if (this.project.debug) console.log(`${this.constructor.name}: Creating new Lefthook config file.`);

    const config = this.config as LefthookConfig;

    new YamlFile(this.project, "lefthook.yml", {
      executable: true,
      obj: config.serialise(),
    });
  }
}

export { LefthookCommandOptions } from "./command";
