import { synthSnapshot } from "projen/lib/util/synth";
import { GitHooksEnabledProject } from "../../../../src";
import { GitHooksManagerType, Husky, LintStaged } from "../../../../src/components/githooksmanager";

describe("Husky", () => {
  it("Retuns a singleton", () => {
    // Arrange
    const project = new GitHooksEnabledProject({
      name: "test",
      defaultReleaseBranch: "main",
      gitHooksManager: GitHooksManagerType.HUSKY,
    });

    // Act
    const lintStaged = (project.gitHooksManager as Husky).lintStaged;

    // Assert
    expect(lintStaged).toEqual(LintStaged.of(project));
  });

  it("Adds new dev dependencies", () => {
    // Arrange
    const project = new GitHooksEnabledProject({
      name: "test",
      defaultReleaseBranch: "main",
      gitHooksManager: GitHooksManagerType.HUSKY,
    });

    // Act
    const snapshot = synthSnapshot(project);
    const config = snapshot["package.json"].devDependencies;

    // Assert
    expect(Object.keys(config)).toContain("lint-staged");
  });

  it("Add new Rule with single Command", () => {
    // Arrange
    const project = new GitHooksEnabledProject({
      name: "test",
      defaultReleaseBranch: "main",
      gitHooksManager: GitHooksManagerType.HUSKY,
    });

    // Act
    const glob = "src/**/*.js";
    const command = "exe --fix";
    LintStaged.of(project)?.addRule({
      filePattern: glob,
      commands: command,
    });
    const snapshot = synthSnapshot(project);
    const config = snapshot["package.json"]["lint-staged"];

    expect(Object.keys(config)).toContain(glob);
    expect(config[glob]).toEqual(command);
  });

  it("Add new Rule with multiple Command", () => {
    // Arrange
    const project = new GitHooksEnabledProject({
      name: "test",
      defaultReleaseBranch: "main",
      gitHooksManager: GitHooksManagerType.HUSKY,
    });

    // Act
    const glob = "src/**/*.js";
    const commands = ["exe --fix", "bin --watch"];
    LintStaged.of(project)?.addRule({
      filePattern: glob,
      commands: commands,
    });
    const snapshot = synthSnapshot(project);
    const config = snapshot["package.json"]["lint-staged"];

    expect(Object.keys(config)).toContain(glob);
    expect(config[glob]).toEqual(commands);
  });

  it("Add new command to existing Rule", () => {
    // Arrange
    const project = new GitHooksEnabledProject({
      name: "test",
      defaultReleaseBranch: "main",
      eslint: false,
      prettier: false,
      gitHooksManager: GitHooksManagerType.HUSKY,
    });

    // Act
    const glob = "src/**/*.{ts,tsx}";
    LintStaged.of(project)?.addRule({
      filePattern: glob,
      commands: "initial command",
    });

    const command = "exe --fix";
    LintStaged.of(project)?.addRule({
      filePattern: glob,
      commands: command,
    });
    const snapshot = synthSnapshot(project);
    const config = snapshot["package.json"]["lint-staged"];

    expect(Object.keys(config)).toContain(glob);
    expect(config[glob].splice(-1)).toEqual([command]);
  });

  it("Add multiple new command to existing Rule", () => {
    // Arrange
    const project = new GitHooksEnabledProject({
      name: "test",
      defaultReleaseBranch: "main",
      eslint: false,
      prettier: false,
      gitHooksManager: GitHooksManagerType.HUSKY,
    });

    // Act
    const glob = "src/**/*.{ts,tsx}";
    LintStaged.of(project)?.addRule({
      filePattern: glob,
      commands: "initial command",
    });

    const commands = ["command one", "command two"];
    LintStaged.of(project)?.addRule({
      filePattern: glob,
      commands: commands,
    });
    const snapshot = synthSnapshot(project);
    const config = snapshot["package.json"]["lint-staged"];

    // Asssert
    expect(Object.keys(config)).toContain(glob);
    expect(config[glob]).toEqual(["initial command", ...commands]);
  });

  it("Add new commands to existing Rule created with Component", () => {
    // Arrange
    const glob = "src/**/*.{ts,tsx}";
    const initialRule = {
      filePattern: glob,
      commands: "initial command",
    };
    const project = new GitHooksEnabledProject({
      name: "test",
      defaultReleaseBranch: "main",
      eslint: false,
      prettier: false,
      gitHooksManager: GitHooksManagerType.HUSKY,
      gitHooksManagerOptions: {
        lintStagedOptions: {
          rules: [initialRule],
        },
      },
    });

    // Act
    const commands = ["command one", "command two"];
    LintStaged.of(project)?.addRule({
      filePattern: glob,
      commands: commands,
    });
    const snapshot = synthSnapshot(project);
    const config = snapshot["package.json"]["lint-staged"];

    // Asssert
    expect(Object.keys(config)).toContain(glob);
    expect(config[glob]).toEqual(["initial command", ...commands]);
  });
});
