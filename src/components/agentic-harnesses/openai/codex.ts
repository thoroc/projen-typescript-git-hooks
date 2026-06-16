import { Component, JsonFile, type Project, TomlFile } from "projen";
import { AgentsMd } from "../agents-md";
import type { McpServer } from "../mcp";
import type { OpenAICodexHookGroup, OpenAICodexOptions } from "./types";

export class OpenAICodex extends Component {
	static readonly settingsPath = ".codex/config.toml";
	static readonly hooksPath = ".codex/hooks.json";
	static readonly contextFile = "AGENTS.md";

	public static of(project: Project): OpenAICodex | undefined {
		const singleton = (c: Component): c is OpenAICodex =>
			c instanceof OpenAICodex;
		return project.components.find(singleton);
	}

	readonly options?: OpenAICodexOptions;
	private readonly _mcpServers: Array<McpServer>;
	private readonly _hooks: Record<string, Array<OpenAICodexHookGroup>>;

	constructor(project: Project, options?: OpenAICodexOptions) {
		super(project);
		this.options = options;
		this._mcpServers = [...(options?.mcpServers ?? [])];
		this._hooks = Object.fromEntries(
			Object.entries(options?.hooks ?? {}).map(([k, v]) => [k, [...v]]),
		);
		void (AgentsMd.of(project) ?? new AgentsMd(project));
	}

	addMcpServer(server: McpServer): void {
		this._mcpServers.push(server);
	}

	addHook(event: string, group: OpenAICodexHookGroup): void {
		if (!this._hooks[event]) this._hooks[event] = [];
		this._hooks[event].push(group);
	}

	preSynthesize(): void {
		const mcpServersObj =
			this._mcpServers.length > 0 &&
			Object.fromEntries(
				this._mcpServers.map((s) => [
					s.name,
					{
						command: s.command,
						...(s.args && { args: s.args }),
						...(s.env && { env: s.env }),
					},
				]),
			);

		const hasHooks = Object.keys(this._hooks).length > 0;

		new TomlFile(this.project, OpenAICodex.settingsPath, {
			obj: {
				...(this.options?.model && { model: this.options.model }),
				...(this.options?.approvalPolicy && {
					approval_policy: this.options.approvalPolicy,
				}),
				...(this.options?.sandboxMode && {
					sandbox_mode: this.options.sandboxMode,
				}),
				...(mcpServersObj && { mcp_servers: mcpServersObj }),
				...(hasHooks && { features: { hooks: true } }),
			},
		});

		if (hasHooks) {
			new JsonFile(this.project, OpenAICodex.hooksPath, {
				obj: { hooks: this._hooks },
				readonly: false,
			});
		}
	}
}
