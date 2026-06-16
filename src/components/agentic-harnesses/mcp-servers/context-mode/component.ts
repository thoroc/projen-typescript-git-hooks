import { Component, type Project } from "projen";
import { ClaudeCode } from "../../anthropic";
import { GeminiCli } from "../../google";
import { McpConfig, McpServer } from "../../mcp";
import { OpenAICodex } from "../../openai";
import { OpenCode } from "../../opencode";
import {
	CLAUDE_PRETOOLUSE_MATCHER,
	CODEX_PRETOOLUSE_MATCHER,
	GEMINI_BEFORETOOL_MATCHER,
	GEMINI_SIMPLE_HOOK_EVENTS,
	SHARED_SIMPLE_HOOK_EVENTS,
} from "./constants";

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
			matcher: CLAUDE_PRETOOLUSE_MATCHER,
			hooks: [
				{
					type: "command",
					command: "context-mode hook claude pretooluse",
					timeout: 30,
				},
			],
		});
		for (const event of SHARED_SIMPLE_HOOK_EVENTS) {
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
				matcher: GEMINI_BEFORETOOL_MATCHER,
				hooks: [
					{
						type: "command",
						command: "context-mode hook gemini-cli beforetool",
					},
				],
			});
			for (const event of GEMINI_SIMPLE_HOOK_EVENTS) {
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
				matcher: CODEX_PRETOOLUSE_MATCHER,
				hooks: [
					{ type: "command", command: "context-mode hook codex pretooluse" },
				],
			});
			for (const event of SHARED_SIMPLE_HOOK_EVENTS) {
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
	}
}
