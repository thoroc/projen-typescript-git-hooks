import { Component, type Project } from "projen";
import { ClaudeCode } from "../claude-code";
import { GeminiCli } from "../gemini-cli";
import { McpConfig } from "../mcp-config";
import { McpServer } from "../mcp-server";
import { OpenAICodex } from "../openai-codex";
import { OpenCode } from "../opencode";

const CLAUDE_PRETOOLUSE_MATCHER =
	"Bash|Shell|Read|Edit|Write|WebFetch|Agent|ctx_execute|ctx_execute_file|ctx_batch_execute|ctx_fetch_and_index|ctx_search|ctx_index|mcp__";

const GEMINI_BEFORETOOL_MATCHER =
	"run_shell_command|read_file|read_many_files|grep_search|search_file_content|web_fetch|activate_skill|mcp__plugin_context-mode|mcp__context-mode|mcp__(?!.*context-mode)";

const CODEX_PRETOOLUSE_MATCHER =
	"local_shell|shell|shell_command|exec_command|Bash|Shell|apply_patch|Edit|Write|grep_files|ctx_execute|ctx_execute_file|ctx_batch_execute|ctx_fetch_and_index|ctx_search|ctx_index|mcp__";

const SHARED_SIMPLE_HOOK_EVENTS = [
	"PostToolUse",
	"SessionStart",
	"PreCompact",
	"UserPromptSubmit",
	"Stop",
] as const;

const GEMINI_SIMPLE_HOOK_EVENTS = [
	"AfterTool",
	"PreCompress",
	"SessionStart",
] as const;

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
