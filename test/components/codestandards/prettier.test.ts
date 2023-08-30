import { synthSnapshot } from "projen/lib/util/synth";
import * as yaml from "yaml";
import { GitHooksEnabledProject } from "../../../src";
import { GitHooksManagerType } from "../../../src/components/githooksmanager";

describe("Custom Prettier", () => {
  it("Adds new dev dependencie", () => {
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

  it("Adds new Task", () => {
    // Arrange
    const project = new GitHooksEnabledProject({
      name: "test",
      defaultReleaseBranch: "main",
      prettier: true,
      gitHooksManager: GitHooksManagerType.HUSKY,
    });

    // Act
    const snapshot = synthSnapshot(project);
    const config = snapshot[".projen/tasks.json"];
    const packageJson = snapshot["package.json"];

    // Assert
    expect(config.tasks.format).toEqual({
      name: "format",
      description: "Runs Prettier",
      steps: [
        {
          exec: 'npx prettier --write "{src,projenrc}/**/*.{js,jsx,ts,tsx}"',
        },
      ],
    });
    expect(packageJson.scripts.format).toEqual("npx projen format");
  });

  it("Adds new lint-staged rule for markdown with Husky enabled", () => {
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
    expect(Object.keys(config)).toContain("*.md");
    expect(config["*.md"]).toContain("npx prettier --write --prose-wrap always");
  });

  it("Adds new lint-staged rule for prettier with Husky enabled", () => {
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
    expect(Object.keys(config)).toContain("src/**/*.{ts,tsx}");
    expect(config["src/**/*.{ts,tsx}"]).toContain("npx prettier --write");
  });

  it("Adds new prec-commmit rule for markdown with Lefthook enabled", () => {
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

    const filteredCommands = commands.filter((command: any) => {
      const keys: any = Object.keys(command);
      return keys[0] === "markdown-prettier";
    });

    // Assert
    expect(filteredCommands[0]).toEqual({
      "markdown-prettier": {
        run: "npx prettier --write --prose-wrap always {staged_files}",
        glob: "*.md",
      },
    });
  });

  it("Adds new pre-commit rule for prettier with Lefthook enabled", () => {
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

    const filteredCommands = commands.filter((command: any) => {
      const keys: any = Object.keys(command);
      return keys[0] === "prettier";
    });

    // Assert
    expect(filteredCommands[0]).toEqual({
      prettier: {
        run: "npx prettier --write {staged_files}",
        glob: "src/**/*.{ts,tsx}",
      },
    });
  });
});
