import { Component } from "projen";
import { GitHub } from "projen/lib/github";
import { JobPermission } from "projen/lib/github/workflows-model";
import { NodePackageManager, NodeProject } from "projen/lib/javascript";

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
    const installationScript =
      pkg.packageManager === NodePackageManager.YARN ? "yarn install --check-files" : "npm ci";

    workflow.addJob("build", {
      permissions: { pullRequests: JobPermission.WRITE },
      runsOn: ["ubuntu-latest"],
      env: { CI: "true" },
      steps: [
        {
          name: "Checkout",
          uses: "actions/checkout@v3",
          with: {
            ref: "${{ github.event.pull_request.head.ref }}",
            repository: "${{ github.event.pull_request.head.repo.full_name }}",
          },
        },
        { name: "Install dependencies", run: installationScript },
        { name: "Run tests", run: "npx jest --coverage --coverageReporters json-summary" },
        { name: "Jest Coverage Comment", uses: "MishaKav/jest-coverage-comment@main" },
      ],
    });
  }
}
