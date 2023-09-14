import { Component } from "projen";
import { GitHub } from "projen/lib/github";
import { JobPermission } from "projen/lib/github/workflows-model";

export class Mkdocs extends Component {
  constructor(github: GitHub) {
    super(github.project);

    github.project.addTask("docs", { exec: "mkdocs serve" });

    const workflow = github.addWorkflow("mkdocs");
    workflow.on({
      pullRequestTarget: {},
    });

    workflow.addJob("deploy", {
      permissions: { pullRequests: JobPermission.WRITE, contents: JobPermission.READ },
      runsOn: ["ubuntu-latest"],
      env: { GH_TOKEN: "${{ secrets.GH_TOKEN }" },
      steps: [
        { uses: "actions/checkout@v2" },
        {
          uses: "actions/setup-python@v2",
          with: { "python-version": "3.x" },
        },
        { run: "pip install mkdocs-material" },
        { run: "pip install mkdocs-video" },
        { run: "pip install mkdocs-img2fig-plugin" },
        { run: "git fetch origin gh-pages --depth=1" },
        { run: "mike deploy --force --push --update-aliases ${{env.PACKAGE_VERSION}} latest" },
        { run: "mike set-default --push latest" },
      ],
    });
  }
}
