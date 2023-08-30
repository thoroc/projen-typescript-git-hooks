import { synthSnapshot } from "projen/lib/util/synth";
import { GitHooksEnabledProject } from "../../../../src";
import { GitHooksManagerType, Husky } from "../../../../src/components/githooksmanager";
import { LintStaged } from "../../../../src/components/githooksmanager/utils/lintstaged";

describe("Husky", () => {
  it("Retuns a singleton", () => {
    // Arrange
    const project = new GitHooksEnabledProject({
      name: "test",
      defaultReleaseBranch: "main",
      gitHooksManager: GitHooksManagerType.HUSKY,
    });

    // Act
    const lintStaged = (project.gitHooksManager as Husky).lintStaged;

    // Assert
    expect(lintStaged).toEqual(LintStaged.of(project));
  });

  it("Adds new dev dependencies", () => {
    // Arrange
    const project = new GitHooksEnabledProject({
      name: "test",
      defaultReleaseBranch: "main",
      gitHooksManager: GitHooksManagerType.HUSKY,
    });

    // Act
    const snapshot = synthSnapshot(project);
    const config = snapshot["package.json"].devDependencies;

    // Assert
    expect(Object.keys(config)).toContain("lint-staged");
  });
});
