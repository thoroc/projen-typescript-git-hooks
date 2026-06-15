import * as fs from "fs";
import * as path from "path";
import { Component, JsonFile, type Project, SampleFile } from "projen";
import type { McpServer } from "./mcp-server";

const AGENTS_MD_CONTENT = `# Agent Instructions

This file contains shared instructions for AI coding assistants.
Add your project-specific guidelines, conventions, and context here.
`;

export interface ClaudeCodePermissions {
  readonly allow?: Array<string>;
  readonly deny?: Array<string>;
}

export interface ClaudeCodeOptions {
  readonly permissions?: ClaudeCodePermissions;
  readonly env?: Record<string, string>;
  readonly mcpServers?: Array<McpServer>;
}

export class ClaudeCode extends Component {
  static readonly settingsPath = ".claude/settings.json";
  static readonly contextFile = "CLAUDE.md";

  public static of(project: Project): ClaudeCode | undefined {
    const singleton = (c: Component): c is ClaudeCode => c instanceof ClaudeCode;
    return project.components.find(singleton);
  }

  readonly options?: ClaudeCodeOptions;

  constructor(project: Project, options?: ClaudeCodeOptions) {
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

    new JsonFile(this.project, ClaudeCode.settingsPath, {
      obj: {
        $schema: "https://json.schemastore.org/claude-code-settings.json",
        ...(this.options?.permissions && {
          permissions: this.options.permissions,
        }),
        ...(this.options?.env && { env: this.options.env }),
        ...(mcpServersObj && { mcpServers: mcpServersObj }),
      },
      readonly: false,
    });

    new SampleFile(this.project, "AGENTS.md", { contents: AGENTS_MD_CONTENT });
  }

  postSynthesize(): void {
    const symlinkPath = path.join(this.project.outdir, ClaudeCode.contextFile);
    if (fs.existsSync(symlinkPath)) {
      if (fs.lstatSync(symlinkPath).isSymbolicLink()) return;
      return;
    }
    fs.symlinkSync("AGENTS.md", symlinkPath);
  }
}
