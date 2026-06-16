import type { McpServer } from "../mcp";

export interface MistralVibeOptions {
	readonly model?: string;
	readonly mcpServers?: Array<McpServer>;
}
