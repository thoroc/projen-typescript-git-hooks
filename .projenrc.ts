import { GitHooksManagerType } from './src/components/githooksmanager';
import { GitHooksEnabledProject } from './src/projects';

const project = new GitHooksEnabledProject({
  defaultReleaseBranch: 'main',
  name: 'projen-typescript-git-hooks',
  description: 'Projen template for Typescript project supporting Git hooks and extra tooling',
  projenrcTs: true,

  peerDeps: ['projen'],
  deps: ['projen'],

  gitHooksManager: GitHooksManagerType.HUSKY
});
project.synth();