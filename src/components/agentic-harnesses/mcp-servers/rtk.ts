import { Component, type Project } from "projen";
import { ClaudeCode } from "../claude-code";
import { GeminiCli } from "../gemini-cli";
import { OpenCode } from "../opencode";

export class RtkProxy extends Component {
	public static of(project: Project): RtkProxy | undefined {
		const singleton = (c: Component): c is RtkProxy => c instanceof RtkProxy;
		return project.components.find(singleton);
	}

	constructor(project: Project) {
		super(project);
		const claude = ClaudeCode.of(project) ?? new ClaudeCode(project);
		claude.addHook("PreToolUse", {
			matcher: "Bash",
			hooks: [
				{ type: "command", command: "rtk hook claude pretooluse", timeout: 5 },
			],
		});

		GeminiCli.of(project)?.addHook("BeforeTool", {
			matcher: "run_shell_command",
			hooks: [{ type: "command", command: "rtk hook gemini beforetool" }],
		});

		OpenCode.of(project)?.addPlugin("rtk");
	}
}
