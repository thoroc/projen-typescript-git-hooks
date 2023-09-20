export interface Md007 {
  /**
   * Spaces for indent
   * @default 2
   */
  readonly indent?: number;
  /**
   * Spaces for first level indent (when start_indented is set)
   * @default 2
   */
  readonly startIndent?: number;
  /**
   * Whether to indent the first level of the list
   * @default false
   */
  readonly startIndented?: boolean;
}
