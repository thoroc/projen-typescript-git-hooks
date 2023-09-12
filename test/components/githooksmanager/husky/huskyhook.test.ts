import { NodeProject } from "projen/lib/javascript";
import { synthSnapshot } from "projen/lib/util/synth";
import { GitClientHook } from "../../../../src";
import { HuskyHookFile } from "../../../../src/components/githooksmanager/husky/huskyhook";

describe("Husky hook file", () => {
  it("creates a new hook for Husky", () => {
    // Arrange
    const project = new NodeProject({
      name: "test",
      defaultReleaseBranch: "main",
    });
    const hook = GitClientHook.PRE_COMMIT;
    const command = "Something else";

    new HuskyHookFile(project, {
      hook: hook,
      command: command,
    });

    // Act
    const snapshot = synthSnapshot(project);
    const config = snapshot[`.husky/${hook}`];

    // Assert
    expect(config).toEqual(`#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\n\n${command}`);
  });
});
