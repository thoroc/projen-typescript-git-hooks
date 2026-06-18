import { Project } from "projen";
import { synthSnapshot } from "projen/lib/util/synth";
import { describe, expect, it, vi } from "vitest";
import { McpServer } from "../../mcp";
import { OpenCode } from "./component";

describe("OpenCode", () => {
	it("returns undefined when not present on project", () => {
		const project = new Project({ name: "test" });
		expect(OpenCode.of(project)).toBeUndefined();
	});

	it("returns the instance when present on project", () => {
		const project = new Project({ name: "test" });
		const oc = new OpenCode(project);
		expect(OpenCode.of(project)).toBe(oc);
	});

	it("creates opencode.jsonc with schema only when no options given", () => {
		const project = new Project({ name: "test" });
		new OpenCode(project);
		const snapshot = synthSnapshot(project);
		const settings = snapshot["opencode.jsonc"];
		expect(settings.$schema).toBe("https://opencode.ai/config.json");
		expect(settings.model).toBeUndefined();
		expect(settings.autoupdate).toBeUndefined();
		expect(settings.permission).toBeUndefined();
		expect(settings.mcp).toBeUndefined();
	});

	it("creates AGENTS.md when instantiated", () => {
		const project = new Project({ name: "test" });
		new OpenCode(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot["AGENTS.md"]).toBeDefined();
	});

	it("includes model when provided", () => {
		const project = new Project({ name: "test" });
		new OpenCode(project, { model: "anthropic/claude-opus-4-5" });
		const snapshot = synthSnapshot(project);
		expect(snapshot["opencode.jsonc"].model).toBe("anthropic/claude-opus-4-5");
	});

	it("includes autoupdate when provided", () => {
		const project = new Project({ name: "test" });
		new OpenCode(project, { autoupdate: false });
		const snapshot = synthSnapshot(project);
		expect(snapshot["opencode.jsonc"].autoupdate).toBe(false);
	});

	it("includes permission when provided", () => {
		const project = new Project({ name: "test" });
		new OpenCode(project, { permission: { bash: "allow", network: "deny" } });
		const snapshot = synthSnapshot(project);
		expect(snapshot["opencode.jsonc"].permission).toEqual({
			bash: "allow",
			network: "deny",
		});
	});

	it("includes mcp when mcpServers provided", () => {
		const project = new Project({ name: "test" });
		new OpenCode(project, {
			mcpServers: [
				new McpServer("my-server", {
					command: "npx",
					args: ["-y", "my-mcp-server"],
				}),
			],
		});
		const snapshot = synthSnapshot(project);
		expect(snapshot["opencode.jsonc"].mcp).toEqual({
			"my-server": { type: "local", command: ["npx", "-y", "my-mcp-server"] },
		});
	});

	it("does not include mcp when none provided", () => {
		const project = new Project({ name: "test" });
		new OpenCode(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot["opencode.jsonc"].mcp).toBeUndefined();
	});

	it("addPlugin adds plugin", () => {
		const project = new Project({ name: "test" });
		const oc = new OpenCode(project);
		oc.addPlugin("my-plugin");
		const snapshot = synthSnapshot(project);
		expect(snapshot["opencode.jsonc"].plugin).toContain("my-plugin");
	});

	it("does not include plugin when none added", () => {
		const project = new Project({ name: "test" });
		new OpenCode(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot["opencode.jsonc"].plugin).toBeUndefined();
	});

	describe("install task", () => {
		it("creates opencode:install task", () => {
			const project = new Project({ name: "test" });
			new OpenCode(project);
			const snapshot = synthSnapshot(project);
			expect(
				snapshot[".projen/tasks.json"].tasks["opencode:install"],
			).toBeDefined();
		});

		it("install task runs the install-binary step with idempotency guard", () => {
			const project = new Project({ name: "test" });
			new OpenCode(project);
			const snapshot = synthSnapshot(project);
			const steps =
				snapshot[".projen/tasks.json"].tasks["opencode:install"].steps;
			expect(steps[0].name).toBe("install-binary");
			expect(steps[0].exec).toContain("command -v opencode");
			expect(steps[0].exec).toContain("npm install -g opencode");
		});
	});

	describe("postSynthesize", () => {
		it("creates a symlink when the context file does not exist", () => {
			const existsSync = vi.fn().mockReturnValue(false);
			const symlinkSync = vi.fn();

			const project = new Project({ name: "test" });
			const oc = new OpenCode(project);
			oc._postSynthesize({ existsSync, symlinkSync });

			expect(symlinkSync).toHaveBeenCalledWith(
				"AGENTS.md",
				expect.stringContaining("OPENCODE.md"),
			);
		});

		it("does nothing when the context file already exists as a symlink", () => {
			const existsSync = vi.fn().mockReturnValue(true);
			const lstatSync = vi.fn().mockReturnValue({ isSymbolicLink: () => true });
			const symlinkSync = vi.fn();

			const project = new Project({ name: "test" });
			const oc = new OpenCode(project);
			oc._postSynthesize({ existsSync, lstatSync, symlinkSync });

			expect(symlinkSync).not.toHaveBeenCalled();
		});

		it("does nothing when the context file exists but is not a symlink", () => {
			const existsSync = vi.fn().mockReturnValue(true);
			const lstatSync = vi
				.fn()
				.mockReturnValue({ isSymbolicLink: () => false });
			const symlinkSync = vi.fn();

			const project = new Project({ name: "test" });
			const oc = new OpenCode(project);
			oc._postSynthesize({ existsSync, lstatSync, symlinkSync });

			expect(symlinkSync).not.toHaveBeenCalled();
		});
	});
});
