export const objectKeyCaseConverter = (
  root: unknown,
  callback: (k: string) => string,
): object | undefined => {
  if (typeof root !== "object") {
    return root;
  } else if (Array.isArray(root)) {
    return root.map((item) => objectKeyCaseConverter(item, callback));
  } else if (root === null) {
    return undefined;
  }

  const entries = Object.entries(root);
  const mappedEntries = entries.map(([k, v]) => [callback(k), objectKeyCaseConverter(v, callback)] as const);

  return Object.fromEntries(mappedEntries);
};

export interface ISerializer {
  serialize(): object;
}
