import { TextFile } from "projen";
import type { GitHub } from "projen/lib/github";

export class IssueTemplate extends TextFile {
  constructor(github: GitHub) {
    super(github.project, ".github/issue_template.md", {
      lines: ["# Issue", "", "Fixes #", "", "## Context", "", "## Proposed Resolution"],
    });
  }
}
