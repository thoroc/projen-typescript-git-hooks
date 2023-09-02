// import { camelCase, capitalCase, constantCase, dotCase, headerCase, noCase, paramCase, pascalCase, pathCase, sentenceCase, snakeCase } from "change-case";

// function demoCase(fn: any, testString?: string) {
//   const text: string = testString ?? "hello world";

//   console.log(`${fn.name}:\t"${text}" => "${fn(text)}"`);
// }

// demoCase(camelCase);
// demoCase(capitalCase);
// demoCase(constantCase);
// demoCase(dotCase);
// demoCase(headerCase);
// demoCase(noCase);
// demoCase(paramCase);
// demoCase(pascalCase);
// demoCase(pathCase);
// demoCase(sentenceCase);
// demoCase(snakeCase);

interface EditorConfig {
  indentStyle?: string;
  indentSize?: number;
  endOfLine?: string;
  charset?: string;
  insertFinalNewline?: boolean;
}

const config: EditorConfig = {
  indentSize: 2,
  indentStyle: "space",
  endOfLine: "lf",
  charset: "utf-8",
  insertFinalNewline: true,
}

function toSnakeCase(input: string): string {
  return input.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
}

const snakeCaseConfig: EditorConfig = {};

for (const key in config) {
  if (Object.prototype.hasOwnProperty.call(config, key)) {
    const snakeKey = toSnakeCase(key);
    // snakeCaseConfig[snakeKey as keyof EditorConfig] = config[key] as EditorConfig[keyof EditorConfig];
    snakeCaseConfig[snakeKey] = config[key] as any;
    // snakeCaseConfig[snakeKey as keyof EditorConfig] = config[key as keyof EditorConfig];
  }
}

console.log(snakeCaseConfig);

