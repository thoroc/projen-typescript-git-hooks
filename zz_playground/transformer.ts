interface Params {
  foo?: string;
  baa?: string;
}

interface Section {
  name: string;
  params: Params;
}

const section1: Section = {
  name: "section1",
  params: { foo: "abc" },
}

const section2: Section = {
  name: "section2",
  params: { baa: "def" },
}

const sections: Array<Section> = [section1, section2];

const transformed: { [key: string]: any } = {};

for (const id in sections) {
  const section = sections[id];
  transformed[section.name] = section.params;
}

console.log(transformed);