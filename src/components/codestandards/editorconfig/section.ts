import { EditorConfigParamsOptions } from "./params";

export interface EditorConfigSectionOptions {
  name: string;
  params: EditorConfigParamsOptions;
}

export class EditorConfigSection implements EditorConfigSectionOptions {
  static defaultSection = {
    name: "*",
    params: {
      indentStyle: "space",
      indentSize: 2,
      endOfLine: "lf",
      charset: "utf-8",
      insertFinalNewline: true,
    },
  };

  readonly name: string;
  readonly params: EditorConfigParamsOptions;

  constructor(options: EditorConfigSectionOptions) {
    this.name = options.name;
    this.params = options.params;
  }
}
