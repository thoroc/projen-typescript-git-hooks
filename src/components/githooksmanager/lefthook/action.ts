import { LefthookCommandOptions } from "./command";
import { LefthookScriptOptions } from "./script";
import { GitClientHook } from "..";

export interface LefthookAction {
  actionName: GitClientHook;
  commands?: Array<LefthookCommandOptions>;
  scripts?: Array<LefthookScriptOptions>;
}
