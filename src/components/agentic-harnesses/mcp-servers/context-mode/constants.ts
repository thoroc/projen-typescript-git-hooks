export const CLAUDE_PRETOOLUSE_MATCHER =
	"Bash|Shell|Read|Edit|Write|WebFetch|Agent|ctx_execute|ctx_execute_file|ctx_batch_execute|ctx_fetch_and_index|ctx_search|ctx_index|mcp__";

export const GEMINI_BEFORETOOL_MATCHER =
	"run_shell_command|read_file|read_many_files|grep_search|search_file_content|web_fetch|activate_skill|mcp__plugin_context-mode|mcp__context-mode|mcp__(?!.*context-mode)";

export const CODEX_PRETOOLUSE_MATCHER =
	"local_shell|shell|shell_command|exec_command|Bash|Shell|apply_patch|Edit|Write|grep_files|ctx_execute|ctx_execute_file|ctx_batch_execute|ctx_fetch_and_index|ctx_search|ctx_index|mcp__";

export const SHARED_SIMPLE_HOOK_EVENTS = [
	"PostToolUse",
	"SessionStart",
	"PreCompact",
	"UserPromptSubmit",
	"Stop",
] as const;

export const GEMINI_SIMPLE_HOOK_EVENTS = [
	"AfterTool",
	"PreCompress",
	"SessionStart",
] as const;
