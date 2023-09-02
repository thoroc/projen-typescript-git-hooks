import { synthSnapshot } from 'projen/lib/util/synth';
import { GitHooksEnabledProject } from '../../../src';
import { GitHooksManagerType } from '../../../src/components/githooksmanager';

describe('Lefthook', () => {
  it('has a config file', () => {
    // Arrange
    const project = new GitHooksEnabledProject({
      name: 'test',
      defaultReleaseBranch: 'main',
      prettier: true,
      gitHooksManager: GitHooksManagerType.LEFTHOOK,
    });

    // Act
    const snapshot = synthSnapshot(project);
    const config = snapshot['lefthook.yml'];

    // Assert
    expect(config).toEqual(`# ~~ Generated by projen. To modify, edit .projenrc.js and run "npx projen".

pre-commit:
  commands:
    - markdown-prettier:
        run: npx prettier --write --prose-wrap always {staged_files}
        glob: "*.md"
    - eslint:
        run: eslint --cache --fix {staged_files}
        glob: src/**/*.{ts,tsx}
    - prettier:
        run: npx prettier --write {staged_files}
        glob: src/**/*.{ts,tsx}
`);
  });
});
