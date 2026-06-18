import { NodePackageManager } from "projen/lib/javascript";
import { describe, expect, it } from "vitest";
import { installSteps } from "./install-steps";

describe("installSteps", () => {
	it("returns bun setup + install for BUN", () => {
		const steps = installSteps(NodePackageManager.BUN);
		expect(steps).toHaveLength(2);
		expect(steps[0]).toMatchObject({
			name: "Setup bun",
			uses: "oven-sh/setup-bun@v2",
			with: { "bun-version": "latest" },
		});
		expect(steps[1]).toMatchObject({
			name: "Install dependencies",
			run: "bun install",
		});
	});

	it.each([
		[NodePackageManager.NPM, "npm ci"],
		[NodePackageManager.YARN_BERRY, "yarn install --check-files"],
		[NodePackageManager.PNPM, "pnpm install --frozen-lockfile"],
	])("returns only install step for %s", (manager, expectedCommand) => {
		const steps = installSteps(manager);
		expect(steps).toHaveLength(1);
		expect(steps[0]).toMatchObject({
			name: "Install dependencies",
			run: expectedCommand,
		});
	});
});
