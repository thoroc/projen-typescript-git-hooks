import { synthSnapshot } from 'projen/lib/util/synth';
import { GitHooksEnabledProject } from '../../../src';
import { GitHooksManagerType } from '../../../src/components/githooksmanager';

describe('Commitizen Component', () => {
  it('Adds new dev dependencie', () => {
    // Arrange
    const project = new GitHooksEnabledProject({
      name: 'test',
      defaultReleaseBranch: 'main',
      prettier: true,
      gitHooksManager: GitHooksManagerType.HUSKY,
      gitHooksManagerOptions: { commitizen: true },
    });

    // Act
    const snapshot = synthSnapshot(project);
    const config = snapshot['package.json'];

    // Assert
    expect(Object.keys(config.devDependencies)).toContain('@commitlint/cli');
    expect(Object.keys(config.devDependencies)).toContain('@commitlint/config-conventional');
    expect(Object.keys(config.devDependencies)).toContain('commitizen');
    expect(Object.keys(config.devDependencies)).toContain('cz-conventional-changelog');
  });

  it('Adds new task', () => {
    // Arrange
    const project = new GitHooksEnabledProject({
      name: 'test',
      defaultReleaseBranch: 'main',
      prettier: true,
      gitHooksManager: GitHooksManagerType.HUSKY,
      gitHooksManagerOptions: { commitizen: true },
    });

    // Act
    const snapshot = synthSnapshot(project);
    const config = snapshot['.projen/tasks.json'];
    const packageJson = snapshot['package.json'];

    // Assert
    expect(config.tasks.commitizen).toEqual({
      name: 'commitizen',
      description: "Commitizen's commit",
      steps: [
        {
          exec: 'cz',
        },
      ],
    });
    expect(packageJson.scripts.commitizen).toEqual('npx projen commitizen');
  });

  it('Adds new config to package.json', () => {
    // Arrange
    const project = new GitHooksEnabledProject({
      name: 'test',
      defaultReleaseBranch: 'main',
      prettier: true,
      gitHooksManager: GitHooksManagerType.HUSKY,
      gitHooksManagerOptions: { commitizen: true },
    });

    // Act
    const snapshot = synthSnapshot(project);
    const config = snapshot['package.json'];

    // Assert
    expect(config.config).toEqual({
      commitizen: {
        path: './node_modules/cz-conventional-changelog',
      },
    });
  });

  it('Adds new config', () => {
    // Arrange
    const project = new GitHooksEnabledProject({
      name: 'test',
      defaultReleaseBranch: 'main',
      prettier: true,
      gitHooksManager: GitHooksManagerType.HUSKY,
      gitHooksManagerOptions: { commitizen: true, commitizenOptions: { json: true } },
    });

    // Act
    const snapshot = synthSnapshot(project);
    const config = snapshot['.czrc'];

    // Assert
    expect(JSON.parse(config)).toEqual({
      'path': './node_modules/cz-conventional-changelog',
      '//': '~~ Generated by projen. To modify, edit .projenrc.js and run "npx projen".',
    });
  });

  it('has a new prepare-commit-message file', () => {
    // Arrange
    const project = new GitHooksEnabledProject({
      name: 'test',
      defaultReleaseBranch: 'main',
      prettier: true,
      gitHooksManager: GitHooksManagerType.HUSKY,
      gitHooksManagerOptions: { commitizen: true },
    });

    // Act
    const snapshot = synthSnapshot(project);
    const config = snapshot['.husky/prepare-commit-msg'];

    // Assert
    expect(config).toEqual(
      '#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\n\nexec < /dev/tty && npx cz --hook || true',
    );
  });
});
