import { synthSnapshot } from "projen/lib/util/synth";
import { GitHooksEnabledProject } from "../../../src";
import { CodeOfConduct } from "../../../src/components/documentation";
import { GitHooksManagerType } from "../../../src/components/githooks-manager";

describe("CodeOfConduct", () => {
  it("adds CODE_OF_CONDUCT.md to .prettierignore when Prettier is present", () => {
    const project = new GitHooksEnabledProject({
      name: "test",
      defaultReleaseBranch: "main",
      gitHooksManager: GitHooksManagerType.LEFTHOOK,
    });
    new CodeOfConduct(project, { author: "test@example.com" });

    const snapshot = synthSnapshot(project);
    expect(snapshot[".prettierignore"]).toContain("CODE_OF_CONDUCT.md");
  });

  it("does not error when Prettier is absent", () => {
    const project = new GitHooksEnabledProject({
      name: "test",
      defaultReleaseBranch: "main",
      prettier: false,
      gitHooksManager: GitHooksManagerType.LEFTHOOK,
    });

    expect(() => new CodeOfConduct(project, { author: "test@example.com" })).not.toThrow();
  });
});
