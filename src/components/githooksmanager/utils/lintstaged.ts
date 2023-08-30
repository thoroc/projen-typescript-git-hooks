import { Component } from "projen";
import { GitClientHook, Husky } from "..";
import { GitHooksEnabledProject } from "../../../projects";

export interface LintStagedRule {
  /**
   * file pattern or filename for the rule
   */
  filePattern: string;

  /**
   * command to execute on the file specified
   */
  commands: string | Array<string>;

  /**
   * Set the command to be the last one
   * TODO: refactor the addRule so we respect this option
   */
  last?: boolean;
}

export interface LintStagedOptions {
  readonly rules?: Array<LintStagedRule>;
}

export class LintStaged extends Component {
  /**
   * Returns the singletone component of a project or undefined if there is none.
   */
  public static of(project: GitHooksEnabledProject): LintStaged | undefined {
    const singleton = (c: Component): c is LintStaged => c instanceof LintStaged;
    return project.components.find(singleton);
  }

  project: GitHooksEnabledProject;
  rules: Array<LintStagedRule>;

  constructor(project: GitHooksEnabledProject, options?: LintStagedOptions) {
    super(project);

    this.project = project;
    this.rules = [];

    if (options?.rules) {
      for (const rule of options.rules) {
        this.addRule(rule);
      }
    }

    this.project.addDevDeps("lint-staged");
  }

  public addRule(rule: LintStagedRule): void {
    const existingRuleIndex: number = this.rules.findIndex((r) => r.filePattern === rule.filePattern);

    if (existingRuleIndex !== -1) {
      const existingRule: LintStagedRule = this.rules[existingRuleIndex];

      if (Array.isArray(existingRule.commands) && Array.isArray(rule.commands)) {
        existingRule.commands = [...existingRule.commands, ...rule.commands];
      } else if (Array.isArray(existingRule.commands)) {
        existingRule.commands.push(rule.commands as string);
      } else if (Array.isArray(rule.commands)) {
        existingRule.commands = [existingRule.commands as string, ...rule.commands];
      } else {
        existingRule.commands = [existingRule.commands as string, rule.commands as string];
      }

      if (this.project.debug)
        console.log(`${this.constructor.name}: Added commands to existing rule ${rule.filePattern}.`);
    } else {
      if (this.project.debug)
        console.log(`${this.constructor.name}: Rule ${rule.filePattern} doesn't exist, adding it now.`);
      this.rules.push(rule);
    }

    Husky.of(this.project)?.createHook(GitClientHook.PRE_COMMIT, ["npx lint-staged"]);
  }

  preSynthesize(): void {
    this.project.package.addField("lint-staged", this.expandLintStagedRules());
  }

  private expandLintStagedRules() {
    if (this.rules.length > 0) {
      const sortedRules = this.rules.sort((rule1, rule2) => {
        if (rule1.filePattern > rule2.filePattern) return -1;
        else if (rule1.filePattern < rule2.filePattern) return 1;
        else return 0;
      });

      const preparedLintStagedRules: { [key: string]: string | Array<string> } = {};

      for (const rule of sortedRules) {
        preparedLintStagedRules[rule.filePattern] = rule.commands;
      }

      return preparedLintStagedRules;
    }

    return {};
  }
}
