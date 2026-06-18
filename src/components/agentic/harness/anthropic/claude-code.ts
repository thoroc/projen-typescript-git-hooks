import * as fs from "fs";
import * as path from "path";
import { Component, JsonFile, type Project } from "projen";
import { AgentsMd } from "../../agents-md";
import type { McpServer } from "../../mcp";
import { INSTALL_BINARY } from "./constants";
import type { ClaudeCodeHookGroup, ClaudeCodeOptions } from "./types";

export class ClaudeCode extends Component {
	static readonly settingsPath = ".claude/settings.json";
	static readonly contextFile = "CLAUDE.md";

	public static of(project: Project): ClaudeCode | undefined {
		const singleton = (c: Component): c is ClaudeCode =>
			c instanceof ClaudeCode;
		return project.components.find(singleton);
	}

	readonly options?: ClaudeCodeOptions;
	private readonly _mcpServers: Array<McpServer>;
	private readonly _hooks: Record<string, Array<ClaudeCodeHookGroup>>;

	constructor(project: Project, options?: ClaudeCodeOptions) {
		super(project);
		this.options = options;
		this._mcpServers = [...(options?.mcpServers ?? [])];
		this._hooks = Object.fromEntries(
			Object.entries(options?.hooks ?? {}).map(([k, v]) => [k, [...v]]),
		);
		void (AgentsMd.of(project) ?? new AgentsMd(project));

		const installTask = project.tasks.addTask("claude-code:install", {
			description: "Install Claude Code CLI",
		});
		installTask.exec(INSTALL_BINARY, { name: "install-binary" });
	}

	addMcpServer(server: McpServer): void {
		this._mcpServers.push(server);
	}

	addHook(event: string, group: ClaudeCodeHookGroup): void {
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

		const hooksObj =
			Object.keys(this._hooks).length > 0 ? this._hooks : undefined;

		new JsonFile(this.project, ClaudeCode.settingsPath, {
			obj: {
				$schema: "https://json.schemastore.org/claude-code-settings.json",
				...(this.options?.permissions && {
					permissions: this.options.permissions,
				}),
				...(this.options?.env && { env: this.options.env }),
				...(mcpServersObj && { mcpServers: mcpServersObj }),
				...(hooksObj && { hooks: hooksObj }),
			},
			readonly: false,
		});
	}

	override postSynthesize(): void {
		this._postSynthesize({});
	}

	/** @internal */
	_postSynthesize(
		deps: {
			existsSync?: (p: string) => boolean;
			lstatSync?: (p: string) => { isSymbolicLink(): boolean };
			symlinkSync?: (target: string, p: string) => void;
		} = {},
	): void {
		const {
			existsSync = fs.existsSync,
			lstatSync = fs.lstatSync,
			symlinkSync = fs.symlinkSync,
		} = deps;
		const symlinkPath = path.join(this.project.outdir, ClaudeCode.contextFile);
		if (existsSync(symlinkPath)) {
			if (lstatSync(symlinkPath).isSymbolicLink()) return;
			return;
		}
		symlinkSync("AGENTS.md", symlinkPath);
	}
}
