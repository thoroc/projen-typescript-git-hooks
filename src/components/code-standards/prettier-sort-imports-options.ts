/**
 * Options for @trivago/prettier-plugin-sort-imports.
 * Providing this object enables the plugin.
 */
export interface PrettierSortImportsOptions {
	/**
	 * Regex patterns defining import group order.
	 * @default ["<THIRD_PARTY_MODULES>", "^[./]"]
	 */
	readonly importOrder?: Array<string>;

	/**
	 * Insert a blank line between each import group.
	 * @default true
	 */
	readonly importOrderSeparation?: boolean;

	/**
	 * Sort named specifiers within each import alphabetically.
	 * @default true
	 */
	readonly importOrderSortSpecifiers?: boolean;

	/**
	 * Use case-insensitive ordering.
	 * @default false
	 */
	readonly importOrderCaseInsensitive?: boolean;
}
