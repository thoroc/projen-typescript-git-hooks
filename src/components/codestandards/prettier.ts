import { Project, javascript } from "projen";
import { PrettierOptions, ProseWrap, QuoteProps, TrailingComma } from "projen/lib/javascript";
import { GitHooksEnabledProject } from "../../typescript/githooks-enabled-project";
import { GitClientHook, Lefthook } from "../githooksmanager";
import { LintStaged } from "../githooksmanager/lintstaged";

export class Prettier extends javascript.Prettier {
  static defaultPrettierOptions: PrettierOptions = {
    settings: {
      bracketSpacing: true,
      printWidth: 110,
      semi: true,
      tabWidth: 2,
      trailingComma: TrailingComma.ALL,
      useTabs: false,
    },
    overrides: [
      {
        files: ["*.md"],
        options: {
          printWidth: 120,
          proseWrap: ProseWrap.ALWAYS,
          quoteProps: QuoteProps.ASNEEDED,
          semi: true,
          singleQuote: false,
        },
      },
    ],
  };

  readonly project: Project;

  constructor(project: GitHooksEnabledProject, options?: PrettierOptions) {
    super(project as javascript.NodeProject, options ?? Prettier.defaultPrettierOptions);

    this.project = project;
    (this.project as GitHooksEnabledProject).addDevDeps("@types/prettier");

    this.project.addTask("format", {
      description: "Runs Prettier",
      exec: 'npx prettier --write "{src,projenrc}/**/*.{js,jsx,ts,tsx}"',
    });

    this.ignoreFile?.addPatterns("tsconfig.dev.json", "tsconfig.json", "node_modules", "build", "coverage");

    LintStaged.of(this.project as GitHooksEnabledProject)?.addRule({
      filePattern: "*.md",
      commands: "npx prettier --write --prose-wrap always",
    });

    Lefthook.of(this.project as GitHooksEnabledProject)?.addCommand(GitClientHook.PRE_COMMIT, {
      name: "markdown-prettier",
      glob: "*.md",
      run: "npx prettier --write --prose-wrap always",
    });
  }
}
