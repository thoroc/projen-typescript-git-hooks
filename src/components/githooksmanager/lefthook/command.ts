import { Serializer, omit } from "../../../utils";

export interface ILefthookCommand {
  name: string;
  run: string;
  files?: string;
  exclude?: string;
  glob?: string;
  tags?: string;
}

export class Command implements ILefthookCommand, Serializer {
  readonly name: string;
  readonly run: string;
  readonly files?: string;
  readonly exclude?: string;
  readonly glob?: string;
  readonly tags?: string;

  constructor(props: ILefthookCommand) {
    this.name = props.name;
    this.run = props.run;
    this.files = props.files;
    this.exclude = props.exclude;
    this.glob = props.glob;
    this.tags = props.tags;
  }

  serialise(): unknown {
    const transfomed: { [key: string]: any } = {};
    const name = this.name;
    const value = omit(this, "name");

    transfomed[name] = value;

    return transfomed;
  }
}
