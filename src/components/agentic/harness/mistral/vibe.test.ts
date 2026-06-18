import { Project } from "projen";
import { synthSnapshot } from "projen/lib/util/synth";
import { describe, expect, it, vi } from "vitest";
import { McpServer } from "../../mcp";
import { MistralVibe } from "./vibe";

describe("MistralVibe", () => {
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

	describe("install task", () => {
		it("creates vibe:install task", () => {
			const project = new Project({ name: "test" });
			new MistralVibe(project);
			const snapshot = synthSnapshot(project);
			expect(
				snapshot[".projen/tasks.json"].tasks["vibe:install"],
			).toBeDefined();
		});

		it("install task runs the install-binary step with idempotency guard", () => {
			const project = new Project({ name: "test" });
			new MistralVibe(project);
			const snapshot = synthSnapshot(project);
			const steps = snapshot[".projen/tasks.json"].tasks["vibe:install"].steps;
			expect(steps[0].name).toBe("install-binary");
			expect(steps[0].exec).toContain("command -v vibe");
			expect(steps[0].exec).toContain("@mistralai/vibe");
		});
	});

	describe("postSynthesize", () => {
		it("creates a symlink when the context file does not exist", () => {
			const existsSync = vi.fn().mockReturnValue(false);
			const symlinkSync = vi.fn();

			const project = new Project({ name: "test" });
			const mv = new MistralVibe(project);
			mv._postSynthesize({ existsSync, symlinkSync });

			expect(symlinkSync).toHaveBeenCalledWith(
				"AGENTS.md",
				expect.stringContaining("VIBE.md"),
			);
		});

		it("does nothing when the context file already exists as a symlink", () => {
			const existsSync = vi.fn().mockReturnValue(true);
			const lstatSync = vi.fn().mockReturnValue({ isSymbolicLink: () => true });
			const symlinkSync = vi.fn();

			const project = new Project({ name: "test" });
			const mv = new MistralVibe(project);
			mv._postSynthesize({ existsSync, lstatSync, symlinkSync });

			expect(symlinkSync).not.toHaveBeenCalled();
		});

		it("does nothing when the context file exists but is not a symlink", () => {
			const existsSync = vi.fn().mockReturnValue(true);
			const lstatSync = vi
				.fn()
				.mockReturnValue({ isSymbolicLink: () => false });
			const symlinkSync = vi.fn();

			const project = new Project({ name: "test" });
			const mv = new MistralVibe(project);
			mv._postSynthesize({ existsSync, lstatSync, symlinkSync });

			expect(symlinkSync).not.toHaveBeenCalled();
		});
	});
});
