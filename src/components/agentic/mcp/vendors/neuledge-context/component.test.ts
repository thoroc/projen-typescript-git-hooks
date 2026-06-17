import { Project } from "projen";
import { synthSnapshot } from "projen/lib/util/synth";
import { describe, expect, it } from "vitest";
import { AgentsMd } from "../../../agents-md";
import { ClaudeCode } from "../../../harness";
import { McpConfig } from "../..";
import { NeuledgeContextMcpServer } from "./component";

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
		expect(snapshot[".mcp.json"].mcpServers["neuledge-context"]).toEqual({
			command: "context",
			args: ["serve"],
		});
	});

	it("registers with existing McpConfig", () => {
		const project = new Project({ name: "test" });
		new McpConfig(project, { servers: [] });
		new NeuledgeContextMcpServer(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot[".mcp.json"].mcpServers["neuledge-context"]).toBeDefined();
	});

	it("adds server to ClaudeCode mcpServers when ClaudeCode is present", () => {
		const project = new Project({ name: "test" });
		new ClaudeCode(project);
		new NeuledgeContextMcpServer(project);
		const snapshot = synthSnapshot(project);
		expect(
			snapshot[".claude/settings.json"].mcpServers?.["neuledge-context"],
		).toEqual({
			command: "context",
			args: ["serve"],
		});
	});

	it("does not create ClaudeCode when it is absent", () => {
		const project = new Project({ name: "test" });
		new NeuledgeContextMcpServer(project);
		expect(ClaudeCode.of(project)).toBeUndefined();
	});

	describe("install task", () => {
		it("creates neuledge-context:install task", () => {
			const project = new Project({ name: "test" });
			new NeuledgeContextMcpServer(project);
			const snapshot = synthSnapshot(project);
			expect(
				snapshot[".projen/tasks.json"].tasks["neuledge-context:install"],
			).toBeDefined();
		});

		it("install task runs the install-binary step", () => {
			const project = new Project({ name: "test" });
			new NeuledgeContextMcpServer(project);
			const snapshot = synthSnapshot(project);
			const steps =
				snapshot[".projen/tasks.json"].tasks["neuledge-context:install"].steps;
			expect(steps[0].name).toBe("install-binary");
			expect(steps[0].exec).toContain("@neuledge/context");
		});
	});

	describe("agent instructions", () => {
		it("creates .agents/instructions/neuledge-context.md", () => {
			const project = new Project({ name: "test" });
			new NeuledgeContextMcpServer(project);
			const snapshot = synthSnapshot(project);
			expect(
				snapshot[`${AgentsMd.instructionsDir}/neuledge-context.md`],
			).toBeDefined();
		});

		it("instructions file contains context tool content", () => {
			const project = new Project({ name: "test" });
			new NeuledgeContextMcpServer(project);
			const snapshot = synthSnapshot(project);
			const content =
				snapshot[`${AgentsMd.instructionsDir}/neuledge-context.md`];
			expect(content).toContain("get_docs");
			expect(content).toContain("search_packages");
		});

		it("registers AgentsMd on the project", () => {
			const project = new Project({ name: "test" });
			new NeuledgeContextMcpServer(project);
			expect(AgentsMd.of(project)).toBeDefined();
		});
	});
});
