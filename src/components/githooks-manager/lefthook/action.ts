import type { GitClientHook } from "../types";
import type { LefthookCommandOptions } from "./command";
import type { LefthookScriptOptions } from "./script";

export interface LefthookAction {
	/**
	 * Action name
	 */
	readonly actionName: GitClientHook;
	/**
	 * Array of Lefthook command
	 * @default []
	 */
	readonly commands?: Array<LefthookCommandOptions>;
	/**
	 * Array of Lefthook script
	 * @default []
	 */
	readonly scripts?: Array<LefthookScriptOptions>;
}
