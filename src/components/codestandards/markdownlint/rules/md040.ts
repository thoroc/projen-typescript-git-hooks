export interface Md040 {
  /**
   * List of languages
   * @default []
   */
  readonly allowedLanguages?: Array<string>;
  /**
   * Require language only
   * @default false
   */
  readonly languageOnly?: boolean;
}
