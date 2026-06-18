import { Project } from "projen";
import { GitHub } from "projen/lib/github";
import { synthSnapshot } from "projen/lib/util/synth";
import { describe, expect, it } from "vitest";
import { IssueTemplate } from "./issue-template";

describe("IssueTemplate", () => {
	it("creates .github/issue_template.md", () => {
		const project = new Project({ name: "test" });
		const github = new GitHub(project);
		new IssueTemplate(github);

		const snapshot = synthSnapshot(project);

		expect(snapshot[".github/issue_template.md"]).toBeDefined();
	});

	it("includes expected headings in the template", () => {
		const project = new Project({ name: "test" });
		const github = new GitHub(project);
		new IssueTemplate(github);

		const snapshot = synthSnapshot(project);
		const content: string = snapshot[".github/issue_template.md"];

		expect(content).toContain("# Issue");
		expect(content).toContain("## Context");
		expect(content).toContain("## Proposed Resolution");
	});
});
