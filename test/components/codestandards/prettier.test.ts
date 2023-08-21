import * as yaml from 'yaml';
import { GitHooksEnabledProject } from "../../../src";
import { GitHooksManagerType, LefthookCommand } from "../../../src/components/githooksmanager";
import { synthSnapshot } from 'projen/lib/util/synth';



describe("Custom Prettier", () => {
  const markdownGlob: string = "*.md";
  const markdownCommand: string = "npx prettier --write --prose-wrap always";

  test("new DevDeps added", () => {
    // Arrange
    const project = new GitHooksEnabledProject({
      name: "test",
      defaultReleaseBranch: "main",
      prettier: true,
      gitHooksManager: GitHooksManagerType.HUSKY,
    });

    // Act
    const snapshot = synthSnapshot(project);
    const config = snapshot["package.json"]["devDependencies"];

    // Assert
    expect(Object.keys(config)).toContain("@types/prettier");
  });

  test("new Task added", () => {
    // Arrange
    const project = new GitHooksEnabledProject({
      name: "test",
      defaultReleaseBranch: "main",
      prettier: true,
      gitHooksManager: GitHooksManagerType.HUSKY,
    });

    // Act
    const snapshot = synthSnapshot(project);
    const config = snapshot["package.json"]["scripts"];

    // Assert
    expect(Object.keys(config)).toContain("format");
    expect(config["format"]).toEqual("npx projen format");
  });

  test("Husky Project: new lint-staged rule", () => {
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

  test("Lefthook Project: new rule", () => {
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
    const commands = config[0]["commands"];
    const prettierCommands = commands.filter((command: LefthookCommand) => command.name === "prettier");
    const markdownConfig = prettierCommands.find((command: LefthookCommand) => command.glob === markdownGlob);

    // Assert
    expect(markdownConfig["run"]).toEqual(markdownCommand);
  });
});