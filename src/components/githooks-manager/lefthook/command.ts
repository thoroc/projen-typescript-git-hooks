import { ISerializer } from "../../../utils";

export interface LefthookCommandOptions {
  /**
   * Command's name
   */
  readonly name: string;
  /**
   * This is a mandatory option for a command.
   * This is actually a command that is executed for the hook.
   * @see https://github.com/evilmartians/lefthook/blob/master/docs/configuration.md#run
   */
  readonly run: string;
  /**
   * A custom git command for files to be referenced in {files} template for run setting.
   * @see https://github.com/evilmartians/lefthook/blob/master/docs/configuration.md#files
   */
  readonly files?: string;
  /**
   * You can provide a regular expression to exclude some files from being passed to run command.
   * @see https://github.com/evilmartians/lefthook/blob/master/docs/configuration.md#exclude
   */
  readonly exclude?: string;
  /**
   * You can set a glob to filter files for your command.
   * @see https://github.com/evilmartians/lefthook/blob/master/docs/configuration.md#glob
   */
  readonly glob?: string;
  /**
   * You can specify tags for commands and scripts
   * @see https://github.com/evilmartians/lefthook/blob/master/docs/configuration.md#tags
   */
  readonly tags?: string;
  /**
   * Staged files which you try to commit.
   * @see https://github.com/evilmartians/lefthook/blob/master/docs/configuration.md#run
   */
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

  /**
   * Transform the LefthookCommand to a lefthook friend object
   * @returns object
   */
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
