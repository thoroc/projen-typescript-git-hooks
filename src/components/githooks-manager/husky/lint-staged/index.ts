import { Component, type Project } from "projen";
import type { GitHooksEnabledProject } from "../../../typescript/githooks-enabled-project";
import { LintStagedRule, type LintStagedRuleOptions } from "./rule";

export interface LintStagedOptions {
	readonly rules?: Array<LintStagedRule>;
}

export class LintStaged extends Component {
	/**
	 * Returns the singletone component of a project or undefined if there is none.
	 */
	public static of(project: GitHooksEnabledProject): LintStaged | undefined {
		const singleton = (c: Component): c is LintStaged =>
			c instanceof LintStaged;
		return project.components.find(singleton);
	}

	readonly project: Project;
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

		(this.project as GitHooksEnabledProject).addDevDeps("lint-staged");
	}

	public addRule(rule: LintStagedRuleOptions): void {
		const existingRuleIndex: number = this.rules.findIndex(
			(r) => r.filePattern === rule.filePattern,
		);

		if (existingRuleIndex !== -1) {
			const existingRule: LintStagedRule = this.rules[existingRuleIndex];

			const existingCommands = Array.isArray(existingRule.commands)
				? existingRule.commands
				: [existingRule.commands];
			const newCommands = Array.isArray(rule.commands)
				? rule.commands
				: [rule.commands];

			existingRule.commands = [...existingCommands, ...newCommands];
		} else {
			this.rules.push(new LintStagedRule(rule));
		}
	}

	preSynthesize(): void {
		(this.project as GitHooksEnabledProject).package.addField(
			"lint-staged",
			this.expandLintStagedRules(),
		);
	}

	private expandLintStagedRules() {
		if (this.rules.length > 0) {
			const sortedRules = this.rules.sort(
				(rule1: LintStagedRule, rule2: LintStagedRule) =>
					rule2.filePattern.localeCompare(rule1.filePattern),
			);

			const preparedLintStagedRules: { [key: string]: string | Array<string> } =
				{};

			for (const rule of sortedRules) {
				preparedLintStagedRules[rule.filePattern] = rule.commands;
			}

			return preparedLintStagedRules;
		}

		return {};
	}
}
