import { Project } from "projen";
import { synthSnapshot } from "projen/lib/util/synth";
import { McpServer } from "./mcp-server";
import { OpenAICodex } from "./openai-codex";

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
});
