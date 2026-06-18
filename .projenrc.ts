import { readFileSync } from "fs";
import { cdk } from "projen";
import { GitHub } from "projen/lib/github";
import { NodePackageManager } from "projen/lib/javascript";
import { AgenticHarnesses, Commitizen, HarnessType, Vitest } from "./src";
import { Biome } from "./src/components/code-standards";
import { CodeOfConduct } from "./src/components/documentation";
import { Lefthook } from "./src/components/githooks-manager";
import {
	DocmdPages,
	PullRequestCoverageComment,
	PullRequestLabeler,
	ReleasePlease,
} from "./src/components/github-actions";
import { IssueTemplate } from "./src/components/github-templates";
import { Renovate } from "./src/components/renovate";

let version = "0.0.0";
try {
	const pkg = JSON.parse(readFileSync("package.json", "utf-8"));
	version = pkg.version ?? "0.0.0";
} catch {
	// package.json doesn't exist on first run
}

const project = new cdk.JsiiProject({
	author: "thoroc",
	authorAddress: "thomas.a.roche@gmail.com",
	defaultReleaseBranch: "main",
	jsiiVersion: "~5.0.0",
	name: "@thoroc/projen-typescript-git-hooks",
	packageManager: NodePackageManager.BUN,
	projenCommand: "bunx projen",
	projenrcTs: true,
	repositoryUrl: "https://github.com/thoroc/projen-typescript-git-hooks.git",

	docgen: true,
	deps: ["projen@^0.99.0", "yaml", "type-fest", "change-case"],
	devDeps: ["projen@^0.99.0"],
	bundledDeps: ["yaml", "type-fest", "change-case"],
	peerDeps: ["projen@^0.99.0"],

	npmDistTag: "latest",
	npmRegistryUrl: "https:///npm.pkg.github.com",

	eslint: false,
	prettier: false,
	jest: false,

	excludeTypescript: ["**/*.test.ts"],

	autoApproveOptions: {
		allowedUsernames: ["thoroc", "dependabot[bot]", "renovate"],
	},
	autoMerge: false,
	githubOptions: { mergify: false },
	depsUpgradeOptions: { workflowOptions: { labels: ["auto-approve"] } },

	pullRequestTemplateContents: ["# Title", "", "## What", "", "## Why"],

	tsconfigDev: {
		compilerOptions: {
			lib: ["es2022", "dom"],
			types: ["node", "vitest/globals"],
			paths: {
				"@thoroc/projen-typescript-git-hooks": ["./src"],
				"@thoroc/githooks-manager": ["./src/components/githooks-manager"],
				"@thoroc/github-actions": ["./src/components/github-actions"],
				"@thoroc/github-actions/*": ["./src/components/github-actions/*"],
				"@thoroc/github-templates": ["./src/components/github-templates"],
				"@thoroc/documentation": ["./src/components/documentation"],
				"@thoroc/code-standards": ["./src/components/code-standards"],
				"@thoroc/testing": ["./src/components/testing"],
				"@thoroc/renovate": ["./src/components/renovate"],
				"@thoroc/agentic-harnesses": ["./src/components/agentic-harnesses"],
			},
		},
	},
});

project.package.addVersion(version);

const github = project.github ?? new GitHub(project);
new PullRequestCoverageComment(github);
new PullRequestLabeler(github);
new IssueTemplate(github);
new Lefthook(project);
new Vitest(project);
new Biome(project);
new Commitizen(project, { json: true });
new CodeOfConduct(project, { author: "thomas.a.roche@gmail.com" });
new Renovate(project);
new ReleasePlease(github);
new DocmdPages(github, { title: "@thoroc/projen-typescript-git-hooks" });
new AgenticHarnesses(project, {
	harnesses: [
		HarnessType.CLAUDE_CODE,
		HarnessType.CODEX,
		HarnessType.OPENCODE,
		HarnessType.GEMINI,
		HarnessType.VIBE,
	],
});

project.gitignore.addPatterns("test-reports/");

project.synth();
