import { pick } from "./pick";

describe("pick", () => {
	it("returns only the specified keys", () => {
		const obj = { a: 1, b: 2, c: 3 };
		expect(pick(obj, "a", "c")).toEqual({ a: 1, c: 3 });
	});

	it("ignores keys not present in the object", () => {
		const obj = { a: 1, b: 2 };
		expect(pick(obj, "a")).toEqual({ a: 1 });
	});

	it("returns an empty object when no keys are specified", () => {
		const obj = { a: 1 };
		expect(pick(obj)).toEqual({});
	});

	it("returns an empty object when none of the keys exist", () => {
		const obj = { a: 1 } as Record<string, number>;
		expect(pick(obj as unknown as { b: number }, "b" as never)).toEqual({});
	});
});
