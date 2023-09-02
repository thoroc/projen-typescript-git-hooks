import { Component, Project, TomlFile } from "projen";
import { EditorConfigParams } from "./params";
import { EditorConfigSection, EditorConfigSectionOptions } from "./section";
import { GitHooksEnabledProject } from "../../../typescript/githooks-enabled-project";

export interface EditorConfigOptions {
  readonly sections: Array<EditorConfigSection>;
}

export class EditorConfig extends Component {
  readonly project: Project;
  readonly options?: EditorConfigOptions;
  private sections?: Array<EditorConfigSectionOptions>;

  constructor(project: GitHooksEnabledProject, options?: EditorConfigOptions) {
    super(project);

    this.project = project;
    this.options = options;
    this.sections = options?.sections ?? [EditorConfigSection.defaultEditorConfigSection];

    (this.project as GitHooksEnabledProject).addDeps("type-fest");
  }

  preSynthesize(): void {
    const transformed: { [key: string]: object } = {};

    for (const id in this.sections) {
      const section = this.sections[id as keyof typeof this.sections];
      transformed[(section as EditorConfigSection).name] = new EditorConfigParams(
        (section as EditorConfigSection).params,
      ).serialize();
    }

    new TomlFile(this.project, ".editorconfig", {
      obj: { root: true, ...transformed },
    });
  }
}

export * from "./section";
export * from "./params";