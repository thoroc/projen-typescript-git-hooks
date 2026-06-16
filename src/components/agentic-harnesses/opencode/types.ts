import type { McpServer } from "../mcp";

export interface OpenCodeOptions {
	readonly model?: string;
	readonly autoupdate?: boolean;
	readonly permission?: Record<string, "allow" | "ask" | "deny">;
	readonly mcpServers?: Array<McpServer>;
	readonly plugins?: Array<string>;
}
