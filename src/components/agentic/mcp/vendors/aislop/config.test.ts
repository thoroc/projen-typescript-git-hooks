import { Project } from "projen";
import { synthSnapshot } from "projen/lib/util/synth";
import { describe, expect, it } from "vitest";
import { AislopConfig } from "./config";

describe("AislopConfig", () => {
	it("returns undefined when not present on project", () => {
		const project = new Project({ name: "test" });
		expect(AislopConfig.of(project)).toBeUndefined();
	});

	it("returns the instance when present on project", () => {
		const project = new Project({ name: "test" });
		const c = new AislopConfig(project);
		expect(AislopConfig.of(project)).toBe(c);
	});

	it("creates config file with version when no options provided", () => {
		const project = new Project({ name: "test" });
		new AislopConfig(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot[".aislop/config.yml"]).toContain("version: 1");
	});

	it("includes extends as a string", () => {
		const project = new Project({ name: "test" });
		new AislopConfig(project, { extends: "../../.aislop/base.yml" });
		const snapshot = synthSnapshot(project);
		expect(snapshot[".aislop/config.yml"]).toContain(
			"extends: ../../.aislop/base.yml",
		);
	});

	it("includes extends as an array", () => {
		const project = new Project({ name: "test" });
		new AislopConfig(project, {
			extends: ["../../.aislop/base.yml", "../shared.yml"],
		});
		const snapshot = synthSnapshot(project);
		expect(snapshot[".aislop/config.yml"]).toContain("../../.aislop/base.yml");
		expect(snapshot[".aislop/config.yml"]).toContain("../shared.yml");
	});

	it("writes engine toggles with kebab-case keys", () => {
		const project = new Project({ name: "test" });
		new AislopConfig(project, {
			engines: { codeQuality: false, aiSlop: true, architecture: true },
		});
		const snapshot = synthSnapshot(project);
		const yml = snapshot[".aislop/config.yml"];
		expect(yml).toContain("code-quality: false");
		expect(yml).toContain("ai-slop: true");
		expect(yml).toContain("architecture: true");
	});

	it("writes quality threshold fields", () => {
		const project = new Project({ name: "test" });
		new AislopConfig(project, {
			maxFunctionLoc: 60,
			maxFileLoc: 300,
			maxNesting: 4,
			maxParams: 5,
		});
		const snapshot = synthSnapshot(project);
		const yml = snapshot[".aislop/config.yml"];
		expect(yml).toContain("maxFunctionLoc: 60");
		expect(yml).toContain("maxFileLoc: 300");
		expect(yml).toContain("maxNesting: 4");
		expect(yml).toContain("maxParams: 5");
	});

	it("writes security options", () => {
		const project = new Project({ name: "test" });
		new AislopConfig(project, {
			security: { audit: true, auditTimeout: 30000 },
		});
		const snapshot = synthSnapshot(project);
		const yml = snapshot[".aislop/config.yml"];
		expect(yml).toContain("audit: true");
		expect(yml).toContain("auditTimeout: 30000");
	});

	it("writes scoring weights with kebab-case keys", () => {
		const project = new Project({ name: "test" });
		new AislopConfig(project, {
			scoring: {
				weights: { codeQuality: 0.3, aiSlop: 0.4 },
				thresholds: { good: 80, ok: 60 },
				smoothing: 15,
				maxPerRule: 35,
			},
		});
		const snapshot = synthSnapshot(project);
		const yml = snapshot[".aislop/config.yml"];
		expect(yml).toContain("code-quality: 0.3");
		expect(yml).toContain("ai-slop: 0.4");
		expect(yml).toContain("good: 80");
		expect(yml).toContain("ok: 60");
		expect(yml).toContain("smoothing: 15");
		expect(yml).toContain("maxPerRule: 35");
	});

	it("writes CI configuration", () => {
		const project = new Project({ name: "test" });
		new AislopConfig(project, { ci: { failBelow: 75, format: "json" } });
		const snapshot = synthSnapshot(project);
		const yml = snapshot[".aislop/config.yml"];
		expect(yml).toContain("failBelow: 75");
		expect(yml).toContain("format: json");
	});

	it("writes telemetry configuration", () => {
		const project = new Project({ name: "test" });
		new AislopConfig(project, { telemetry: { enabled: false } });
		const snapshot = synthSnapshot(project);
		expect(snapshot[".aislop/config.yml"]).toContain("enabled: false");
	});
});
