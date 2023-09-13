import { cdk } from "projen";
import { Eslint } from "./src/components/codestandards/eslint";
import { Prettier } from "./src/components/codestandards/prettier";
import { Husky } from "./src/components/githooksmanager";
import { Commitizen } from "./src";
import { PullRequestJestCoverageComment } from "./src/components/githubactions/pull-request-comment";
import { GitHub } from "projen/lib/github";

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
  bundledDeps: ["yaml", "type-fest", "change-case"],
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

const github = project.github ?? new GitHub(project);
new PullRequestJestCoverageComment(github);
new Husky(project);
new Eslint(project, { dirs: ["src", "test"], prettier: true });
new Prettier(project);
new Commitizen(project, { json: true });

project.synth();