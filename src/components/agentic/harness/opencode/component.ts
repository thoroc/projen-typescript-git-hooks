import * as fs from "fs";
import * as path from "path";
import { Component, JsonFile, type Project } from "projen";
import { AgentsMd } from "../../agents-md";
import type { McpServer } from "../../mcp";
import { INSTALL_BINARY } from "./constants";
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

		const installTask = project.tasks.addTask("opencode:install", {
			description: "Install OpenCode CLI",
		});
		installTask.exec(INSTALL_BINARY, { name: "install-binary" });
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
		const symlinkPath = path.join(this.project.outdir, OpenCode.contextFile);
		if (existsSync(symlinkPath)) {
			if (lstatSync(symlinkPath).isSymbolicLink()) return;
			return;
		}
		symlinkSync("AGENTS.md", symlinkPath);
	}
}
