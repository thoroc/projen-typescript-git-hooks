import { describe, expect, it } from "vitest";
import { hooksEventmerger } from "./hooks-event-merger";

describe("hooksEventmerger", () => {
	describe("with a Record input", () => {
		it("joins values with |", () => {
			expect(hooksEventmerger({ A: "Bash", B: "Shell" })).toBe("Bash|Shell");
		});

		it("returns a single value without separator", () => {
			expect(hooksEventmerger({ A: "Bash" })).toBe("Bash");
		});

		it("returns empty string for empty Record", () => {
			expect(hooksEventmerger({})).toBe("");
		});
	});

	describe("with an Array input", () => {
		it("joins values with |", () => {
			expect(hooksEventmerger(["Bash", "Shell"])).toBe("Bash|Shell");
		});

		it("returns a single value without separator", () => {
			expect(hooksEventmerger(["Bash"])).toBe("Bash");
		});

		it("returns empty string for empty Array", () => {
			expect(hooksEventmerger([])).toBe("");
		});
	});

	describe("with additional hooks", () => {
		it("appends otherHooks to Record values", () => {
			expect(hooksEventmerger({ A: "Bash" }, ["mcp__"])).toBe("Bash|mcp__");
		});

		it("appends otherHooks to Array values", () => {
			expect(hooksEventmerger(["Bash"], ["mcp__"])).toBe("Bash|mcp__");
		});

		it("appends multiple otherHooks", () => {
			expect(hooksEventmerger({ A: "Bash" }, ["ctx_execute", "mcp__"])).toBe(
				"Bash|ctx_execute|mcp__",
			);
		});

		it("ignores empty otherHooks array", () => {
			expect(hooksEventmerger({ A: "Bash" }, [])).toBe("Bash");
		});
	});
});
