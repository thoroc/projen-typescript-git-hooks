export const INSTRUCTIONS_CONTENT = `# aislop — AI Code Quality Gate

aislop catches the patterns AI coding tools leave behind: narrative comments,
swallowed exceptions, as-any casts, dead code, oversized functions. Score is
0–100 (higher = cleaner). Treat its findings as blocking, not advisory.

## On every edit

A PostToolUse hook runs \`aislop hook claude\` after every Edit, Write, or
MultiEdit. It returns JSON \`additionalContext\` shaped like \`AislopFeedback\`
(schema \`aislop.hook.v2\`). Act on findings the same turn.

## Severity ladder

- \`error\` — MUST fix this turn.
- \`warning\` + \`fixable: true\` — MUST fix this turn.
- \`warning\` + \`fixable: false\` — fix if trivially mechanical, otherwise surface in reply.

## Reading the feedback

\`\`\`jsonc
{
  "score": 93,          // current score (0-100)
  "baseline": 100,      // last captured baseline
  "regressed": true,    // score dropped — must fix before finishing
  "findings": [...],    // individual issues with file + line
  "suggestedActions": [ // what to run next
    { "id": "run_aislop_fix", "command": "aislop fix" }
  ]
}
\`\`\`

When \`regressed: true\`, do not end your turn until the findings are resolved.

## MCP tools

| Tool | Use when |
|------|----------|
| \`aislop_scan\` | Check code quality of the current directory or a path |
| \`aislop_fix\` | Auto-fix mechanical issues (unused imports, formatting) |
| \`aislop_why\` | Explain why a specific rule was triggered |
| \`aislop_baseline\` | Re-capture the baseline score after a clean state |

## CLI reference

\`\`\`bash
aislop scan               # score current directory
aislop scan --changes     # score only changed files
aislop fix                # auto-fix mechanical findings
aislop fix -f             # aggressive: deps, unused files
aislop agent              # repair with your coding agent
aislop hook baseline      # re-capture baseline
aislop hook status        # list installed hooks
\`\`\`

## Rules

- \`.aislop/config.yaml\` — thresholds and engine toggles. Treat as authoritative.
- \`.aislop/rules.yaml\` — project-specific architecture rules (may be absent).
- Do not disable rules to pass the scan — fix the underlying issue.
`;

export const INSTALL_BINARY =
	"command -v aislop >/dev/null 2>&1 || " +
	"(command -v mise >/dev/null 2>&1 && mise use -g npm:aislop) || " +
	"(command -v brew >/dev/null 2>&1 && brew install scanaislop/tap/aislop) || " +
	"npm install -g aislop";
