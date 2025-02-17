import * as cc from "change-case";
import { Component, IgnoreFile, Project, SourceCode, YamlFile } from "projen";
import { MarkdownlintRules } from "./markdownlint-rules";
import { GitHooksEnabledProject } from "../../../typescript/githooks-enabled-project";
import { objectKeyCaseConverter } from "../../../utils/serializer";
import { Husky, LintStaged } from "../../githooks-manager/husky";

export interface MarkdownlintOptions {
  /**
   * Set the rules for Markdownlint
   */
  readonly rules?: MarkdownlintRules;
  /**
   * Defines an .markdownlintignore file
   *
   * @default true
   */
  readonly ignoreFile?: boolean;
}

export class Markdownlint extends Component {
  static defaultRules: MarkdownlintRules = {
    md013: {
      lineLength: 80,
      headingLineLength: 80,
      codeBlockLineLength: 80,
      codeBlocks: false,
      tables: false,
      headers: true,
      headings: true,
      strict: false,
      stern: false,
    },
    md024: {
      allowDifferentNesting: true,
      siblingsOnly: true,
    },
  };

  /**
   * Returns the singletone component of a project or undefined if there is none.
   */
  public static of(project: Project): Markdownlint | undefined {
    const singleton = (c: Component): c is Markdownlint => c instanceof Markdownlint;
    return project.components.find(singleton);
  }

  readonly project: Project;
  readonly options: MarkdownlintOptions;

  /**
   * Direct access to the markdownlint rules (escape hatch)
   */
  public rules: MarkdownlintRules;

  /**
   * The .markdownlintignore file.
   */
  public readonly ignoreFile?: IgnoreFile;

  constructor(project: GitHooksEnabledProject, options?: MarkdownlintOptions) {
    super(project);
    this.project = project;
    this.options = options ?? {};
    this.rules = options?.rules ?? Markdownlint.defaultRules;

    if (options?.ignoreFile ?? true) {
      this.ignoreFile = new IgnoreFile(project, ".markdownlintignore");
    }

    (this.project as GitHooksEnabledProject).addDevDeps("markdownlint-cli2");

    if (Object.keys(this.rules).length > 0) {
      const transformedRules = objectKeyCaseConverter(this.rules, cc.kebabCase);

      new YamlFile(this.project, "markdownlint.yml", {
        obj: transformedRules,
      });
    }
  }

  /**
   * Defines Markdownlint ignore Patterns
   * these patterns will be added to the file .markdownlintignore
   *
   * @param pattern filepatterns so exclude from Markdownlint formatting
   */
  public addIgnorePattern(pattern: string) {
    this.ignoreFile?.addPatterns(pattern);
  }

  public preSynthesize() {
    // Add automatically generated SourceCode files to .markdownlintignore as they may not be formatted correctly.
    const isSourceCode = (c: Component): c is SourceCode => c instanceof SourceCode;
    this.project.components.filter(isSourceCode).forEach((c) => {
      this.addIgnorePattern(c.filePath);
    });

    if ((this.project as GitHooksEnabledProject).gitHooksManager instanceof Husky) {
      LintStaged.of(this.project as GitHooksEnabledProject)?.addRule({
        filePattern: "*.md",
        commands: ["markdownlint-cli2 --fix"],
      });
    }
  }
}
