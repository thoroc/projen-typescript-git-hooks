import { Project } from "projen";
import { synthSnapshot } from "projen/lib/util/synth";
import { describe, expect, it } from "vitest";
import { AgentsMd } from "../../../agents-md";
import { ClaudeCode, GeminiCli, OpenAICodex, OpenCode } from "../../../harness";
import { RtkProxy } from "./component";

describe("RtkProxy", () => {
	it("returns undefined when not present on project", () => {
		const project = new Project({ name: "test" });
		expect(RtkProxy.of(project)).toBeUndefined();
	});

	it("returns the instance when present on project", () => {
		const project = new Project({ name: "test" });
		const s = new RtkProxy(project);
		expect(RtkProxy.of(project)).toBe(s);
	});

	it("creates ClaudeCode when absent and adds PreToolUse hook", () => {
		const project = new Project({ name: "test" });
		new RtkProxy(project);
		const snapshot = synthSnapshot(project);
		const settings = snapshot[".claude/settings.json"];
		expect(settings.hooks?.PreToolUse).toBeDefined();
		expect(settings.hooks?.PreToolUse[0].hooks[0].command).toBe(
			"rtk hook claude pretooluse",
		);
	});

	it("adds PreToolUse hook to existing ClaudeCode", () => {
		const project = new Project({ name: "test" });
		new ClaudeCode(project);
		new RtkProxy(project);
		const snapshot = synthSnapshot(project);
		const settings = snapshot[".claude/settings.json"];
		expect(settings.hooks?.PreToolUse[0].matcher).toBe("Bash");
	});

	it("does not add to McpConfig", () => {
		const project = new Project({ name: "test" });
		new RtkProxy(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot[".mcp.json"]).toBeUndefined();
	});

	it("hook has correct timeout", () => {
		const project = new Project({ name: "test" });
		new RtkProxy(project);
		const snapshot = synthSnapshot(project);
		const hookEntry =
			snapshot[".claude/settings.json"].hooks.PreToolUse[0].hooks[0];
		expect(hookEntry.timeout).toBe(5);
	});

	it("adds BeforeTool hook to GeminiCli when present", () => {
		const project = new Project({ name: "test" });
		new GeminiCli(project);
		new RtkProxy(project);
		const snapshot = synthSnapshot(project);
		const hooks = snapshot[".gemini/settings.json"].hooks;
		expect(hooks?.BeforeTool?.[0].matcher).toBe("run_shell_command");
		expect(hooks?.BeforeTool?.[0].hooks[0].command).toBe(
			"rtk hook gemini beforetool",
		);
	});

	it("does not configure GeminiCli when it is absent", () => {
		const project = new Project({ name: "test" });
		new RtkProxy(project);
		expect(GeminiCli.of(project)).toBeUndefined();
	});

	it("adds rtk plugin to OpenCode when present", () => {
		const project = new Project({ name: "test" });
		new OpenCode(project);
		new RtkProxy(project);
		const snapshot = synthSnapshot(project);
		expect(snapshot["opencode.jsonc"].plugin).toContain("rtk");
	});

	it("does not configure OpenCode when it is absent", () => {
		const project = new Project({ name: "test" });
		new RtkProxy(project);
		expect(OpenCode.of(project)).toBeUndefined();
	});

	describe("agent instructions", () => {
		it("creates .agents/instructions/rtk.md", () => {
			const project = new Project({ name: "test" });
			new RtkProxy(project);
			const snapshot = synthSnapshot(project);
			expect(snapshot[".agents/instructions/rtk.md"]).toBeDefined();
		});

		it("instructions file contains RTK rule content", () => {
			const project = new Project({ name: "test" });
			new RtkProxy(project);
			const snapshot = synthSnapshot(project);
			const content = snapshot[".agents/instructions/rtk.md"];
			expect(content).toContain("rtk git status");
			expect(content).toContain("rtk gain");
		});

		it("registers the instruction with AgentsMd", () => {
			const project = new Project({ name: "test" });
			new RtkProxy(project);
			const agentsMd = AgentsMd.of(project);
			expect(agentsMd).toBeDefined();
		});
	});

	describe("rtk:install task", () => {
		it("creates the rtk:install task", () => {
			const project = new Project({ name: "test" });
			new RtkProxy(project);
			expect(project.tasks.tryFind("rtk:install")).toBeDefined();
		});

		it("install-binary step tries mise, brew, curl, cargo in order", () => {
			const project = new Project({ name: "test" });
			new RtkProxy(project);
			const task = project.tasks.tryFind("rtk:install");
			const step = task?.steps.find((s) => s.name === "install-binary");
			expect(step?.exec).toContain("mise use rtk");
			expect(step?.exec).toContain("brew install rtk");
			expect(step?.exec).toContain("curl -fsSL");
			expect(step?.exec).toContain("cargo install rtk");
		});

		it("skips binary install when rtk is already on PATH", () => {
			const project = new Project({ name: "test" });
			new RtkProxy(project);
			const task = project.tasks.tryFind("rtk:install");
			const step = task?.steps.find((s) => s.name === "install-binary");
			expect(step?.exec).toContain("command -v rtk >/dev/null 2>&1");
		});

		it("always includes rtk init -g step for Claude", () => {
			const project = new Project({ name: "test" });
			new RtkProxy(project);
			const task = project.tasks.tryFind("rtk:install");
			const step = task?.steps.find((s) => s.name === "init-claude");
			expect(step?.exec).toBe("rtk init -g");
		});

		it("adds rtk init --gemini step when GeminiCli is present", () => {
			const project = new Project({ name: "test" });
			new GeminiCli(project);
			new RtkProxy(project);
			const task = project.tasks.tryFind("rtk:install");
			const step = task?.steps.find((s) => s.name === "init-gemini");
			expect(step?.exec).toBe("rtk init -g --gemini");
		});

		it("omits rtk init --gemini step when GeminiCli is absent", () => {
			const project = new Project({ name: "test" });
			new RtkProxy(project);
			const task = project.tasks.tryFind("rtk:install");
			const step = task?.steps.find((s) => s.name === "init-gemini");
			expect(step).toBeUndefined();
		});

		it("adds rtk init --codex step when OpenAICodex is present", () => {
			const project = new Project({ name: "test" });
			new OpenAICodex(project);
			new RtkProxy(project);
			const task = project.tasks.tryFind("rtk:install");
			const step = task?.steps.find((s) => s.name === "init-codex");
			expect(step?.exec).toBe("rtk init -g --codex");
		});

		it("omits rtk init --codex step when OpenAICodex is absent", () => {
			const project = new Project({ name: "test" });
			new RtkProxy(project);
			const task = project.tasks.tryFind("rtk:install");
			const step = task?.steps.find((s) => s.name === "init-codex");
			expect(step).toBeUndefined();
		});
	});
});
