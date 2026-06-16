import { Project } from "projen";
import { synthSnapshot } from "projen/lib/util/synth";
import { McpServer } from "./mcp-server";
import { MistralVibe } from "./mistral-vibe";

describe("MistralVibe", () => {
	it("returns undefined when not present on project", () => {
		const project = new Project({ name: "test" });
		expect(MistralVibe.of(project)).toBeUndefined();
	});

	it("returns the instance when present on project", () => {
		const project = new Project({ name: "test" });
		const mv = new MistralVibe(project);
		expect(MistralVibe.of(project)).toBe(mv);
	});

	it("creates .vibe/config.toml when instantiated", () => {
		const project = new Project({ name: "test" });
		new MistralVibe(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot[".vibe/config.toml"]).toBeDefined();
	});

	it("creates AGENTS.md when instantiated", () => {
		const project = new Project({ name: "test" });
		new MistralVibe(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot["AGENTS.md"]).toBeDefined();
	});

	it("includes model in config when provided", () => {
		const project = new Project({ name: "test" });
		new MistralVibe(project, { model: "mistral-large-latest" });
		const snapshot = synthSnapshot(project);
		expect(snapshot[".vibe/config.toml"]).toContain("model");
	});

	it("includes mcp_servers when mcpServers provided", () => {
		const project = new Project({ name: "test" });
		new MistralVibe(project, {
			mcpServers: [
				new McpServer("my-server", {
					command: "npx",
					args: ["-y", "my-mcp-server"],
				}),
			],
		});
		const snapshot = synthSnapshot(project);
		expect(snapshot[".vibe/config.toml"]).toContain("mcp_servers");
		expect(snapshot[".vibe/config.toml"]).toContain("my-server");
	});

	it("does not include mcp_servers when no mcpServers provided", () => {
		const project = new Project({ name: "test" });
		new MistralVibe(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot[".vibe/config.toml"]).not.toContain("mcp_servers");
	});
});
