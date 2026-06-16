import { Project } from "projen";
import { synthSnapshot } from "projen/lib/util/synth";
import { GeminiCli } from "./gemini-cli";
import { McpServer } from "./mcp-server";

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
});
