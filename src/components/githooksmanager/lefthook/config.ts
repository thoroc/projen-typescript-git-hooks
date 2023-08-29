import { LefthookAction } from "./action";
import { LefthookCommand } from "./command";
import { Serializer } from "../../../utils";

export interface LefthookConfigOptions {
  actions: Array<LefthookAction>;
}

export class LefthookConfig implements LefthookConfigOptions, Serializer {
  readonly actions: Array<LefthookAction>;

  constructor(options: LefthookConfigOptions) {
    this.actions = options.actions;
  }

  serialise(): unknown {
    const transfomed: { [key: string]: any } = {};

    for (const id in this.actions) {
      const action = this.actions[id];

      const name = action.actionName;

      if (action.commands && action.commands.length > 0) {
        const transformedCommands = [];

        for (const cmd of action.commands) {
          // console.log(cmd);

          if (cmd instanceof LefthookCommand) {
            transformedCommands.push((cmd as LefthookCommand).serialise());
          } else {
            transformedCommands.push(new LefthookCommand(cmd).serialise());
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
