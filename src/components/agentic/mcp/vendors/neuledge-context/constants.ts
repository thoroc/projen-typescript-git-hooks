export const INSTRUCTIONS_CONTENT = `# neuledge/context — Up-to-date Library Docs

The context MCP server provides current library documentation to agents.
AI training data goes stale; this server gives you the actual installed
version's API so you don't confidently suggest removed or changed APIs.

## When to use

Before writing code that uses a third-party library, check whether docs are
available via context. Prefer context docs over training-data knowledge for
any library that releases frequently (frameworks, SDKs, clients).

## Key tools

| Tool | Use when |
|------|----------|
| \`search_packages\` | Find which packages are available in this session |
| \`get_docs\` | Fetch documentation for a specific library and topic |
| \`download_package\` | Install a package's docs locally for offline access |

## Workflow

1. \`search_packages\` — check what's available
2. \`get_docs("react@18", "hooks")\` — fetch the relevant section
3. Use the returned docs to write accurate code

## CLI reference

\`\`\`bash
context list                        # list locally installed doc packages
context install npm/react           # install docs for a package
context install npm/next 15.0.4     # install a specific version
context browse react                # search registry for available versions
context query 'next@16' 'routing'   # test a doc query from the CLI
\`\`\`
`;

export const INSTALL_BINARY =
	"command -v context >/dev/null 2>&1 || " +
	"(command -v mise >/dev/null 2>&1 && mise use -g npm:@neuledge/context) || " +
	"npm install -g @neuledge/context";
