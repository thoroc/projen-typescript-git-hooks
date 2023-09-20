import { LefthookAction } from "./action";
import { LefthookCommand } from "./command";
import { ISerializer } from "../../../utils";

export interface LefthookConfigOptions {
  /**
   * Array of lefthook action
   */
  readonly actions: Array<LefthookAction>;
}

export class LefthookConfig implements ISerializer {
  readonly actions: Array<LefthookAction>;

  constructor(options: LefthookConfigOptions) {
    this.actions = options.actions;
  }

  serialize(): object {
    const transfomed: { [key: string]: object } = {};

    for (const action of this.actions) {
      const name = action.actionName;

      if (action.commands && action.commands.length > 0) {
        const transformedCommands: Array<object> = [];

        for (const cmd of action.commands) {
          if (cmd instanceof LefthookCommand) {
            transformedCommands.push(cmd.serialize());
          } else {
            transformedCommands.push(new LefthookCommand(cmd).serialize());
          }
        }

        transfomed[name] = {
          commands: transformedCommands,
        };
      }
    }

    return transfomed;
  }
}
