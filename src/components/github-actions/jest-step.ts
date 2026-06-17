import type { JobStep } from "projen/lib/github/workflows-model";
import { NodePackageManager } from "projen/lib/javascript";

export const jestStep = (packageManager: NodePackageManager): JobStep => ({
	name: "Run tests",
	run:
		packageManager === NodePackageManager.BUN
			? "bunx jest --coverage --coverageReporters json-summary"
			: "npx jest --coverage --coverageReporters json-summary",
});
