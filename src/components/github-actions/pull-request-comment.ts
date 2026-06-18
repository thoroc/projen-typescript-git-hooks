import { Component } from "projen";
import type { GitHub } from "projen/lib/github";
import { JobPermission } from "projen/lib/github/workflows-model";
import type { NodeProject } from "projen/lib/javascript";
import { installSteps } from "./install-steps";
import { jestStep } from "./jest-step";
import { vitestStep } from "./vitest-step";

export type TestRunner = "vitest" | "jest";

export interface PullRequestCoverageCommentOptions {
	readonly testRunner?: TestRunner;
}

/**
 * Represents PullRequestCoverageComment configuration
 */
export class PullRequestCoverageComment extends Component {
	constructor(github: GitHub, options: PullRequestCoverageCommentOptions = {}) {
		super(github.project);

		const existingWorkflow = github.tryFindWorkflow("pull-request");
		const workflow = existingWorkflow ?? github.addWorkflow("pull-request");
		if (!existingWorkflow) {
			workflow.on({ pullRequest: {} });
			workflow.file?.addOverride("concurrency", {
				group: "${{ github.workflow }}-${{ github.event.pull_request.number }}",
				"cancel-in-progress": true,
			});
		}

		const { packageManager } = (this.project as NodeProject).package;
		const testStep =
			options.testRunner === "jest"
				? jestStep(packageManager)
				: vitestStep(packageManager);

		const coverageCommentStep =
			options.testRunner === "jest"
				? {
						name: "Coverage Comment",
						uses: "MishaKav/jest-coverage-comment@v1",
					}
				: {
						name: "Coverage Comment",
						uses: "davelosert/vitest-coverage-report-action@v2",
					};

		workflow.addJob("coverage-comment", {
			permissions: { pullRequests: JobPermission.WRITE },
			runsOn: ["ubuntu-latest"],
			env: { CI: "true" },
			steps: [
				{
					name: "Checkout",
					uses: "actions/checkout@v4",
					with: {
						ref: "${{ github.event.pull_request.head.ref }}",
						repository: "${{ github.event.pull_request.head.repo.full_name }}",
					},
				},
				...installSteps(packageManager),
				testStep,
				coverageCommentStep,
			],
		});
	}
}
