import { NodePackageManager } from "projen/lib/javascript";
import { describe, expect, it } from "vitest";
import { vitestStep } from "./vitest-step";

describe("vitestStep", () => {
	it("returns bunx vitest run for BUN", () => {
		const step = vitestStep(NodePackageManager.BUN);
		expect(step).toMatchObject({
			name: "Run tests",
			run: "bunx vitest run --coverage --coverage.reporter=json-summary --coverage.reporter=text",
		});
	});

	it.each([
		NodePackageManager.NPM,
		NodePackageManager.YARN_BERRY,
		NodePackageManager.PNPM,
	])("returns npx vitest run for %s", (manager) => {
		const step = vitestStep(manager);
		expect(step).toMatchObject({
			name: "Run tests",
			run: "npx vitest run --coverage --coverage.reporter=json-summary --coverage.reporter=text",
		});
	});
});
