import * as fs from "fs";
import * as path from "path";
import { Component, JsonFile, type Project } from "projen";
import { AgentsMd } from "./agents-md";
import { McpServer } from "./mcp-server";

export interface GeminiCliOptions {
  readonly theme?: string;
  readonly model?: string;
  readonly contextFileNames?: Array<string>;
  readonly mcpServers?: Array<McpServer>;
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
    void (AgentsMd.of(project) ?? new AgentsMd(project));
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

    new JsonFile(this.project, GeminiCli.settingsPath, {
      obj: {
        $schema:
          "https://raw.githubusercontent.com/google-gemini/gemini-cli/main/schemas/settings.schema.json",
        ...(mcpServersObj && { mcpServers: mcpServersObj }),
        ...(this.options?.theme && { ui: { theme: this.options.theme } }),
        ...(this.options?.model && { model: { name: this.options.model } }),
        ...(this.options?.contextFileNames && {
          context: { fileName: this.options.contextFileNames },
        }),
      },
      readonly: false,
    });
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
