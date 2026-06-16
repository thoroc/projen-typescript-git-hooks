import { Project } from "projen";
import { synthSnapshot } from "projen/lib/util/synth";
import { ClaudeCode } from "../claude-code";
import { GeminiCli } from "../gemini-cli";
import { McpConfig } from "../mcp-config";
import { OpenAICodex } from "../openai-codex";
import { OpenCode } from "../opencode";
import { ContextModeMcpServer } from "./context-mode";

describe("ContextModeMcpServer", () => {
	it("returns undefined when not present on project", () => {
		const project = new Project({ name: "test" });
		expect(ContextModeMcpServer.of(project)).toBeUndefined();
	});

	it("returns the instance when present on project", () => {
		const project = new Project({ name: "test" });
		const s = new ContextModeMcpServer(project);
		expect(ContextModeMcpServer.of(project)).toBe(s);
	});

	it("creates McpConfig with context-mode server", () => {
		const project = new Project({ name: "test" });
		new ContextModeMcpServer(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot[".mcp.json"].mcpServers["context-mode"]).toEqual({
			command: "context-mode",
		});
	});

	it("registers with existing McpConfig", () => {
		const project = new Project({ name: "test" });
		new McpConfig(project, { servers: [] });
		new ContextModeMcpServer(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot[".mcp.json"].mcpServers["context-mode"]).toBeDefined();
	});

	it("creates ClaudeCode when absent and adds MCP server and hooks", () => {
		const project = new Project({ name: "test" });
		new ContextModeMcpServer(project);
		const snapshot = synthSnapshot(project);
		const settings = snapshot[".claude/settings.json"];
		expect(settings.mcpServers?.["context-mode"]).toEqual({
			command: "context-mode",
		});
		expect(settings.hooks?.PreToolUse).toBeDefined();
		expect(settings.hooks?.PostToolUse).toBeDefined();
		expect(settings.hooks?.SessionStart).toBeDefined();
		expect(settings.hooks?.PreCompact).toBeDefined();
		expect(settings.hooks?.UserPromptSubmit).toBeDefined();
		expect(settings.hooks?.Stop).toBeDefined();
	});

	it("adds hooks to existing ClaudeCode", () => {
		const project = new Project({ name: "test" });
		new ClaudeCode(project);
		new ContextModeMcpServer(project);
		const snapshot = synthSnapshot(project);
		const settings = snapshot[".claude/settings.json"];
		expect(settings.hooks?.PreToolUse[0].hooks[0].command).toBe(
			"context-mode hook claude pretooluse",
		);
	});

	it("PreToolUse hook has the correct matcher", () => {
		const project = new Project({ name: "test" });
		new ContextModeMcpServer(project);
		const snapshot = synthSnapshot(project);
		const preToolUse = snapshot[".claude/settings.json"].hooks.PreToolUse[0];
		expect(preToolUse.matcher).toContain("Bash");
		expect(preToolUse.matcher).toContain("mcp__");
	});

	it("adds MCP server and BeforeTool hook to GeminiCli when present", () => {
		const project = new Project({ name: "test" });
		new GeminiCli(project);
		new ContextModeMcpServer(project);
		const snapshot = synthSnapshot(project);
		const settings = snapshot[".gemini/settings.json"];
		expect(settings.mcpServers?.["context-mode"]).toEqual({
			command: "context-mode",
		});
		expect(settings.hooks?.BeforeTool?.[0].command).toBeUndefined();
		expect(settings.hooks?.BeforeTool?.[0].hooks[0].command).toBe(
			"context-mode hook gemini-cli beforetool",
		);
		expect(settings.hooks?.BeforeTool?.[0].matcher).toContain(
			"run_shell_command",
		);
	});

	it("adds AfterTool, PreCompress, SessionStart hooks to GeminiCli when present", () => {
		const project = new Project({ name: "test" });
		new GeminiCli(project);
		new ContextModeMcpServer(project);
		const snapshot = synthSnapshot(project);
		const hooks = snapshot[".gemini/settings.json"].hooks;
		expect(hooks?.AfterTool?.[0].hooks[0].command).toBe(
			"context-mode hook gemini-cli aftertool",
		);
		expect(hooks?.PreCompress?.[0].hooks[0].command).toBe(
			"context-mode hook gemini-cli precompress",
		);
		expect(hooks?.SessionStart?.[0].hooks[0].command).toBe(
			"context-mode hook gemini-cli sessionstart",
		);
	});

	it("does not configure GeminiCli when it is absent", () => {
		const project = new Project({ name: "test" });
		new ContextModeMcpServer(project);
		expect(GeminiCli.of(project)).toBeUndefined();
	});

	it("adds MCP server with codex env and hooks to OpenAICodex when present", () => {
		const project = new Project({ name: "test" });
		new OpenAICodex(project);
		new ContextModeMcpServer(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot[".codex/config.toml"]).toContain("context-mode");
		expect(snapshot[".codex/config.toml"]).toContain("CONTEXT_MODE_PLATFORM");
		expect(
			snapshot[".codex/hooks.json"].hooks.PreToolUse[0].hooks[0].command,
		).toBe("context-mode hook codex pretooluse");
	});

	it("does not configure OpenAICodex when it is absent", () => {
		const project = new Project({ name: "test" });
		new ContextModeMcpServer(project);
		expect(OpenAICodex.of(project)).toBeUndefined();
	});

	it("adds plugin to OpenCode when present and does not add MCP server", () => {
		const project = new Project({ name: "test" });
		new OpenCode(project);
		new ContextModeMcpServer(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot["opencode.json"].plugin).toContain("context-mode");
		expect(snapshot["opencode.json"].mcp?.["context-mode"]).toBeUndefined();
	});

	it("does not configure OpenCode when it is absent", () => {
		const project = new Project({ name: "test" });
		new ContextModeMcpServer(project);
		expect(OpenCode.of(project)).toBeUndefined();
	});
});
