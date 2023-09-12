export * from "./serializer";

// Shamelessly lifted from https://stackoverflow.com/questions/17781472/how-to-get-a-subset-of-a-javascript-objects-properties

export const pick = <T extends {}, K extends keyof T>(obj: T, ...keys: Array<K>) =>
  Object.fromEntries(keys.filter((key) => key in obj).map((key) => [key, obj[key]])) as Pick<T, K>;

export const inclusivePick = <T extends {}, K extends string | number | symbol>(obj: T, ...keys: Array<K>) =>
  Object.fromEntries(keys.map((key) => [key, obj[key as unknown as keyof T]])) as {
    [key in K]: key extends keyof T ? T[key] : undefined;
  };

export const omit = <T extends {}, K extends keyof T>(obj: T, ...keys: Array<K>) =>
  Object.fromEntries(Object.entries(obj).filter(([key]) => !keys.includes(key as K))) as Omit<T, K>;
