import { hooksEventmerger } from "../utils/hooks-event-merger";

export const ClaudePreToolUseMatcher = {
	BASH: "Bash",
	SHELL: "Shell",
	READ: "Read",
	EDIT: "Edit",
	WRITE: "Write",
	WEB_FETCH: "WebFetch",
	AGENT: "Agent",
};

export type ClaudePreToolUseMatcherType = keyof typeof ClaudePreToolUseMatcher;

export const ClaudePreToolUseMatcherValues = (add?: Array<string>): string => {
	return hooksEventmerger(ClaudePreToolUseMatcher, add);
};
