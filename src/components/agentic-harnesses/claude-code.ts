import * as fs from "fs";
import * as path from "path";
import { Component, JsonFile, SampleFile, type Project } from "projen";

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
    new JsonFile(this.project, ClaudeCode.settingsPath, {
      obj: {
        $schema: "https://json.schemastore.org/claude-code-settings.json",
        ...(this.options?.permissions && {
          permissions: this.options.permissions,
        }),
        ...(this.options?.env && { env: this.options.env }),
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
