export interface Md044 {
  /**
   * Include code blocks
   * @default true
   */
  readonly codeBlocks?: boolean;
  /**
   * Include HTML elements
   * @default true
   */
  readonly htmlElements?: boolean;
  /**
   * List of proper names
   * @default []
   */
  readonly names?: Array<string>;
}
