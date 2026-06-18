import { hooksEventmerger } from "../utils/hooks-event-merger";

export const CodexPreToolUseMatcher = {
	LOCAL_SHELL: "local_shell",
	SHELL: "shell",
	SHELL_COMMAND: "shell_command",
	EXEC_COMMAND: "exec_command",
	BASH: "Bash",
	SHELL_CAPITALIZED: "Shell",
	APPLY_PATCH: "apply_patch",
	EDIT: "Edit",
	WRITE: "Write",
	GREP_FILES: "grep_files",
};

export type CodexPreToolUseMatcherType = keyof typeof CodexPreToolUseMatcher;

export const CodexPreToolUseMatcherValues = (add?: Array<string>): string => {
	return hooksEventmerger(CodexPreToolUseMatcher, add);
};
