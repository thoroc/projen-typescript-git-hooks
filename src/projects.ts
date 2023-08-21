import { typescript } from "projen";
import { TypeScriptModuleResolution } from "projen/lib/javascript";
import { Prettier } from "./components/codestandards";
import {
  GitClientHook,
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
  public readonly prettier?: Prettier;

  constructor(options: GitHooksEnabledProjectOptions) {
    super({
      ...options,
      deps: ["ts-node", ...(options.deps ?? [])],
      devDeps: ["@types/node", ...(options.devDeps ?? [])],

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

    if (options.prettier ?? true) {
      this.prettier = new Prettier(this, options.prettierOptions);
    }
  }

  preSynthesize(): void {
    if (this.gitHooksManager instanceof Husky) {
      this.gitHooksManager.lintStaged?.addRule({
        filePattern: "src/**/*.{ts,tsx}",
        commands: ["eslint --cache --fix", "prettier --write"],
      });
    }

    if (this.gitHooksManager instanceof Lefthook) {
      this.gitHooksManager.addCommand(GitClientHook.PRE_COMMIT, {
        name: "eslint",
        glob: "src/**/*.{ts,tsx}",
        run: "eslint --cache --fix",
      });
    }
  }
}
