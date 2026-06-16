import { Project } from "projen";
import { synthSnapshot } from "projen/lib/util/synth";
import { McpServer } from "./mcp-server";
import { OpenCode } from "./opencode";

describe("OpenCode", () => {
	it("returns undefined when not present on project", () => {
		const project = new Project({ name: "test" });
		expect(OpenCode.of(project)).toBeUndefined();
	});

	it("returns the instance when present on project", () => {
		const project = new Project({ name: "test" });
		const oc = new OpenCode(project);
		expect(OpenCode.of(project)).toBe(oc);
	});

	it("creates opencode.json with schema only when no options given", () => {
		const project = new Project({ name: "test" });
		new OpenCode(project);
		const snapshot = synthSnapshot(project);
		const settings = snapshot["opencode.json"];
		expect(settings.$schema).toBe("https://opencode.ai/config.json");
		expect(settings.model).toBeUndefined();
		expect(settings.autoupdate).toBeUndefined();
		expect(settings.permission).toBeUndefined();
		expect(settings.mcp).toBeUndefined();
	});

	it("creates AGENTS.md when instantiated", () => {
		const project = new Project({ name: "test" });
		new OpenCode(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot["AGENTS.md"]).toBeDefined();
	});

	it("includes model when provided", () => {
		const project = new Project({ name: "test" });
		new OpenCode(project, { model: "anthropic/claude-opus-4-5" });
		const snapshot = synthSnapshot(project);
		expect(snapshot["opencode.json"].model).toBe("anthropic/claude-opus-4-5");
	});

	it("includes autoupdate when provided", () => {
		const project = new Project({ name: "test" });
		new OpenCode(project, { autoupdate: false });
		const snapshot = synthSnapshot(project);
		expect(snapshot["opencode.json"].autoupdate).toBe(false);
	});

	it("includes permission when provided", () => {
		const project = new Project({ name: "test" });
		new OpenCode(project, { permission: { bash: "allow", network: "deny" } });
		const snapshot = synthSnapshot(project);
		expect(snapshot["opencode.json"].permission).toEqual({
			bash: "allow",
			network: "deny",
		});
	});

	it("includes mcp when mcpServers provided", () => {
		const project = new Project({ name: "test" });
		new OpenCode(project, {
			mcpServers: [
				new McpServer("my-server", {
					command: "npx",
					args: ["-y", "my-mcp-server"],
				}),
			],
		});
		const snapshot = synthSnapshot(project);
		expect(snapshot["opencode.json"].mcp).toEqual({
			"my-server": { type: "local", command: ["npx", "-y", "my-mcp-server"] },
		});
	});

	it("includes environment in mcp server when env provided", () => {
		const project = new Project({ name: "test" });
		new OpenCode(project, {
			mcpServers: [
				new McpServer("my-server", {
					command: "npx",
					env: { API_KEY: "secret" },
				}),
			],
		});
		const snapshot = synthSnapshot(project);
		expect(snapshot["opencode.json"].mcp["my-server"].environment).toEqual({
			API_KEY: "secret",
		});
	});

	it("does not include mcp when no mcpServers provided", () => {
		const project = new Project({ name: "test" });
		new OpenCode(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot["opencode.json"].mcp).toBeUndefined();
	});
});
