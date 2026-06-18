import { describe, expect, it } from "vitest";
import { SharedSimpleHookEvents, sharedSimpleHookEventValues } from "./hooks";

describe("sharedSimpleHookEventValues", () => {
	it("returns all events joined with |", () => {
		expect(sharedSimpleHookEventValues()).toBe(
			"PostToolUse|SessionStart|PreCompact|UserPromptSubmit|Stop",
		);
	});

	it("includes every entry from SharedSimpleHookEvents", () => {
		const result = sharedSimpleHookEventValues();
		for (const event of Object.values(SharedSimpleHookEvents)) {
			expect(result).toContain(event);
		}
	});

	it("appends extra events when provided", () => {
		const result = sharedSimpleHookEventValues(["CustomEvent"]);
		expect(result).toContain("CustomEvent");
		expect(result).toContain("PostToolUse");
	});

	it("appends multiple extra events", () => {
		const result = sharedSimpleHookEventValues(["EventA", "EventB"]);
		expect(result).toContain("EventA");
		expect(result).toContain("EventB");
		expect(result).toContain("PostToolUse");
	});

	it("returns only default events when add is empty", () => {
		expect(sharedSimpleHookEventValues([])).toBe(
			"PostToolUse|SessionStart|PreCompact|UserPromptSubmit|Stop",
		);
	});
});
