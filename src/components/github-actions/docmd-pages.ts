import { Component, SampleFile } from "projen";
import type { GitHub } from "projen/lib/github";
import { JobPermission } from "projen/lib/github/workflows-model";

export interface DocmdPagesOptions {
	/** Branch to deploy from. Defaults to "main". */
	readonly branch?: string;
	/** Docs source directory passed to docmd as `src`. Defaults to "docs". */
	readonly docsDir?: string;
	/** Build output directory. docmd defaults to "site". */
	readonly outputDir?: string;
	/** Site title used in docmd.config.js. Defaults to the project name. */
	readonly title?: string;
	/** Published URL, e.g. "https://thoroc.github.io/projen-typescript-git-hooks". */
	readonly url?: string;
}

export class DocmdPages extends Component {
	constructor(github: GitHub, options: DocmdPagesOptions = {}) {
		super(github.project);

		const { branch = "main", docsDir = "docs", outputDir = "site" } = options;

		const title = options.title ?? github.project.name;

		new SampleFile(github.project, `${docsDir}/index.md`, {
			contents: [
				`# ${title}`,
				"",
				"Welcome to the documentation.",
				"",
				"## API Reference",
				"",
				"See the [API reference](./api.md) for the full generated API documentation.",
			].join("\n"),
		});

		const docmdPackage = "@docmd/core";
		const configLines: string[] = [
			`const { defineConfig } = require('${docmdPackage}');`,
			``,
			`module.exports = defineConfig({`,
			`  title: '${title}',`,
		];
		if (options.url !== undefined) {
			configLines.push(`  url: '${options.url}',`);
		}
		configLines.push(`  src: '${docsDir}',`, `  out: '${outputDir}',`, `});`);

		new SampleFile(github.project, "docmd.config.js", {
			contents: configLines.join("\n"),
		});

		const workflow = github.addWorkflow("pages");

		workflow.on({
			push: { branches: [branch] },
			workflowDispatch: {},
		});

		workflow.addJob("build", {
			permissions: { contents: JobPermission.READ },
			runsOn: ["ubuntu-latest"],
			steps: [
				{ uses: "actions/checkout@v4" },
				{ uses: "oven-sh/setup-bun@v2", with: { "bun-version": "latest" } },
				{ name: "Install dependencies", run: "bun install" },
				{ name: "Copy API reference", run: `cp API.md ${docsDir}/api.md` },
				{ name: `Install ${docmdPackage}`, run: `bun add ${docmdPackage}` },
				{ name: "Build docs", run: `bunx ${docmdPackage} build` },
				{
					uses: "actions/upload-pages-artifact@v3",
					with: { path: outputDir },
				},
			],
		});

		workflow.addJob("deploy", {
			needs: ["build"],
			permissions: {
				pages: JobPermission.WRITE,
				idToken: JobPermission.WRITE,
			},
			runsOn: ["ubuntu-latest"],
			environment: {
				name: "github-pages",
				url: "${{ steps.deployment.outputs.page_url }}",
			},
			steps: [{ id: "deployment", uses: "actions/deploy-pages@v4" }],
		});
	}
}
