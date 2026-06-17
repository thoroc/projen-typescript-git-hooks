import * as fs from "fs";
import * as path from "path";
import { Component, type Project, TomlFile } from "projen";
import { AgentsMd } from "../../agents-md";
import { INSTALL_BINARY } from "./constants";
import type { MistralVibeOptions } from "./types";

export class MistralVibe extends Component {
	static readonly settingsPath = ".vibe/config.toml";
	static readonly contextFile = "VIBE.md";

	public static of(project: Project): MistralVibe | undefined {
		const singleton = (c: Component): c is MistralVibe =>
			c instanceof MistralVibe;
		return project.components.find(singleton);
	}

	readonly options?: MistralVibeOptions;

	constructor(project: Project, options?: MistralVibeOptions) {
		super(project);
		this.options = options;
		void (AgentsMd.of(project) ?? new AgentsMd(project));

		const installTask = project.tasks.addTask("vibe:install", {
			description: "Install Mistral Vibe CLI",
		});
		installTask.exec(INSTALL_BINARY, { name: "install-binary" });
	}

	preSynthesize(): void {
		const mcpServersObj =
			this.options?.mcpServers &&
			Object.fromEntries(
				this.options.mcpServers.map((s) => [
					s.name,
					{
						command: s.command,
						...(s.args && { args: s.args }),
						...(s.env && { env: s.env }),
					},
				]),
			);

		new TomlFile(this.project, MistralVibe.settingsPath, {
			obj: {
				...(this.options?.model && { model: this.options.model }),
				...(mcpServersObj && { mcp_servers: mcpServersObj }),
			},
		});
	}

	postSynthesize(): void {
		const symlinkPath = path.join(this.project.outdir, MistralVibe.contextFile);
		if (fs.existsSync(symlinkPath)) {
			if (fs.lstatSync(symlinkPath).isSymbolicLink()) return;
			return;
		}
		fs.symlinkSync("AGENTS.md", symlinkPath);
	}
}
