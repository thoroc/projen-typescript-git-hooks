import { synthSnapshot } from "projen/lib/util/synth";
import { describe, expect, it } from "vitest";
import * as yaml from "yaml";
import { GitHooksEnabledProject } from "../../typescript/githooks-enabled-project";
import { GitHooksManagerType } from "../githooks-manager";

describe("Biome", () => {
	it("adds @biomejs/biome as a dev dependency", () => {
		const project = new GitHooksEnabledProject({
			name: "test",
			defaultReleaseBranch: "main",
			biome: true,
			gitHooksManager: GitHooksManagerType.LEFTHOOK,
		});

		const snapshot = synthSnapshot(project);
		const deps = snapshot["package.json"].devDependencies;

		expect(Object.keys(deps)).toContain("@biomejs/biome");
	});

	it("generates a biome.json config file", () => {
		const project = new GitHooksEnabledProject({
			name: "test",
			defaultReleaseBranch: "main",
			biome: true,
		});

		const snapshot = synthSnapshot(project);

		expect(snapshot["biome.jsonc"]).toBeDefined();
	});

	it("adds a biome task", () => {
		const project = new GitHooksEnabledProject({
			name: "test",
			defaultReleaseBranch: "main",
			biome: true,
		});

		const snapshot = synthSnapshot(project);

		expect(snapshot[".projen/tasks.json"].tasks.biome).toBeDefined();
	});

	it("adds a pre-commit biome command with lefthook enabled", () => {
		const project = new GitHooksEnabledProject({
			name: "test",
			defaultReleaseBranch: "main",
			biome: true,
			gitHooksManager: GitHooksManagerType.LEFTHOOK,
		});

		const snapshot = synthSnapshot(project);
		const config = yaml.parse(snapshot["lefthook.yml"]);
		const commands = config["pre-commit"].commands;

		expect(commands.biome).toEqual({
			glob: "src/**/*.ts",
			run: "bunx biome check --write {staged_files}",
			stage_fixed: true,
		});
	});

	it("adds a lint-staged rule with husky enabled", () => {
		const project = new GitHooksEnabledProject({
			name: "test",
			defaultReleaseBranch: "main",
			biome: true,
			gitHooksManager: GitHooksManagerType.HUSKY,
		});

		const snapshot = synthSnapshot(project);
		const config = snapshot["package.json"]["lint-staged"];

		expect(Object.keys(config)).toContain("src/**/*.ts");
		expect(config["src/**/*.ts"]).toContain("bunx biome check --write");
	});

	it("does not add eslint or prettier when biome is enabled", () => {
		const project = new GitHooksEnabledProject({
			name: "test",
			defaultReleaseBranch: "main",
			biome: true,
		});

		const snapshot = synthSnapshot(project);
		const deps = snapshot["package.json"].devDependencies;

		expect(Object.keys(deps)).not.toContain("eslint");
		expect(Object.keys(deps)).not.toContain("prettier");
	});
});
