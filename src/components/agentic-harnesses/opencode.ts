import * as fs from "fs";
import * as path from "path";
import { Component, JsonFile, SampleFile, type Project } from "projen";
import { McpServer } from "./mcp-server";

const AGENTS_MD_CONTENT = `# Agent Instructions

This file contains shared instructions for AI coding assistants.
Add your project-specific guidelines, conventions, and context here.
`;

export interface OpenCodeOptions {
  readonly model?: string;
  readonly autoupdate?: boolean;
  readonly permission?: Record<string, "allow" | "ask" | "deny">;
  readonly mcpServers?: Array<McpServer>;
}

export class OpenCode extends Component {
  static readonly settingsPath = "opencode.json";
  static readonly contextFile = "OPENCODE.md";

  public static of(project: Project): OpenCode | undefined {
    const singleton = (c: Component): c is OpenCode => c instanceof OpenCode;
    return project.components.find(singleton);
  }

  readonly options?: OpenCodeOptions;

  constructor(project: Project, options?: OpenCodeOptions) {
    super(project);
    this.options = options;
  }

  preSynthesize(): void {
    const mcp =
      this.options?.mcpServers &&
      Object.fromEntries(
        this.options.mcpServers.map((s) => [
          s.name,
          {
            type: "local" as const,
            command: [s.command, ...(s.args ?? [])],
            ...(s.env && { environment: s.env }),
          },
        ]),
      );

    new JsonFile(this.project, OpenCode.settingsPath, {
      obj: {
        $schema: "https://opencode.ai/config.json",
        ...(mcp && { mcp }),
        ...(this.options?.model && { model: this.options.model }),
        ...(this.options?.autoupdate !== undefined && { autoupdate: this.options.autoupdate }),
        ...(this.options?.permission && { permission: this.options.permission }),
      },
      readonly: false,
    });

    new SampleFile(this.project, "AGENTS.md", { contents: AGENTS_MD_CONTENT });
  }

  postSynthesize(): void {
    const symlinkPath = path.join(this.project.outdir, OpenCode.contextFile);
    if (fs.existsSync(symlinkPath)) {
      if (fs.lstatSync(symlinkPath).isSymbolicLink()) return;
      return;
    }
    fs.symlinkSync("AGENTS.md", symlinkPath);
  }
}
