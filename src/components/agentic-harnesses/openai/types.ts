import type { McpServer } from "../mcp";

export interface OpenAICodexHookEntry {
	readonly type: "command";
	readonly command: string;
}

export interface OpenAICodexHookGroup {
	readonly matcher?: string;
	readonly hooks: Array<OpenAICodexHookEntry>;
}

export interface OpenAICodexOptions {
	readonly model?: string;
	readonly approvalPolicy?: "suggest" | "auto-edit" | "full-auto";
	readonly sandboxMode?: "read-only" | "workspace-write" | "danger-full-access";
	readonly mcpServers?: Array<McpServer>;
	readonly hooks?: Record<string, Array<OpenAICodexHookGroup>>;
}
