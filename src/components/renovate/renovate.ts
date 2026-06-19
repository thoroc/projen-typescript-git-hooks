import { Component, JsonFile, type Project } from "projen";

export interface PackageRule {
	readonly matchUpdateTypes?: Array<string>;
	readonly matchDepTypes?: Array<string>;
	readonly automerge?: boolean;
	readonly automergeStrategy?: string;
	readonly groupName?: string;
	readonly groupSlug?: string;
}

export interface RenovateOptions {
	readonly labels?: Array<string>;
	readonly automerge?: boolean;
	readonly automergeStrategy?: string;
	readonly automergeType?: string;
	/** Minimum age a release must be before Renovate raises a PR. Defaults to "7 days". */
	readonly minimumReleaseAge?: string;
	/** When to rebase open PRs. Defaults to "auto". */
	readonly rebaseWhen?: "auto" | "behind-base-branch" | "conflicted" | "never";
	readonly packageRules?: Array<PackageRule>;
}

const DEFAULT_PACKAGE_RULES: Array<PackageRule> = [
	{
		matchUpdateTypes: ["minor", "patch", "pin", "digest"],
		automerge: true,
		automergeStrategy: "squash",
		groupName: "all non-major dependencies",
		groupSlug: "all-minor-patch-pin-digest",
	},
	{
		matchDepTypes: ["devDependencies"],
		automerge: true,
		automergeStrategy: "squash",
		groupName: "all non-major dev dependencies",
		groupSlug: "all-dev-deps",
	},
];

export class Renovate extends Component {
	constructor(project: Project, options: RenovateOptions = {}) {
		super(project);

		new JsonFile(project, "renovate.json", {
			marker: false,
			obj: {
				$schema: "https://docs.renovatebot.com/renovate-schema.json",
				extends: ["config:recommended"],
				labels: options.labels ?? ["dependencies", "renovate"],
				automerge: options.automerge ?? true,
				automergeStrategy: options.automergeStrategy ?? "squash",
				automergeType: options.automergeType ?? "pr",
				minimumReleaseAge: options.minimumReleaseAge ?? "7 days",
				rebaseWhen: options.rebaseWhen ?? "auto",
				packageRules: options.packageRules ?? DEFAULT_PACKAGE_RULES,
			},
		});
	}
}
