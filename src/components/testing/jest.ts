import { Jest as BaseJest, type JestOptions } from "projen/lib/javascript";
import type { GitHooksEnabledProject } from "../../typescript/githooks-enabled-project";
import { GitClientHook, GitHooksManager } from "../githooks-manager";
import { runTest } from ".";

export class Jest extends BaseJest {
	readonly configFilePath?: string;

	constructor(project: GitHooksEnabledProject, options?: JestOptions) {
		super(project, { jestVersion: "^29.7.0", ...options });

		project.addDevDeps("ts-jest@^29.2.0", "@types/jest");

		this.configFilePath = options?.configFilePath;

		const script = runTest(project.package.packageManager);

		GitHooksManager.of(project)?.addHook(GitClientHook.PRE_PUSH, script);
	}

	preSynthesize(): void {
		const deletionGlobals = this.configFilePath ? "globals" : "jest.globals";
		const overrideTransform = this.configFilePath
			? "transform"
			: "jest.transform";
		const overrideTestPathIgnorePatterns = this.configFilePath
			? "testPathIgnorePatterns"
			: "jest.testPathIgnorePatterns";
		const config = this.project.tryFindObjectFile(
			this.configFilePath ?? "package.json",
		);

		config?.addDeletionOverride(deletionGlobals);
		config?.addOverride(overrideTestPathIgnorePatterns, [
			"/node_modules/",
			"/lib/",
		]);
		config?.addOverride(overrideTransform, {
			"^.+\\.[jt]s?$": [
				"ts-jest",
				{
					tsconfig: "tsconfig.test.json",
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
