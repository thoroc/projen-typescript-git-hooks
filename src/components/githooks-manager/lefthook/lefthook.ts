import { Component, Project, YamlFile } from "projen";
import { NodePackageManager } from "projen/lib/javascript";
import { GitClientHook, GitHooksManager } from "..";
import { LefthookCommand, LefthookCommandOptions } from "./command";
import { LefthookConfig } from "./config";
import { LefthookScriptOptions } from "./script";
import { GitHooksEnabledProject } from "../../../typescript/githooks-enabled-project";

export interface LefthookOptions {
  /**
   * Lefthook config
   */
  readonly config?: LefthookConfig;
}

/**
 * @pjid lefthook
 */
export class Lefthook extends GitHooksManager {
  /**
   * Returns the singletone component of a project or undefined if there is none.
   */
  public static of(project: Project): Lefthook | undefined {
    const singleton = (c: Component): c is Lefthook => c instanceof Lefthook;
    return (project as GitHooksEnabledProject).components.find(singleton);
  }

  config: LefthookConfig;

  constructor(project: GitHooksEnabledProject, options?: LefthookOptions) {
    super(project);

    project.addDevDeps("lefthook");

    this.config = new LefthookConfig(
      options?.config ?? {
        actions: [],
      },
    );

    if ((this.project as GitHooksEnabledProject).debug) console.log("Initiating Lefthook");
  }

  public addCommand(hookName: GitClientHook, command: LefthookCommandOptions) {
    const action = this.config.actions?.find((hook) => hook.actionName === hookName);

    if ((this.project as GitHooksEnabledProject).debug) {
      console.log(`${this.constructor.name}: Adding new Command: ${action?.actionName}.`);
    }

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
    const pkg = (this.project as GitHooksEnabledProject).package;
    const script = pkg.packageManager === NodePackageManager.YARN_BERRY ? "postinstall" : "prepare";
    pkg.setScript(script, "npx lefthook install");

    if ((this.project as GitHooksEnabledProject).debug)
      console.log(`${this.constructor.name}: Creating new Lefthook config file.`);

    new YamlFile(this.project, "lefthook.yml", {
      executable: true,
      obj: this.config.serialize(),
    });
  }
}
