import { Component, type Project } from "projen";
import { AgentsMd } from "../../../agents-md";
import { ClaudeCode, GeminiCli, OpenAICodex, OpenCode } from "../../../harness";
import { McpConfig, McpServer } from "../..";
import { INSTALL_BINARY, INSTRUCTIONS_CONTENT } from "./constants";

export class NeuledgeContextMcpServer extends Component {
	static readonly serverName = "neuledge-context";

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

		AgentsMd.registerInstructions(
			project,
			NeuledgeContextMcpServer.serverName,
			INSTRUCTIONS_CONTENT,
		);

		const installTask = project.tasks.addTask("neuledge-context:install", {
			description: "Install neuledge/context binary",
		});
		installTask.exec(INSTALL_BINARY, { name: "install-binary" });
	}
}
