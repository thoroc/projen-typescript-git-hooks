import { LefthookCommandOptions } from './command';
import { LefthookScriptOptions } from './script';
import { GitClientHook } from '..';

export interface LefthookAction {
  readonly actionName: GitClientHook;
  readonly commands?: Array<LefthookCommandOptions>;
  readonly scripts?: Array<LefthookScriptOptions>;
}
