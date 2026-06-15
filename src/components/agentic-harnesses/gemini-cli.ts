import * as fs from "fs";
import * as path from "path";
import { Component, JsonFile, SampleFile, type Project } from "projen";

const AGENTS_MD_CONTENT = `# Agent Instructions

This file contains shared instructions for AI coding assistants.
Add your project-specific guidelines, conventions, and context here.
`;

export interface GeminiCliOptions {
  readonly theme?: string;
  readonly model?: string;
  readonly contextFileNames?: Array<string>;
}

export class GeminiCli extends Component {
  static readonly settingsPath = ".gemini/settings.json";
  static readonly contextFile = "GEMINI.md";

  public static of(project: Project): GeminiCli | undefined {
    const singleton = (c: Component): c is GeminiCli => c instanceof GeminiCli;
    return project.components.find(singleton);
  }

  readonly options?: GeminiCliOptions;

  constructor(project: Project, options?: GeminiCliOptions) {
    super(project);
    this.options = options;
  }

  preSynthesize(): void {
    new JsonFile(this.project, GeminiCli.settingsPath, {
      obj: {
        $schema:
          "https://raw.githubusercontent.com/google-gemini/gemini-cli/main/schemas/settings.schema.json",
        ...(this.options?.theme && { ui: { theme: this.options.theme } }),
        ...(this.options?.model && { model: { name: this.options.model } }),
        ...(this.options?.contextFileNames && {
          context: { fileName: this.options.contextFileNames },
        }),
      },
      readonly: false,
    });

    new SampleFile(this.project, "AGENTS.md", { contents: AGENTS_MD_CONTENT });
  }

  postSynthesize(): void {
    const symlinkPath = path.join(this.project.outdir, GeminiCli.contextFile);
    if (fs.existsSync(symlinkPath)) {
      if (fs.lstatSync(symlinkPath).isSymbolicLink()) return;
      return;
    }
    fs.symlinkSync("AGENTS.md", symlinkPath);
  }
}
