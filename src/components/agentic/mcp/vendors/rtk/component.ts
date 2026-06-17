import { Component, type Project } from "projen";
import { ClaudeCode, GeminiCli, OpenAICodex, OpenCode } from "../../../harness";

const INSTALL_BINARY =
	"command -v rtk >/dev/null 2>&1 || " +
	"(command -v mise >/dev/null 2>&1 && mise use rtk) || " +
	"(command -v brew >/dev/null 2>&1 && brew install rtk) || " +
	"(curl -fsSL https://raw.githubusercontent.com/rtk-ai/rtk/refs/heads/master/install.sh | sh) || " +
	"cargo install rtk";

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
