import { Project } from "projen";
import { GitHub } from "projen/lib/github";
import { synthSnapshot } from "projen/lib/util/synth";
import { describe, expect, it } from "vitest";
import { DocmdPages } from "./docmd-pages";

describe("DocmdPages", () => {
	describe("workflow", () => {
		it("creates a pages workflow file", () => {
			const project = new Project({ name: "test-project" });
			const github = new GitHub(project);
			new DocmdPages(github);

			const snapshot = synthSnapshot(project);
			expect(snapshot[".github/workflows/pages.yml"]).toBeDefined();
		});

		it("triggers on push to main by default", () => {
			const project = new Project({ name: "test-project" });
			const github = new GitHub(project);
			new DocmdPages(github);

			const workflow = synthSnapshot(project)[".github/workflows/pages.yml"];
			expect(workflow).toContain("branches:\n      - main");
		});

		it("supports a custom branch", () => {
			const project = new Project({ name: "test-project" });
			const github = new GitHub(project);
			new DocmdPages(github, { branch: "release" });

			const workflow = synthSnapshot(project)[".github/workflows/pages.yml"];
			expect(workflow).toContain("- release");
		});

		it("includes a workflow_dispatch trigger", () => {
			const project = new Project({ name: "test-project" });
			const github = new GitHub(project);
			new DocmdPages(github);

			const workflow = synthSnapshot(project)[".github/workflows/pages.yml"];
			expect(workflow).toContain("workflow_dispatch");
		});

		it("adds a per-ref concurrency group with cancel-in-progress false", () => {
			const project = new Project({ name: "test-project" });
			const github = new GitHub(project);
			new DocmdPages(github);

			const workflow = synthSnapshot(project)[".github/workflows/pages.yml"];
			expect(workflow).toContain(
				"group: ${{ github.workflow }}-${{ github.ref }}",
			);
			expect(workflow).toContain("cancel-in-progress: false");
		});
	});

	describe("build job", () => {
		it("has contents: read permission", () => {
			const project = new Project({ name: "test-project" });
			const github = new GitHub(project);
			new DocmdPages(github);

			const workflow = synthSnapshot(project)[".github/workflows/pages.yml"];
			expect(workflow).toContain("contents: read");
		});

		it("copies API.md into the docs dir before building", () => {
			const project = new Project({ name: "test-project" });
			const github = new GitHub(project);
			new DocmdPages(github);

			const workflow = synthSnapshot(project)[".github/workflows/pages.yml"];
			expect(workflow).toContain("cp API.md docs/api.md");
		});

		it("copies into a custom docsDir", () => {
			const project = new Project({ name: "test-project" });
			const github = new GitHub(project);
			new DocmdPages(github, { docsDir: "content" });

			const workflow = synthSnapshot(project)[".github/workflows/pages.yml"];
			expect(workflow).toContain("cp API.md content/api.md");
		});

		it("installs @docmd/core before building", () => {
			const project = new Project({ name: "test-project" });
			const github = new GitHub(project);
			new DocmdPages(github);

			const workflow = synthSnapshot(project)[".github/workflows/pages.yml"];
			expect(workflow).toContain("bun add @docmd/core");
		});

		it("runs bunx @docmd/core build", () => {
			const project = new Project({ name: "test-project" });
			const github = new GitHub(project);
			new DocmdPages(github);

			const workflow = synthSnapshot(project)[".github/workflows/pages.yml"];
			expect(workflow).toContain("bunx @docmd/core build");
		});

		it("uploads the site artifact from the default output dir", () => {
			const project = new Project({ name: "test-project" });
			const github = new GitHub(project);
			new DocmdPages(github);

			const workflow = synthSnapshot(project)[".github/workflows/pages.yml"];
			expect(workflow).toContain("actions/upload-pages-artifact@v3");
			expect(workflow).toContain("path: site");
		});

		it("uploads from a custom output dir", () => {
			const project = new Project({ name: "test-project" });
			const github = new GitHub(project);
			new DocmdPages(github, { outputDir: "build" });

			const workflow = synthSnapshot(project)[".github/workflows/pages.yml"];
			expect(workflow).toContain("path: build");
		});
	});

	describe("deploy job", () => {
		it("has pages: write and id-token: write permissions", () => {
			const project = new Project({ name: "test-project" });
			const github = new GitHub(project);
			new DocmdPages(github);

			const workflow = synthSnapshot(project)[".github/workflows/pages.yml"];
			expect(workflow).toContain("pages: write");
			expect(workflow).toContain("id-token: write");
		});

		it("depends on the build job", () => {
			const project = new Project({ name: "test-project" });
			const github = new GitHub(project);
			new DocmdPages(github);

			const workflow = synthSnapshot(project)[".github/workflows/pages.yml"];
			expect(workflow).toContain("needs: build");
		});

		it("targets the github-pages environment", () => {
			const project = new Project({ name: "test-project" });
			const github = new GitHub(project);
			new DocmdPages(github);

			const workflow = synthSnapshot(project)[".github/workflows/pages.yml"];
			expect(workflow).toContain("name: github-pages");
		});

		it("uses actions/deploy-pages", () => {
			const project = new Project({ name: "test-project" });
			const github = new GitHub(project);
			new DocmdPages(github);

			const workflow = synthSnapshot(project)[".github/workflows/pages.yml"];
			expect(workflow).toContain("actions/deploy-pages@v4");
		});
	});

	describe("docs/index.md", () => {
		it("creates a sample index file", () => {
			const project = new Project({ name: "test-project" });
			const github = new GitHub(project);
			new DocmdPages(github);

			const snapshot = synthSnapshot(project);
			expect(snapshot["docs/index.md"]).toBeDefined();
		});

		it("uses the project name as heading by default", () => {
			const project = new Project({ name: "test-project" });
			const github = new GitHub(project);
			new DocmdPages(github);

			expect(synthSnapshot(project)["docs/index.md"]).toContain(
				"# test-project",
			);
		});

		it("uses a custom title when provided", () => {
			const project = new Project({ name: "test-project" });
			const github = new GitHub(project);
			new DocmdPages(github, { title: "My Docs" });

			expect(synthSnapshot(project)["docs/index.md"]).toContain("# My Docs");
		});

		it("respects a custom docsDir", () => {
			const project = new Project({ name: "test-project" });
			const github = new GitHub(project);
			new DocmdPages(github, { docsDir: "documentation" });

			const snapshot = synthSnapshot(project);
			expect(snapshot["documentation/index.md"]).toBeDefined();
			expect(snapshot["docs/index.md"]).toBeUndefined();
		});
	});

	describe("docmd.config.js", () => {
		it("creates a config file", () => {
			const project = new Project({ name: "test-project" });
			const github = new GitHub(project);
			new DocmdPages(github);

			expect(synthSnapshot(project)["docmd.config.js"]).toBeDefined();
		});

		it("uses the project name as title by default", () => {
			const project = new Project({ name: "test-project" });
			const github = new GitHub(project);
			new DocmdPages(github);

			expect(synthSnapshot(project)["docmd.config.js"]).toContain(
				"title: 'test-project'",
			);
		});

		it("uses a custom title when provided", () => {
			const project = new Project({ name: "test-project" });
			const github = new GitHub(project);
			new DocmdPages(github, { title: "My Docs" });

			expect(synthSnapshot(project)["docmd.config.js"]).toContain(
				"title: 'My Docs'",
			);
		});

		it("includes the url when provided", () => {
			const project = new Project({ name: "test-project" });
			const github = new GitHub(project);
			new DocmdPages(github, {
				url: "https://thoroc.github.io/projen-typescript-git-hooks",
			});

			expect(synthSnapshot(project)["docmd.config.js"]).toContain(
				"url: 'https://thoroc.github.io/projen-typescript-git-hooks'",
			);
		});

		it("omits the url when not provided", () => {
			const project = new Project({ name: "test-project" });
			const github = new GitHub(project);
			new DocmdPages(github);

			expect(synthSnapshot(project)["docmd.config.js"]).not.toContain("url:");
		});

		it("sets src to the docsDir", () => {
			const project = new Project({ name: "test-project" });
			const github = new GitHub(project);
			new DocmdPages(github, { docsDir: "content" });

			expect(synthSnapshot(project)["docmd.config.js"]).toContain(
				"src: 'content'",
			);
		});

		it("sets out to the outputDir", () => {
			const project = new Project({ name: "test-project" });
			const github = new GitHub(project);
			new DocmdPages(github, { outputDir: "build" });

			expect(synthSnapshot(project)["docmd.config.js"]).toContain(
				"out: 'build'",
			);
		});
	});
});
