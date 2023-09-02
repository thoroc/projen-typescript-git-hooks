export enum CodeBlockStyle {
  CONSISTENT = 'consistent',
  FENCED = 'fenced',
  INDENTED = 'indented',
}

export interface Md046 {
  /**
   * Block style
   * @default CodeBlockStyle.CONSISTENT
   */
  readonly style: CodeBlockStyle;
}
