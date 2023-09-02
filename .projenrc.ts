import { cdk } from 'projen';

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

project.synth();