import { describe, expect, it } from "vitest";
import { CodexPreToolUseMatcher, CodexPreToolUseMatcherValues } from "./hooks";

describe("CodexPreToolUseMatcherValues", () => {
	it("returns all default tools joined with |", () => {
		expect(CodexPreToolUseMatcherValues()).toBe(
			"local_shell|shell|shell_command|exec_command|Bash|Shell|apply_patch|Edit|Write|grep_files",
		);
	});

	it("includes every entry from CodexPreToolUseMatcher", () => {
		const result = CodexPreToolUseMatcherValues();
		for (const tool of Object.values(CodexPreToolUseMatcher)) {
			expect(result).toContain(tool);
		}
	});

	it("appends extra tools when provided", () => {
		const result = CodexPreToolUseMatcherValues(["mcp__"]);
		expect(result).toContain("mcp__");
		expect(result).toContain("local_shell");
	});

	it("appends multiple extra tools", () => {
		const result = CodexPreToolUseMatcherValues(["ctx_execute", "mcp__"]);
		expect(result).toContain("ctx_execute");
		expect(result).toContain("mcp__");
	});

	it("returns only default tools when add is empty", () => {
		expect(CodexPreToolUseMatcherValues([])).toBe(
			"local_shell|shell|shell_command|exec_command|Bash|Shell|apply_patch|Edit|Write|grep_files",
		);
	});
});
