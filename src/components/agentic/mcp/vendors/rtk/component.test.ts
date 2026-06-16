import { Project } from "projen";
import { synthSnapshot } from "projen/lib/util/synth";
import { describe, expect, it } from "vitest";
import { ClaudeCode, GeminiCli, OpenCode } from "../../../harness";
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
		expect(snapshot["opencode.json"].plugin).toContain("rtk");
	});

	it("does not configure OpenCode when it is absent", () => {
		const project = new Project({ name: "test" });
		new RtkProxy(project);
		expect(OpenCode.of(project)).toBeUndefined();
	});
});
