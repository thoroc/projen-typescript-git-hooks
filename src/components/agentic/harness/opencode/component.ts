import * as fs from "node:fs";
import * as path from "node:path";
import { Component, JsonFile, type Project } from "projen";
import { AgentsMd } from "../../agents-md";
import type { McpServer } from "../../mcp";
import type { OpenCodeOptions } from "./types";

export class OpenCode extends Component {
	static readonly settingsPath = "opencode.jsonc";
	static readonly contextFile = "OPENCODE.md";

	public static of(project: Project): OpenCode | undefined {
		const singleton = (c: Component): c is OpenCode => c instanceof OpenCode;
		return project.components.find(singleton);
	}

	readonly options?: OpenCodeOptions;
	private readonly _mcpServers: Array<McpServer>;
	private readonly _plugins: Array<string>;

	constructor(project: Project, options?: OpenCodeOptions) {
		super(project);
		this.options = options;
		this._mcpServers = [...(options?.mcpServers ?? [])];
		this._plugins = [...(options?.plugins ?? [])];
		void (AgentsMd.of(project) ?? new AgentsMd(project));
	}

	addMcpServer(server: McpServer): void {
		this._mcpServers.push(server);
	}

	addPlugin(name: string): void {
		this._plugins.push(name);
	}

	preSynthesize(): void {
		const mcp =
			this._mcpServers.length > 0 &&
			Object.fromEntries(
				this._mcpServers.map((s) => [
					s.name,
					{
						type: "local" as const,
						command: [s.command, ...(s.args ?? [])],
						...(s.env && { environment: s.env }),
					},
				]),
			);

		new JsonFile(this.project, OpenCode.settingsPath, {
			obj: {
				$schema: "https://opencode.ai/config.json",
				...(mcp && { mcp }),
				...(this._plugins.length > 0 && { plugin: this._plugins }),
				...(this.options?.model && { model: this.options.model }),
				...(this.options?.autoupdate !== undefined && {
					autoupdate: this.options.autoupdate,
				}),
				...(this.options?.permission && {
					permission: this.options.permission,
				}),
			},
			allowComments: true,
			readonly: false,
		});
	}

	postSynthesize(): void {
		const symlinkPath = path.join(this.project.outdir, OpenCode.contextFile);
		if (fs.existsSync(symlinkPath)) {
			if (fs.lstatSync(symlinkPath).isSymbolicLink()) return;
			return;
		}
		fs.symlinkSync("AGENTS.md", symlinkPath);
	}
}
