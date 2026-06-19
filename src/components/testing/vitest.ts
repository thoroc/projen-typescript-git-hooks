import { Component, type Project, SampleFile } from "projen";
import type { NodeProject } from "projen/lib/javascript";
import { GitClientHook, GitHooksManager } from "../githooks-manager";
import { runTest } from "./run-test";

export interface VitestOptions {
	/** Enable coverage collection. Defaults to true. */
	readonly coverage?: boolean;
	/** Coverage provider. Defaults to 'v8'. */
	readonly coverageProvider?: "v8" | "istanbul";
}

const VITEST_CONFIG_CONTENT = `import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [tsconfigPaths({ projects: ["./tsconfig.dev.json"] })],
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

		project.addDevDeps("vitest", "vite-tsconfig-paths");

		const { coverage = true, coverageProvider = "v8" } = options;
		if (coverage) {
			project.addDevDeps(`@vitest/coverage-${coverageProvider}`);
		}

		GitHooksManager.of(project)?.addHook(
			GitClientHook.PRE_PUSH,
			runTest(project.package.packageManager),
		);
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
