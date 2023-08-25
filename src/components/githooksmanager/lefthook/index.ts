import { Component, YamlFile, javascript } from "projen";
import { NodePackageManager } from "projen/lib/javascript";
import { ILefthookCommand } from "./command";
import { Config, ILefthookConfig } from "./config";
import { ILefthookScript } from "./script";
import { GitClientHook, GitHooksManager, GitHooksManagerOptions } from "..";

export interface ILefthookOptions extends GitHooksManagerOptions {
  config?: ILefthookConfig;
}

export class Lefthook extends GitHooksManager {
  /**
   * Returns the singletone component of a project or undefined if there is none.
   */
  public static of(project: javascript.NodeProject): Lefthook | undefined {
    const singleton = (c: Component): c is Lefthook => c instanceof Lefthook;
    return project.components.find(singleton);
  }

  public config: ILefthookConfig;

  constructor(project: javascript.NodeProject, options?: ILefthookOptions) {
    super(project);

    project.addDevDeps("lefthook");

    this.config = options?.config ?? {
      actions: [],
    };

    console.log("Initiating Lefthook");
  }

  public addCommand(hookName: GitClientHook, command: ILefthookCommand) {
    const action = this.config.actions?.find((hook) => hook.actionName === hookName);

    if (!action) {
      this.config.actions.push({
        actionName: hookName,
        commands: [command],
      });
    }

    action?.commands?.push(command);
  }

  public addScript(hookName: GitClientHook, script: ILefthookScript) {
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

    console.log(`${this.constructor.name}: Creating new Lefthook config file.`);

    const config = this.config as Config;

    new YamlFile(this.project, "lefthook.yml", {
      executable: true,
      obj: config.serialise(),
    });
  }
}

export { ILefthookCommand } from "./command";
