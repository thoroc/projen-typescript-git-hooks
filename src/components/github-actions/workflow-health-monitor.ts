import { Component } from "projen";
import type { GitHub } from "projen/lib/github";
import { JobPermission } from "projen/lib/github/workflows-model";

export type WorkflowConclusion =
	| "failure"
	| "cancelled"
	| "timed_out"
	| "action_required";

export interface WorkflowHealthMonitorOptions {
	/** Workflow names to monitor. When omitted, all workflows are monitored. */
	readonly workflows?: string[];
	/** Issue label applied to created issues. Defaults to "ci-failure". */
	readonly issueLabel?: string;
	/** Branch names to restrict monitoring to. When omitted, all branches are monitored. */
	readonly branches?: string[];
	/** Workflow conclusions that trigger issue creation. Defaults to ["failure"]. */
	readonly conclusions?: WorkflowConclusion[];
}

export class WorkflowHealthMonitor extends Component {
	constructor(github: GitHub, options: WorkflowHealthMonitorOptions = {}) {
		super(github.project);

		const {
			workflows,
			issueLabel = "ci-failure",
			branches,
			conclusions = ["failure"],
		} = options;

		const workflow = github.addWorkflow("workflow-health-monitor");

		workflow.on({
			workflowRun: {
				...(workflows?.length ? { workflows } : {}),
				types: ["completed"],
				...(branches?.length ? { branches } : {}),
			},
		});

		const conclusionsJson = JSON.stringify(conclusions);

		const script = [
			`const run = context.payload.workflow_run;`,
			`const allowed = ${conclusionsJson};`,
			`if (!allowed.includes(run.conclusion)) return;`,
			``,
			`const title = \`CI: \${run.name} failed on \${run.head_branch}\`;`,
			`const body = [`,
			`  '## Workflow Failure Report',`,
			`  '',`,
			`  \`**Workflow:** \${run.name}\`,`,
			`  \`**Branch:** \${run.head_branch}\`,`,
			`  \`**Conclusion:** \${run.conclusion}\`,`,
			`  \`**Run:** [\${run.html_url}](\${run.html_url})\`,`,
			`].join('\\n');`,
			``,
			`const { data: issues } = await github.rest.issues.listForRepo({`,
			`  owner: context.repo.owner,`,
			`  repo: context.repo.repo,`,
			`  state: 'open',`,
			`  labels: '${issueLabel}',`,
			`  per_page: 100,`,
			`});`,
			``,
			`if (issues.find(i => i.title === title)) return;`,
			``,
			`await github.rest.issues.create({`,
			`  owner: context.repo.owner,`,
			`  repo: context.repo.repo,`,
			`  title,`,
			`  body,`,
			`  labels: ['${issueLabel}'],`,
			`});`,
		].join("\n");

		workflow.addJob("report", {
			permissions: {
				issues: JobPermission.WRITE,
				contents: JobPermission.READ,
			},
			runsOn: ["ubuntu-latest"],
			steps: [
				{
					name: "Create issue on workflow failure",
					uses: "actions/github-script@v7",
					with: {
						"github-token": "${{ secrets.GITHUB_TOKEN }}",
						script,
					},
				},
			],
		});
	}
}
