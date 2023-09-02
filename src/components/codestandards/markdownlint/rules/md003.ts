export enum HeadingStyle {
  CONSTITENT = 'consistent',
  ATX = 'atx',
  ATX_CLOSED = 'atx_closed',
  SETEXT = 'setext',
  SETEXT_WITH_ATX = 'setext_with_atx',
  SETEXT_WITH_ATX_CLOSED = 'setext_with_atx_closed',
}

export interface MD003 {
  /**
   * Heading style
   * @default HeadingStyle.CONSISTENT
   */
  style?: HeadingStyle;
}
