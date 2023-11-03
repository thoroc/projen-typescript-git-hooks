import { javascript } from "projen";
import { PrettierOptions, ProseWrap, QuoteProps, TrailingComma } from "projen/lib/javascript";
import { GitHooksEnabledProject } from "../../typescript/githooks-enabled-project";
import { GitClientHook, Registrable, RegistrableComponent } from "../githooks-manager";

export class Prettier extends javascript.Prettier implements RegistrableComponent {
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
  readonly githookOptions: Registrable;

  constructor(project: GitHooksEnabledProject, options?: PrettierOptions) {
    super(project as javascript.NodeProject, options ?? Prettier.defaultPrettierOptions);

    this.githookOptions = {
      glob: "*.md",
      exec: "npx prettier --write --prose-wrap always",
      name: "markdown-prettier",
      actionType: GitClientHook.PRE_COMMIT,
    };

    (this.project as GitHooksEnabledProject).addDevDeps("@types/prettier");

    this.project.addTask("format", {
      description: "Runs Prettier",
      exec: 'npx prettier --write "{src,projenrc}/**/*.ts"',
    });

    this.project.addTask("format:markdown", {
      description: "Runs Prettier on Markdown",
      exec: "npx prettier --write --prose-wrap always *.md",
    });

    this.ignoreFile?.addPatterns(
      "tsconfig.dev.json",
      "tsconfig.json",
      "node_modules",
      "build",
      "coverage",
      ".github/*",
    );
  }
}
