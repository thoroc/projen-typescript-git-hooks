import { Project } from "projen";
import { synthSnapshot } from "projen/lib/util/synth";
import { McpServer } from "../mcp";
import { GeminiCli } from "./gemini-cli";

describe("GeminiCli", () => {
	it("returns undefined when not present on project", () => {
		const project = new Project({ name: "test" });
		expect(GeminiCli.of(project)).toBeUndefined();
	});

	it("returns the instance when present on project", () => {
		const project = new Project({ name: "test" });
		const gc = new GeminiCli(project);
		expect(GeminiCli.of(project)).toBe(gc);
	});

	it("creates .gemini/settings.json with schema only when no options given", () => {
		const project = new Project({ name: "test" });
		new GeminiCli(project);
		const snapshot = synthSnapshot(project);
		const settings = snapshot[".gemini/settings.json"];
		expect(settings.$schema).toBe(
			"https://raw.githubusercontent.com/google-gemini/gemini-cli/main/schemas/settings.schema.json",
		);
		expect(settings.ui).toBeUndefined();
		expect(settings.model).toBeUndefined();
		expect(settings.context).toBeUndefined();
		expect(settings.mcpServers).toBeUndefined();
	});

	it("creates AGENTS.md when instantiated", () => {
		const project = new Project({ name: "test" });
		new GeminiCli(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot["AGENTS.md"]).toBeDefined();
	});
	it("includes theme in ui when provided", () => {
		const project = new Project({ name: "test" });
		new GeminiCli(project, { theme: "dark" });
		const snapshot = synthSnapshot(project);
		expect(snapshot[".gemini/settings.json"].ui).toEqual({ theme: "dark" });
	});

	it("includes model name when provided", () => {
		const project = new Project({ name: "test" });
		new GeminiCli(project, { model: "gemini-2.5-pro" });
		const snapshot = synthSnapshot(project);
		expect(snapshot[".gemini/settings.json"].model).toEqual({
			name: "gemini-2.5-pro",
		});
	});

	it("includes context fileNames when provided", () => {
		const project = new Project({ name: "test" });
		new GeminiCli(project, { contextFileNames: ["AGENTS.md", "GEMINI.md"] });
		const snapshot = synthSnapshot(project);
		expect(snapshot[".gemini/settings.json"].context).toEqual({
			fileName: ["AGENTS.md", "GEMINI.md"],
		});
	});
	it("includes mcpServers when provided", () => {
		const project = new Project({ name: "test" });
		new GeminiCli(project, {
			mcpServers: [
				new McpServer("my-server", {
					command: "npx",
					args: ["-y", "my-mcp-server"],
				}),
			],
		});
		const snapshot = synthSnapshot(project);
		expect(snapshot[".gemini/settings.json"].mcpServers).toEqual({
			"my-server": { command: "npx", args: ["-y", "my-mcp-server"] },
		});
	});

	it("does not include mcpServers when none provided", () => {
		const project = new Project({ name: "test" });
		new GeminiCli(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot[".gemini/settings.json"].mcpServers).toBeUndefined();
	});
	it("addMcpServer registers a server dynamically", () => {
		const project = new Project({ name: "test" });
		const gc = new GeminiCli(project);
		gc.addMcpServer(
			new McpServer("dynamic-server", { command: "dynamic-cmd" }),
		);
		const snapshot = synthSnapshot(project);
		expect(
			snapshot[".gemini/settings.json"].mcpServers?.["dynamic-server"],
		).toEqual({
			command: "dynamic-cmd",
		});
	});

	it("addHook registers a hook group dynamically", () => {
		const project = new Project({ name: "test" });
		const gc = new GeminiCli(project);
		gc.addHook("BeforeTool", {
			matcher: "run_shell_command",
			hooks: [{ type: "command", command: "my-tool hook gemini beforetool" }],
		});
		const snapshot = synthSnapshot(project);
		const hooks = snapshot[".gemini/settings.json"].hooks;
		expect(hooks?.BeforeTool?.[0].matcher).toBe("run_shell_command");
		expect(hooks?.BeforeTool?.[0].hooks[0].command).toBe(
			"my-tool hook gemini beforetool",
		);
	});

	it("does not include hooks when none added", () => {
		const project = new Project({ name: "test" });
		new GeminiCli(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot[".gemini/settings.json"].hooks).toBeUndefined();
	});
});
