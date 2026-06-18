import { Rule } from "./rule";

class ConcreteRule extends Rule {}

describe("Rule", () => {
	it("serialize returns an object", () => {
		const rule = new ConcreteRule();
		const result = rule.serialize();
		expect(result).toBeDefined();
		expect(typeof result).toBe("object");
	});
});
