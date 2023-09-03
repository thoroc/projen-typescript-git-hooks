import { LefthookAction } from "./action";
import { LefthookCommand } from "./command";
import { ISerializer } from "../../../utils";

export interface LefthookConfigOptions {
  readonly actions: Array<LefthookAction>;
}

export class LefthookConfig implements ISerializer {
  readonly actions: Array<LefthookAction>;

  constructor(options: LefthookConfigOptions) {
    this.actions = options.actions;
  }

  serialize(): object {
    const transfomed: { [key: string]: object } = {};

    for (const id in this.actions) {
      const action = this.actions[id];

      const name = action.actionName;

      if (action.commands && action.commands.length > 0) {
        const transformedCommands = [];

        for (const cmd of action.commands) {
          if (cmd instanceof LefthookCommand) {
            transformedCommands.push((cmd as LefthookCommand).serialize());
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
