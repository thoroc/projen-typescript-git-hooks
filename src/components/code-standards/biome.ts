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

		// Biome 2.x deprecated `recommended: true` in favour of `preset: "recommended"`
		this.file.addDeletionOverride("linter.rules.recommended");
		this.file.addOverride("linter.rules.preset", "recommended");

		LintStaged.of(project)?.addRule({
			filePattern: "src/**/*.ts",
			commands: ["bunx biome check --write"],
		});

		(Lefthook.of(project) as Lefthook | undefined)?.addCommand(GitClientHook.PRE_COMMIT, {
			name: "biome",
			glob: "src/**/*.ts",
			run: "bunx biome check --write",
			stageFixed: true,
		});
	}
}
