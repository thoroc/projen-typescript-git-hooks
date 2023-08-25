import { ILefthookAction } from "./action";
import { Command } from "./command";
import { Serializer } from "../../../utils";

export interface ILefthookConfig {
  actions: Array<ILefthookAction>;
}

export class Config implements ILefthookConfig, Serializer {
  readonly actions: Array<ILefthookAction>;

  constructor(actions: Array<ILefthookAction>) {
    this.actions = actions;
  }
  serialise(): unknown {
    const transfomed: { [key: string]: any } = {};

    for (const id in this.actions) {
      const action = this.actions[id];

      const name = action.actionName;

      if (action.commands && action.commands.length > 0) {
        const transformedCommands = [];

        for (const cmd of action.commands) {
          transformedCommands.push((cmd as Command).serialise());
        }

        transfomed[name] = {
          commands: transformedCommands,
        };
      }
    }

    return transfomed;
  }
}
