import type { ISerializer } from "../../../utils";

export interface LefthookCommandOptions {
	/**
	 * Command's name
	 */
	readonly name: string;
	/**
	 * This is a mandatory option for a command.
	 * This is actually a command that is executed for the hook.
	 * @see https://github.com/evilmartians/lefthook/blob/master/docs/configuration.md#run
	 */
	readonly run: string;
	/**
	 * A custom git command for files to be referenced in {files} template for run setting.
	 * @see https://github.com/evilmartians/lefthook/blob/master/docs/configuration.md#files
	 */
	readonly files?: string;
	/**
	 * You can provide a regular expression to exclude some files from being passed to run command.
	 * @see https://github.com/evilmartians/lefthook/blob/master/docs/configuration.md#exclude
	 */
	readonly exclude?: string;
	/**
	 * You can set a glob to filter files for your command.
	 * @see https://github.com/evilmartians/lefthook/blob/master/docs/configuration.md#glob
	 */
	readonly glob?: string;
	/**
	 * You can specify tags for commands and scripts
	 * @see https://github.com/evilmartians/lefthook/blob/master/docs/configuration.md#tags
	 */
	readonly tags?: string;
	/**
	 * Staged files which you try to commit.
	 * @see https://github.com/evilmartians/lefthook/blob/master/docs/configuration.md#run
	 */
	readonly stagedFiles?: boolean;
	/**
	 * Re-stage files modified by the command after it runs.
	 * Required when the command auto-fixes files (e.g. eslint --fix, prettier --write)
	 * so that the fixed versions are included in the commit.
	 * @see https://github.com/evilmartians/lefthook/blob/master/docs/configuration.md#stage_fixed
	 */
	readonly stageFixed?: boolean;
}

export class LefthookCommand implements ISerializer {
	readonly name: string;
	readonly run: string;
	readonly files?: string;
	readonly exclude?: string;
	readonly glob?: string;
	readonly tags?: string;
	readonly stagedFiles: boolean;
	readonly stageFixed: boolean;

	constructor(options: LefthookCommandOptions) {
		this.name = options.name;
		this.run = options.run;
		this.files = options.files;
		this.exclude = options.exclude;
		this.glob = options.glob;
		this.tags = options.tags;
		this.stagedFiles = options.stagedFiles ?? true;
		this.stageFixed = options.stageFixed ?? false;
	}

	/**
	 * Transform the LefthookCommand to a lefthook friend object
	 * @returns object
	 */
	asRecords(): object {
		const records: { [key: string]: string | boolean | undefined } = {};
		const excludes: Array<string> = ["name", "stagedFiles", "stageFixed"];

		for (const propName in this) {
			if (Object.hasOwn(this, propName)) {
				const name: string = propName;
				const value: unknown = this[name as keyof LefthookCommand];
				const isNotExcluded: boolean = !excludes.includes(name);

				if (value !== undefined && value && isNotExcluded) {
					if (name === "run" && this.stagedFiles === true) {
						records[name] = `${value as string} {staged_files}`;
					} else {
						records[name] = value as string;
					}
				}
			}
		}

		if (this.stageFixed) {
			records.stage_fixed = true;
		}

		return records;
	}

	serialize(): object {
		const transfomed: { [key: string]: object } = {};
		transfomed[this.name] = this.asRecords();

		return transfomed;
	}
}
