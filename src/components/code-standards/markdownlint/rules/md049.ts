export enum EmphasisStyle {
  ASTERISK = "asterisk",
  CONSISTENT = "consistent",
  UNDERSCORE = "underscore",
}

export interface Md049 {
  /**
   * Emphasis style should be consistent
   * @default EmphasisStyle.CONSISTENT
   */
  readonly style?: EmphasisStyle;
}
