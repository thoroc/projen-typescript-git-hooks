import { hooksEventmerger } from "../utils/hooks-event-merger";

export const GeminiBeforeToolMatcher = {
	RUN_SHELL_COMMAND: "run_shell_command",
	READ_FILE: "read_file",
	READ_MANY_FILES: "read_many_files",
	GREP_SEARCH: "grep_search",
	SEARCH_FILE_CONTENT: "search_file_content",
	WEB_FETCH: "web_fetch",
	ACTIVATE_SKILL: "activate_skill",
};

export type GeminiBeforeToolMatcherType = keyof typeof GeminiBeforeToolMatcher;

export const GeminiBeforeToolMatcherValues = (add?: Array<string>): string => {
	return hooksEventmerger(GeminiBeforeToolMatcher, add);
};

export const GeminiSimpleHookEvents = {
	AFTER_TOOL: "AfterTool",
	PRE_COMPRESS: "PreCompress",
	SESSION_START: "SessionStart",
};

export type GeminiSimpleHookEvent = keyof typeof GeminiSimpleHookEvents;

export const GeminiSimpleHookEventValues = (add?: Array<string>): string => {
	return hooksEventmerger(GeminiSimpleHookEvents, add);
};
