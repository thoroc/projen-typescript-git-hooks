export const SharedSimpleHookEvents = {
	POST_TOOL_USE: "PostToolUse",
	SESSION_START: "SessionStart",
	PRE_COMPACT: "PreCompact",
	USER_PROMPT_SUBMIT: "UserPromptSubmit",
	STOP: "Stop",
};

export type SharedSimpleHookEvent = keyof typeof SharedSimpleHookEvents;

export const sharedSimpleHookEventValues = (add?: Array<string>): string => {
	const values = Object.values(SharedSimpleHookEvents);

	if (add && add.length > 0) {
		return [...values, ...add].join("|");
	}

	return values.join("|");
};
