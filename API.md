# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AgenticHarnesses <a name="AgenticHarnesses" id="@thoroc/projen-typescript-git-hooks.AgenticHarnesses"></a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.AgenticHarnesses.Initializer"></a>

```typescript
import { AgenticHarnesses } from '@thoroc/projen-typescript-git-hooks'

new AgenticHarnesses(project: Project, options?: AgenticHarnessesOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AgenticHarnesses.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AgenticHarnesses.Initializer.parameter.options">options</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.AgenticHarnessesOptions">AgenticHarnessesOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.AgenticHarnesses.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Optional</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.AgenticHarnesses.Initializer.parameter.options"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.AgenticHarnessesOptions">AgenticHarnessesOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AgenticHarnesses.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AgenticHarnesses.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AgenticHarnesses.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AgenticHarnesses.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@thoroc/projen-typescript-git-hooks.AgenticHarnesses.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@thoroc/projen-typescript-git-hooks.AgenticHarnesses.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@thoroc/projen-typescript-git-hooks.AgenticHarnesses.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@thoroc/projen-typescript-git-hooks.AgenticHarnesses.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AgenticHarnesses.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AgenticHarnesses.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AgenticHarnesses.of">of</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@thoroc/projen-typescript-git-hooks.AgenticHarnesses.isConstruct"></a>

```typescript
import { AgenticHarnesses } from '@thoroc/projen-typescript-git-hooks'

AgenticHarnesses.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.AgenticHarnesses.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@thoroc/projen-typescript-git-hooks.AgenticHarnesses.isComponent"></a>

```typescript
import { AgenticHarnesses } from '@thoroc/projen-typescript-git-hooks'

AgenticHarnesses.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.AgenticHarnesses.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@thoroc/projen-typescript-git-hooks.AgenticHarnesses.of"></a>

```typescript
import { AgenticHarnesses } from '@thoroc/projen-typescript-git-hooks'

AgenticHarnesses.of(project: Project)
```

###### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.AgenticHarnesses.of.parameter.project"></a>

- *Type:* projen.Project

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AgenticHarnesses.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AgenticHarnesses.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@thoroc/projen-typescript-git-hooks.AgenticHarnesses.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.AgenticHarnesses.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### AgentsMd <a name="AgentsMd" id="@thoroc/projen-typescript-git-hooks.AgentsMd"></a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.AgentsMd.Initializer"></a>

```typescript
import { AgentsMd } from '@thoroc/projen-typescript-git-hooks'

new AgentsMd(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AgentsMd.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.AgentsMd.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AgentsMd.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AgentsMd.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AgentsMd.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AgentsMd.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AgentsMd.addInstruction">addInstruction</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@thoroc/projen-typescript-git-hooks.AgentsMd.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@thoroc/projen-typescript-git-hooks.AgentsMd.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@thoroc/projen-typescript-git-hooks.AgentsMd.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@thoroc/projen-typescript-git-hooks.AgentsMd.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addInstruction` <a name="addInstruction" id="@thoroc/projen-typescript-git-hooks.AgentsMd.addInstruction"></a>

```typescript
public addInstruction(filePath: string): void
```

###### `filePath`<sup>Required</sup> <a name="filePath" id="@thoroc/projen-typescript-git-hooks.AgentsMd.addInstruction.parameter.filePath"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AgentsMd.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AgentsMd.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AgentsMd.of">of</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AgentsMd.registerInstructions">registerInstructions</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@thoroc/projen-typescript-git-hooks.AgentsMd.isConstruct"></a>

```typescript
import { AgentsMd } from '@thoroc/projen-typescript-git-hooks'

AgentsMd.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.AgentsMd.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@thoroc/projen-typescript-git-hooks.AgentsMd.isComponent"></a>

```typescript
import { AgentsMd } from '@thoroc/projen-typescript-git-hooks'

AgentsMd.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.AgentsMd.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@thoroc/projen-typescript-git-hooks.AgentsMd.of"></a>

```typescript
import { AgentsMd } from '@thoroc/projen-typescript-git-hooks'

AgentsMd.of(project: Project)
```

###### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.AgentsMd.of.parameter.project"></a>

- *Type:* projen.Project

---

##### `registerInstructions` <a name="registerInstructions" id="@thoroc/projen-typescript-git-hooks.AgentsMd.registerInstructions"></a>

```typescript
import { AgentsMd } from '@thoroc/projen-typescript-git-hooks'

AgentsMd.registerInstructions(project: Project, name: string, content: string)
```

###### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.AgentsMd.registerInstructions.parameter.project"></a>

- *Type:* projen.Project

---

###### `name`<sup>Required</sup> <a name="name" id="@thoroc/projen-typescript-git-hooks.AgentsMd.registerInstructions.parameter.name"></a>

- *Type:* string

---

###### `content`<sup>Required</sup> <a name="content" id="@thoroc/projen-typescript-git-hooks.AgentsMd.registerInstructions.parameter.content"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AgentsMd.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AgentsMd.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@thoroc/projen-typescript-git-hooks.AgentsMd.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.AgentsMd.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AgentsMd.property.fileName">fileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AgentsMd.property.instructionsDir">instructionsDir</a></code> | <code>string</code> | *No description.* |

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="@thoroc/projen-typescript-git-hooks.AgentsMd.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

---

##### `instructionsDir`<sup>Required</sup> <a name="instructionsDir" id="@thoroc/projen-typescript-git-hooks.AgentsMd.property.instructionsDir"></a>

```typescript
public readonly instructionsDir: string;
```

- *Type:* string

---

### AislopConfig <a name="AislopConfig" id="@thoroc/projen-typescript-git-hooks.AislopConfig"></a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.AislopConfig.Initializer"></a>

```typescript
import { AislopConfig } from '@thoroc/projen-typescript-git-hooks'

new AislopConfig(project: Project, options?: AislopConfigOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopConfig.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopConfig.Initializer.parameter.options">options</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.AislopConfigOptions">AislopConfigOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.AislopConfig.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Optional</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.AislopConfig.Initializer.parameter.options"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.AislopConfigOptions">AislopConfigOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopConfig.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopConfig.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopConfig.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@thoroc/projen-typescript-git-hooks.AislopConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@thoroc/projen-typescript-git-hooks.AislopConfig.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@thoroc/projen-typescript-git-hooks.AislopConfig.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@thoroc/projen-typescript-git-hooks.AislopConfig.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopConfig.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopConfig.of">of</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@thoroc/projen-typescript-git-hooks.AislopConfig.isConstruct"></a>

```typescript
import { AislopConfig } from '@thoroc/projen-typescript-git-hooks'

AislopConfig.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.AislopConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@thoroc/projen-typescript-git-hooks.AislopConfig.isComponent"></a>

```typescript
import { AislopConfig } from '@thoroc/projen-typescript-git-hooks'

AislopConfig.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.AislopConfig.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@thoroc/projen-typescript-git-hooks.AislopConfig.of"></a>

```typescript
import { AislopConfig } from '@thoroc/projen-typescript-git-hooks'

AislopConfig.of(project: Project)
```

###### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.AislopConfig.of.parameter.project"></a>

- *Type:* projen.Project

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopConfig.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@thoroc/projen-typescript-git-hooks.AislopConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.AislopConfig.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopConfig.property.configPath">configPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopConfig.property.version">version</a></code> | <code>number</code> | *No description.* |

---

##### `configPath`<sup>Required</sup> <a name="configPath" id="@thoroc/projen-typescript-git-hooks.AislopConfig.property.configPath"></a>

```typescript
public readonly configPath: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@thoroc/projen-typescript-git-hooks.AislopConfig.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

### AislopMcpServer <a name="AislopMcpServer" id="@thoroc/projen-typescript-git-hooks.AislopMcpServer"></a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.AislopMcpServer.Initializer"></a>

```typescript
import { AislopMcpServer } from '@thoroc/projen-typescript-git-hooks'

new AislopMcpServer(project: Project, options?: AislopMcpServerOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopMcpServer.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopMcpServer.Initializer.parameter.options">options</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.AislopMcpServerOptions">AislopMcpServerOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.AislopMcpServer.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Optional</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.AislopMcpServer.Initializer.parameter.options"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.AislopMcpServerOptions">AislopMcpServerOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopMcpServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopMcpServer.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopMcpServer.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopMcpServer.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@thoroc/projen-typescript-git-hooks.AislopMcpServer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@thoroc/projen-typescript-git-hooks.AislopMcpServer.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@thoroc/projen-typescript-git-hooks.AislopMcpServer.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@thoroc/projen-typescript-git-hooks.AislopMcpServer.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopMcpServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopMcpServer.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopMcpServer.of">of</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@thoroc/projen-typescript-git-hooks.AislopMcpServer.isConstruct"></a>

```typescript
import { AislopMcpServer } from '@thoroc/projen-typescript-git-hooks'

AislopMcpServer.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.AislopMcpServer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@thoroc/projen-typescript-git-hooks.AislopMcpServer.isComponent"></a>

```typescript
import { AislopMcpServer } from '@thoroc/projen-typescript-git-hooks'

AislopMcpServer.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.AislopMcpServer.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@thoroc/projen-typescript-git-hooks.AislopMcpServer.of"></a>

```typescript
import { AislopMcpServer } from '@thoroc/projen-typescript-git-hooks'

AislopMcpServer.of(project: Project)
```

###### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.AislopMcpServer.of.parameter.project"></a>

- *Type:* projen.Project

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopMcpServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopMcpServer.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@thoroc/projen-typescript-git-hooks.AislopMcpServer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.AislopMcpServer.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopMcpServer.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@thoroc/projen-typescript-git-hooks.AislopMcpServer.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

### AutoMerge <a name="AutoMerge" id="@thoroc/projen-typescript-git-hooks.AutoMerge"></a>

Represents AutoMerge configuration.

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.AutoMerge.Initializer"></a>

```typescript
import { AutoMerge } from '@thoroc/projen-typescript-git-hooks'

new AutoMerge(github: GitHub)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AutoMerge.Initializer.parameter.github">github</a></code> | <code>projen.github.GitHub</code> | *No description.* |

---

##### `github`<sup>Required</sup> <a name="github" id="@thoroc/projen-typescript-git-hooks.AutoMerge.Initializer.parameter.github"></a>

- *Type:* projen.github.GitHub

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AutoMerge.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AutoMerge.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AutoMerge.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AutoMerge.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@thoroc/projen-typescript-git-hooks.AutoMerge.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@thoroc/projen-typescript-git-hooks.AutoMerge.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@thoroc/projen-typescript-git-hooks.AutoMerge.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@thoroc/projen-typescript-git-hooks.AutoMerge.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AutoMerge.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AutoMerge.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@thoroc/projen-typescript-git-hooks.AutoMerge.isConstruct"></a>

```typescript
import { AutoMerge } from '@thoroc/projen-typescript-git-hooks'

AutoMerge.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.AutoMerge.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@thoroc/projen-typescript-git-hooks.AutoMerge.isComponent"></a>

```typescript
import { AutoMerge } from '@thoroc/projen-typescript-git-hooks'

AutoMerge.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.AutoMerge.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AutoMerge.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AutoMerge.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@thoroc/projen-typescript-git-hooks.AutoMerge.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.AutoMerge.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### Biome <a name="Biome" id="@thoroc/projen-typescript-git-hooks.Biome"></a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.Biome.Initializer"></a>

```typescript
import { Biome } from '@thoroc/projen-typescript-git-hooks'

new Biome(project: GitHooksEnabledProject, options?: BiomeOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Biome.Initializer.parameter.project">project</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject">GitHooksEnabledProject</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Biome.Initializer.parameter.options">options</a></code> | <code>projen.javascript.BiomeOptions</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.Biome.Initializer.parameter.project"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject">GitHooksEnabledProject</a>

---

##### `options`<sup>Optional</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.Biome.Initializer.parameter.options"></a>

- *Type:* projen.javascript.BiomeOptions

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Biome.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Biome.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Biome.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Biome.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Biome.addFilePattern">addFilePattern</a></code> | Add a file pattern to biome. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Biome.addOverride">addOverride</a></code> | Add a biome override to set rules for a specific file pattern. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Biome.expandLinterRules">expandLinterRules</a></code> | Expand the linting rules applied. |

---

##### `toString` <a name="toString" id="@thoroc/projen-typescript-git-hooks.Biome.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@thoroc/projen-typescript-git-hooks.Biome.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@thoroc/projen-typescript-git-hooks.Biome.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@thoroc/projen-typescript-git-hooks.Biome.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addFilePattern` <a name="addFilePattern" id="@thoroc/projen-typescript-git-hooks.Biome.addFilePattern"></a>

```typescript
public addFilePattern(pattern: string): void
```

Add a file pattern to biome.

Use ! or !! to ignore a file pattern.

> [https://biomejs.dev/guides/configure-biome/#control-files-via-configuration](https://biomejs.dev/guides/configure-biome/#control-files-via-configuration)

###### `pattern`<sup>Required</sup> <a name="pattern" id="@thoroc/projen-typescript-git-hooks.Biome.addFilePattern.parameter.pattern"></a>

- *Type:* string

Biome glob pattern.

---

##### `addOverride` <a name="addOverride" id="@thoroc/projen-typescript-git-hooks.Biome.addOverride"></a>

```typescript
public addOverride(override: OverridePattern): void
```

Add a biome override to set rules for a specific file pattern.

> [https://biomejs.dev/reference/configuration/#overrides](https://biomejs.dev/reference/configuration/#overrides)

###### `override`<sup>Required</sup> <a name="override" id="@thoroc/projen-typescript-git-hooks.Biome.addOverride.parameter.override"></a>

- *Type:* projen.javascript.biome_config.OverridePattern

Override object.

---

##### `expandLinterRules` <a name="expandLinterRules" id="@thoroc/projen-typescript-git-hooks.Biome.expandLinterRules"></a>

```typescript
public expandLinterRules(rules: Rules): void
```

Expand the linting rules applied.

Use `undefined` to remove the rule or group.

> [https://biomejs.dev/reference/configuration/#linterrulesgroup](https://biomejs.dev/reference/configuration/#linterrulesgroup)

*Example*

```typescript
biome.expandLintingRules({
  style: undefined,
  suspicious: {
    noExplicitAny: undefined,
    noDuplicateCase: "info",
  }
})
```


###### `rules`<sup>Required</sup> <a name="rules" id="@thoroc/projen-typescript-git-hooks.Biome.expandLinterRules.parameter.rules"></a>

- *Type:* projen.javascript.biome_config.Rules

Rules to apply.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Biome.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Biome.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Biome.of">of</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@thoroc/projen-typescript-git-hooks.Biome.isConstruct"></a>

```typescript
import { Biome } from '@thoroc/projen-typescript-git-hooks'

Biome.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.Biome.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@thoroc/projen-typescript-git-hooks.Biome.isComponent"></a>

```typescript
import { Biome } from '@thoroc/projen-typescript-git-hooks'

Biome.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.Biome.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@thoroc/projen-typescript-git-hooks.Biome.of"></a>

```typescript
import { Biome } from '@thoroc/projen-typescript-git-hooks'

Biome.of(project: Project)
```

###### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.Biome.of.parameter.project"></a>

- *Type:* projen.Project

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Biome.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Biome.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Biome.property.file">file</a></code> | <code>projen.JsonFile</code> | Biome configuration file content. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Biome.property.task">task</a></code> | <code>projen.Task</code> | Biome task. |

---

##### `node`<sup>Required</sup> <a name="node" id="@thoroc/projen-typescript-git-hooks.Biome.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.Biome.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `file`<sup>Required</sup> <a name="file" id="@thoroc/projen-typescript-git-hooks.Biome.property.file"></a>

```typescript
public readonly file: JsonFile;
```

- *Type:* projen.JsonFile

Biome configuration file content.

---

##### `task`<sup>Required</sup> <a name="task" id="@thoroc/projen-typescript-git-hooks.Biome.property.task"></a>

```typescript
public readonly task: Task;
```

- *Type:* projen.Task

Biome task.

---


### ClaudeCode <a name="ClaudeCode" id="@thoroc/projen-typescript-git-hooks.ClaudeCode"></a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.ClaudeCode.Initializer"></a>

```typescript
import { ClaudeCode } from '@thoroc/projen-typescript-git-hooks'

new ClaudeCode(project: Project, options?: ClaudeCodeOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ClaudeCode.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ClaudeCode.Initializer.parameter.options">options</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.ClaudeCodeOptions">ClaudeCodeOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.ClaudeCode.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Optional</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.ClaudeCode.Initializer.parameter.options"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.ClaudeCodeOptions">ClaudeCodeOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ClaudeCode.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ClaudeCode.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ClaudeCode.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ClaudeCode.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ClaudeCode.addHook">addHook</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ClaudeCode.addMcpServer">addMcpServer</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@thoroc/projen-typescript-git-hooks.ClaudeCode.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@thoroc/projen-typescript-git-hooks.ClaudeCode.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@thoroc/projen-typescript-git-hooks.ClaudeCode.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@thoroc/projen-typescript-git-hooks.ClaudeCode.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addHook` <a name="addHook" id="@thoroc/projen-typescript-git-hooks.ClaudeCode.addHook"></a>

```typescript
public addHook(event: string, group: ClaudeCodeHookGroup): void
```

###### `event`<sup>Required</sup> <a name="event" id="@thoroc/projen-typescript-git-hooks.ClaudeCode.addHook.parameter.event"></a>

- *Type:* string

---

###### `group`<sup>Required</sup> <a name="group" id="@thoroc/projen-typescript-git-hooks.ClaudeCode.addHook.parameter.group"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.ClaudeCodeHookGroup">ClaudeCodeHookGroup</a>

---

##### `addMcpServer` <a name="addMcpServer" id="@thoroc/projen-typescript-git-hooks.ClaudeCode.addMcpServer"></a>

```typescript
public addMcpServer(server: McpServer): void
```

###### `server`<sup>Required</sup> <a name="server" id="@thoroc/projen-typescript-git-hooks.ClaudeCode.addMcpServer.parameter.server"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.McpServer">McpServer</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ClaudeCode.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ClaudeCode.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ClaudeCode.of">of</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@thoroc/projen-typescript-git-hooks.ClaudeCode.isConstruct"></a>

```typescript
import { ClaudeCode } from '@thoroc/projen-typescript-git-hooks'

ClaudeCode.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.ClaudeCode.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@thoroc/projen-typescript-git-hooks.ClaudeCode.isComponent"></a>

```typescript
import { ClaudeCode } from '@thoroc/projen-typescript-git-hooks'

ClaudeCode.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.ClaudeCode.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@thoroc/projen-typescript-git-hooks.ClaudeCode.of"></a>

```typescript
import { ClaudeCode } from '@thoroc/projen-typescript-git-hooks'

ClaudeCode.of(project: Project)
```

###### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.ClaudeCode.of.parameter.project"></a>

- *Type:* projen.Project

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ClaudeCode.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ClaudeCode.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ClaudeCode.property.options">options</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.ClaudeCodeOptions">ClaudeCodeOptions</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@thoroc/projen-typescript-git-hooks.ClaudeCode.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.ClaudeCode.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `options`<sup>Optional</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.ClaudeCode.property.options"></a>

```typescript
public readonly options: ClaudeCodeOptions;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.ClaudeCodeOptions">ClaudeCodeOptions</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ClaudeCode.property.contextFile">contextFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ClaudeCode.property.settingsPath">settingsPath</a></code> | <code>string</code> | *No description.* |

---

##### `contextFile`<sup>Required</sup> <a name="contextFile" id="@thoroc/projen-typescript-git-hooks.ClaudeCode.property.contextFile"></a>

```typescript
public readonly contextFile: string;
```

- *Type:* string

---

##### `settingsPath`<sup>Required</sup> <a name="settingsPath" id="@thoroc/projen-typescript-git-hooks.ClaudeCode.property.settingsPath"></a>

```typescript
public readonly settingsPath: string;
```

- *Type:* string

---

### CloseStaleIssue <a name="CloseStaleIssue" id="@thoroc/projen-typescript-git-hooks.CloseStaleIssue"></a>

Represents CloseStaleIssue configuration.

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.CloseStaleIssue.Initializer"></a>

```typescript
import { CloseStaleIssue } from '@thoroc/projen-typescript-git-hooks'

new CloseStaleIssue(github: GitHub)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CloseStaleIssue.Initializer.parameter.github">github</a></code> | <code>projen.github.GitHub</code> | *No description.* |

---

##### `github`<sup>Required</sup> <a name="github" id="@thoroc/projen-typescript-git-hooks.CloseStaleIssue.Initializer.parameter.github"></a>

- *Type:* projen.github.GitHub

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CloseStaleIssue.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CloseStaleIssue.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CloseStaleIssue.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CloseStaleIssue.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@thoroc/projen-typescript-git-hooks.CloseStaleIssue.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@thoroc/projen-typescript-git-hooks.CloseStaleIssue.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@thoroc/projen-typescript-git-hooks.CloseStaleIssue.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@thoroc/projen-typescript-git-hooks.CloseStaleIssue.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CloseStaleIssue.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CloseStaleIssue.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@thoroc/projen-typescript-git-hooks.CloseStaleIssue.isConstruct"></a>

```typescript
import { CloseStaleIssue } from '@thoroc/projen-typescript-git-hooks'

CloseStaleIssue.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.CloseStaleIssue.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@thoroc/projen-typescript-git-hooks.CloseStaleIssue.isComponent"></a>

```typescript
import { CloseStaleIssue } from '@thoroc/projen-typescript-git-hooks'

CloseStaleIssue.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.CloseStaleIssue.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CloseStaleIssue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CloseStaleIssue.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@thoroc/projen-typescript-git-hooks.CloseStaleIssue.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.CloseStaleIssue.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### CodeOfConduct <a name="CodeOfConduct" id="@thoroc/projen-typescript-git-hooks.CodeOfConduct"></a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.CodeOfConduct.Initializer"></a>

```typescript
import { CodeOfConduct } from '@thoroc/projen-typescript-git-hooks'

new CodeOfConduct(project: Project, options?: CodeOfConductOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CodeOfConduct.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CodeOfConduct.Initializer.parameter.options">options</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.CodeOfConductOptions">CodeOfConductOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.CodeOfConduct.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Optional</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.CodeOfConduct.Initializer.parameter.options"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.CodeOfConductOptions">CodeOfConductOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CodeOfConduct.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CodeOfConduct.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CodeOfConduct.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CodeOfConduct.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@thoroc/projen-typescript-git-hooks.CodeOfConduct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@thoroc/projen-typescript-git-hooks.CodeOfConduct.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@thoroc/projen-typescript-git-hooks.CodeOfConduct.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@thoroc/projen-typescript-git-hooks.CodeOfConduct.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CodeOfConduct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CodeOfConduct.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@thoroc/projen-typescript-git-hooks.CodeOfConduct.isConstruct"></a>

```typescript
import { CodeOfConduct } from '@thoroc/projen-typescript-git-hooks'

CodeOfConduct.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.CodeOfConduct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@thoroc/projen-typescript-git-hooks.CodeOfConduct.isComponent"></a>

```typescript
import { CodeOfConduct } from '@thoroc/projen-typescript-git-hooks'

CodeOfConduct.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.CodeOfConduct.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CodeOfConduct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CodeOfConduct.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CodeOfConduct.property.author">author</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CodeOfConduct.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@thoroc/projen-typescript-git-hooks.CodeOfConduct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.CodeOfConduct.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `author`<sup>Required</sup> <a name="author" id="@thoroc/projen-typescript-git-hooks.CodeOfConduct.property.author"></a>

```typescript
public readonly author: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@thoroc/projen-typescript-git-hooks.CodeOfConduct.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---


### CodeReviewGraphMcpServer <a name="CodeReviewGraphMcpServer" id="@thoroc/projen-typescript-git-hooks.CodeReviewGraphMcpServer"></a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.CodeReviewGraphMcpServer.Initializer"></a>

```typescript
import { CodeReviewGraphMcpServer } from '@thoroc/projen-typescript-git-hooks'

new CodeReviewGraphMcpServer(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CodeReviewGraphMcpServer.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.CodeReviewGraphMcpServer.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CodeReviewGraphMcpServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CodeReviewGraphMcpServer.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CodeReviewGraphMcpServer.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CodeReviewGraphMcpServer.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@thoroc/projen-typescript-git-hooks.CodeReviewGraphMcpServer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@thoroc/projen-typescript-git-hooks.CodeReviewGraphMcpServer.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@thoroc/projen-typescript-git-hooks.CodeReviewGraphMcpServer.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@thoroc/projen-typescript-git-hooks.CodeReviewGraphMcpServer.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CodeReviewGraphMcpServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CodeReviewGraphMcpServer.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CodeReviewGraphMcpServer.of">of</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@thoroc/projen-typescript-git-hooks.CodeReviewGraphMcpServer.isConstruct"></a>

```typescript
import { CodeReviewGraphMcpServer } from '@thoroc/projen-typescript-git-hooks'

CodeReviewGraphMcpServer.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.CodeReviewGraphMcpServer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@thoroc/projen-typescript-git-hooks.CodeReviewGraphMcpServer.isComponent"></a>

```typescript
import { CodeReviewGraphMcpServer } from '@thoroc/projen-typescript-git-hooks'

CodeReviewGraphMcpServer.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.CodeReviewGraphMcpServer.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@thoroc/projen-typescript-git-hooks.CodeReviewGraphMcpServer.of"></a>

```typescript
import { CodeReviewGraphMcpServer } from '@thoroc/projen-typescript-git-hooks'

CodeReviewGraphMcpServer.of(project: Project)
```

###### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.CodeReviewGraphMcpServer.of.parameter.project"></a>

- *Type:* projen.Project

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CodeReviewGraphMcpServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CodeReviewGraphMcpServer.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@thoroc/projen-typescript-git-hooks.CodeReviewGraphMcpServer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.CodeReviewGraphMcpServer.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CodeReviewGraphMcpServer.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@thoroc/projen-typescript-git-hooks.CodeReviewGraphMcpServer.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

### Commitizen <a name="Commitizen" id="@thoroc/projen-typescript-git-hooks.Commitizen"></a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.Commitizen.Initializer"></a>

```typescript
import { Commitizen } from '@thoroc/projen-typescript-git-hooks'

new Commitizen(project: GitHooksEnabledProject, options?: CommitizenOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Commitizen.Initializer.parameter.project">project</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject">GitHooksEnabledProject</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Commitizen.Initializer.parameter.options">options</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.CommitizenOptions">CommitizenOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.Commitizen.Initializer.parameter.project"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject">GitHooksEnabledProject</a>

---

##### `options`<sup>Optional</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.Commitizen.Initializer.parameter.options"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.CommitizenOptions">CommitizenOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Commitizen.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Commitizen.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Commitizen.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Commitizen.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@thoroc/projen-typescript-git-hooks.Commitizen.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@thoroc/projen-typescript-git-hooks.Commitizen.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@thoroc/projen-typescript-git-hooks.Commitizen.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@thoroc/projen-typescript-git-hooks.Commitizen.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Commitizen.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Commitizen.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Commitizen.of">of</a></code> | Returns the singletone component of a project or undefined if there is none. |

---

##### `isConstruct` <a name="isConstruct" id="@thoroc/projen-typescript-git-hooks.Commitizen.isConstruct"></a>

```typescript
import { Commitizen } from '@thoroc/projen-typescript-git-hooks'

Commitizen.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.Commitizen.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@thoroc/projen-typescript-git-hooks.Commitizen.isComponent"></a>

```typescript
import { Commitizen } from '@thoroc/projen-typescript-git-hooks'

Commitizen.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.Commitizen.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@thoroc/projen-typescript-git-hooks.Commitizen.of"></a>

```typescript
import { Commitizen } from '@thoroc/projen-typescript-git-hooks'

Commitizen.of(project: GitHooksEnabledProject)
```

Returns the singletone component of a project or undefined if there is none.

###### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.Commitizen.of.parameter.project"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject">GitHooksEnabledProject</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Commitizen.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Commitizen.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Commitizen.property.config">config</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.CommitizenConfig">CommitizenConfig</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Commitizen.property.options">options</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.CommitizenOptions">CommitizenOptions</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@thoroc/projen-typescript-git-hooks.Commitizen.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.Commitizen.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `config`<sup>Required</sup> <a name="config" id="@thoroc/projen-typescript-git-hooks.Commitizen.property.config"></a>

```typescript
public readonly config: CommitizenConfig;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.CommitizenConfig">CommitizenConfig</a>

---

##### `options`<sup>Optional</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.Commitizen.property.options"></a>

```typescript
public readonly options: CommitizenOptions;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.CommitizenOptions">CommitizenOptions</a>

---


### ContextModeMcpServer <a name="ContextModeMcpServer" id="@thoroc/projen-typescript-git-hooks.ContextModeMcpServer"></a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.ContextModeMcpServer.Initializer"></a>

```typescript
import { ContextModeMcpServer } from '@thoroc/projen-typescript-git-hooks'

new ContextModeMcpServer(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ContextModeMcpServer.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.ContextModeMcpServer.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ContextModeMcpServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ContextModeMcpServer.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ContextModeMcpServer.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ContextModeMcpServer.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@thoroc/projen-typescript-git-hooks.ContextModeMcpServer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@thoroc/projen-typescript-git-hooks.ContextModeMcpServer.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@thoroc/projen-typescript-git-hooks.ContextModeMcpServer.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@thoroc/projen-typescript-git-hooks.ContextModeMcpServer.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ContextModeMcpServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ContextModeMcpServer.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ContextModeMcpServer.of">of</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@thoroc/projen-typescript-git-hooks.ContextModeMcpServer.isConstruct"></a>

```typescript
import { ContextModeMcpServer } from '@thoroc/projen-typescript-git-hooks'

ContextModeMcpServer.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.ContextModeMcpServer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@thoroc/projen-typescript-git-hooks.ContextModeMcpServer.isComponent"></a>

```typescript
import { ContextModeMcpServer } from '@thoroc/projen-typescript-git-hooks'

ContextModeMcpServer.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.ContextModeMcpServer.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@thoroc/projen-typescript-git-hooks.ContextModeMcpServer.of"></a>

```typescript
import { ContextModeMcpServer } from '@thoroc/projen-typescript-git-hooks'

ContextModeMcpServer.of(project: Project)
```

###### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.ContextModeMcpServer.of.parameter.project"></a>

- *Type:* projen.Project

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ContextModeMcpServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ContextModeMcpServer.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@thoroc/projen-typescript-git-hooks.ContextModeMcpServer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.ContextModeMcpServer.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ContextModeMcpServer.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@thoroc/projen-typescript-git-hooks.ContextModeMcpServer.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

### EditorConfig <a name="EditorConfig" id="@thoroc/projen-typescript-git-hooks.EditorConfig"></a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.EditorConfig.Initializer"></a>

```typescript
import { EditorConfig } from '@thoroc/projen-typescript-git-hooks'

new EditorConfig(project: GitHooksEnabledProject, options?: EditorConfigOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfig.Initializer.parameter.project">project</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject">GitHooksEnabledProject</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfig.Initializer.parameter.options">options</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfigOptions">EditorConfigOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.EditorConfig.Initializer.parameter.project"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject">GitHooksEnabledProject</a>

---

##### `options`<sup>Optional</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.EditorConfig.Initializer.parameter.options"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.EditorConfigOptions">EditorConfigOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfig.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfig.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfig.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@thoroc/projen-typescript-git-hooks.EditorConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@thoroc/projen-typescript-git-hooks.EditorConfig.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@thoroc/projen-typescript-git-hooks.EditorConfig.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@thoroc/projen-typescript-git-hooks.EditorConfig.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfig.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@thoroc/projen-typescript-git-hooks.EditorConfig.isConstruct"></a>

```typescript
import { EditorConfig } from '@thoroc/projen-typescript-git-hooks'

EditorConfig.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.EditorConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@thoroc/projen-typescript-git-hooks.EditorConfig.isComponent"></a>

```typescript
import { EditorConfig } from '@thoroc/projen-typescript-git-hooks'

EditorConfig.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.EditorConfig.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfig.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfig.property.options">options</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfigOptions">EditorConfigOptions</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@thoroc/projen-typescript-git-hooks.EditorConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.EditorConfig.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `options`<sup>Optional</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.EditorConfig.property.options"></a>

```typescript
public readonly options: EditorConfigOptions;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.EditorConfigOptions">EditorConfigOptions</a>

---


### Eslint <a name="Eslint" id="@thoroc/projen-typescript-git-hooks.Eslint"></a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.Eslint.Initializer"></a>

```typescript
import { Eslint } from '@thoroc/projen-typescript-git-hooks'

new Eslint(project: GitHooksEnabledProject, options?: EslintOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Eslint.Initializer.parameter.project">project</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject">GitHooksEnabledProject</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Eslint.Initializer.parameter.options">options</a></code> | <code>projen.javascript.EslintOptions</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.Eslint.Initializer.parameter.project"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject">GitHooksEnabledProject</a>

---

##### `options`<sup>Optional</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.Eslint.Initializer.parameter.options"></a>

- *Type:* projen.javascript.EslintOptions

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Eslint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Eslint.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Eslint.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Eslint.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Eslint.addExtends">addExtends</a></code> | Adds an `extends` item to the eslint configuration. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Eslint.addIgnorePattern">addIgnorePattern</a></code> | Do not lint these files. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Eslint.addLintPattern">addLintPattern</a></code> | Add a file, glob pattern or directory with source files to lint (e.g. [ "src" ]). |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Eslint.addOverride">addOverride</a></code> | Add an eslint override. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Eslint.addPlugins">addPlugins</a></code> | Adds an eslint plugin. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Eslint.addRules">addRules</a></code> | Add an eslint rule. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Eslint.allowDevDeps">allowDevDeps</a></code> | Add a glob file pattern which allows importing dev dependencies. |

---

##### `toString` <a name="toString" id="@thoroc/projen-typescript-git-hooks.Eslint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@thoroc/projen-typescript-git-hooks.Eslint.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@thoroc/projen-typescript-git-hooks.Eslint.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@thoroc/projen-typescript-git-hooks.Eslint.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addExtends` <a name="addExtends" id="@thoroc/projen-typescript-git-hooks.Eslint.addExtends"></a>

```typescript
public addExtends(extendList: ...string[]): void
```

Adds an `extends` item to the eslint configuration.

###### `extendList`<sup>Required</sup> <a name="extendList" id="@thoroc/projen-typescript-git-hooks.Eslint.addExtends.parameter.extendList"></a>

- *Type:* ...string[]

The list of "extends" to add.

---

##### `addIgnorePattern` <a name="addIgnorePattern" id="@thoroc/projen-typescript-git-hooks.Eslint.addIgnorePattern"></a>

```typescript
public addIgnorePattern(pattern: string): void
```

Do not lint these files.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@thoroc/projen-typescript-git-hooks.Eslint.addIgnorePattern.parameter.pattern"></a>

- *Type:* string

---

##### `addLintPattern` <a name="addLintPattern" id="@thoroc/projen-typescript-git-hooks.Eslint.addLintPattern"></a>

```typescript
public addLintPattern(pattern: string): void
```

Add a file, glob pattern or directory with source files to lint (e.g. [ "src" ]).

###### `pattern`<sup>Required</sup> <a name="pattern" id="@thoroc/projen-typescript-git-hooks.Eslint.addLintPattern.parameter.pattern"></a>

- *Type:* string

---

##### `addOverride` <a name="addOverride" id="@thoroc/projen-typescript-git-hooks.Eslint.addOverride"></a>

```typescript
public addOverride(override: EslintOverride): void
```

Add an eslint override.

###### `override`<sup>Required</sup> <a name="override" id="@thoroc/projen-typescript-git-hooks.Eslint.addOverride.parameter.override"></a>

- *Type:* projen.javascript.EslintOverride

---

##### `addPlugins` <a name="addPlugins" id="@thoroc/projen-typescript-git-hooks.Eslint.addPlugins"></a>

```typescript
public addPlugins(plugins: ...string[]): void
```

Adds an eslint plugin.

###### `plugins`<sup>Required</sup> <a name="plugins" id="@thoroc/projen-typescript-git-hooks.Eslint.addPlugins.parameter.plugins"></a>

- *Type:* ...string[]

The names of plugins to add.

---

##### `addRules` <a name="addRules" id="@thoroc/projen-typescript-git-hooks.Eslint.addRules"></a>

```typescript
public addRules(rules: {[ key: string ]: any}): void
```

Add an eslint rule.

###### `rules`<sup>Required</sup> <a name="rules" id="@thoroc/projen-typescript-git-hooks.Eslint.addRules.parameter.rules"></a>

- *Type:* {[ key: string ]: any}

---

##### `allowDevDeps` <a name="allowDevDeps" id="@thoroc/projen-typescript-git-hooks.Eslint.allowDevDeps"></a>

```typescript
public allowDevDeps(pattern: string): void
```

Add a glob file pattern which allows importing dev dependencies.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@thoroc/projen-typescript-git-hooks.Eslint.allowDevDeps.parameter.pattern"></a>

- *Type:* string

glob pattern.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Eslint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Eslint.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Eslint.of">of</a></code> | Returns the singletone component of a project or undefined if there is none. |

---

##### `isConstruct` <a name="isConstruct" id="@thoroc/projen-typescript-git-hooks.Eslint.isConstruct"></a>

```typescript
import { Eslint } from '@thoroc/projen-typescript-git-hooks'

Eslint.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.Eslint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@thoroc/projen-typescript-git-hooks.Eslint.isComponent"></a>

```typescript
import { Eslint } from '@thoroc/projen-typescript-git-hooks'

Eslint.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.Eslint.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@thoroc/projen-typescript-git-hooks.Eslint.of"></a>

```typescript
import { Eslint } from '@thoroc/projen-typescript-git-hooks'

Eslint.of(project: Project)
```

Returns the singletone component of a project or undefined if there is none.

###### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.Eslint.of.parameter.project"></a>

- *Type:* projen.Project

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Eslint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Eslint.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Eslint.property.config">config</a></code> | <code>any</code> | Direct access to the eslint configuration (escape hatch). |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Eslint.property.eslintTask">eslintTask</a></code> | <code>projen.Task</code> | eslint task. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Eslint.property.file">file</a></code> | <code>projen.ObjectFile</code> | The underlying config file. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Eslint.property.ignorePatterns">ignorePatterns</a></code> | <code>string[]</code> | File patterns that should not be linted. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Eslint.property.lintPatterns">lintPatterns</a></code> | <code>string[]</code> | Returns an immutable copy of the lintPatterns being used by this eslint configuration. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Eslint.property.overrides">overrides</a></code> | <code>projen.javascript.EslintOverride[]</code> | eslint overrides. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Eslint.property.rules">rules</a></code> | <code>{[ key: string ]: any}</code> | eslint rules. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Eslint.property.defaultEslintRules">defaultEslintRules</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Eslint.property.defaultOptions">defaultOptions</a></code> | <code>projen.javascript.EslintOptions</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@thoroc/projen-typescript-git-hooks.Eslint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.Eslint.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `config`<sup>Required</sup> <a name="config" id="@thoroc/projen-typescript-git-hooks.Eslint.property.config"></a>

```typescript
public readonly config: any;
```

- *Type:* any

Direct access to the eslint configuration (escape hatch).

---

##### `eslintTask`<sup>Required</sup> <a name="eslintTask" id="@thoroc/projen-typescript-git-hooks.Eslint.property.eslintTask"></a>

```typescript
public readonly eslintTask: Task;
```

- *Type:* projen.Task

eslint task.

---

##### `file`<sup>Required</sup> <a name="file" id="@thoroc/projen-typescript-git-hooks.Eslint.property.file"></a>

```typescript
public readonly file: ObjectFile;
```

- *Type:* projen.ObjectFile

The underlying config file.

---

##### `ignorePatterns`<sup>Required</sup> <a name="ignorePatterns" id="@thoroc/projen-typescript-git-hooks.Eslint.property.ignorePatterns"></a>

```typescript
public readonly ignorePatterns: string[];
```

- *Type:* string[]

File patterns that should not be linted.

---

##### `lintPatterns`<sup>Required</sup> <a name="lintPatterns" id="@thoroc/projen-typescript-git-hooks.Eslint.property.lintPatterns"></a>

```typescript
public readonly lintPatterns: string[];
```

- *Type:* string[]

Returns an immutable copy of the lintPatterns being used by this eslint configuration.

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@thoroc/projen-typescript-git-hooks.Eslint.property.overrides"></a>

```typescript
public readonly overrides: EslintOverride[];
```

- *Type:* projen.javascript.EslintOverride[]

eslint overrides.

---

##### `rules`<sup>Required</sup> <a name="rules" id="@thoroc/projen-typescript-git-hooks.Eslint.property.rules"></a>

```typescript
public readonly rules: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

eslint rules.

---

##### `defaultEslintRules`<sup>Required</sup> <a name="defaultEslintRules" id="@thoroc/projen-typescript-git-hooks.Eslint.property.defaultEslintRules"></a>

```typescript
public readonly defaultEslintRules: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `defaultOptions`<sup>Required</sup> <a name="defaultOptions" id="@thoroc/projen-typescript-git-hooks.Eslint.property.defaultOptions"></a>

```typescript
public readonly defaultOptions: EslintOptions;
```

- *Type:* projen.javascript.EslintOptions

---


### GeminiCli <a name="GeminiCli" id="@thoroc/projen-typescript-git-hooks.GeminiCli"></a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.GeminiCli.Initializer"></a>

```typescript
import { GeminiCli } from '@thoroc/projen-typescript-git-hooks'

new GeminiCli(project: Project, options?: GeminiCliOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GeminiCli.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GeminiCli.Initializer.parameter.options">options</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.GeminiCliOptions">GeminiCliOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.GeminiCli.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Optional</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.GeminiCli.Initializer.parameter.options"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.GeminiCliOptions">GeminiCliOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GeminiCli.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GeminiCli.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GeminiCli.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GeminiCli.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GeminiCli.addHook">addHook</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GeminiCli.addMcpServer">addMcpServer</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@thoroc/projen-typescript-git-hooks.GeminiCli.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@thoroc/projen-typescript-git-hooks.GeminiCli.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@thoroc/projen-typescript-git-hooks.GeminiCli.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@thoroc/projen-typescript-git-hooks.GeminiCli.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addHook` <a name="addHook" id="@thoroc/projen-typescript-git-hooks.GeminiCli.addHook"></a>

```typescript
public addHook(event: string, group: GeminiCliHookGroup): void
```

###### `event`<sup>Required</sup> <a name="event" id="@thoroc/projen-typescript-git-hooks.GeminiCli.addHook.parameter.event"></a>

- *Type:* string

---

###### `group`<sup>Required</sup> <a name="group" id="@thoroc/projen-typescript-git-hooks.GeminiCli.addHook.parameter.group"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.GeminiCliHookGroup">GeminiCliHookGroup</a>

---

##### `addMcpServer` <a name="addMcpServer" id="@thoroc/projen-typescript-git-hooks.GeminiCli.addMcpServer"></a>

```typescript
public addMcpServer(server: McpServer): void
```

###### `server`<sup>Required</sup> <a name="server" id="@thoroc/projen-typescript-git-hooks.GeminiCli.addMcpServer.parameter.server"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.McpServer">McpServer</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GeminiCli.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GeminiCli.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GeminiCli.of">of</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@thoroc/projen-typescript-git-hooks.GeminiCli.isConstruct"></a>

```typescript
import { GeminiCli } from '@thoroc/projen-typescript-git-hooks'

GeminiCli.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.GeminiCli.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@thoroc/projen-typescript-git-hooks.GeminiCli.isComponent"></a>

```typescript
import { GeminiCli } from '@thoroc/projen-typescript-git-hooks'

GeminiCli.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.GeminiCli.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@thoroc/projen-typescript-git-hooks.GeminiCli.of"></a>

```typescript
import { GeminiCli } from '@thoroc/projen-typescript-git-hooks'

GeminiCli.of(project: Project)
```

###### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.GeminiCli.of.parameter.project"></a>

- *Type:* projen.Project

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GeminiCli.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GeminiCli.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GeminiCli.property.options">options</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.GeminiCliOptions">GeminiCliOptions</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@thoroc/projen-typescript-git-hooks.GeminiCli.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.GeminiCli.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `options`<sup>Optional</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.GeminiCli.property.options"></a>

```typescript
public readonly options: GeminiCliOptions;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.GeminiCliOptions">GeminiCliOptions</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GeminiCli.property.contextFile">contextFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GeminiCli.property.settingsPath">settingsPath</a></code> | <code>string</code> | *No description.* |

---

##### `contextFile`<sup>Required</sup> <a name="contextFile" id="@thoroc/projen-typescript-git-hooks.GeminiCli.property.contextFile"></a>

```typescript
public readonly contextFile: string;
```

- *Type:* string

---

##### `settingsPath`<sup>Required</sup> <a name="settingsPath" id="@thoroc/projen-typescript-git-hooks.GeminiCli.property.settingsPath"></a>

```typescript
public readonly settingsPath: string;
```

- *Type:* string

---

### GitHooksEnabledProject <a name="GitHooksEnabledProject" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject"></a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.Initializer"></a>

```typescript
import { GitHooksEnabledProject } from '@thoroc/projen-typescript-git-hooks'

new GitHooksEnabledProject(options: GitHooksEnabledProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.Initializer.parameter.options">options</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions">GitHooksEnabledProjectOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.Initializer.parameter.options"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions">GitHooksEnabledProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `toString` <a name="toString" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: ...string[]): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addBundledDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addCompileCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### `addDeps` <a name="addDeps" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addDeps"></a>

```typescript
public addDeps(deps: ...string[]): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addDevDeps"></a>

```typescript
public addDevDeps(deps: ...string[]): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addDevDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addKeywords"></a>

```typescript
public addKeywords(keywords: ...string[]): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addKeywords.parameter.keywords"></a>

- *Type:* ...string[]

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: ...string[]): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addPeerDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addTestCommand"></a>

```typescript
public addTestCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addTestCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### ~~`hasScript`~~ <a name="hasScript" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.isConstruct"></a>

```typescript
import { GitHooksEnabledProject } from '@thoroc/projen-typescript-git-hooks'

GitHooksEnabledProject.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.isProject"></a>

```typescript
import { GitHooksEnabledProject } from '@thoroc/projen-typescript-git-hooks'

GitHooksEnabledProject.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.of"></a>

```typescript
import { GitHooksEnabledProject } from '@thoroc/projen-typescript-git-hooks'

GitHooksEnabledProject.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.biome">biome</a></code> | <code>projen.javascript.Biome</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version supported by this package. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.defaultTsConfig">defaultTsConfig</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.debug">debug</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.editorConfig">editorConfig</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfig">EditorConfig</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.gitHooksManager">gitHooksManager</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.Husky">Husky</a> \| <a href="#@thoroc/projen-typescript-git-hooks.Lefthook">Lefthook</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.vitest">vitest</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.Vitest">Vitest</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `biome`<sup>Optional</sup> <a name="biome" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.biome"></a>

```typescript
public readonly biome: Biome;
```

- *Type:* projen.javascript.Biome

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version supported by this package.

The value indicates the package is incompatible with newer versions.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

The minimum node version required by this package to function.

This value indicates the package is incompatible with older versions.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `defaultTsConfig`<sup>Required</sup> <a name="defaultTsConfig" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.defaultTsConfig"></a>

```typescript
public readonly defaultTsConfig: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions

---

##### `debug`<sup>Optional</sup> <a name="debug" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.debug"></a>

```typescript
public readonly debug: boolean;
```

- *Type:* boolean

---

##### `editorConfig`<sup>Optional</sup> <a name="editorConfig" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.editorConfig"></a>

```typescript
public readonly editorConfig: EditorConfig;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.EditorConfig">EditorConfig</a>

---

##### `gitHooksManager`<sup>Optional</sup> <a name="gitHooksManager" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.gitHooksManager"></a>

```typescript
public readonly gitHooksManager: Husky | Lefthook;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.Husky">Husky</a> | <a href="#@thoroc/projen-typescript-git-hooks.Lefthook">Lefthook</a>

---

##### `vitest`<sup>Optional</sup> <a name="vitest" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.vitest"></a>

```typescript
public readonly vitest: Vitest;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.Vitest">Vitest</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

### GitHooksManager <a name="GitHooksManager" id="@thoroc/projen-typescript-git-hooks.GitHooksManager"></a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.GitHooksManager.Initializer"></a>

```typescript
import { GitHooksManager } from '@thoroc/projen-typescript-git-hooks'

new GitHooksManager(project: GitHooksEnabledProject)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksManager.Initializer.parameter.project">project</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject">GitHooksEnabledProject</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.GitHooksManager.Initializer.parameter.project"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject">GitHooksEnabledProject</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksManager.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksManager.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksManager.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksManager.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@thoroc/projen-typescript-git-hooks.GitHooksManager.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@thoroc/projen-typescript-git-hooks.GitHooksManager.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@thoroc/projen-typescript-git-hooks.GitHooksManager.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@thoroc/projen-typescript-git-hooks.GitHooksManager.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksManager.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksManager.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@thoroc/projen-typescript-git-hooks.GitHooksManager.isConstruct"></a>

```typescript
import { GitHooksManager } from '@thoroc/projen-typescript-git-hooks'

GitHooksManager.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.GitHooksManager.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@thoroc/projen-typescript-git-hooks.GitHooksManager.isComponent"></a>

```typescript
import { GitHooksManager } from '@thoroc/projen-typescript-git-hooks'

GitHooksManager.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.GitHooksManager.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksManager.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksManager.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@thoroc/projen-typescript-git-hooks.GitHooksManager.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.GitHooksManager.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### GitNexusMcpServer <a name="GitNexusMcpServer" id="@thoroc/projen-typescript-git-hooks.GitNexusMcpServer"></a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.GitNexusMcpServer.Initializer"></a>

```typescript
import { GitNexusMcpServer } from '@thoroc/projen-typescript-git-hooks'

new GitNexusMcpServer(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitNexusMcpServer.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.GitNexusMcpServer.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitNexusMcpServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitNexusMcpServer.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitNexusMcpServer.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitNexusMcpServer.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@thoroc/projen-typescript-git-hooks.GitNexusMcpServer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@thoroc/projen-typescript-git-hooks.GitNexusMcpServer.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@thoroc/projen-typescript-git-hooks.GitNexusMcpServer.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@thoroc/projen-typescript-git-hooks.GitNexusMcpServer.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitNexusMcpServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitNexusMcpServer.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitNexusMcpServer.of">of</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@thoroc/projen-typescript-git-hooks.GitNexusMcpServer.isConstruct"></a>

```typescript
import { GitNexusMcpServer } from '@thoroc/projen-typescript-git-hooks'

GitNexusMcpServer.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.GitNexusMcpServer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@thoroc/projen-typescript-git-hooks.GitNexusMcpServer.isComponent"></a>

```typescript
import { GitNexusMcpServer } from '@thoroc/projen-typescript-git-hooks'

GitNexusMcpServer.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.GitNexusMcpServer.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@thoroc/projen-typescript-git-hooks.GitNexusMcpServer.of"></a>

```typescript
import { GitNexusMcpServer } from '@thoroc/projen-typescript-git-hooks'

GitNexusMcpServer.of(project: Project)
```

###### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.GitNexusMcpServer.of.parameter.project"></a>

- *Type:* projen.Project

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitNexusMcpServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitNexusMcpServer.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@thoroc/projen-typescript-git-hooks.GitNexusMcpServer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.GitNexusMcpServer.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitNexusMcpServer.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@thoroc/projen-typescript-git-hooks.GitNexusMcpServer.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

### Husky <a name="Husky" id="@thoroc/projen-typescript-git-hooks.Husky"></a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.Husky.Initializer"></a>

```typescript
import { Husky } from '@thoroc/projen-typescript-git-hooks'

new Husky(project: GitHooksEnabledProject, options?: HuskyOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Husky.Initializer.parameter.project">project</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject">GitHooksEnabledProject</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Husky.Initializer.parameter.options">options</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.HuskyOptions">HuskyOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.Husky.Initializer.parameter.project"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject">GitHooksEnabledProject</a>

---

##### `options`<sup>Optional</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.Husky.Initializer.parameter.options"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.HuskyOptions">HuskyOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Husky.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Husky.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Husky.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Husky.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Husky.createHook">createHook</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@thoroc/projen-typescript-git-hooks.Husky.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@thoroc/projen-typescript-git-hooks.Husky.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@thoroc/projen-typescript-git-hooks.Husky.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@thoroc/projen-typescript-git-hooks.Husky.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `createHook` <a name="createHook" id="@thoroc/projen-typescript-git-hooks.Husky.createHook"></a>

```typescript
public createHook(hook: GitClientHook, command: string[]): void
```

###### `hook`<sup>Required</sup> <a name="hook" id="@thoroc/projen-typescript-git-hooks.Husky.createHook.parameter.hook"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.GitClientHook">GitClientHook</a>

---

###### `command`<sup>Required</sup> <a name="command" id="@thoroc/projen-typescript-git-hooks.Husky.createHook.parameter.command"></a>

- *Type:* string[]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Husky.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Husky.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Husky.of">of</a></code> | Returns the singletone component of a project or undefined if there is none. |

---

##### `isConstruct` <a name="isConstruct" id="@thoroc/projen-typescript-git-hooks.Husky.isConstruct"></a>

```typescript
import { Husky } from '@thoroc/projen-typescript-git-hooks'

Husky.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.Husky.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@thoroc/projen-typescript-git-hooks.Husky.isComponent"></a>

```typescript
import { Husky } from '@thoroc/projen-typescript-git-hooks'

Husky.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.Husky.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@thoroc/projen-typescript-git-hooks.Husky.of"></a>

```typescript
import { Husky } from '@thoroc/projen-typescript-git-hooks'

Husky.of(project: Project)
```

Returns the singletone component of a project or undefined if there is none.

###### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.Husky.of.parameter.project"></a>

- *Type:* projen.Project

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Husky.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Husky.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Husky.property.lintStaged">lintStaged</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.LintStaged">LintStaged</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@thoroc/projen-typescript-git-hooks.Husky.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.Husky.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `lintStaged`<sup>Optional</sup> <a name="lintStaged" id="@thoroc/projen-typescript-git-hooks.Husky.property.lintStaged"></a>

```typescript
public readonly lintStaged: LintStaged;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.LintStaged">LintStaged</a>

---


### HuskyHookFile <a name="HuskyHookFile" id="@thoroc/projen-typescript-git-hooks.HuskyHookFile"></a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.HuskyHookFile.Initializer"></a>

```typescript
import { HuskyHookFile } from '@thoroc/projen-typescript-git-hooks'

new HuskyHookFile(project: Project, options: HuskyHookFileOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.HuskyHookFile.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.HuskyHookFile.Initializer.parameter.options">options</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.HuskyHookFileOptions">HuskyHookFileOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.HuskyHookFile.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Required</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.HuskyHookFile.Initializer.parameter.options"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.HuskyHookFileOptions">HuskyHookFileOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.HuskyHookFile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.HuskyHookFile.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.HuskyHookFile.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.HuskyHookFile.synthesize">synthesize</a></code> | Writes the file to the project's output directory. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.HuskyHookFile.addLine">addLine</a></code> | Adds a line to the text file. |

---

##### `toString` <a name="toString" id="@thoroc/projen-typescript-git-hooks.HuskyHookFile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@thoroc/projen-typescript-git-hooks.HuskyHookFile.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@thoroc/projen-typescript-git-hooks.HuskyHookFile.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@thoroc/projen-typescript-git-hooks.HuskyHookFile.synthesize"></a>

```typescript
public synthesize(): void
```

Writes the file to the project's output directory.

##### `addLine` <a name="addLine" id="@thoroc/projen-typescript-git-hooks.HuskyHookFile.addLine"></a>

```typescript
public addLine(line: string): void
```

Adds a line to the text file.

###### `line`<sup>Required</sup> <a name="line" id="@thoroc/projen-typescript-git-hooks.HuskyHookFile.addLine.parameter.line"></a>

- *Type:* string

the line to add (can use tokens).

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.HuskyHookFile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.HuskyHookFile.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@thoroc/projen-typescript-git-hooks.HuskyHookFile.isConstruct"></a>

```typescript
import { HuskyHookFile } from '@thoroc/projen-typescript-git-hooks'

HuskyHookFile.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.HuskyHookFile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@thoroc/projen-typescript-git-hooks.HuskyHookFile.isComponent"></a>

```typescript
import { HuskyHookFile } from '@thoroc/projen-typescript-git-hooks'

HuskyHookFile.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.HuskyHookFile.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.HuskyHookFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.HuskyHookFile.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.HuskyHookFile.property.absolutePath">absolutePath</a></code> | <code>string</code> | The absolute path of this file. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.HuskyHookFile.property.path">path</a></code> | <code>string</code> | The file path, relative to the project's outdir. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.HuskyHookFile.property.changed">changed</a></code> | <code>boolean</code> | Indicates if the file has been changed during synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.HuskyHookFile.property.marker">marker</a></code> | <code>string</code> | The projen marker, used to identify files as projen-generated. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.HuskyHookFile.property.executable">executable</a></code> | <code>boolean</code> | Indicates if the file should be marked as executable. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.HuskyHookFile.property.readonly">readonly</a></code> | <code>boolean</code> | Indicates if the file should be read-only or read-write. |

---

##### `node`<sup>Required</sup> <a name="node" id="@thoroc/projen-typescript-git-hooks.HuskyHookFile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.HuskyHookFile.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `absolutePath`<sup>Required</sup> <a name="absolutePath" id="@thoroc/projen-typescript-git-hooks.HuskyHookFile.property.absolutePath"></a>

```typescript
public readonly absolutePath: string;
```

- *Type:* string

The absolute path of this file.

---

##### `path`<sup>Required</sup> <a name="path" id="@thoroc/projen-typescript-git-hooks.HuskyHookFile.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The file path, relative to the project's outdir.

---

##### `changed`<sup>Optional</sup> <a name="changed" id="@thoroc/projen-typescript-git-hooks.HuskyHookFile.property.changed"></a>

```typescript
public readonly changed: boolean;
```

- *Type:* boolean

Indicates if the file has been changed during synthesis.

This property is
only available in `postSynthesize()` hooks. If this is `undefined`, the
file has not been synthesized yet.

---

##### `marker`<sup>Optional</sup> <a name="marker" id="@thoroc/projen-typescript-git-hooks.HuskyHookFile.property.marker"></a>

```typescript
public readonly marker: string;
```

- *Type:* string

The projen marker, used to identify files as projen-generated.

Value is undefined if the project is being ejected.

---

##### `executable`<sup>Required</sup> <a name="executable" id="@thoroc/projen-typescript-git-hooks.HuskyHookFile.property.executable"></a>

```typescript
public readonly executable: boolean;
```

- *Type:* boolean

Indicates if the file should be marked as executable.

---

##### `readonly`<sup>Required</sup> <a name="readonly" id="@thoroc/projen-typescript-git-hooks.HuskyHookFile.property.readonly"></a>

```typescript
public readonly readonly: boolean;
```

- *Type:* boolean

Indicates if the file should be read-only or read-write.

---


### IssueTemplate <a name="IssueTemplate" id="@thoroc/projen-typescript-git-hooks.IssueTemplate"></a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.IssueTemplate.Initializer"></a>

```typescript
import { IssueTemplate } from '@thoroc/projen-typescript-git-hooks'

new IssueTemplate(github: GitHub)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.IssueTemplate.Initializer.parameter.github">github</a></code> | <code>projen.github.GitHub</code> | *No description.* |

---

##### `github`<sup>Required</sup> <a name="github" id="@thoroc/projen-typescript-git-hooks.IssueTemplate.Initializer.parameter.github"></a>

- *Type:* projen.github.GitHub

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.IssueTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.IssueTemplate.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.IssueTemplate.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.IssueTemplate.synthesize">synthesize</a></code> | Writes the file to the project's output directory. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.IssueTemplate.addLine">addLine</a></code> | Adds a line to the text file. |

---

##### `toString` <a name="toString" id="@thoroc/projen-typescript-git-hooks.IssueTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@thoroc/projen-typescript-git-hooks.IssueTemplate.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@thoroc/projen-typescript-git-hooks.IssueTemplate.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@thoroc/projen-typescript-git-hooks.IssueTemplate.synthesize"></a>

```typescript
public synthesize(): void
```

Writes the file to the project's output directory.

##### `addLine` <a name="addLine" id="@thoroc/projen-typescript-git-hooks.IssueTemplate.addLine"></a>

```typescript
public addLine(line: string): void
```

Adds a line to the text file.

###### `line`<sup>Required</sup> <a name="line" id="@thoroc/projen-typescript-git-hooks.IssueTemplate.addLine.parameter.line"></a>

- *Type:* string

the line to add (can use tokens).

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.IssueTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.IssueTemplate.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@thoroc/projen-typescript-git-hooks.IssueTemplate.isConstruct"></a>

```typescript
import { IssueTemplate } from '@thoroc/projen-typescript-git-hooks'

IssueTemplate.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.IssueTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@thoroc/projen-typescript-git-hooks.IssueTemplate.isComponent"></a>

```typescript
import { IssueTemplate } from '@thoroc/projen-typescript-git-hooks'

IssueTemplate.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.IssueTemplate.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.IssueTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.IssueTemplate.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.IssueTemplate.property.absolutePath">absolutePath</a></code> | <code>string</code> | The absolute path of this file. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.IssueTemplate.property.path">path</a></code> | <code>string</code> | The file path, relative to the project's outdir. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.IssueTemplate.property.changed">changed</a></code> | <code>boolean</code> | Indicates if the file has been changed during synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.IssueTemplate.property.marker">marker</a></code> | <code>string</code> | The projen marker, used to identify files as projen-generated. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.IssueTemplate.property.executable">executable</a></code> | <code>boolean</code> | Indicates if the file should be marked as executable. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.IssueTemplate.property.readonly">readonly</a></code> | <code>boolean</code> | Indicates if the file should be read-only or read-write. |

---

##### `node`<sup>Required</sup> <a name="node" id="@thoroc/projen-typescript-git-hooks.IssueTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.IssueTemplate.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `absolutePath`<sup>Required</sup> <a name="absolutePath" id="@thoroc/projen-typescript-git-hooks.IssueTemplate.property.absolutePath"></a>

```typescript
public readonly absolutePath: string;
```

- *Type:* string

The absolute path of this file.

---

##### `path`<sup>Required</sup> <a name="path" id="@thoroc/projen-typescript-git-hooks.IssueTemplate.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The file path, relative to the project's outdir.

---

##### `changed`<sup>Optional</sup> <a name="changed" id="@thoroc/projen-typescript-git-hooks.IssueTemplate.property.changed"></a>

```typescript
public readonly changed: boolean;
```

- *Type:* boolean

Indicates if the file has been changed during synthesis.

This property is
only available in `postSynthesize()` hooks. If this is `undefined`, the
file has not been synthesized yet.

---

##### `marker`<sup>Optional</sup> <a name="marker" id="@thoroc/projen-typescript-git-hooks.IssueTemplate.property.marker"></a>

```typescript
public readonly marker: string;
```

- *Type:* string

The projen marker, used to identify files as projen-generated.

Value is undefined if the project is being ejected.

---

##### `executable`<sup>Required</sup> <a name="executable" id="@thoroc/projen-typescript-git-hooks.IssueTemplate.property.executable"></a>

```typescript
public readonly executable: boolean;
```

- *Type:* boolean

Indicates if the file should be marked as executable.

---

##### `readonly`<sup>Required</sup> <a name="readonly" id="@thoroc/projen-typescript-git-hooks.IssueTemplate.property.readonly"></a>

```typescript
public readonly readonly: boolean;
```

- *Type:* boolean

Indicates if the file should be read-only or read-write.

---


### Jest <a name="Jest" id="@thoroc/projen-typescript-git-hooks.Jest"></a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.Jest.Initializer"></a>

```typescript
import { Jest } from '@thoroc/projen-typescript-git-hooks'

new Jest(project: GitHooksEnabledProject, options?: JestOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Jest.Initializer.parameter.project">project</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject">GitHooksEnabledProject</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Jest.Initializer.parameter.options">options</a></code> | <code>projen.javascript.JestOptions</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.Jest.Initializer.parameter.project"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject">GitHooksEnabledProject</a>

---

##### `options`<sup>Optional</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.Jest.Initializer.parameter.options"></a>

- *Type:* projen.javascript.JestOptions

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Jest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Jest.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Jest.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Jest.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Jest.addIgnorePattern">addIgnorePattern</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Jest.addModuleNameMappers">addModuleNameMappers</a></code> | Adds one or more moduleNameMapper entries to Jest's configuration. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Jest.addModulePaths">addModulePaths</a></code> | Adds one or more modulePaths to Jest's configuration. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Jest.addReporter">addReporter</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Jest.addRoots">addRoots</a></code> | Adds one or more roots to Jest's configuration. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Jest.addSetupFile">addSetupFile</a></code> | Adds a a setup file to Jest's setupFiles configuration. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Jest.addSetupFileAfterEnv">addSetupFileAfterEnv</a></code> | Adds a a setup file to Jest's setupFilesAfterEnv configuration. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Jest.addSnapshotResolver">addSnapshotResolver</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Jest.addTestMatch">addTestMatch</a></code> | Adds a test match pattern. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Jest.addWatchIgnorePattern">addWatchIgnorePattern</a></code> | Adds a watch ignore pattern. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Jest.discoverTestMatchPatternsForDirs">discoverTestMatchPatternsForDirs</a></code> | Build standard test match patterns for a directory. |

---

##### `toString` <a name="toString" id="@thoroc/projen-typescript-git-hooks.Jest.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@thoroc/projen-typescript-git-hooks.Jest.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@thoroc/projen-typescript-git-hooks.Jest.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@thoroc/projen-typescript-git-hooks.Jest.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addIgnorePattern` <a name="addIgnorePattern" id="@thoroc/projen-typescript-git-hooks.Jest.addIgnorePattern"></a>

```typescript
public addIgnorePattern(pattern: string): void
```

###### `pattern`<sup>Required</sup> <a name="pattern" id="@thoroc/projen-typescript-git-hooks.Jest.addIgnorePattern.parameter.pattern"></a>

- *Type:* string

---

##### `addModuleNameMappers` <a name="addModuleNameMappers" id="@thoroc/projen-typescript-git-hooks.Jest.addModuleNameMappers"></a>

```typescript
public addModuleNameMappers(moduleNameMapperAdditions: {[ key: string ]: string | string[]}): void
```

Adds one or more moduleNameMapper entries to Jest's configuration.

Will overwrite if the same key is used as a pre-existing one.

###### `moduleNameMapperAdditions`<sup>Required</sup> <a name="moduleNameMapperAdditions" id="@thoroc/projen-typescript-git-hooks.Jest.addModuleNameMappers.parameter.moduleNameMapperAdditions"></a>

- *Type:* {[ key: string ]: string | string[]}

A map from regular expressions to module names or to arrays of module names that allow to stub out resources, like images or styles with a single module.

---

##### `addModulePaths` <a name="addModulePaths" id="@thoroc/projen-typescript-git-hooks.Jest.addModulePaths"></a>

```typescript
public addModulePaths(modulePaths: ...string[]): void
```

Adds one or more modulePaths to Jest's configuration.

###### `modulePaths`<sup>Required</sup> <a name="modulePaths" id="@thoroc/projen-typescript-git-hooks.Jest.addModulePaths.parameter.modulePaths"></a>

- *Type:* ...string[]

An array of absolute paths to additional locations to search when resolving modules   *.

---

##### `addReporter` <a name="addReporter" id="@thoroc/projen-typescript-git-hooks.Jest.addReporter"></a>

```typescript
public addReporter(reporter: JestReporter): void
```

###### `reporter`<sup>Required</sup> <a name="reporter" id="@thoroc/projen-typescript-git-hooks.Jest.addReporter.parameter.reporter"></a>

- *Type:* projen.javascript.JestReporter

---

##### `addRoots` <a name="addRoots" id="@thoroc/projen-typescript-git-hooks.Jest.addRoots"></a>

```typescript
public addRoots(roots: ...string[]): void
```

Adds one or more roots to Jest's configuration.

###### `roots`<sup>Required</sup> <a name="roots" id="@thoroc/projen-typescript-git-hooks.Jest.addRoots.parameter.roots"></a>

- *Type:* ...string[]

A list of paths to directories that Jest should use to search for files in.

---

##### `addSetupFile` <a name="addSetupFile" id="@thoroc/projen-typescript-git-hooks.Jest.addSetupFile"></a>

```typescript
public addSetupFile(file: string): void
```

Adds a a setup file to Jest's setupFiles configuration.

###### `file`<sup>Required</sup> <a name="file" id="@thoroc/projen-typescript-git-hooks.Jest.addSetupFile.parameter.file"></a>

- *Type:* string

File path to setup file.

---

##### `addSetupFileAfterEnv` <a name="addSetupFileAfterEnv" id="@thoroc/projen-typescript-git-hooks.Jest.addSetupFileAfterEnv"></a>

```typescript
public addSetupFileAfterEnv(file: string): void
```

Adds a a setup file to Jest's setupFilesAfterEnv configuration.

###### `file`<sup>Required</sup> <a name="file" id="@thoroc/projen-typescript-git-hooks.Jest.addSetupFileAfterEnv.parameter.file"></a>

- *Type:* string

File path to setup file.

---

##### `addSnapshotResolver` <a name="addSnapshotResolver" id="@thoroc/projen-typescript-git-hooks.Jest.addSnapshotResolver"></a>

```typescript
public addSnapshotResolver(file: string): void
```

###### `file`<sup>Required</sup> <a name="file" id="@thoroc/projen-typescript-git-hooks.Jest.addSnapshotResolver.parameter.file"></a>

- *Type:* string

---

##### `addTestMatch` <a name="addTestMatch" id="@thoroc/projen-typescript-git-hooks.Jest.addTestMatch"></a>

```typescript
public addTestMatch(pattern: string): void
```

Adds a test match pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@thoroc/projen-typescript-git-hooks.Jest.addTestMatch.parameter.pattern"></a>

- *Type:* string

glob pattern to match for tests.

---

##### `addWatchIgnorePattern` <a name="addWatchIgnorePattern" id="@thoroc/projen-typescript-git-hooks.Jest.addWatchIgnorePattern"></a>

```typescript
public addWatchIgnorePattern(pattern: string): void
```

Adds a watch ignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@thoroc/projen-typescript-git-hooks.Jest.addWatchIgnorePattern.parameter.pattern"></a>

- *Type:* string

The pattern (regular expression).

---

##### `discoverTestMatchPatternsForDirs` <a name="discoverTestMatchPatternsForDirs" id="@thoroc/projen-typescript-git-hooks.Jest.discoverTestMatchPatternsForDirs"></a>

```typescript
public discoverTestMatchPatternsForDirs(dirs: string[], options?: JestDiscoverTestMatchPatternsForDirsOptions): void
```

Build standard test match patterns for a directory.

###### `dirs`<sup>Required</sup> <a name="dirs" id="@thoroc/projen-typescript-git-hooks.Jest.discoverTestMatchPatternsForDirs.parameter.dirs"></a>

- *Type:* string[]

The directories to add test matches for.

Matches any folder if not specified or an empty array.

---

###### `options`<sup>Optional</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.Jest.discoverTestMatchPatternsForDirs.parameter.options"></a>

- *Type:* projen.javascript.JestDiscoverTestMatchPatternsForDirsOptions

Options for building test match patterns.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Jest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Jest.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Jest.of">of</a></code> | Returns the singleton Jest component of a project or undefined if there is none. |

---

##### `isConstruct` <a name="isConstruct" id="@thoroc/projen-typescript-git-hooks.Jest.isConstruct"></a>

```typescript
import { Jest } from '@thoroc/projen-typescript-git-hooks'

Jest.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.Jest.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@thoroc/projen-typescript-git-hooks.Jest.isComponent"></a>

```typescript
import { Jest } from '@thoroc/projen-typescript-git-hooks'

Jest.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.Jest.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@thoroc/projen-typescript-git-hooks.Jest.of"></a>

```typescript
import { Jest } from '@thoroc/projen-typescript-git-hooks'

Jest.of(project: Project)
```

Returns the singleton Jest component of a project or undefined if there is none.

###### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.Jest.of.parameter.project"></a>

- *Type:* projen.Project

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Jest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Jest.property.project">project</a></code> | <code>projen.javascript.NodeProject</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Jest.property.config">config</a></code> | <code>any</code> | Escape hatch. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Jest.property.jestVersion">jestVersion</a></code> | <code>string</code> | Jest version, including `@` symbol, like `@^29`. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Jest.property.file">file</a></code> | <code>projen.JsonFile</code> | Jest config file. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Jest.property.configFilePath">configFilePath</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@thoroc/projen-typescript-git-hooks.Jest.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.Jest.property.project"></a>

```typescript
public readonly project: NodeProject;
```

- *Type:* projen.javascript.NodeProject

---

##### `config`<sup>Required</sup> <a name="config" id="@thoroc/projen-typescript-git-hooks.Jest.property.config"></a>

```typescript
public readonly config: any;
```

- *Type:* any

Escape hatch.

---

##### `jestVersion`<sup>Required</sup> <a name="jestVersion" id="@thoroc/projen-typescript-git-hooks.Jest.property.jestVersion"></a>

```typescript
public readonly jestVersion: string;
```

- *Type:* string

Jest version, including `@` symbol, like `@^29`.

---

##### `file`<sup>Optional</sup> <a name="file" id="@thoroc/projen-typescript-git-hooks.Jest.property.file"></a>

```typescript
public readonly file: JsonFile;
```

- *Type:* projen.JsonFile

Jest config file.

`undefined` if settings are written to `package.json`

---

##### `configFilePath`<sup>Optional</sup> <a name="configFilePath" id="@thoroc/projen-typescript-git-hooks.Jest.property.configFilePath"></a>

```typescript
public readonly configFilePath: string;
```

- *Type:* string

---


### LabelerConfig <a name="LabelerConfig" id="@thoroc/projen-typescript-git-hooks.LabelerConfig"></a>

Represents LabelerConfig configuration.

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.LabelerConfig.Initializer"></a>

```typescript
import { LabelerConfig } from '@thoroc/projen-typescript-git-hooks'

new LabelerConfig(project: Project, options: LabelerConfigOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LabelerConfig.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LabelerConfig.Initializer.parameter.options">options</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.LabelerConfigOptions">LabelerConfigOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.LabelerConfig.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Required</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.LabelerConfig.Initializer.parameter.options"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.LabelerConfigOptions">LabelerConfigOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LabelerConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LabelerConfig.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LabelerConfig.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LabelerConfig.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@thoroc/projen-typescript-git-hooks.LabelerConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@thoroc/projen-typescript-git-hooks.LabelerConfig.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@thoroc/projen-typescript-git-hooks.LabelerConfig.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@thoroc/projen-typescript-git-hooks.LabelerConfig.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LabelerConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LabelerConfig.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@thoroc/projen-typescript-git-hooks.LabelerConfig.isConstruct"></a>

```typescript
import { LabelerConfig } from '@thoroc/projen-typescript-git-hooks'

LabelerConfig.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.LabelerConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@thoroc/projen-typescript-git-hooks.LabelerConfig.isComponent"></a>

```typescript
import { LabelerConfig } from '@thoroc/projen-typescript-git-hooks'

LabelerConfig.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.LabelerConfig.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LabelerConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LabelerConfig.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@thoroc/projen-typescript-git-hooks.LabelerConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.LabelerConfig.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### Lefthook <a name="Lefthook" id="@thoroc/projen-typescript-git-hooks.Lefthook"></a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.Lefthook.Initializer"></a>

```typescript
import { Lefthook } from '@thoroc/projen-typescript-git-hooks'

new Lefthook(project: GitHooksEnabledProject, options?: LefthookOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Lefthook.Initializer.parameter.project">project</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject">GitHooksEnabledProject</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Lefthook.Initializer.parameter.options">options</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookOptions">LefthookOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.Lefthook.Initializer.parameter.project"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject">GitHooksEnabledProject</a>

---

##### `options`<sup>Optional</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.Lefthook.Initializer.parameter.options"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.LefthookOptions">LefthookOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Lefthook.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Lefthook.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Lefthook.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Lefthook.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Lefthook.addCommand">addCommand</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Lefthook.addScript">addScript</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@thoroc/projen-typescript-git-hooks.Lefthook.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@thoroc/projen-typescript-git-hooks.Lefthook.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@thoroc/projen-typescript-git-hooks.Lefthook.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@thoroc/projen-typescript-git-hooks.Lefthook.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addCommand` <a name="addCommand" id="@thoroc/projen-typescript-git-hooks.Lefthook.addCommand"></a>

```typescript
public addCommand(hookName: GitClientHook, command: LefthookCommandOptions): void
```

###### `hookName`<sup>Required</sup> <a name="hookName" id="@thoroc/projen-typescript-git-hooks.Lefthook.addCommand.parameter.hookName"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.GitClientHook">GitClientHook</a>

---

###### `command`<sup>Required</sup> <a name="command" id="@thoroc/projen-typescript-git-hooks.Lefthook.addCommand.parameter.command"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.LefthookCommandOptions">LefthookCommandOptions</a>

---

##### `addScript` <a name="addScript" id="@thoroc/projen-typescript-git-hooks.Lefthook.addScript"></a>

```typescript
public addScript(hookName: GitClientHook, script: LefthookScriptOptions): void
```

###### `hookName`<sup>Required</sup> <a name="hookName" id="@thoroc/projen-typescript-git-hooks.Lefthook.addScript.parameter.hookName"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.GitClientHook">GitClientHook</a>

---

###### `script`<sup>Required</sup> <a name="script" id="@thoroc/projen-typescript-git-hooks.Lefthook.addScript.parameter.script"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.LefthookScriptOptions">LefthookScriptOptions</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Lefthook.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Lefthook.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Lefthook.of">of</a></code> | Returns the singletone component of a project or undefined if there is none. |

---

##### `isConstruct` <a name="isConstruct" id="@thoroc/projen-typescript-git-hooks.Lefthook.isConstruct"></a>

```typescript
import { Lefthook } from '@thoroc/projen-typescript-git-hooks'

Lefthook.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.Lefthook.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@thoroc/projen-typescript-git-hooks.Lefthook.isComponent"></a>

```typescript
import { Lefthook } from '@thoroc/projen-typescript-git-hooks'

Lefthook.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.Lefthook.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@thoroc/projen-typescript-git-hooks.Lefthook.of"></a>

```typescript
import { Lefthook } from '@thoroc/projen-typescript-git-hooks'

Lefthook.of(project: Project)
```

Returns the singletone component of a project or undefined if there is none.

###### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.Lefthook.of.parameter.project"></a>

- *Type:* projen.Project

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Lefthook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Lefthook.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Lefthook.property.config">config</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookConfig">LefthookConfig</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@thoroc/projen-typescript-git-hooks.Lefthook.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.Lefthook.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `config`<sup>Required</sup> <a name="config" id="@thoroc/projen-typescript-git-hooks.Lefthook.property.config"></a>

```typescript
public readonly config: LefthookConfig;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.LefthookConfig">LefthookConfig</a>

---


### LefthookFile <a name="LefthookFile" id="@thoroc/projen-typescript-git-hooks.LefthookFile"></a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.LefthookFile.Initializer"></a>

```typescript
import { LefthookFile } from '@thoroc/projen-typescript-git-hooks'

new LefthookFile(project: Project, obj: object)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookFile.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookFile.Initializer.parameter.obj">obj</a></code> | <code>object</code> | The output object. |

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.LefthookFile.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `obj`<sup>Required</sup> <a name="obj" id="@thoroc/projen-typescript-git-hooks.LefthookFile.Initializer.parameter.obj"></a>

- *Type:* object

The output object.

This object can be mutated until the project is
synthesized.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookFile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookFile.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookFile.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookFile.synthesize">synthesize</a></code> | Writes the file to the project's output directory. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookFile.addDeletionOverride">addDeletionOverride</a></code> | Syntactic sugar for `addOverride(path, undefined)`. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookFile.addOverride">addOverride</a></code> | Adds an override to the synthesized object file. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookFile.addToArray">addToArray</a></code> | Adds to an array in the synthesized object file. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookFile.patch">patch</a></code> | Applies an RFC 6902 JSON-patch to the synthesized object file. See https://datatracker.ietf.org/doc/html/rfc6902 for more information. |

---

##### `toString` <a name="toString" id="@thoroc/projen-typescript-git-hooks.LefthookFile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@thoroc/projen-typescript-git-hooks.LefthookFile.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@thoroc/projen-typescript-git-hooks.LefthookFile.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@thoroc/projen-typescript-git-hooks.LefthookFile.synthesize"></a>

```typescript
public synthesize(): void
```

Writes the file to the project's output directory.

##### `addDeletionOverride` <a name="addDeletionOverride" id="@thoroc/projen-typescript-git-hooks.LefthookFile.addDeletionOverride"></a>

```typescript
public addDeletionOverride(path: string): void
```

Syntactic sugar for `addOverride(path, undefined)`.

###### `path`<sup>Required</sup> <a name="path" id="@thoroc/projen-typescript-git-hooks.LefthookFile.addDeletionOverride.parameter.path"></a>

- *Type:* string

The path of the value to delete.

---

##### `addOverride` <a name="addOverride" id="@thoroc/projen-typescript-git-hooks.LefthookFile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

Adds an override to the synthesized object file.

If the override is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

For example,
```typescript
project.tsconfig.file.addOverride('compilerOptions.alwaysStrict', true);
project.tsconfig.file.addOverride('compilerOptions.lib', ['dom', 'dom.iterable', 'esnext']);
```
would add the overrides
```json
"compilerOptions": {
  "alwaysStrict": true,
  "lib": [
    "dom",
    "dom.iterable",
    "esnext"
  ]
  ...
}
...
```

###### `path`<sup>Required</sup> <a name="path" id="@thoroc/projen-typescript-git-hooks.LefthookFile.addOverride.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to override values in complex types.

Any intermediate keys
will be created as needed.

---

###### `value`<sup>Required</sup> <a name="value" id="@thoroc/projen-typescript-git-hooks.LefthookFile.addOverride.parameter.value"></a>

- *Type:* any

The value.

Could be primitive or complex.

---

##### `addToArray` <a name="addToArray" id="@thoroc/projen-typescript-git-hooks.LefthookFile.addToArray"></a>

```typescript
public addToArray(path: string, values: ...any[]): void
```

Adds to an array in the synthesized object file.

If the array is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

For example, with the following object file
```json
"compilerOptions": {
  "exclude": ["node_modules"],
  "lib": ["es2020"]
  ...
}
...
```

```typescript
project.tsconfig.file.addToArray('compilerOptions.exclude', 'coverage');
project.tsconfig.file.addToArray('compilerOptions.lib', 'dom', 'dom.iterable', 'esnext');
```
would result in the following object file
```json
"compilerOptions": {
  "exclude": ["node_modules", "coverage"],
  "lib": ["es2020", "dom", "dom.iterable", "esnext"]
  ...
}
...
```

###### `path`<sup>Required</sup> <a name="path" id="@thoroc/projen-typescript-git-hooks.LefthookFile.addToArray.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to att to arrays in complex types.

Any intermediate keys
will be created as needed.

---

###### `values`<sup>Required</sup> <a name="values" id="@thoroc/projen-typescript-git-hooks.LefthookFile.addToArray.parameter.values"></a>

- *Type:* ...any[]

The values to add.

Could be primitive or complex.

---

##### `patch` <a name="patch" id="@thoroc/projen-typescript-git-hooks.LefthookFile.patch"></a>

```typescript
public patch(patches: ...JsonPatch[]): void
```

Applies an RFC 6902 JSON-patch to the synthesized object file. See https://datatracker.ietf.org/doc/html/rfc6902 for more information.

For example, with the following object file
```json
"compilerOptions": {
  "exclude": ["node_modules"],
  "lib": ["es2020"]
  ...
}
...
```

```typescript
project.tsconfig.file.patch(JsonPatch.add("/compilerOptions/exclude/-", "coverage"));
project.tsconfig.file.patch(JsonPatch.replace("/compilerOptions/lib", ["dom", "dom.iterable", "esnext"]));
```
would result in the following object file
```json
"compilerOptions": {
  "exclude": ["node_modules", "coverage"],
  "lib": ["dom", "dom.iterable", "esnext"]
  ...
}
...
```

###### `patches`<sup>Required</sup> <a name="patches" id="@thoroc/projen-typescript-git-hooks.LefthookFile.patch.parameter.patches"></a>

- *Type:* ...projen.JsonPatch[]

The patch operations to apply.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookFile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookFile.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@thoroc/projen-typescript-git-hooks.LefthookFile.isConstruct"></a>

```typescript
import { LefthookFile } from '@thoroc/projen-typescript-git-hooks'

LefthookFile.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.LefthookFile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@thoroc/projen-typescript-git-hooks.LefthookFile.isComponent"></a>

```typescript
import { LefthookFile } from '@thoroc/projen-typescript-git-hooks'

LefthookFile.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.LefthookFile.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookFile.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookFile.property.absolutePath">absolutePath</a></code> | <code>string</code> | The absolute path of this file. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookFile.property.path">path</a></code> | <code>string</code> | The file path, relative to the project's outdir. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookFile.property.changed">changed</a></code> | <code>boolean</code> | Indicates if the file has been changed during synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookFile.property.marker">marker</a></code> | <code>string</code> | The projen marker, used to identify files as projen-generated. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookFile.property.executable">executable</a></code> | <code>boolean</code> | Indicates if the file should be marked as executable. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookFile.property.readonly">readonly</a></code> | <code>boolean</code> | Indicates if the file should be read-only or read-write. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookFile.property.omitEmpty">omitEmpty</a></code> | <code>boolean</code> | Indicates if empty objects and arrays are omitted from the output object. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookFile.property.lineWidth">lineWidth</a></code> | <code>number</code> | Maximum line width (set to 0 to disable folding). |

---

##### `node`<sup>Required</sup> <a name="node" id="@thoroc/projen-typescript-git-hooks.LefthookFile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.LefthookFile.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `absolutePath`<sup>Required</sup> <a name="absolutePath" id="@thoroc/projen-typescript-git-hooks.LefthookFile.property.absolutePath"></a>

```typescript
public readonly absolutePath: string;
```

- *Type:* string

The absolute path of this file.

---

##### `path`<sup>Required</sup> <a name="path" id="@thoroc/projen-typescript-git-hooks.LefthookFile.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The file path, relative to the project's outdir.

---

##### `changed`<sup>Optional</sup> <a name="changed" id="@thoroc/projen-typescript-git-hooks.LefthookFile.property.changed"></a>

```typescript
public readonly changed: boolean;
```

- *Type:* boolean

Indicates if the file has been changed during synthesis.

This property is
only available in `postSynthesize()` hooks. If this is `undefined`, the
file has not been synthesized yet.

---

##### `marker`<sup>Optional</sup> <a name="marker" id="@thoroc/projen-typescript-git-hooks.LefthookFile.property.marker"></a>

```typescript
public readonly marker: string;
```

- *Type:* string

The projen marker, used to identify files as projen-generated.

Value is undefined if the project is being ejected.

---

##### `executable`<sup>Required</sup> <a name="executable" id="@thoroc/projen-typescript-git-hooks.LefthookFile.property.executable"></a>

```typescript
public readonly executable: boolean;
```

- *Type:* boolean

Indicates if the file should be marked as executable.

---

##### `readonly`<sup>Required</sup> <a name="readonly" id="@thoroc/projen-typescript-git-hooks.LefthookFile.property.readonly"></a>

```typescript
public readonly readonly: boolean;
```

- *Type:* boolean

Indicates if the file should be read-only or read-write.

---

##### `omitEmpty`<sup>Required</sup> <a name="omitEmpty" id="@thoroc/projen-typescript-git-hooks.LefthookFile.property.omitEmpty"></a>

```typescript
public readonly omitEmpty: boolean;
```

- *Type:* boolean

Indicates if empty objects and arrays are omitted from the output object.

---

##### `lineWidth`<sup>Required</sup> <a name="lineWidth" id="@thoroc/projen-typescript-git-hooks.LefthookFile.property.lineWidth"></a>

```typescript
public readonly lineWidth: number;
```

- *Type:* number

Maximum line width (set to 0 to disable folding).

---


### LintStaged <a name="LintStaged" id="@thoroc/projen-typescript-git-hooks.LintStaged"></a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.LintStaged.Initializer"></a>

```typescript
import { LintStaged } from '@thoroc/projen-typescript-git-hooks'

new LintStaged(project: GitHooksEnabledProject, options?: LintStagedOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LintStaged.Initializer.parameter.project">project</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject">GitHooksEnabledProject</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LintStaged.Initializer.parameter.options">options</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.LintStagedOptions">LintStagedOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.LintStaged.Initializer.parameter.project"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject">GitHooksEnabledProject</a>

---

##### `options`<sup>Optional</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.LintStaged.Initializer.parameter.options"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.LintStagedOptions">LintStagedOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LintStaged.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LintStaged.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LintStaged.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LintStaged.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LintStaged.addRule">addRule</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@thoroc/projen-typescript-git-hooks.LintStaged.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@thoroc/projen-typescript-git-hooks.LintStaged.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@thoroc/projen-typescript-git-hooks.LintStaged.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@thoroc/projen-typescript-git-hooks.LintStaged.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addRule` <a name="addRule" id="@thoroc/projen-typescript-git-hooks.LintStaged.addRule"></a>

```typescript
public addRule(rule: LintStagedRuleOptions): void
```

###### `rule`<sup>Required</sup> <a name="rule" id="@thoroc/projen-typescript-git-hooks.LintStaged.addRule.parameter.rule"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.LintStagedRuleOptions">LintStagedRuleOptions</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LintStaged.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LintStaged.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LintStaged.of">of</a></code> | Returns the singletone component of a project or undefined if there is none. |

---

##### `isConstruct` <a name="isConstruct" id="@thoroc/projen-typescript-git-hooks.LintStaged.isConstruct"></a>

```typescript
import { LintStaged } from '@thoroc/projen-typescript-git-hooks'

LintStaged.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.LintStaged.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@thoroc/projen-typescript-git-hooks.LintStaged.isComponent"></a>

```typescript
import { LintStaged } from '@thoroc/projen-typescript-git-hooks'

LintStaged.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.LintStaged.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@thoroc/projen-typescript-git-hooks.LintStaged.of"></a>

```typescript
import { LintStaged } from '@thoroc/projen-typescript-git-hooks'

LintStaged.of(project: GitHooksEnabledProject)
```

Returns the singletone component of a project or undefined if there is none.

###### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.LintStaged.of.parameter.project"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject">GitHooksEnabledProject</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LintStaged.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LintStaged.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LintStaged.property.rules">rules</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.LintStagedRule">LintStagedRule</a>[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@thoroc/projen-typescript-git-hooks.LintStaged.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.LintStaged.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `rules`<sup>Required</sup> <a name="rules" id="@thoroc/projen-typescript-git-hooks.LintStaged.property.rules"></a>

```typescript
public readonly rules: LintStagedRule[];
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.LintStagedRule">LintStagedRule</a>[]

---


### Markdownlint <a name="Markdownlint" id="@thoroc/projen-typescript-git-hooks.Markdownlint"></a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.Markdownlint.Initializer"></a>

```typescript
import { Markdownlint } from '@thoroc/projen-typescript-git-hooks'

new Markdownlint(project: GitHooksEnabledProject, options?: MarkdownlintOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Markdownlint.Initializer.parameter.project">project</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject">GitHooksEnabledProject</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Markdownlint.Initializer.parameter.options">options</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintOptions">MarkdownlintOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.Markdownlint.Initializer.parameter.project"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject">GitHooksEnabledProject</a>

---

##### `options`<sup>Optional</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.Markdownlint.Initializer.parameter.options"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintOptions">MarkdownlintOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Markdownlint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Markdownlint.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Markdownlint.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Markdownlint.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Markdownlint.addIgnorePattern">addIgnorePattern</a></code> | Defines Markdownlint ignore Patterns these patterns will be added to the file .markdownlintignore. |

---

##### `toString` <a name="toString" id="@thoroc/projen-typescript-git-hooks.Markdownlint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@thoroc/projen-typescript-git-hooks.Markdownlint.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@thoroc/projen-typescript-git-hooks.Markdownlint.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@thoroc/projen-typescript-git-hooks.Markdownlint.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addIgnorePattern` <a name="addIgnorePattern" id="@thoroc/projen-typescript-git-hooks.Markdownlint.addIgnorePattern"></a>

```typescript
public addIgnorePattern(pattern: string): void
```

Defines Markdownlint ignore Patterns these patterns will be added to the file .markdownlintignore.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@thoroc/projen-typescript-git-hooks.Markdownlint.addIgnorePattern.parameter.pattern"></a>

- *Type:* string

filepatterns so exclude from Markdownlint formatting.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Markdownlint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Markdownlint.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Markdownlint.of">of</a></code> | Returns the singletone component of a project or undefined if there is none. |

---

##### `isConstruct` <a name="isConstruct" id="@thoroc/projen-typescript-git-hooks.Markdownlint.isConstruct"></a>

```typescript
import { Markdownlint } from '@thoroc/projen-typescript-git-hooks'

Markdownlint.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.Markdownlint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@thoroc/projen-typescript-git-hooks.Markdownlint.isComponent"></a>

```typescript
import { Markdownlint } from '@thoroc/projen-typescript-git-hooks'

Markdownlint.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.Markdownlint.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@thoroc/projen-typescript-git-hooks.Markdownlint.of"></a>

```typescript
import { Markdownlint } from '@thoroc/projen-typescript-git-hooks'

Markdownlint.of(project: Project)
```

Returns the singletone component of a project or undefined if there is none.

###### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.Markdownlint.of.parameter.project"></a>

- *Type:* projen.Project

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Markdownlint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Markdownlint.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Markdownlint.property.defaultRules">defaultRules</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules">MarkdownlintRules</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Markdownlint.property.options">options</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintOptions">MarkdownlintOptions</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Markdownlint.property.ignoreFile">ignoreFile</a></code> | <code>projen.IgnoreFile</code> | The .markdownlintignore file. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Markdownlint.property.rules">rules</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules">MarkdownlintRules</a></code> | Direct access to the markdownlint rules (escape hatch). |

---

##### `node`<sup>Required</sup> <a name="node" id="@thoroc/projen-typescript-git-hooks.Markdownlint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.Markdownlint.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `defaultRules`<sup>Required</sup> <a name="defaultRules" id="@thoroc/projen-typescript-git-hooks.Markdownlint.property.defaultRules"></a>

```typescript
public readonly defaultRules: MarkdownlintRules;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules">MarkdownlintRules</a>

---

##### `options`<sup>Required</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.Markdownlint.property.options"></a>

```typescript
public readonly options: MarkdownlintOptions;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintOptions">MarkdownlintOptions</a>

---

##### `ignoreFile`<sup>Optional</sup> <a name="ignoreFile" id="@thoroc/projen-typescript-git-hooks.Markdownlint.property.ignoreFile"></a>

```typescript
public readonly ignoreFile: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .markdownlintignore file.

---

##### `rules`<sup>Required</sup> <a name="rules" id="@thoroc/projen-typescript-git-hooks.Markdownlint.property.rules"></a>

```typescript
public readonly rules: MarkdownlintRules;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules">MarkdownlintRules</a>

Direct access to the markdownlint rules (escape hatch).

---


### McpConfig <a name="McpConfig" id="@thoroc/projen-typescript-git-hooks.McpConfig"></a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.McpConfig.Initializer"></a>

```typescript
import { McpConfig } from '@thoroc/projen-typescript-git-hooks'

new McpConfig(project: Project, options: McpConfigOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.McpConfig.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.McpConfig.Initializer.parameter.options">options</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.McpConfigOptions">McpConfigOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.McpConfig.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Required</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.McpConfig.Initializer.parameter.options"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.McpConfigOptions">McpConfigOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.McpConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.McpConfig.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.McpConfig.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.McpConfig.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.McpConfig.addServer">addServer</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@thoroc/projen-typescript-git-hooks.McpConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@thoroc/projen-typescript-git-hooks.McpConfig.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@thoroc/projen-typescript-git-hooks.McpConfig.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@thoroc/projen-typescript-git-hooks.McpConfig.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addServer` <a name="addServer" id="@thoroc/projen-typescript-git-hooks.McpConfig.addServer"></a>

```typescript
public addServer(server: McpServer): void
```

###### `server`<sup>Required</sup> <a name="server" id="@thoroc/projen-typescript-git-hooks.McpConfig.addServer.parameter.server"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.McpServer">McpServer</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.McpConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.McpConfig.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.McpConfig.of">of</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@thoroc/projen-typescript-git-hooks.McpConfig.isConstruct"></a>

```typescript
import { McpConfig } from '@thoroc/projen-typescript-git-hooks'

McpConfig.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.McpConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@thoroc/projen-typescript-git-hooks.McpConfig.isComponent"></a>

```typescript
import { McpConfig } from '@thoroc/projen-typescript-git-hooks'

McpConfig.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.McpConfig.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@thoroc/projen-typescript-git-hooks.McpConfig.of"></a>

```typescript
import { McpConfig } from '@thoroc/projen-typescript-git-hooks'

McpConfig.of(project: Project)
```

###### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.McpConfig.of.parameter.project"></a>

- *Type:* projen.Project

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.McpConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.McpConfig.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.McpConfig.property.servers">servers</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.McpServer">McpServer</a>[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@thoroc/projen-typescript-git-hooks.McpConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.McpConfig.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `servers`<sup>Required</sup> <a name="servers" id="@thoroc/projen-typescript-git-hooks.McpConfig.property.servers"></a>

```typescript
public readonly servers: McpServer[];
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.McpServer">McpServer</a>[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.McpConfig.property.configPath">configPath</a></code> | <code>string</code> | *No description.* |

---

##### `configPath`<sup>Required</sup> <a name="configPath" id="@thoroc/projen-typescript-git-hooks.McpConfig.property.configPath"></a>

```typescript
public readonly configPath: string;
```

- *Type:* string

---

### MistralVibe <a name="MistralVibe" id="@thoroc/projen-typescript-git-hooks.MistralVibe"></a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.MistralVibe.Initializer"></a>

```typescript
import { MistralVibe } from '@thoroc/projen-typescript-git-hooks'

new MistralVibe(project: Project, options?: MistralVibeOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MistralVibe.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MistralVibe.Initializer.parameter.options">options</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.MistralVibeOptions">MistralVibeOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.MistralVibe.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Optional</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.MistralVibe.Initializer.parameter.options"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.MistralVibeOptions">MistralVibeOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MistralVibe.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MistralVibe.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MistralVibe.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MistralVibe.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@thoroc/projen-typescript-git-hooks.MistralVibe.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@thoroc/projen-typescript-git-hooks.MistralVibe.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@thoroc/projen-typescript-git-hooks.MistralVibe.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@thoroc/projen-typescript-git-hooks.MistralVibe.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MistralVibe.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MistralVibe.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MistralVibe.of">of</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@thoroc/projen-typescript-git-hooks.MistralVibe.isConstruct"></a>

```typescript
import { MistralVibe } from '@thoroc/projen-typescript-git-hooks'

MistralVibe.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.MistralVibe.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@thoroc/projen-typescript-git-hooks.MistralVibe.isComponent"></a>

```typescript
import { MistralVibe } from '@thoroc/projen-typescript-git-hooks'

MistralVibe.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.MistralVibe.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@thoroc/projen-typescript-git-hooks.MistralVibe.of"></a>

```typescript
import { MistralVibe } from '@thoroc/projen-typescript-git-hooks'

MistralVibe.of(project: Project)
```

###### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.MistralVibe.of.parameter.project"></a>

- *Type:* projen.Project

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MistralVibe.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MistralVibe.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MistralVibe.property.options">options</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.MistralVibeOptions">MistralVibeOptions</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@thoroc/projen-typescript-git-hooks.MistralVibe.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.MistralVibe.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `options`<sup>Optional</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.MistralVibe.property.options"></a>

```typescript
public readonly options: MistralVibeOptions;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.MistralVibeOptions">MistralVibeOptions</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MistralVibe.property.contextFile">contextFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MistralVibe.property.settingsPath">settingsPath</a></code> | <code>string</code> | *No description.* |

---

##### `contextFile`<sup>Required</sup> <a name="contextFile" id="@thoroc/projen-typescript-git-hooks.MistralVibe.property.contextFile"></a>

```typescript
public readonly contextFile: string;
```

- *Type:* string

---

##### `settingsPath`<sup>Required</sup> <a name="settingsPath" id="@thoroc/projen-typescript-git-hooks.MistralVibe.property.settingsPath"></a>

```typescript
public readonly settingsPath: string;
```

- *Type:* string

---

### NeuledgeContextMcpServer <a name="NeuledgeContextMcpServer" id="@thoroc/projen-typescript-git-hooks.NeuledgeContextMcpServer"></a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.NeuledgeContextMcpServer.Initializer"></a>

```typescript
import { NeuledgeContextMcpServer } from '@thoroc/projen-typescript-git-hooks'

new NeuledgeContextMcpServer(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.NeuledgeContextMcpServer.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.NeuledgeContextMcpServer.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.NeuledgeContextMcpServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.NeuledgeContextMcpServer.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.NeuledgeContextMcpServer.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.NeuledgeContextMcpServer.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@thoroc/projen-typescript-git-hooks.NeuledgeContextMcpServer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@thoroc/projen-typescript-git-hooks.NeuledgeContextMcpServer.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@thoroc/projen-typescript-git-hooks.NeuledgeContextMcpServer.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@thoroc/projen-typescript-git-hooks.NeuledgeContextMcpServer.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.NeuledgeContextMcpServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.NeuledgeContextMcpServer.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.NeuledgeContextMcpServer.of">of</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@thoroc/projen-typescript-git-hooks.NeuledgeContextMcpServer.isConstruct"></a>

```typescript
import { NeuledgeContextMcpServer } from '@thoroc/projen-typescript-git-hooks'

NeuledgeContextMcpServer.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.NeuledgeContextMcpServer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@thoroc/projen-typescript-git-hooks.NeuledgeContextMcpServer.isComponent"></a>

```typescript
import { NeuledgeContextMcpServer } from '@thoroc/projen-typescript-git-hooks'

NeuledgeContextMcpServer.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.NeuledgeContextMcpServer.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@thoroc/projen-typescript-git-hooks.NeuledgeContextMcpServer.of"></a>

```typescript
import { NeuledgeContextMcpServer } from '@thoroc/projen-typescript-git-hooks'

NeuledgeContextMcpServer.of(project: Project)
```

###### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.NeuledgeContextMcpServer.of.parameter.project"></a>

- *Type:* projen.Project

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.NeuledgeContextMcpServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.NeuledgeContextMcpServer.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@thoroc/projen-typescript-git-hooks.NeuledgeContextMcpServer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.NeuledgeContextMcpServer.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.NeuledgeContextMcpServer.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@thoroc/projen-typescript-git-hooks.NeuledgeContextMcpServer.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

### OpenAICodex <a name="OpenAICodex" id="@thoroc/projen-typescript-git-hooks.OpenAICodex"></a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.OpenAICodex.Initializer"></a>

```typescript
import { OpenAICodex } from '@thoroc/projen-typescript-git-hooks'

new OpenAICodex(project: Project, options?: OpenAICodexOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenAICodex.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenAICodex.Initializer.parameter.options">options</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.OpenAICodexOptions">OpenAICodexOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.OpenAICodex.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Optional</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.OpenAICodex.Initializer.parameter.options"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.OpenAICodexOptions">OpenAICodexOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenAICodex.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenAICodex.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenAICodex.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenAICodex.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenAICodex.addHook">addHook</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenAICodex.addMcpServer">addMcpServer</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@thoroc/projen-typescript-git-hooks.OpenAICodex.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@thoroc/projen-typescript-git-hooks.OpenAICodex.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@thoroc/projen-typescript-git-hooks.OpenAICodex.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@thoroc/projen-typescript-git-hooks.OpenAICodex.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addHook` <a name="addHook" id="@thoroc/projen-typescript-git-hooks.OpenAICodex.addHook"></a>

```typescript
public addHook(event: string, group: OpenAICodexHookGroup): void
```

###### `event`<sup>Required</sup> <a name="event" id="@thoroc/projen-typescript-git-hooks.OpenAICodex.addHook.parameter.event"></a>

- *Type:* string

---

###### `group`<sup>Required</sup> <a name="group" id="@thoroc/projen-typescript-git-hooks.OpenAICodex.addHook.parameter.group"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.OpenAICodexHookGroup">OpenAICodexHookGroup</a>

---

##### `addMcpServer` <a name="addMcpServer" id="@thoroc/projen-typescript-git-hooks.OpenAICodex.addMcpServer"></a>

```typescript
public addMcpServer(server: McpServer): void
```

###### `server`<sup>Required</sup> <a name="server" id="@thoroc/projen-typescript-git-hooks.OpenAICodex.addMcpServer.parameter.server"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.McpServer">McpServer</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenAICodex.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenAICodex.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenAICodex.of">of</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@thoroc/projen-typescript-git-hooks.OpenAICodex.isConstruct"></a>

```typescript
import { OpenAICodex } from '@thoroc/projen-typescript-git-hooks'

OpenAICodex.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.OpenAICodex.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@thoroc/projen-typescript-git-hooks.OpenAICodex.isComponent"></a>

```typescript
import { OpenAICodex } from '@thoroc/projen-typescript-git-hooks'

OpenAICodex.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.OpenAICodex.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@thoroc/projen-typescript-git-hooks.OpenAICodex.of"></a>

```typescript
import { OpenAICodex } from '@thoroc/projen-typescript-git-hooks'

OpenAICodex.of(project: Project)
```

###### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.OpenAICodex.of.parameter.project"></a>

- *Type:* projen.Project

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenAICodex.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenAICodex.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenAICodex.property.options">options</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.OpenAICodexOptions">OpenAICodexOptions</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@thoroc/projen-typescript-git-hooks.OpenAICodex.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.OpenAICodex.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `options`<sup>Optional</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.OpenAICodex.property.options"></a>

```typescript
public readonly options: OpenAICodexOptions;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.OpenAICodexOptions">OpenAICodexOptions</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenAICodex.property.contextFile">contextFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenAICodex.property.hooksPath">hooksPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenAICodex.property.settingsPath">settingsPath</a></code> | <code>string</code> | *No description.* |

---

##### `contextFile`<sup>Required</sup> <a name="contextFile" id="@thoroc/projen-typescript-git-hooks.OpenAICodex.property.contextFile"></a>

```typescript
public readonly contextFile: string;
```

- *Type:* string

---

##### `hooksPath`<sup>Required</sup> <a name="hooksPath" id="@thoroc/projen-typescript-git-hooks.OpenAICodex.property.hooksPath"></a>

```typescript
public readonly hooksPath: string;
```

- *Type:* string

---

##### `settingsPath`<sup>Required</sup> <a name="settingsPath" id="@thoroc/projen-typescript-git-hooks.OpenAICodex.property.settingsPath"></a>

```typescript
public readonly settingsPath: string;
```

- *Type:* string

---

### OpenCode <a name="OpenCode" id="@thoroc/projen-typescript-git-hooks.OpenCode"></a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.OpenCode.Initializer"></a>

```typescript
import { OpenCode } from '@thoroc/projen-typescript-git-hooks'

new OpenCode(project: Project, options?: OpenCodeOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenCode.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenCode.Initializer.parameter.options">options</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.OpenCodeOptions">OpenCodeOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.OpenCode.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Optional</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.OpenCode.Initializer.parameter.options"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.OpenCodeOptions">OpenCodeOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenCode.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenCode.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenCode.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenCode.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenCode.addMcpServer">addMcpServer</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenCode.addPlugin">addPlugin</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@thoroc/projen-typescript-git-hooks.OpenCode.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@thoroc/projen-typescript-git-hooks.OpenCode.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@thoroc/projen-typescript-git-hooks.OpenCode.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@thoroc/projen-typescript-git-hooks.OpenCode.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addMcpServer` <a name="addMcpServer" id="@thoroc/projen-typescript-git-hooks.OpenCode.addMcpServer"></a>

```typescript
public addMcpServer(server: McpServer): void
```

###### `server`<sup>Required</sup> <a name="server" id="@thoroc/projen-typescript-git-hooks.OpenCode.addMcpServer.parameter.server"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.McpServer">McpServer</a>

---

##### `addPlugin` <a name="addPlugin" id="@thoroc/projen-typescript-git-hooks.OpenCode.addPlugin"></a>

```typescript
public addPlugin(name: string): void
```

###### `name`<sup>Required</sup> <a name="name" id="@thoroc/projen-typescript-git-hooks.OpenCode.addPlugin.parameter.name"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenCode.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenCode.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenCode.of">of</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@thoroc/projen-typescript-git-hooks.OpenCode.isConstruct"></a>

```typescript
import { OpenCode } from '@thoroc/projen-typescript-git-hooks'

OpenCode.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.OpenCode.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@thoroc/projen-typescript-git-hooks.OpenCode.isComponent"></a>

```typescript
import { OpenCode } from '@thoroc/projen-typescript-git-hooks'

OpenCode.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.OpenCode.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@thoroc/projen-typescript-git-hooks.OpenCode.of"></a>

```typescript
import { OpenCode } from '@thoroc/projen-typescript-git-hooks'

OpenCode.of(project: Project)
```

###### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.OpenCode.of.parameter.project"></a>

- *Type:* projen.Project

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenCode.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenCode.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenCode.property.options">options</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.OpenCodeOptions">OpenCodeOptions</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@thoroc/projen-typescript-git-hooks.OpenCode.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.OpenCode.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `options`<sup>Optional</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.OpenCode.property.options"></a>

```typescript
public readonly options: OpenCodeOptions;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.OpenCodeOptions">OpenCodeOptions</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenCode.property.contextFile">contextFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenCode.property.settingsPath">settingsPath</a></code> | <code>string</code> | *No description.* |

---

##### `contextFile`<sup>Required</sup> <a name="contextFile" id="@thoroc/projen-typescript-git-hooks.OpenCode.property.contextFile"></a>

```typescript
public readonly contextFile: string;
```

- *Type:* string

---

##### `settingsPath`<sup>Required</sup> <a name="settingsPath" id="@thoroc/projen-typescript-git-hooks.OpenCode.property.settingsPath"></a>

```typescript
public readonly settingsPath: string;
```

- *Type:* string

---

### Prettier <a name="Prettier" id="@thoroc/projen-typescript-git-hooks.Prettier"></a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.Prettier.Initializer"></a>

```typescript
import { Prettier } from '@thoroc/projen-typescript-git-hooks'

new Prettier(project: GitHooksEnabledProject, options?: PrettierOptions, sortImports?: PrettierSortImportsOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Prettier.Initializer.parameter.project">project</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject">GitHooksEnabledProject</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Prettier.Initializer.parameter.options">options</a></code> | <code>projen.javascript.PrettierOptions</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Prettier.Initializer.parameter.sortImports">sortImports</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.PrettierSortImportsOptions">PrettierSortImportsOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.Prettier.Initializer.parameter.project"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject">GitHooksEnabledProject</a>

---

##### `options`<sup>Optional</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.Prettier.Initializer.parameter.options"></a>

- *Type:* projen.javascript.PrettierOptions

---

##### `sortImports`<sup>Optional</sup> <a name="sortImports" id="@thoroc/projen-typescript-git-hooks.Prettier.Initializer.parameter.sortImports"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.PrettierSortImportsOptions">PrettierSortImportsOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Prettier.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Prettier.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Prettier.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Prettier.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Prettier.addIgnorePattern">addIgnorePattern</a></code> | Defines Prettier ignore Patterns these patterns will be added to the file .prettierignore. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Prettier.addOverride">addOverride</a></code> | Add a prettier override. |

---

##### `toString` <a name="toString" id="@thoroc/projen-typescript-git-hooks.Prettier.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@thoroc/projen-typescript-git-hooks.Prettier.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@thoroc/projen-typescript-git-hooks.Prettier.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@thoroc/projen-typescript-git-hooks.Prettier.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addIgnorePattern` <a name="addIgnorePattern" id="@thoroc/projen-typescript-git-hooks.Prettier.addIgnorePattern"></a>

```typescript
public addIgnorePattern(pattern: string): void
```

Defines Prettier ignore Patterns these patterns will be added to the file .prettierignore.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@thoroc/projen-typescript-git-hooks.Prettier.addIgnorePattern.parameter.pattern"></a>

- *Type:* string

filepatterns so exclude from prettier formatting.

---

##### `addOverride` <a name="addOverride" id="@thoroc/projen-typescript-git-hooks.Prettier.addOverride"></a>

```typescript
public addOverride(override: PrettierOverride): void
```

Add a prettier override.

> [https://prettier.io/docs/en/configuration.html#configuration-overrides](https://prettier.io/docs/en/configuration.html#configuration-overrides)

###### `override`<sup>Required</sup> <a name="override" id="@thoroc/projen-typescript-git-hooks.Prettier.addOverride.parameter.override"></a>

- *Type:* projen.javascript.PrettierOverride

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Prettier.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Prettier.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Prettier.of">of</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@thoroc/projen-typescript-git-hooks.Prettier.isConstruct"></a>

```typescript
import { Prettier } from '@thoroc/projen-typescript-git-hooks'

Prettier.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.Prettier.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@thoroc/projen-typescript-git-hooks.Prettier.isComponent"></a>

```typescript
import { Prettier } from '@thoroc/projen-typescript-git-hooks'

Prettier.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.Prettier.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@thoroc/projen-typescript-git-hooks.Prettier.of"></a>

```typescript
import { Prettier } from '@thoroc/projen-typescript-git-hooks'

Prettier.of(project: Project)
```

###### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.Prettier.of.parameter.project"></a>

- *Type:* projen.Project

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Prettier.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Prettier.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Prettier.property.overrides">overrides</a></code> | <code>projen.javascript.PrettierOverride[]</code> | Returns all Prettier overrides. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Prettier.property.settings">settings</a></code> | <code>projen.javascript.PrettierSettings</code> | Direct access to the prettier settings. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Prettier.property.ignoreFile">ignoreFile</a></code> | <code>projen.IgnoreFile</code> | The .prettierIgnore file. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Prettier.property.defaultPrettierOptions">defaultPrettierOptions</a></code> | <code>projen.javascript.PrettierOptions</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@thoroc/projen-typescript-git-hooks.Prettier.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.Prettier.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@thoroc/projen-typescript-git-hooks.Prettier.property.overrides"></a>

```typescript
public readonly overrides: PrettierOverride[];
```

- *Type:* projen.javascript.PrettierOverride[]

Returns all Prettier overrides.

---

##### `settings`<sup>Required</sup> <a name="settings" id="@thoroc/projen-typescript-git-hooks.Prettier.property.settings"></a>

```typescript
public readonly settings: PrettierSettings;
```

- *Type:* projen.javascript.PrettierSettings

Direct access to the prettier settings.

---

##### `ignoreFile`<sup>Optional</sup> <a name="ignoreFile" id="@thoroc/projen-typescript-git-hooks.Prettier.property.ignoreFile"></a>

```typescript
public readonly ignoreFile: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .prettierIgnore file.

---

##### `defaultPrettierOptions`<sup>Required</sup> <a name="defaultPrettierOptions" id="@thoroc/projen-typescript-git-hooks.Prettier.property.defaultPrettierOptions"></a>

```typescript
public readonly defaultPrettierOptions: PrettierOptions;
```

- *Type:* projen.javascript.PrettierOptions

---


### PullRequestCoverageComment <a name="PullRequestCoverageComment" id="@thoroc/projen-typescript-git-hooks.PullRequestCoverageComment"></a>

Represents PullRequestCoverageComment configuration.

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.PullRequestCoverageComment.Initializer"></a>

```typescript
import { PullRequestCoverageComment } from '@thoroc/projen-typescript-git-hooks'

new PullRequestCoverageComment(github: GitHub, options?: PullRequestCoverageCommentOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.PullRequestCoverageComment.Initializer.parameter.github">github</a></code> | <code>projen.github.GitHub</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.PullRequestCoverageComment.Initializer.parameter.options">options</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.PullRequestCoverageCommentOptions">PullRequestCoverageCommentOptions</a></code> | *No description.* |

---

##### `github`<sup>Required</sup> <a name="github" id="@thoroc/projen-typescript-git-hooks.PullRequestCoverageComment.Initializer.parameter.github"></a>

- *Type:* projen.github.GitHub

---

##### `options`<sup>Optional</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.PullRequestCoverageComment.Initializer.parameter.options"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.PullRequestCoverageCommentOptions">PullRequestCoverageCommentOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.PullRequestCoverageComment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.PullRequestCoverageComment.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.PullRequestCoverageComment.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.PullRequestCoverageComment.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@thoroc/projen-typescript-git-hooks.PullRequestCoverageComment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@thoroc/projen-typescript-git-hooks.PullRequestCoverageComment.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@thoroc/projen-typescript-git-hooks.PullRequestCoverageComment.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@thoroc/projen-typescript-git-hooks.PullRequestCoverageComment.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.PullRequestCoverageComment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.PullRequestCoverageComment.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@thoroc/projen-typescript-git-hooks.PullRequestCoverageComment.isConstruct"></a>

```typescript
import { PullRequestCoverageComment } from '@thoroc/projen-typescript-git-hooks'

PullRequestCoverageComment.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.PullRequestCoverageComment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@thoroc/projen-typescript-git-hooks.PullRequestCoverageComment.isComponent"></a>

```typescript
import { PullRequestCoverageComment } from '@thoroc/projen-typescript-git-hooks'

PullRequestCoverageComment.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.PullRequestCoverageComment.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.PullRequestCoverageComment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.PullRequestCoverageComment.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@thoroc/projen-typescript-git-hooks.PullRequestCoverageComment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.PullRequestCoverageComment.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### PullRequestLabeler <a name="PullRequestLabeler" id="@thoroc/projen-typescript-git-hooks.PullRequestLabeler"></a>

Represents PullRequestLabeler configuration.

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.PullRequestLabeler.Initializer"></a>

```typescript
import { PullRequestLabeler } from '@thoroc/projen-typescript-git-hooks'

new PullRequestLabeler(github: GitHub)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.PullRequestLabeler.Initializer.parameter.github">github</a></code> | <code>projen.github.GitHub</code> | *No description.* |

---

##### `github`<sup>Required</sup> <a name="github" id="@thoroc/projen-typescript-git-hooks.PullRequestLabeler.Initializer.parameter.github"></a>

- *Type:* projen.github.GitHub

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.PullRequestLabeler.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.PullRequestLabeler.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.PullRequestLabeler.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.PullRequestLabeler.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@thoroc/projen-typescript-git-hooks.PullRequestLabeler.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@thoroc/projen-typescript-git-hooks.PullRequestLabeler.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@thoroc/projen-typescript-git-hooks.PullRequestLabeler.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@thoroc/projen-typescript-git-hooks.PullRequestLabeler.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.PullRequestLabeler.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.PullRequestLabeler.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@thoroc/projen-typescript-git-hooks.PullRequestLabeler.isConstruct"></a>

```typescript
import { PullRequestLabeler } from '@thoroc/projen-typescript-git-hooks'

PullRequestLabeler.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.PullRequestLabeler.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@thoroc/projen-typescript-git-hooks.PullRequestLabeler.isComponent"></a>

```typescript
import { PullRequestLabeler } from '@thoroc/projen-typescript-git-hooks'

PullRequestLabeler.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.PullRequestLabeler.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.PullRequestLabeler.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.PullRequestLabeler.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@thoroc/projen-typescript-git-hooks.PullRequestLabeler.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.PullRequestLabeler.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### QmdMcpServer <a name="QmdMcpServer" id="@thoroc/projen-typescript-git-hooks.QmdMcpServer"></a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.QmdMcpServer.Initializer"></a>

```typescript
import { QmdMcpServer } from '@thoroc/projen-typescript-git-hooks'

new QmdMcpServer(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.QmdMcpServer.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.QmdMcpServer.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.QmdMcpServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.QmdMcpServer.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.QmdMcpServer.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.QmdMcpServer.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@thoroc/projen-typescript-git-hooks.QmdMcpServer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@thoroc/projen-typescript-git-hooks.QmdMcpServer.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@thoroc/projen-typescript-git-hooks.QmdMcpServer.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@thoroc/projen-typescript-git-hooks.QmdMcpServer.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.QmdMcpServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.QmdMcpServer.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.QmdMcpServer.of">of</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@thoroc/projen-typescript-git-hooks.QmdMcpServer.isConstruct"></a>

```typescript
import { QmdMcpServer } from '@thoroc/projen-typescript-git-hooks'

QmdMcpServer.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.QmdMcpServer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@thoroc/projen-typescript-git-hooks.QmdMcpServer.isComponent"></a>

```typescript
import { QmdMcpServer } from '@thoroc/projen-typescript-git-hooks'

QmdMcpServer.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.QmdMcpServer.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@thoroc/projen-typescript-git-hooks.QmdMcpServer.of"></a>

```typescript
import { QmdMcpServer } from '@thoroc/projen-typescript-git-hooks'

QmdMcpServer.of(project: Project)
```

###### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.QmdMcpServer.of.parameter.project"></a>

- *Type:* projen.Project

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.QmdMcpServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.QmdMcpServer.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@thoroc/projen-typescript-git-hooks.QmdMcpServer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.QmdMcpServer.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.QmdMcpServer.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@thoroc/projen-typescript-git-hooks.QmdMcpServer.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

### ReleasePlease <a name="ReleasePlease" id="@thoroc/projen-typescript-git-hooks.ReleasePlease"></a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.ReleasePlease.Initializer"></a>

```typescript
import { ReleasePlease } from '@thoroc/projen-typescript-git-hooks'

new ReleasePlease(github: GitHub, options?: ReleasePleaseOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ReleasePlease.Initializer.parameter.github">github</a></code> | <code>projen.github.GitHub</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ReleasePlease.Initializer.parameter.options">options</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.ReleasePleaseOptions">ReleasePleaseOptions</a></code> | *No description.* |

---

##### `github`<sup>Required</sup> <a name="github" id="@thoroc/projen-typescript-git-hooks.ReleasePlease.Initializer.parameter.github"></a>

- *Type:* projen.github.GitHub

---

##### `options`<sup>Optional</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.ReleasePlease.Initializer.parameter.options"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.ReleasePleaseOptions">ReleasePleaseOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ReleasePlease.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ReleasePlease.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ReleasePlease.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ReleasePlease.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@thoroc/projen-typescript-git-hooks.ReleasePlease.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@thoroc/projen-typescript-git-hooks.ReleasePlease.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@thoroc/projen-typescript-git-hooks.ReleasePlease.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@thoroc/projen-typescript-git-hooks.ReleasePlease.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ReleasePlease.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ReleasePlease.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@thoroc/projen-typescript-git-hooks.ReleasePlease.isConstruct"></a>

```typescript
import { ReleasePlease } from '@thoroc/projen-typescript-git-hooks'

ReleasePlease.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.ReleasePlease.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@thoroc/projen-typescript-git-hooks.ReleasePlease.isComponent"></a>

```typescript
import { ReleasePlease } from '@thoroc/projen-typescript-git-hooks'

ReleasePlease.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.ReleasePlease.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ReleasePlease.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ReleasePlease.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@thoroc/projen-typescript-git-hooks.ReleasePlease.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.ReleasePlease.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### Renovate <a name="Renovate" id="@thoroc/projen-typescript-git-hooks.Renovate"></a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.Renovate.Initializer"></a>

```typescript
import { Renovate } from '@thoroc/projen-typescript-git-hooks'

new Renovate(project: Project, options?: RenovateOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Renovate.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Renovate.Initializer.parameter.options">options</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.RenovateOptions">RenovateOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.Renovate.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Optional</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.Renovate.Initializer.parameter.options"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.RenovateOptions">RenovateOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Renovate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Renovate.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Renovate.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Renovate.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@thoroc/projen-typescript-git-hooks.Renovate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@thoroc/projen-typescript-git-hooks.Renovate.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@thoroc/projen-typescript-git-hooks.Renovate.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@thoroc/projen-typescript-git-hooks.Renovate.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Renovate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Renovate.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@thoroc/projen-typescript-git-hooks.Renovate.isConstruct"></a>

```typescript
import { Renovate } from '@thoroc/projen-typescript-git-hooks'

Renovate.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.Renovate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@thoroc/projen-typescript-git-hooks.Renovate.isComponent"></a>

```typescript
import { Renovate } from '@thoroc/projen-typescript-git-hooks'

Renovate.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.Renovate.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Renovate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Renovate.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@thoroc/projen-typescript-git-hooks.Renovate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.Renovate.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### RtkProxy <a name="RtkProxy" id="@thoroc/projen-typescript-git-hooks.RtkProxy"></a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.RtkProxy.Initializer"></a>

```typescript
import { RtkProxy } from '@thoroc/projen-typescript-git-hooks'

new RtkProxy(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.RtkProxy.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.RtkProxy.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.RtkProxy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.RtkProxy.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.RtkProxy.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.RtkProxy.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@thoroc/projen-typescript-git-hooks.RtkProxy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@thoroc/projen-typescript-git-hooks.RtkProxy.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@thoroc/projen-typescript-git-hooks.RtkProxy.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@thoroc/projen-typescript-git-hooks.RtkProxy.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.RtkProxy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.RtkProxy.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.RtkProxy.of">of</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@thoroc/projen-typescript-git-hooks.RtkProxy.isConstruct"></a>

```typescript
import { RtkProxy } from '@thoroc/projen-typescript-git-hooks'

RtkProxy.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.RtkProxy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@thoroc/projen-typescript-git-hooks.RtkProxy.isComponent"></a>

```typescript
import { RtkProxy } from '@thoroc/projen-typescript-git-hooks'

RtkProxy.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.RtkProxy.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@thoroc/projen-typescript-git-hooks.RtkProxy.of"></a>

```typescript
import { RtkProxy } from '@thoroc/projen-typescript-git-hooks'

RtkProxy.of(project: Project)
```

###### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.RtkProxy.of.parameter.project"></a>

- *Type:* projen.Project

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.RtkProxy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.RtkProxy.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@thoroc/projen-typescript-git-hooks.RtkProxy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.RtkProxy.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### Vitest <a name="Vitest" id="@thoroc/projen-typescript-git-hooks.Vitest"></a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.Vitest.Initializer"></a>

```typescript
import { Vitest } from '@thoroc/projen-typescript-git-hooks'

new Vitest(project: NodeProject, options?: VitestOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Vitest.Initializer.parameter.project">project</a></code> | <code>projen.javascript.NodeProject</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Vitest.Initializer.parameter.options">options</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.VitestOptions">VitestOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.Vitest.Initializer.parameter.project"></a>

- *Type:* projen.javascript.NodeProject

---

##### `options`<sup>Optional</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.Vitest.Initializer.parameter.options"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.VitestOptions">VitestOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Vitest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Vitest.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Vitest.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Vitest.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@thoroc/projen-typescript-git-hooks.Vitest.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@thoroc/projen-typescript-git-hooks.Vitest.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@thoroc/projen-typescript-git-hooks.Vitest.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@thoroc/projen-typescript-git-hooks.Vitest.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Vitest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Vitest.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Vitest.of">of</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@thoroc/projen-typescript-git-hooks.Vitest.isConstruct"></a>

```typescript
import { Vitest } from '@thoroc/projen-typescript-git-hooks'

Vitest.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.Vitest.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@thoroc/projen-typescript-git-hooks.Vitest.isComponent"></a>

```typescript
import { Vitest } from '@thoroc/projen-typescript-git-hooks'

Vitest.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@thoroc/projen-typescript-git-hooks.Vitest.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@thoroc/projen-typescript-git-hooks.Vitest.of"></a>

```typescript
import { Vitest } from '@thoroc/projen-typescript-git-hooks'

Vitest.of(project: Project)
```

###### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.Vitest.of.parameter.project"></a>

- *Type:* projen.Project

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Vitest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Vitest.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@thoroc/projen-typescript-git-hooks.Vitest.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.Vitest.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


## Structs <a name="Structs" id="Structs"></a>

### AgenticHarnessesOptions <a name="AgenticHarnessesOptions" id="@thoroc/projen-typescript-git-hooks.AgenticHarnessesOptions"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.AgenticHarnessesOptions.Initializer"></a>

```typescript
import { AgenticHarnessesOptions } from '@thoroc/projen-typescript-git-hooks'

const agenticHarnessesOptions: AgenticHarnessesOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AgenticHarnessesOptions.property.claudeCode">claudeCode</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.ClaudeCodeOptions">ClaudeCodeOptions</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AgenticHarnessesOptions.property.codex">codex</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.OpenAICodexOptions">OpenAICodexOptions</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AgenticHarnessesOptions.property.gemini">gemini</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.GeminiCliOptions">GeminiCliOptions</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AgenticHarnessesOptions.property.harnesses">harnesses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AgenticHarnessesOptions.property.opencode">opencode</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.OpenCodeOptions">OpenCodeOptions</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AgenticHarnessesOptions.property.vibe">vibe</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.MistralVibeOptions">MistralVibeOptions</a></code> | *No description.* |

---

##### `claudeCode`<sup>Optional</sup> <a name="claudeCode" id="@thoroc/projen-typescript-git-hooks.AgenticHarnessesOptions.property.claudeCode"></a>

```typescript
public readonly claudeCode: ClaudeCodeOptions;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.ClaudeCodeOptions">ClaudeCodeOptions</a>

---

##### `codex`<sup>Optional</sup> <a name="codex" id="@thoroc/projen-typescript-git-hooks.AgenticHarnessesOptions.property.codex"></a>

```typescript
public readonly codex: OpenAICodexOptions;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.OpenAICodexOptions">OpenAICodexOptions</a>

---

##### `gemini`<sup>Optional</sup> <a name="gemini" id="@thoroc/projen-typescript-git-hooks.AgenticHarnessesOptions.property.gemini"></a>

```typescript
public readonly gemini: GeminiCliOptions;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.GeminiCliOptions">GeminiCliOptions</a>

---

##### `harnesses`<sup>Optional</sup> <a name="harnesses" id="@thoroc/projen-typescript-git-hooks.AgenticHarnessesOptions.property.harnesses"></a>

```typescript
public readonly harnesses: string[];
```

- *Type:* string[]

---

##### `opencode`<sup>Optional</sup> <a name="opencode" id="@thoroc/projen-typescript-git-hooks.AgenticHarnessesOptions.property.opencode"></a>

```typescript
public readonly opencode: OpenCodeOptions;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.OpenCodeOptions">OpenCodeOptions</a>

---

##### `vibe`<sup>Optional</sup> <a name="vibe" id="@thoroc/projen-typescript-git-hooks.AgenticHarnessesOptions.property.vibe"></a>

```typescript
public readonly vibe: MistralVibeOptions;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.MistralVibeOptions">MistralVibeOptions</a>

---

### AislopCi <a name="AislopCi" id="@thoroc/projen-typescript-git-hooks.AislopCi"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.AislopCi.Initializer"></a>

```typescript
import { AislopCi } from '@thoroc/projen-typescript-git-hooks'

const aislopCi: AislopCi = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopCi.property.failBelow">failBelow</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopCi.property.format">format</a></code> | <code>string</code> | *No description.* |

---

##### `failBelow`<sup>Optional</sup> <a name="failBelow" id="@thoroc/projen-typescript-git-hooks.AislopCi.property.failBelow"></a>

```typescript
public readonly failBelow: number;
```

- *Type:* number

---

##### `format`<sup>Optional</sup> <a name="format" id="@thoroc/projen-typescript-git-hooks.AislopCi.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

### AislopConfigOptions <a name="AislopConfigOptions" id="@thoroc/projen-typescript-git-hooks.AislopConfigOptions"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.AislopConfigOptions.Initializer"></a>

```typescript
import { AislopConfigOptions } from '@thoroc/projen-typescript-git-hooks'

const aislopConfigOptions: AislopConfigOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopConfigOptions.property.ci">ci</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.AislopCi">AislopCi</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopConfigOptions.property.engines">engines</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.AislopEngines">AislopEngines</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopConfigOptions.property.extends">extends</a></code> | <code>string \| string[]</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopConfigOptions.property.maxFileLoc">maxFileLoc</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopConfigOptions.property.maxFunctionLoc">maxFunctionLoc</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopConfigOptions.property.maxNesting">maxNesting</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopConfigOptions.property.maxParams">maxParams</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopConfigOptions.property.scoring">scoring</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.AislopScoring">AislopScoring</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopConfigOptions.property.security">security</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.AislopSecurityOptions">AislopSecurityOptions</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopConfigOptions.property.telemetry">telemetry</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.AislopTelemetry">AislopTelemetry</a></code> | *No description.* |

---

##### `ci`<sup>Optional</sup> <a name="ci" id="@thoroc/projen-typescript-git-hooks.AislopConfigOptions.property.ci"></a>

```typescript
public readonly ci: AislopCi;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.AislopCi">AislopCi</a>

---

##### `engines`<sup>Optional</sup> <a name="engines" id="@thoroc/projen-typescript-git-hooks.AislopConfigOptions.property.engines"></a>

```typescript
public readonly engines: AislopEngines;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.AislopEngines">AislopEngines</a>

---

##### `extends`<sup>Optional</sup> <a name="extends" id="@thoroc/projen-typescript-git-hooks.AislopConfigOptions.property.extends"></a>

```typescript
public readonly extends: string | string[];
```

- *Type:* string | string[]

---

##### `maxFileLoc`<sup>Optional</sup> <a name="maxFileLoc" id="@thoroc/projen-typescript-git-hooks.AislopConfigOptions.property.maxFileLoc"></a>

```typescript
public readonly maxFileLoc: number;
```

- *Type:* number

---

##### `maxFunctionLoc`<sup>Optional</sup> <a name="maxFunctionLoc" id="@thoroc/projen-typescript-git-hooks.AislopConfigOptions.property.maxFunctionLoc"></a>

```typescript
public readonly maxFunctionLoc: number;
```

- *Type:* number

---

##### `maxNesting`<sup>Optional</sup> <a name="maxNesting" id="@thoroc/projen-typescript-git-hooks.AislopConfigOptions.property.maxNesting"></a>

```typescript
public readonly maxNesting: number;
```

- *Type:* number

---

##### `maxParams`<sup>Optional</sup> <a name="maxParams" id="@thoroc/projen-typescript-git-hooks.AislopConfigOptions.property.maxParams"></a>

```typescript
public readonly maxParams: number;
```

- *Type:* number

---

##### `scoring`<sup>Optional</sup> <a name="scoring" id="@thoroc/projen-typescript-git-hooks.AislopConfigOptions.property.scoring"></a>

```typescript
public readonly scoring: AislopScoring;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.AislopScoring">AislopScoring</a>

---

##### `security`<sup>Optional</sup> <a name="security" id="@thoroc/projen-typescript-git-hooks.AislopConfigOptions.property.security"></a>

```typescript
public readonly security: AislopSecurityOptions;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.AislopSecurityOptions">AislopSecurityOptions</a>

---

##### `telemetry`<sup>Optional</sup> <a name="telemetry" id="@thoroc/projen-typescript-git-hooks.AislopConfigOptions.property.telemetry"></a>

```typescript
public readonly telemetry: AislopTelemetry;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.AislopTelemetry">AislopTelemetry</a>

---

### AislopEngines <a name="AislopEngines" id="@thoroc/projen-typescript-git-hooks.AislopEngines"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.AislopEngines.Initializer"></a>

```typescript
import { AislopEngines } from '@thoroc/projen-typescript-git-hooks'

const aislopEngines: AislopEngines = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopEngines.property.aiSlop">aiSlop</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopEngines.property.architecture">architecture</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopEngines.property.codeQuality">codeQuality</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopEngines.property.format">format</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopEngines.property.lint">lint</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopEngines.property.security">security</a></code> | <code>boolean</code> | *No description.* |

---

##### `aiSlop`<sup>Optional</sup> <a name="aiSlop" id="@thoroc/projen-typescript-git-hooks.AislopEngines.property.aiSlop"></a>

```typescript
public readonly aiSlop: boolean;
```

- *Type:* boolean

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@thoroc/projen-typescript-git-hooks.AislopEngines.property.architecture"></a>

```typescript
public readonly architecture: boolean;
```

- *Type:* boolean

---

##### `codeQuality`<sup>Optional</sup> <a name="codeQuality" id="@thoroc/projen-typescript-git-hooks.AislopEngines.property.codeQuality"></a>

```typescript
public readonly codeQuality: boolean;
```

- *Type:* boolean

---

##### `format`<sup>Optional</sup> <a name="format" id="@thoroc/projen-typescript-git-hooks.AislopEngines.property.format"></a>

```typescript
public readonly format: boolean;
```

- *Type:* boolean

---

##### `lint`<sup>Optional</sup> <a name="lint" id="@thoroc/projen-typescript-git-hooks.AislopEngines.property.lint"></a>

```typescript
public readonly lint: boolean;
```

- *Type:* boolean

---

##### `security`<sup>Optional</sup> <a name="security" id="@thoroc/projen-typescript-git-hooks.AislopEngines.property.security"></a>

```typescript
public readonly security: boolean;
```

- *Type:* boolean

---

### AislopMcpServerOptions <a name="AislopMcpServerOptions" id="@thoroc/projen-typescript-git-hooks.AislopMcpServerOptions"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.AislopMcpServerOptions.Initializer"></a>

```typescript
import { AislopMcpServerOptions } from '@thoroc/projen-typescript-git-hooks'

const aislopMcpServerOptions: AislopMcpServerOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopMcpServerOptions.property.config">config</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.AislopConfigOptions">AislopConfigOptions</a></code> | *No description.* |

---

##### `config`<sup>Optional</sup> <a name="config" id="@thoroc/projen-typescript-git-hooks.AislopMcpServerOptions.property.config"></a>

```typescript
public readonly config: AislopConfigOptions;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.AislopConfigOptions">AislopConfigOptions</a>

---

### AislopScoring <a name="AislopScoring" id="@thoroc/projen-typescript-git-hooks.AislopScoring"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.AislopScoring.Initializer"></a>

```typescript
import { AislopScoring } from '@thoroc/projen-typescript-git-hooks'

const aislopScoring: AislopScoring = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopScoring.property.maxPerRule">maxPerRule</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopScoring.property.smoothing">smoothing</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopScoring.property.thresholds">thresholds</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.AislopScoringThresholds">AislopScoringThresholds</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopScoring.property.weights">weights</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.AislopScoringWeights">AislopScoringWeights</a></code> | *No description.* |

---

##### `maxPerRule`<sup>Optional</sup> <a name="maxPerRule" id="@thoroc/projen-typescript-git-hooks.AislopScoring.property.maxPerRule"></a>

```typescript
public readonly maxPerRule: number;
```

- *Type:* number

---

##### `smoothing`<sup>Optional</sup> <a name="smoothing" id="@thoroc/projen-typescript-git-hooks.AislopScoring.property.smoothing"></a>

```typescript
public readonly smoothing: number;
```

- *Type:* number

---

##### `thresholds`<sup>Optional</sup> <a name="thresholds" id="@thoroc/projen-typescript-git-hooks.AislopScoring.property.thresholds"></a>

```typescript
public readonly thresholds: AislopScoringThresholds;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.AislopScoringThresholds">AislopScoringThresholds</a>

---

##### `weights`<sup>Optional</sup> <a name="weights" id="@thoroc/projen-typescript-git-hooks.AislopScoring.property.weights"></a>

```typescript
public readonly weights: AislopScoringWeights;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.AislopScoringWeights">AislopScoringWeights</a>

---

### AislopScoringThresholds <a name="AislopScoringThresholds" id="@thoroc/projen-typescript-git-hooks.AislopScoringThresholds"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.AislopScoringThresholds.Initializer"></a>

```typescript
import { AislopScoringThresholds } from '@thoroc/projen-typescript-git-hooks'

const aislopScoringThresholds: AislopScoringThresholds = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopScoringThresholds.property.good">good</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopScoringThresholds.property.ok">ok</a></code> | <code>number</code> | *No description.* |

---

##### `good`<sup>Optional</sup> <a name="good" id="@thoroc/projen-typescript-git-hooks.AislopScoringThresholds.property.good"></a>

```typescript
public readonly good: number;
```

- *Type:* number

---

##### `ok`<sup>Optional</sup> <a name="ok" id="@thoroc/projen-typescript-git-hooks.AislopScoringThresholds.property.ok"></a>

```typescript
public readonly ok: number;
```

- *Type:* number

---

### AislopScoringWeights <a name="AislopScoringWeights" id="@thoroc/projen-typescript-git-hooks.AislopScoringWeights"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.AislopScoringWeights.Initializer"></a>

```typescript
import { AislopScoringWeights } from '@thoroc/projen-typescript-git-hooks'

const aislopScoringWeights: AislopScoringWeights = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopScoringWeights.property.aiSlop">aiSlop</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopScoringWeights.property.architecture">architecture</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopScoringWeights.property.codeQuality">codeQuality</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopScoringWeights.property.format">format</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopScoringWeights.property.lint">lint</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopScoringWeights.property.security">security</a></code> | <code>number</code> | *No description.* |

---

##### `aiSlop`<sup>Optional</sup> <a name="aiSlop" id="@thoroc/projen-typescript-git-hooks.AislopScoringWeights.property.aiSlop"></a>

```typescript
public readonly aiSlop: number;
```

- *Type:* number

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@thoroc/projen-typescript-git-hooks.AislopScoringWeights.property.architecture"></a>

```typescript
public readonly architecture: number;
```

- *Type:* number

---

##### `codeQuality`<sup>Optional</sup> <a name="codeQuality" id="@thoroc/projen-typescript-git-hooks.AislopScoringWeights.property.codeQuality"></a>

```typescript
public readonly codeQuality: number;
```

- *Type:* number

---

##### `format`<sup>Optional</sup> <a name="format" id="@thoroc/projen-typescript-git-hooks.AislopScoringWeights.property.format"></a>

```typescript
public readonly format: number;
```

- *Type:* number

---

##### `lint`<sup>Optional</sup> <a name="lint" id="@thoroc/projen-typescript-git-hooks.AislopScoringWeights.property.lint"></a>

```typescript
public readonly lint: number;
```

- *Type:* number

---

##### `security`<sup>Optional</sup> <a name="security" id="@thoroc/projen-typescript-git-hooks.AislopScoringWeights.property.security"></a>

```typescript
public readonly security: number;
```

- *Type:* number

---

### AislopSecurityOptions <a name="AislopSecurityOptions" id="@thoroc/projen-typescript-git-hooks.AislopSecurityOptions"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.AislopSecurityOptions.Initializer"></a>

```typescript
import { AislopSecurityOptions } from '@thoroc/projen-typescript-git-hooks'

const aislopSecurityOptions: AislopSecurityOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopSecurityOptions.property.audit">audit</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopSecurityOptions.property.auditTimeout">auditTimeout</a></code> | <code>number</code> | *No description.* |

---

##### `audit`<sup>Optional</sup> <a name="audit" id="@thoroc/projen-typescript-git-hooks.AislopSecurityOptions.property.audit"></a>

```typescript
public readonly audit: boolean;
```

- *Type:* boolean

---

##### `auditTimeout`<sup>Optional</sup> <a name="auditTimeout" id="@thoroc/projen-typescript-git-hooks.AislopSecurityOptions.property.auditTimeout"></a>

```typescript
public readonly auditTimeout: number;
```

- *Type:* number

---

### AislopTelemetry <a name="AislopTelemetry" id="@thoroc/projen-typescript-git-hooks.AislopTelemetry"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.AislopTelemetry.Initializer"></a>

```typescript
import { AislopTelemetry } from '@thoroc/projen-typescript-git-hooks'

const aislopTelemetry: AislopTelemetry = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.AislopTelemetry.property.enabled">enabled</a></code> | <code>boolean</code> | *No description.* |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@thoroc/projen-typescript-git-hooks.AislopTelemetry.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

---

### ClaudeCodeHookEntry <a name="ClaudeCodeHookEntry" id="@thoroc/projen-typescript-git-hooks.ClaudeCodeHookEntry"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.ClaudeCodeHookEntry.Initializer"></a>

```typescript
import { ClaudeCodeHookEntry } from '@thoroc/projen-typescript-git-hooks'

const claudeCodeHookEntry: ClaudeCodeHookEntry = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ClaudeCodeHookEntry.property.command">command</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ClaudeCodeHookEntry.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ClaudeCodeHookEntry.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |

---

##### `command`<sup>Required</sup> <a name="command" id="@thoroc/projen-typescript-git-hooks.ClaudeCodeHookEntry.property.command"></a>

```typescript
public readonly command: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@thoroc/projen-typescript-git-hooks.ClaudeCodeHookEntry.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@thoroc/projen-typescript-git-hooks.ClaudeCodeHookEntry.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

### ClaudeCodeHookGroup <a name="ClaudeCodeHookGroup" id="@thoroc/projen-typescript-git-hooks.ClaudeCodeHookGroup"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.ClaudeCodeHookGroup.Initializer"></a>

```typescript
import { ClaudeCodeHookGroup } from '@thoroc/projen-typescript-git-hooks'

const claudeCodeHookGroup: ClaudeCodeHookGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ClaudeCodeHookGroup.property.hooks">hooks</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.ClaudeCodeHookEntry">ClaudeCodeHookEntry</a>[]</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ClaudeCodeHookGroup.property.matcher">matcher</a></code> | <code>string</code> | *No description.* |

---

##### `hooks`<sup>Required</sup> <a name="hooks" id="@thoroc/projen-typescript-git-hooks.ClaudeCodeHookGroup.property.hooks"></a>

```typescript
public readonly hooks: ClaudeCodeHookEntry[];
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.ClaudeCodeHookEntry">ClaudeCodeHookEntry</a>[]

---

##### `matcher`<sup>Optional</sup> <a name="matcher" id="@thoroc/projen-typescript-git-hooks.ClaudeCodeHookGroup.property.matcher"></a>

```typescript
public readonly matcher: string;
```

- *Type:* string

---

### ClaudeCodeOptions <a name="ClaudeCodeOptions" id="@thoroc/projen-typescript-git-hooks.ClaudeCodeOptions"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.ClaudeCodeOptions.Initializer"></a>

```typescript
import { ClaudeCodeOptions } from '@thoroc/projen-typescript-git-hooks'

const claudeCodeOptions: ClaudeCodeOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ClaudeCodeOptions.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ClaudeCodeOptions.property.hooks">hooks</a></code> | <code>{[ key: string ]: <a href="#@thoroc/projen-typescript-git-hooks.ClaudeCodeHookGroup">ClaudeCodeHookGroup</a>[]}</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ClaudeCodeOptions.property.mcpServers">mcpServers</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.McpServer">McpServer</a>[]</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ClaudeCodeOptions.property.permissions">permissions</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.ClaudeCodePermissions">ClaudeCodePermissions</a></code> | *No description.* |

---

##### `env`<sup>Optional</sup> <a name="env" id="@thoroc/projen-typescript-git-hooks.ClaudeCodeOptions.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `hooks`<sup>Optional</sup> <a name="hooks" id="@thoroc/projen-typescript-git-hooks.ClaudeCodeOptions.property.hooks"></a>

```typescript
public readonly hooks: {[ key: string ]: ClaudeCodeHookGroup[]};
```

- *Type:* {[ key: string ]: <a href="#@thoroc/projen-typescript-git-hooks.ClaudeCodeHookGroup">ClaudeCodeHookGroup</a>[]}

---

##### `mcpServers`<sup>Optional</sup> <a name="mcpServers" id="@thoroc/projen-typescript-git-hooks.ClaudeCodeOptions.property.mcpServers"></a>

```typescript
public readonly mcpServers: McpServer[];
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.McpServer">McpServer</a>[]

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@thoroc/projen-typescript-git-hooks.ClaudeCodeOptions.property.permissions"></a>

```typescript
public readonly permissions: ClaudeCodePermissions;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.ClaudeCodePermissions">ClaudeCodePermissions</a>

---

### ClaudeCodePermissions <a name="ClaudeCodePermissions" id="@thoroc/projen-typescript-git-hooks.ClaudeCodePermissions"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.ClaudeCodePermissions.Initializer"></a>

```typescript
import { ClaudeCodePermissions } from '@thoroc/projen-typescript-git-hooks'

const claudeCodePermissions: ClaudeCodePermissions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ClaudeCodePermissions.property.allow">allow</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ClaudeCodePermissions.property.deny">deny</a></code> | <code>string[]</code> | *No description.* |

---

##### `allow`<sup>Optional</sup> <a name="allow" id="@thoroc/projen-typescript-git-hooks.ClaudeCodePermissions.property.allow"></a>

```typescript
public readonly allow: string[];
```

- *Type:* string[]

---

##### `deny`<sup>Optional</sup> <a name="deny" id="@thoroc/projen-typescript-git-hooks.ClaudeCodePermissions.property.deny"></a>

```typescript
public readonly deny: string[];
```

- *Type:* string[]

---

### CodeOfConductOptions <a name="CodeOfConductOptions" id="@thoroc/projen-typescript-git-hooks.CodeOfConductOptions"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.CodeOfConductOptions.Initializer"></a>

```typescript
import { CodeOfConductOptions } from '@thoroc/projen-typescript-git-hooks'

const codeOfConductOptions: CodeOfConductOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CodeOfConductOptions.property.author">author</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CodeOfConductOptions.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `author`<sup>Required</sup> <a name="author" id="@thoroc/projen-typescript-git-hooks.CodeOfConductOptions.property.author"></a>

```typescript
public readonly author: string;
```

- *Type:* string

---

##### `version`<sup>Optional</sup> <a name="version" id="@thoroc/projen-typescript-git-hooks.CodeOfConductOptions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

### CommitizenConfig <a name="CommitizenConfig" id="@thoroc/projen-typescript-git-hooks.CommitizenConfig"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.CommitizenConfig.Initializer"></a>

```typescript
import { CommitizenConfig } from '@thoroc/projen-typescript-git-hooks'

const commitizenConfig: CommitizenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CommitizenConfig.property.path">path</a></code> | <code>string</code> | *No description.* |

---

##### `path`<sup>Required</sup> <a name="path" id="@thoroc/projen-typescript-git-hooks.CommitizenConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

### CommitizenOptions <a name="CommitizenOptions" id="@thoroc/projen-typescript-git-hooks.CommitizenOptions"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.CommitizenOptions.Initializer"></a>

```typescript
import { CommitizenOptions } from '@thoroc/projen-typescript-git-hooks'

const commitizenOptions: CommitizenOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CommitizenOptions.property.json">json</a></code> | <code>boolean</code> | *No description.* |

---

##### `json`<sup>Optional</sup> <a name="json" id="@thoroc/projen-typescript-git-hooks.CommitizenOptions.property.json"></a>

```typescript
public readonly json: boolean;
```

- *Type:* boolean

---

### EditorConfigOptions <a name="EditorConfigOptions" id="@thoroc/projen-typescript-git-hooks.EditorConfigOptions"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.EditorConfigOptions.Initializer"></a>

```typescript
import { EditorConfigOptions } from '@thoroc/projen-typescript-git-hooks'

const editorConfigOptions: EditorConfigOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfigOptions.property.sections">sections</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfigSection">EditorConfigSection</a>[]</code> | *No description.* |

---

##### `sections`<sup>Required</sup> <a name="sections" id="@thoroc/projen-typescript-git-hooks.EditorConfigOptions.property.sections"></a>

```typescript
public readonly sections: EditorConfigSection[];
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.EditorConfigSection">EditorConfigSection</a>[]

---

### EditorConfigParamsOptions <a name="EditorConfigParamsOptions" id="@thoroc/projen-typescript-git-hooks.EditorConfigParamsOptions"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.EditorConfigParamsOptions.Initializer"></a>

```typescript
import { EditorConfigParamsOptions } from '@thoroc/projen-typescript-git-hooks'

const editorConfigParamsOptions: EditorConfigParamsOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfigParamsOptions.property.charset">charset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfigParamsOptions.property.endOfLine">endOfLine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfigParamsOptions.property.indentSize">indentSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfigParamsOptions.property.indentStyle">indentStyle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfigParamsOptions.property.insertFinalNewline">insertFinalNewline</a></code> | <code>boolean</code> | *No description.* |

---

##### `charset`<sup>Optional</sup> <a name="charset" id="@thoroc/projen-typescript-git-hooks.EditorConfigParamsOptions.property.charset"></a>

```typescript
public readonly charset: string;
```

- *Type:* string

---

##### `endOfLine`<sup>Optional</sup> <a name="endOfLine" id="@thoroc/projen-typescript-git-hooks.EditorConfigParamsOptions.property.endOfLine"></a>

```typescript
public readonly endOfLine: string;
```

- *Type:* string

---

##### `indentSize`<sup>Optional</sup> <a name="indentSize" id="@thoroc/projen-typescript-git-hooks.EditorConfigParamsOptions.property.indentSize"></a>

```typescript
public readonly indentSize: number;
```

- *Type:* number

---

##### `indentStyle`<sup>Optional</sup> <a name="indentStyle" id="@thoroc/projen-typescript-git-hooks.EditorConfigParamsOptions.property.indentStyle"></a>

```typescript
public readonly indentStyle: string;
```

- *Type:* string

---

##### `insertFinalNewline`<sup>Optional</sup> <a name="insertFinalNewline" id="@thoroc/projen-typescript-git-hooks.EditorConfigParamsOptions.property.insertFinalNewline"></a>

```typescript
public readonly insertFinalNewline: boolean;
```

- *Type:* boolean

---

### EditorConfigSectionOptions <a name="EditorConfigSectionOptions" id="@thoroc/projen-typescript-git-hooks.EditorConfigSectionOptions"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.EditorConfigSectionOptions.Initializer"></a>

```typescript
import { EditorConfigSectionOptions } from '@thoroc/projen-typescript-git-hooks'

const editorConfigSectionOptions: EditorConfigSectionOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfigSectionOptions.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfigSectionOptions.property.params">params</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfigParamsOptions">EditorConfigParamsOptions</a></code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@thoroc/projen-typescript-git-hooks.EditorConfigSectionOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `params`<sup>Required</sup> <a name="params" id="@thoroc/projen-typescript-git-hooks.EditorConfigSectionOptions.property.params"></a>

```typescript
public readonly params: EditorConfigParamsOptions;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.EditorConfigParamsOptions">EditorConfigParamsOptions</a>

---

### GeminiCliHookEntry <a name="GeminiCliHookEntry" id="@thoroc/projen-typescript-git-hooks.GeminiCliHookEntry"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.GeminiCliHookEntry.Initializer"></a>

```typescript
import { GeminiCliHookEntry } from '@thoroc/projen-typescript-git-hooks'

const geminiCliHookEntry: GeminiCliHookEntry = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GeminiCliHookEntry.property.command">command</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GeminiCliHookEntry.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `command`<sup>Required</sup> <a name="command" id="@thoroc/projen-typescript-git-hooks.GeminiCliHookEntry.property.command"></a>

```typescript
public readonly command: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@thoroc/projen-typescript-git-hooks.GeminiCliHookEntry.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

### GeminiCliHookGroup <a name="GeminiCliHookGroup" id="@thoroc/projen-typescript-git-hooks.GeminiCliHookGroup"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.GeminiCliHookGroup.Initializer"></a>

```typescript
import { GeminiCliHookGroup } from '@thoroc/projen-typescript-git-hooks'

const geminiCliHookGroup: GeminiCliHookGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GeminiCliHookGroup.property.hooks">hooks</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.GeminiCliHookEntry">GeminiCliHookEntry</a>[]</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GeminiCliHookGroup.property.matcher">matcher</a></code> | <code>string</code> | *No description.* |

---

##### `hooks`<sup>Required</sup> <a name="hooks" id="@thoroc/projen-typescript-git-hooks.GeminiCliHookGroup.property.hooks"></a>

```typescript
public readonly hooks: GeminiCliHookEntry[];
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.GeminiCliHookEntry">GeminiCliHookEntry</a>[]

---

##### `matcher`<sup>Optional</sup> <a name="matcher" id="@thoroc/projen-typescript-git-hooks.GeminiCliHookGroup.property.matcher"></a>

```typescript
public readonly matcher: string;
```

- *Type:* string

---

### GeminiCliOptions <a name="GeminiCliOptions" id="@thoroc/projen-typescript-git-hooks.GeminiCliOptions"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.GeminiCliOptions.Initializer"></a>

```typescript
import { GeminiCliOptions } from '@thoroc/projen-typescript-git-hooks'

const geminiCliOptions: GeminiCliOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GeminiCliOptions.property.contextFileNames">contextFileNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GeminiCliOptions.property.hooks">hooks</a></code> | <code>{[ key: string ]: <a href="#@thoroc/projen-typescript-git-hooks.GeminiCliHookGroup">GeminiCliHookGroup</a>[]}</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GeminiCliOptions.property.mcpServers">mcpServers</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.McpServer">McpServer</a>[]</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GeminiCliOptions.property.model">model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GeminiCliOptions.property.theme">theme</a></code> | <code>string</code> | *No description.* |

---

##### `contextFileNames`<sup>Optional</sup> <a name="contextFileNames" id="@thoroc/projen-typescript-git-hooks.GeminiCliOptions.property.contextFileNames"></a>

```typescript
public readonly contextFileNames: string[];
```

- *Type:* string[]

---

##### `hooks`<sup>Optional</sup> <a name="hooks" id="@thoroc/projen-typescript-git-hooks.GeminiCliOptions.property.hooks"></a>

```typescript
public readonly hooks: {[ key: string ]: GeminiCliHookGroup[]};
```

- *Type:* {[ key: string ]: <a href="#@thoroc/projen-typescript-git-hooks.GeminiCliHookGroup">GeminiCliHookGroup</a>[]}

---

##### `mcpServers`<sup>Optional</sup> <a name="mcpServers" id="@thoroc/projen-typescript-git-hooks.GeminiCliOptions.property.mcpServers"></a>

```typescript
public readonly mcpServers: McpServer[];
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.McpServer">McpServer</a>[]

---

##### `model`<sup>Optional</sup> <a name="model" id="@thoroc/projen-typescript-git-hooks.GeminiCliOptions.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

---

##### `theme`<sup>Optional</sup> <a name="theme" id="@thoroc/projen-typescript-git-hooks.GeminiCliOptions.property.theme"></a>

```typescript
public readonly theme: string;
```

- *Type:* string

---

### GitHooksAction <a name="GitHooksAction" id="@thoroc/projen-typescript-git-hooks.GitHooksAction"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.GitHooksAction.Initializer"></a>

```typescript
import { GitHooksAction } from '@thoroc/projen-typescript-git-hooks'

const gitHooksAction: GitHooksAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksAction.property.commands">commands</a></code> | <code>string \| string[]</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksAction.property.githookType">githookType</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.GitClientHook">GitClientHook</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksAction.property.glob">glob</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksAction.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `commands`<sup>Required</sup> <a name="commands" id="@thoroc/projen-typescript-git-hooks.GitHooksAction.property.commands"></a>

```typescript
public readonly commands: string | string[];
```

- *Type:* string | string[]

---

##### `githookType`<sup>Required</sup> <a name="githookType" id="@thoroc/projen-typescript-git-hooks.GitHooksAction.property.githookType"></a>

```typescript
public readonly githookType: GitClientHook;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.GitClientHook">GitClientHook</a>

---

##### `glob`<sup>Required</sup> <a name="glob" id="@thoroc/projen-typescript-git-hooks.GitHooksAction.property.glob"></a>

```typescript
public readonly glob: string;
```

- *Type:* string

---

##### `name`<sup>Optional</sup> <a name="name" id="@thoroc/projen-typescript-git-hooks.GitHooksAction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

### GitHooksEnabledProjectOptions <a name="GitHooksEnabledProjectOptions" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.Initializer"></a>

```typescript
import { GitHooksEnabledProjectOptions } from '@thoroc/projen-typescript-git-hooks'

const gitHooksEnabledProjectOptions: GitHooksEnabledProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Is the author an organization. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.authorUrl">authorUrl</a></code> | <code>string</code> | Author's URL / Website. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.autoDetectBin">autoDetectBin</a></code> | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | Binary programs vended with your module. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.bugsEmail">bugsEmail</a></code> | <code>string</code> | The email address to which issues should be reported. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.bugsUrl">bugsUrl</a></code> | <code>string</code> | The url to your project's issue tracker. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | List of dependencies to bundle into this module. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.bunVersion">bunVersion</a></code> | <code>string</code> | The version of Bun to use if using Bun as a package manager. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code>projen.javascript.CodeArtifactOptions</code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | The maximum node version supported by this package. Most projects should not use this option. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. Most projects should not use this option. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.npmAccess">npmAccess</a></code> | <code>projen.javascript.NpmAccess</code> | Access level of the npm package. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.npmProvenance">npmProvenance</a></code> | <code>boolean</code> | Should provenance statements be generated when the package is published. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.npmRegistry">npmRegistry</a></code> | <code>string</code> | The host name of the npm registry to publish to. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.npmTrustedPublishing">npmTrustedPublishing</a></code> | <code>boolean</code> | Use trusted publishing for publishing to npmjs.com Needs to be pre-configured on npm.js to work. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The Node Package Manager used to execute scripts. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.packageName">packageName</a></code> | <code>string</code> | The "name" in package.json. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.peerDependencyOptions">peerDependencyOptions</a></code> | <code>projen.javascript.PeerDependencyOptions</code> | Options for `peerDeps`. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Peer dependencies for this module. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | The version of PNPM to use if using PNPM as a package manager. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.repository">repository</a></code> | <code>string</code> | The repository is the location where the actual code for your package lives. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.repositoryDirectory">repositoryDirectory</a></code> | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code>projen.javascript.ScopedPackagesOptions[]</code> | Options for privately hosted scoped packages. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.scripts">scripts</a></code> | <code>{[ key: string ]: string}</code> | npm scripts to include. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.stability">stability</a></code> | <code>string</code> | Package's Stability. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.yarnBerryOptions">yarnBerryOptions</a></code> | <code>projen.javascript.YarnBerryOptions</code> | Options for Yarn Berry. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.bumpPackage">bumpPackage</a></code> | <code>string</code> | The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code> | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.nextVersionCommand">nextVersionCommand</a></code> | <code>string</code> | A shell command to control the next version to release. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.npmDistTag">npmDistTag</a></code> | <code>string</code> | The npmDistTag to use when publishing from the default branch. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.releasableCommits">releasableCommits</a></code> | <code>projen.ReleasableCommits</code> | Find commits that should be considered releasable Used to decide if a release is required. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.releaseEnvironment">releaseEnvironment</a></code> | <code>string</code> | The GitHub Actions environment used for the release. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.releaseEveryCommit">releaseEveryCommit</a></code> | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.releaseSchedule">releaseSchedule</a></code> | <code>string</code> | CRON schedule to trigger new releases. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.releaseWorkflowEnv">releaseWorkflowEnv</a></code> | <code>{[ key: string ]: string}</code> | Build environment variables for release workflows. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with commit-and-tag-version package. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.workflowRunsOnGroup">workflowRunsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | The name of the main release branch. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.auditDeps">auditDeps</a></code> | <code>boolean</code> | Run security audit on dependencies. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.auditDepsOptions">auditDepsOptions</a></code> | <code>projen.javascript.AuditOptions</code> | Security audit options. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code> | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configured). |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.biome">biome</a></code> | <code>boolean</code> | Setup Biome. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.biomeOptions">biomeOptions</a></code> | <code>projen.javascript.BiomeOptions</code> | Biome options. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.buildWorkflowOptions">buildWorkflowOptions</a></code> | <code>projen.javascript.BuildWorkflowOptions</code> | Options for PR build workflow. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.buildWorkflowTriggers">buildWorkflowTriggers</a></code> | <code>projen.github.workflows.Triggers</code> | Build workflow triggers. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.bundlerOptions">bundlerOptions</a></code> | <code>projen.javascript.BundlerOptions</code> | Options for `Bundler`. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.checkLicenses">checkLicenses</a></code> | <code>projen.javascript.LicenseCheckerOptions</code> | Configure which licenses should be deemed acceptable for use by dependencies. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.codeCov">codeCov</a></code> | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v5 By default, OIDC auth is used. Alternatively a token can be provided via `codeCovTokenSecret`. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code> | <code>string</code> | Define the secret name for a specified https://codecov.io/ token. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | License copyright owner. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | The copyright years to put in the LICENSE file. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.dependabot">dependabot</a></code> | <code>boolean</code> | Use dependabot to handle dependency upgrades. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.dependabotOptions">dependabotOptions</a></code> | <code>projen.github.DependabotOptions</code> | Options for dependabot. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.depsUpgrade">depsUpgrade</a></code> | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.depsUpgradeOptions">depsUpgradeOptions</a></code> | <code>projen.javascript.UpgradeDependenciesOptions</code> | Options for `UpgradeDependencies`. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.gitignore">gitignore</a></code> | <code>string[]</code> | Additional entries to .gitignore. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.jest">jest</a></code> | <code>boolean</code> | Setup jest unit tests. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.jestOptions">jestOptions</a></code> | <code>projen.javascript.JestOptions</code> | Jest options. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.mutableBuild">mutableBuild</a></code> | <code>boolean</code> | Automatically update files modified during builds to pull-request branches. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.npmignore">npmignore</a></code> | <code>string[]</code> | Additional entries to .npmignore. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.npmignoreEnabled">npmignoreEnabled</a></code> | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.npmIgnoreOptions">npmIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .npmignore file. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.package">package</a></code> | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.prettier">prettier</a></code> | <code>boolean</code> | Setup prettier. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.prettierOptions">prettierOptions</a></code> | <code>projen.javascript.PrettierOptions</code> | Prettier options. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.projenDevDependency">projenDevDependency</a></code> | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options for .projenrc.js. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.projenVersion">projenVersion</a></code> | <code>string</code> | Version of projen to install. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.pullRequestTemplate">pullRequestTemplate</a></code> | <code>boolean</code> | Include a GitHub pull request template. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code> | The contents of the pull request template. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.release">release</a></code> | <code>boolean</code> | Add release management to this project. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.releaseToNpm">releaseToNpm</a></code> | <code>boolean</code> | Automatically release to npm when new versions are introduced. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.releaseWorkflow">releaseWorkflow</a></code> | <code>boolean</code> | DEPRECATED: renamed to `release`. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Workflow steps to use in order to bootstrap this repo. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.workflowGitIdentity">workflowGitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use in workflows. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | The node version used in GitHub Actions workflows. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.workflowPackageCache">workflowPackageCache</a></code> | <code>boolean</code> | Enable Node.js package cache in GitHub workflows. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.disableTsconfig">disableTsconfig</a></code> | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.disableTsconfigDev">disableTsconfigDev</a></code> | <code>boolean</code> | Do not generate a `tsconfig.dev.json` file. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.docgen">docgen</a></code> | <code>boolean</code> | Docgen by Typedoc. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | Docs directory. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.entrypointTypes">entrypointTypes</a></code> | <code>string</code> | The .d.ts file that includes the type declarations for this module. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.eslint">eslint</a></code> | <code>boolean</code> | Setup eslint. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.eslintOptions">eslintOptions</a></code> | <code>projen.javascript.EslintOptions</code> | Eslint options. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.libdir">libdir</a></code> | <code>string</code> | Typescript  artifacts output directory. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`). |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcOptions</code> | Options for .projenrc.ts. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.sampleCode">sampleCode</a></code> | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.srcdir">srcdir</a></code> | <code>string</code> | Typescript sources directory. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.testdir">testdir</a></code> | <code>string</code> | Jest tests directory. Tests files should be named `xxx.test.ts`. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom TSConfig. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom tsconfig options for the development tsconfig.json file (used for testing). |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.tsconfigDevFile">tsconfigDevFile</a></code> | <code>string</code> | The name of the development tsconfig.json file. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.tsJestOptions">tsJestOptions</a></code> | <code>projen.typescript.TsJestOptions</code> | Options for ts-jest. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.typescriptVersion">typescriptVersion</a></code> | <code>string</code> | TypeScript version to use. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.debug">debug</a></code> | <code>boolean</code> | Printing out debug statement. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.editorConfig">editorConfig</a></code> | <code>boolean</code> | Enable editorConfig. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.editorConfigOptions">editorConfigOptions</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfigOptions">EditorConfigOptions</a></code> | EditorConfig options. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.gitHooksManager">gitHooksManager</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksManagerType">GitHooksManagerType</a></code> | Setup gitHooksManager. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.gitHooksManagerOptions">gitHooksManagerOptions</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.HuskyOptions">HuskyOptions</a> \| <a href="#@thoroc/projen-typescript-git-hooks.LefthookOptions">LefthookOptions</a></code> | gitHooksManagerEnabled options. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.prettierSortImportsOptions">prettierSortImportsOptions</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.PrettierSortImportsOptions">PrettierSortImportsOptions</a></code> | Enable @trivago/prettier-plugin-sort-imports and configure it. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.vitest">vitest</a></code> | <code>boolean</code> | Enable Vitest instead of Jest. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.vitestOptions">vitestOptions</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.VitestOptions">VitestOptions</a></code> | Vitest options. |

---

##### `name`<sup>Required</sup> <a name="name" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
subprojects.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="github" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.projenTokenSecret"></a>

- *Deprecated:* use `projenCredentials`

```typescript
public readonly projenTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.

This token needs to have the `repo`, `workflows`
and `packages` scope.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.readme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- *Type:* projen.SampleReadmeProps
- *Default:* { filename: 'README.md', contents: '# replace this' }

The README setup.

---

*Example*

```typescript
"{ filename: 'readme.md', contents: '# title' }"
```


##### `stale`<sup>Optional</sup> <a name="stale" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Is the author an organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* string

Author's URL / Website.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- *Type:* string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- *Type:* string

The url to your project's issue tracker.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* string[]

List of dependencies to bundle into this module.

These modules will be
added both to the `dependencies` section and `bundledDependencies` section of
your `package.json`.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `bunVersion`<sup>Optional</sup> <a name="bunVersion" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.bunVersion"></a>

```typescript
public readonly bunVersion: string;
```

- *Type:* string
- *Default:* "latest"

The version of Bun to use if using Bun as a package manager.

---

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* projen.javascript.CodeArtifactOptions
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `deps`<sup>Optional</sup> <a name="deps" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]
- *Default:* []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

*Example*

```typescript
[ 'express', 'lodash', 'foo@^2' ]
```


##### `description`<sup>Optional</sup> <a name="description" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]
- *Default:* []

Build dependencies for this module.

These dependencies will only be
available in your build environment but will not be fetched when this
module is consumed.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

*Example*

```typescript
[ 'typescript', '@types/express' ]
```


##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

Package's Homepage / Website.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keywords to include in `package.json`.

---

##### `license`<sup>Optional</sup> <a name="license" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates if a license should be added.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string
- *Default:* no maximum version is enforced

The maximum node version supported by this package. Most projects should not use this option.

The value indicates that the package is incompatible with any newer versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option.
Consider this option only if your package is known to not function with newer versions of node.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string
- *Default:* no minimum version is enforced

The minimum node version required by this package to function. Most projects should not use this option.

The value indicates that the package is incompatible with any older versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option, even if your package is incompatible with EOL versions of node.
Consider this option only if your package depends on a specific feature, that is not available in other LTS versions.
Setting this option has very high impact on the consumers of your package,
as package managers will actively prevent usage with node versions you have marked as incompatible.

To change the node version of your CI/CD workflows, use `workflowNodeVersion`.

---

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmProvenance`<sup>Optional</sup> <a name="npmProvenance" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.npmProvenance"></a>

```typescript
public readonly npmProvenance: boolean;
```

- *Type:* boolean
- *Default:* true for public packages, false otherwise

Should provenance statements be generated when the package is published.

A supported package manager is required to publish a package with npm provenance statements and
you will need to use a supported CI/CD provider.

Note that the projen `Release` and `Publisher` components are using `publib` to publish packages,
which is using npm internally and supports provenance statements independently of the package manager used.

> [https://docs.npmjs.com/generating-provenance-statements](https://docs.npmjs.com/generating-provenance-statements)

---

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="npmRegistry" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.npmRegistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- *Type:* string

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `npmTrustedPublishing`<sup>Optional</sup> <a name="npmTrustedPublishing" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.npmTrustedPublishing"></a>

```typescript
public readonly npmTrustedPublishing: boolean;
```

- *Type:* boolean
- *Default:* false

Use trusted publishing for publishing to npmjs.com Needs to be pre-configured on npm.js to work.

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* NodePackageManager.YARN_CLASSIC

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string
- *Default:* defaults to project name

The "name" in package.json.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* string[]
- *Default:* []

Peer dependencies for this module.

Dependencies listed here are required to
be installed (and satisfied) by the _consumer_ of this library. Using peer
dependencies allows you to ensure that only a single module of a certain
library exists in the `node_modules` tree of your consumers.

Note that prior to npm@7, peer dependencies are _not_ automatically
installed, which means that adding peer dependencies to a library will be a
breaking change for your customers.

Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is
enabled by default), projen will automatically add a dev dependency with a
pinned version for each peer dependency. This will ensure that you build &
test your module against the lowest peer version required.

---

##### `pnpmVersion`<sup>Optional</sup> <a name="pnpmVersion" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.pnpmVersion"></a>

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* "9"

The version of PNPM to use if using PNPM as a package manager.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* projen.javascript.ScopedPackagesOptions[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### ~~`scripts`~~<sup>Optional</sup> <a name="scripts" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.scripts"></a>

- *Deprecated:* use `project.addTask()` or `package.setScript()`

```typescript
public readonly scripts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

npm scripts to include.

If a script has the same name as a standard script,
the standard script will be overwritten.
Also adds the script as a task.

---

##### `stability`<sup>Optional</sup> <a name="stability" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* string

Package's Stability.

---

##### `yarnBerryOptions`<sup>Optional</sup> <a name="yarnBerryOptions" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.yarnBerryOptions"></a>

```typescript
public readonly yarnBerryOptions: YarnBerryOptions;
```

- *Type:* projen.javascript.YarnBerryOptions
- *Default:* Yarn Berry v4 with all default options

Options for Yarn Berry.

---

##### `bumpPackage`<sup>Optional</sup> <a name="bumpPackage" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.bumpPackage"></a>

```typescript
public readonly bumpPackage: string;
```

- *Type:* string
- *Default:* A recent version of "commit-and-tag-version"

The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string.

This can be any compatible package version, including the deprecated `standard-version@9`.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="jsiiReleaseVersion" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* string
- *Default:* "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* number
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="minMajorVersion" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.minMajorVersion"></a>

```typescript
public readonly minMajorVersion: number;
```

- *Type:* number
- *Default:* No minimum version is being enforced

Minimal Major version to release.

This can be useful to set to 1, as breaking changes before the 1.x major
release are not incrementing the major version number.

Can not be set together with `majorVersion`.

---

##### `nextVersionCommand`<sup>Optional</sup> <a name="nextVersionCommand" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.nextVersionCommand"></a>

```typescript
public readonly nextVersionCommand: string;
```

- *Type:* string
- *Default:* The next version will be determined based on the commit history and project settings.

A shell command to control the next version to release.

If present, this shell command will be run before the bump is executed, and
it determines what version to release. It will be executed in the following
environment:

- Working directory: the project directory.
- `$VERSION`: the current version. Looks like `1.2.3`.
- `$LATEST_TAG`: the most recent tag. Looks like `prefix-v1.2.3`, or may be unset.
- `$SUGGESTED_BUMP`: the suggested bump action based on commits. One of `major|minor|patch|none`.

The command should print one of the following to `stdout`:

- Nothing: the next version number will be determined based on commit history.
- `x.y.z`: the next version number will be `x.y.z`.
- `major|minor|patch`: the next version number will be the current version number
  with the indicated component bumped.

This setting cannot be specified together with `minMajorVersion`; the invoked
script can be used to achieve the effects of `minMajorVersion`.

---

##### `npmDistTag`<sup>Optional</sup> <a name="npmDistTag" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* string
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* boolean
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- *Type:* boolean
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `releasableCommits`<sup>Optional</sup> <a name="releasableCommits" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.releasableCommits"></a>

```typescript
public readonly releasableCommits: ReleasableCommits;
```

- *Type:* projen.ReleasableCommits
- *Default:* ReleasableCommits.everyCommit()

Find commits that should be considered releasable Used to decide if a release is required.

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.releaseBranches"></a>

```typescript
public readonly releaseBranches: {[ key: string ]: BranchOptions};
```

- *Type:* {[ key: string ]: projen.release.BranchOptions}
- *Default:* no additional branches are used for release. you can use `addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

---

##### `releaseEnvironment`<sup>Optional</sup> <a name="releaseEnvironment" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.releaseEnvironment"></a>

```typescript
public readonly releaseEnvironment: string;
```

- *Type:* string
- *Default:* no environment used, unless set at the artifact level

The GitHub Actions environment used for the release.

This can be used to add an explicit approval step to the release
or limit who can initiate a release through environment protection rules.

When multiple artifacts are released, the environment can be overwritten
on a per artifact basis.

---

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="releaseEveryCommit" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.releaseEveryCommit"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* boolean
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* string
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="releaseSchedule" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.releaseSchedule"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- *Type:* string
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.releaseTagPrefix"></a>

```typescript
public readonly releaseTagPrefix: string;
```

- *Type:* string
- *Default:* "v"

Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers.

Note: this prefix is used to detect the latest tagged version
when bumping, so if you change this on a project with an existing version
history, you may need to manually tag your latest release
with the new prefix.

---

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowEnv`<sup>Optional</sup> <a name="releaseWorkflowEnv" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.releaseWorkflowEnv"></a>

```typescript
public readonly releaseWorkflowEnv: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Build environment variables for release workflows.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with commit-and-tag-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* string
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `workflowRunsOnGroup`<sup>Optional</sup> <a name="workflowRunsOnGroup" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.workflowRunsOnGroup"></a>

```typescript
public readonly workflowRunsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="defaultReleaseBranch" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* string
- *Default:* "main"

The name of the main release branch.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### `auditDeps`<sup>Optional</sup> <a name="auditDeps" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.auditDeps"></a>

```typescript
public readonly auditDeps: boolean;
```

- *Type:* boolean
- *Default:* false

Run security audit on dependencies.

When enabled, creates an "audit" task that checks for known security vulnerabilities
in dependencies. By default, runs during every build and checks for "high" severity
vulnerabilities or above in all dependencies (including dev dependencies).

---

##### `auditDepsOptions`<sup>Optional</sup> <a name="auditDepsOptions" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.auditDepsOptions"></a>

```typescript
public readonly auditDepsOptions: AuditOptions;
```

- *Type:* projen.javascript.AuditOptions
- *Default:* default options

Security audit options.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configured).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `biome`<sup>Optional</sup> <a name="biome" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.biome"></a>

```typescript
public readonly biome: boolean;
```

- *Type:* boolean
- *Default:* false

Setup Biome.

---

##### `biomeOptions`<sup>Optional</sup> <a name="biomeOptions" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.biomeOptions"></a>

```typescript
public readonly biomeOptions: BiomeOptions;
```

- *Type:* projen.javascript.BiomeOptions
- *Default:* default options

Biome options.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowOptions`<sup>Optional</sup> <a name="buildWorkflowOptions" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.buildWorkflowOptions"></a>

```typescript
public readonly buildWorkflowOptions: BuildWorkflowOptions;
```

- *Type:* projen.javascript.BuildWorkflowOptions

Options for PR build workflow.

---

##### ~~`buildWorkflowTriggers`~~<sup>Optional</sup> <a name="buildWorkflowTriggers" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.buildWorkflowTriggers"></a>

- *Deprecated:* - Use `buildWorkflowOptions.workflowTriggers`

```typescript
public readonly buildWorkflowTriggers: Triggers;
```

- *Type:* projen.github.workflows.Triggers
- *Default:* "{ pullRequest: {}, workflowDispatch: {} }"

Build workflow triggers.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="bundlerOptions" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### `checkLicenses`<sup>Optional</sup> <a name="checkLicenses" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.checkLicenses"></a>

```typescript
public readonly checkLicenses: LicenseCheckerOptions;
```

- *Type:* projen.javascript.LicenseCheckerOptions
- *Default:* no license checks are run during the build and all licenses will be accepted

Configure which licenses should be deemed acceptable for use by dependencies.

This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.

---

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* boolean
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v5 By default, OIDC auth is used. Alternatively a token can be provided via `codeCovTokenSecret`.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* string
- *Default:* OIDC auth is used

Define the secret name for a specified https://codecov.io/ token.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### `dependabot`<sup>Optional</sup> <a name="dependabot" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* boolean
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="dependabotOptions" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* projen.github.DependabotOptions
- *Default:* default options

Options for dependabot.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="depsUpgrade" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* boolean
- *Default:* `true` for root projects, `false` for subprojects

Use tasks and github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="depsUpgradeOptions" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* projen.javascript.UpgradeDependenciesOptions
- *Default:* default options

Options for `UpgradeDependencies`.

---

##### `gitignore`<sup>Optional</sup> <a name="gitignore" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* string[]

Additional entries to .gitignore.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.jest"></a>

```typescript
public readonly jest: boolean;
```

- *Type:* boolean
- *Default:* true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="jestOptions" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.jestOptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- *Type:* projen.javascript.JestOptions
- *Default:* default options

Jest options.

---

##### ~~`mutableBuild`~~<sup>Optional</sup> <a name="mutableBuild" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.mutableBuild"></a>

- *Deprecated:* - Use `buildWorkflowOptions.mutableBuild`

```typescript
public readonly mutableBuild: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically update files modified during builds to pull-request branches.

This means
that any files synthesized by projen or e.g. test snapshots will always be up-to-date
before a PR is merged.

Implies that PR builds do not have anti-tamper checks.

---

##### ~~`npmignore`~~<sup>Optional</sup> <a name="npmignore" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.npmignore"></a>

- *Deprecated:* - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- *Type:* string[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="npmignoreEnabled" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `npmIgnoreOptions`<sup>Optional</sup> <a name="npmIgnoreOptions" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.npmIgnoreOptions"></a>

```typescript
public readonly npmIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .npmignore file.

---

##### `package`<sup>Optional</sup> <a name="package" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.package"></a>

```typescript
public readonly package: boolean;
```

- *Type:* boolean
- *Default:* true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.prettier"></a>

```typescript
public readonly prettier: boolean;
```

- *Type:* boolean
- *Default:* false

Setup prettier.

---

##### `prettierOptions`<sup>Optional</sup> <a name="prettierOptions" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.prettierOptions"></a>

```typescript
public readonly prettierOptions: PrettierOptions;
```

- *Type:* projen.javascript.PrettierOptions
- *Default:* default options

Prettier options.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="projenDevDependency" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options for .projenrc.js.

---

##### `projenVersion`<sup>Optional</sup> <a name="projenVersion" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* string
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* string[]
- *Default:* default content

The contents of the pull request template.

---

##### `release`<sup>Optional</sup> <a name="release" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.release"></a>

```typescript
public readonly release: boolean;
```

- *Type:* boolean
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="releaseToNpm" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="releaseWorkflow" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.releaseWorkflow"></a>

- *Deprecated:* see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="workflowBootstrapSteps" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="workflowGitIdentity" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* default GitHub Actions user

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* `minNodeVersion` if set, otherwise `lts/*`.

The node version used in GitHub Actions workflows.

Always use this option if your GitHub Actions workflows require a specific to run.

---

##### `workflowPackageCache`<sup>Optional</sup> <a name="workflowPackageCache" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.workflowPackageCache"></a>

```typescript
public readonly workflowPackageCache: boolean;
```

- *Type:* boolean
- *Default:* false

Enable Node.js package cache in GitHub workflows.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="disableTsconfig" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `disableTsconfigDev`<sup>Optional</sup> <a name="disableTsconfigDev" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.disableTsconfigDev"></a>

```typescript
public readonly disableTsconfigDev: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.dev.json` file.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean
- *Default:* false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="docsDirectory" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string
- *Default:* "docs"

Docs directory.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="entrypointTypes" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* string
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.eslint"></a>

```typescript
public readonly eslint: boolean;
```

- *Type:* boolean
- *Default:* true, unless biome is enabled

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="eslintOptions" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.eslintOptions"></a>

```typescript
public readonly eslintOptions: EslintOptions;
```

- *Type:* projen.javascript.EslintOptions
- *Default:* opinionated default options

Eslint options.

---

##### `libdir`<sup>Optional</sup> <a name="libdir" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* projen.typescript.ProjenrcOptions

Options for .projenrc.ts.

---

##### `sampleCode`<sup>Optional</sup> <a name="sampleCode" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.sampleCode"></a>

```typescript
public readonly sampleCode: boolean;
```

- *Type:* boolean
- *Default:* true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `srcdir`<sup>Optional</sup> <a name="srcdir" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string
- *Default:* "src"

Typescript sources directory.

---

##### `testdir`<sup>Optional</sup> <a name="testdir" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string
- *Default:* "test"

Jest tests directory. Tests files should be named `xxx.test.ts`.

If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
then tests are going to be compiled into `lib/` and executed as javascript.
If the test directory is outside of `src`, then we configure jest to
compile the code in-memory.

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="tsconfigDev" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="tsconfigDevFile" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* string
- *Default:* "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### `tsJestOptions`<sup>Optional</sup> <a name="tsJestOptions" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.tsJestOptions"></a>

```typescript
public readonly tsJestOptions: TsJestOptions;
```

- *Type:* projen.typescript.TsJestOptions

Options for ts-jest.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="typescriptVersion" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* string
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `debug`<sup>Optional</sup> <a name="debug" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.debug"></a>

```typescript
public readonly debug: boolean;
```

- *Type:* boolean
- *Default:* false

Printing out debug statement.

---

##### `editorConfig`<sup>Optional</sup> <a name="editorConfig" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.editorConfig"></a>

```typescript
public readonly editorConfig: boolean;
```

- *Type:* boolean
- *Default:* true

Enable editorConfig.

---

##### `editorConfigOptions`<sup>Optional</sup> <a name="editorConfigOptions" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.editorConfigOptions"></a>

```typescript
public readonly editorConfigOptions: EditorConfigOptions;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.EditorConfigOptions">EditorConfigOptions</a>

EditorConfig options.

---

##### `gitHooksManager`<sup>Optional</sup> <a name="gitHooksManager" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.gitHooksManager"></a>

```typescript
public readonly gitHooksManager: GitHooksManagerType;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.GitHooksManagerType">GitHooksManagerType</a>
- *Default:* true

Setup gitHooksManager.

---

##### `gitHooksManagerOptions`<sup>Optional</sup> <a name="gitHooksManagerOptions" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.gitHooksManagerOptions"></a>

```typescript
public readonly gitHooksManagerOptions: HuskyOptions | LefthookOptions;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.HuskyOptions">HuskyOptions</a> | <a href="#@thoroc/projen-typescript-git-hooks.LefthookOptions">LefthookOptions</a>
- *Default:* default options

gitHooksManagerEnabled options.

---

##### `prettierSortImportsOptions`<sup>Optional</sup> <a name="prettierSortImportsOptions" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.prettierSortImportsOptions"></a>

```typescript
public readonly prettierSortImportsOptions: PrettierSortImportsOptions;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.PrettierSortImportsOptions">PrettierSortImportsOptions</a>

Enable @trivago/prettier-plugin-sort-imports and configure it.

Providing this option (even as an empty object) activates the plugin.

---

##### `vitest`<sup>Optional</sup> <a name="vitest" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.vitest"></a>

```typescript
public readonly vitest: boolean;
```

- *Type:* boolean
- *Default:* false

Enable Vitest instead of Jest.

When true, jest is automatically disabled.

---

##### `vitestOptions`<sup>Optional</sup> <a name="vitestOptions" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.vitestOptions"></a>

```typescript
public readonly vitestOptions: VitestOptions;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.VitestOptions">VitestOptions</a>

Vitest options.

Only used when vitest is true.

---

### HuskyHookFileOptions <a name="HuskyHookFileOptions" id="@thoroc/projen-typescript-git-hooks.HuskyHookFileOptions"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.HuskyHookFileOptions.Initializer"></a>

```typescript
import { HuskyHookFileOptions } from '@thoroc/projen-typescript-git-hooks'

const huskyHookFileOptions: HuskyHookFileOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.HuskyHookFileOptions.property.command">command</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.HuskyHookFileOptions.property.hook">hook</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.GitClientHook">GitClientHook</a></code> | *No description.* |

---

##### `command`<sup>Required</sup> <a name="command" id="@thoroc/projen-typescript-git-hooks.HuskyHookFileOptions.property.command"></a>

```typescript
public readonly command: string;
```

- *Type:* string

---

##### `hook`<sup>Required</sup> <a name="hook" id="@thoroc/projen-typescript-git-hooks.HuskyHookFileOptions.property.hook"></a>

```typescript
public readonly hook: GitClientHook;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.GitClientHook">GitClientHook</a>

---

### HuskyOptions <a name="HuskyOptions" id="@thoroc/projen-typescript-git-hooks.HuskyOptions"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.HuskyOptions.Initializer"></a>

```typescript
import { HuskyOptions } from '@thoroc/projen-typescript-git-hooks'

const huskyOptions: HuskyOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.HuskyOptions.property.lintStaged">lintStaged</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.LintStaged">LintStaged</a></code> | Enable linting and re-adding of staged files pre commit. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.HuskyOptions.property.lintStagedOptions">lintStagedOptions</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.LintStagedOptions">LintStagedOptions</a></code> | Set rules for lint-staged. |

---

##### `lintStaged`<sup>Optional</sup> <a name="lintStaged" id="@thoroc/projen-typescript-git-hooks.HuskyOptions.property.lintStaged"></a>

```typescript
public readonly lintStaged: LintStaged;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.LintStaged">LintStaged</a>
- *Default:* true

Enable linting and re-adding of staged files pre commit.

---

##### `lintStagedOptions`<sup>Optional</sup> <a name="lintStagedOptions" id="@thoroc/projen-typescript-git-hooks.HuskyOptions.property.lintStagedOptions"></a>

```typescript
public readonly lintStagedOptions: LintStagedOptions;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.LintStagedOptions">LintStagedOptions</a>
- *Default:* {}

Set rules for lint-staged.

---

### LabelerConfigOptions <a name="LabelerConfigOptions" id="@thoroc/projen-typescript-git-hooks.LabelerConfigOptions"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.LabelerConfigOptions.Initializer"></a>

```typescript
import { LabelerConfigOptions } from '@thoroc/projen-typescript-git-hooks'

const labelerConfigOptions: LabelerConfigOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LabelerConfigOptions.property.component">component</a></code> | <code>string[]</code> | component glob. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LabelerConfigOptions.property.documentation">documentation</a></code> | <code>string[]</code> | documentation glob. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LabelerConfigOptions.property.githubAction">githubAction</a></code> | <code>string[]</code> | github action glob. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LabelerConfigOptions.property.test">test</a></code> | <code>string[]</code> | test glob. |

---

##### `component`<sup>Required</sup> <a name="component" id="@thoroc/projen-typescript-git-hooks.LabelerConfigOptions.property.component"></a>

```typescript
public readonly component: string[];
```

- *Type:* string[]

component glob.

---

##### `documentation`<sup>Required</sup> <a name="documentation" id="@thoroc/projen-typescript-git-hooks.LabelerConfigOptions.property.documentation"></a>

```typescript
public readonly documentation: string[];
```

- *Type:* string[]

documentation glob.

---

##### `githubAction`<sup>Required</sup> <a name="githubAction" id="@thoroc/projen-typescript-git-hooks.LabelerConfigOptions.property.githubAction"></a>

```typescript
public readonly githubAction: string[];
```

- *Type:* string[]

github action glob.

---

##### `test`<sup>Required</sup> <a name="test" id="@thoroc/projen-typescript-git-hooks.LabelerConfigOptions.property.test"></a>

```typescript
public readonly test: string[];
```

- *Type:* string[]

test glob.

---

### LefthookAction <a name="LefthookAction" id="@thoroc/projen-typescript-git-hooks.LefthookAction"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.LefthookAction.Initializer"></a>

```typescript
import { LefthookAction } from '@thoroc/projen-typescript-git-hooks'

const lefthookAction: LefthookAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookAction.property.actionName">actionName</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.GitClientHook">GitClientHook</a></code> | Action name. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookAction.property.commands">commands</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookCommandOptions">LefthookCommandOptions</a>[]</code> | Array of Lefthook command. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookAction.property.scripts">scripts</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookScriptOptions">LefthookScriptOptions</a>[]</code> | Array of Lefthook script. |

---

##### `actionName`<sup>Required</sup> <a name="actionName" id="@thoroc/projen-typescript-git-hooks.LefthookAction.property.actionName"></a>

```typescript
public readonly actionName: GitClientHook;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.GitClientHook">GitClientHook</a>

Action name.

---

##### `commands`<sup>Optional</sup> <a name="commands" id="@thoroc/projen-typescript-git-hooks.LefthookAction.property.commands"></a>

```typescript
public readonly commands: LefthookCommandOptions[];
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.LefthookCommandOptions">LefthookCommandOptions</a>[]
- *Default:* []

Array of Lefthook command.

---

##### `scripts`<sup>Optional</sup> <a name="scripts" id="@thoroc/projen-typescript-git-hooks.LefthookAction.property.scripts"></a>

```typescript
public readonly scripts: LefthookScriptOptions[];
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.LefthookScriptOptions">LefthookScriptOptions</a>[]
- *Default:* []

Array of Lefthook script.

---

### LefthookCommandOptions <a name="LefthookCommandOptions" id="@thoroc/projen-typescript-git-hooks.LefthookCommandOptions"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.LefthookCommandOptions.Initializer"></a>

```typescript
import { LefthookCommandOptions } from '@thoroc/projen-typescript-git-hooks'

const lefthookCommandOptions: LefthookCommandOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookCommandOptions.property.name">name</a></code> | <code>string</code> | Command's name. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookCommandOptions.property.run">run</a></code> | <code>string</code> | This is a mandatory option for a command. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookCommandOptions.property.exclude">exclude</a></code> | <code>string</code> | You can provide a regular expression to exclude some files from being passed to run command. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookCommandOptions.property.files">files</a></code> | <code>string</code> | A custom git command for files to be referenced in {files} template for run setting. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookCommandOptions.property.glob">glob</a></code> | <code>string</code> | You can set a glob to filter files for your command. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookCommandOptions.property.stagedFiles">stagedFiles</a></code> | <code>boolean</code> | Staged files which you try to commit. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookCommandOptions.property.stageFixed">stageFixed</a></code> | <code>boolean</code> | Re-stage files modified by the command after it runs. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookCommandOptions.property.tags">tags</a></code> | <code>string</code> | You can specify tags for commands and scripts. |

---

##### `name`<sup>Required</sup> <a name="name" id="@thoroc/projen-typescript-git-hooks.LefthookCommandOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Command's name.

---

##### `run`<sup>Required</sup> <a name="run" id="@thoroc/projen-typescript-git-hooks.LefthookCommandOptions.property.run"></a>

```typescript
public readonly run: string;
```

- *Type:* string

This is a mandatory option for a command.

This is actually a command that is executed for the hook.

> [https://github.com/evilmartians/lefthook/blob/master/docs/configuration.md#run](https://github.com/evilmartians/lefthook/blob/master/docs/configuration.md#run)

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@thoroc/projen-typescript-git-hooks.LefthookCommandOptions.property.exclude"></a>

```typescript
public readonly exclude: string;
```

- *Type:* string

You can provide a regular expression to exclude some files from being passed to run command.

> [https://github.com/evilmartians/lefthook/blob/master/docs/configuration.md#exclude](https://github.com/evilmartians/lefthook/blob/master/docs/configuration.md#exclude)

---

##### `files`<sup>Optional</sup> <a name="files" id="@thoroc/projen-typescript-git-hooks.LefthookCommandOptions.property.files"></a>

```typescript
public readonly files: string;
```

- *Type:* string

A custom git command for files to be referenced in {files} template for run setting.

> [https://github.com/evilmartians/lefthook/blob/master/docs/configuration.md#files](https://github.com/evilmartians/lefthook/blob/master/docs/configuration.md#files)

---

##### `glob`<sup>Optional</sup> <a name="glob" id="@thoroc/projen-typescript-git-hooks.LefthookCommandOptions.property.glob"></a>

```typescript
public readonly glob: string;
```

- *Type:* string

You can set a glob to filter files for your command.

> [https://github.com/evilmartians/lefthook/blob/master/docs/configuration.md#glob](https://github.com/evilmartians/lefthook/blob/master/docs/configuration.md#glob)

---

##### `stagedFiles`<sup>Optional</sup> <a name="stagedFiles" id="@thoroc/projen-typescript-git-hooks.LefthookCommandOptions.property.stagedFiles"></a>

```typescript
public readonly stagedFiles: boolean;
```

- *Type:* boolean

Staged files which you try to commit.

> [https://github.com/evilmartians/lefthook/blob/master/docs/configuration.md#run](https://github.com/evilmartians/lefthook/blob/master/docs/configuration.md#run)

---

##### `stageFixed`<sup>Optional</sup> <a name="stageFixed" id="@thoroc/projen-typescript-git-hooks.LefthookCommandOptions.property.stageFixed"></a>

```typescript
public readonly stageFixed: boolean;
```

- *Type:* boolean

Re-stage files modified by the command after it runs.

Required when the command auto-fixes files (e.g. eslint --fix, prettier --write)
so that the fixed versions are included in the commit.

> [https://github.com/evilmartians/lefthook/blob/master/docs/configuration.md#stage_fixed](https://github.com/evilmartians/lefthook/blob/master/docs/configuration.md#stage_fixed)

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@thoroc/projen-typescript-git-hooks.LefthookCommandOptions.property.tags"></a>

```typescript
public readonly tags: string;
```

- *Type:* string

You can specify tags for commands and scripts.

> [https://github.com/evilmartians/lefthook/blob/master/docs/configuration.md#tags](https://github.com/evilmartians/lefthook/blob/master/docs/configuration.md#tags)

---

### LefthookConfigOptions <a name="LefthookConfigOptions" id="@thoroc/projen-typescript-git-hooks.LefthookConfigOptions"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.LefthookConfigOptions.Initializer"></a>

```typescript
import { LefthookConfigOptions } from '@thoroc/projen-typescript-git-hooks'

const lefthookConfigOptions: LefthookConfigOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookConfigOptions.property.actions">actions</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookAction">LefthookAction</a>[]</code> | Array of lefthook action. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@thoroc/projen-typescript-git-hooks.LefthookConfigOptions.property.actions"></a>

```typescript
public readonly actions: LefthookAction[];
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.LefthookAction">LefthookAction</a>[]

Array of lefthook action.

---

### LefthookOptions <a name="LefthookOptions" id="@thoroc/projen-typescript-git-hooks.LefthookOptions"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.LefthookOptions.Initializer"></a>

```typescript
import { LefthookOptions } from '@thoroc/projen-typescript-git-hooks'

const lefthookOptions: LefthookOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookOptions.property.config">config</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookConfig">LefthookConfig</a></code> | Lefthook config. |

---

##### `config`<sup>Optional</sup> <a name="config" id="@thoroc/projen-typescript-git-hooks.LefthookOptions.property.config"></a>

```typescript
public readonly config: LefthookConfig;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.LefthookConfig">LefthookConfig</a>

Lefthook config.

---

### LefthookScriptOptions <a name="LefthookScriptOptions" id="@thoroc/projen-typescript-git-hooks.LefthookScriptOptions"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.LefthookScriptOptions.Initializer"></a>

```typescript
import { LefthookScriptOptions } from '@thoroc/projen-typescript-git-hooks'

const lefthookScriptOptions: LefthookScriptOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookScriptOptions.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookScriptOptions.property.runner">runner</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@thoroc/projen-typescript-git-hooks.LefthookScriptOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `runner`<sup>Required</sup> <a name="runner" id="@thoroc/projen-typescript-git-hooks.LefthookScriptOptions.property.runner"></a>

```typescript
public readonly runner: string;
```

- *Type:* string

---

### LintStagedOptions <a name="LintStagedOptions" id="@thoroc/projen-typescript-git-hooks.LintStagedOptions"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.LintStagedOptions.Initializer"></a>

```typescript
import { LintStagedOptions } from '@thoroc/projen-typescript-git-hooks'

const lintStagedOptions: LintStagedOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LintStagedOptions.property.rules">rules</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.LintStagedRule">LintStagedRule</a>[]</code> | *No description.* |

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@thoroc/projen-typescript-git-hooks.LintStagedOptions.property.rules"></a>

```typescript
public readonly rules: LintStagedRule[];
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.LintStagedRule">LintStagedRule</a>[]

---

### LintStagedRuleOptions <a name="LintStagedRuleOptions" id="@thoroc/projen-typescript-git-hooks.LintStagedRuleOptions"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.LintStagedRuleOptions.Initializer"></a>

```typescript
import { LintStagedRuleOptions } from '@thoroc/projen-typescript-git-hooks'

const lintStagedRuleOptions: LintStagedRuleOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LintStagedRuleOptions.property.commands">commands</a></code> | <code>string \| string[]</code> | command to execute on the file specified. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LintStagedRuleOptions.property.filePattern">filePattern</a></code> | <code>string</code> | file pattern or filename for the rule. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LintStagedRuleOptions.property.last">last</a></code> | <code>boolean</code> | Set the command to be the last one TODO: refactor the addRule so we respect this option. |

---

##### `commands`<sup>Required</sup> <a name="commands" id="@thoroc/projen-typescript-git-hooks.LintStagedRuleOptions.property.commands"></a>

```typescript
public readonly commands: string | string[];
```

- *Type:* string | string[]

command to execute on the file specified.

---

##### `filePattern`<sup>Required</sup> <a name="filePattern" id="@thoroc/projen-typescript-git-hooks.LintStagedRuleOptions.property.filePattern"></a>

```typescript
public readonly filePattern: string;
```

- *Type:* string

file pattern or filename for the rule.

---

##### `last`<sup>Optional</sup> <a name="last" id="@thoroc/projen-typescript-git-hooks.LintStagedRuleOptions.property.last"></a>

```typescript
public readonly last: boolean;
```

- *Type:* boolean

Set the command to be the last one TODO: refactor the addRule so we respect this option.

---

### MarkdownlintOptions <a name="MarkdownlintOptions" id="@thoroc/projen-typescript-git-hooks.MarkdownlintOptions"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.MarkdownlintOptions.Initializer"></a>

```typescript
import { MarkdownlintOptions } from '@thoroc/projen-typescript-git-hooks'

const markdownlintOptions: MarkdownlintOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintOptions.property.ignoreFile">ignoreFile</a></code> | <code>boolean</code> | Defines an .markdownlintignore file. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintOptions.property.rules">rules</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules">MarkdownlintRules</a></code> | Set the rules for Markdownlint. |

---

##### `ignoreFile`<sup>Optional</sup> <a name="ignoreFile" id="@thoroc/projen-typescript-git-hooks.MarkdownlintOptions.property.ignoreFile"></a>

```typescript
public readonly ignoreFile: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .markdownlintignore file.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@thoroc/projen-typescript-git-hooks.MarkdownlintOptions.property.rules"></a>

```typescript
public readonly rules: MarkdownlintRules;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules">MarkdownlintRules</a>

Set the rules for Markdownlint.

---

### MarkdownlintRules <a name="MarkdownlintRules" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.Initializer"></a>

```typescript
import { MarkdownlintRules } from '@thoroc/projen-typescript-git-hooks'

const markdownlintRules: MarkdownlintRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md001">md001</a></code> | <code>boolean</code> | MD001 - Heading levels should only increment by one level at a time. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md003">md003</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.Md003">Md003</a></code> | MD003 - Heading style. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md004">md004</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.Md004">Md004</a></code> | MD004 - Unordered list style. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md005">md005</a></code> | <code>boolean</code> | MD005 - Inconsistent indentation for list items at the same level. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md007">md007</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.Md007">Md007</a></code> | MD007 - Unordered list indentation. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md009">md009</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.Md009">Md009</a></code> | MD009 - Trailing spaces. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md010">md010</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.Md010">Md010</a></code> | MD010 - Hard tabs. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md011">md011</a></code> | <code>boolean</code> | MD011 - Reversed link syntax. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md012">md012</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.Md012">Md012</a></code> | MD012 - Multiple consecutive blank lines. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md013">md013</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.Md013">Md013</a></code> | MD013 - Line length. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md014">md014</a></code> | <code>boolean</code> | MD014 - Dollar signs used before commands without showing output. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md018">md018</a></code> | <code>boolean</code> | MD018 - No space after hash on atx style heading. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md019">md019</a></code> | <code>boolean</code> | MD019 - Multiple spaces after hash on atx style heading. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md020">md020</a></code> | <code>boolean</code> | MD020 - No space inside hashes on closed atx style heading. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md021">md021</a></code> | <code>boolean</code> | MD021 - Multiple spaces inside hashes on closed atx style heading. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md022">md022</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.Md022">Md022</a></code> | MD022 - Headings should be surrounded by blank lines. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md023">md023</a></code> | <code>boolean</code> | MD023 - Headings must start at the beginning of the line. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md024">md024</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.Md024">Md024</a></code> | MD024 - Multiple headings with the same content. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md025">md025</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.Md025">Md025</a></code> | MD025 - Multiple top-level headings in the same document. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md026">md026</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.Md026">Md026</a></code> | MD026 - Trailing punctuation in heading. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md027">md027</a></code> | <code>boolean</code> | MD027 - Multiple spaces after blockquote symbol. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md028">md028</a></code> | <code>boolean</code> | MD028 - Blank line inside blockquote. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md029">md029</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.Md029">Md029</a></code> | MD029 - Ordered list item prefix. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md030">md030</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.Md030">Md030</a></code> | MD030 - Spaces after list markers. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md031">md031</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.Md031">Md031</a></code> | MD031 - Fenced code blocks should be surrounded by blank lines. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md032">md032</a></code> | <code>boolean</code> | MD032 - Lists should be surrounded by blank lines. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md033">md033</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.Md033">Md033</a></code> | MD033 - Inline HTML. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md034">md034</a></code> | <code>boolean</code> | MD034 - Bare URL used. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md035">md035</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.Md035">Md035</a></code> | MD035 - Horizontal rule style. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md036">md036</a></code> | <code>boolean</code> | MD036 - Emphasis used instead of a heading. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md037">md037</a></code> | <code>boolean</code> | MD037 - Spaces inside emphasis markers. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md038">md038</a></code> | <code>boolean</code> | MD038 - Spaces inside code span elements. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md039">md039</a></code> | <code>boolean</code> | MD039 - Spaces inside link text. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md040">md040</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.Md040">Md040</a></code> | MD040 - Fenced code blocks should have a language specified. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md041">md041</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.Md041">Md041</a></code> | MD041 - First line in a file should be a top-level heading. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md042">md042</a></code> | <code>boolean</code> | MD042 - No empty links. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md043">md043</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.Md043">Md043</a></code> | MD043 - Required heading structure. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md044">md044</a></code> | <code>boolean</code> | MD044 - Proper names should have the correct capitalization. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md045">md045</a></code> | <code>boolean</code> | MD045 - Images should have alternate text (alt text). |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md046">md046</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.Md046">Md046</a></code> | MD046 - Code block style. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md047">md047</a></code> | <code>boolean</code> | MD047 - Files should end with a single newline character. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md048">md048</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.Md048">Md048</a></code> | MD048 - Code fence style. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md049">md049</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.Md049">Md049</a></code> | MD049 - Emphasis style should be consistent. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md050">md050</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.Md050">Md050</a></code> | MD050 - Strong style should be consistent. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md051">md051</a></code> | <code>boolean</code> | MD051 - Link fragments should be valid. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md052">md052</a></code> | <code>boolean</code> | MD052 - Reference links and images should use a label that is defined. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md053">md053</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.Md053">Md053</a></code> | MD053 - Link and image reference definitions should be needed. |

---

##### `md001`<sup>Optional</sup> <a name="md001" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md001"></a>

```typescript
public readonly md001: boolean;
```

- *Type:* boolean

MD001 - Heading levels should only increment by one level at a time.

---

##### `md003`<sup>Optional</sup> <a name="md003" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md003"></a>

```typescript
public readonly md003: Md003;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.Md003">Md003</a>

MD003 - Heading style.

---

##### `md004`<sup>Optional</sup> <a name="md004" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md004"></a>

```typescript
public readonly md004: Md004;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.Md004">Md004</a>

MD004 - Unordered list style.

---

##### `md005`<sup>Optional</sup> <a name="md005" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md005"></a>

```typescript
public readonly md005: boolean;
```

- *Type:* boolean

MD005 - Inconsistent indentation for list items at the same level.

---

##### `md007`<sup>Optional</sup> <a name="md007" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md007"></a>

```typescript
public readonly md007: Md007;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.Md007">Md007</a>

MD007 - Unordered list indentation.

---

##### `md009`<sup>Optional</sup> <a name="md009" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md009"></a>

```typescript
public readonly md009: Md009;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.Md009">Md009</a>

MD009 - Trailing spaces.

---

##### `md010`<sup>Optional</sup> <a name="md010" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md010"></a>

```typescript
public readonly md010: Md010;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.Md010">Md010</a>

MD010 - Hard tabs.

---

##### `md011`<sup>Optional</sup> <a name="md011" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md011"></a>

```typescript
public readonly md011: boolean;
```

- *Type:* boolean

MD011 - Reversed link syntax.

---

##### `md012`<sup>Optional</sup> <a name="md012" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md012"></a>

```typescript
public readonly md012: Md012;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.Md012">Md012</a>

MD012 - Multiple consecutive blank lines.

---

##### `md013`<sup>Optional</sup> <a name="md013" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md013"></a>

```typescript
public readonly md013: Md013;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.Md013">Md013</a>

MD013 - Line length.

---

##### `md014`<sup>Optional</sup> <a name="md014" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md014"></a>

```typescript
public readonly md014: boolean;
```

- *Type:* boolean

MD014 - Dollar signs used before commands without showing output.

---

##### `md018`<sup>Optional</sup> <a name="md018" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md018"></a>

```typescript
public readonly md018: boolean;
```

- *Type:* boolean

MD018 - No space after hash on atx style heading.

---

##### `md019`<sup>Optional</sup> <a name="md019" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md019"></a>

```typescript
public readonly md019: boolean;
```

- *Type:* boolean

MD019 - Multiple spaces after hash on atx style heading.

---

##### `md020`<sup>Optional</sup> <a name="md020" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md020"></a>

```typescript
public readonly md020: boolean;
```

- *Type:* boolean

MD020 - No space inside hashes on closed atx style heading.

---

##### `md021`<sup>Optional</sup> <a name="md021" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md021"></a>

```typescript
public readonly md021: boolean;
```

- *Type:* boolean

MD021 - Multiple spaces inside hashes on closed atx style heading.

---

##### `md022`<sup>Optional</sup> <a name="md022" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md022"></a>

```typescript
public readonly md022: Md022;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.Md022">Md022</a>

MD022 - Headings should be surrounded by blank lines.

---

##### `md023`<sup>Optional</sup> <a name="md023" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md023"></a>

```typescript
public readonly md023: boolean;
```

- *Type:* boolean

MD023 - Headings must start at the beginning of the line.

---

##### `md024`<sup>Optional</sup> <a name="md024" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md024"></a>

```typescript
public readonly md024: Md024;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.Md024">Md024</a>

MD024 - Multiple headings with the same content.

---

##### `md025`<sup>Optional</sup> <a name="md025" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md025"></a>

```typescript
public readonly md025: Md025;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.Md025">Md025</a>

MD025 - Multiple top-level headings in the same document.

---

##### `md026`<sup>Optional</sup> <a name="md026" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md026"></a>

```typescript
public readonly md026: Md026;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.Md026">Md026</a>

MD026 - Trailing punctuation in heading.

---

##### `md027`<sup>Optional</sup> <a name="md027" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md027"></a>

```typescript
public readonly md027: boolean;
```

- *Type:* boolean

MD027 - Multiple spaces after blockquote symbol.

---

##### `md028`<sup>Optional</sup> <a name="md028" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md028"></a>

```typescript
public readonly md028: boolean;
```

- *Type:* boolean

MD028 - Blank line inside blockquote.

---

##### `md029`<sup>Optional</sup> <a name="md029" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md029"></a>

```typescript
public readonly md029: Md029;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.Md029">Md029</a>

MD029 - Ordered list item prefix.

---

##### `md030`<sup>Optional</sup> <a name="md030" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md030"></a>

```typescript
public readonly md030: Md030;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.Md030">Md030</a>

MD030 - Spaces after list markers.

---

##### `md031`<sup>Optional</sup> <a name="md031" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md031"></a>

```typescript
public readonly md031: Md031;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.Md031">Md031</a>

MD031 - Fenced code blocks should be surrounded by blank lines.

---

##### `md032`<sup>Optional</sup> <a name="md032" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md032"></a>

```typescript
public readonly md032: boolean;
```

- *Type:* boolean

MD032 - Lists should be surrounded by blank lines.

---

##### `md033`<sup>Optional</sup> <a name="md033" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md033"></a>

```typescript
public readonly md033: Md033;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.Md033">Md033</a>

MD033 - Inline HTML.

---

##### `md034`<sup>Optional</sup> <a name="md034" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md034"></a>

```typescript
public readonly md034: boolean;
```

- *Type:* boolean

MD034 - Bare URL used.

---

##### `md035`<sup>Optional</sup> <a name="md035" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md035"></a>

```typescript
public readonly md035: Md035;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.Md035">Md035</a>

MD035 - Horizontal rule style.

---

##### `md036`<sup>Optional</sup> <a name="md036" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md036"></a>

```typescript
public readonly md036: boolean;
```

- *Type:* boolean

MD036 - Emphasis used instead of a heading.

---

##### `md037`<sup>Optional</sup> <a name="md037" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md037"></a>

```typescript
public readonly md037: boolean;
```

- *Type:* boolean

MD037 - Spaces inside emphasis markers.

---

##### `md038`<sup>Optional</sup> <a name="md038" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md038"></a>

```typescript
public readonly md038: boolean;
```

- *Type:* boolean

MD038 - Spaces inside code span elements.

---

##### `md039`<sup>Optional</sup> <a name="md039" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md039"></a>

```typescript
public readonly md039: boolean;
```

- *Type:* boolean

MD039 - Spaces inside link text.

---

##### `md040`<sup>Optional</sup> <a name="md040" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md040"></a>

```typescript
public readonly md040: Md040;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.Md040">Md040</a>

MD040 - Fenced code blocks should have a language specified.

---

##### `md041`<sup>Optional</sup> <a name="md041" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md041"></a>

```typescript
public readonly md041: Md041;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.Md041">Md041</a>

MD041 - First line in a file should be a top-level heading.

---

##### `md042`<sup>Optional</sup> <a name="md042" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md042"></a>

```typescript
public readonly md042: boolean;
```

- *Type:* boolean

MD042 - No empty links.

---

##### `md043`<sup>Optional</sup> <a name="md043" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md043"></a>

```typescript
public readonly md043: Md043;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.Md043">Md043</a>

MD043 - Required heading structure.

---

##### `md044`<sup>Optional</sup> <a name="md044" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md044"></a>

```typescript
public readonly md044: boolean;
```

- *Type:* boolean

MD044 - Proper names should have the correct capitalization.

---

##### `md045`<sup>Optional</sup> <a name="md045" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md045"></a>

```typescript
public readonly md045: boolean;
```

- *Type:* boolean

MD045 - Images should have alternate text (alt text).

---

##### `md046`<sup>Optional</sup> <a name="md046" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md046"></a>

```typescript
public readonly md046: Md046;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.Md046">Md046</a>

MD046 - Code block style.

---

##### `md047`<sup>Optional</sup> <a name="md047" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md047"></a>

```typescript
public readonly md047: boolean;
```

- *Type:* boolean

MD047 - Files should end with a single newline character.

---

##### `md048`<sup>Optional</sup> <a name="md048" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md048"></a>

```typescript
public readonly md048: Md048;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.Md048">Md048</a>

MD048 - Code fence style.

---

##### `md049`<sup>Optional</sup> <a name="md049" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md049"></a>

```typescript
public readonly md049: Md049;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.Md049">Md049</a>

MD049 - Emphasis style should be consistent.

---

##### `md050`<sup>Optional</sup> <a name="md050" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md050"></a>

```typescript
public readonly md050: Md050;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.Md050">Md050</a>

MD050 - Strong style should be consistent.

---

##### `md051`<sup>Optional</sup> <a name="md051" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md051"></a>

```typescript
public readonly md051: boolean;
```

- *Type:* boolean

MD051 - Link fragments should be valid.

---

##### `md052`<sup>Optional</sup> <a name="md052" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md052"></a>

```typescript
public readonly md052: boolean;
```

- *Type:* boolean

MD052 - Reference links and images should use a label that is defined.

---

##### `md053`<sup>Optional</sup> <a name="md053" id="@thoroc/projen-typescript-git-hooks.MarkdownlintRules.property.md053"></a>

```typescript
public readonly md053: Md053;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.Md053">Md053</a>

MD053 - Link and image reference definitions should be needed.

---

### McpConfigOptions <a name="McpConfigOptions" id="@thoroc/projen-typescript-git-hooks.McpConfigOptions"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.McpConfigOptions.Initializer"></a>

```typescript
import { McpConfigOptions } from '@thoroc/projen-typescript-git-hooks'

const mcpConfigOptions: McpConfigOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.McpConfigOptions.property.servers">servers</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.McpServer">McpServer</a>[]</code> | *No description.* |

---

##### `servers`<sup>Required</sup> <a name="servers" id="@thoroc/projen-typescript-git-hooks.McpConfigOptions.property.servers"></a>

```typescript
public readonly servers: McpServer[];
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.McpServer">McpServer</a>[]

---

### McpServerConfig <a name="McpServerConfig" id="@thoroc/projen-typescript-git-hooks.McpServerConfig"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.McpServerConfig.Initializer"></a>

```typescript
import { McpServerConfig } from '@thoroc/projen-typescript-git-hooks'

const mcpServerConfig: McpServerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.McpServerConfig.property.command">command</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.McpServerConfig.property.args">args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.McpServerConfig.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `command`<sup>Required</sup> <a name="command" id="@thoroc/projen-typescript-git-hooks.McpServerConfig.property.command"></a>

```typescript
public readonly command: string;
```

- *Type:* string

---

##### `args`<sup>Optional</sup> <a name="args" id="@thoroc/projen-typescript-git-hooks.McpServerConfig.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

---

##### `env`<sup>Optional</sup> <a name="env" id="@thoroc/projen-typescript-git-hooks.McpServerConfig.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

### Md003 <a name="Md003" id="@thoroc/projen-typescript-git-hooks.Md003"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.Md003.Initializer"></a>

```typescript
import { Md003 } from '@thoroc/projen-typescript-git-hooks'

const md003: Md003 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md003.property.style">style</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.HeadingStyle">HeadingStyle</a></code> | Heading style. |

---

##### `style`<sup>Optional</sup> <a name="style" id="@thoroc/projen-typescript-git-hooks.Md003.property.style"></a>

```typescript
public readonly style: HeadingStyle;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.HeadingStyle">HeadingStyle</a>
- *Default:* HeadingStyle.CONSISTENT

Heading style.

---

### Md004 <a name="Md004" id="@thoroc/projen-typescript-git-hooks.Md004"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.Md004.Initializer"></a>

```typescript
import { Md004 } from '@thoroc/projen-typescript-git-hooks'

const md004: Md004 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md004.property.style">style</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.UnorderedListStyle">UnorderedListStyle</a></code> | List style. |

---

##### `style`<sup>Optional</sup> <a name="style" id="@thoroc/projen-typescript-git-hooks.Md004.property.style"></a>

```typescript
public readonly style: UnorderedListStyle;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.UnorderedListStyle">UnorderedListStyle</a>
- *Default:* UnorderedListStyle.CONSISTENT

List style.

---

### Md007 <a name="Md007" id="@thoroc/projen-typescript-git-hooks.Md007"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.Md007.Initializer"></a>

```typescript
import { Md007 } from '@thoroc/projen-typescript-git-hooks'

const md007: Md007 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md007.property.indent">indent</a></code> | <code>number</code> | Spaces for indent. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md007.property.startIndent">startIndent</a></code> | <code>number</code> | Spaces for first level indent (when start_indented is set). |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md007.property.startIndented">startIndented</a></code> | <code>boolean</code> | Whether to indent the first level of the list. |

---

##### `indent`<sup>Optional</sup> <a name="indent" id="@thoroc/projen-typescript-git-hooks.Md007.property.indent"></a>

```typescript
public readonly indent: number;
```

- *Type:* number
- *Default:* 2

Spaces for indent.

---

##### `startIndent`<sup>Optional</sup> <a name="startIndent" id="@thoroc/projen-typescript-git-hooks.Md007.property.startIndent"></a>

```typescript
public readonly startIndent: number;
```

- *Type:* number
- *Default:* 2

Spaces for first level indent (when start_indented is set).

---

##### `startIndented`<sup>Optional</sup> <a name="startIndented" id="@thoroc/projen-typescript-git-hooks.Md007.property.startIndented"></a>

```typescript
public readonly startIndented: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to indent the first level of the list.

---

### Md009 <a name="Md009" id="@thoroc/projen-typescript-git-hooks.Md009"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.Md009.Initializer"></a>

```typescript
import { Md009 } from '@thoroc/projen-typescript-git-hooks'

const md009: Md009 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md009.property.brSpaces">brSpaces</a></code> | <code>number</code> | Spaces for line break. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md009.property.listItemEmptyLines">listItemEmptyLines</a></code> | <code>boolean</code> | Allow spaces for empty lines in list items. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md009.property.strict">strict</a></code> | <code>boolean</code> | Include unnecessary breaks. |

---

##### `brSpaces`<sup>Optional</sup> <a name="brSpaces" id="@thoroc/projen-typescript-git-hooks.Md009.property.brSpaces"></a>

```typescript
public readonly brSpaces: number;
```

- *Type:* number
- *Default:* 2

Spaces for line break.

---

##### `listItemEmptyLines`<sup>Optional</sup> <a name="listItemEmptyLines" id="@thoroc/projen-typescript-git-hooks.Md009.property.listItemEmptyLines"></a>

```typescript
public readonly listItemEmptyLines: boolean;
```

- *Type:* boolean
- *Default:* false

Allow spaces for empty lines in list items.

---

##### `strict`<sup>Optional</sup> <a name="strict" id="@thoroc/projen-typescript-git-hooks.Md009.property.strict"></a>

```typescript
public readonly strict: boolean;
```

- *Type:* boolean
- *Default:* false

Include unnecessary breaks.

---

### Md010 <a name="Md010" id="@thoroc/projen-typescript-git-hooks.Md010"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.Md010.Initializer"></a>

```typescript
import { Md010 } from '@thoroc/projen-typescript-git-hooks'

const md010: Md010 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md010.property.codeBlocks">codeBlocks</a></code> | <code>boolean</code> | Include code blocks. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md010.property.ignoreCodeLanguages">ignoreCodeLanguages</a></code> | <code>string[]</code> | Fenced code languages to ignore. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md010.property.spacesPerTab">spacesPerTab</a></code> | <code>number</code> | Number of spaces for each hard tab. |

---

##### `codeBlocks`<sup>Optional</sup> <a name="codeBlocks" id="@thoroc/projen-typescript-git-hooks.Md010.property.codeBlocks"></a>

```typescript
public readonly codeBlocks: boolean;
```

- *Type:* boolean
- *Default:* true

Include code blocks.

---

##### `ignoreCodeLanguages`<sup>Optional</sup> <a name="ignoreCodeLanguages" id="@thoroc/projen-typescript-git-hooks.Md010.property.ignoreCodeLanguages"></a>

```typescript
public readonly ignoreCodeLanguages: string[];
```

- *Type:* string[]
- *Default:* []

Fenced code languages to ignore.

---

##### `spacesPerTab`<sup>Optional</sup> <a name="spacesPerTab" id="@thoroc/projen-typescript-git-hooks.Md010.property.spacesPerTab"></a>

```typescript
public readonly spacesPerTab: number;
```

- *Type:* number
- *Default:* 1

Number of spaces for each hard tab.

---

### Md012 <a name="Md012" id="@thoroc/projen-typescript-git-hooks.Md012"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.Md012.Initializer"></a>

```typescript
import { Md012 } from '@thoroc/projen-typescript-git-hooks'

const md012: Md012 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md012.property.maximum">maximum</a></code> | <code>number</code> | Consecutive blank lines. |

---

##### `maximum`<sup>Optional</sup> <a name="maximum" id="@thoroc/projen-typescript-git-hooks.Md012.property.maximum"></a>

```typescript
public readonly maximum: number;
```

- *Type:* number
- *Default:* 1

Consecutive blank lines.

---

### Md013 <a name="Md013" id="@thoroc/projen-typescript-git-hooks.Md013"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.Md013.Initializer"></a>

```typescript
import { Md013 } from '@thoroc/projen-typescript-git-hooks'

const md013: Md013 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md013.property.codeBlockLineLength">codeBlockLineLength</a></code> | <code>number</code> | Number of characters for code blocks. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md013.property.codeBlocks">codeBlocks</a></code> | <code>boolean</code> | Include code blocks. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md013.property.headers">headers</a></code> | <code>boolean</code> | Include headings. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md013.property.headingLineLength">headingLineLength</a></code> | <code>number</code> | Number of characters for headings. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md013.property.headings">headings</a></code> | <code>boolean</code> | Include headings. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md013.property.lineLength">lineLength</a></code> | <code>number</code> | Number of characters. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md013.property.stern">stern</a></code> | <code>boolean</code> | Stern length checking. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md013.property.strict">strict</a></code> | <code>boolean</code> | Strict length checking. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md013.property.tables">tables</a></code> | <code>boolean</code> | Include tables. |

---

##### `codeBlockLineLength`<sup>Optional</sup> <a name="codeBlockLineLength" id="@thoroc/projen-typescript-git-hooks.Md013.property.codeBlockLineLength"></a>

```typescript
public readonly codeBlockLineLength: number;
```

- *Type:* number
- *Default:* 80

Number of characters for code blocks.

---

##### `codeBlocks`<sup>Optional</sup> <a name="codeBlocks" id="@thoroc/projen-typescript-git-hooks.Md013.property.codeBlocks"></a>

```typescript
public readonly codeBlocks: boolean;
```

- *Type:* boolean
- *Default:* true

Include code blocks.

---

##### ~~`headers`~~<sup>Optional</sup> <a name="headers" id="@thoroc/projen-typescript-git-hooks.Md013.property.headers"></a>

- *Deprecated:* use headings instead

```typescript
public readonly headers: boolean;
```

- *Type:* boolean
- *Default:* true

Include headings.

---

##### `headingLineLength`<sup>Optional</sup> <a name="headingLineLength" id="@thoroc/projen-typescript-git-hooks.Md013.property.headingLineLength"></a>

```typescript
public readonly headingLineLength: number;
```

- *Type:* number
- *Default:* 80

Number of characters for headings.

---

##### `headings`<sup>Optional</sup> <a name="headings" id="@thoroc/projen-typescript-git-hooks.Md013.property.headings"></a>

```typescript
public readonly headings: boolean;
```

- *Type:* boolean
- *Default:* true

Include headings.

---

##### `lineLength`<sup>Optional</sup> <a name="lineLength" id="@thoroc/projen-typescript-git-hooks.Md013.property.lineLength"></a>

```typescript
public readonly lineLength: number;
```

- *Type:* number
- *Default:* 80

Number of characters.

---

##### `stern`<sup>Optional</sup> <a name="stern" id="@thoroc/projen-typescript-git-hooks.Md013.property.stern"></a>

```typescript
public readonly stern: boolean;
```

- *Type:* boolean
- *Default:* false

Stern length checking.

---

##### `strict`<sup>Optional</sup> <a name="strict" id="@thoroc/projen-typescript-git-hooks.Md013.property.strict"></a>

```typescript
public readonly strict: boolean;
```

- *Type:* boolean
- *Default:* false

Strict length checking.

---

##### `tables`<sup>Optional</sup> <a name="tables" id="@thoroc/projen-typescript-git-hooks.Md013.property.tables"></a>

```typescript
public readonly tables: boolean;
```

- *Type:* boolean
- *Default:* true

Include tables.

---

### Md022 <a name="Md022" id="@thoroc/projen-typescript-git-hooks.Md022"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.Md022.Initializer"></a>

```typescript
import { Md022 } from '@thoroc/projen-typescript-git-hooks'

const md022: Md022 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md022.property.linesAbove">linesAbove</a></code> | <code>number</code> | Blank lines above heading. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md022.property.linesBelow">linesBelow</a></code> | <code>number</code> | Blank lines below heading. |

---

##### `linesAbove`<sup>Optional</sup> <a name="linesAbove" id="@thoroc/projen-typescript-git-hooks.Md022.property.linesAbove"></a>

```typescript
public readonly linesAbove: number;
```

- *Type:* number
- *Default:* 1

Blank lines above heading.

---

##### `linesBelow`<sup>Optional</sup> <a name="linesBelow" id="@thoroc/projen-typescript-git-hooks.Md022.property.linesBelow"></a>

```typescript
public readonly linesBelow: number;
```

- *Type:* number
- *Default:* 1

Blank lines below heading.

---

### Md024 <a name="Md024" id="@thoroc/projen-typescript-git-hooks.Md024"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.Md024.Initializer"></a>

```typescript
import { Md024 } from '@thoroc/projen-typescript-git-hooks'

const md024: Md024 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md024.property.allowDifferentNesting">allowDifferentNesting</a></code> | <code>boolean</code> | Only check sibling headings. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md024.property.siblingsOnly">siblingsOnly</a></code> | <code>boolean</code> | Only check sibling headings. |

---

##### `allowDifferentNesting`<sup>Optional</sup> <a name="allowDifferentNesting" id="@thoroc/projen-typescript-git-hooks.Md024.property.allowDifferentNesting"></a>

```typescript
public readonly allowDifferentNesting: boolean;
```

- *Type:* boolean
- *Default:* false

Only check sibling headings.

---

##### `siblingsOnly`<sup>Optional</sup> <a name="siblingsOnly" id="@thoroc/projen-typescript-git-hooks.Md024.property.siblingsOnly"></a>

```typescript
public readonly siblingsOnly: boolean;
```

- *Type:* boolean
- *Default:* false

Only check sibling headings.

---

### Md025 <a name="Md025" id="@thoroc/projen-typescript-git-hooks.Md025"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.Md025.Initializer"></a>

```typescript
import { Md025 } from '@thoroc/projen-typescript-git-hooks'

const md025: Md025 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md025.property.frontMatterTitle">frontMatterTitle</a></code> | <code>string</code> | RegExp for matching title in front matter. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md025.property.level">level</a></code> | <code>number</code> | Heading level. |

---

##### `frontMatterTitle`<sup>Optional</sup> <a name="frontMatterTitle" id="@thoroc/projen-typescript-git-hooks.Md025.property.frontMatterTitle"></a>

```typescript
public readonly frontMatterTitle: string;
```

- *Type:* string
- *Default:* ^\s*title\s*[:=]

RegExp for matching title in front matter.

---

##### `level`<sup>Optional</sup> <a name="level" id="@thoroc/projen-typescript-git-hooks.Md025.property.level"></a>

```typescript
public readonly level: number;
```

- *Type:* number
- *Default:* 1

Heading level.

---

### Md026 <a name="Md026" id="@thoroc/projen-typescript-git-hooks.Md026"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.Md026.Initializer"></a>

```typescript
import { Md026 } from '@thoroc/projen-typescript-git-hooks'

const md026: Md026 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md026.property.punctuation">punctuation</a></code> | <code>string</code> | Punctuation characters not allowed at end of headings. |

---

##### `punctuation`<sup>Optional</sup> <a name="punctuation" id="@thoroc/projen-typescript-git-hooks.Md026.property.punctuation"></a>

```typescript
public readonly punctuation: string;
```

- *Type:* string
- *Default:* .,;:!。，；：！

Punctuation characters not allowed at end of headings.

---

### Md029 <a name="Md029" id="@thoroc/projen-typescript-git-hooks.Md029"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.Md029.Initializer"></a>

```typescript
import { Md029 } from '@thoroc/projen-typescript-git-hooks'

const md029: Md029 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md029.property.style">style</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.OrderedListItemPrefix">OrderedListItemPrefix</a></code> | List style. |

---

##### `style`<sup>Optional</sup> <a name="style" id="@thoroc/projen-typescript-git-hooks.Md029.property.style"></a>

```typescript
public readonly style: OrderedListItemPrefix;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.OrderedListItemPrefix">OrderedListItemPrefix</a>
- *Default:* OrderedListItemPrefix.ONE_OR_ORDERED

List style.

---

### Md030 <a name="Md030" id="@thoroc/projen-typescript-git-hooks.Md030"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.Md030.Initializer"></a>

```typescript
import { Md030 } from '@thoroc/projen-typescript-git-hooks'

const md030: Md030 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md030.property.ordereedListMulti">ordereedListMulti</a></code> | <code>number</code> | Spaces for multi-line ordered list items. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md030.property.ordereedListSingle">ordereedListSingle</a></code> | <code>number</code> | Spaces for single-line ordered list items. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md030.property.unorderedListMulti">unorderedListMulti</a></code> | <code>number</code> | Spaces for multi-line unordered list items. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md030.property.unorderedListSingle">unorderedListSingle</a></code> | <code>number</code> | Spaces for single-line unordered list items. |

---

##### `ordereedListMulti`<sup>Optional</sup> <a name="ordereedListMulti" id="@thoroc/projen-typescript-git-hooks.Md030.property.ordereedListMulti"></a>

```typescript
public readonly ordereedListMulti: number;
```

- *Type:* number
- *Default:* 1

Spaces for multi-line ordered list items.

---

##### `ordereedListSingle`<sup>Optional</sup> <a name="ordereedListSingle" id="@thoroc/projen-typescript-git-hooks.Md030.property.ordereedListSingle"></a>

```typescript
public readonly ordereedListSingle: number;
```

- *Type:* number
- *Default:* 1

Spaces for single-line ordered list items.

---

##### `unorderedListMulti`<sup>Optional</sup> <a name="unorderedListMulti" id="@thoroc/projen-typescript-git-hooks.Md030.property.unorderedListMulti"></a>

```typescript
public readonly unorderedListMulti: number;
```

- *Type:* number
- *Default:* 1

Spaces for multi-line unordered list items.

---

##### `unorderedListSingle`<sup>Optional</sup> <a name="unorderedListSingle" id="@thoroc/projen-typescript-git-hooks.Md030.property.unorderedListSingle"></a>

```typescript
public readonly unorderedListSingle: number;
```

- *Type:* number
- *Default:* 1

Spaces for single-line unordered list items.

---

### Md031 <a name="Md031" id="@thoroc/projen-typescript-git-hooks.Md031"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.Md031.Initializer"></a>

```typescript
import { Md031 } from '@thoroc/projen-typescript-git-hooks'

const md031: Md031 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md031.property.listItems">listItems</a></code> | <code>boolean</code> | Include list items. |

---

##### `listItems`<sup>Optional</sup> <a name="listItems" id="@thoroc/projen-typescript-git-hooks.Md031.property.listItems"></a>

```typescript
public readonly listItems: boolean;
```

- *Type:* boolean
- *Default:* true

Include list items.

---

### Md033 <a name="Md033" id="@thoroc/projen-typescript-git-hooks.Md033"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.Md033.Initializer"></a>

```typescript
import { Md033 } from '@thoroc/projen-typescript-git-hooks'

const md033: Md033 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md033.property.allowedElements">allowedElements</a></code> | <code>string[]</code> | Allowed elements. |

---

##### `allowedElements`<sup>Optional</sup> <a name="allowedElements" id="@thoroc/projen-typescript-git-hooks.Md033.property.allowedElements"></a>

```typescript
public readonly allowedElements: string[];
```

- *Type:* string[]
- *Default:* []

Allowed elements.

---

### Md035 <a name="Md035" id="@thoroc/projen-typescript-git-hooks.Md035"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.Md035.Initializer"></a>

```typescript
import { Md035 } from '@thoroc/projen-typescript-git-hooks'

const md035: Md035 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md035.property.style">style</a></code> | <code>string</code> | Horizontal rule style. |

---

##### `style`<sup>Optional</sup> <a name="style" id="@thoroc/projen-typescript-git-hooks.Md035.property.style"></a>

```typescript
public readonly style: string;
```

- *Type:* string
- *Default:* consistent

Horizontal rule style.

---

### Md036 <a name="Md036" id="@thoroc/projen-typescript-git-hooks.Md036"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.Md036.Initializer"></a>

```typescript
import { Md036 } from '@thoroc/projen-typescript-git-hooks'

const md036: Md036 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md036.property.punctuation">punctuation</a></code> | <code>string</code> | Punctuation characters. |

---

##### `punctuation`<sup>Optional</sup> <a name="punctuation" id="@thoroc/projen-typescript-git-hooks.Md036.property.punctuation"></a>

```typescript
public readonly punctuation: string;
```

- *Type:* string
- *Default:* .,;:!?。，；：！？

Punctuation characters.

---

### Md040 <a name="Md040" id="@thoroc/projen-typescript-git-hooks.Md040"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.Md040.Initializer"></a>

```typescript
import { Md040 } from '@thoroc/projen-typescript-git-hooks'

const md040: Md040 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md040.property.allowedLanguages">allowedLanguages</a></code> | <code>string[]</code> | List of languages. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md040.property.languageOnly">languageOnly</a></code> | <code>boolean</code> | Require language only. |

---

##### `allowedLanguages`<sup>Optional</sup> <a name="allowedLanguages" id="@thoroc/projen-typescript-git-hooks.Md040.property.allowedLanguages"></a>

```typescript
public readonly allowedLanguages: string[];
```

- *Type:* string[]
- *Default:* []

List of languages.

---

##### `languageOnly`<sup>Optional</sup> <a name="languageOnly" id="@thoroc/projen-typescript-git-hooks.Md040.property.languageOnly"></a>

```typescript
public readonly languageOnly: boolean;
```

- *Type:* boolean
- *Default:* false

Require language only.

---

### Md041 <a name="Md041" id="@thoroc/projen-typescript-git-hooks.Md041"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.Md041.Initializer"></a>

```typescript
import { Md041 } from '@thoroc/projen-typescript-git-hooks'

const md041: Md041 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md041.property.frontMatterTitle">frontMatterTitle</a></code> | <code>string</code> | RegExp for matching title in front matter. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md041.property.level">level</a></code> | <code>number</code> | Heading level. |

---

##### `frontMatterTitle`<sup>Optional</sup> <a name="frontMatterTitle" id="@thoroc/projen-typescript-git-hooks.Md041.property.frontMatterTitle"></a>

```typescript
public readonly frontMatterTitle: string;
```

- *Type:* string
- *Default:* ^\s*title\s*[:=]

RegExp for matching title in front matter.

---

##### `level`<sup>Optional</sup> <a name="level" id="@thoroc/projen-typescript-git-hooks.Md041.property.level"></a>

```typescript
public readonly level: number;
```

- *Type:* number
- *Default:* 1

Heading level.

---

### Md043 <a name="Md043" id="@thoroc/projen-typescript-git-hooks.Md043"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.Md043.Initializer"></a>

```typescript
import { Md043 } from '@thoroc/projen-typescript-git-hooks'

const md043: Md043 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md043.property.headers">headers</a></code> | <code>string[]</code> | List of headings. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md043.property.headings">headings</a></code> | <code>string[]</code> | List of headings. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md043.property.matchCase">matchCase</a></code> | <code>boolean</code> | Match case of headings. |

---

##### ~~`headers`~~<sup>Optional</sup> <a name="headers" id="@thoroc/projen-typescript-git-hooks.Md043.property.headers"></a>

- *Deprecated:* use headings instead

```typescript
public readonly headers: string[];
```

- *Type:* string[]
- *Default:* []

List of headings.

---

##### `headings`<sup>Optional</sup> <a name="headings" id="@thoroc/projen-typescript-git-hooks.Md043.property.headings"></a>

```typescript
public readonly headings: string[];
```

- *Type:* string[]
- *Default:* []

List of headings.

---

##### `matchCase`<sup>Optional</sup> <a name="matchCase" id="@thoroc/projen-typescript-git-hooks.Md043.property.matchCase"></a>

```typescript
public readonly matchCase: boolean;
```

- *Type:* boolean
- *Default:* false

Match case of headings.

---

### Md044 <a name="Md044" id="@thoroc/projen-typescript-git-hooks.Md044"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.Md044.Initializer"></a>

```typescript
import { Md044 } from '@thoroc/projen-typescript-git-hooks'

const md044: Md044 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md044.property.codeBlocks">codeBlocks</a></code> | <code>boolean</code> | Include code blocks. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md044.property.htmlElements">htmlElements</a></code> | <code>boolean</code> | Include HTML elements. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md044.property.names">names</a></code> | <code>string[]</code> | List of proper names. |

---

##### `codeBlocks`<sup>Optional</sup> <a name="codeBlocks" id="@thoroc/projen-typescript-git-hooks.Md044.property.codeBlocks"></a>

```typescript
public readonly codeBlocks: boolean;
```

- *Type:* boolean
- *Default:* true

Include code blocks.

---

##### `htmlElements`<sup>Optional</sup> <a name="htmlElements" id="@thoroc/projen-typescript-git-hooks.Md044.property.htmlElements"></a>

```typescript
public readonly htmlElements: boolean;
```

- *Type:* boolean
- *Default:* true

Include HTML elements.

---

##### `names`<sup>Optional</sup> <a name="names" id="@thoroc/projen-typescript-git-hooks.Md044.property.names"></a>

```typescript
public readonly names: string[];
```

- *Type:* string[]
- *Default:* []

List of proper names.

---

### Md046 <a name="Md046" id="@thoroc/projen-typescript-git-hooks.Md046"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.Md046.Initializer"></a>

```typescript
import { Md046 } from '@thoroc/projen-typescript-git-hooks'

const md046: Md046 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md046.property.style">style</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.CodeBlockStyle">CodeBlockStyle</a></code> | Block style. |

---

##### `style`<sup>Required</sup> <a name="style" id="@thoroc/projen-typescript-git-hooks.Md046.property.style"></a>

```typescript
public readonly style: CodeBlockStyle;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.CodeBlockStyle">CodeBlockStyle</a>
- *Default:* CodeBlockStyle.CONSISTENT

Block style.

---

### Md048 <a name="Md048" id="@thoroc/projen-typescript-git-hooks.Md048"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.Md048.Initializer"></a>

```typescript
import { Md048 } from '@thoroc/projen-typescript-git-hooks'

const md048: Md048 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md048.property.style">style</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.CodeFenceStyle">CodeFenceStyle</a></code> | Code fence style. |

---

##### `style`<sup>Optional</sup> <a name="style" id="@thoroc/projen-typescript-git-hooks.Md048.property.style"></a>

```typescript
public readonly style: CodeFenceStyle;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.CodeFenceStyle">CodeFenceStyle</a>
- *Default:* CodeFenceStyle.CONSISTENT

Code fence style.

---

### Md049 <a name="Md049" id="@thoroc/projen-typescript-git-hooks.Md049"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.Md049.Initializer"></a>

```typescript
import { Md049 } from '@thoroc/projen-typescript-git-hooks'

const md049: Md049 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md049.property.style">style</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.EmphasisStyle">EmphasisStyle</a></code> | Emphasis style should be consistent. |

---

##### `style`<sup>Optional</sup> <a name="style" id="@thoroc/projen-typescript-git-hooks.Md049.property.style"></a>

```typescript
public readonly style: EmphasisStyle;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.EmphasisStyle">EmphasisStyle</a>
- *Default:* EmphasisStyle.CONSISTENT

Emphasis style should be consistent.

---

### Md050 <a name="Md050" id="@thoroc/projen-typescript-git-hooks.Md050"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.Md050.Initializer"></a>

```typescript
import { Md050 } from '@thoroc/projen-typescript-git-hooks'

const md050: Md050 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md050.property.style">style</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.StrongStyle">StrongStyle</a></code> | Strong style should be consistent. |

---

##### `style`<sup>Optional</sup> <a name="style" id="@thoroc/projen-typescript-git-hooks.Md050.property.style"></a>

```typescript
public readonly style: StrongStyle;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.StrongStyle">StrongStyle</a>
- *Default:* StrongStyle.CONSISTENT

Strong style should be consistent.

---

### Md053 <a name="Md053" id="@thoroc/projen-typescript-git-hooks.Md053"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.Md053.Initializer"></a>

```typescript
import { Md053 } from '@thoroc/projen-typescript-git-hooks'

const md053: Md053 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Md053.property.ignoredDefinitions">ignoredDefinitions</a></code> | <code>string[]</code> | Ignored definitions. |

---

##### `ignoredDefinitions`<sup>Optional</sup> <a name="ignoredDefinitions" id="@thoroc/projen-typescript-git-hooks.Md053.property.ignoredDefinitions"></a>

```typescript
public readonly ignoredDefinitions: string[];
```

- *Type:* string[]
- *Default:* ["//"]

Ignored definitions.

---

### MistralVibeOptions <a name="MistralVibeOptions" id="@thoroc/projen-typescript-git-hooks.MistralVibeOptions"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.MistralVibeOptions.Initializer"></a>

```typescript
import { MistralVibeOptions } from '@thoroc/projen-typescript-git-hooks'

const mistralVibeOptions: MistralVibeOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MistralVibeOptions.property.mcpServers">mcpServers</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.McpServer">McpServer</a>[]</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.MistralVibeOptions.property.model">model</a></code> | <code>string</code> | *No description.* |

---

##### `mcpServers`<sup>Optional</sup> <a name="mcpServers" id="@thoroc/projen-typescript-git-hooks.MistralVibeOptions.property.mcpServers"></a>

```typescript
public readonly mcpServers: McpServer[];
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.McpServer">McpServer</a>[]

---

##### `model`<sup>Optional</sup> <a name="model" id="@thoroc/projen-typescript-git-hooks.MistralVibeOptions.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

---

### OpenAICodexHookEntry <a name="OpenAICodexHookEntry" id="@thoroc/projen-typescript-git-hooks.OpenAICodexHookEntry"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.OpenAICodexHookEntry.Initializer"></a>

```typescript
import { OpenAICodexHookEntry } from '@thoroc/projen-typescript-git-hooks'

const openAICodexHookEntry: OpenAICodexHookEntry = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenAICodexHookEntry.property.command">command</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenAICodexHookEntry.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `command`<sup>Required</sup> <a name="command" id="@thoroc/projen-typescript-git-hooks.OpenAICodexHookEntry.property.command"></a>

```typescript
public readonly command: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@thoroc/projen-typescript-git-hooks.OpenAICodexHookEntry.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

### OpenAICodexHookGroup <a name="OpenAICodexHookGroup" id="@thoroc/projen-typescript-git-hooks.OpenAICodexHookGroup"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.OpenAICodexHookGroup.Initializer"></a>

```typescript
import { OpenAICodexHookGroup } from '@thoroc/projen-typescript-git-hooks'

const openAICodexHookGroup: OpenAICodexHookGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenAICodexHookGroup.property.hooks">hooks</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.OpenAICodexHookEntry">OpenAICodexHookEntry</a>[]</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenAICodexHookGroup.property.matcher">matcher</a></code> | <code>string</code> | *No description.* |

---

##### `hooks`<sup>Required</sup> <a name="hooks" id="@thoroc/projen-typescript-git-hooks.OpenAICodexHookGroup.property.hooks"></a>

```typescript
public readonly hooks: OpenAICodexHookEntry[];
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.OpenAICodexHookEntry">OpenAICodexHookEntry</a>[]

---

##### `matcher`<sup>Optional</sup> <a name="matcher" id="@thoroc/projen-typescript-git-hooks.OpenAICodexHookGroup.property.matcher"></a>

```typescript
public readonly matcher: string;
```

- *Type:* string

---

### OpenAICodexOptions <a name="OpenAICodexOptions" id="@thoroc/projen-typescript-git-hooks.OpenAICodexOptions"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.OpenAICodexOptions.Initializer"></a>

```typescript
import { OpenAICodexOptions } from '@thoroc/projen-typescript-git-hooks'

const openAICodexOptions: OpenAICodexOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenAICodexOptions.property.approvalPolicy">approvalPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenAICodexOptions.property.hooks">hooks</a></code> | <code>{[ key: string ]: <a href="#@thoroc/projen-typescript-git-hooks.OpenAICodexHookGroup">OpenAICodexHookGroup</a>[]}</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenAICodexOptions.property.mcpServers">mcpServers</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.McpServer">McpServer</a>[]</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenAICodexOptions.property.model">model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenAICodexOptions.property.sandboxMode">sandboxMode</a></code> | <code>string</code> | *No description.* |

---

##### `approvalPolicy`<sup>Optional</sup> <a name="approvalPolicy" id="@thoroc/projen-typescript-git-hooks.OpenAICodexOptions.property.approvalPolicy"></a>

```typescript
public readonly approvalPolicy: string;
```

- *Type:* string

---

##### `hooks`<sup>Optional</sup> <a name="hooks" id="@thoroc/projen-typescript-git-hooks.OpenAICodexOptions.property.hooks"></a>

```typescript
public readonly hooks: {[ key: string ]: OpenAICodexHookGroup[]};
```

- *Type:* {[ key: string ]: <a href="#@thoroc/projen-typescript-git-hooks.OpenAICodexHookGroup">OpenAICodexHookGroup</a>[]}

---

##### `mcpServers`<sup>Optional</sup> <a name="mcpServers" id="@thoroc/projen-typescript-git-hooks.OpenAICodexOptions.property.mcpServers"></a>

```typescript
public readonly mcpServers: McpServer[];
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.McpServer">McpServer</a>[]

---

##### `model`<sup>Optional</sup> <a name="model" id="@thoroc/projen-typescript-git-hooks.OpenAICodexOptions.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

---

##### `sandboxMode`<sup>Optional</sup> <a name="sandboxMode" id="@thoroc/projen-typescript-git-hooks.OpenAICodexOptions.property.sandboxMode"></a>

```typescript
public readonly sandboxMode: string;
```

- *Type:* string

---

### OpenCodeOptions <a name="OpenCodeOptions" id="@thoroc/projen-typescript-git-hooks.OpenCodeOptions"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.OpenCodeOptions.Initializer"></a>

```typescript
import { OpenCodeOptions } from '@thoroc/projen-typescript-git-hooks'

const openCodeOptions: OpenCodeOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenCodeOptions.property.autoupdate">autoupdate</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenCodeOptions.property.mcpServers">mcpServers</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.McpServer">McpServer</a>[]</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenCodeOptions.property.model">model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenCodeOptions.property.permission">permission</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OpenCodeOptions.property.plugins">plugins</a></code> | <code>string[]</code> | *No description.* |

---

##### `autoupdate`<sup>Optional</sup> <a name="autoupdate" id="@thoroc/projen-typescript-git-hooks.OpenCodeOptions.property.autoupdate"></a>

```typescript
public readonly autoupdate: boolean;
```

- *Type:* boolean

---

##### `mcpServers`<sup>Optional</sup> <a name="mcpServers" id="@thoroc/projen-typescript-git-hooks.OpenCodeOptions.property.mcpServers"></a>

```typescript
public readonly mcpServers: McpServer[];
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.McpServer">McpServer</a>[]

---

##### `model`<sup>Optional</sup> <a name="model" id="@thoroc/projen-typescript-git-hooks.OpenCodeOptions.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@thoroc/projen-typescript-git-hooks.OpenCodeOptions.property.permission"></a>

```typescript
public readonly permission: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `plugins`<sup>Optional</sup> <a name="plugins" id="@thoroc/projen-typescript-git-hooks.OpenCodeOptions.property.plugins"></a>

```typescript
public readonly plugins: string[];
```

- *Type:* string[]

---

### PackageRule <a name="PackageRule" id="@thoroc/projen-typescript-git-hooks.PackageRule"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.PackageRule.Initializer"></a>

```typescript
import { PackageRule } from '@thoroc/projen-typescript-git-hooks'

const packageRule: PackageRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.PackageRule.property.automerge">automerge</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.PackageRule.property.automergeStrategy">automergeStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.PackageRule.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.PackageRule.property.groupSlug">groupSlug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.PackageRule.property.matchDepTypes">matchDepTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.PackageRule.property.matchUpdateTypes">matchUpdateTypes</a></code> | <code>string[]</code> | *No description.* |

---

##### `automerge`<sup>Optional</sup> <a name="automerge" id="@thoroc/projen-typescript-git-hooks.PackageRule.property.automerge"></a>

```typescript
public readonly automerge: boolean;
```

- *Type:* boolean

---

##### `automergeStrategy`<sup>Optional</sup> <a name="automergeStrategy" id="@thoroc/projen-typescript-git-hooks.PackageRule.property.automergeStrategy"></a>

```typescript
public readonly automergeStrategy: string;
```

- *Type:* string

---

##### `groupName`<sup>Optional</sup> <a name="groupName" id="@thoroc/projen-typescript-git-hooks.PackageRule.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `groupSlug`<sup>Optional</sup> <a name="groupSlug" id="@thoroc/projen-typescript-git-hooks.PackageRule.property.groupSlug"></a>

```typescript
public readonly groupSlug: string;
```

- *Type:* string

---

##### `matchDepTypes`<sup>Optional</sup> <a name="matchDepTypes" id="@thoroc/projen-typescript-git-hooks.PackageRule.property.matchDepTypes"></a>

```typescript
public readonly matchDepTypes: string[];
```

- *Type:* string[]

---

##### `matchUpdateTypes`<sup>Optional</sup> <a name="matchUpdateTypes" id="@thoroc/projen-typescript-git-hooks.PackageRule.property.matchUpdateTypes"></a>

```typescript
public readonly matchUpdateTypes: string[];
```

- *Type:* string[]

---

### PrettierSortImportsOptions <a name="PrettierSortImportsOptions" id="@thoroc/projen-typescript-git-hooks.PrettierSortImportsOptions"></a>

Options for @trivago/prettier-plugin-sort-imports.

Providing this object enables the plugin.

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.PrettierSortImportsOptions.Initializer"></a>

```typescript
import { PrettierSortImportsOptions } from '@thoroc/projen-typescript-git-hooks'

const prettierSortImportsOptions: PrettierSortImportsOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.PrettierSortImportsOptions.property.importOrder">importOrder</a></code> | <code>string[]</code> | Regex patterns defining import group order. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.PrettierSortImportsOptions.property.importOrderCaseInsensitive">importOrderCaseInsensitive</a></code> | <code>boolean</code> | Use case-insensitive ordering. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.PrettierSortImportsOptions.property.importOrderSeparation">importOrderSeparation</a></code> | <code>boolean</code> | Insert a blank line between each import group. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.PrettierSortImportsOptions.property.importOrderSortSpecifiers">importOrderSortSpecifiers</a></code> | <code>boolean</code> | Sort named specifiers within each import alphabetically. |

---

##### `importOrder`<sup>Optional</sup> <a name="importOrder" id="@thoroc/projen-typescript-git-hooks.PrettierSortImportsOptions.property.importOrder"></a>

```typescript
public readonly importOrder: string[];
```

- *Type:* string[]
- *Default:* ["<THIRD_PARTY_MODULES>", "^[./]"]

Regex patterns defining import group order.

---

##### `importOrderCaseInsensitive`<sup>Optional</sup> <a name="importOrderCaseInsensitive" id="@thoroc/projen-typescript-git-hooks.PrettierSortImportsOptions.property.importOrderCaseInsensitive"></a>

```typescript
public readonly importOrderCaseInsensitive: boolean;
```

- *Type:* boolean
- *Default:* false

Use case-insensitive ordering.

---

##### `importOrderSeparation`<sup>Optional</sup> <a name="importOrderSeparation" id="@thoroc/projen-typescript-git-hooks.PrettierSortImportsOptions.property.importOrderSeparation"></a>

```typescript
public readonly importOrderSeparation: boolean;
```

- *Type:* boolean
- *Default:* true

Insert a blank line between each import group.

---

##### `importOrderSortSpecifiers`<sup>Optional</sup> <a name="importOrderSortSpecifiers" id="@thoroc/projen-typescript-git-hooks.PrettierSortImportsOptions.property.importOrderSortSpecifiers"></a>

```typescript
public readonly importOrderSortSpecifiers: boolean;
```

- *Type:* boolean
- *Default:* true

Sort named specifiers within each import alphabetically.

---

### PullRequestCoverageCommentOptions <a name="PullRequestCoverageCommentOptions" id="@thoroc/projen-typescript-git-hooks.PullRequestCoverageCommentOptions"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.PullRequestCoverageCommentOptions.Initializer"></a>

```typescript
import { PullRequestCoverageCommentOptions } from '@thoroc/projen-typescript-git-hooks'

const pullRequestCoverageCommentOptions: PullRequestCoverageCommentOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.PullRequestCoverageCommentOptions.property.testRunner">testRunner</a></code> | <code>string</code> | *No description.* |

---

##### `testRunner`<sup>Optional</sup> <a name="testRunner" id="@thoroc/projen-typescript-git-hooks.PullRequestCoverageCommentOptions.property.testRunner"></a>

```typescript
public readonly testRunner: string;
```

- *Type:* string

---

### ReleasePleaseOptions <a name="ReleasePleaseOptions" id="@thoroc/projen-typescript-git-hooks.ReleasePleaseOptions"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.ReleasePleaseOptions.Initializer"></a>

```typescript
import { ReleasePleaseOptions } from '@thoroc/projen-typescript-git-hooks'

const releasePleaseOptions: ReleasePleaseOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ReleasePleaseOptions.property.bumpMinorPreMajor">bumpMinorPreMajor</a></code> | <code>boolean</code> | Bump minor version for breaking changes before v1.0. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ReleasePleaseOptions.property.bumpPatchForMinorPreMajor">bumpPatchForMinorPreMajor</a></code> | <code>boolean</code> | Bump patch version for feature changes before v1.0. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ReleasePleaseOptions.property.component">component</a></code> | <code>string</code> | The component name used in tagging and PR titles. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ReleasePleaseOptions.property.configFile">configFile</a></code> | <code>string</code> | Path to the release-please config file. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ReleasePleaseOptions.property.includeComponentInTag">includeComponentInTag</a></code> | <code>boolean</code> | Whether to include the component name in the git tag. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ReleasePleaseOptions.property.includeVInTag">includeVInTag</a></code> | <code>boolean</code> | Whether to include the "v" prefix in the git tag. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ReleasePleaseOptions.property.manifestFile">manifestFile</a></code> | <code>string</code> | Path to the release-please manifest file. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ReleasePleaseOptions.property.pullRequestTitlePattern">pullRequestTitlePattern</a></code> | <code>string</code> | Pattern for release PR titles (e.g. "chore: release \${version}"). |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ReleasePleaseOptions.property.releaseType">releaseType</a></code> | <code>string</code> | The release type (e.g. "node", "python", "rust"). Defaults to "node". |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ReleasePleaseOptions.property.skipGithubPullRequest">skipGithubPullRequest</a></code> | <code>boolean</code> | Skip creating or updating the release pull request. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ReleasePleaseOptions.property.skipGithubRelease">skipGithubRelease</a></code> | <code>boolean</code> | Skip creating the GitHub Release. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ReleasePleaseOptions.property.targetBranch">targetBranch</a></code> | <code>string</code> | The branch to target for releases. |

---

##### `bumpMinorPreMajor`<sup>Optional</sup> <a name="bumpMinorPreMajor" id="@thoroc/projen-typescript-git-hooks.ReleasePleaseOptions.property.bumpMinorPreMajor"></a>

```typescript
public readonly bumpMinorPreMajor: boolean;
```

- *Type:* boolean

Bump minor version for breaking changes before v1.0.

---

##### `bumpPatchForMinorPreMajor`<sup>Optional</sup> <a name="bumpPatchForMinorPreMajor" id="@thoroc/projen-typescript-git-hooks.ReleasePleaseOptions.property.bumpPatchForMinorPreMajor"></a>

```typescript
public readonly bumpPatchForMinorPreMajor: boolean;
```

- *Type:* boolean

Bump patch version for feature changes before v1.0.

---

##### `component`<sup>Optional</sup> <a name="component" id="@thoroc/projen-typescript-git-hooks.ReleasePleaseOptions.property.component"></a>

```typescript
public readonly component: string;
```

- *Type:* string

The component name used in tagging and PR titles.

---

##### `configFile`<sup>Optional</sup> <a name="configFile" id="@thoroc/projen-typescript-git-hooks.ReleasePleaseOptions.property.configFile"></a>

```typescript
public readonly configFile: string;
```

- *Type:* string

Path to the release-please config file.

---

##### `includeComponentInTag`<sup>Optional</sup> <a name="includeComponentInTag" id="@thoroc/projen-typescript-git-hooks.ReleasePleaseOptions.property.includeComponentInTag"></a>

```typescript
public readonly includeComponentInTag: boolean;
```

- *Type:* boolean

Whether to include the component name in the git tag.

---

##### `includeVInTag`<sup>Optional</sup> <a name="includeVInTag" id="@thoroc/projen-typescript-git-hooks.ReleasePleaseOptions.property.includeVInTag"></a>

```typescript
public readonly includeVInTag: boolean;
```

- *Type:* boolean

Whether to include the "v" prefix in the git tag.

---

##### `manifestFile`<sup>Optional</sup> <a name="manifestFile" id="@thoroc/projen-typescript-git-hooks.ReleasePleaseOptions.property.manifestFile"></a>

```typescript
public readonly manifestFile: string;
```

- *Type:* string

Path to the release-please manifest file.

---

##### `pullRequestTitlePattern`<sup>Optional</sup> <a name="pullRequestTitlePattern" id="@thoroc/projen-typescript-git-hooks.ReleasePleaseOptions.property.pullRequestTitlePattern"></a>

```typescript
public readonly pullRequestTitlePattern: string;
```

- *Type:* string

Pattern for release PR titles (e.g. "chore: release \${version}").

---

##### `releaseType`<sup>Optional</sup> <a name="releaseType" id="@thoroc/projen-typescript-git-hooks.ReleasePleaseOptions.property.releaseType"></a>

```typescript
public readonly releaseType: string;
```

- *Type:* string

The release type (e.g. "node", "python", "rust"). Defaults to "node".

---

##### `skipGithubPullRequest`<sup>Optional</sup> <a name="skipGithubPullRequest" id="@thoroc/projen-typescript-git-hooks.ReleasePleaseOptions.property.skipGithubPullRequest"></a>

```typescript
public readonly skipGithubPullRequest: boolean;
```

- *Type:* boolean

Skip creating or updating the release pull request.

---

##### `skipGithubRelease`<sup>Optional</sup> <a name="skipGithubRelease" id="@thoroc/projen-typescript-git-hooks.ReleasePleaseOptions.property.skipGithubRelease"></a>

```typescript
public readonly skipGithubRelease: boolean;
```

- *Type:* boolean

Skip creating the GitHub Release.

---

##### `targetBranch`<sup>Optional</sup> <a name="targetBranch" id="@thoroc/projen-typescript-git-hooks.ReleasePleaseOptions.property.targetBranch"></a>

```typescript
public readonly targetBranch: string;
```

- *Type:* string

The branch to target for releases.

Defaults to "main".

---

### RenovateOptions <a name="RenovateOptions" id="@thoroc/projen-typescript-git-hooks.RenovateOptions"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.RenovateOptions.Initializer"></a>

```typescript
import { RenovateOptions } from '@thoroc/projen-typescript-git-hooks'

const renovateOptions: RenovateOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.RenovateOptions.property.automerge">automerge</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.RenovateOptions.property.automergeStrategy">automergeStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.RenovateOptions.property.automergeType">automergeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.RenovateOptions.property.labels">labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.RenovateOptions.property.minimumReleaseAge">minimumReleaseAge</a></code> | <code>string</code> | Minimum age a release must be before Renovate raises a PR. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.RenovateOptions.property.packageRules">packageRules</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.PackageRule">PackageRule</a>[]</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.RenovateOptions.property.rebaseWhen">rebaseWhen</a></code> | <code>string</code> | When to rebase open PRs. |

---

##### `automerge`<sup>Optional</sup> <a name="automerge" id="@thoroc/projen-typescript-git-hooks.RenovateOptions.property.automerge"></a>

```typescript
public readonly automerge: boolean;
```

- *Type:* boolean

---

##### `automergeStrategy`<sup>Optional</sup> <a name="automergeStrategy" id="@thoroc/projen-typescript-git-hooks.RenovateOptions.property.automergeStrategy"></a>

```typescript
public readonly automergeStrategy: string;
```

- *Type:* string

---

##### `automergeType`<sup>Optional</sup> <a name="automergeType" id="@thoroc/projen-typescript-git-hooks.RenovateOptions.property.automergeType"></a>

```typescript
public readonly automergeType: string;
```

- *Type:* string

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@thoroc/projen-typescript-git-hooks.RenovateOptions.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

---

##### `minimumReleaseAge`<sup>Optional</sup> <a name="minimumReleaseAge" id="@thoroc/projen-typescript-git-hooks.RenovateOptions.property.minimumReleaseAge"></a>

```typescript
public readonly minimumReleaseAge: string;
```

- *Type:* string

Minimum age a release must be before Renovate raises a PR.

Defaults to "7 days".

---

##### `packageRules`<sup>Optional</sup> <a name="packageRules" id="@thoroc/projen-typescript-git-hooks.RenovateOptions.property.packageRules"></a>

```typescript
public readonly packageRules: PackageRule[];
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.PackageRule">PackageRule</a>[]

---

##### `rebaseWhen`<sup>Optional</sup> <a name="rebaseWhen" id="@thoroc/projen-typescript-git-hooks.RenovateOptions.property.rebaseWhen"></a>

```typescript
public readonly rebaseWhen: string;
```

- *Type:* string

When to rebase open PRs.

Defaults to "auto".

---

### VitestOptions <a name="VitestOptions" id="@thoroc/projen-typescript-git-hooks.VitestOptions"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.VitestOptions.Initializer"></a>

```typescript
import { VitestOptions } from '@thoroc/projen-typescript-git-hooks'

const vitestOptions: VitestOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.VitestOptions.property.coverage">coverage</a></code> | <code>boolean</code> | Enable coverage collection. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.VitestOptions.property.coverageProvider">coverageProvider</a></code> | <code>string</code> | Coverage provider. |

---

##### `coverage`<sup>Optional</sup> <a name="coverage" id="@thoroc/projen-typescript-git-hooks.VitestOptions.property.coverage"></a>

```typescript
public readonly coverage: boolean;
```

- *Type:* boolean

Enable coverage collection.

Defaults to true.

---

##### `coverageProvider`<sup>Optional</sup> <a name="coverageProvider" id="@thoroc/projen-typescript-git-hooks.VitestOptions.property.coverageProvider"></a>

```typescript
public readonly coverageProvider: string;
```

- *Type:* string

Coverage provider.

Defaults to 'v8'.

---

## Classes <a name="Classes" id="Classes"></a>

### EditorConfigParams <a name="EditorConfigParams" id="@thoroc/projen-typescript-git-hooks.EditorConfigParams"></a>

- *Implements:* <a href="#@thoroc/projen-typescript-git-hooks.ISerializer">ISerializer</a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.EditorConfigParams.Initializer"></a>

```typescript
import { EditorConfigParams } from '@thoroc/projen-typescript-git-hooks'

new EditorConfigParams(options: EditorConfigParamsOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfigParams.Initializer.parameter.options">options</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfigParamsOptions">EditorConfigParamsOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.EditorConfigParams.Initializer.parameter.options"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.EditorConfigParamsOptions">EditorConfigParamsOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfigParams.serialize">serialize</a></code> | *No description.* |

---

##### `serialize` <a name="serialize" id="@thoroc/projen-typescript-git-hooks.EditorConfigParams.serialize"></a>

```typescript
public serialize(): object
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfigParams.property.charset">charset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfigParams.property.endOfLine">endOfLine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfigParams.property.indentSize">indentSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfigParams.property.indentStyle">indentStyle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfigParams.property.insertFinalNewline">insertFinalNewline</a></code> | <code>boolean</code> | *No description.* |

---

##### `charset`<sup>Optional</sup> <a name="charset" id="@thoroc/projen-typescript-git-hooks.EditorConfigParams.property.charset"></a>

```typescript
public readonly charset: string;
```

- *Type:* string

---

##### `endOfLine`<sup>Optional</sup> <a name="endOfLine" id="@thoroc/projen-typescript-git-hooks.EditorConfigParams.property.endOfLine"></a>

```typescript
public readonly endOfLine: string;
```

- *Type:* string

---

##### `indentSize`<sup>Optional</sup> <a name="indentSize" id="@thoroc/projen-typescript-git-hooks.EditorConfigParams.property.indentSize"></a>

```typescript
public readonly indentSize: number;
```

- *Type:* number

---

##### `indentStyle`<sup>Optional</sup> <a name="indentStyle" id="@thoroc/projen-typescript-git-hooks.EditorConfigParams.property.indentStyle"></a>

```typescript
public readonly indentStyle: string;
```

- *Type:* string

---

##### `insertFinalNewline`<sup>Optional</sup> <a name="insertFinalNewline" id="@thoroc/projen-typescript-git-hooks.EditorConfigParams.property.insertFinalNewline"></a>

```typescript
public readonly insertFinalNewline: boolean;
```

- *Type:* boolean

---


### EditorConfigSection <a name="EditorConfigSection" id="@thoroc/projen-typescript-git-hooks.EditorConfigSection"></a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.EditorConfigSection.Initializer"></a>

```typescript
import { EditorConfigSection } from '@thoroc/projen-typescript-git-hooks'

new EditorConfigSection(options: EditorConfigSectionOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfigSection.Initializer.parameter.options">options</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfigSectionOptions">EditorConfigSectionOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.EditorConfigSection.Initializer.parameter.options"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.EditorConfigSectionOptions">EditorConfigSectionOptions</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfigSection.property.defaultEditorConfigSection">defaultEditorConfigSection</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfigSectionOptions">EditorConfigSectionOptions</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfigSection.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfigSection.property.params">params</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfigParamsOptions">EditorConfigParamsOptions</a></code> | *No description.* |

---

##### `defaultEditorConfigSection`<sup>Required</sup> <a name="defaultEditorConfigSection" id="@thoroc/projen-typescript-git-hooks.EditorConfigSection.property.defaultEditorConfigSection"></a>

```typescript
public readonly defaultEditorConfigSection: EditorConfigSectionOptions;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.EditorConfigSectionOptions">EditorConfigSectionOptions</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@thoroc/projen-typescript-git-hooks.EditorConfigSection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `params`<sup>Required</sup> <a name="params" id="@thoroc/projen-typescript-git-hooks.EditorConfigSection.property.params"></a>

```typescript
public readonly params: EditorConfigParamsOptions;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.EditorConfigParamsOptions">EditorConfigParamsOptions</a>

---


### LefthookCommand <a name="LefthookCommand" id="@thoroc/projen-typescript-git-hooks.LefthookCommand"></a>

- *Implements:* <a href="#@thoroc/projen-typescript-git-hooks.ISerializer">ISerializer</a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.LefthookCommand.Initializer"></a>

```typescript
import { LefthookCommand } from '@thoroc/projen-typescript-git-hooks'

new LefthookCommand(options: LefthookCommandOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookCommand.Initializer.parameter.options">options</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookCommandOptions">LefthookCommandOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.LefthookCommand.Initializer.parameter.options"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.LefthookCommandOptions">LefthookCommandOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookCommand.asRecords">asRecords</a></code> | Transform the LefthookCommand to a lefthook friend object. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookCommand.serialize">serialize</a></code> | *No description.* |

---

##### `asRecords` <a name="asRecords" id="@thoroc/projen-typescript-git-hooks.LefthookCommand.asRecords"></a>

```typescript
public asRecords(): object
```

Transform the LefthookCommand to a lefthook friend object.

##### `serialize` <a name="serialize" id="@thoroc/projen-typescript-git-hooks.LefthookCommand.serialize"></a>

```typescript
public serialize(): object
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookCommand.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookCommand.property.run">run</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookCommand.property.stagedFiles">stagedFiles</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookCommand.property.stageFixed">stageFixed</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookCommand.property.exclude">exclude</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookCommand.property.files">files</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookCommand.property.glob">glob</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookCommand.property.tags">tags</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@thoroc/projen-typescript-git-hooks.LefthookCommand.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `run`<sup>Required</sup> <a name="run" id="@thoroc/projen-typescript-git-hooks.LefthookCommand.property.run"></a>

```typescript
public readonly run: string;
```

- *Type:* string

---

##### `stagedFiles`<sup>Required</sup> <a name="stagedFiles" id="@thoroc/projen-typescript-git-hooks.LefthookCommand.property.stagedFiles"></a>

```typescript
public readonly stagedFiles: boolean;
```

- *Type:* boolean

---

##### `stageFixed`<sup>Required</sup> <a name="stageFixed" id="@thoroc/projen-typescript-git-hooks.LefthookCommand.property.stageFixed"></a>

```typescript
public readonly stageFixed: boolean;
```

- *Type:* boolean

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@thoroc/projen-typescript-git-hooks.LefthookCommand.property.exclude"></a>

```typescript
public readonly exclude: string;
```

- *Type:* string

---

##### `files`<sup>Optional</sup> <a name="files" id="@thoroc/projen-typescript-git-hooks.LefthookCommand.property.files"></a>

```typescript
public readonly files: string;
```

- *Type:* string

---

##### `glob`<sup>Optional</sup> <a name="glob" id="@thoroc/projen-typescript-git-hooks.LefthookCommand.property.glob"></a>

```typescript
public readonly glob: string;
```

- *Type:* string

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@thoroc/projen-typescript-git-hooks.LefthookCommand.property.tags"></a>

```typescript
public readonly tags: string;
```

- *Type:* string

---


### LefthookConfig <a name="LefthookConfig" id="@thoroc/projen-typescript-git-hooks.LefthookConfig"></a>

- *Implements:* <a href="#@thoroc/projen-typescript-git-hooks.ISerializer">ISerializer</a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.LefthookConfig.Initializer"></a>

```typescript
import { LefthookConfig } from '@thoroc/projen-typescript-git-hooks'

new LefthookConfig(options: LefthookConfigOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookConfig.Initializer.parameter.options">options</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookConfigOptions">LefthookConfigOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.LefthookConfig.Initializer.parameter.options"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.LefthookConfigOptions">LefthookConfigOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookConfig.serialize">serialize</a></code> | *No description.* |

---

##### `serialize` <a name="serialize" id="@thoroc/projen-typescript-git-hooks.LefthookConfig.serialize"></a>

```typescript
public serialize(): object
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookConfig.property.actions">actions</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookAction">LefthookAction</a>[]</code> | *No description.* |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@thoroc/projen-typescript-git-hooks.LefthookConfig.property.actions"></a>

```typescript
public readonly actions: LefthookAction[];
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.LefthookAction">LefthookAction</a>[]

---


### LintStagedRule <a name="LintStagedRule" id="@thoroc/projen-typescript-git-hooks.LintStagedRule"></a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.LintStagedRule.Initializer"></a>

```typescript
import { LintStagedRule } from '@thoroc/projen-typescript-git-hooks'

new LintStagedRule(options: LintStagedRuleOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LintStagedRule.Initializer.parameter.options">options</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.LintStagedRuleOptions">LintStagedRuleOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.LintStagedRule.Initializer.parameter.options"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.LintStagedRuleOptions">LintStagedRuleOptions</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LintStagedRule.property.commands">commands</a></code> | <code>string \| string[]</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LintStagedRule.property.filePattern">filePattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LintStagedRule.property.last">last</a></code> | <code>boolean</code> | *No description.* |

---

##### `commands`<sup>Required</sup> <a name="commands" id="@thoroc/projen-typescript-git-hooks.LintStagedRule.property.commands"></a>

```typescript
public readonly commands: string | string[];
```

- *Type:* string | string[]

---

##### `filePattern`<sup>Required</sup> <a name="filePattern" id="@thoroc/projen-typescript-git-hooks.LintStagedRule.property.filePattern"></a>

```typescript
public readonly filePattern: string;
```

- *Type:* string

---

##### `last`<sup>Optional</sup> <a name="last" id="@thoroc/projen-typescript-git-hooks.LintStagedRule.property.last"></a>

```typescript
public readonly last: boolean;
```

- *Type:* boolean

---


### McpServer <a name="McpServer" id="@thoroc/projen-typescript-git-hooks.McpServer"></a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.McpServer.Initializer"></a>

```typescript
import { McpServer } from '@thoroc/projen-typescript-git-hooks'

new McpServer(name: string, options: McpServerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.McpServer.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.McpServer.Initializer.parameter.options">options</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.McpServerConfig">McpServerConfig</a></code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@thoroc/projen-typescript-git-hooks.McpServer.Initializer.parameter.name"></a>

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.McpServer.Initializer.parameter.options"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.McpServerConfig">McpServerConfig</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.McpServer.property.command">command</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.McpServer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.McpServer.property.args">args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.McpServer.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `command`<sup>Required</sup> <a name="command" id="@thoroc/projen-typescript-git-hooks.McpServer.property.command"></a>

```typescript
public readonly command: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@thoroc/projen-typescript-git-hooks.McpServer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `args`<sup>Optional</sup> <a name="args" id="@thoroc/projen-typescript-git-hooks.McpServer.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

---

##### `env`<sup>Optional</sup> <a name="env" id="@thoroc/projen-typescript-git-hooks.McpServer.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---


### Rule <a name="Rule" id="@thoroc/projen-typescript-git-hooks.Rule"></a>

- *Implements:* <a href="#@thoroc/projen-typescript-git-hooks.ISerializer">ISerializer</a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.Rule.Initializer"></a>

```typescript
import { Rule } from '@thoroc/projen-typescript-git-hooks'

new Rule()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Rule.serialize">serialize</a></code> | *No description.* |

---

##### `serialize` <a name="serialize" id="@thoroc/projen-typescript-git-hooks.Rule.serialize"></a>

```typescript
public serialize(): object
```




## Protocols <a name="Protocols" id="Protocols"></a>

### ISerializer <a name="ISerializer" id="@thoroc/projen-typescript-git-hooks.ISerializer"></a>

- *Implemented By:* <a href="#@thoroc/projen-typescript-git-hooks.EditorConfigParams">EditorConfigParams</a>, <a href="#@thoroc/projen-typescript-git-hooks.LefthookCommand">LefthookCommand</a>, <a href="#@thoroc/projen-typescript-git-hooks.LefthookConfig">LefthookConfig</a>, <a href="#@thoroc/projen-typescript-git-hooks.Rule">Rule</a>, <a href="#@thoroc/projen-typescript-git-hooks.ISerializer">ISerializer</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.ISerializer.serialize">serialize</a></code> | *No description.* |

---

##### `serialize` <a name="serialize" id="@thoroc/projen-typescript-git-hooks.ISerializer.serialize"></a>

```typescript
public serialize(): object
```


## Enums <a name="Enums" id="Enums"></a>

### CodeBlockStyle <a name="CodeBlockStyle" id="@thoroc/projen-typescript-git-hooks.CodeBlockStyle"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CodeBlockStyle.CONSISTENT">CONSISTENT</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CodeBlockStyle.FENCED">FENCED</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CodeBlockStyle.INDENTED">INDENTED</a></code> | *No description.* |

---

##### `CONSISTENT` <a name="CONSISTENT" id="@thoroc/projen-typescript-git-hooks.CodeBlockStyle.CONSISTENT"></a>

---


##### `FENCED` <a name="FENCED" id="@thoroc/projen-typescript-git-hooks.CodeBlockStyle.FENCED"></a>

---


##### `INDENTED` <a name="INDENTED" id="@thoroc/projen-typescript-git-hooks.CodeBlockStyle.INDENTED"></a>

---


### CodeFenceStyle <a name="CodeFenceStyle" id="@thoroc/projen-typescript-git-hooks.CodeFenceStyle"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CodeFenceStyle.BACKTICK">BACKTICK</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CodeFenceStyle.CONSISTENT">CONSISTENT</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CodeFenceStyle.TILDE">TILDE</a></code> | *No description.* |

---

##### `BACKTICK` <a name="BACKTICK" id="@thoroc/projen-typescript-git-hooks.CodeFenceStyle.BACKTICK"></a>

---


##### `CONSISTENT` <a name="CONSISTENT" id="@thoroc/projen-typescript-git-hooks.CodeFenceStyle.CONSISTENT"></a>

---


##### `TILDE` <a name="TILDE" id="@thoroc/projen-typescript-git-hooks.CodeFenceStyle.TILDE"></a>

---


### EmphasisStyle <a name="EmphasisStyle" id="@thoroc/projen-typescript-git-hooks.EmphasisStyle"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.EmphasisStyle.ASTERISK">ASTERISK</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.EmphasisStyle.CONSISTENT">CONSISTENT</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.EmphasisStyle.UNDERSCORE">UNDERSCORE</a></code> | *No description.* |

---

##### `ASTERISK` <a name="ASTERISK" id="@thoroc/projen-typescript-git-hooks.EmphasisStyle.ASTERISK"></a>

---


##### `CONSISTENT` <a name="CONSISTENT" id="@thoroc/projen-typescript-git-hooks.EmphasisStyle.CONSISTENT"></a>

---


##### `UNDERSCORE` <a name="UNDERSCORE" id="@thoroc/projen-typescript-git-hooks.EmphasisStyle.UNDERSCORE"></a>

---


### GitClientHook <a name="GitClientHook" id="@thoroc/projen-typescript-git-hooks.GitClientHook"></a>

The list of git cient-side hooks.

> [https://git-scm.com/docs/githooks](https://git-scm.com/docs/githooks)

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitClientHook.PRE_COMMIT">PRE_COMMIT</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitClientHook.PRE_PUSH">PRE_PUSH</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitClientHook.PRE_COMMIT_MESSAGE">PRE_COMMIT_MESSAGE</a></code> | *No description.* |

---

##### `PRE_COMMIT` <a name="PRE_COMMIT" id="@thoroc/projen-typescript-git-hooks.GitClientHook.PRE_COMMIT"></a>

---


##### `PRE_PUSH` <a name="PRE_PUSH" id="@thoroc/projen-typescript-git-hooks.GitClientHook.PRE_PUSH"></a>

---


##### `PRE_COMMIT_MESSAGE` <a name="PRE_COMMIT_MESSAGE" id="@thoroc/projen-typescript-git-hooks.GitClientHook.PRE_COMMIT_MESSAGE"></a>

---


### GitHooksManagerType <a name="GitHooksManagerType" id="@thoroc/projen-typescript-git-hooks.GitHooksManagerType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksManagerType.HUSKY">HUSKY</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksManagerType.LEFTHOOK">LEFTHOOK</a></code> | *No description.* |

---

##### `HUSKY` <a name="HUSKY" id="@thoroc/projen-typescript-git-hooks.GitHooksManagerType.HUSKY"></a>

---


##### `LEFTHOOK` <a name="LEFTHOOK" id="@thoroc/projen-typescript-git-hooks.GitHooksManagerType.LEFTHOOK"></a>

---


### HeadingStyle <a name="HeadingStyle" id="@thoroc/projen-typescript-git-hooks.HeadingStyle"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.HeadingStyle.CONSTITENT">CONSTITENT</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.HeadingStyle.ATX">ATX</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.HeadingStyle.ATX_CLOSED">ATX_CLOSED</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.HeadingStyle.SETEXT">SETEXT</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.HeadingStyle.SETEXT_WITH_ATX">SETEXT_WITH_ATX</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.HeadingStyle.SETEXT_WITH_ATX_CLOSED">SETEXT_WITH_ATX_CLOSED</a></code> | *No description.* |

---

##### `CONSTITENT` <a name="CONSTITENT" id="@thoroc/projen-typescript-git-hooks.HeadingStyle.CONSTITENT"></a>

---


##### `ATX` <a name="ATX" id="@thoroc/projen-typescript-git-hooks.HeadingStyle.ATX"></a>

---


##### `ATX_CLOSED` <a name="ATX_CLOSED" id="@thoroc/projen-typescript-git-hooks.HeadingStyle.ATX_CLOSED"></a>

---


##### `SETEXT` <a name="SETEXT" id="@thoroc/projen-typescript-git-hooks.HeadingStyle.SETEXT"></a>

---


##### `SETEXT_WITH_ATX` <a name="SETEXT_WITH_ATX" id="@thoroc/projen-typescript-git-hooks.HeadingStyle.SETEXT_WITH_ATX"></a>

---


##### `SETEXT_WITH_ATX_CLOSED` <a name="SETEXT_WITH_ATX_CLOSED" id="@thoroc/projen-typescript-git-hooks.HeadingStyle.SETEXT_WITH_ATX_CLOSED"></a>

---


### OrderedListItemPrefix <a name="OrderedListItemPrefix" id="@thoroc/projen-typescript-git-hooks.OrderedListItemPrefix"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OrderedListItemPrefix.ONE">ONE</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OrderedListItemPrefix.ONE_OR_ORDERED">ONE_OR_ORDERED</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OrderedListItemPrefix.ORDERED">ORDERED</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.OrderedListItemPrefix.ZERO">ZERO</a></code> | *No description.* |

---

##### `ONE` <a name="ONE" id="@thoroc/projen-typescript-git-hooks.OrderedListItemPrefix.ONE"></a>

---


##### `ONE_OR_ORDERED` <a name="ONE_OR_ORDERED" id="@thoroc/projen-typescript-git-hooks.OrderedListItemPrefix.ONE_OR_ORDERED"></a>

---


##### `ORDERED` <a name="ORDERED" id="@thoroc/projen-typescript-git-hooks.OrderedListItemPrefix.ORDERED"></a>

---


##### `ZERO` <a name="ZERO" id="@thoroc/projen-typescript-git-hooks.OrderedListItemPrefix.ZERO"></a>

---


### StrongStyle <a name="StrongStyle" id="@thoroc/projen-typescript-git-hooks.StrongStyle"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.StrongStyle.ASTERISK">ASTERISK</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.StrongStyle.CONSISTENT">CONSISTENT</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.StrongStyle.UNDERSCORE">UNDERSCORE</a></code> | *No description.* |

---

##### `ASTERISK` <a name="ASTERISK" id="@thoroc/projen-typescript-git-hooks.StrongStyle.ASTERISK"></a>

---


##### `CONSISTENT` <a name="CONSISTENT" id="@thoroc/projen-typescript-git-hooks.StrongStyle.CONSISTENT"></a>

---


##### `UNDERSCORE` <a name="UNDERSCORE" id="@thoroc/projen-typescript-git-hooks.StrongStyle.UNDERSCORE"></a>

---


### UnorderedListStyle <a name="UnorderedListStyle" id="@thoroc/projen-typescript-git-hooks.UnorderedListStyle"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.UnorderedListStyle.CONSISTENT">CONSISTENT</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.UnorderedListStyle.ASTERISK">ASTERISK</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.UnorderedListStyle.DASH">DASH</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.UnorderedListStyle.PLUS">PLUS</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.UnorderedListStyle.SUBLIST">SUBLIST</a></code> | *No description.* |

---

##### `CONSISTENT` <a name="CONSISTENT" id="@thoroc/projen-typescript-git-hooks.UnorderedListStyle.CONSISTENT"></a>

---


##### `ASTERISK` <a name="ASTERISK" id="@thoroc/projen-typescript-git-hooks.UnorderedListStyle.ASTERISK"></a>

---


##### `DASH` <a name="DASH" id="@thoroc/projen-typescript-git-hooks.UnorderedListStyle.DASH"></a>

---


##### `PLUS` <a name="PLUS" id="@thoroc/projen-typescript-git-hooks.UnorderedListStyle.PLUS"></a>

---


##### `SUBLIST` <a name="SUBLIST" id="@thoroc/projen-typescript-git-hooks.UnorderedListStyle.SUBLIST"></a>

---

