import { synthSnapshot } from "projen/lib/util/synth";
import * as yaml from "yaml";
import { GitHooksEnabledProject } from "../../../../src";
import { GitHooksManagerType } from "../../../../src/components/githooks-manager";
import { Markdownlint } from "./component";

describe("Markdownlint", () => {
  it("creates a markdownlint.yml with default rules", () => {
    const project = new GitHooksEnabledProject({
      name: "test",
      defaultReleaseBranch: "main",
    });
    new Markdownlint(project);

    const snapshot = synthSnapshot(project);
    const config = yaml.parse(snapshot["markdownlint.yml"]);

    expect(config).toBeDefined();
    expect(config.md013).toMatchObject({ "line-length": 80 });
  });

  it("adds markdownlint-cli2 as a dev dependency", () => {
    const project = new GitHooksEnabledProject({
      name: "test",
      defaultReleaseBranch: "main",
    });
    new Markdownlint(project);

    const snapshot = synthSnapshot(project);
    const deps = snapshot["package.json"].devDependencies;

    expect(Object.keys(deps)).toContain("markdownlint-cli2");
  });

  it("creates a .markdownlintignore file by default", () => {
    const project = new GitHooksEnabledProject({
      name: "test",
      defaultReleaseBranch: "main",
    });
    new Markdownlint(project);

    const snapshot = synthSnapshot(project);

    expect(snapshot[".markdownlintignore"]).toBeDefined();
  });

  it("does not create .markdownlintignore when disabled", () => {
    const project = new GitHooksEnabledProject({
      name: "test",
      defaultReleaseBranch: "main",
    });
    new Markdownlint(project, { ignoreFile: false });

    const snapshot = synthSnapshot(project);

    expect(snapshot[".markdownlintignore"]).toBeUndefined();
  });

  it("adds a lint-staged rule for markdown with Husky enabled", () => {
    const project = new GitHooksEnabledProject({
      name: "test",
      defaultReleaseBranch: "main",
      gitHooksManager: GitHooksManagerType.HUSKY,
    });
    new Markdownlint(project);

    const snapshot = synthSnapshot(project);
    const lintStaged = snapshot["package.json"]["lint-staged"];

    expect(Object.keys(lintStaged)).toContain("*.md");
    expect(lintStaged["*.md"]).toContain("markdownlint-cli2 --fix");
  });

  it("returns the instance via Markdownlint.of()", () => {
    const project = new GitHooksEnabledProject({
      name: "test",
      defaultReleaseBranch: "main",
    });
    const markdownlint = new Markdownlint(project);

    expect(Markdownlint.of(project)).toBe(markdownlint);
  });

  it("returns undefined via Markdownlint.of() when not present", () => {
    const project = new GitHooksEnabledProject({
      name: "test",
      defaultReleaseBranch: "main",
    });

    expect(Markdownlint.of(project)).toBeUndefined();
  });

  it("addIgnorePattern adds pattern to .markdownlintignore", () => {
    const project = new GitHooksEnabledProject({
      name: "test",
      defaultReleaseBranch: "main",
    });
    const markdownlint = new Markdownlint(project);
    markdownlint.addIgnorePattern("docs/generated/**");

    const snapshot = synthSnapshot(project);

    expect(snapshot[".markdownlintignore"]).toContain("docs/generated/**");
  });

  it("preSynthesize adds SourceCode file paths to .markdownlintignore", () => {
    const project = new GitHooksEnabledProject({
      name: "test",
      defaultReleaseBranch: "main",
    });
    new Markdownlint(project);

    const snapshot = synthSnapshot(project);

    expect(snapshot[".markdownlintignore"]).toBeDefined();
  });
});
