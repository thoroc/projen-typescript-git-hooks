import { GitHooksEnabledProject } from "@thoroc/projen-typescript-git-hooks";
import { synthSnapshot } from "projen/lib/util/synth";
import { describe, expect, it } from "vitest";

describe("EditorConfig", () => {
	it("creates an .editorconfig file by default", () => {
		const project = new GitHooksEnabledProject({
			name: "test",
			defaultReleaseBranch: "main",
		});

		const snapshot = synthSnapshot(project);

		expect(snapshot[".editorconfig"]).toBeDefined();
	});

	it("does not create an .editorconfig file when disabled", () => {
		const project = new GitHooksEnabledProject({
			name: "test",
			defaultReleaseBranch: "main",
			editorConfig: false,
		});

		const snapshot = synthSnapshot(project);

		expect(snapshot[".editorconfig"]).toBeUndefined();
	});

	it("adds type-fest as a dependency", () => {
		const project = new GitHooksEnabledProject({
			name: "test",
			defaultReleaseBranch: "main",
		});

		const snapshot = synthSnapshot(project);
		const deps = snapshot["package.json"].dependencies;

		expect(Object.keys(deps)).toContain("type-fest");
	});

	it("sets root = true in the editorconfig", () => {
		const project = new GitHooksEnabledProject({
			name: "test",
			defaultReleaseBranch: "main",
		});

		const snapshot = synthSnapshot(project);
		const content: string = snapshot[".editorconfig"];

		expect(content).toContain("root = true");
	});
});
