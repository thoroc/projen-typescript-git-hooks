import { GitHooksEnabledProject } from "../../../../src";
import { GitClientHook, GitHooksManagerType } from "../../../../src/components/githooks-manager";
import { Lefthook } from "./component";

const makeProject = () =>
  new GitHooksEnabledProject({
    name: "test",
    defaultReleaseBranch: "main",
    gitHooksManager: GitHooksManagerType.LEFTHOOK,
  });

describe("Lefthook", () => {
  it("returns the singleton instance via of()", () => {
    const project = makeProject();
    const instance = Lefthook.of(project);
    expect(instance).toBeInstanceOf(Lefthook);
  });

  it("returns undefined via of() when not present", () => {
    const project = new GitHooksEnabledProject({
      name: "test",
      defaultReleaseBranch: "main",
    });
    expect(Lefthook.of(project)).toBeUndefined();
  });

  it("addScript creates a new action for a hook that does not yet exist", () => {
    const project = makeProject();
    const lefthook = Lefthook.of(project)!;

    lefthook.addScript(GitClientHook.PRE_PUSH, { name: "my-script", runner: "bash" });

    const action = lefthook.config.actions.find((a) => a.actionName === GitClientHook.PRE_PUSH);
    expect(action).toBeDefined();
    expect(action?.scripts).toContainEqual({ name: "my-script", runner: "bash" });
  });

  it("addScript pushes to existing scripts when the action already has scripts", () => {
    const project = makeProject();
    const lefthook = Lefthook.of(project)!;

    lefthook.addScript(GitClientHook.PRE_PUSH, { name: "script-a", runner: "bash" });
    lefthook.addScript(GitClientHook.PRE_PUSH, { name: "script-b", runner: "node" });

    const action = lefthook.config.actions.find((a) => a.actionName === GitClientHook.PRE_PUSH);
    expect(action?.scripts?.some((s) => s.name === "script-a")).toBe(true);
    expect(action?.scripts?.some((s) => s.name === "script-b")).toBe(true);
  });
});
