import { javascript } from "projen";
import type { BiomeOptions } from "projen/lib/javascript/biome/biome";
import type { GitHooksEnabledProject } from "../../typescript/githooks-enabled-project";
import { GitClientHook } from "../githooks-manager";
import { LintStaged } from "../githooks-manager/husky";
import { Lefthook } from "../githooks-manager/lefthook";

export type { BiomeOptions };

export class Biome extends javascript.Biome {
	constructor(project: GitHooksEnabledProject, options?: BiomeOptions) {
		super(project as javascript.NodeProject, options);

		this.addFilePattern("**");

		LintStaged.of(project)?.addRule({
			filePattern: "src/**/*.ts",
			commands: ["biome check --write"],
		});

		Lefthook.of(project)?.addCommand(GitClientHook.PRE_COMMIT, {
			name: "biome",
			glob: "src/**/*.ts",
			run: "biome check --write",
			stageFixed: true,
		});
	}
}
