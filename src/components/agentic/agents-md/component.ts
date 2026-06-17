import * as fs from "fs";
import * as path from "path";
import { Component, type Project, SampleFile } from "projen";
import { AGENTS_MD_CONTENT } from "./constants";

export class AgentsMd extends Component {
	static readonly fileName = "AGENTS.md";
	static readonly instructionsDir = ".agents/instructions";

	public static of(project: Project): AgentsMd | undefined {
		const singleton = (c: Component): c is AgentsMd => c instanceof AgentsMd;
		return project.components.find(singleton);
	}

	public static registerInstructions(
		project: Project,
		name: string,
		content: string,
	): void {
		const agentsMd = AgentsMd.of(project) ?? new AgentsMd(project);
		const filePath = `${AgentsMd.instructionsDir}/${name}.md`;
		new SampleFile(project, filePath, { contents: content });
		agentsMd.addInstruction(filePath);
	}

	private readonly _instructions: string[];

	constructor(project: Project) {
		super(project);
		this._instructions = [];
	}

	addInstruction(filePath: string): void {
		if (!this._instructions.includes(filePath)) {
			this._instructions.push(filePath);
		}
	}

	preSynthesize(): void {
		new SampleFile(this.project, AgentsMd.fileName, {
			contents: AGENTS_MD_CONTENT,
		});
	}

	postSynthesize(): void {
		if (this._instructions.length === 0) return;

		const filePath = path.join(this.project.outdir, AgentsMd.fileName);
		if (!fs.existsSync(filePath)) return;

		let content = fs.readFileSync(filePath, "utf-8");
		let modified = false;

		if (!content.includes("## Instructions\n")) {
			content = `${content.trimEnd()}\n\n## Instructions\n`;
			modified = true;
		}

		for (const instruction of this._instructions) {
			const entry = `@${instruction}`;
			if (!content.includes(entry)) {
				content = `${content.trimEnd()}\n${entry}\n`;
				modified = true;
			}
		}

		if (modified) {
			fs.writeFileSync(filePath, content);
		}
	}
}
