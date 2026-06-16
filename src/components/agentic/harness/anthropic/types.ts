import type { McpServer } from "../../mcp";

export interface ClaudeCodePermissions {
	readonly allow?: Array<string>;
	readonly deny?: Array<string>;
}

export interface ClaudeCodeHookEntry {
	readonly type: "command";
	readonly command: string;
	readonly timeout?: number;
}

export interface ClaudeCodeHookGroup {
	readonly matcher?: string;
	readonly hooks: Array<ClaudeCodeHookEntry>;
}

export interface ClaudeCodeOptions {
	readonly permissions?: ClaudeCodePermissions;
	readonly env?: Record<string, string>;
	readonly mcpServers?: Array<McpServer>;
	readonly hooks?: Record<string, Array<ClaudeCodeHookGroup>>;
}
