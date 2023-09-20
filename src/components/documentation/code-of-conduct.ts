import { Component, Project, TextFile } from "projen";
import { getContent } from "../../utils/fetch";

export interface CodeOfConductOptions {
  readonly version?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1";
  readonly author: string;
}

export class CodeOfConduct extends Component {
  readonly version: string;
  readonly author: string;
  constructor(project: Project, options?: CodeOfConductOptions) {
    super(project);

    this.version = options?.version ?? "2.1";
    this.author = options?.author ?? "";

    const majorVersion = this.version.split(".")[0];
    const minorVersion = this.version.split(".")[1];

    getContent(
      `https://www.contributor-covenant.org/version/${majorVersion}/${minorVersion}/code_of_conduct/code_of_conduct.md`,
    )
      .then((data) => {
        const body: string = data;
        const pattern = /\[INSERT CONTACT METHOD\]/g;
        const document = new TextFile(project, "CODE_OF_CONDUCT.md", {
          lines: body.replace(pattern, this.author).split("\n"),
        });
        document.synthesize();

        console.log("retrieving CODE_OF_CONDUCT.md content");
      })
      .catch((err) => console.error(err));
  }
}
