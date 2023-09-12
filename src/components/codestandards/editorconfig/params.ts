import { ISerializer } from "../../../utils/serializer";

export interface EditorConfigParamsOptions {
  readonly indentStyle?: string;
  readonly indentSize?: number;
  readonly endOfLine?: string;
  readonly charset?: string;
  readonly insertFinalNewline?: boolean;
}

export class EditorConfigParams implements ISerializer {
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

  serialize(): object {
    return {
      indent_style: this.indentStyle,
      indent_size: this.indentSize,
      end_of_line: this.endOfLine,
      charset: this.charset,
      insert_final_newline: this.insertFinalNewline,
    };
  }
}
