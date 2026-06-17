import type { JobStep } from "projen/lib/github/workflows-model";
import { NodePackageManager } from "projen/lib/javascript";
import { installScript } from "./install-script";

export const installSteps = (packageManager: NodePackageManager): JobStep[] => [
	...(packageManager === NodePackageManager.BUN
		? [
				{
					name: "Setup bun",
					uses: "oven-sh/setup-bun@v2",
					with: { "bun-version": "latest" },
				},
			]
		: []),
	{ name: "Install dependencies", run: installScript(packageManager) },
];
