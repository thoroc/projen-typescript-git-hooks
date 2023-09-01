export interface MD010 {
  /**
   * Include code blocks
   * @default true
   */
  readonly codeBlocks?: boolean;
  /**
   * Fenced code languages to ignore
   * @default []
   */
  readonly ignoreCodeLanguages?: Array<string>;
  /**
   * Number of spaces for each hard tab
   * @default 1
   */
  readonly spacesPerTab?: number;
}
