import { Component, type Project } from "projen";
import { ClaudeCode } from "../../anthropic";
import { GeminiCli } from "../../google";
import { McpConfig, McpServer } from "../../mcp";
import { OpenAICodex } from "../../openai";
import { OpenCode } from "../../opencode";

export class QmdMcpServer extends Component {
	static readonly serverName = "qmd";

	public static of(project: Project): QmdMcpServer | undefined {
		const singleton = (c: Component): c is QmdMcpServer =>
			c instanceof QmdMcpServer;
		return project.components.find(singleton);
	}

	constructor(project: Project) {
		super(project);
		const server = new McpServer(QmdMcpServer.serverName, {
			command: "qmd",
			args: ["mcp"],
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
