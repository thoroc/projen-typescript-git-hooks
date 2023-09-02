type UncapitalizeObjectKeys<T extends object> = {
  [key in UncapitalizeKeys<T>]: Capitalize<key> extends keyof T ? T[Capitalize<key>] : never;
}

type UncapitalizeKeys<T extends object> = Uncapitalize<keyof T & string>;


export const lowerCaseKeys = <T extends object>(obj: T): UncapitalizeObjectKeys<T> => {
  const entries = Object.entries(obj);
  const mappedEntries = entries.map(
    ([k, v]) => [
      `${k.substr(0, 1).toLowerCase()}${k.substr(1)}`,
      lowerCaseKeys(v)]
  );

  return Object.fromEntries(mappedEntries) as UncapitalizeObjectKeys<T>;
};

const x = lowerCaseKeys({ Foo: "abc", Baa: "def" })

console.log(x);
