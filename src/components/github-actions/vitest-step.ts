import type { JobStep } from "projen/lib/github/workflows-model";
import { NodePackageManager } from "projen/lib/javascript";

export const vitestStep = (packageManager: NodePackageManager): JobStep => ({
	name: "Run tests",
	run:
		packageManager === NodePackageManager.BUN
			? "bunx vitest run --coverage"
			: "npx vitest run --coverage",
});
