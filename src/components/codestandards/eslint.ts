import { Component, javascript } from "projen";
import { Eslint as BaseEslint, EslintOptions } from "projen/lib/javascript";
import { Prettier } from "./prettier";
import { GitHooksEnabledProject } from "../..";
import { GitClientHook, Husky, Lefthook } from "../githooksmanager";

export class Eslint extends BaseEslint {
  public static defaultOptions = { dirs: ["src", "test"], prettier: false };
  public static defaultRules = {
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
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/test/**", "**/build-tools/**", ".projenrc.ts", "projenrc/**/*.ts"],
        optionalDependencies: false,
        peerDependencies: true,
      },
    ],
    indent: ["error", 2, { SwitchCase: 1 }],
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
    quotes: [2, "double", { avoidEscape: true }],
  };

  /**
   * Returns the singletone component of a project or undefined if there is none.
   */
  public static of(project: javascript.NodeProject): Eslint | undefined {
    const singleton = (c: Component): c is Eslint => c instanceof Eslint;
    return project.components.find(singleton);
  }

  public project: GitHooksEnabledProject;
  private eslintExtendsOverride: Array<string>;

  constructor(project: GitHooksEnabledProject, options?: EslintOptions) {
    super(project, options ?? Eslint.defaultOptions);

    this.project = project;
    this.eslintExtendsOverride = [];

    this.project.addDevDeps(
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

    // console.log(`Prettier value: ${options?.prettier}`);

    if (options?.prettier || Prettier.of(project)) {
      console.log("Eslint: Prettier enabled. Adding dev dependencies and extends");
      this.project.addDevDeps("eslint-config-prettier", "eslint-plugin-prettier");
      this.eslintExtendsOverride.push("plugin:prettier/recommended", "prettier");
    }

    // making sure the tests are being linted
    this.config.parserOptions.project = "tsconfig.dev.json";

    this.addRules(Eslint.defaultRules);

    // eslint-plugin-markdownlint
    this.addOverride({
      files: ["*.md"],
      parser: "eslint-plugin-markdownlint/parser",
      // extends: ['plugin:markdownlint/recommended']
    });

    if (this.project.gitHooksManager instanceof Husky) {
      this.project.gitHooksManager.lintStaged?.addRule({
        filePattern: "src/**/*.{ts,tsx}",
        commands: ["eslint --cache --fix", "prettier --write"],
      });
    }

    if (this.project.gitHooksManager instanceof Lefthook) {
      this.project.gitHooksManager.addCommand(GitClientHook.PRE_COMMIT, {
        name: "eslint",
        glob: "src/**/*.{ts,tsx}",
        run: "eslint --cache --fix",
      });
      this.project.gitHooksManager.addCommand(GitClientHook.PRE_COMMIT, {
        name: "prettier",
        glob: "src/**/*.{ts,tsx}",
        run: "prettier --write",
      });
    }
  }

  preSynthesize(): void {
    console.log(`${this.constructor.name}: preSynthesis.`);

    if (this.eslintExtendsOverride.length > 0) {
      console.log(`${this.constructor.name}: sorting out the extends section.`);

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
