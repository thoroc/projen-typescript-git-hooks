import { LefthookCommandOptions } from "./command";
import { LefthookScriptOptions } from "./script";
import { GitClientHook } from "..";

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
