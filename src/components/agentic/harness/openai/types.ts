import type { McpServer } from "../../mcp";

export interface OpenAICodexHookEntry {
	readonly type: "command";
	readonly command: string;
}

export interface OpenAICodexHookGroup {
	readonly matcher?: string;
	readonly hooks: Array<OpenAICodexHookEntry>;
}

export const OpenAICodexApprovalPolicy = {
	/**
	 * The user must approve all edits before they are applied.
	 */
	SUGGEST: "suggest",

	/**
	 * The user must approve edits that are not auto-applied.
	 */
	AUTO_EDIT: "auto-edit",

	/**
	 * All edits are automatically applied without user approval.
	 */
	FULL_AUTO: "full-auto",
};

export type OpenAICodexApprovalPolicy =
	(typeof OpenAICodexApprovalPolicy)[keyof typeof OpenAICodexApprovalPolicy];

export const OpenAICodexSandboxMode = {
	/**
	 * The code editor is read-only and cannot modify files.
	 */
	READ_ONLY: "read-only",

	/**
	 * The code editor can modify files in the workspace, but cannot access external resources.
	 */
	WORKSPACE_WRITE: "workspace-write",

	/**
	 * The code editor has full access to the system and can modify any file or resource.
	 */
	DANGER_FULL_ACCESS: "danger-full-access",
};

export type OpenAICodexSandboxMode =
	(typeof OpenAICodexSandboxMode)[keyof typeof OpenAICodexSandboxMode];

export interface OpenAICodexOptions {
	readonly model?: string;
	readonly approvalPolicy?: OpenAICodexApprovalPolicy;
	readonly sandboxMode?: OpenAICodexSandboxMode;
	readonly mcpServers?: Array<McpServer>;
	readonly hooks?: Record<string, Array<OpenAICodexHookGroup>>;
}
