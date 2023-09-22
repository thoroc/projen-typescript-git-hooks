import { Component } from "projen";
import { GitHub } from "projen/lib/github";
import { JobPermission } from "projen/lib/github/workflows-model";

export class AutoMerge extends Component {
  constructor(github: GitHub) {
    super(github.project);

    const workflow = github.addWorkflow("auto-merge");

    workflow.on({ pullRequest: { branches: ["main"] } });

    workflow.addJob("automerge", {
      permissions: {
        contents: JobPermission.WRITE,
        pullRequests: JobPermission.WRITE,
      },
      runsOn: ["ubuntu-latest"],
      if: "${{ github.actor == 'dependabot[bot]' }}",
      steps: [
        {
          uses: "fastify/github-action-merge-dependabot@v3.9.1",
          with: { "github-token": "${{ secrets.GITHUB_TOKEN }}" },
        },
      ],
    });
  }
}
