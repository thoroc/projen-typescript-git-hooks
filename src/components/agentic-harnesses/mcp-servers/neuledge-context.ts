import { Component, type Project } from "projen";
import { ClaudeCode } from "../claude-code";
import { GeminiCli } from "../gemini-cli";
import { McpConfig } from "../mcp-config";
import { McpServer } from "../mcp-server";
import { OpenAICodex } from "../openai-codex";
import { OpenCode } from "../opencode";

export class NeuledgeContextMcpServer extends Component {
	static readonly serverName = "context";

	public static of(project: Project): NeuledgeContextMcpServer | undefined {
		const singleton = (c: Component): c is NeuledgeContextMcpServer =>
			c instanceof NeuledgeContextMcpServer;
		return project.components.find(singleton);
	}

	constructor(project: Project) {
		super(project);
		const server = new McpServer(NeuledgeContextMcpServer.serverName, {
			command: "context",
			args: ["serve"],
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
