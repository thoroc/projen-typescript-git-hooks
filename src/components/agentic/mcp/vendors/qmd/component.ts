import { Component, type Project } from "projen";
import { AgentsMd } from "../../../agents-md";
import { ClaudeCode, GeminiCli, OpenAICodex, OpenCode } from "../../../harness";
import { McpConfig, McpServer } from "../..";
import { INSTALL_BINARY, INSTRUCTIONS_CONTENT } from "./constants";

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

		AgentsMd.registerInstructions(project, "qmd", INSTRUCTIONS_CONTENT);

		const installTask = project.tasks.addTask("qmd:install", {
			description: "Install QMD binary",
		});
		installTask.exec(INSTALL_BINARY, { name: "install-binary" });
	}
}
