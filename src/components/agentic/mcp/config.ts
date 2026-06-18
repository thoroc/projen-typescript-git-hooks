import { Component, JsonFile, type Project } from "projen";
import type { McpServer } from "./server";

export interface McpConfigOptions {
	readonly servers: Array<McpServer>;
}

export class McpConfig extends Component {
	static readonly configPath = ".mcp.json";

	public static of(project: Project): McpConfig | undefined {
		const singleton = (c: Component): c is McpConfig => c instanceof McpConfig;
		return project.components.find(singleton);
	}

	private readonly _servers: Array<McpServer>;

	get servers(): Array<McpServer> {
		return [...this._servers];
	}

	constructor(project: Project, options: McpConfigOptions) {
		super(project);
		this._servers = [...options.servers];
	}

	addServer(server: McpServer): void {
		this._servers.push(server);
	}

	preSynthesize(): void {
		new JsonFile(this.project, McpConfig.configPath, {
			obj: {
				mcpServers: Object.fromEntries(
					this._servers.map((s) => [
						s.name,
						{
							command: s.command,
							...(s.args && { args: s.args }),
							...(s.env && { env: s.env }),
						},
					]),
				),
			},
			readonly: false,
		});
	}
}
