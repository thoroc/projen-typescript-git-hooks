export const INSTRUCTIONS_CONTENT = `# GitNexus — Graph-Powered Code Intelligence

GitNexus indexes your codebase into a knowledge graph and exposes it via MCP.
Use it instead of Grep/Glob/Read when exploring code, tracing impact, or
searching for symbols — it is faster and surfaces relationships file scanning
cannot.

## Start here

Read \`gitnexus://repos\` first to list indexed repositories, then
\`gitnexus://repo/{name}/context\` for codebase stats and available tools.

## Key tools

| Tool | Use when |
|------|----------|
| \`query\` | Hybrid semantic + keyword search across the codebase |
| \`context\` | 360-degree symbol view — callers, callees, process participation |
| \`impact\` | Blast-radius analysis for a symbol or file change |
| \`detect_changes\` | Map git-diff changed lines to affected processes |
| \`rename\` | Multi-file coordinated rename using graph + text search |
| \`cypher\` | Raw Cypher graph queries for complex traversals |
| \`list_repos\` | Discover all indexed repositories |
| \`group_query\` | Search execution flows across all repos in a group |

## Workflow

1. \`list_repos\` — confirm what is indexed
2. \`query({search_query: "auth flow"})\` — find entry points
3. \`context({symbol: "validateToken"})\` — understand a specific symbol
4. \`impact({symbol: "validateToken"})\` — check blast radius before changing it

## CLI reference

\`\`\`bash
gitnexus analyze        # index / re-index the current repository
gitnexus status         # check index freshness
gitnexus query "auth"   # ad-hoc search from the terminal
\`\`\`

Re-run \`gitnexus analyze\` after large refactors to keep the graph current.
`;

export const INSTALL_BINARY =
	"command -v gitnexus >/dev/null 2>&1 || " +
	"(command -v mise >/dev/null 2>&1 && GITNEXUS_SKIP_OPTIONAL_GRAMMARS=1 mise use -g npm:gitnexus) || " +
	"GITNEXUS_SKIP_OPTIONAL_GRAMMARS=1 npm install -g gitnexus";
