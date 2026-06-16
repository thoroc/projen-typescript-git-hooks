import { CodeOfConduct } from "@thoroc/documentation";
import { GitHooksManagerType } from "@thoroc/githooks-manager";
import { GitHooksEnabledProject } from "@thoroc/projen-typescript-git-hooks";
import { synthSnapshot } from "projen/lib/util/synth";

describe("CodeOfConduct", () => {
	it("adds CODE_OF_CONDUCT.md to .prettierignore when Prettier is present", () => {
		const project = new GitHooksEnabledProject({
			name: "test",
			defaultReleaseBranch: "main",
			gitHooksManager: GitHooksManagerType.LEFTHOOK,
		});
		new CodeOfConduct(project, { author: "test@example.com" });

		const snapshot = synthSnapshot(project);
		expect(snapshot[".prettierignore"]).toContain("CODE_OF_CONDUCT.md");
	});

	it("does not error when Prettier is absent", () => {
		const project = new GitHooksEnabledProject({
			name: "test",
			defaultReleaseBranch: "main",
			prettier: false,
			gitHooksManager: GitHooksManagerType.LEFTHOOK,
		});

		expect(
			() => new CodeOfConduct(project, { author: "test@example.com" }),
		).not.toThrow();
	});
});
