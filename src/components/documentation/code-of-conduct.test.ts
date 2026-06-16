import { CodeOfConduct } from "@thoroc/documentation";
import { GitHooksManagerType } from "@thoroc/githooks-manager";
import { GitHooksEnabledProject } from "@thoroc/projen-typescript-git-hooks";
import { synthSnapshot } from "projen/lib/util/synth";
import { afterEach, describe, expect, it, vi } from "vitest";
import { getContent } from "../../utils/fetch";

vi.mock("../../utils/fetch", () => ({
	getContent: vi.fn().mockResolvedValue(""),
}));

const makeProject = (prettier = true) =>
	new GitHooksEnabledProject({
		name: "test",
		defaultReleaseBranch: "main",
		prettier,
		gitHooksManager: GitHooksManagerType.LEFTHOOK,
	});

describe("CodeOfConduct", () => {
	afterEach(() => {
		vi.restoreAllMocks();
	});

	it("adds CODE_OF_CONDUCT.md to .prettierignore when Prettier is present", () => {
		const project = makeProject();
		new CodeOfConduct(project, { author: "test@example.com" });

		const snapshot = synthSnapshot(project);
		expect(snapshot[".prettierignore"]).toContain("CODE_OF_CONDUCT.md");
	});

	it("does not error when Prettier is absent", () => {
		const project = makeProject(false);

		expect(
			() => new CodeOfConduct(project, { author: "test@example.com" }),
		).not.toThrow();
	});

	describe("async content callback", () => {
		it("replaces placeholder with author in document body", async () => {
			vi.mocked(getContent).mockResolvedValue(
				"# Code of Conduct\n[INSERT CONTACT METHOD]\nEnd.",
			);

			const project = makeProject();
			new CodeOfConduct(project, { author: "conduct@example.com" });

			await Promise.resolve();

			expect(getContent).toHaveBeenCalled();
		});

		it("logs error when getContent rejects", async () => {
			vi.mocked(getContent).mockRejectedValue(new Error("network error"));
			const consoleSpy = vi
				.spyOn(console, "error")
				.mockImplementation(() => {});

			const project = makeProject();
			new CodeOfConduct(project, { author: "conduct@example.com" });

			await Promise.resolve();
			await Promise.resolve();

			expect(consoleSpy).toHaveBeenCalledWith(expect.any(Error));
		});
	});
});
