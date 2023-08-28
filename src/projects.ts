import { typescript } from "projen";
import { TypeScriptModuleResolution } from "projen/lib/javascript";
import { Eslint, Prettier } from "./components/codestandards";
import {
  GitHooksManagerType,
  Husky,
  HuskyOptions,
  Lefthook,
  ILefthookOptions,
} from "./components/githooksmanager";
import { Jest } from "./components/jest";

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
  readonly gitHooksManagerOptions?: {};

  /**
   * Printing out debug statement
   * @default false
   */
  readonly debug?: boolean;
}

export class GitHooksEnabledProject extends typescript.TypeScriptProject {
  public readonly gitHooksManager?: Husky | Lefthook;
  public readonly jest?: Jest;
  public readonly eslint?: Eslint;
  public readonly prettier?: Prettier;
  public readonly debug?: boolean;

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
        compilerOptions: {
          esModuleInterop: true,
          forceConsistentCasingInFileNames: true,
          moduleResolution: TypeScriptModuleResolution.NODE,
          noEmitOnError: true,
          noImplicitReturns: true,
        },
        ...options.tsconfig,
      },

      tsconfigDev: {
        compilerOptions: {},
        include: ["test/**/*.test.ts"],
      },
    });

    switch (options.gitHooksManager) {
      case GitHooksManagerType.HUSKY:
        this.gitHooksManager = new Husky(this, options.gitHooksManagerOptions as HuskyOptions);
        break;
      case GitHooksManagerType.LEFTHOOK:
        this.gitHooksManager = new Lefthook(this, options.gitHooksManagerOptions as ILefthookOptions);
        break;
      default:
        throw Error(`Unable to initiate a git hook manager: "${options.gitHooksManager}"`);
    }

    this.debug = options.debug ?? false;

    if (options.jest ?? true) {
      if (this.debug) console.log("Jest enabled");
      this.jest = new Jest(this, options.jestOptions);
    }

    if (options.prettier ?? true) {
      if (this.debug) console.log("Prettier enabled");
      this.prettier = new Prettier(this, options.prettierOptions);
    }

    if (options.eslint ?? true) {
      if (this.debug) console.log("Eslint enabled");
      const eslintOptions = { dirs: ["src", "test"], prettier: options.prettier, ...options.eslintOptions };
      this.eslint = new Eslint(this, eslintOptions);
    }

    this.addDevDeps("yaml");
  }
}
