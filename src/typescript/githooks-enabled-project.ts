import { type javascript, typescript } from "projen";
import { TypeScriptModuleResolution, type TypescriptConfigOptions } from "projen/lib/javascript";
import { Eslint, Prettier } from "../components/code-standards";
import { EditorConfig, type EditorConfigOptions } from "../components/code-standards/editorconfig";
import {
  GitHooksManagerType,
  Husky,
  type HuskyOptions,
  Lefthook,
  type LefthookOptions,
} from "../components/githooks-manager";
import { Jest } from "../components/jest";

export interface GitHooksEnabledProjectOptions extends typescript.TypeScriptProjectOptions {
  /**
   * Setup gitHooksManager
   * @default true
   */
  readonly gitHooksManager?: GitHooksManagerType;
  /**
   * gitHooksManagerEnabled options
   * @default - default options
   */
  readonly gitHooksManagerOptions?: HuskyOptions | LefthookOptions;
  /**
   * Printing out debug statement
   * @default false
   */
  readonly debug?: boolean;
  /**
   * Enable editorConfig
   * @default true
   */
  readonly editorConfig?: boolean;
  /**
   * EditorConfig options
   */
  readonly editorConfigOptions?: EditorConfigOptions;
}

export class GitHooksEnabledProject extends typescript.TypeScriptProject {
  public static defaultTsConfig: TypescriptConfigOptions = {
    compilerOptions: {
      esModuleInterop: true,
      forceConsistentCasingInFileNames: true,
      moduleResolution: TypeScriptModuleResolution.NODE,
      noEmitOnError: true,
      noImplicitReturns: true,
    },
  };

  readonly gitHooksManager?: Husky | Lefthook;
  readonly jest?: javascript.Jest;
  readonly eslint?: javascript.Eslint;
  readonly prettier?: javascript.Prettier;
  readonly debug?: boolean;
  readonly editorConfig?: EditorConfig;

  constructor(options: GitHooksEnabledProjectOptions) {
    super({
      ...options,
      deps: ["ts-node", ...(options.deps ?? [])],
      devDeps: ["@types/node", ...(options.devDeps ?? [])],

      eslint: false,
      eslintOptions: { dirs: [] },
      prettier: false,
      prettierOptions: {},
      jest: false,
      jestOptions: {},
      tsconfig: {
        ...GitHooksEnabledProject.defaultTsConfig,
        ...options.tsconfig,
      },

      tsconfigDev: {
        compilerOptions: {},
        include: ["test/**/*.test.ts"],
      },
    });

    this.debug = options.debug ?? false;

    switch (options.gitHooksManager) {
      case GitHooksManagerType.HUSKY:
        this.gitHooksManager = new Husky(this, options.gitHooksManagerOptions as HuskyOptions);
        break;
      case GitHooksManagerType.LEFTHOOK:
        this.gitHooksManager = new Lefthook(this, options.gitHooksManagerOptions as LefthookOptions);
        break;
    }

    if (options.jest ?? true) {
      this.jest = new Jest(this, options.jestOptions) as javascript.Jest;
    }

    if (options.prettier ?? true) {
      this.prettier = new Prettier(this, options.prettierOptions) as javascript.Prettier;
    }

    if (options.eslint ?? true) {
      const eslintOptions = {
        dirs: ["src", "test"],
        prettier: options.prettier,
        ...options.eslintOptions,
      };
      this.eslint = new Eslint(this, eslintOptions) as javascript.Eslint;
    }

    if (options.editorConfig ?? true) {
      this.editorConfig = new EditorConfig(this, options.editorConfigOptions);
    }

    this.addDevDeps("yaml", "change-case");
  }
}
