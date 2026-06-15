import * as fs from "fs";
import * as path from "path";
import { Component, SampleFile, TomlFile, type Project } from "projen";

const AGENTS_MD_CONTENT = `# Agent Instructions

This file contains shared instructions for AI coding assistants.
Add your project-specific guidelines, conventions, and context here.
`;

export interface MistralVibeOptions {
  readonly model?: string;
}

export class MistralVibe extends Component {
  static readonly settingsPath = ".vibe/config.toml";
  static readonly contextFile = "VIBE.md";

  public static of(project: Project): MistralVibe | undefined {
    const singleton = (c: Component): c is MistralVibe => c instanceof MistralVibe;
    return project.components.find(singleton);
  }

  readonly options?: MistralVibeOptions;

  constructor(project: Project, options?: MistralVibeOptions) {
    super(project);
    this.options = options;
  }

  preSynthesize(): void {
    new TomlFile(this.project, MistralVibe.settingsPath, {
      obj: {
        ...(this.options?.model && { model: this.options.model }),
      },
    });

    new SampleFile(this.project, "AGENTS.md", { contents: AGENTS_MD_CONTENT });
  }

  postSynthesize(): void {
    const symlinkPath = path.join(this.project.outdir, MistralVibe.contextFile);
    if (fs.existsSync(symlinkPath)) {
      if (fs.lstatSync(symlinkPath).isSymbolicLink()) return;
      return;
    }
    fs.symlinkSync("AGENTS.md", symlinkPath);
  }
}
