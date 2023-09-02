export enum CodeFenceStyle {
  BACKTICK = 'backtick',
  CONSISTENT = 'consistent',
  TILDE = 'tilde',
}

export interface MD048 {
  /**
   * Code fence style
   * @default CodeFenceStyle.CONSISTENT
   */
  readonly style?: CodeFenceStyle;
}
