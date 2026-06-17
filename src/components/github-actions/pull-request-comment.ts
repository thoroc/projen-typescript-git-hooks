import { Component } from "projen";
import type { GitHub } from "projen/lib/github";
import { JobPermission } from "projen/lib/github/workflows-model";
import type { NodeProject } from "projen/lib/javascript";
import { NodePackageManager } from "projen/lib/javascript";
import { installScript } from "./install-script";

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

		const pkg = (this.project as NodeProject).package;
		const isBun = pkg.packageManager === NodePackageManager.BUN;
		const installationScript = installScript(pkg.packageManager);
		const testScript = isBun
			? "bunx vitest run --coverage"
			: "npx vitest run --coverage";

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
				...(isBun
					? [
							{
								name: "Setup bun",
								uses: "oven-sh/setup-bun@v2",
								with: { "bun-version": "latest" },
							},
						]
					: []),
				{ name: "Install dependencies", run: installationScript },
				{
					name: "Run tests",
					run: testScript,
				},
				{
					name: "Vitest Coverage Comment",
					uses: "MishaKav/jest-coverage-comment@v1",
				},
			],
		});
	}
}
