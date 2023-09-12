import { YamlFile, cdk } from "projen";
import { Eslint } from "./src/components/codestandards/eslint";
import { Prettier } from "./src/components/codestandards/prettier";
import { Husky } from "./src/components/githooksmanager";
import { Commitizen } from "./src";

const project = new cdk.JsiiProject({
  author: "thoroc",
  authorAddress: "thomas.a.roche@gmail.com",
  defaultReleaseBranch: "main",
  jsiiVersion: "~5.0.0",
  name: "@thoroc/projen-typescript-git-hooks",
  projenrcTs: true,
  repositoryUrl: "https://github.com/thoroc/projen-typescript-git-hooks.git",

  docgen: true,
  deps: ["projen", "yaml", "type-fest", "change-case"],
  devDeps: ["projen"],
  bundledDeps: ["yaml", "type-fest"],
  peerDeps: ["projen"],

  npmDistTag: "latest",
  npmRegistryUrl: "https:///npm.pkg.github.com",

  eslint: false,
  prettier: false,
  jestOptions: {
    configFilePath: "jest.config.json",
  },
});

project.eslint?.addRules(Eslint.defaultEslintRules);

new YamlFile(project, ".github/workflows/pull-request-comments.yml", {
  obj: {
    name: "Jest Coverage Comment",
    on: { pull_request: {} },
    jobs: {
      build: {
        "runs-on": "ubuntu-latest",
        "env": { CI: "true" },
        "steps": [
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

new Husky(project);
new Eslint(project, { dirs: ["src", "test"], prettier: true });
new Prettier(project);
new Commitizen(project, { json: true });

project.synth();