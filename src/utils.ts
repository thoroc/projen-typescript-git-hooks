// Shamelessly lifted from https://stackoverflow.com/questions/17781472/how-to-get-a-subset-of-a-javascript-objects-properties

export const pick = <T extends {}, K extends keyof T>(obj: T, ...keys: Array<K>) =>
  Object.fromEntries(keys.filter((key) => key in obj).map((key) => [key, obj[key]])) as Pick<T, K>;

export const inclusivePick = <T extends {}, K extends string | number | symbol>(obj: T, ...keys: Array<K>) =>
  Object.fromEntries(keys.map((key) => [key, obj[key as unknown as keyof T]])) as {
    [key in K]: key extends keyof T ? T[key] : undefined;
  };

export const omit = <T extends {}, K extends keyof T>(obj: T, ...keys: Array<K>) =>
  Object.fromEntries(Object.entries(obj).filter(([key]) => !keys.includes(key as K))) as Omit<T, K>;

// export function toSnakeCase(str: string) {
//   return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
// }

// export function recursiveToSnake(item: unknown, transformer: any, depth = 0): unknown {
//   if (Array.isArray(item)) {
//     return item.map((el: unknown) => recursiveToSnake(el, depth + 1));
//   } else if (typeof item === "function" || item !== Object(item)) {
//     return item;
//   }
//   return Object.fromEntries(
//     Object.entries(item as Record<string, unknown>).map(([key, value]: [string, unknown]) => [
//       depth === 0 ? key : transformer(key),
//       recursiveToSnake(value, depth + 1),
//     ]),
//   );
// }
