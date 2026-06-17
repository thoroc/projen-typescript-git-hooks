import { Component, type Project } from "projen";
import { ClaudeCode, GeminiCli, OpenAICodex, OpenCode } from "../../../harness";
import { McpConfig, McpServer } from "../..";
import { AislopConfig, type AislopConfigOptions } from "./config";

export interface AislopMcpServerOptions {
	readonly config?: AislopConfigOptions;
}

export class AislopMcpServer extends Component {
	static readonly serverName = "aislop";

	public static of(project: Project): AislopMcpServer | undefined {
		const singleton = (c: Component): c is AislopMcpServer =>
			c instanceof AislopMcpServer;
		return project.components.find(singleton);
	}

	constructor(project: Project, options?: AislopMcpServerOptions) {
		super(project);
		const server = new McpServer(AislopMcpServer.serverName, {
			command: "npx",
			args: ["-y", "aislop-mcp"],
		});
		const config =
			McpConfig.of(project) ?? new McpConfig(project, { servers: [] });
		config.addServer(server);

		const claude = ClaudeCode.of(project) ?? new ClaudeCode(project);
		claude.addMcpServer(server);
		claude.addHook("PostToolUse", {
			matcher: "Edit|Write|MultiEdit",
			hooks: [{ type: "command", command: "aislop hook claude" }],
		});

		if (options?.config !== undefined && !AislopConfig.of(project)) {
			new AislopConfig(project, options.config);
		}

		GeminiCli.of(project)?.addMcpServer(server);
		OpenAICodex.of(project)?.addMcpServer(server);
		OpenCode.of(project)?.addMcpServer(server);
	}
}
