import { Project } from "projen";
import { synthSnapshot } from "projen/lib/util/synth";
import { describe, expect, it } from "vitest";
import { ClaudeCode, GeminiCli, OpenAICodex, OpenCode } from "../../../harness";
import { McpConfig } from "../..";
import { AislopMcpServer } from "./component";
import { AislopConfig } from "./config";

describe("AislopMcpServer", () => {
	it("returns undefined when not present on project", () => {
		const project = new Project({ name: "test" });
		expect(AislopMcpServer.of(project)).toBeUndefined();
	});

	it("returns the instance when present on project", () => {
		const project = new Project({ name: "test" });
		const s = new AislopMcpServer(project);
		expect(AislopMcpServer.of(project)).toBe(s);
	});

	it("creates McpConfig with aislop server", () => {
		const project = new Project({ name: "test" });
		new AislopMcpServer(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot[".mcp.json"].mcpServers["aislop"]).toEqual({
			command: "npx",
			args: ["-y", "aislop-mcp"],
		});
	});

	it("registers with existing McpConfig", () => {
		const project = new Project({ name: "test" });
		new McpConfig(project, { servers: [] });
		new AislopMcpServer(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot[".mcp.json"].mcpServers["aislop"]).toBeDefined();
	});

	it("creates ClaudeCode when absent and adds MCP server and PostToolUse hook", () => {
		const project = new Project({ name: "test" });
		new AislopMcpServer(project);
		const snapshot = synthSnapshot(project);
		const settings = snapshot[".claude/settings.json"];
		expect(settings.mcpServers?.["aislop"]).toEqual({
			command: "npx",
			args: ["-y", "aislop-mcp"],
		});
		expect(settings.hooks?.PostToolUse).toBeDefined();
	});

	it("adds PostToolUse hook to existing ClaudeCode", () => {
		const project = new Project({ name: "test" });
		new ClaudeCode(project);
		new AislopMcpServer(project);
		const snapshot = synthSnapshot(project);
		const settings = snapshot[".claude/settings.json"];
		expect(settings.hooks?.PostToolUse[0].hooks[0].command).toBe(
			"aislop hook claude",
		);
	});

	it("PostToolUse hook has matcher for Edit, Write, and MultiEdit", () => {
		const project = new Project({ name: "test" });
		new AislopMcpServer(project);
		const snapshot = synthSnapshot(project);
		const postToolUse = snapshot[".claude/settings.json"].hooks.PostToolUse[0];
		expect(postToolUse.matcher).toContain("Edit");
		expect(postToolUse.matcher).toContain("Write");
		expect(postToolUse.matcher).toContain("MultiEdit");
	});

	it("adds MCP server to GeminiCli when present", () => {
		const project = new Project({ name: "test" });
		new GeminiCli(project);
		new AislopMcpServer(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot[".gemini/settings.json"].mcpServers?.["aislop"]).toEqual({
			command: "npx",
			args: ["-y", "aislop-mcp"],
		});
	});

	it("does not configure GeminiCli when it is absent", () => {
		const project = new Project({ name: "test" });
		new AislopMcpServer(project);
		expect(GeminiCli.of(project)).toBeUndefined();
	});

	it("adds MCP server to OpenAICodex when present", () => {
		const project = new Project({ name: "test" });
		new OpenAICodex(project);
		new AislopMcpServer(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot[".codex/config.toml"]).toContain("aislop");
	});

	it("does not configure OpenAICodex when it is absent", () => {
		const project = new Project({ name: "test" });
		new AislopMcpServer(project);
		expect(OpenAICodex.of(project)).toBeUndefined();
	});

	it("adds MCP server to OpenCode when present", () => {
		const project = new Project({ name: "test" });
		new OpenCode(project);
		new AislopMcpServer(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot["opencode.json"].mcp?.["aislop"]).toBeDefined();
	});

	it("does not configure OpenCode when it is absent", () => {
		const project = new Project({ name: "test" });
		new AislopMcpServer(project);
		expect(OpenCode.of(project)).toBeUndefined();
	});

	it("does not create AislopConfig when no config option is provided", () => {
		const project = new Project({ name: "test" });
		new AislopMcpServer(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot[".aislop/config.yml"]).toBeUndefined();
	});

	it("creates AislopConfig when config option is provided", () => {
		const project = new Project({ name: "test" });
		new AislopMcpServer(project, { config: { telemetry: { enabled: false } } });
		const snapshot = synthSnapshot(project);
		expect(snapshot[".aislop/config.yml"]).toContain("enabled: false");
	});

	it("uses existing AislopConfig when already present on project", () => {
		const project = new Project({ name: "test" });
		const existing = new AislopConfig(project, {
			telemetry: { enabled: true },
		});
		new AislopMcpServer(project, { config: { telemetry: { enabled: false } } });
		expect(AislopConfig.of(project)).toBe(existing);
	});
});
