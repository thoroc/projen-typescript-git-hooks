import * as fs from "fs";
import * as path from "path";
import { Component, JsonFile, type Project } from "projen";
import { AgentsMd } from "../../agents-md";
import type { McpServer } from "../../mcp";
import { INSTALL_BINARY } from "./constants";
import type { GeminiCliHookGroup, GeminiCliOptions } from "./types";

export class GeminiCli extends Component {
	static readonly settingsPath = ".gemini/settings.json";
	static readonly contextFile = "GEMINI.md";

	public static of(project: Project): GeminiCli | undefined {
		const singleton = (c: Component): c is GeminiCli => c instanceof GeminiCli;
		return project.components.find(singleton);
	}

	readonly options?: GeminiCliOptions;
	private readonly _mcpServers: Array<McpServer>;
	private readonly _hooks: Record<string, Array<GeminiCliHookGroup>>;

	constructor(project: Project, options?: GeminiCliOptions) {
		super(project);
		this.options = options;
		this._mcpServers = [...(options?.mcpServers ?? [])];
		this._hooks = Object.fromEntries(
			Object.entries(options?.hooks ?? {}).map(([k, v]) => [k, [...v]]),
		);
		void (AgentsMd.of(project) ?? new AgentsMd(project));

		const installTask = project.tasks.addTask("gemini:install", {
			description: "Install Gemini CLI",
		});
		installTask.exec(INSTALL_BINARY, { name: "install-binary" });
	}

	addMcpServer(server: McpServer): void {
		this._mcpServers.push(server);
	}

	addHook(event: string, group: GeminiCliHookGroup): void {
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

		new JsonFile(this.project, GeminiCli.settingsPath, {
			obj: {
				$schema:
					"https://raw.githubusercontent.com/google-gemini/gemini-cli/main/schemas/settings.schema.json",
				...(mcpServersObj && { mcpServers: mcpServersObj }),
				...(this.options?.theme && { ui: { theme: this.options.theme } }),
				...(this.options?.model && { model: { name: this.options.model } }),
				...(this.options?.contextFileNames && {
					context: { fileName: this.options.contextFileNames },
				}),
				...(hooksObj && { hooks: hooksObj }),
			},
			readonly: false,
		});
	}

	postSynthesize(): void {
		const symlinkPath = path.join(this.project.outdir, GeminiCli.contextFile);
		if (fs.existsSync(symlinkPath)) {
			if (fs.lstatSync(symlinkPath).isSymbolicLink()) return;
			return;
		}
		fs.symlinkSync("AGENTS.md", symlinkPath);
	}
}
