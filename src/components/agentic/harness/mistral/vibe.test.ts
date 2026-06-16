import * as fs from "node:fs";
import { Project } from "projen";
import { synthSnapshot } from "projen/lib/util/synth";
import { afterEach, describe, expect, it, vi } from "vitest";
import { McpServer } from "../../mcp";
import { MistralVibe } from "./vibe";

vi.mock("node:fs", async (importOriginal) => {
	const actual = await importOriginal<typeof import("node:fs")>();
	return {
		...actual,
		existsSync: vi.fn(),
		lstatSync: vi.fn(),
		symlinkSync: vi.fn(),
	};
});

describe("MistralVibe", () => {
	afterEach(() => {
		vi.resetAllMocks();
	});

	it("returns undefined when not present on project", () => {
		const project = new Project({ name: "test" });
		expect(MistralVibe.of(project)).toBeUndefined();
	});

	it("returns the instance when present on project", () => {
		const project = new Project({ name: "test" });
		const mv = new MistralVibe(project);
		expect(MistralVibe.of(project)).toBe(mv);
	});

	it("creates .vibe/config.toml when instantiated", () => {
		const project = new Project({ name: "test" });
		new MistralVibe(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot[".vibe/config.toml"]).toBeDefined();
	});

	it("creates AGENTS.md when instantiated", () => {
		const project = new Project({ name: "test" });
		new MistralVibe(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot["AGENTS.md"]).toBeDefined();
	});

	it("includes model in config when provided", () => {
		const project = new Project({ name: "test" });
		new MistralVibe(project, { model: "mistral-large-latest" });
		const snapshot = synthSnapshot(project);
		expect(snapshot[".vibe/config.toml"]).toContain("model");
	});

	it("includes mcp_servers when mcpServers provided", () => {
		const project = new Project({ name: "test" });
		new MistralVibe(project, {
			mcpServers: [
				new McpServer("my-server", {
					command: "npx",
					args: ["-y", "my-mcp-server"],
				}),
			],
		});
		const snapshot = synthSnapshot(project);
		expect(snapshot[".vibe/config.toml"]).toContain("mcp_servers");
		expect(snapshot[".vibe/config.toml"]).toContain("my-server");
	});

	it("does not include mcp_servers when no mcpServers provided", () => {
		const project = new Project({ name: "test" });
		new MistralVibe(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot[".vibe/config.toml"]).not.toContain("mcp_servers");
	});

	describe("postSynthesize", () => {
		it("creates a symlink when the context file does not exist", () => {
			vi.mocked(fs.existsSync).mockReturnValue(false);
			vi.mocked(fs.symlinkSync).mockImplementation(() => {});

			const project = new Project({ name: "test" });
			const mv = new MistralVibe(project);
			mv.postSynthesize();

			expect(fs.symlinkSync).toHaveBeenCalledWith(
				"AGENTS.md",
				expect.stringContaining("VIBE.md"),
			);
		});

		it("does nothing when the context file already exists as a symlink", () => {
			vi.mocked(fs.existsSync).mockReturnValue(true);
			vi.mocked(fs.lstatSync).mockReturnValue({
				isSymbolicLink: () => true,
			} as ReturnType<typeof fs.lstatSync>);

			const project = new Project({ name: "test" });
			const mv = new MistralVibe(project);
			mv.postSynthesize();

			expect(fs.symlinkSync).not.toHaveBeenCalled();
		});

		it("does nothing when the context file exists but is not a symlink", () => {
			vi.mocked(fs.existsSync).mockReturnValue(true);
			vi.mocked(fs.lstatSync).mockReturnValue({
				isSymbolicLink: () => false,
			} as ReturnType<typeof fs.lstatSync>);

			const project = new Project({ name: "test" });
			const mv = new MistralVibe(project);
			mv.postSynthesize();

			expect(fs.symlinkSync).not.toHaveBeenCalled();
		});
	});
});
