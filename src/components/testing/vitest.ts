import { Component, SampleFile, type Project } from "projen";
import { NodePackageManager, NodeProject } from "projen/lib/javascript";
import { GitClientHook, Husky, Lefthook } from "../githooks-manager";

export interface VitestOptions {
  /** Enable coverage collection. Defaults to true. */
  readonly coverage?: boolean;
  /** Coverage provider. Defaults to 'v8'. */
  readonly coverageProvider?: "v8" | "istanbul";
}

const VITEST_CONFIG_CONTENT = `import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    include: ["src/**/*.test.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov"],
    },
  },
});
`;

export class Vitest extends Component {
  public static of(project: Project): Vitest | undefined {
    const singleton = (c: Component): c is Vitest => c instanceof Vitest;
    return project.components.find(singleton);
  }

  constructor(project: NodeProject, options: VitestOptions = {}) {
    super(project);

    project.addDevDeps("vitest");

    const { coverage = true, coverageProvider = "v8" } = options;
    if (coverage) {
      project.addDevDeps(`@vitest/coverage-${coverageProvider}`);
    }

    const yarnManagers = [
      NodePackageManager.YARN,
      NodePackageManager.YARN2,
      NodePackageManager.YARN_CLASSIC,
      NodePackageManager.YARN_BERRY,
    ];
    const script = yarnManagers.includes(project.package.packageManager) ? "yarn test" : "npm run test";

    Husky.of(project)?.createHook(GitClientHook.PRE_PUSH, [script]);
    Lefthook.of(project)?.addCommand(GitClientHook.PRE_PUSH, {
      name: "test",
      run: script,
      stagedFiles: false,
    });
  }

  preSynthesize(): void {
    new SampleFile(this.project, "vitest.config.ts", {
      contents: VITEST_CONFIG_CONTENT,
    });

    const tasksJson = this.project.tryFindObjectFile(".projen/tasks.json");
    tasksJson?.addOverride("tasks.test.steps", [
      {
        exec: "vitest run",
        receiveArgs: true,
      },
    ]);
  }
}
