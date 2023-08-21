import { typescript } from 'projen';
import { TypeScriptModuleResolution } from 'projen/lib/javascript';

export interface GitHooksEnabledProjectOptions extends typescript.TypeScriptProjectOptions { }

export class GitHooksEnabledProject extends typescript.TypeScriptProject {
  constructor(options: GitHooksEnabledProjectOptions) {
    super({
      ...options,
      deps: ['ts-node', ...(options.deps ?? [])],
      devDeps: ['@types/node', ...(options.devDeps ?? [])],

      jest: false,
      jestOptions: options.jestOptions,
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
  }
}