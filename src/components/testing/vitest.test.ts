import { GitHooksManagerType } from "@thoroc/githooks-manager";
import { GitHooksEnabledProject } from "@thoroc/projen-typescript-git-hooks";
import { NodePackageManager } from "projen/lib/javascript";
import { synthSnapshot } from "projen/lib/util/synth";
import { describe, expect, it } from "vitest";
import { Vitest } from "./vitest";

const makeProject = (gitHooksManager = GitHooksManagerType.LEFTHOOK) =>
	new GitHooksEnabledProject({
		name: "test",
		defaultReleaseBranch: "main",
		jest: false,
		packageManager: NodePackageManager.NPM,
		gitHooksManager,
	});

describe("Vitest", () => {
	describe("devDependencies", () => {
		it("adds vitest", () => {
			const project = makeProject();
			new Vitest(project);

			const snapshot = synthSnapshot(project);
			expect(Object.keys(snapshot["package.json"].devDependencies)).toContain(
				"vitest",
			);
		});

		it("adds @vitest/coverage-v8 by default", () => {
			const project = makeProject();
			new Vitest(project);

			const snapshot = synthSnapshot(project);
			expect(Object.keys(snapshot["package.json"].devDependencies)).toContain(
				"@vitest/coverage-v8",
			);
		});

		it("adds @vitest/coverage-istanbul when coverageProvider is istanbul", () => {
			const project = makeProject();
			new Vitest(project, { coverageProvider: "istanbul" });

			const snapshot = synthSnapshot(project);
			const deps = Object.keys(snapshot["package.json"].devDependencies);
			expect(deps).toContain("@vitest/coverage-istanbul");
			expect(deps).not.toContain("@vitest/coverage-v8");
		});

		it("does not add coverage package when coverage is disabled", () => {
			const project = makeProject();
			new Vitest(project, { coverage: false });

			const snapshot = synthSnapshot(project);
			const deps = Object.keys(snapshot["package.json"].devDependencies);
			expect(deps).not.toContain("@vitest/coverage-v8");
			expect(deps).not.toContain("@vitest/coverage-istanbul");
		});
	});

	describe("config file", () => {
		it("generates vitest.config.ts", () => {
			const project = makeProject();
			new Vitest(project);

			const snapshot = synthSnapshot(project);
			expect(snapshot["vitest.config.ts"]).toBeDefined();
		});

		it("vitest.config.ts contains defineConfig import", () => {
			const project = makeProject();
			new Vitest(project);

			const snapshot = synthSnapshot(project);
			expect(snapshot["vitest.config.ts"]).toContain('from "vitest/config"');
		});
	});

	describe("test task", () => {
		it("overrides test steps to use vitest run", () => {
			const project = makeProject();
			new Vitest(project);

			const snapshot = synthSnapshot(project);
			const steps = snapshot[".projen/tasks.json"].tasks.test.steps;
			expect(steps).toContainEqual({ exec: "vitest run", receiveArgs: true });
		});
	});

	describe("git hooks", () => {
		it("adds pre-push hook with lefthook", () => {
			const project = makeProject(GitHooksManagerType.LEFTHOOK);
			new Vitest(project);

			const snapshot = synthSnapshot(project);
			const lefthook = snapshot["lefthook.yml"];
			expect(lefthook).toContain("pre-push");
			expect(lefthook).toContain("npm run test");
		});

		it("adds pre-push hook with husky", () => {
			const project = makeProject(GitHooksManagerType.HUSKY);
			new Vitest(project);

			const snapshot = synthSnapshot(project);
			expect(snapshot[".husky/pre-push"]).toContain("npm run test");
		});

		it("uses yarn test script for yarn package manager", () => {
			const project = new GitHooksEnabledProject({
				name: "test",
				defaultReleaseBranch: "main",
				jest: false,
				packageManager: NodePackageManager.YARN,
				gitHooksManager: GitHooksManagerType.HUSKY,
			});
			new Vitest(project);

			const snapshot = synthSnapshot(project);
			expect(snapshot[".husky/pre-push"]).toContain("yarn test");
		});
	});

	describe("singleton", () => {
		it("returns instance via of()", () => {
			const project = makeProject();
			const vitest = new Vitest(project);

			expect(Vitest.of(project)).toBe(vitest);
		});

		it("returns undefined when not added to project", () => {
			const project = makeProject();

			expect(Vitest.of(project)).toBeUndefined();
		});
	});
});
