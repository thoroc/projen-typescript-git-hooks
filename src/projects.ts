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
}

export class GitHooksEnabledProject extends typescript.TypeScriptProject {
  public readonly gitHooksManager?: Husky | Lefthook;
  public readonly eslint?: Eslint;
  public readonly prettier?: Prettier;

  constructor(options: GitHooksEnabledProjectOptions) {
    super({
      ...options,
      deps: ["ts-node", ...(options.deps ?? [])],
      devDeps: ["@types/node", ...(options.devDeps ?? [])],

      eslint: false,
      eslintOptions: { dirs: [] },
      prettier: false,
      prettierOptions: {},

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

    if (options.prettier ?? true) {
      console.log("Prettier enabled");
      this.prettier = new Prettier(this, options.prettierOptions);
    }

    if (options.eslint ?? true) {
      console.log("Eslint enabled");
      const eslintOptions = { dirs: ["src", "test"], prettier: options.prettier, ...options.eslintOptions };
      this.eslint = new Eslint(this, eslintOptions);
    }

    this.addDevDeps("yaml");
  }
}
