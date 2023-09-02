type SnakeToCamelCase<S extends string> =
  S extends `${infer T}_${infer U}` ?
  `${T}${Capitalize<SnakeToCamelCase<U>>}` :
  S

type N = 42;

type T11 = SnakeToCamelCase<"hello"> // "hello"
type T12 = SnakeToCamelCase<"hello_world"> // "helloWorld"
type T13 = SnakeToCamelCase<"hello_ts_world"> // "helloTsWorld"
type T14 = SnakeToCamelCase<"hello_world" | "foo_bar">// "helloWorld" | "fooBar"
type T15 = SnakeToCamelCase<string> // string
type T16 = SnakeToCamelCase<`the_answer_is_${N}`>//"theAnswerIs42" (type N = 42)

const hello: T11 = "hello";

console.log(hello);

const helloWorld: T12 = "hello_world";

console.log(helloWorld);