export enum CodeBlockStyle {
  CONSISTENT = "consistent",
  FENCED = "fenced",
  INDENTED = "indented",
}

export interface MD046 {
  /**
   * Block style
   * @default CodeBlockStyle.CONSISTENT
   */
  readonly style: CodeBlockStyle;
}
