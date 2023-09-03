export enum UnorderedListStyle {
  CONSISTENT = "consistent",
  ASTERISK = "asterisk",
  DASH = "dash",
  PLUS = "plus",
  SUBLIST = "sublist",
}

export interface Md004 {
  /**
   * List style
   * @default UnorderedListStyle.CONSISTENT
   */
  readonly style?: UnorderedListStyle;
}
