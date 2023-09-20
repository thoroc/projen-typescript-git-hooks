import { Component } from "projen";
import { GitHub } from "projen/lib/github";
import { JobPermission } from "projen/lib/github/workflows-model";

export class CloseStaleIssue extends Component {
  constructor(github: GitHub) {
    super(github.project);

    const workflow = github.addWorkflow("close-stale-issue");
    workflow.on({
      workflowDispatch: { schedule: { cron: "0 */4 * * *" } },
    });

    workflow.addJob("cleanup", {
      permissions: {
        issues: JobPermission.WRITE,
        contents: JobPermission.READ,
        pullRequests: JobPermission.WRITE,
      },
      runsOn: ["ubuntu-latest"],
      name: "stale issue job",
      steps: [
        {
          uses: "aws-actions/stale-issue-cleanup@v3",
          with: {
            "stale-issue-message":
              "This issue has not received a response in a while. If you want to keep this issue open, please leave a comment below and auto-close will be canceled.",
            "ancient-issue-message":
              "This issue has not received any attention in 1 year. If you want to keep this issue open, please leave a comment below and auto-close will be canceled.",

            "stale-pr-message":
              "This PR has not received a response in a while. If you want to keep this issue open, please leave a comment below and auto-close will be canceled.",
            "ancient-pr-message":
              "This PR has not received any attention in 1 year. If you want to keep this issue open, please leave a comment below and auto-close will be canceled.",

            "stale-issue-label": "closing-soon",
            "exempt-issue-labels": "awaiting-approval",
            "stale-pr-label": "no-pr-activity",
            "exempt-pr-labels": "awaiting-approval",
            "response-requested-label": "response-requested",
            "closed-for-staleness-label": "closed-for-staleness",

            "days-before-stale": 4,
            "days-before-close": 7,
            "days-before-ancient": 365,
            "minimum-upvotes-to-exempt": 5,

            loglevel: "DEBUG",
            "dry-run": true,
            "repo-token": "${{ secrets.GITHUB_TOKEN }}",
          },
        },
      ],
    });
  }
}
