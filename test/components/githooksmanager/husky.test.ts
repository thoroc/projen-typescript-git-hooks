import { synthSnapshot } from 'projen/lib/util/synth';
import { GitHooksEnabledProject } from '../../../src';
import { GitHooksManagerType, Husky } from '../../../src/components/githooksmanager';

describe('Husky', () => {
  it('Retuns a singleton', () => {
    // Arrange
    const project = new GitHooksEnabledProject({
      name: 'test',
      defaultReleaseBranch: 'main',
      gitHooksManager: GitHooksManagerType.HUSKY,
    });

    // Act
    const husky = project.gitHooksManager;

    // Assert
    expect(husky).toEqual(Husky.of(project));
  });

  it('Adds new dev dependencies', () => {
    // Arrange
    const project = new GitHooksEnabledProject({
      name: 'test',
      defaultReleaseBranch: 'main',
      gitHooksManager: GitHooksManagerType.HUSKY,
    });

    // Act
    const snapshot = synthSnapshot(project);
    const config = snapshot['package.json'].devDependencies;

    // Assert
    expect(Object.keys(config)).toContain('husky');
  });

  it('Adds a new pre-commit file', () => {
    // Arrange
    const project = new GitHooksEnabledProject({
      name: 'test',
      defaultReleaseBranch: 'main',
      gitHooksManager: GitHooksManagerType.HUSKY,
    });

    // Act
    const snapshot = synthSnapshot(project);
    const config = snapshot['.husky/pre-commit'];

    // Assert
    expect(config).toEqual('#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\n\nnpx lint-staged');
  });

  it('Adds a new pre-push file', () => {
    // Arrange
    const project = new GitHooksEnabledProject({
      name: 'test',
      defaultReleaseBranch: 'main',
      gitHooksManager: GitHooksManagerType.HUSKY,
    });

    // Act
    const snapshot = synthSnapshot(project);
    const config = snapshot['.husky/pre-push'];

    // Assert
    expect(config).toEqual('#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\n\nyarn test');
  });
});
