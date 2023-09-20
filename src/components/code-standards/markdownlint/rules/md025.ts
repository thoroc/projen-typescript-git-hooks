export interface Md025 {
  /**
   * RegExp for matching title in front matter
   * @default ^\s*title\s*[:=]
   */
  readonly frontMatterTitle?: string;
  /**
   * Heading level
   * @default 1
   */
  readonly level?: number;
}
