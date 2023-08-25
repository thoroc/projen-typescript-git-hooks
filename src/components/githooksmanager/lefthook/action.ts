import { ILefthookCommand } from "./command";
import { ILefthookScript } from "./script";
import { GitClientHook } from "..";

export interface ILefthookAction {
  actionName: GitClientHook;
  commands?: Array<ILefthookCommand>;
  scripts?: Array<ILefthookScript>;
}
