import { ISerializer } from "../../../../utils";

export abstract class Rule implements ISerializer {
  serialize(): object {
    return {
      classNameAsPascalCase: {
        "props-as-kebab-case": "value",
      },
    };
  }
}