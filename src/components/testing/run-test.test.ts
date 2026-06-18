import { NodePackageManager } from "projen/lib/javascript";
import { describe, expect, it } from "vitest";
import { runTest } from "./run-test";

describe("runTest", () => {
	it.each([
		[NodePackageManager.NPM, "npm run test"],
		[NodePackageManager.YARN, "yarn test --frozen-lockfile"],
		[NodePackageManager.YARN2, "yarn test --check-files"],
		[NodePackageManager.YARN_CLASSIC, "yarn test --frozen-lockfile"],
		[NodePackageManager.YARN_BERRY, "yarn test --check-files"],
		[NodePackageManager.PNPM, "pnpm run test --frozen-lockfile"],
		[NodePackageManager.BUN, "bun test"],
	])("returns correct script for %s", (manager, expected) => {
		expect(runTest(manager)).toBe(expected);
	});

	it("falls back to npm ci for unknown package managers", () => {
		expect(runTest("unknown" as NodePackageManager)).toBe("npm ci");
	});
});
