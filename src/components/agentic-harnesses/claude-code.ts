import { Component, JsonFile, type Project } from "projen";

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
  }
}
