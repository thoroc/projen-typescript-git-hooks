import * as fs from "fs";
import { Project } from "projen";
import { synthSnapshot } from "projen/lib/util/synth";
import { afterEach, describe, expect, it, vi } from "vitest";
import { AgentsMd } from "../../agents-md";
import { McpServer } from "../../mcp";
import { ClaudeCode } from "./claude-code";

vi.mock("fs", async (importOriginal) => {
	const actual = await importOriginal<typeof import("fs")>();
	return {
		...actual,
		existsSync: vi.fn(),
		lstatSync: vi.fn(),
		symlinkSync: vi.fn(),
	};
});

describe("ClaudeCode", () => {
	afterEach(() => {
		vi.resetAllMocks();
	});

	it("returns undefined when not present on project", () => {
		const project = new Project({ name: "test" });
		expect(ClaudeCode.of(project)).toBeUndefined();
	});

	it("returns the instance when present on project", () => {
		const project = new Project({ name: "test" });
		const cc = new ClaudeCode(project);
		expect(ClaudeCode.of(project)).toBe(cc);
	});

	it("creates .claude/settings.json with schema only when no options given", () => {
		const project = new Project({ name: "test" });
		new ClaudeCode(project);
		const snapshot = synthSnapshot(project);
		const settings = snapshot[".claude/settings.json"];
		expect(settings.$schema).toBe(
			"https://json.schemastore.org/claude-code-settings.json",
		);
		expect(settings.permissions).toBeUndefined();
		expect(settings.env).toBeUndefined();
		expect(settings.mcpServers).toBeUndefined();
	});

	it("includes permissions in settings when provided", () => {
		const project = new Project({ name: "test" });
		new ClaudeCode(project, {
			permissions: { allow: ["Bash"], deny: ["WebFetch"] },
		});
		const snapshot = synthSnapshot(project);
		const settings = snapshot[".claude/settings.json"];
		expect(settings.permissions).toEqual({
			allow: ["Bash"],
			deny: ["WebFetch"],
		});
	});

	it("includes env in settings when provided", () => {
		const project = new Project({ name: "test" });
		new ClaudeCode(project, { env: { MY_VAR: "value" } });
		const snapshot = synthSnapshot(project);
		const settings = snapshot[".claude/settings.json"];
		expect(settings.env).toEqual({ MY_VAR: "value" });
	});

	it("includes both permissions and env when both provided", () => {
		const project = new Project({ name: "test" });
		new ClaudeCode(project, {
			permissions: { allow: ["Bash"] },
			env: { TOKEN: "abc" },
		});
		const snapshot = synthSnapshot(project);
		const settings = snapshot[".claude/settings.json"];
		expect(settings.permissions).toEqual({ allow: ["Bash"] });
		expect(settings.env).toEqual({ TOKEN: "abc" });
	});

	it("creates AGENTS.md when instantiated", () => {
		const project = new Project({ name: "test" });
		new ClaudeCode(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot["AGENTS.md"]).toBeDefined();
	});

	it("includes mcpServers in settings when provided", () => {
		const project = new Project({ name: "test" });
		new ClaudeCode(project, {
			mcpServers: [
				new McpServer("my-server", {
					command: "npx",
					args: ["-y", "my-mcp-server"],
				}),
			],
		});
		const snapshot = synthSnapshot(project);
		expect(snapshot[".claude/settings.json"].mcpServers).toEqual({
			"my-server": { command: "npx", args: ["-y", "my-mcp-server"] },
		});
	});

	it("shares a McpServer instance across multiple harnesses", () => {
		const project = new Project({ name: "test" });
		const server = new McpServer("shared", {
			command: "npx",
			args: ["-y", "shared-mcp"],
		});
		new ClaudeCode(project, { mcpServers: [server] });
		const snapshot = synthSnapshot(project);
		expect(snapshot[".claude/settings.json"].mcpServers.shared).toBeDefined();
	});

	it("reuses existing AgentsMd when already present on project", () => {
		const project = new Project({ name: "test" });
		new AgentsMd(project);
		new ClaudeCode(project);
		const instances = project.components.filter((c) => c instanceof AgentsMd);
		expect(instances).toHaveLength(1);
	});

	describe("postSynthesize", () => {
		it("creates a symlink when the context file does not exist", () => {
			vi.mocked(fs.existsSync).mockReturnValue(false);
			vi.mocked(fs.symlinkSync).mockImplementation(() => {});

			const project = new Project({ name: "test" });
			const cc = new ClaudeCode(project);
			cc.postSynthesize();

			expect(fs.symlinkSync).toHaveBeenCalledWith(
				"AGENTS.md",
				expect.stringContaining("CLAUDE.md"),
			);
		});

		it("does nothing when the context file already exists as a symlink", () => {
			vi.mocked(fs.existsSync).mockReturnValue(true);
			vi.mocked(fs.lstatSync).mockReturnValue({
				isSymbolicLink: () => true,
			} as ReturnType<typeof fs.lstatSync>);

			const project = new Project({ name: "test" });
			const cc = new ClaudeCode(project);
			cc.postSynthesize();

			expect(fs.symlinkSync).not.toHaveBeenCalled();
		});

		it("does nothing when the context file exists but is not a symlink", () => {
			vi.mocked(fs.existsSync).mockReturnValue(true);
			vi.mocked(fs.lstatSync).mockReturnValue({
				isSymbolicLink: () => false,
			} as ReturnType<typeof fs.lstatSync>);

			const project = new Project({ name: "test" });
			const cc = new ClaudeCode(project);
			cc.postSynthesize();

			expect(fs.symlinkSync).not.toHaveBeenCalled();
		});
	});
});
