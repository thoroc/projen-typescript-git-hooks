export enum UnorderedListStyle {
  CONSISTENT = "consistent",
  ASTERISK = "asterisk",
  DASH = "dash",
  PLUS = "plus",
  SUBLIST = "sublist",
}

export interface MD004 {
  /**
   * List style
   * @default UnorderedListStyle.CONSISTENT
   */
  style?: UnorderedListStyle;
}
