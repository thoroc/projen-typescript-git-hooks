import { synthSnapshot } from "projen/lib/util/synth";
import * as yaml from "yaml";
import { GitHooksEnabledProject } from "../../../src";
import { GitHooksManagerType, ILefthookCommand } from "../../../src/components/githooksmanager";

describe("Custom Prettier", () => {
  const markdownGlob = "*.md";
  const markdownCommand = "npx prettier --write --prose-wrap always";

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
    const commands = config[0].commands;
    const prettierCommands = commands.filter((command: ILefthookCommand) => command.name === "prettier");
    const markdownConfig = prettierCommands.find(
      (command: ILefthookCommand) => command.glob === markdownGlob,
    );

    // Assert
    expect(markdownConfig.run).toEqual(markdownCommand);
  });
});
