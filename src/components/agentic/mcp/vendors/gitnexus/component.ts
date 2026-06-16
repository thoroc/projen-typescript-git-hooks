import { Component, type Project } from "projen";
import { ClaudeCode, GeminiCli, OpenAICodex, OpenCode } from "../../../harness";
import { McpConfig, McpServer } from "../..";

export class GitNexusMcpServer extends Component {
	static readonly serverName = "gitnexus";

	public static of(project: Project): GitNexusMcpServer | undefined {
		const singleton = (c: Component): c is GitNexusMcpServer =>
			c instanceof GitNexusMcpServer;
		return project.components.find(singleton);
	}

	constructor(project: Project) {
		super(project);
		const server = new McpServer(GitNexusMcpServer.serverName, {
			command: "npx",
			args: ["-y", "gitnexus@latest", "mcp"],
		});
		const config =
			McpConfig.of(project) ?? new McpConfig(project, { servers: [] });
		config.addServer(server);
		ClaudeCode.of(project)?.addMcpServer(server);
		GeminiCli.of(project)?.addMcpServer(server);
		OpenAICodex.of(project)?.addMcpServer(server);
		OpenCode.of(project)?.addMcpServer(server);
	}
}
