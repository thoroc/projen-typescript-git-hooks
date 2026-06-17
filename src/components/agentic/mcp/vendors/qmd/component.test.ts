import { Project } from "projen";
import { synthSnapshot } from "projen/lib/util/synth";
import { describe, expect, it } from "vitest";
import { AgentsMd } from "../../../agents-md";
import { ClaudeCode } from "../../../harness";
import { McpConfig } from "../..";
import { QmdMcpServer } from "./component";

describe("QmdMcpServer", () => {
	it("returns undefined when not present on project", () => {
		const project = new Project({ name: "test" });
		expect(QmdMcpServer.of(project)).toBeUndefined();
	});

	it("returns the instance when present on project", () => {
		const project = new Project({ name: "test" });
		const s = new QmdMcpServer(project);
		expect(QmdMcpServer.of(project)).toBe(s);
	});

	it("creates McpConfig with qmd server when none exists", () => {
		const project = new Project({ name: "test" });
		new QmdMcpServer(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot[".mcp.json"].mcpServers.qmd).toEqual({
			command: "qmd",
			args: ["mcp"],
		});
	});

	it("registers with existing McpConfig", () => {
		const project = new Project({ name: "test" });
		new McpConfig(project, { servers: [] });
		new QmdMcpServer(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot[".mcp.json"].mcpServers.qmd).toBeDefined();
	});

	it("adds server to ClaudeCode mcpServers when ClaudeCode is present", () => {
		const project = new Project({ name: "test" });
		new ClaudeCode(project);
		new QmdMcpServer(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot[".claude/settings.json"].mcpServers?.qmd).toEqual({
			command: "qmd",
			args: ["mcp"],
		});
	});

	it("does not create ClaudeCode when it is absent", () => {
		const project = new Project({ name: "test" });
		new QmdMcpServer(project);
		expect(ClaudeCode.of(project)).toBeUndefined();
	});

	describe("agent instructions", () => {
		it("creates .agents/instructions/qmd.md", () => {
			const project = new Project({ name: "test" });
			new QmdMcpServer(project);
			const snapshot = synthSnapshot(project);
			expect(snapshot[`${AgentsMd.instructionsDir}/qmd.md`]).toBeDefined();
		});

		it("instructions file contains QMD search content", () => {
			const project = new Project({ name: "test" });
			new QmdMcpServer(project);
			const snapshot = synthSnapshot(project);
			const content = snapshot[`${AgentsMd.instructionsDir}/qmd.md`];
			expect(content).toContain("qmd update");
			expect(content).toContain("qmd embed");
		});

		it("registers AgentsMd on the project", () => {
			const project = new Project({ name: "test" });
			new QmdMcpServer(project);
			expect(AgentsMd.of(project)).toBeDefined();
		});
	});
});
