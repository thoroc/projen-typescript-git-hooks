import { describe, expect, it } from "vitest";
import {
	GeminiBeforeToolMatcher,
	GeminiBeforeToolMatcherValues,
	GeminiSimpleHookEvents,
	GeminiSimpleHookEventValues,
} from "./hooks";

describe("GeminiBeforeToolMatcherValues", () => {
	it("returns all default tools joined with |", () => {
		expect(GeminiBeforeToolMatcherValues()).toBe(
			"run_shell_command|read_file|read_many_files|grep_search|search_file_content|web_fetch|activate_skill",
		);
	});

	it("includes every entry from GeminiBeforeToolMatcher", () => {
		const result = GeminiBeforeToolMatcherValues();
		for (const tool of Object.values(GeminiBeforeToolMatcher)) {
			expect(result).toContain(tool);
		}
	});

	it("appends extra tools when provided", () => {
		const result = GeminiBeforeToolMatcherValues(["mcp__"]);
		expect(result).toContain("mcp__");
		expect(result).toContain("run_shell_command");
	});

	it("returns only default tools when add is empty", () => {
		expect(GeminiBeforeToolMatcherValues([])).toBe(
			"run_shell_command|read_file|read_many_files|grep_search|search_file_content|web_fetch|activate_skill",
		);
	});
});

describe("GeminiSimpleHookEventValues", () => {
	it("returns all events joined with |", () => {
		expect(GeminiSimpleHookEventValues()).toBe(
			"AfterTool|PreCompress|SessionStart",
		);
	});

	it("includes every entry from GeminiSimpleHookEvents", () => {
		const result = GeminiSimpleHookEventValues();
		for (const event of Object.values(GeminiSimpleHookEvents)) {
			expect(result).toContain(event);
		}
	});

	it("appends extra events when provided", () => {
		const result = GeminiSimpleHookEventValues(["CustomEvent"]);
		expect(result).toContain("CustomEvent");
		expect(result).toContain("AfterTool");
	});

	it("returns only default events when add is empty", () => {
		expect(GeminiSimpleHookEventValues([])).toBe(
			"AfterTool|PreCompress|SessionStart",
		);
	});
});
