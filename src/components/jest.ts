import { Project } from "projen";
import { Jest as BaseJest, JestOptions, NodeProject } from "projen/lib/javascript";

export class Jest extends BaseJest {
  readonly project: Project;

  constructor(project: NodeProject, options?: JestOptions) {
    super(project, options);

    project.addDevDeps("ts-jest", "@types/jest");

    this.project = project;
  }

  preSynthesize(): void {
    const packageJson = this.project.tryFindObjectFile("package.json");

    packageJson?.addDeletionOverride("jest.globals");
    packageJson?.addOverride("jest.transform", {
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
