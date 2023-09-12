import { GitClientHook } from "./githookmanager";

export interface GitHooksAction {
  readonly glob: string;
  readonly name?: string;
  readonly commands: string | Array<string>;
  readonly githookType: GitClientHook;
}
