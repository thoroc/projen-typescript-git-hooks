import { ISerializer } from "../../../utils";

export interface LefthookCommandOptions {
  readonly name: string;
  readonly run: string;
  readonly files?: string;
  readonly exclude?: string;
  readonly glob?: string;
  readonly tags?: string;
  readonly stagedFiles?: boolean;
}

export class LefthookCommand implements ISerializer {
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

  asRecords(): object {
    const records: { [key: string]: string | undefined } = {};
    const excludes: Array<string> = ["name", "stagedFiles"];

    for (const propName in this) {
      if (Object.prototype.hasOwnProperty.call(this, propName)) {
        const name: string = propName;
        const value: unknown = this[name as keyof LefthookCommand];
        const isNotExcluded: boolean = !excludes.includes(name);

        if (value !== undefined && value && isNotExcluded) {
          if (name === "run" && this.stagedFiles === true) {
            records[name] = `${value as string} {staged_files}`;
          } else {
            records[name] = value as string;
          }
        }
      }
    }

    return records;
  }

  serialize(): object {
    const transfomed: { [key: string]: object } = {};
    transfomed[this.name] = this.asRecords();

    return transfomed;
  }
}
