export enum StrongStyle {
  ASTERISK = 'asterisk',
  CONSISTENT = 'consistent',
  UNDERSCORE = 'underscore',
}
export interface MD050 {
  /**
   * Strong style should be consistent
   * @default StrongStyle.CONSISTENT
   */
  readonly style?: StrongStyle;
}
