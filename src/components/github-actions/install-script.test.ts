import { NodePackageManager } from "projen/lib/javascript";
import { describe, expect, it } from "vitest";
import { installScript } from "./install-script";

describe("installScript", () => {
	it.each([
		[NodePackageManager.NPM, "npm ci"],
		[NodePackageManager.YARN, "yarn install --frozen-lockfile"],
		[NodePackageManager.YARN2, "yarn install --check-files"],
		[NodePackageManager.YARN_CLASSIC, "yarn install --frozen-lockfile"],
		[NodePackageManager.YARN_BERRY, "yarn install --check-files"],
		[NodePackageManager.PNPM, "pnpm install --frozen-lockfile"],
		[NodePackageManager.BUN, "bun install"],
	])("returns correct script for %s", (manager, expected) => {
		expect(installScript(manager)).toBe(expected);
	});
});
