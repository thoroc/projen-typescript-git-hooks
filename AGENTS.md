# CLAUDE.md

## Instructions

@.agents/instructions/code-review-graph.md
@.agents/instructions/context-mode.md
@.agents/instructions/dotenv.md
@.agents/instructions/qmd.md
@.agents/instructions/rtk.md
@.agents/instructions/typescript-standards.md

## Project overview

## Branch

Default branch is **`main`** (not `master`). All PRs target `main`. **Never commit directly to `main`** — always work from a feature branch and merge via PR.

## Workflow

1. Create a new branch from `main` before making changes.
2. Commit all changes to that branch.
3. When done, ask the user whether to push and create a PR.
4. After the PR is merged, switch back to `main` and pull.
