import { type IResolver, type Project, YamlFile } from "projen";

export class LefthookFile extends YamlFile {
  constructor(project: Project, obj: object) {
    super(project, "lefthook.yml", { executable: true, obj });
  }

  protected synthesizeContent(resolver: IResolver): string | undefined {
    const raw = super.synthesizeContent(resolver);
    if (raw == null) return raw;

    const lines = raw.split("\n");
    const output: string[] = [];
    let pastFirstSection = false;

    for (const line of lines) {
      if (/^[a-zA-Z_-]/.test(line)) {
        if (pastFirstSection) output.push("");
        pastFirstSection = true;
      }
      output.push(line);
    }

    return output.join("\n");
  }
}
