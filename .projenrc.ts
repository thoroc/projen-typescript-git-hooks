import { YamlFile, cdk } from 'projen';

const project = new cdk.JsiiProject({
  author: 'thoroc',
  authorAddress: 'thomas.a.roche@gmail.com',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: '@thoroc/projen-typescript-git-hooks',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/thoroc/projen-typescript-git-hooks.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  npmDistTag: "latest",
  npmRegistryUrl: "https:///npm.pkg.github.com"
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