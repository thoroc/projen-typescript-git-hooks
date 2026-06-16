import { Component, type Project, SampleFile } from "projen";
import { AGENTS_MD_CONTENT } from "./constants";

export class AgentsMd extends Component {
	static readonly fileName = "AGENTS.md";

	public static of(project: Project): AgentsMd | undefined {
		const singleton = (c: Component): c is AgentsMd => c instanceof AgentsMd;
		return project.components.find(singleton);
	}

	constructor(project: Project) {
		super(project);
	}

	preSynthesize(): void {
		new SampleFile(this.project, AgentsMd.fileName, {
			contents: AGENTS_MD_CONTENT,
		});
	}
}
