import { Component } from "projen";
import type { GitHub } from "projen/lib/github";
import { JobPermission } from "projen/lib/github/workflows-model";

export interface ReleasePleaseOptions {
	/** The release type (e.g. "node", "python", "rust"). Defaults to "node". */
	readonly releaseType?: string;
	/** The branch to target for releases. Defaults to "main". */
	readonly targetBranch?: string;
	/** Path to the release-please config file. */
	readonly configFile?: string;
	/** Path to the release-please manifest file. */
	readonly manifestFile?: string;
	/** Whether to include the component name in the git tag. */
	readonly includeComponentInTag?: boolean;
	/** Whether to include the "v" prefix in the git tag. */
	readonly includeVInTag?: boolean;
	/** Skip creating the GitHub Release. */
	readonly skipGithubRelease?: boolean;
	/** Skip creating or updating the release pull request. */
	readonly skipGithubPullRequest?: boolean;
	/** The component name used in tagging and PR titles. */
	readonly component?: string;
	/** Pattern for release PR titles (e.g. "chore: release \${version}"). */
	readonly pullRequestTitlePattern?: string;
	/** Bump minor version for breaking changes before v1.0. */
	readonly bumpMinorPreMajor?: boolean;
	/** Bump patch version for feature changes before v1.0. */
	readonly bumpPatchForMinorPreMajor?: boolean;
}

export class ReleasePlease extends Component {
	constructor(github: GitHub, options: ReleasePleaseOptions = {}) {
		super(github.project);

		const { releaseType = "node", targetBranch = "main" } = options;

		const workflow = github.addWorkflow("release-please");

		workflow.on({
			push: { branches: [targetBranch] },
		});

		const withConfig: Record<string, string | boolean> = {
			token: "${{ secrets.GITHUB_TOKEN }}",
			"release-type": releaseType,
		};

		if (options.configFile !== undefined)
			withConfig["config-file"] = options.configFile;
		if (options.manifestFile !== undefined)
			withConfig["manifest-file"] = options.manifestFile;
		if (options.includeComponentInTag !== undefined)
			withConfig["include-component-in-tag"] = options.includeComponentInTag;
		if (options.includeVInTag !== undefined)
			withConfig["include-v-in-tag"] = options.includeVInTag;
		if (options.skipGithubRelease !== undefined)
			withConfig["skip-github-release"] = options.skipGithubRelease;
		if (options.skipGithubPullRequest !== undefined)
			withConfig["skip-github-pull-request"] = options.skipGithubPullRequest;
		if (options.component !== undefined)
			withConfig["component"] = options.component;
		if (options.pullRequestTitlePattern !== undefined)
			withConfig["pull-request-title-pattern"] =
				options.pullRequestTitlePattern;
		if (options.bumpMinorPreMajor !== undefined)
			withConfig["bump-minor-pre-major"] = options.bumpMinorPreMajor;
		if (options.bumpPatchForMinorPreMajor !== undefined)
			withConfig["bump-patch-for-minor-pre-major"] =
				options.bumpPatchForMinorPreMajor;

		workflow.addJob("release-please", {
			permissions: {
				contents: JobPermission.WRITE,
				pullRequests: JobPermission.WRITE,
			},
			runsOn: ["ubuntu-latest"],
			steps: [
				{
					uses: "googleapis/release-please-action@v4",
					with: withConfig,
				},
			],
		});
	}
}
