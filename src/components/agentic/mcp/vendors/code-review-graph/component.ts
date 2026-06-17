import { Component, type Project } from "projen";
import { AgentsMd } from "../../../agents-md";
import { ClaudeCode, GeminiCli, OpenAICodex, OpenCode } from "../../../harness";
import { McpConfig, McpServer } from "../..";
import { INSTRUCTIONS_CONTENT } from "./constants";

export class CodeReviewGraphMcpServer extends Component {
	static readonly serverName = "code-review-graph";

	public static of(project: Project): CodeReviewGraphMcpServer | undefined {
		const singleton = (c: Component): c is CodeReviewGraphMcpServer =>
			c instanceof CodeReviewGraphMcpServer;
		return project.components.find(singleton);
	}

	constructor(project: Project) {
		super(project);
		const server = new McpServer(CodeReviewGraphMcpServer.serverName, {
			command: "code-review-graph",
			args: ["serve"],
		});
		const config =
			McpConfig.of(project) ?? new McpConfig(project, { servers: [] });
		config.addServer(server);

		ClaudeCode.of(project)?.addMcpServer(server);
		GeminiCli.of(project)?.addMcpServer(server);
		OpenAICodex.of(project)?.addMcpServer(server);
		OpenCode.of(project)?.addMcpServer(server);

		AgentsMd.registerInstructions(
			project,
			CodeReviewGraphMcpServer.serverName,
			INSTRUCTIONS_CONTENT,
		);
	}
}
