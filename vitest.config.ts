import { defineConfig } from "vitest/config";

export default defineConfig({
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
