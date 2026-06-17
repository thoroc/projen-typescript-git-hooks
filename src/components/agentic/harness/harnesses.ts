import { Component, type Project } from "projen";
import { ClaudeCode } from "./anthropic/claude-code";
import type { ClaudeCodeOptions } from "./anthropic/types";
import { GeminiCli } from "./google/gemini-cli";
import type { GeminiCliOptions } from "./google/types";
import type { MistralVibeOptions } from "./mistral/types";
import { MistralVibe } from "./mistral/vibe";
import { OpenAICodex } from "./openai/codex";
import type { OpenAICodexOptions } from "./openai/types";
import { OpenCode } from "./opencode/component";
import type { OpenCodeOptions } from "./opencode/types";

export const HarnessType = {
	CLAUDE_CODE: "claude-code",
	CODEX: "codex",
	OPENCODE: "opencode",
	GEMINI: "gemini",
	VIBE: "vibe",
} as const;

export type HarnessType = (typeof HarnessType)[keyof typeof HarnessType];

export interface AgenticHarnessesOptions {
	readonly harnesses?: HarnessType[];
	readonly claudeCode?: ClaudeCodeOptions;
	readonly codex?: OpenAICodexOptions;
	readonly opencode?: OpenCodeOptions;
	readonly gemini?: GeminiCliOptions;
	readonly vibe?: MistralVibeOptions;
}

export class AgenticHarnesses extends Component {
	public static of(project: Project): AgenticHarnesses | undefined {
		const singleton = (c: Component): c is AgenticHarnesses =>
			c instanceof AgenticHarnesses;
		return project.components.find(singleton);
	}

	constructor(project: Project, options?: AgenticHarnessesOptions) {
		super(project);

		const harnesses =
			!options?.harnesses || options.harnesses.length === 0
				? [HarnessType.CLAUDE_CODE]
				: options.harnesses;

		if (harnesses.includes(HarnessType.CLAUDE_CODE)) {
			new ClaudeCode(project, options?.claudeCode);
		}
		if (harnesses.includes(HarnessType.CODEX)) {
			new OpenAICodex(project, options?.codex);
		}
		if (harnesses.includes(HarnessType.OPENCODE)) {
			new OpenCode(project, options?.opencode);
		}
		if (harnesses.includes(HarnessType.GEMINI)) {
			new GeminiCli(project, options?.gemini);
		}
		if (harnesses.includes(HarnessType.VIBE)) {
			new MistralVibe(project, options?.vibe);
		}
	}
}
