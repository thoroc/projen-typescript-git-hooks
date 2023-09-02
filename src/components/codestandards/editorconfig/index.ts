import { Component, TomlFile } from 'projen';
import { EditorConfigParams } from './params';
import { EditorConfigSection, EditorConfigSectionOptions } from './section';
import { GitHooksEnabledProject } from '../../../projects';

export interface EditorConfigOptions {
  sections: Array<EditorConfigSection>;
}

export class EditorConfig extends Component {
  readonly project: GitHooksEnabledProject;
  readonly options?: EditorConfigOptions;
  private sections?: Array<EditorConfigSectionOptions>;

  constructor(project: GitHooksEnabledProject, options?: EditorConfigOptions) {
    super(project);

    this.project = project;
    this.options = options;
    this.sections = options?.sections ?? [EditorConfigSection.defaultSection];

    this.project.addDeps('type-fest');
  }

  preSynthesize(): void {
    const transformed: { [key: string]: string | {} } = {};

    for (const id in this.sections) {
      const section = this.sections[id as keyof typeof this.sections];
      transformed[(section as EditorConfigSection).name] = new EditorConfigParams(
        (section as EditorConfigSection).params,
      ).serialise();
    }

    new TomlFile(this.project, '.editorconfig', {
      obj: { root: true, ...transformed },
    });
  }
}
