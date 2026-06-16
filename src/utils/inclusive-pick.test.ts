import { inclusivePick } from "./inclusive-pick";

describe("inclusivePick", () => {
	it("returns values for keys that exist in the object", () => {
		const obj = { a: 1, b: 2, c: 3 };
		expect(inclusivePick(obj, "a", "c")).toEqual({ a: 1, c: 3 });
	});

	it("returns undefined for keys not present in the object", () => {
		const obj = { a: 1 };
		const result = inclusivePick(obj, "a", "missing" as keyof typeof obj);
		expect(result).toEqual({ a: 1, missing: undefined });
	});

	it("returns an empty object when no keys are specified", () => {
		const obj = { a: 1 };
		expect(inclusivePick(obj)).toEqual({});
	});
});
