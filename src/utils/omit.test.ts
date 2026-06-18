import { describe, expect, it } from "vitest";
import { omit } from "./omit";

describe("omit", () => {
	it("removes the specified keys", () => {
		const obj = { a: 1, b: 2, c: 3 };
		expect(omit(obj, "b")).toEqual({ a: 1, c: 3 });
	});

	it("removes multiple keys", () => {
		const obj = { a: 1, b: 2, c: 3 };
		expect(omit(obj, "a", "c")).toEqual({ b: 2 });
	});

	it("returns the original object shape when no keys are omitted", () => {
		const obj = { a: 1, b: 2 };
		expect(omit(obj)).toEqual({ a: 1, b: 2 });
	});

	it("returns an empty object when all keys are omitted", () => {
		const obj = { a: 1 };
		expect(omit(obj, "a")).toEqual({});
	});
});
