import { Serializer, omit } from "../../../utils";

export interface LefthookCommandOptions {
  name: string;
  run: string;
  files?: string;
  exclude?: string;
  glob?: string;
  tags?: string;
}

export class LefthookCommand implements LefthookCommandOptions, Serializer {
  readonly name: string;
  readonly run: string;
  readonly files?: string;
  readonly exclude?: string;
  readonly glob?: string;
  readonly tags?: string;

  constructor(options: LefthookCommandOptions) {
    this.name = options.name;
    this.run = options.run;
    this.files = options.files;
    this.exclude = options.exclude;
    this.glob = options.glob;
    this.tags = options.tags;
  }

  serialise(): unknown {
    const transfomed: { [key: string]: any } = {};
    const name = this.name;
    const value = omit(this, "name");

    transfomed[name] = value;

    return transfomed;
  }
}
