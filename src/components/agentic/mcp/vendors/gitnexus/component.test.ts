import { Project } from "projen";
import { synthSnapshot } from "projen/lib/util/synth";
import { describe, expect, it } from "vitest";
import { ClaudeCode, GeminiCli, OpenAICodex, OpenCode } from "../../../harness";
import { McpConfig } from "../..";
import { GitNexusMcpServer } from "./component";

describe("GitNexusMcpServer", () => {
	it("returns undefined when not present on project", () => {
		const project = new Project({ name: "test" });
		expect(GitNexusMcpServer.of(project)).toBeUndefined();
	});

	it("returns the instance when present on project", () => {
		const project = new Project({ name: "test" });
		const s = new GitNexusMcpServer(project);
		expect(GitNexusMcpServer.of(project)).toBe(s);
	});

	it("creates McpConfig with gitnexus server when none exists", () => {
		const project = new Project({ name: "test" });
		new GitNexusMcpServer(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot[".mcp.json"].mcpServers.gitnexus).toEqual({
			command: "npx",
			args: ["-y", "gitnexus@latest", "mcp"],
		});
	});

	it("registers with existing McpConfig", () => {
		const project = new Project({ name: "test" });
		new McpConfig(project, { servers: [] });
		new GitNexusMcpServer(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot[".mcp.json"].mcpServers.gitnexus).toBeDefined();
	});

	it("adds server to ClaudeCode mcpServers when ClaudeCode is present", () => {
		const project = new Project({ name: "test" });
		new ClaudeCode(project);
		new GitNexusMcpServer(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot[".claude/settings.json"].mcpServers?.gitnexus).toEqual({
			command: "npx",
			args: ["-y", "gitnexus@latest", "mcp"],
		});
	});

	it("does not create ClaudeCode when it is absent", () => {
		const project = new Project({ name: "test" });
		new GitNexusMcpServer(project);
		expect(ClaudeCode.of(project)).toBeUndefined();
	});

	it("adds server to GeminiCli mcpServers when GeminiCli is present", () => {
		const project = new Project({ name: "test" });
		new GeminiCli(project);
		new GitNexusMcpServer(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot[".gemini/settings.json"].mcpServers?.gitnexus).toEqual({
			command: "npx",
			args: ["-y", "gitnexus@latest", "mcp"],
		});
	});

	it("does not create GeminiCli when it is absent", () => {
		const project = new Project({ name: "test" });
		new GitNexusMcpServer(project);
		expect(GeminiCli.of(project)).toBeUndefined();
	});

	it("adds server to OpenAICodex mcp_servers when OpenAICodex is present", () => {
		const project = new Project({ name: "test" });
		new OpenAICodex(project);
		new GitNexusMcpServer(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot[".codex/config.toml"]).toContain("gitnexus");
	});

	it("adds server to OpenCode mcp when OpenCode is present", () => {
		const project = new Project({ name: "test" });
		new OpenCode(project);
		new GitNexusMcpServer(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot["opencode.jsonc"].mcp?.gitnexus).toBeDefined();
	});
});
