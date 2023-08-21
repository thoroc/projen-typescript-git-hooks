import { typescript } from "projen";
import { TypeScriptModuleResolution } from "projen/lib/javascript";
import { Eslint, Prettier } from "./components/codestandards";
import {
  GitHooksManagerType,
  Husky,
  HuskyOptions,
  Lefthook,
  LefthookOptions,
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
  readonly gitHooksManagerOptions?: GitHooksEnabledProjectOptions;
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
      eslintOptions: options.eslintOptions,
      prettier: false,
      prettierOptions: options.prettierOptions,

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
    });

    switch (options.gitHooksManager) {
      case GitHooksManagerType.HUSKY:
        this.gitHooksManager = new Husky(this, options.gitHooksManagerOptions as HuskyOptions);
        break;
      case GitHooksManagerType.LEFTHOOK:
        this.gitHooksManager = new Lefthook(this, options.gitHooksManagerOptions as LefthookOptions);
        break;
      default:
        throw Error(`Unable to initiate a git hook manager: "${options.gitHooksManager}"`);
    }

    if (options.eslint ?? true) {
      this.eslint = new Eslint(this, options.eslintOptions);
    }

    if (options.prettier ?? true) {
      this.prettier = new Prettier(this, options.prettierOptions);
    }
  }
}
