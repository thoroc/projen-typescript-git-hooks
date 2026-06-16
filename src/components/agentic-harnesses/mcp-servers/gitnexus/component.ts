import { Component, type Project } from "projen";
import { ClaudeCode } from "../../anthropic";
import { GeminiCli } from "../../google";
import { McpConfig, McpServer } from "../../mcp";
import { OpenAICodex } from "../../openai";
import { OpenCode } from "../../opencode";

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
