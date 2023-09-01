export interface MD013 {
  /**
   * Number of characters for code blocks
   * @default 80
   */
  readonly codeBlockLineLength?: number;
  /**
   * Include code blocks
   * @default true
   */
  readonly codeBlocks?: boolean;
  /**
   * Include headings
   * @default true
   * @deprecated
   */
  readonly headers?: boolean;
  /**
   * Number of characters for headings
   * @default 80
   */
  readonly headingLineLength?: number;
  /**
   * Include headings
   * @default true
   */
  readonly headings?: boolean;
  /**
   * Number of characters
   * @default 80
   */
  readonly lineLength?: number;
  /**
   * Stern length checking
   * @default false
   */
  readonly stern?: boolean;
  /**
   * Strict length checking
   * @default false
   */
  readonly strict?: boolean;
  /**
   * Include tables
   * @default true
   */
  readonly tables?: boolean;
}
