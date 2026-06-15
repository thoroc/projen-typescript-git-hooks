import { Jest as BaseJest, type JestOptions, NodePackageManager } from "projen/lib/javascript";
import type { GitHooksEnabledProject } from "../typescript/githooks-enabled-project";
import { GitClientHook, Husky } from "./githooks-manager";

export class Jest extends BaseJest {
  readonly configFilePath?: string;

  constructor(project: GitHooksEnabledProject, options?: JestOptions) {
    super(project, options);

    project.addDevDeps("ts-jest", "@types/jest");

    this.configFilePath = options?.configFilePath;

    const yarnManagers = [
      NodePackageManager.YARN,
      NodePackageManager.YARN2,
      NodePackageManager.YARN_CLASSIC,
      NodePackageManager.YARN_BERRY,
    ];
    const script = yarnManagers.includes(project.package.packageManager) ? "yarn test" : "npm run test";

    Husky.of(project)?.createHook(GitClientHook.PRE_PUSH, [script]);
  }

  preSynthesize(): void {
    const deletionGlobals = this.configFilePath ? "globals" : "jest.globals";
    const overrideTransform = this.configFilePath ? "transform" : "jest.transform";
    const config = this.project.tryFindObjectFile(this.configFilePath ?? "package.json");

    config?.addDeletionOverride(deletionGlobals);
    config?.addOverride("transformIgnorePatterns", ["/node_modules/(?!(change-case)/)"]);
    config?.addOverride(overrideTransform, {
      "^.+\\.[jt]s?$": [
        "ts-jest",
        {
          tsconfig: "tsconfig.dev.json",
        },
      ],
    });

    const tasksJson = this.project.tryFindObjectFile(".projen/tasks.json");

    tasksJson?.addOverride("tasks.test.steps", [
      {
        exec: "jest --passWithNoTests --updateSnapshot",
        receiveArgs: true,
      },
    ]);
  }
}
