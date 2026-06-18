import { Project } from "projen";
import { GitHub } from "projen/lib/github";
import { synthSnapshot } from "projen/lib/util/synth";
import { describe, expect, it } from "vitest";
import { WorkflowHealthMonitor } from "./workflow-health-monitor";

describe("WorkflowHealthMonitor", () => {
	describe("workflow", () => {
		it("creates a workflow-health-monitor workflow file", () => {
			const project = new Project({ name: "test-project" });
			const github = new GitHub(project);
			new WorkflowHealthMonitor(github);

			const snapshot = synthSnapshot(project);
			expect(
				snapshot[".github/workflows/workflow-health-monitor.yml"],
			).toBeDefined();
		});

		it("triggers on workflow_run completed", () => {
			const project = new Project({ name: "test-project" });
			const github = new GitHub(project);
			new WorkflowHealthMonitor(github);

			const workflow =
				synthSnapshot(project)[".github/workflows/workflow-health-monitor.yml"];
			expect(workflow).toContain("workflow_run");
			expect(workflow).toContain("- completed");
		});

		it("monitors specified workflows", () => {
			const project = new Project({ name: "test-project" });
			const github = new GitHub(project);
			new WorkflowHealthMonitor(github, { workflows: ["build", "release"] });

			const workflow =
				synthSnapshot(project)[".github/workflows/workflow-health-monitor.yml"];
			expect(workflow).toContain("- build");
			expect(workflow).toContain("- release");
		});

		it("omits workflows filter when none specified", () => {
			const project = new Project({ name: "test-project" });
			const github = new GitHub(project);
			new WorkflowHealthMonitor(github);

			const workflow =
				synthSnapshot(project)[".github/workflows/workflow-health-monitor.yml"];
			expect(workflow).not.toContain("workflows:\n");
		});

		it("filters by branch when specified", () => {
			const project = new Project({ name: "test-project" });
			const github = new GitHub(project);
			new WorkflowHealthMonitor(github, { branches: ["main"] });

			const workflow =
				synthSnapshot(project)[".github/workflows/workflow-health-monitor.yml"];
			expect(workflow).toContain("- main");
		});

		it("omits branch filter when none specified", () => {
			const project = new Project({ name: "test-project" });
			const github = new GitHub(project);
			new WorkflowHealthMonitor(github);

			const workflow =
				synthSnapshot(project)[".github/workflows/workflow-health-monitor.yml"];
			expect(workflow).not.toContain("branches:");
		});
	});

	describe("report job", () => {
		it("has issues: write and contents: read permissions", () => {
			const project = new Project({ name: "test-project" });
			const github = new GitHub(project);
			new WorkflowHealthMonitor(github);

			const workflow =
				synthSnapshot(project)[".github/workflows/workflow-health-monitor.yml"];
			expect(workflow).toContain("issues: write");
			expect(workflow).toContain("contents: read");
		});

		it("uses actions/github-script@v7", () => {
			const project = new Project({ name: "test-project" });
			const github = new GitHub(project);
			new WorkflowHealthMonitor(github);

			const workflow =
				synthSnapshot(project)[".github/workflows/workflow-health-monitor.yml"];
			expect(workflow).toContain("actions/github-script@v7");
		});

		it("applies the default ci-failure label", () => {
			const project = new Project({ name: "test-project" });
			const github = new GitHub(project);
			new WorkflowHealthMonitor(github);

			const workflow =
				synthSnapshot(project)[".github/workflows/workflow-health-monitor.yml"];
			expect(workflow).toContain("ci-failure");
		});

		it("uses a custom issue label when provided", () => {
			const project = new Project({ name: "test-project" });
			const github = new GitHub(project);
			new WorkflowHealthMonitor(github, { issueLabel: "workflow-error" });

			const workflow =
				synthSnapshot(project)[".github/workflows/workflow-health-monitor.yml"];
			expect(workflow).toContain("workflow-error");
			expect(workflow).not.toContain("ci-failure");
		});

		it("filters by failure conclusion by default", () => {
			const project = new Project({ name: "test-project" });
			const github = new GitHub(project);
			new WorkflowHealthMonitor(github);

			const workflow =
				synthSnapshot(project)[".github/workflows/workflow-health-monitor.yml"];
			expect(workflow).toContain('"failure"');
		});

		it("supports custom conclusions", () => {
			const project = new Project({ name: "test-project" });
			const github = new GitHub(project);
			new WorkflowHealthMonitor(github, {
				conclusions: ["failure", "cancelled"],
			});

			const workflow =
				synthSnapshot(project)[".github/workflows/workflow-health-monitor.yml"];
			expect(workflow).toContain('"failure"');
			expect(workflow).toContain('"cancelled"');
		});

		it("passes the github token to the script action", () => {
			const project = new Project({ name: "test-project" });
			const github = new GitHub(project);
			new WorkflowHealthMonitor(github);

			const workflow =
				synthSnapshot(project)[".github/workflows/workflow-health-monitor.yml"];
			expect(workflow).toContain("secrets.GITHUB_TOKEN");
		});
	});
});
