import { Component, type Project, SampleFile } from "projen";
import { AgentsMd } from "../../../agents-md";
import { ClaudeCode, GeminiCli, OpenAICodex, OpenCode } from "../../../harness";
import {
	INSTALL_BINARY,
	INSTRUCTIONS_CONTENT,
	INSTRUCTIONS_PATH,
} from "./constants";

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

		const gemini = GeminiCli.of(project);
		gemini?.addHook("BeforeTool", {
			matcher: "run_shell_command",
			hooks: [{ type: "command", command: "rtk hook gemini beforetool" }],
		});

		OpenCode.of(project)?.addPlugin("rtk");

		new SampleFile(project, INSTRUCTIONS_PATH, {
			contents: INSTRUCTIONS_CONTENT,
		});
		const agentsMd = AgentsMd.of(project) ?? new AgentsMd(project);
		agentsMd.addInstruction(INSTRUCTIONS_PATH);

		const installTask = project.tasks.addTask("rtk:install", {
			description: "Install RTK binary and initialise agent hooks",
		});
		installTask.exec(INSTALL_BINARY, { name: "install-binary" });
		installTask.exec("rtk init -g", { name: "init-claude" });
		if (gemini) {
			installTask.exec("rtk init -g --gemini", { name: "init-gemini" });
		}
		if (OpenAICodex.of(project)) {
			installTask.exec("rtk init -g --codex", { name: "init-codex" });
		}
	}
}
