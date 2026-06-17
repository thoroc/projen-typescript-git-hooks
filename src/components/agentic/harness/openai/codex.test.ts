import { Project } from "projen";
import { synthSnapshot } from "projen/lib/util/synth";
import { describe, expect, it } from "vitest";
import { McpServer } from "../../mcp";
import { OpenAICodex } from "./codex";

describe("OpenAICodex", () => {
	it("returns undefined when not present on project", () => {
		const project = new Project({ name: "test" });
		expect(OpenAICodex.of(project)).toBeUndefined();
	});

	it("returns the instance when present on project", () => {
		const project = new Project({ name: "test" });
		const codex = new OpenAICodex(project);
		expect(OpenAICodex.of(project)).toBe(codex);
	});

	it("creates .codex/config.toml when instantiated", () => {
		const project = new Project({ name: "test" });
		new OpenAICodex(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot[".codex/config.toml"]).toBeDefined();
	});

	it("creates AGENTS.md when instantiated", () => {
		const project = new Project({ name: "test" });
		new OpenAICodex(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot["AGENTS.md"]).toBeDefined();
	});

	it("includes model in config when provided", () => {
		const project = new Project({ name: "test" });
		new OpenAICodex(project, { model: "o4-mini" });
		const snapshot = synthSnapshot(project);
		expect(snapshot[".codex/config.toml"]).toContain("model");
	});

	it("includes approval_policy in config when provided", () => {
		const project = new Project({ name: "test" });
		new OpenAICodex(project, { approvalPolicy: "full-auto" });
		const snapshot = synthSnapshot(project);
		expect(snapshot[".codex/config.toml"]).toContain("approval_policy");
	});

	it("includes mcp_servers when mcpServers provided", () => {
		const project = new Project({ name: "test" });
		new OpenAICodex(project, {
			mcpServers: [
				new McpServer("my-server", {
					command: "npx",
					args: ["-y", "my-mcp-server"],
				}),
			],
		});
		const snapshot = synthSnapshot(project);
		expect(snapshot[".codex/config.toml"]).toContain("mcp_servers");
		expect(snapshot[".codex/config.toml"]).toContain("my-server");
	});

	it("does not include mcp_servers when no mcpServers provided", () => {
		const project = new Project({ name: "test" });
		new OpenAICodex(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot[".codex/config.toml"]).not.toContain("mcp_servers");
	});

	it("addMcpServer registers a server dynamically", () => {
		const project = new Project({ name: "test" });
		const codex = new OpenAICodex(project);
		codex.addMcpServer(
			new McpServer("dynamic-server", { command: "dynamic-cmd" }),
		);
		const snapshot = synthSnapshot(project);
		expect(snapshot[".codex/config.toml"]).toContain("dynamic-server");
	});

	it("addHook creates hooks.json and enables hooks feature", () => {
		const project = new Project({ name: "test" });
		const codex = new OpenAICodex(project);
		codex.addHook("PreToolUse", {
			matcher: "Bash",
			hooks: [{ type: "command", command: "my-tool hook codex pretooluse" }],
		});
		const snapshot = synthSnapshot(project);
		expect(snapshot[".codex/config.toml"]).toContain("hooks = true");
		expect(snapshot[".codex/hooks.json"].hooks.PreToolUse[0].matcher).toBe(
			"Bash",
		);
		expect(
			snapshot[".codex/hooks.json"].hooks.PreToolUse[0].hooks[0].command,
		).toBe("my-tool hook codex pretooluse");
	});

	it("does not create hooks.json when no hooks added", () => {
		const project = new Project({ name: "test" });
		new OpenAICodex(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot[".codex/hooks.json"]).toBeUndefined();
	});

	describe("install task", () => {
		it("creates codex:install task", () => {
			const project = new Project({ name: "test" });
			new OpenAICodex(project);
			const snapshot = synthSnapshot(project);
			expect(
				snapshot[".projen/tasks.json"].tasks["codex:install"],
			).toBeDefined();
		});

		it("install task runs the install-binary step with idempotency guard", () => {
			const project = new Project({ name: "test" });
			new OpenAICodex(project);
			const snapshot = synthSnapshot(project);
			const steps = snapshot[".projen/tasks.json"].tasks["codex:install"].steps;
			expect(steps[0].name).toBe("install-binary");
			expect(steps[0].exec).toContain("command -v codex");
			expect(steps[0].exec).toContain("@openai/codex");
		});
	});
});
