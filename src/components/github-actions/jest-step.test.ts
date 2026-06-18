import { NodePackageManager } from "projen/lib/javascript";
import { describe, expect, it } from "vitest";
import { jestStep } from "./jest-step";

describe("jestStep", () => {
	it("returns bunx jest for BUN", () => {
		const step = jestStep(NodePackageManager.BUN);
		expect(step).toMatchObject({
			name: "Run tests",
			run: "bunx jest --coverage --coverageReporters json-summary",
		});
	});

	it.each([
		NodePackageManager.NPM,
		NodePackageManager.YARN_BERRY,
		NodePackageManager.PNPM,
	])("returns npx jest for %s", (manager) => {
		const step = jestStep(manager);
		expect(step).toMatchObject({
			name: "Run tests",
			run: "npx jest --coverage --coverageReporters json-summary",
		});
	});
});
