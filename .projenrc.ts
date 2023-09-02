import { cdk, javascript } from "projen";

const project = new cdk.JsiiProject({
  name: "@thoroc/projen-typescript-git-hooks",
  description: "Projen template for Typescript project supporting Git hooks and extra tooling",
  keywords: ["projen", "typescript", "husky", "lefthook"],
  defaultReleaseBranch: "main",
  repositoryUrl: "https://github.com/thoroc/projen-typescript-git-hooks",
  projenrcTs: true,

  author: "thoroc",
  authorAddress: "thomas.a.roche@gmail.com",

  deps: ["projen"],
  peerDeps: ["projen"],

  release: true,
  npmDistTag: 'latest',
  npmRegistryUrl: 'https://npm.pkg.github.com',
});

// new YamlFile(project, ".github/workflows/pull-request-comments.yml", {
//   obj: {
//     name: "Jest Coverage Comment",
//     on: { pull_request: {} },
//     jobs: {
//       build: {
//         "runs-on": "ubuntu-latest",
//         env: { CI: "true" },
//         steps: [
//           {
//             name: "Checkout",
//             uses: "actions/checkout@v3",
//             with: {
//               ref: "${{ github.event.pull_request.head.ref }}",
//               repository: "${{ github.event.pull_request.head.repo.full_name }}",
//             },
//           },
//           { name: "Install dependencies", run: "yarn install --check-files" },
//           { name: "Run tests", run: "npx jest --coverage --coverageReporters json-summary" },
//           { name: "Jest Coverage Comment", uses: "MishaKav/jest-coverage-comment@main" },
//         ],
//       },
//     },
//   },
// });

project.synth();
