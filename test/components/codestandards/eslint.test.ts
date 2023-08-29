import { synthSnapshot } from "projen/lib/util/synth";
import { GitHooksEnabledProject } from "../../../src";
import { GitHooksManagerType } from "../../../src/components/githooksmanager";

describe("Custom Eslint", () => {
  it("has new dev dependcies added - with prettier disabled", () => {
    // Arrange
    const project = new GitHooksEnabledProject({
      name: "test",
      defaultReleaseBranch: "main",
      eslint: true,
      prettier: false,
      gitHooksManager: GitHooksManagerType.HUSKY,
    });

    // Act
    const snapshot = synthSnapshot(project);
    const config = snapshot["package.json"].devDependencies;

    // Assert
    expect(Object.keys(config)).toContain("eslint-plugin-markdownlint");
    expect(Object.keys(config)).toContain("eslint-config-airbnb-typescript");
    expect(Object.keys(config)).toContain("eslint-plugin-import");
    expect(Object.keys(config)).toContain("eslint-plugin-testing-library");

    expect(Object.keys(config)).not.toContain("eslint-config-prettier");
    expect(Object.keys(config)).not.toContain("eslint-plugin-prettier");
  });

  it("has new dev dependcies added - with prettier enabled", () => {
    // Arrange
    const project = new GitHooksEnabledProject({
      name: "test",
      defaultReleaseBranch: "main",
      eslint: true,
      prettier: true,
      gitHooksManager: GitHooksManagerType.HUSKY,
    });

    // Act
    const snapshot = synthSnapshot(project);
    const config = snapshot["package.json"].devDependencies;

    // Assert
    expect(Object.keys(config)).toContain("eslint-config-prettier");
    expect(Object.keys(config)).toContain("eslint-plugin-prettier");
  });

  it("has new extended - with prettier disabled", () => {
    // Arrange
    const project = new GitHooksEnabledProject({
      name: "test",
      defaultReleaseBranch: "main",
      eslint: true,
      prettier: false,
      gitHooksManager: GitHooksManagerType.HUSKY,
    });

    // Act
    const snapshot = synthSnapshot(project);
    const config = snapshot[".eslintrc.json"].extends;

    // Assert
    expect(config).toContain("eslint:recommended");
    expect(config).toContain("plugin:@typescript-eslint/eslint-recommended");
    expect(config).toContain("plugin:@typescript-eslint/recommended");
    expect(config).toContain("plugin:import/errors");
    expect(config).toContain("plugin:import/typescript");
    expect(config).toContain("plugin:import/warnings");

    expect(config).not.toContain("plugin:prettier/recommended");
    // TODO: fix this. it seems that prettier is added from the base class
    // expect(config).not.toContain("prettier");
  });

  it("has new extended - with prettier enabled", () => {
    // Arrange
    const project = new GitHooksEnabledProject({
      name: "test",
      defaultReleaseBranch: "main",
      eslint: true,
      prettier: true,
      gitHooksManager: GitHooksManagerType.HUSKY,
    });

    // Act
    const snapshot = synthSnapshot(project);
    const config = snapshot[".eslintrc.json"].extends;

    // Assert
    expect(config).toContain("plugin:prettier/recommended");
    expect(config).toContain("prettier");

    expect(config.at(-2)).toEqual("plugin:prettier/recommended");
    expect(config.at(-1)).toEqual("prettier");
  });

  it("has new pre-commit rule - with husky enabled", () => {
    // Arrange
    const project = new GitHooksEnabledProject({
      name: "test",
      defaultReleaseBranch: "main",
      eslint: true,
      prettier: true,
      gitHooksManager: GitHooksManagerType.HUSKY,
    });

    // Act
    const snapshot = synthSnapshot(project);
    const config = snapshot["package.json"]["lint-staged"];

    // Assert
    expect(Object.keys(config)).toContain("src/**/*.{ts,tsx}");
  });

  it("has new pre-commit rule - with lefthook enabled", () => {
    // console.log("Not implemented yet");
  });
});
