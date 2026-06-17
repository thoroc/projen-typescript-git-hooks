export const INSTRUCTIONS_PATH = ".agents/instructions/rtk.md";

export const INSTRUCTIONS_CONTENT = `# RTK - Rust Token Killer

**Usage**: Token-optimized CLI proxy for shell commands.

## Rule

Always prefix shell commands with \`rtk\`.

Examples:

\`\`\`bash
rtk git status
rtk cargo test
rtk npm run build
rtk pytest -q
\`\`\`

## Meta Commands

\`\`\`bash
rtk gain            # Token savings analytics
rtk gain --history  # Recent command savings history
rtk proxy <cmd>     # Run raw command without filtering
\`\`\`

## Verification

\`\`\`bash
rtk --version
rtk gain
which rtk
\`\`\`
`;

export const INSTALL_BINARY =
	"command -v rtk >/dev/null 2>&1 || " +
	"(command -v mise >/dev/null 2>&1 && mise use rtk) || " +
	"(command -v brew >/dev/null 2>&1 && brew install rtk) || " +
	"(curl -fsSL https://raw.githubusercontent.com/rtk-ai/rtk/refs/heads/master/install.sh | sh) || " +
	"cargo install rtk";
