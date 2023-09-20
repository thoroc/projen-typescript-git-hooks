export interface Md043 {
  /**
   * List of headings
   * @default []
   * @deprecated use headings instead
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
