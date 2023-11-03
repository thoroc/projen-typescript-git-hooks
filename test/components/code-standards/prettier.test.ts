import { synthSnapshot } from "projen/lib/util/synth";
import { GitHooksEnabledProject, GitHooksManagerType } from "../../../src";

describe("Custom Prettier", () => {
  let project: GitHooksEnabledProject;

  beforeEach(() => {
    project = new GitHooksEnabledProject({
      name: "test",
      defaultReleaseBranch: "main",
      prettier: true,
      gitHooksManager: GitHooksManagerType.HUSKY,
    });
  });

  it("Adds new dev dependencie", () => {
    // Arrange

    // Act
    const snapshot = synthSnapshot(project);
    const config = snapshot["package.json"].devDependencies;

    // Assert
    expect(Object.keys(config)).toContain("@types/prettier");
  });

  it("Adds new format Task", () => {
    // Arrange

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
          exec: 'npx prettier --write "{src,projenrc}/**/*.ts"',
        },
      ],
    });
    expect(packageJson.scripts.format).toEqual("npx projen format");
  });

  it("Adds new format:markdown Task", () => {
    // Arrange

    // Act
    const snapshot = synthSnapshot(project);
    const config = snapshot[".projen/tasks.json"];
    const packageJson = snapshot["package.json"];

    // Assert
    expect(config.tasks["format:markdown"]).toEqual({
      name: "format:markdown",
      description: "Runs Prettier on Markdown",
      steps: [
        {
          exec: "npx prettier --write --prose-wrap always *.md",
        },
      ],
    });
    expect(packageJson.scripts["format:markdown"]).toEqual("npx projen format:markdown");
  });

  it("Adds files to be ignored", () => {
    // Arrange

    // Act
    const snapshot = synthSnapshot(project);
    const config = snapshot[".prettierignore"];

    console.log(config);

    // Assert
    expect(config).toContain("tsconfig.dev.json");
    expect(config).toContain("tsconfig.json");
    expect(config).toContain("node_modules");
    expect(config).toContain("build");
    expect(config).toContain("coverage");
    expect(config).toContain(".github/*");
  });
});
