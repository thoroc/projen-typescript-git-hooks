import { NodePackageManager } from "projen/lib/javascript";

const scripts: Record<NodePackageManager, string> = {
	[NodePackageManager.NPM]: "npm run test",
	// deprecated aliases — map to their canonical equivalents
	[NodePackageManager.YARN]: "yarn test --frozen-lockfile",
	[NodePackageManager.YARN2]: "yarn test --check-files",
	[NodePackageManager.YARN_CLASSIC]: "yarn test --frozen-lockfile",
	[NodePackageManager.YARN_BERRY]: "yarn test --check-files",
	[NodePackageManager.PNPM]: "pnpm run test --frozen-lockfile",
	[NodePackageManager.BUN]: "bun test",
};

export const runTest = (packageManager: NodePackageManager): string =>
	scripts[packageManager] ?? "npm ci";
