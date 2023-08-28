import { synthSnapshot } from "projen/lib/util/synth";
import * as yaml from "yaml";
import { GitHooksEnabledProject } from "../../../src";
import { GitHooksManagerType } from "../../../src/components/githooksmanager";

describe("Custom Prettier", () => {
  const markdownGlob = "*.md";
  const markdownCommand = "npx prettier --write --prose-wrap always";
  const sourceCodeGlob = "src/**/*.{ts,tsx}";
  const sourceCodeCommand = "npx prettier --write";

  it("has new DevDeps added", () => {
    // Arrange
    const project = new GitHooksEnabledProject({
      name: "test",
      defaultReleaseBranch: "main",
      prettier: true,
      gitHooksManager: GitHooksManagerType.HUSKY,
    });

    // Act
    const snapshot = synthSnapshot(project);
    const config = snapshot["package.json"].devDependencies;

    // Assert
    expect(Object.keys(config)).toContain("@types/prettier");
  });

  it("has new Task added", () => {
    // Arrange
    const project = new GitHooksEnabledProject({
      name: "test",
      defaultReleaseBranch: "main",
      prettier: true,
      gitHooksManager: GitHooksManagerType.HUSKY,
    });

    // Act
    const snapshot = synthSnapshot(project);
    const config = snapshot["package.json"].scripts;

    // Assert
    expect(Object.keys(config)).toContain("format");
    expect(config.format).toEqual("npx projen format");
  });

  it("has new lint-staged rule with Husky enabled", () => {
    // Arrange
    const project = new GitHooksEnabledProject({
      name: "test",
      defaultReleaseBranch: "main",
      prettier: true,
      gitHooksManager: GitHooksManagerType.HUSKY,
    });

    // Act
    const snapshot = synthSnapshot(project);
    const config = snapshot["package.json"]["lint-staged"];

    // Assert
    expect(Object.keys(config)).toContain(markdownGlob);
    expect(config[markdownGlob]).toContain(markdownCommand);
  });

  it("has new rule with Lefthook enabled", () => {
    // Arrange
    const project = new GitHooksEnabledProject({
      name: "test",
      defaultReleaseBranch: "main",
      prettier: true,
      gitHooksManager: GitHooksManagerType.LEFTHOOK,
    });

    // Act
    const snapshot = synthSnapshot(project);
    const config = yaml.parse(snapshot["lefthook.yml"]);
    const commands = config["pre-commit"].commands;

    const prettierCommands = commands.filter((command: any) => {
      const keys = Object.keys(command);
      return keys[0] === "prettier";
    });

    const markdownConfig = prettierCommands.find((command: any) => {
      return command.prettier.glob === markdownGlob;
    });
    const sourceCodeConfig = prettierCommands.find((command: any) => {
      return command.prettier.glob === sourceCodeGlob;
    });

    // Assert
    expect(markdownConfig.prettier.run).toEqual(markdownCommand);
    expect(sourceCodeConfig.prettier.run).toEqual(sourceCodeCommand);
  });
});
