import { Component } from "projen";
import type { GitHub } from "projen/lib/github";
import { JobPermission } from "projen/lib/github/workflows-model";

export interface ReleasePleaseOptions {
	readonly releaseType?: string;
	readonly targetBranch?: string;
}

/**
 * Represents ReleasePlease configuration
 */
export class ReleasePlease extends Component {
	constructor(github: GitHub, options: ReleasePleaseOptions = {}) {
		super(github.project);

		const { releaseType = "node", targetBranch = "main" } = options;

		const workflow = github.addWorkflow("release-please");

		workflow.on({
			push: {
				branches: [targetBranch],
			},
		});

		workflow.addJob("release-please", {
			permissions: {
				contents: JobPermission.WRITE,
				pullRequests: JobPermission.WRITE,
			},
			runsOn: ["ubuntu-latest"],
			steps: [
				{
					uses: "googleapis/release-please-action@v4",
					with: {
						token: "${{ secrets.GITHUB_TOKEN }}",
						"release-type": releaseType,
					},
				},
			],
		});
	}
}
