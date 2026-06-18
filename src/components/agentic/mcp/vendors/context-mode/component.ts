import { Component, type Project } from "projen";
import { AgentsMd } from "../../../agents-md";
import {
	ClaudeCode,
	ClaudePreToolUseMatcherValues,
	CodexPreToolUseMatcherValues,
	GeminiBeforeToolMatcherValues,
	GeminiCli,
	GeminiSimpleHookEvents,
	OpenAICodex,
	OpenCode,
} from "../../../harness";
import { McpConfig, McpServer } from "../..";
import { SharedSimpleHookEvents } from "../hooks";
import { INSTALL_BINARY, INSTRUCTIONS_CONTENT } from "./constants";

export class ContextModeMcpServer extends Component {
	static readonly serverName = "context-mode";

	public static of(project: Project): ContextModeMcpServer | undefined {
		const singleton = (c: Component): c is ContextModeMcpServer =>
			c instanceof ContextModeMcpServer;
		return project.components.find(singleton);
	}

	constructor(project: Project) {
		super(project);
		const server = new McpServer(ContextModeMcpServer.serverName, {
			command: "context-mode",
		});
		const config =
			McpConfig.of(project) ?? new McpConfig(project, { servers: [] });
		config.addServer(server);

		const claude = ClaudeCode.of(project) ?? new ClaudeCode(project);
		claude.addMcpServer(server);
		claude.addHook("PreToolUse", {
			matcher: ClaudePreToolUseMatcherValues([
				"ctx_execute",
				"ctx_execute_file",
				"ctx_batch_execute",
				"ctx_fetch_and_index",
				"ctx_search",
				"ctx_index",
				"mcp__",
			]),
			hooks: [
				{
					type: "command",
					command: "context-mode hook claude pretooluse",
					timeout: 30,
				},
			],
		});
		for (const event of Object.values(SharedSimpleHookEvents)) {
			claude.addHook(event, {
				hooks: [
					{
						type: "command",
						command: `context-mode hook claude ${event.toLowerCase()}`,
						timeout: 30,
					},
				],
			});
		}

		const gemini = GeminiCli.of(project);
		if (gemini) {
			gemini.addMcpServer(server);
			gemini.addHook("BeforeTool", {
				matcher: GeminiBeforeToolMatcherValues(),
				hooks: [
					{
						type: "command",
						command: "context-mode hook gemini-cli beforetool",
					},
				],
			});
			for (const event of Object.values(GeminiSimpleHookEvents)) {
				gemini.addHook(event, {
					matcher: "",
					hooks: [
						{
							type: "command",
							command: `context-mode hook gemini-cli ${event.toLowerCase()}`,
						},
					],
				});
			}
		}

		const codexServer = new McpServer(ContextModeMcpServer.serverName, {
			command: "context-mode",
			env: { CONTEXT_MODE_PLATFORM: "codex" },
		});
		const codex = OpenAICodex.of(project);
		if (codex) {
			codex.addMcpServer(codexServer);
			codex.addHook("PreToolUse", {
				matcher: CodexPreToolUseMatcherValues(),
				hooks: [
					{ type: "command", command: "context-mode hook codex pretooluse" },
				],
			});
			for (const event of Object.values(SharedSimpleHookEvents)) {
				codex.addHook(event, {
					hooks: [
						{
							type: "command",
							command: `context-mode hook codex ${event.toLowerCase()}`,
						},
					],
				});
			}
		}

		OpenCode.of(project)?.addPlugin(ContextModeMcpServer.serverName);

		AgentsMd.registerInstructions(
			project,
			"context-mode",
			INSTRUCTIONS_CONTENT,
		);

		const installTask = project.tasks.addTask("context-mode:install", {
			description: "Install context-mode binary",
		});
		installTask.exec(INSTALL_BINARY, { name: "install-binary" });
	}
}
