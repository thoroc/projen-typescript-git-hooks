import { Component } from "projen";
import type { GitHub } from "projen/lib/github";
import { JobPermission } from "projen/lib/github/workflows-model";
import type { NodeProject } from "projen/lib/javascript";
import { installSteps } from "./install-steps";
import { vitestStep } from "./vitest-step";

/**
 * Represents PullRequestJestCoverageComment configuration
 */
export class PullRequestJestCoverageComment extends Component {
	constructor(github: GitHub) {
		super(github.project);

		const workflow = github.addWorkflow("pull-request-comment");
		workflow.on({
			pullRequest: {},
		});

		const { packageManager } = (this.project as NodeProject).package;

		workflow.addJob("build", {
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
				vitestStep(packageManager),
				{
					name: "Vitest Coverage Comment",
					uses: "MishaKav/jest-coverage-comment@v1",
				},
			],
		});
	}
}
