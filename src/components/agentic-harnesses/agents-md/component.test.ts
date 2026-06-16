import { Project } from "projen";
import { synthSnapshot } from "projen/lib/util/synth";
import { ClaudeCode } from "../anthropic";
import { OpenCode } from "../opencode";
import { AgentsMd } from "./component";

describe("AgentsMd", () => {
	it("returns undefined when not present on project", () => {
		const project = new Project({ name: "test" });
		expect(AgentsMd.of(project)).toBeUndefined();
	});

	it("returns the instance when present on project", () => {
		const project = new Project({ name: "test" });
		const agentsMd = new AgentsMd(project);
		expect(AgentsMd.of(project)).toBe(agentsMd);
	});

	it("creates AGENTS.md when instantiated", () => {
		const project = new Project({ name: "test" });
		new AgentsMd(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot["AGENTS.md"]).toBeDefined();
	});

	it("is a singleton — multiple harnesses share one instance", () => {
		const project = new Project({ name: "test" });
		new ClaudeCode(project);
		new OpenCode(project);
		const instances = project.components.filter((c) => c instanceof AgentsMd);
		expect(instances).toHaveLength(1);
	});

	it("AGENTS.md content contains agent instructions header", () => {
		const project = new Project({ name: "test" });
		new AgentsMd(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot["AGENTS.md"]).toContain("# Agent Instructions");
	});
});
