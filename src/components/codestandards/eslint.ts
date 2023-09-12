import { Component, Project, javascript } from "projen";
import { EslintOptions } from "projen/lib/javascript";
import { Prettier } from "./prettier";
import { GitHooksEnabledProject } from "../..";
import { GitClientHook } from "../githooksmanager";
import { LintStaged } from "../githooksmanager/husky";
import { Lefthook } from "../githooksmanager/lefthook";


export interface EslintRules {

}

export class Eslint extends javascript.Eslint {
  public static defaultOptions: EslintOptions = { dirs: ["src", "test"], prettier: false };
  public static defaultEslintRules: EslintRules = {
    "@typescript-eslint/array-type": [
      "error",
      {
        default: "generic",
      },
    ],
    "@typescript-eslint/ban-types": [
      "error",
      {
        extendDefaults: true,
        types: {
          "{}": false,
        },
      },
    ],
    "@typescript-eslint/no-empty-function": ["error"],
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/quotes": [
      "error",
      "double",
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    "dot-notation": "warn",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/test/**", "**/build-tools/**", ".projenrc.ts", "projenrc/**/*.ts"],
        optionalDependencies: false,
        peerDependencies: true,
      },
    ],
    "indent": ["error", 2, { SwitchCase: 1 }],
    "linebreak-style": 1,
    "max-len": [
      "warn",
      {
        code: 110,
        tabWidth: 2,
        ignoreUrls: true,
      },
    ],
    "no-empty-function": "off",
    "no-tabs": [
      "error",
      {
        allowIndentationTabs: true,
      },
    ],
    "no-unused-vars": "off",
    "quotes": [2, "double", { avoidEscape: true }],
  };

  /**
   * Returns the singletone component of a project or undefined if there is none.
   */
  public static of(project: Project): javascript.Eslint | undefined {
    const singleton = (c: Component): c is Eslint => c instanceof Eslint;
    return project.components.find(singleton);
  }

  readonly project: Project;
  private eslintExtendsOverride?: Array<string>;

  constructor(project: GitHooksEnabledProject, options?: EslintOptions) {
    super(project as javascript.NodeProject, options ?? Eslint.defaultOptions);

    this.project = project;
    this.eslintExtendsOverride = [];

    (this.project as GitHooksEnabledProject).addDevDeps(
      "eslint-plugin-markdownlint",
      "eslint-config-airbnb-typescript",
      "eslint-plugin-import",
      "eslint-plugin-testing-library",
    );

    this.eslintExtendsOverride.push(
      "eslint:recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:import/errors",
      "plugin:import/typescript",
      "plugin:import/warnings",
    );

    if (options?.prettier || Prettier.of(project)) {
      if ((this.project as GitHooksEnabledProject).debug) console.log("Eslint: Prettier enabled. Adding dev dependencies and extends");
      (this.project as GitHooksEnabledProject).addDevDeps("eslint-config-prettier", "eslint-plugin-prettier");
      this.eslintExtendsOverride.push("plugin:prettier/recommended", "prettier");
    }

    // making sure the tests are being linted
    this.config.parserOptions.project = "tsconfig.dev.json";

    this.addRules(Eslint.defaultEslintRules);

    // eslint-plugin-markdownlint
    this.addOverride({
      files: ["*.md"],
      parser: "eslint-plugin-markdownlint/parser",
      // extends: ['plugin:markdownlint/recommended']
    });

    LintStaged.of(this.project as GitHooksEnabledProject)?.addRule({
      filePattern: "src/**/*.{ts,tsx}",
      commands: ["eslint --cache --fix", "npx prettier --write"],
    });

    Lefthook.of(this.project as GitHooksEnabledProject)?.addCommand(GitClientHook.PRE_COMMIT, {
      name: "eslint",
      glob: "src/**/*.{ts,tsx}",
      run: "eslint --cache --fix",
    });
    Lefthook.of(this.project as GitHooksEnabledProject)?.addCommand(GitClientHook.PRE_COMMIT, {
      name: "prettier",
      glob: "src/**/*.{ts,tsx}",
      run: "npx prettier --write",
    });
  }

  preSynthesize(): void {
    if (this.eslintExtendsOverride && this.eslintExtendsOverride.length > 0) {
      if ((this.project as GitHooksEnabledProject).debug) console.log(`${this.constructor.name}: sorting out the extends section.`);

      const eslintConfig = this.project.tryFindObjectFile(".eslintrc.json");
      const eslintExtends = [...new Set(this.eslintExtendsOverride)];
      const prettierIdx = eslintExtends.indexOf("prettier", 0);

      if (prettierIdx > -1) {
        eslintExtends.splice(prettierIdx, 1);
      }

      eslintExtends.sort();
      eslintExtends.push("prettier");

      eslintConfig?.addOverride("extends", eslintExtends);
    }
  }
}
