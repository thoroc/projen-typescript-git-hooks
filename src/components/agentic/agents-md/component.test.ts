import * as fs from "fs";
import { Project } from "projen";
import { synthSnapshot } from "projen/lib/util/synth";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ClaudeCode, OpenCode } from "../harness";
import { AgentsMd } from "./component";

vi.mock("fs", async (importOriginal) => {
	const actual = await importOriginal<typeof import("fs")>();
	return {
		...actual,
		existsSync: vi.fn(),
		readFileSync: vi.fn(),
		writeFileSync: vi.fn(),
	};
});

describe("AgentsMd", () => {
	afterEach(() => {
		vi.resetAllMocks();
	});

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

	describe("addInstruction", () => {
		it("registers an instruction path", () => {
			vi.mocked(fs.existsSync).mockReturnValue(true);
			vi.mocked(fs.readFileSync).mockReturnValue("# Agent Instructions\n");
			const project = new Project({ name: "test" });
			const agentsMd = new AgentsMd(project);
			agentsMd.addInstruction(".agents/instructions/rtk.md");
			agentsMd.postSynthesize();
			const written = vi.mocked(fs.writeFileSync).mock.calls[0][1] as string;
			expect(written).toContain("@.agents/instructions/rtk.md");
		});

		it("is idempotent — duplicate paths are not added twice", () => {
			vi.mocked(fs.existsSync).mockReturnValue(true);
			vi.mocked(fs.readFileSync).mockReturnValue("# Agent Instructions\n");
			const project = new Project({ name: "test" });
			const agentsMd = new AgentsMd(project);
			agentsMd.addInstruction(".agents/instructions/rtk.md");
			agentsMd.addInstruction(".agents/instructions/rtk.md");
			agentsMd.postSynthesize();
			const written = vi.mocked(fs.writeFileSync).mock.calls[0][1] as string;
			const count = (written.match(/@\.agents\/instructions\/rtk\.md/g) ?? [])
				.length;
			expect(count).toBe(1);
		});
	});

	describe("postSynthesize", () => {
		it("does nothing when no instructions are registered", () => {
			const project = new Project({ name: "test" });
			const agentsMd = new AgentsMd(project);
			agentsMd.postSynthesize();
			expect(fs.existsSync).not.toHaveBeenCalled();
		});

		it("does nothing when AGENTS.md does not exist on disk", () => {
			vi.mocked(fs.existsSync).mockReturnValue(false);
			const project = new Project({ name: "test" });
			const agentsMd = new AgentsMd(project);
			agentsMd.addInstruction(".agents/instructions/rtk.md");
			agentsMd.postSynthesize();
			expect(fs.writeFileSync).not.toHaveBeenCalled();
		});

		it("adds ## Instructions section when not present", () => {
			vi.mocked(fs.existsSync).mockReturnValue(true);
			vi.mocked(fs.readFileSync).mockReturnValue(
				"# Agent Instructions\n\nSome content.",
			);
			const project = new Project({ name: "test" });
			const agentsMd = new AgentsMd(project);
			agentsMd.addInstruction(".agents/instructions/rtk.md");
			agentsMd.postSynthesize();
			const written = vi.mocked(fs.writeFileSync).mock.calls[0][1] as string;
			expect(written).toContain("## Instructions\n");
			expect(written).toContain("@.agents/instructions/rtk.md");
		});

		it("appends missing entry when ## Instructions section already exists", () => {
			vi.mocked(fs.existsSync).mockReturnValue(true);
			vi.mocked(fs.readFileSync).mockReturnValue(
				"# Agent Instructions\n\n## Instructions\n\n@existing.md\n",
			);
			const project = new Project({ name: "test" });
			const agentsMd = new AgentsMd(project);
			agentsMd.addInstruction(".agents/instructions/rtk.md");
			agentsMd.postSynthesize();
			const written = vi.mocked(fs.writeFileSync).mock.calls[0][1] as string;
			expect(written).toContain("@existing.md");
			expect(written).toContain("@.agents/instructions/rtk.md");
		});

		it("does not write when all instructions are already present", () => {
			vi.mocked(fs.existsSync).mockReturnValue(true);
			vi.mocked(fs.readFileSync).mockReturnValue(
				"# Agent Instructions\n\n## Instructions\n\n@.agents/instructions/rtk.md\n",
			);
			const project = new Project({ name: "test" });
			const agentsMd = new AgentsMd(project);
			agentsMd.addInstruction(".agents/instructions/rtk.md");
			agentsMd.postSynthesize();
			expect(fs.writeFileSync).not.toHaveBeenCalled();
		});
	});
});
