import { synthSnapshot } from "projen/lib/util/synth";
import { GitHooksEnabledProject } from "../../../src";
import { GitHooksManagerType } from "../../../src/components/githooks-manager";
import { Renovate } from "./renovate";

const makeProject = () =>
  new GitHooksEnabledProject({
    name: "test",
    defaultReleaseBranch: "main",
    gitHooksManager: GitHooksManagerType.LEFTHOOK,
  });

describe("Renovate", () => {
  it("generates renovate.json with default config", () => {
    const project = makeProject();
    new Renovate(project);

    const snapshot = synthSnapshot(project);
    const config = snapshot["renovate.json"];

    expect(config.$schema).toBe("https://docs.renovatebot.com/renovate-schema.json");
    expect(config.extends).toEqual(["config:recommended"]);
    expect(config.labels).toEqual(["dependencies", "renovate"]);
    expect(config.automerge).toBe(true);
    expect(config.automergeStrategy).toBe("squash");
    expect(config.automergeType).toBe("pr");
  });

  it("generates default packageRules", () => {
    const project = makeProject();
    new Renovate(project);

    const snapshot = synthSnapshot(project);
    const rules = snapshot["renovate.json"].packageRules;

    expect(rules).toHaveLength(2);
    expect(rules[0].groupSlug).toBe("all-minor-patch-pin-digest");
    expect(rules[1].groupSlug).toBe("all-dev-deps");
  });

  it("allows overriding labels", () => {
    const project = makeProject();
    new Renovate(project, { labels: ["deps"] });

    const snapshot = synthSnapshot(project);
    expect(snapshot["renovate.json"].labels).toEqual(["deps"]);
  });

  it("allows disabling automerge", () => {
    const project = makeProject();
    new Renovate(project, { automerge: false });

    const snapshot = synthSnapshot(project);
    expect(snapshot["renovate.json"].automerge).toBe(false);
  });

  it("defaults minimumReleaseAge to 7 days", () => {
    const project = makeProject();
    new Renovate(project);

    const snapshot = synthSnapshot(project);
    expect(snapshot["renovate.json"].minimumReleaseAge).toBe("7 days");
  });

  it("allows overriding minimumReleaseAge", () => {
    const project = makeProject();
    new Renovate(project, { minimumReleaseAge: "3 days" });

    const snapshot = synthSnapshot(project);
    expect(snapshot["renovate.json"].minimumReleaseAge).toBe("3 days");
  });

  it("defaults rebaseWhen to auto", () => {
    const project = makeProject();
    new Renovate(project);

    const snapshot = synthSnapshot(project);
    expect(snapshot["renovate.json"].rebaseWhen).toBe("auto");
  });

  it("allows overriding rebaseWhen", () => {
    const project = makeProject();
    new Renovate(project, { rebaseWhen: "behind-base-branch" });

    const snapshot = synthSnapshot(project);
    expect(snapshot["renovate.json"].rebaseWhen).toBe("behind-base-branch");
  });

  it("allows providing custom packageRules", () => {
    const project = makeProject();
    new Renovate(project, {
      packageRules: [{ matchUpdateTypes: ["major"], automerge: false, groupName: "major deps" }],
    });

    const snapshot = synthSnapshot(project);
    const rules = snapshot["renovate.json"].packageRules;

    expect(rules).toHaveLength(1);
    expect(rules[0].groupName).toBe("major deps");
  });
});
