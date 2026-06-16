import { Project } from "projen";
import { synthSnapshot } from "projen/lib/util/synth";
import { ClaudeCode } from "../claude-code";
import { McpConfig } from "../mcp-config";
import { NeuledgeContextMcpServer } from "./neuledge-context";

describe("NeuledgeContextMcpServer", () => {
	it("returns undefined when not present on project", () => {
		const project = new Project({ name: "test" });
		expect(NeuledgeContextMcpServer.of(project)).toBeUndefined();
	});

	it("returns the instance when present on project", () => {
		const project = new Project({ name: "test" });
		const s = new NeuledgeContextMcpServer(project);
		expect(NeuledgeContextMcpServer.of(project)).toBe(s);
	});

	it("creates McpConfig with context server when none exists", () => {
		const project = new Project({ name: "test" });
		new NeuledgeContextMcpServer(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot[".mcp.json"].mcpServers.context).toEqual({
			command: "context",
			args: ["serve"],
		});
	});

	it("registers with existing McpConfig", () => {
		const project = new Project({ name: "test" });
		new McpConfig(project, { servers: [] });
		new NeuledgeContextMcpServer(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot[".mcp.json"].mcpServers.context).toBeDefined();
	});

	it("adds server to ClaudeCode mcpServers when ClaudeCode is present", () => {
		const project = new Project({ name: "test" });
		new ClaudeCode(project);
		new NeuledgeContextMcpServer(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot[".claude/settings.json"].mcpServers?.context).toEqual({
			command: "context",
			args: ["serve"],
		});
	});

	it("does not create ClaudeCode when it is absent", () => {
		const project = new Project({ name: "test" });
		new NeuledgeContextMcpServer(project);
		expect(ClaudeCode.of(project)).toBeUndefined();
	});
});
