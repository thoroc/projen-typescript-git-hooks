import { Serializer, omit } from "../../../utils";

export interface LefthookCommandOptions {
  name: string;
  run: string;
  files?: string;
  exclude?: string;
  glob?: string;
  tags?: string;
  stagedFiles?: boolean;
}

export class LefthookCommand implements LefthookCommandOptions, Serializer {
  readonly name: string;
  readonly run: string;
  readonly files?: string;
  readonly exclude?: string;
  readonly glob?: string;
  readonly tags?: string;
  readonly stagedFiles: boolean;

  constructor(options: LefthookCommandOptions) {
    this.name = options.name;
    this.run = options.run;
    this.files = options.files;
    this.exclude = options.exclude;
    this.glob = options.glob;
    this.tags = options.tags;
    this.stagedFiles = options.stagedFiles ?? true;
  }

  asRecords(): Record<string, string | boolean> {
    const props = Object.getOwnPropertyNames(this);
    const records: Record<string, string> = {};

    for (const id in props) {
      const name: string = props[id];
      const value: any = this[name as keyof LefthookCommand];

      if (value !== undefined && value) {
        if (name === "run" && this.stagedFiles === true) {
          records[name] = `${value} {staged_files}`;
        } else {
          records[name] = value;
        }
      }
    }

    return records;
  }

  serialise(): unknown {
    const transfomed: { [key: string]: any } = {};
    const name = this.name;
    const values = omit(this.asRecords(), "name", "stagedFiles");

    transfomed[name] = values;

    // console.log(values);

    return transfomed;
  }
}
