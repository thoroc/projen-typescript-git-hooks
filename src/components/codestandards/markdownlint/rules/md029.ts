export enum OrderedListItemPrefix {
  ONE = "one",
  ONE_OR_ORDERED = "one_or_ordered",
  ORDERED = "ordered",
  ZERO = "zero",
}

export interface Md029 {
  /**
   * List style
   * @default OrderedListItemPrefix.ONE_OR_ORDERED
   */
  readonly style?: OrderedListItemPrefix;
}
