import { javascript } from "projen";
import { PrettierOptions, ProseWrap, QuoteProps, TrailingComma } from "projen/lib/javascript";
import { GitHooksEnabledProject } from "../../projects";
import { GitClientHook, Husky, Lefthook } from "../githooksmanager";
import { LintStaged } from "../githooksmanager/utils/lintstaged";

export class Prettier extends javascript.Prettier {
  static defaultOptions = {
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

  project: GitHooksEnabledProject;

  constructor(project: GitHooksEnabledProject, options?: PrettierOptions) {
    super(project as javascript.NodeProject, options ?? Prettier.defaultOptions);

    this.project = project;
    this.project.addDevDeps("@types/prettier");

    this.project.addTask("format", {
      description: "Runs Prettier",
      exec: 'npx prettier --write "{src,projenrc}/**/*.{js,jsx,ts,tsx}"',
    });

    this.ignoreFile?.addPatterns("tsconfig.dev.json", "tsconfig.json", "node_modules", "build", "coverage");

    if (this.project.gitHooksManager instanceof Husky) {
      LintStaged.of(this.project)?.addRule({
        filePattern: "*.md",
        commands: "npx prettier --write --prose-wrap always",
      });
    }

    if (this.project.gitHooksManager instanceof Lefthook) {
      Lefthook.of(this.project)?.addCommand(GitClientHook.PRE_COMMIT, {
        name: "markdown-prettier",
        glob: "*.md",
        run: "npx prettier --write --prose-wrap always",
      });
    }
  }
}
