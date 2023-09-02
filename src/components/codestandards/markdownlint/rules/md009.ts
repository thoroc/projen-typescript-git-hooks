export interface MD009 {
  /**
   * Spaces for line break
   * @default 2
   */
  readonly brSpaces?: number;
  /**
   * Allow spaces for empty lines in list items
   * @default false
   */
  readonly listItemEmptyLines?: boolean;
  /**
   * Include unnecessary breaks
   * @default false
   */
  readonly strict?: boolean;
}
