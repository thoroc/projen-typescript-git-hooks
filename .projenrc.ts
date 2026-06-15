import { cdk } from "projen";
import { NodePackageManager } from "projen/lib/javascript";
import { GitHub } from "projen/lib/github";
import { Commitizen, Jest } from "./src";
import { Eslint, Prettier } from "./src/components/code-standards";
import { CodeOfConduct } from "./src/components/documentation";
import { GitClientHook, Lefthook } from "./src/components/githooks-manager";
import {
	PullRequestJestCoverageComment,
	PullRequestLabeler,
} from "./src/components/github-actions";
import { IssueTemplate } from "./src/components/github-templates";

const project = new cdk.JsiiProject({
	author: "thoroc",
	authorAddress: "thomas.a.roche@gmail.com",
	defaultReleaseBranch: "main",
	jsiiVersion: "~5.0.0",
	name: "@thoroc/projen-typescript-git-hooks",
	packageManager: NodePackageManager.BUN,
	projenrcTs: true,
	repositoryUrl: "https://github.com/thoroc/projen-typescript-git-hooks.git",

	docgen: true,
	deps: ["projen", "yaml", "type-fest", "change-case"],
	devDeps: ["projen"],
	bundledDeps: ["yaml", "type-fest", "change-case"],
	peerDeps: ["projen"],

	npmDistTag: "latest",
	npmRegistryUrl: "https:///npm.pkg.github.com",

	eslint: false,
	prettier: false,
	jest: false,

	autoApproveOptions: {
		allowedUsernames: ["thoroc", "dependabot[bot]", "renovate"],
	},
	autoMerge: false,
	githubOptions: { mergify: false },
	depsUpgradeOptions: { workflowOptions: { labels: ["auto-approve"] } },

	pullRequestTemplateContents: ["# Title", "", "## What", "", "## Why"],

	tsconfigDev: { compilerOptions: { lib: ["es2022", "dom"], types: ["node", "jest"] } },
});

project.eslint?.addRules(Eslint.defaultEslintRules);

const github = project.github ?? new GitHub(project);
new PullRequestJestCoverageComment(github);
new PullRequestLabeler(github);
new IssueTemplate(github);
const lefthook = new Lefthook(project);
lefthook.addCommand(GitClientHook.PRE_PUSH, {
	name: "test",
	run: "npm run test",
	stagedFiles: false,
});
new Jest(project, { configFilePath: "jest.config.json" });
new Eslint(project, { dirs: ["src", "test"], prettier: true });
new Prettier(project);
new Commitizen(project, { json: true });
new CodeOfConduct(project, { author: "thomas.a.roche@gmail.com" });

project.synth();
