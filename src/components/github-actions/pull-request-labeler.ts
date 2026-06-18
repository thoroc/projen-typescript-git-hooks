import { Component, type Project, YamlFile } from "projen";
import type { GitHub } from "projen/lib/github";
import { JobPermission } from "projen/lib/github/workflows-model";

/**
 * Represents PullRequestLabeler configuration
 */
export class PullRequestLabeler extends Component {
	constructor(github: GitHub) {
		super(github.project);

		const workflow = github.addWorkflow("pull-request-labeler");
		workflow.on({
			pullRequest: {},
		});

		workflow.addJob("triage", {
			permissions: {
				pullRequests: JobPermission.WRITE,
				contents: JobPermission.READ,
			},
			runsOn: ["ubuntu-latest"],
			steps: [
				{ uses: "actions/checkout@v4" },
				{
					uses: "actions/labeler@v5",
					with: { dot: true },
				},
			],
		});

		new LabelerConfig(github.project, {
			documentation: ["*.md"],
			githubAction: [".github/**"],
			component: ["src/components/**"],
			test: ["src/**/*.test.ts"],
		});
	}
}

export interface LabelerConfigOptions {
	/**
	 * documentation glob
	 */
	readonly documentation: Array<string>;
	/**
	 * github action glob
	 */
	readonly githubAction: Array<string>;
	/**
	 * component glob
	 */
	readonly component: Array<string>;
	/**
	 * test glob
	 */
	readonly test: Array<string>;
}

/**
 * Represents LabelerConfig configuration
 */
export class LabelerConfig extends Component {
	constructor(project: Project, options: LabelerConfigOptions) {
		super(project);

		const toV5 = (globs: string[]) => [
			{ "changed-files": globs.map((g) => ({ "any-glob-to-any-file": g })) },
		];

		new YamlFile(project, ".github/labeler.yml", {
			obj: {
				documentation: toV5(options.documentation),
				githubAction: toV5(options.githubAction),
				component: toV5(options.component),
				test: toV5(options.test),
			},
		});
	}
}
