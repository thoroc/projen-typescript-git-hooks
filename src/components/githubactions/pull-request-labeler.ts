import { Component, Project, YamlFile } from "projen";
import { GitHub } from "projen/lib/github";
import { JobPermission } from "projen/lib/github/workflows-model";

export class PullRequestLabeler extends Component {
  constructor(github: GitHub) {
    super(github.project);

    const workflow = github.addWorkflow("pull-request-labeler");
    workflow.on({
      pullRequestTarget: {},
    });

    workflow.addJob("triage", {
      permissions: { pullRequests: JobPermission.WRITE, contents: JobPermission.READ },
      runsOn: ["ubuntu-latest"],
      steps: [
        {
          uses: "actions/labeler@v4",
          with: { dot: true },
        },
      ],
    });

    new LabelerConfig(github.project, {
      documentation: ["*.md"],
      "github action": [".github/**"],
      component: ["src/components/**"],
      test: ["test/**/*.test.ts"],
    });
  }
}

class LabelerConfig extends Component {
  constructor(project: Project, config: {}) {
    super(project);
    new YamlFile(project, ".github/labeler.yml", {
      obj: config,
    });
  }
}
