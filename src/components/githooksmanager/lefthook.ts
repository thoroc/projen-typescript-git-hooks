import { Component, YamlFile, javascript } from "projen";
import { NodePackageManager } from "projen/lib/javascript";
import { GitClientHook, GitHooksManager, GitHooksManagerOptions } from ".";

export interface LefthookCommand {
  name: string;
  run: string;
  files?: string;
  exclude?: string;
  glob?: string;
  tags?: string;
}

export interface LefthookScript {
  name: string;
  runner: string;
}

export interface LefthookAction {
  actionName: GitClientHook;
  commands?: Array<LefthookCommand>;
  scripts?: Array<LefthookScript>;
}

export interface LefthookConfig {
  actions: Array<LefthookAction>;
}

export interface LefthookOptions extends GitHooksManagerOptions {
  config?: LefthookConfig;
}

export class Lefthook extends GitHooksManager {
  /**
   * Returns the singletone component of a project or undefined if there is none.
   */
  public static of(project: javascript.NodeProject): Lefthook | undefined {
    const singleton = (c: Component): c is Lefthook => c instanceof Lefthook;
    return project.components.find(singleton);
  }

  public config: LefthookConfig;

  constructor(project: javascript.NodeProject, options?: LefthookOptions) {
    super(project);

    project.addDevDeps("lefthook");

    this.config = options?.config ?? {
      actions: [],
    };

    console.log("Initiating Lefthook");
  }

  public addCommand(hookName: GitClientHook, command: LefthookCommand) {
    const action = this.config.actions?.find((hook) => hook.actionName === hookName);

    if (!action) {
      this.config.actions.push({
        actionName: hookName,
        commands: [command],
      });
    }

    action?.commands?.push(command);
  }

  public addScript(hookName: GitClientHook, script: LefthookScript) {
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

    new YamlFile(this.project, "lefthook.yml", {
      executable: true,
      obj: this.config?.actions,
    });
  }
}
