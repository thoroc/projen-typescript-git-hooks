import { EditorConfigSection } from "./section";

describe("EditorConfigSection", () => {
  it("sets name and params from options", () => {
    const section = new EditorConfigSection({
      name: "*.ts",
      params: {
        indentStyle: "space",
        indentSize: 4,
        endOfLine: "lf",
        charset: "utf-8",
        insertFinalNewline: true,
      },
    });
    expect(section.name).toBe("*.ts");
    expect(section.params.indentSize).toBe(4);
    expect(section.params.indentStyle).toBe("space");
  });

  it("has a default section with expected values", () => {
    const def = EditorConfigSection.defaultEditorConfigSection;
    expect(def.name).toBe("*");
    expect(def.params.indentStyle).toBe("space");
    expect(def.params.indentSize).toBe(2);
    expect(def.params.endOfLine).toBe("lf");
    expect(def.params.insertFinalNewline).toBe(true);
  });
});
