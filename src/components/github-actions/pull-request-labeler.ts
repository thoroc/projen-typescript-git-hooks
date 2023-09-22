import { Component, Project, YamlFile } from "projen";
import { GitHub } from "projen/lib/github";
import { JobPermission } from "projen/lib/github/workflows-model";

/**
 * Represents PullRequestLabeler configuration
 */
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
      githubAction: [".github/**"],
      component: ["src/components/**"],
      test: ["test/**/*.test.ts"],
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
    new YamlFile(project, ".github/labeler.yml", {
      obj: options,
    });
  }
}
