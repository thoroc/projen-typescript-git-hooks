export interface LintStagedRuleOptions {
  /**
   * file pattern or filename for the rule
   */
  readonly filePattern: string;
  /**
   * command to execute on the file specified
   */
  readonly commands: string | Array<string>;
  /**
   * Set the command to be the last one
   * TODO: refactor the addRule so we respect this option
   */
  readonly last?: boolean;
}

export class LintStagedRule {
  filePattern: string;
  commands: string | Array<string>;
  last?: boolean;

  constructor(options: LintStagedRuleOptions) {
    this.filePattern = options.filePattern;
    this.commands = options.commands;
  }
}
