import { NodePackageManager } from "projen/lib/javascript";

const scripts: Record<NodePackageManager, string> = {
	[NodePackageManager.NPM]: "npm ci",
	// deprecated aliases — map to their canonical equivalents
	[NodePackageManager.YARN]: "yarn install --frozen-lockfile",
	[NodePackageManager.YARN2]: "yarn install --check-files",
	[NodePackageManager.YARN_CLASSIC]: "yarn install --frozen-lockfile",
	[NodePackageManager.YARN_BERRY]: "yarn install --check-files",
	[NodePackageManager.PNPM]: "pnpm install --frozen-lockfile",
	[NodePackageManager.BUN]: "bun install",
};

export const installScript = (packageManager: NodePackageManager): string =>
	scripts[packageManager] ?? "npm ci";
