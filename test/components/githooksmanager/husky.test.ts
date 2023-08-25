import { synthSnapshot } from "projen/lib/util/synth";
import { GitHooksEnabledProject } from "../../../src";
import { GitHooksManagerType } from "../../../src/components/githooksmanager";

describe("Husky", () => {
  it("has a new pre-commit file", () => {
    // Arrange
    const project = new GitHooksEnabledProject({
      name: "test",
      defaultReleaseBranch: "main",
      prettier: true,
      gitHooksManager: GitHooksManagerType.HUSKY,
    });

    // Act
    const snapshot = synthSnapshot(project);
    const config = snapshot[".husky/pre-commit"];

    // Assert
    expect(config).toEqual('#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\n\nnpx lint-staged');
  });

  it("has a new pre-push file", () => {
    // Arrange
    const project = new GitHooksEnabledProject({
      name: "test",
      defaultReleaseBranch: "main",
      prettier: true,
      gitHooksManager: GitHooksManagerType.HUSKY,
    });

    // Act
    const snapshot = synthSnapshot(project);
    const config = snapshot[".husky/pre-push"];

    // Assert
    expect(config).toEqual('#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\n\nnpx project test');
  });
});
