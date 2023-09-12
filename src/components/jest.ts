import { Jest as BaseJest, JestOptions, NodePackageManager } from "projen/lib/javascript";
import { GitClientHook, Husky } from "./githooksmanager";
import { GitHooksEnabledProject } from "../typescript/githooks-enabled-project";

export class Jest extends BaseJest {
  readonly configFilePath?: string;

  constructor(project: GitHooksEnabledProject, options?: JestOptions) {
    super(project, options);

    project.addDevDeps("ts-jest", "@types/jest");

    this.configFilePath = options?.configFilePath;

    const script = project.package.packageManager === NodePackageManager.YARN ? "yarn test" : "npm run test";

    Husky.of(project)?.createHook(GitClientHook.PRE_PUSH, [script]);
  }

  preSynthesize(): void {
    console.log(this.config);

    const deletionGlobals = this.configFilePath ? "globals" : "jest.globals";
    const overrideTransform = this.configFilePath ? "transform" : "jest.transform";
    const config = this.project.tryFindObjectFile(this.configFilePath ?? "package.json");

    config?.addDeletionOverride(deletionGlobals);
    config?.addOverride(overrideTransform, {
      "^.+\\.ts?$": [
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
