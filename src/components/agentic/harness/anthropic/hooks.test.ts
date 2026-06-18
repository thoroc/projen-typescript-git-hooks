import { describe, expect, it } from "vitest";
import {
	ClaudePreToolUseMatcher,
	ClaudePreToolUseMatcherValues,
} from "./hooks";

describe("ClaudePreToolUseMatcherValues", () => {
	it("returns all default tools joined with |", () => {
		expect(ClaudePreToolUseMatcherValues()).toBe(
			"Bash|Shell|Read|Edit|Write|WebFetch|Agent",
		);
	});

	it("includes every entry from ClaudePreToolUseMatcher", () => {
		const result = ClaudePreToolUseMatcherValues();
		for (const tool of Object.values(ClaudePreToolUseMatcher)) {
			expect(result).toContain(tool);
		}
	});

	it("appends extra tools when provided", () => {
		const result = ClaudePreToolUseMatcherValues(["mcp__"]);
		expect(result).toContain("mcp__");
		expect(result).toContain("Bash");
	});

	it("appends multiple extra tools", () => {
		const result = ClaudePreToolUseMatcherValues([
			"ctx_execute",
			"ctx_search",
			"mcp__",
		]);
		expect(result).toContain("ctx_execute");
		expect(result).toContain("ctx_search");
		expect(result).toContain("mcp__");
	});

	it("returns only default tools when add is empty", () => {
		expect(ClaudePreToolUseMatcherValues([])).toBe(
			"Bash|Shell|Read|Edit|Write|WebFetch|Agent",
		);
	});
});
