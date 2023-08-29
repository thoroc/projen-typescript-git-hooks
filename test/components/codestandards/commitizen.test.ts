import { synthSnapshot } from "projen/lib/util/synth";
import { GitHooksEnabledProject } from "../../../src";
import { GitHooksManagerType } from "../../../src/components/githooksmanager";

describe("Commitizen Component", () => {
  it("has a new prepare-commit-message file", () => {
    // Arrange
    const project = new GitHooksEnabledProject({
      name: "test",
      defaultReleaseBranch: "main",
      prettier: true,
      gitHooksManager: GitHooksManagerType.HUSKY,
      gitHooksManagerOptions: { commitizen: true },
      debug: true,
    });

    // Act
    const snapshot = synthSnapshot(project);
    const config = snapshot[".husky/prepare-commit-message"];

    // Assert
    expect(config).toEqual(
      '#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\n\nexec < /dev/tty && ./node_nodules/.bin/cz --hook || true',
    );
  });
});
