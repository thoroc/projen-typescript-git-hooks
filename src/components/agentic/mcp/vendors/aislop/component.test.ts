import { Project } from "projen";
import { synthSnapshot } from "projen/lib/util/synth";
import { describe, expect, it } from "vitest";
import { AgentsMd } from "../../../agents-md";
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
		expect(snapshot["opencode.jsonc"].mcp?.["aislop"]).toBeDefined();
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

	describe("install task", () => {
		it("creates aislop:install task", () => {
			const project = new Project({ name: "test" });
			new AislopMcpServer(project);
			const snapshot = synthSnapshot(project);
			expect(
				snapshot[".projen/tasks.json"].tasks["aislop:install"],
			).toBeDefined();
		});

		it("install task runs install-binary then baseline steps", () => {
			const project = new Project({ name: "test" });
			new AislopMcpServer(project);
			const snapshot = synthSnapshot(project);
			const steps =
				snapshot[".projen/tasks.json"].tasks["aislop:install"].steps;
			expect(steps[0].name).toBe("install-binary");
			expect(steps[0].exec).toContain("aislop");
			expect(steps[1].name).toBe("baseline");
			expect(steps[1].exec).toBe("aislop hook baseline");
		});
	});

	describe("agent instructions", () => {
		it("creates .agents/instructions/aislop.md", () => {
			const project = new Project({ name: "test" });
			new AislopMcpServer(project);
			const snapshot = synthSnapshot(project);
			expect(snapshot[`${AgentsMd.instructionsDir}/aislop.md`]).toBeDefined();
		});

		it("instructions file contains severity and MCP tool content", () => {
			const project = new Project({ name: "test" });
			new AislopMcpServer(project);
			const snapshot = synthSnapshot(project);
			const content = snapshot[`${AgentsMd.instructionsDir}/aislop.md`];
			expect(content).toContain("aislop_scan");
			expect(content).toContain("regressed");
		});

		it("registers AgentsMd on the project", () => {
			const project = new Project({ name: "test" });
			new AislopMcpServer(project);
			expect(AgentsMd.of(project)).toBeDefined();
		});
	});
});
