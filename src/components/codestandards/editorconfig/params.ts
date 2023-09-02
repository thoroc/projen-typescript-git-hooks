import { SnakeCasedPropertiesDeep } from 'type-fest';

export interface EditorConfigParamsOptions {
  indentStyle?: string;
  indentSize?: number;
  endOfLine?: string;
  charset?: string;
  insertFinalNewline?: boolean;
}

export class EditorConfigParams implements EditorConfigParamsOptions {
  readonly indentStyle?: string;
  readonly indentSize?: number;
  readonly endOfLine?: string;
  readonly charset?: string;
  readonly insertFinalNewline?: boolean;

  constructor(options: EditorConfigParamsOptions) {
    this.indentStyle = options.indentStyle;
    this.indentSize = options.indentSize;
    this.endOfLine = options.endOfLine;
    this.charset = options.charset;
    this.insertFinalNewline = options.insertFinalNewline;
  }

  serialise(): SnakeCasedPropertiesDeep<EditorConfigParamsOptions> {
    return {
      indent_style: this.indentStyle,
      indent_size: this.indentSize,
      end_of_line: this.endOfLine,
      charset: this.charset,
      insert_final_newline: this.insertFinalNewline,
    };
  }
}
