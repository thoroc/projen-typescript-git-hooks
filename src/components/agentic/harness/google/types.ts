import type { McpServer } from "../../mcp";

export interface GeminiCliHookEntry {
	readonly type: "command";
	readonly command: string;
}

export interface GeminiCliHookGroup {
	readonly matcher?: string;
	readonly hooks: Array<GeminiCliHookEntry>;
}

export interface GeminiCliOptions {
	readonly theme?: string;
	readonly model?: string;
	readonly contextFileNames?: Array<string>;
	readonly mcpServers?: Array<McpServer>;
	readonly hooks?: Record<string, Array<GeminiCliHookGroup>>;
}
