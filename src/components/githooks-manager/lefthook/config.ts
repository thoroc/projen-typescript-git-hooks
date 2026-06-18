import type { ISerializer } from "../../../utils";
import type { LefthookAction } from "./action";
import { LefthookCommand } from "./command";

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
				const commandsMap: { [key: string]: object } = {};

				for (const cmd of action.commands) {
					const command =
						cmd instanceof LefthookCommand ? cmd : new LefthookCommand(cmd);
					commandsMap[command.name] = command.asRecords();
				}

				transfomed[name] = {
					commands: commandsMap,
				};
			}
		}

		return transfomed;
	}
}
