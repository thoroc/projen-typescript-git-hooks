import { javascript, type Project } from "projen";
import {
	type PrettierOptions,
	ProseWrap,
	QuoteProps,
	TrailingComma,
} from "projen/lib/javascript";
import type { GitHooksEnabledProject } from "../../typescript/githooks-enabled-project";
import { GitClientHook } from "../githooks-manager";
import { LintStaged } from "../githooks-manager/husky";
import { Lefthook } from "../githooks-manager/lefthook";
import type { PrettierSortImportsOptions } from "./prettier-sort-imports-options";

export class Prettier extends javascript.Prettier {
	static defaultPrettierOptions: PrettierOptions = {
		settings: {
			bracketSpacing: true,
			printWidth: 110,
			semi: true,
			tabWidth: 2,
			trailingComma: TrailingComma.ALL,
			useTabs: false,
		},
		overrides: [
			{
				files: ["*.md"],
				options: {
					printWidth: 120,
					proseWrap: ProseWrap.ALWAYS,
					quoteProps: QuoteProps.ASNEEDED,
					semi: true,
					singleQuote: false,
				},
			},
		],
	};

	readonly project: Project;

	constructor(
		project: GitHooksEnabledProject,
		options?: PrettierOptions,
		sortImports?: PrettierSortImportsOptions,
	) {
		super(
			project as javascript.NodeProject,
			options ?? Prettier.defaultPrettierOptions,
		);

		this.project = project;
		(this.project as GitHooksEnabledProject).addDevDeps("@types/prettier");

		this.project.addTask("format", {
			description: "Runs Prettier",
			exec: 'npx prettier --write "{src,projenrc}/**/*.ts"',
		});

		this.project.addTask("format:markdown", {
			description: "Runs Prettier on Markdown",
			exec: "npx prettier --write --prose-wrap always *.md",
		});

		this.ignoreFile?.addPatterns(
			"tsconfig.dev.json",
			"tsconfig.json",
			"node_modules",
			"build",
			"coverage",
			".github/*",
		);

		LintStaged.of(this.project as GitHooksEnabledProject)?.addRule({
			filePattern: "*.md",
			commands: "npx prettier --write --prose-wrap always",
		});

		Lefthook.of(this.project as GitHooksEnabledProject)?.addCommand(
			GitClientHook.PRE_COMMIT,
			{
				name: "markdown-prettier",
				glob: "*.md",
				run: "npx prettier --write --prose-wrap always",
				stageFixed: true,
			},
		);

		if (sortImports) {
			project.addDevDeps("@trivago/prettier-plugin-sort-imports");
			const config = this.project.tryFindObjectFile(".prettierrc.json");
			config?.addToArray("plugins", "@trivago/prettier-plugin-sort-imports");
			config?.addOverride(
				"importOrder",
				sortImports.importOrder ?? ["<THIRD_PARTY_MODULES>", "^[./]"],
			);
			config?.addOverride(
				"importOrderSeparation",
				sortImports.importOrderSeparation ?? true,
			);
			config?.addOverride(
				"importOrderSortSpecifiers",
				sortImports.importOrderSortSpecifiers ?? true,
			);
			if (sortImports.importOrderCaseInsensitive !== undefined) {
				config?.addOverride(
					"importOrderCaseInsensitive",
					sortImports.importOrderCaseInsensitive,
				);
			}
		}
	}
}
