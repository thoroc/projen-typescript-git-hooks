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
    on: { pull_request: {} },
    jobs: {
      build: {
        "runs-on": "ubuntu-latest",
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
          { name: "Install dependencies", run: "yarn install --check-files" },
          { name: "Run tests", run: "npx jest --coverage --coverageReporters json-summary" },
          { name: "Jest Coverage Comment", uses: "MishaKav/jest-coverage-comment@main" },
        ],
      },
    },
  },
});

project.synth();
