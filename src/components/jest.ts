import { Project } from 'projen';
import { Jest as BaseJest, JestOptions, NodePackageManager } from 'projen/lib/javascript';
import { GitClientHook, Husky } from './githooksmanager';
import { GitHooksEnabledProject } from '../typescript/githooks-enabled-project';

export class Jest extends BaseJest {
  readonly project: Project;

  constructor(project: GitHooksEnabledProject, options?: JestOptions) {
    super(project, options);

    project.addDevDeps('ts-jest', '@types/jest');

    const script = project.package.packageManager === NodePackageManager.YARN ? 'yarn test' : 'npm run test';

    Husky.of(project)?.createHook(GitClientHook.PRE_PUSH, [script]);

    this.project = project;
  }

  preSynthesize(): void {
    const packageJson = this.project.tryFindObjectFile('package.json');

    packageJson?.addDeletionOverride('jest.globals');
    packageJson?.addOverride('jest.transform', {
      '^.+\\.ts?$': [
        'ts-jest',
        {
          tsconfig: 'tsconfig.dev.json',
        },
      ],
    });

    const tasksJson = this.project.tryFindObjectFile('.projen/tasks.json');

    tasksJson?.addOverride('tasks.test.steps', [
      {
        exec: 'jest --passWithNoTests --updateSnapshot',
        receiveArgs: true,
      },
    ]);
  }
}
