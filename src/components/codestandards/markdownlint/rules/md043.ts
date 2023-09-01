export interface MD043 {
  /**
   * List of headings
   * @default []
   * @deprecated
   */
  readonly headers?: Array<string>;
  /**
   * List of headings
   * @default []
   */
  readonly headings?: Array<string>;
  /**
   * Match case of headings
   * @default false
   */
  readonly matchCase?: boolean;
}
