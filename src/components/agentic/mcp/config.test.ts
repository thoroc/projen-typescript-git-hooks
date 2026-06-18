import { Project } from "projen";
import { synthSnapshot } from "projen/lib/util/synth";
import { describe, expect, it } from "vitest";
import { McpConfig } from "./config";
import { McpServer } from "./server";

describe("McpConfig", () => {
	it("returns undefined when not present on project", () => {
		const project = new Project({ name: "test" });
		expect(McpConfig.of(project)).toBeUndefined();
	});

	it("returns the instance when present on project", () => {
		const project = new Project({ name: "test" });
		const mc = new McpConfig(project, { servers: [] });
		expect(McpConfig.of(project)).toBe(mc);
	});

	it("generates .mcp.json with mcpServers", () => {
		const project = new Project({ name: "test" });
		new McpConfig(project, {
			servers: [
				new McpServer("my-server", {
					command: "npx",
					args: ["-y", "my-mcp-server"],
				}),
			],
		});
		const snapshot = synthSnapshot(project);
		expect(snapshot[".mcp.json"]).toMatchObject({
			mcpServers: {
				"my-server": { command: "npx", args: ["-y", "my-mcp-server"] },
			},
		});
	});

	it("includes env in server config when provided", () => {
		const project = new Project({ name: "test" });
		new McpConfig(project, {
			servers: [
				new McpServer("my-server", {
					command: "npx",
					args: ["-y", "my-mcp-server"],
					env: { API_KEY: "secret" },
				}),
			],
		});
		const snapshot = synthSnapshot(project);
		expect(snapshot[".mcp.json"].mcpServers["my-server"].env).toEqual({
			API_KEY: "secret",
		});
	});

	it("supports multiple servers", () => {
		const project = new Project({ name: "test" });
		new McpConfig(project, {
			servers: [
				new McpServer("server-a", { command: "cmd-a" }),
				new McpServer("server-b", { command: "cmd-b", args: ["arg"] }),
			],
		});
		const snapshot = synthSnapshot(project);
		const servers = snapshot[".mcp.json"].mcpServers;
		expect(Object.keys(servers)).toHaveLength(2);
		expect(servers["server-a"]).toEqual({ command: "cmd-a" });
		expect(servers["server-b"]).toEqual({ command: "cmd-b", args: ["arg"] });
	});
});
