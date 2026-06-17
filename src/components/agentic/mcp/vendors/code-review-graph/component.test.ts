import { Project } from "projen";
import { synthSnapshot } from "projen/lib/util/synth";
import { describe, expect, it } from "vitest";
import { AgentsMd } from "../../../agents-md";
import { ClaudeCode, GeminiCli, OpenAICodex, OpenCode } from "../../../harness";
import { McpConfig } from "../..";
import { CodeReviewGraphMcpServer } from "./component";

describe("CodeReviewGraphMcpServer", () => {
	it("returns undefined when not present on project", () => {
		const project = new Project({ name: "test" });
		expect(CodeReviewGraphMcpServer.of(project)).toBeUndefined();
	});

	it("returns the instance when present on project", () => {
		const project = new Project({ name: "test" });
		const s = new CodeReviewGraphMcpServer(project);
		expect(CodeReviewGraphMcpServer.of(project)).toBe(s);
	});

	it("creates McpConfig with code-review-graph server when none exists", () => {
		const project = new Project({ name: "test" });
		new CodeReviewGraphMcpServer(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot[".mcp.json"].mcpServers["code-review-graph"]).toEqual({
			command: "code-review-graph",
			args: ["serve"],
		});
	});

	it("registers with existing McpConfig", () => {
		const project = new Project({ name: "test" });
		new McpConfig(project, { servers: [] });
		new CodeReviewGraphMcpServer(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot[".mcp.json"].mcpServers["code-review-graph"]).toBeDefined();
	});

	it("adds server to ClaudeCode when present", () => {
		const project = new Project({ name: "test" });
		new ClaudeCode(project);
		new CodeReviewGraphMcpServer(project);
		const snapshot = synthSnapshot(project);
		expect(
			snapshot[".claude/settings.json"].mcpServers?.["code-review-graph"],
		).toEqual({ command: "code-review-graph", args: ["serve"] });
	});

	it("does not create ClaudeCode when it is absent", () => {
		const project = new Project({ name: "test" });
		new CodeReviewGraphMcpServer(project);
		expect(ClaudeCode.of(project)).toBeUndefined();
	});

	it("adds server to GeminiCli when present", () => {
		const project = new Project({ name: "test" });
		new GeminiCli(project);
		new CodeReviewGraphMcpServer(project);
		const snapshot = synthSnapshot(project);
		expect(
			snapshot[".gemini/settings.json"].mcpServers?.["code-review-graph"],
		).toBeDefined();
	});

	it("does not configure GeminiCli when it is absent", () => {
		const project = new Project({ name: "test" });
		new CodeReviewGraphMcpServer(project);
		expect(GeminiCli.of(project)).toBeUndefined();
	});

	it("adds server to OpenAICodex when present", () => {
		const project = new Project({ name: "test" });
		new OpenAICodex(project);
		new CodeReviewGraphMcpServer(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot[".codex/config.toml"]).toContain("code-review-graph");
	});

	it("does not configure OpenAICodex when it is absent", () => {
		const project = new Project({ name: "test" });
		new CodeReviewGraphMcpServer(project);
		expect(OpenAICodex.of(project)).toBeUndefined();
	});

	it("adds server to OpenCode when present", () => {
		const project = new Project({ name: "test" });
		new OpenCode(project);
		new CodeReviewGraphMcpServer(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot["opencode.jsonc"].mcp?.["code-review-graph"]).toBeDefined();
	});

	it("does not configure OpenCode when it is absent", () => {
		const project = new Project({ name: "test" });
		new CodeReviewGraphMcpServer(project);
		expect(OpenCode.of(project)).toBeUndefined();
	});

	describe("agent instructions", () => {
		it("creates .agents/instructions/code-review-graph.md", () => {
			const project = new Project({ name: "test" });
			new CodeReviewGraphMcpServer(project);
			const snapshot = synthSnapshot(project);
			expect(
				snapshot[`${AgentsMd.instructionsDir}/code-review-graph.md`],
			).toBeDefined();
		});

		it("instructions file contains graph tool content", () => {
			const project = new Project({ name: "test" });
			new CodeReviewGraphMcpServer(project);
			const snapshot = synthSnapshot(project);
			const content =
				snapshot[`${AgentsMd.instructionsDir}/code-review-graph.md`];
			expect(content).toContain("detect_changes");
			expect(content).toContain("semantic_search_nodes");
		});

		it("registers AgentsMd on the project", () => {
			const project = new Project({ name: "test" });
			new CodeReviewGraphMcpServer(project);
			expect(AgentsMd.of(project)).toBeDefined();
		});
	});
});
