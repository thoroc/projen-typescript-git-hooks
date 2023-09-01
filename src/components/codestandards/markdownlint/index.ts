import { Component, IgnoreFile, Project, SourceCode, YamlFile, typescript } from "projen";
import { MarkdownlintRules } from "./rules";
import { recursiveToSnake, toSnakeCase } from "../../../utils";

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
  /**
   * Returns the singletone component of a project or undefined if there is none.
   */
  public static of(project: Project): Markdownlint | undefined {
    const singleton = (c: Component): c is Markdownlint => c instanceof Markdownlint;
    return project.components.find(singleton);
  }

  readonly project: typescript.TypeScriptProject;
  readonly options: MarkdownlintOptions;

  private readonly defaultRules = {
    MD013: {
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
    MD024: {
      allowDifferentNesting: true,
      siblingsOnly: true,
    },
  };

  /**
   * Direct access to the markdownlint rules (escape hatch)
   */
  public rules: MarkdownlintRules;

  /**
   * The .markdownlintignore file.
   */
  public readonly ignoreFile?: IgnoreFile;

  constructor(project: typescript.TypeScriptProject, options?: MarkdownlintOptions) {
    super(project);
    this.project = project;
    this.options = options ?? {};
    this.rules = options?.rules ?? this.defaultRules;

    if (options?.ignoreFile ?? true) {
      this.ignoreFile = new IgnoreFile(project, ".markdownlintignore");
    }

    this.project.addDevDeps("markdownlint-cli2");

    if (Object.keys(this.rules).length > 0) {
      const transformedRules = recursiveToSnake(this.rules, toSnakeCase);

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
  }
}
