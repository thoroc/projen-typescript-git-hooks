import { Component, SampleFile, type Project } from "projen";

const AGENTS_MD_CONTENT = `# Agent Instructions

This file contains shared instructions for AI coding assistants.
Add your project-specific guidelines, conventions, and context here.
`;

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
    new SampleFile(this.project, AgentsMd.fileName, { contents: AGENTS_MD_CONTENT });
  }
}
