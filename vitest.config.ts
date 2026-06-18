import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [tsconfigPaths({ projects: ["./tsconfig.dev.json"] })],
  test: {
    globals: true,
    include: ["src/**/*.test.ts"],
    testTimeout: 15000,
    maxWorkers: 4,
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov"],
    },
  },
});
