import { GitHooksManagerType } from "@thoroc/githooks-manager";
import { GitHooksEnabledProject } from "@thoroc/projen-typescript-git-hooks";
import { synthSnapshot } from "projen/lib/util/synth";
import { describe, expect, it } from "vitest";
import * as yaml from "yaml";
import type { PrettierSortImportsOptions } from "./prettier-sort-imports-options";

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
					exec: 'npx prettier --write "{src,projenrc}/**/*.ts"',
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
		expect(config["*.md"]).toContain(
			"npx prettier --write --prose-wrap always",
		);
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
		expect(Object.keys(config)).toContain("src/**/*.ts");
		expect(Object.keys(config)).toContain("*.md");
		expect(config["src/**/*.ts"]).toContain("npx prettier --write");
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

		// Assert
		expect(commands["markdown-prettier"]).toEqual({
			run: "npx prettier --write --prose-wrap always {staged_files}",
			glob: "*.md",
			stage_fixed: true,
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

		// Assert
		expect(commands.prettier).toEqual({
			run: "npx prettier --write {staged_files}",
			glob: "src/**/*.ts",
			stage_fixed: true,
		});
	});
});

describe("PrettierSortImports", () => {
	const makeProject = (sortImportsOptions?: PrettierSortImportsOptions) =>
		new GitHooksEnabledProject({
			name: "test",
			defaultReleaseBranch: "main",
			prettier: true,
			prettierSortImportsOptions: sortImportsOptions,
		});

	it("does not add plugin when prettierSortImportsOptions is omitted", () => {
		const snapshot = synthSnapshot(makeProject());
		expect(snapshot[".prettierrc.json"].plugins).toBeUndefined();
	});

	it("adds @trivago/prettier-plugin-sort-imports as devDependency", () => {
		const snapshot = synthSnapshot(makeProject({}));
		expect(Object.keys(snapshot["package.json"].devDependencies)).toContain(
			"@trivago/prettier-plugin-sort-imports",
		);
	});

	it("adds plugin entry to prettier config", () => {
		const snapshot = synthSnapshot(makeProject({}));
		expect(snapshot[".prettierrc.json"].plugins).toContain(
			"@trivago/prettier-plugin-sort-imports",
		);
	});

	it("uses default importOrder when none specified", () => {
		const snapshot = synthSnapshot(makeProject({}));
		expect(snapshot[".prettierrc.json"].importOrder).toEqual([
			"<THIRD_PARTY_MODULES>",
			"^[./]",
		]);
	});

	it("uses custom importOrder when specified", () => {
		const order = ["^@myorg/(.*)$", "^@(.*)$", "^[./]"];
		const snapshot = synthSnapshot(makeProject({ importOrder: order }));
		expect(snapshot[".prettierrc.json"].importOrder).toEqual(order);
	});

	it("defaults importOrderSeparation to true", () => {
		const snapshot = synthSnapshot(makeProject({}));
		expect(snapshot[".prettierrc.json"].importOrderSeparation).toBe(true);
	});

	it("respects importOrderSeparation: false", () => {
		const snapshot = synthSnapshot(
			makeProject({ importOrderSeparation: false }),
		);
		expect(snapshot[".prettierrc.json"].importOrderSeparation).toBe(false);
	});

	it("defaults importOrderSortSpecifiers to true", () => {
		const snapshot = synthSnapshot(makeProject({}));
		expect(snapshot[".prettierrc.json"].importOrderSortSpecifiers).toBe(true);
	});

	it("does not set importOrderCaseInsensitive when omitted", () => {
		const snapshot = synthSnapshot(makeProject({}));
		expect(
			snapshot[".prettierrc.json"].importOrderCaseInsensitive,
		).toBeUndefined();
	});

	it("sets importOrderCaseInsensitive when specified", () => {
		const snapshot = synthSnapshot(
			makeProject({ importOrderCaseInsensitive: true }),
		);
		expect(snapshot[".prettierrc.json"].importOrderCaseInsensitive).toBe(true);
	});
});
