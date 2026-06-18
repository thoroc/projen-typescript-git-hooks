import { synthSnapshot } from "projen/lib/util/synth";
import { describe, expect, it } from "vitest";
import { GitHooksEnabledProject } from "../../typescript/githooks-enabled-project";
import { GitHooksManagerType } from "../githooks-manager";
import { Jest } from "./jest";

const makeProject = () =>
	new GitHooksEnabledProject({
		name: "test",
		defaultReleaseBranch: "main",
		jest: false,
		gitHooksManager: GitHooksManagerType.HUSKY,
	});

describe("Jest", () => {
	describe("constructor", () => {
		it("adds ts-jest and @types/jest as dev deps", () => {
			const project = makeProject();
			new Jest(project);
			const snapshot = synthSnapshot(project);
			const deps = Object.keys(snapshot["package.json"].devDependencies);
			expect(deps).toContain("ts-jest");
			expect(deps).toContain("@types/jest");
		});

		it("adds pre-push hook via husky", () => {
			const project = makeProject();
			new Jest(project);
			const snapshot = synthSnapshot(project);
			expect(snapshot[".husky/pre-push"]).toBeDefined();
		});
	});

	describe("preSynthesize — without configFilePath", () => {
		it("applies testPathIgnorePatterns under jest namespace in package.json", () => {
			const project = makeProject();
			new Jest(project);
			const snapshot = synthSnapshot(project);
			expect(snapshot["package.json"].jest?.testPathIgnorePatterns).toEqual([
				"/node_modules/",
				"/lib/",
			]);
		});

		it("applies ts-jest transform under jest namespace in package.json", () => {
			const project = makeProject();
			new Jest(project);
			const snapshot = synthSnapshot(project);
			expect(snapshot["package.json"].jest?.transform).toBeDefined();
		});
	});

	describe("preSynthesize — with configFilePath", () => {
		it("synthesizes without error when configFilePath is provided", () => {
			const project = makeProject();
			expect(() => {
				new Jest(project, { configFilePath: "jest.config.json" });
				synthSnapshot(project);
			}).not.toThrow();
		});

		it("applies testPathIgnorePatterns at root level in config file", () => {
			const project = makeProject();
			new Jest(project, { configFilePath: "jest.config.json" });
			const snapshot = synthSnapshot(project);
			expect(snapshot["jest.config.json"]?.testPathIgnorePatterns).toEqual([
				"/node_modules/",
				"/lib/",
			]);
		});

		it("applies ts-jest transform at root level in config file", () => {
			const project = makeProject();
			new Jest(project, { configFilePath: "jest.config.json" });
			const snapshot = synthSnapshot(project);
			expect(snapshot["jest.config.json"]?.transform).toBeDefined();
		});
	});
});
