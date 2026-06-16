import * as fs from "node:fs";
import { Project } from "projen";
import { synthSnapshot } from "projen/lib/util/synth";
import { afterEach, describe, expect, it, vi } from "vitest";
import { McpServer } from "../../mcp";
import { OpenCode } from "./component";

vi.mock("node:fs", async (importOriginal) => {
	const actual = await importOriginal<typeof import("node:fs")>();
	return {
		...actual,
		existsSync: vi.fn(),
		lstatSync: vi.fn(),
		symlinkSync: vi.fn(),
	};
});

describe("OpenCode", () => {
	afterEach(() => {
		vi.resetAllMocks();
	});

	it("returns undefined when not present on project", () => {
		const project = new Project({ name: "test" });
		expect(OpenCode.of(project)).toBeUndefined();
	});

	it("returns the instance when present on project", () => {
		const project = new Project({ name: "test" });
		const oc = new OpenCode(project);
		expect(OpenCode.of(project)).toBe(oc);
	});

	it("creates opencode.json with schema only when no options given", () => {
		const project = new Project({ name: "test" });
		new OpenCode(project);
		const snapshot = synthSnapshot(project);
		const settings = snapshot["opencode.json"];
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
		expect(snapshot["opencode.json"].model).toBe("anthropic/claude-opus-4-5");
	});

	it("includes autoupdate when provided", () => {
		const project = new Project({ name: "test" });
		new OpenCode(project, { autoupdate: false });
		const snapshot = synthSnapshot(project);
		expect(snapshot["opencode.json"].autoupdate).toBe(false);
	});

	it("includes permission when provided", () => {
		const project = new Project({ name: "test" });
		new OpenCode(project, { permission: { bash: "allow", network: "deny" } });
		const snapshot = synthSnapshot(project);
		expect(snapshot["opencode.json"].permission).toEqual({
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
		expect(snapshot["opencode.json"].mcp).toEqual({
			"my-server": { type: "local", command: ["npx", "-y", "my-mcp-server"] },
		});
	});

	it("does not include mcp when none provided", () => {
		const project = new Project({ name: "test" });
		new OpenCode(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot["opencode.json"].mcp).toBeUndefined();
	});

	it("addPlugin adds plugin", () => {
		const project = new Project({ name: "test" });
		const oc = new OpenCode(project);
		oc.addPlugin("my-plugin");
		const snapshot = synthSnapshot(project);
		expect(snapshot["opencode.json"].plugin).toContain("my-plugin");
	});

	it("does not include plugin when none added", () => {
		const project = new Project({ name: "test" });
		new OpenCode(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot["opencode.json"].plugin).toBeUndefined();
	});

	describe("postSynthesize", () => {
		it("creates a symlink when the context file does not exist", () => {
			vi.mocked(fs.existsSync).mockReturnValue(false);
			vi.mocked(fs.symlinkSync).mockImplementation(() => {});

			const project = new Project({ name: "test" });
			const oc = new OpenCode(project);
			oc.postSynthesize();

			expect(fs.symlinkSync).toHaveBeenCalledWith(
				"AGENTS.md",
				expect.stringContaining("OPENCODE.md"),
			);
		});

		it("does nothing when the context file already exists as a symlink", () => {
			vi.mocked(fs.existsSync).mockReturnValue(true);
			vi.mocked(fs.lstatSync).mockReturnValue({
				isSymbolicLink: () => true,
			} as ReturnType<typeof fs.lstatSync>);

			const project = new Project({ name: "test" });
			const oc = new OpenCode(project);
			oc.postSynthesize();

			expect(fs.symlinkSync).not.toHaveBeenCalled();
		});

		it("does nothing when the context file exists but is not a symlink", () => {
			vi.mocked(fs.existsSync).mockReturnValue(true);
			vi.mocked(fs.lstatSync).mockReturnValue({
				isSymbolicLink: () => false,
			} as ReturnType<typeof fs.lstatSync>);

			const project = new Project({ name: "test" });
			const oc = new OpenCode(project);
			oc.postSynthesize();

			expect(fs.symlinkSync).not.toHaveBeenCalled();
		});
	});
});
