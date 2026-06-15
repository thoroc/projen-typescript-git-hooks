import { Component, SampleFile, TomlFile, type Project } from "projen";
import { McpServer } from "./mcp-server";

const AGENTS_MD_CONTENT = `# Agent Instructions

This file contains shared instructions for AI coding assistants.
Add your project-specific guidelines, conventions, and context here.
`;

export interface OpenAICodexOptions {
  readonly model?: string;
  readonly approvalPolicy?: "suggest" | "auto-edit" | "full-auto";
  readonly sandboxMode?: "read-only" | "workspace-write" | "danger-full-access";
  readonly mcpServers?: McpServer[];
}

export class OpenAICodex extends Component {
  static readonly settingsPath = ".codex/config.toml";
  static readonly contextFile = "AGENTS.md";

  public static of(project: Project): OpenAICodex | undefined {
    const singleton = (c: Component): c is OpenAICodex => c instanceof OpenAICodex;
    return project.components.find(singleton);
  }

  readonly options?: OpenAICodexOptions;

  constructor(project: Project, options?: OpenAICodexOptions) {
    super(project);
    this.options = options;
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

    new TomlFile(this.project, OpenAICodex.settingsPath, {
      obj: {
        ...(this.options?.model && { model: this.options.model }),
        ...(this.options?.approvalPolicy && { approval_policy: this.options.approvalPolicy }),
        ...(this.options?.sandboxMode && { sandbox_mode: this.options.sandboxMode }),
        ...(mcpServersObj && { mcp_servers: mcpServersObj }),
      },
    });

    new SampleFile(this.project, "AGENTS.md", { contents: AGENTS_MD_CONTENT });
  }
}
