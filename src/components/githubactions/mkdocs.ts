import { Component, YamlFile } from "projen";
import { GitHub } from "projen/lib/github";
import { JobPermission } from "projen/lib/github/workflows-model";
import { discover } from "projen/lib/inventory";

export interface MkdocsOptions {
  readonly siteName?: string;
  readonly siteUrl?: string;
  readonly repositoryUrl?: string;
  readonly siteDescription?: string;
  readonly logo?: string;
  readonly mkdocsPlugins?: Array<string>;
}

export class Mkdocs extends Component {
  readonly siteName?: string;
  readonly siteUrl?: string;
  readonly repositoryUrl?: string;
  readonly siteDescription?: string;
  readonly logo?: string;
  readonly mkdocsPlugins?: Array<string>;
  projectTypes: Record<string, string> = {};

  constructor(github: GitHub, options?: MkdocsOptions) {
    super(github.project);

    this.siteName = options?.siteName;
    this.siteUrl = options?.siteUrl;
    this.repositoryUrl = options?.repositoryUrl;
    this.siteDescription = options?.siteDescription;
    this.logo = options?.logo;
    this.mkdocsPlugins = options?.mkdocsPlugins;

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

    for (const p of discover()) {
      this.projectTypes[p.docs as string] = `projen-types/${p.pjid}`;
    }
  }

  preSynthesize(): void {
    new YamlFile(this.project, "mkdocs.yml", {
      obj: {
        site_name: this.siteName,
        site_url: this.siteUrl,
        repo_url: this.repositoryUrl,
        site_description: this.siteDescription,
        theme: {
          name: "material",
          logo: this.logo,
        },
        nav: [
          {
            "Get Started": [{ Overview: "index.md" }],
          },
          {
            "Projen Types": this.projectTypes,
          },
          {
            API: "api/API.md",
          },
        ],
        plugins: this.mkdocsPlugins ?? ["search", "mkdocs-video"],
      },
    });
  }
}
