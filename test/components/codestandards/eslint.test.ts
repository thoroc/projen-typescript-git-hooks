import { synthSnapshot } from "projen/lib/util/synth";
import * as yaml from "yaml";
import { GitHooksEnabledProject } from "../../../src";
import { Eslint } from "../../../src/components/codestandards";
import { GitHooksManagerType, LefthookCommandOptions } from "../../../src/components/githooksmanager";

describe("Custom Eslint", () => {
  it("Retuns a singleton", () => {
    // Arrange
    const project = new GitHooksEnabledProject({
      name: "test",
      defaultReleaseBranch: "main",
      eslint: true,
      prettier: false,
      gitHooksManager: GitHooksManagerType.HUSKY,
    });

    // Act
    const eslint = project.eslint;

    // Assert
    expect(eslint).toEqual(Eslint.of(project));
  });

  it("Adds new dev dependencies  - with prettier disabled", () => {
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

  it("Adds new dev dependencies - with prettier enabled", () => {
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

  it("Adds new extended - with prettier disabled", () => {
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

  it("Adds new extended - with prettier enabled", () => {
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

  it("Adds new pre-commit rule with husky enabled", () => {
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
    expect(Object.keys(config)).toContain("src/**/*.ts");
    expect(config["src/**/*.ts"]).toContain("eslint --cache --fix");
  });

  it("has new pre-commit rule with lefthook enabled", () => {
    // Arrange
    const project = new GitHooksEnabledProject({
      name: "test",
      defaultReleaseBranch: "main",
      eslint: true,
      prettier: true,
      gitHooksManager: GitHooksManagerType.LEFTHOOK,
    });

    // Act
    const snapshot = synthSnapshot(project);
    const config = yaml.parse(snapshot["lefthook.yml"]);
    const commands = config["pre-commit"].commands;

    const filteredCommands = commands.filter((command: LefthookCommandOptions) => {
      const keys: Array<string> = Object.keys(command);
      return keys[0] === "eslint";
    });

    // Assert
    expect(filteredCommands[0]).toEqual({
      eslint: {
        glob: "src/**/*.ts",
        run: "eslint --cache --fix {staged_files}",
      },
    });
  });
});
