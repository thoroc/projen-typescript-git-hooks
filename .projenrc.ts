import { YamlFile, javascript } from "projen";
import { GitHooksManagerType } from "./src/components/githooksmanager";
import { GitHooksEnabledProject } from "./src/projects";

const project = new GitHooksEnabledProject({
  defaultReleaseBranch: "main",
  name: "projen-typescript-git-hooks",
  repository: "https://github.com/thoroc/projen-typescript-git-hooks",
  description: "Projen template for Typescript project supporting Git hooks and extra tooling",
  projenrcTs: true,

  peerDeps: ["projen"],
  deps: ["projen"],
  debug: true,
  docgen: true,

  autoApproveUpgrades: true,
  autoApproveOptions: { allowedUsernames: ["thoroc"], secret: "GITHUB_TOKEN" },
  depsUpgradeOptions: { workflowOptions: { schedule: javascript.UpgradeDependenciesSchedule.WEEKLY } },

  gitHooksManager: GitHooksManagerType.HUSKY,
});

new YamlFile(project, ".github/workflows/pull-request-comments.yml", {
  obj: {
    name: "Jest Coverage Comment",
    on: { pull_request: "" },
    jobs: {
      build: {
        "runs-on": "ubuntu-latest",
        steps: [
          { uses: "actions/checkout@v3" },
          { name: "Install dependencies", run: "npx project install:ci" },
          { name: "Run tests", run: "npx jest --coverage --coverageReporters json-summary" },
          { name: "Jest Coverage Comment", uses: "MishaKav/jest-coverage-comment@main" },
        ],
      },
    },
  },
});

project.synth();
