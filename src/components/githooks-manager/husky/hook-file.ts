import { type Project, TextFile } from "projen";
import type { GitClientHook } from "../types";

export interface HuskyHookFileOptions {
	readonly hook: GitClientHook;
	readonly command: string;
}

export class HuskyHookFile extends TextFile {
	constructor(project: Project, options: HuskyHookFileOptions) {
		const filePath: string = `.husky/${options.hook}`;
		const lines = [
			"#!/bin/sh",
			'. "$(dirname "$0")/_/husky.sh"',
			"",
			options.command,
		];

		super(project, filePath, {
			executable: true,
			lines: lines,
		});
	}
}
