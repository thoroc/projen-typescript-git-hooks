import * as fs from "fs";
import { Project } from "projen";
import { synthSnapshot } from "projen/lib/util/synth";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ClaudeCode } from "./anthropic/claude-code";
import { GeminiCli } from "./google/gemini-cli";
import { AgenticHarnesses, HarnessType } from "./harnesses";
import { MistralVibe } from "./mistral/vibe";
import { OpenAICodex } from "./openai/codex";
import { OpenCode } from "./opencode/component";

const mockFsNotExists = (): void => {
	vi.spyOn(fs, "existsSync").mockReturnValue(false);
	vi.spyOn(fs, "symlinkSync").mockImplementation(() => {});
};

describe("AgenticHarnesses", () => {
	afterEach(() => {
		vi.restoreAllMocks();
	});

	describe("singleton", () => {
		it("returns undefined when not present on project", () => {
			const project = new Project({ name: "test" });
			expect(AgenticHarnesses.of(project)).toBeUndefined();
		});

		it("returns the instance when present on project", () => {
			const project = new Project({ name: "test" });
			mockFsNotExists();
			const harnesses = new AgenticHarnesses(project);
			expect(AgenticHarnesses.of(project)).toBe(harnesses);
		});
	});

	describe("defaults", () => {
		it("instantiates ClaudeCode when no options given", () => {
			mockFsNotExists();
			const project = new Project({ name: "test" });
			new AgenticHarnesses(project);
			expect(ClaudeCode.of(project)).toBeDefined();
		});

		it("does not instantiate other harnesses by default", () => {
			mockFsNotExists();
			const project = new Project({ name: "test" });
			new AgenticHarnesses(project);
			expect(OpenAICodex.of(project)).toBeUndefined();
			expect(OpenCode.of(project)).toBeUndefined();
			expect(GeminiCli.of(project)).toBeUndefined();
			expect(MistralVibe.of(project)).toBeUndefined();
		});

		it("falls back to ClaudeCode when harnesses is an empty array", () => {
			mockFsNotExists();
			const project = new Project({ name: "test" });
			new AgenticHarnesses(project, { harnesses: [] });
			expect(ClaudeCode.of(project)).toBeDefined();
		});
	});

	describe("harness selection", () => {
		it("instantiates only the specified harness", () => {
			const project = new Project({ name: "test" });
			new AgenticHarnesses(project, { harnesses: [HarnessType.CODEX] });
			expect(ClaudeCode.of(project)).toBeUndefined();
			expect(OpenAICodex.of(project)).toBeDefined();
			expect(OpenCode.of(project)).toBeUndefined();
			expect(GeminiCli.of(project)).toBeUndefined();
			expect(MistralVibe.of(project)).toBeUndefined();
		});

		it("instantiates multiple specified harnesses", () => {
			mockFsNotExists();
			const project = new Project({ name: "test" });
			new AgenticHarnesses(project, {
				harnesses: [HarnessType.CLAUDE_CODE, HarnessType.GEMINI],
			});
			expect(ClaudeCode.of(project)).toBeDefined();
			expect(GeminiCli.of(project)).toBeDefined();
			expect(OpenAICodex.of(project)).toBeUndefined();
			expect(OpenCode.of(project)).toBeUndefined();
			expect(MistralVibe.of(project)).toBeUndefined();
		});

		it("instantiates all five harnesses when all specified", () => {
			mockFsNotExists();
			const project = new Project({ name: "test" });
			new AgenticHarnesses(project, {
				harnesses: [
					HarnessType.CLAUDE_CODE,
					HarnessType.CODEX,
					HarnessType.OPENCODE,
					HarnessType.GEMINI,
					HarnessType.VIBE,
				],
			});
			expect(ClaudeCode.of(project)).toBeDefined();
			expect(OpenAICodex.of(project)).toBeDefined();
			expect(OpenCode.of(project)).toBeDefined();
			expect(GeminiCli.of(project)).toBeDefined();
			expect(MistralVibe.of(project)).toBeDefined();
		});
	});

	describe("config file generation", () => {
		it("generates .claude/settings.json for ClaudeCode", () => {
			mockFsNotExists();
			const project = new Project({ name: "test" });
			new AgenticHarnesses(project);
			const snapshot = synthSnapshot(project);
			expect(snapshot[".claude/settings.json"]).toBeDefined();
		});

		it("generates .codex/config.toml for OpenAICodex", () => {
			const project = new Project({ name: "test" });
			new AgenticHarnesses(project, { harnesses: [HarnessType.CODEX] });
			const snapshot = synthSnapshot(project);
			expect(snapshot[".codex/config.toml"]).toBeDefined();
		});

		it("generates opencode.jsonc for OpenCode", () => {
			mockFsNotExists();
			const project = new Project({ name: "test" });
			new AgenticHarnesses(project, { harnesses: [HarnessType.OPENCODE] });
			const snapshot = synthSnapshot(project);
			expect(snapshot["opencode.jsonc"]).toBeDefined();
		});

		it("generates .gemini/settings.json for GeminiCli", () => {
			mockFsNotExists();
			const project = new Project({ name: "test" });
			new AgenticHarnesses(project, { harnesses: [HarnessType.GEMINI] });
			const snapshot = synthSnapshot(project);
			expect(snapshot[".gemini/settings.json"]).toBeDefined();
		});

		it("generates .vibe/config.toml for MistralVibe", () => {
			const project = new Project({ name: "test" });
			new AgenticHarnesses(project, { harnesses: [HarnessType.VIBE] });
			const snapshot = synthSnapshot(project);
			expect(snapshot[".vibe/config.toml"]).toBeDefined();
		});
	});

	describe("harnesses:install task", () => {
		it("creates harnesses:install task", () => {
			mockFsNotExists();
			const project = new Project({ name: "test" });
			new AgenticHarnesses(project);
			const snapshot = synthSnapshot(project);
			expect(
				snapshot[".projen/tasks.json"].tasks["harnesses:install"],
			).toBeDefined();
		});

		it("spawns claude-code:install by default", () => {
			mockFsNotExists();
			const project = new Project({ name: "test" });
			new AgenticHarnesses(project);
			const snapshot = synthSnapshot(project);
			const steps =
				snapshot[".projen/tasks.json"].tasks["harnesses:install"].steps;
			expect(
				steps.some(
					(s: { spawn?: string }) => s.spawn === "claude-code:install",
				),
			).toBe(true);
		});

		it("spawns only enabled harness tasks", () => {
			const project = new Project({ name: "test" });
			new AgenticHarnesses(project, {
				harnesses: [HarnessType.CODEX, HarnessType.VIBE],
			});
			const snapshot = synthSnapshot(project);
			const steps =
				snapshot[".projen/tasks.json"].tasks["harnesses:install"].steps;
			const spawned = steps
				.filter((s: { spawn?: string }) => s.spawn)
				.map((s: { spawn?: string }) => s.spawn);
			expect(spawned).toContain("codex:install");
			expect(spawned).toContain("vibe:install");
			expect(spawned).not.toContain("claude-code:install");
			expect(spawned).not.toContain("gemini:install");
			expect(spawned).not.toContain("opencode:install");
		});

		it("spawns all five tasks when all harnesses enabled", () => {
			mockFsNotExists();
			const project = new Project({ name: "test" });
			new AgenticHarnesses(project, {
				harnesses: [
					HarnessType.CLAUDE_CODE,
					HarnessType.CODEX,
					HarnessType.OPENCODE,
					HarnessType.GEMINI,
					HarnessType.VIBE,
				],
			});
			const snapshot = synthSnapshot(project);
			const steps =
				snapshot[".projen/tasks.json"].tasks["harnesses:install"].steps;
			const spawned = steps
				.filter((s: { spawn?: string }) => s.spawn)
				.map((s: { spawn?: string }) => s.spawn);
			expect(spawned).toContain("claude-code:install");
			expect(spawned).toContain("codex:install");
			expect(spawned).toContain("opencode:install");
			expect(spawned).toContain("gemini:install");
			expect(spawned).toContain("vibe:install");
		});
	});

	describe("per-harness options", () => {
		it("passes claudeCode options to ClaudeCode", () => {
			mockFsNotExists();
			const project = new Project({ name: "test" });
			new AgenticHarnesses(project, {
				claudeCode: { permissions: { allow: ["Bash"] } },
			});
			const snapshot = synthSnapshot(project);
			expect(snapshot[".claude/settings.json"].permissions).toEqual({
				allow: ["Bash"],
			});
		});

		it("passes codex options to OpenAICodex", () => {
			const project = new Project({ name: "test" });
			new AgenticHarnesses(project, {
				harnesses: [HarnessType.CODEX],
				codex: { model: "o4-mini" },
			});
			const snapshot = synthSnapshot(project);
			expect(snapshot[".codex/config.toml"]).toContain("o4-mini");
		});

		it("passes gemini options to GeminiCli", () => {
			mockFsNotExists();
			const project = new Project({ name: "test" });
			new AgenticHarnesses(project, {
				harnesses: [HarnessType.GEMINI],
				gemini: { model: "gemini-2.5-pro" },
			});
			const snapshot = synthSnapshot(project);
			expect(snapshot[".gemini/settings.json"].model).toEqual({
				name: "gemini-2.5-pro",
			});
		});

		it("passes vibe options to MistralVibe", () => {
			const project = new Project({ name: "test" });
			new AgenticHarnesses(project, {
				harnesses: [HarnessType.VIBE],
				vibe: { model: "mistral-large" },
			});
			const snapshot = synthSnapshot(project);
			expect(snapshot[".vibe/config.toml"]).toContain("mistral-large");
		});
	});
});
