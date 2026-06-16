import { GitHooksManagerType } from "@thoroc/githooks-manager";
import { GitHooksEnabledProject } from "@thoroc/projen-typescript-git-hooks";
import { synthSnapshot } from "projen/lib/util/synth";
import * as yaml from "yaml";

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
			run: "biome check --write {staged_files}",
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
		expect(config["src/**/*.ts"]).toContain("biome check --write");
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
