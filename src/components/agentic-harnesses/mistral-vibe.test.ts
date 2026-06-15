import { Project } from "projen";
import { synthSnapshot } from "projen/lib/util/synth";
import { MistralVibe } from "./mistral-vibe";

describe("MistralVibe", () => {
  it("returns undefined when not present on project", () => {
    const project = new Project({ name: "test" });
    expect(MistralVibe.of(project)).toBeUndefined();
  });

  it("returns the instance when present on project", () => {
    const project = new Project({ name: "test" });
    const mv = new MistralVibe(project);
    expect(MistralVibe.of(project)).toBe(mv);
  });

  it("creates .vibe/config.toml when instantiated", () => {
    const project = new Project({ name: "test" });
    new MistralVibe(project);
    const snapshot = synthSnapshot(project);
    expect(snapshot[".vibe/config.toml"]).toBeDefined();
  });

  it("creates AGENTS.md when instantiated", () => {
    const project = new Project({ name: "test" });
    new MistralVibe(project);
    const snapshot = synthSnapshot(project);
    expect(snapshot["AGENTS.md"]).toBeDefined();
  });

  it("includes model in config when provided", () => {
    const project = new Project({ name: "test" });
    new MistralVibe(project, { model: "mistral-large-latest" });
    const snapshot = synthSnapshot(project);
    expect(snapshot[".vibe/config.toml"]).toContain("model");
  });
});
