import { Component, Project, YamlFile } from "projen";
import { GitHub } from "projen/lib/github";
import { JobPermission } from "projen/lib/github/workflows-model";
import { discover } from "projen/lib/inventory";

export class Mkdocs extends Component {
  constructor(github: GitHub, options?: MkdocsConfigOptions) {
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

    new MkdocsConfig(
      github.project,
      options ?? {
        siteName: "Projen - Docs",
        siteUrl: "https://projen.io/",
        repositoryUrl: "https://github.com/projen/projen",
        siteDescription:
          "Projen is Project Structure as a code. Define and maintain complex project configuration through code.",
        logo: "https://raw.githubusercontent.com/projen/projen/main/logo/projen.svg",
      },
    );
  }
}

export interface MkdocsConfigOptions {
  readonly siteName?: string;
  readonly siteUrl?: string;
  readonly repositoryUrl?: string;
  readonly siteDescription?: string;
  readonly logo?: string;
  readonly mkdocsPlugins?: Array<string>;
}

export class MkdocsConfig extends Component {
  projectTypes: Array<Record<string, string>> = [];
  constructor(project: Project, options?: MkdocsConfigOptions) {
    super(project);

    for (const p of discover()) {
      console.log(`* ${p.docs}: projen-types/${p.pjid}.md`);
      // console.log(`* [${p.pjid}](${p.docsurl}) - ${p.docs}`);
      // this.projectTypes.push({ `${p.docs}`: `projen-types/${p.pjid}` });
    }

    new YamlFile(project, "mkdocs.yml", {
      obj: {
        site_name: options?.siteName,
        site_url: options?.siteUrl,
        repo_url: options?.repositoryUrl,
        site_description: options?.siteDescription,
        theme: {
          name: "material",
          logo: options?.logo,
        },
        nav: [
          {
            "Get Started": [{ Overview: "index.md" }],
          },
          {
            "Projen Types": [
              { "AWS CDK Applications": "projen-types/awscdk-apps.md" },
              { "AWS CDK Construct Library": "projen-types/awscdk-construct.md" },
              { "AWS Cloud Projects": "projen-types/awscdk.md" },
              { Build: "projen-types/build.md" },
              { Bundling: "projen-types/bunding.md" },
              { Components: "projen-types/componen]s.md" },
              { CDK8s: "projen-types/cdk8s.md" },
              { CircleCI: "projen-types/circ]eci.md" },
              { Dependencies: "projen-types/deps.md" },
              { "Escape hatches": "projen-types/esca]e-hatches.md" },
              { Ejecting: "projen-types/eject.md" },
              { GitHub: "projen-types/github.md" },
              { GitLab: "projen-types/gitlab.md" },
              { "Java Projects": "projen-types/jva.md" },
              { "Node.js Projects": "projen-types/nod.md" },
              { "Programmatic API": "projen-types/programatic-api.md" },
              { "Publishing Modules": "projen-types/publisher.md" },
              { "Python Projects": "projen-types/python.md" },
              { "Releases and Versioning": "projen-types/releases.md" },
              { Subprojects: "projen-types/subproject.md" },
              { Tasks: "projen-types/tasks.md" },
              { "TypeScript Projects": "projen]types/typescript.md" },
            ],
          },
          {
            API: "api/API.md",
          },
        ],
        plugins: options?.mkdocsPlugins ?? ["search", "mkdocs-video"],
      },
    });
  }
}
