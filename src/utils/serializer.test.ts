import { objectKeyCaseConverter } from "./serializer";

describe("objectKeyCaseConverter", () => {
	it("converts object keys with the callback", () => {
		const result = objectKeyCaseConverter({ fooBar: 1 }, (k) =>
			k.toUpperCase(),
		);
		expect(result).toEqual({ FOOBAR: 1 });
	});

	it("recursively converts nested object keys", () => {
		const result = objectKeyCaseConverter({ fooBar: { bazQux: true } }, (k) =>
			k.toUpperCase(),
		);
		expect(result).toEqual({ FOOBAR: { BAZQUX: true } });
	});

	it("handles array input by mapping each element", () => {
		const result = objectKeyCaseConverter([{ fooBar: 1 }, { bazQux: 2 }], (k) =>
			k.toUpperCase(),
		);
		expect(result).toEqual([{ FOOBAR: 1 }, { BAZQUX: 2 }]);
	});

	it("returns undefined for null input", () => {
		const result = objectKeyCaseConverter(null, (k) => k);
		expect(result).toBeUndefined();
	});

	it("returns primitive value unchanged for non-object input", () => {
		const result = objectKeyCaseConverter("hello", (k) => k);
		expect(result).toBe("hello");
	});
});
