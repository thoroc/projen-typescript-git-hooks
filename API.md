# replace this

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Documentation: <https://thoroc.github.io/projen-typescript-git-hooks/index.html>

Inspiration:

- <https://github.com/mnoumanshahzad/projen-types>
- <https://github.com/AllyMurray/projen-modules>
- <https://github.com/gplassard/projen-extensions>
- <https://github.com/mountain-pass/cool-bits-for-projen>
- <https://github.com/seeebiii/projen-test>
- <https://github.com/kcwinner/projen-github-demo>

# API Reference <a name="API Reference" id="api-reference"></a>


## Structs <a name="Structs" id="Structs"></a>

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

### EslintRules <a name="EslintRules" id="@thoroc/projen-typescript-git-hooks.EslintRules"></a>

#### Initializer <a name="Initializer" id="@thoroc/projen-typescript-git-hooks.EslintRules.Initializer"></a>

```typescript
import { EslintRules } from '@thoroc/projen-typescript-git-hooks'

const eslintRules: EslintRules = { ... }
```


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
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code>projen.javascript.CodeArtifactOptions</code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Minimum node.js version to require via `engines` (inclusive). |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum Node.js version to require via package.json `engines` (inclusive). |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.npmAccess">npmAccess</a></code> | <code>projen.javascript.NpmAccess</code> | Access level of the npm package. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.npmRegistry">npmRegistry</a></code> | <code>string</code> | The host name of the npm registry to publish to. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
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
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code> | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.npmDistTag">npmDistTag</a></code> | <code>string</code> | The npmDistTag to use when publishing from the default branch. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.releasableCommits">releasableCommits</a></code> | <code>projen.ReleasableCommits</code> | Find commits that should be considered releasable Used to decide if a release is required. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.releaseEveryCommit">releaseEveryCommit</a></code> | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.releaseSchedule">releaseSchedule</a></code> | <code>string</code> | CRON schedule to trigger new releases. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with standard-version package. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.workflowRunsOnGroup">workflowRunsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | The name of the main release branch. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code> | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued). |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.buildWorkflowTriggers">buildWorkflowTriggers</a></code> | <code>projen.github.workflows.Triggers</code> | Build workflow triggers. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.bundlerOptions">bundlerOptions</a></code> | <code>projen.javascript.BundlerOptions</code> | Options for `Bundler`. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.codeCov">codeCov</a></code> | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v3 A secret is required for private repos. Configured with `@codeCovTokenSecret`. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code> | <code>string</code> | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. |
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
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | The node version to use in GitHub workflows. |
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
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.typescriptVersion">typescriptVersion</a></code> | <code>string</code> | TypeScript version to use. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.debug">debug</a></code> | <code>boolean</code> | Printing out debug statement. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.editorConfig">editorConfig</a></code> | <code>boolean</code> | Enable editorConfig. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.editorConfigOptions">editorConfigOptions</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfigOptions">EditorConfigOptions</a></code> | EditorConfig options. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.gitHooksManager">gitHooksManager</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksManagerType">GitHooksManagerType</a></code> | Setup gitHooksManager. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.gitHooksManagerOptions">gitHooksManagerOptions</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.HuskyOptions">HuskyOptions</a> \| <a href="#@thoroc/projen-typescript-git-hooks.LefthookOptions">LefthookOptions</a></code> | gitHooksManagerEnabled options. |

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
sub-projects.

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
- *Default:* no max

Minimum node.js version to require via `engines` (inclusive).

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string
- *Default:* no "engines" specified

Minimum Node.js version to require via package.json `engines` (inclusive).

---

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

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

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* NodePackageManager.YARN

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
- *Default:* "7"

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

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "Release"

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

Custom configuration used when creating changelog with standard-version package.

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

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowTriggers`<sup>Optional</sup> <a name="buildWorkflowTriggers" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.buildWorkflowTriggers"></a>

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

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* boolean
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v3 A secret is required for private repos. Configured with `@codeCovTokenSecret`.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* string
- *Default:* if this option is not specified, only public repositories are supported

Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.

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
- *Default:* true

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

##### `mutableBuild`<sup>Optional</sup> <a name="mutableBuild" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.mutableBuild"></a>

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
- *Default:* true

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
- *Default:* GitHub Actions

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProjectOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* same as `minNodeVersion`

The node version to use in GitHub workflows.

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
- *Default:* true

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

## Classes <a name="Classes" id="Classes"></a>

### CloseStaleIssue <a name="CloseStaleIssue" id="@thoroc/projen-typescript-git-hooks.CloseStaleIssue"></a>

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
| <code><a href="#@thoroc/projen-typescript-git-hooks.CloseStaleIssue.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CloseStaleIssue.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CloseStaleIssue.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

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


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CloseStaleIssue.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

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
| <code><a href="#@thoroc/projen-typescript-git-hooks.CodeOfConduct.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CodeOfConduct.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CodeOfConduct.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

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


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CodeOfConduct.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CodeOfConduct.property.author">author</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.CodeOfConduct.property.version">version</a></code> | <code>string</code> | *No description.* |

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
| <code><a href="#@thoroc/projen-typescript-git-hooks.Commitizen.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Commitizen.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Commitizen.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

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
| <code><a href="#@thoroc/projen-typescript-git-hooks.Commitizen.of">of</a></code> | Returns the singletone component of a project or undefined if there is none. |

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
| <code><a href="#@thoroc/projen-typescript-git-hooks.Commitizen.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Commitizen.property.config">config</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.CommitizenConfig">CommitizenConfig</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Commitizen.property.options">options</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.CommitizenOptions">CommitizenOptions</a></code> | *No description.* |

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
| <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfig.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfig.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfig.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

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


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfig.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfig.property.options">options</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.EditorConfigOptions">EditorConfigOptions</a></code> | *No description.* |

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
public addExtends(extendList: string): void
```

Adds an `extends` item to the eslint configuration.

###### `extendList`<sup>Required</sup> <a name="extendList" id="@thoroc/projen-typescript-git-hooks.Eslint.addExtends.parameter.extendList"></a>

- *Type:* string

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
public addPlugins(plugins: string): void
```

Adds an eslint plugin.

###### `plugins`<sup>Required</sup> <a name="plugins" id="@thoroc/projen-typescript-git-hooks.Eslint.addPlugins.parameter.plugins"></a>

- *Type:* string

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
| <code><a href="#@thoroc/projen-typescript-git-hooks.Eslint.of">of</a></code> | Returns the singletone component of a project or undefined if there is none. |

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
| <code><a href="#@thoroc/projen-typescript-git-hooks.Eslint.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Eslint.property.config">config</a></code> | <code>any</code> | Direct access to the eslint configuration (escape hatch). |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Eslint.property.eslintTask">eslintTask</a></code> | <code>projen.Task</code> | eslint task. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Eslint.property.ignorePatterns">ignorePatterns</a></code> | <code>string[]</code> | File patterns that should not be linted. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Eslint.property.overrides">overrides</a></code> | <code>projen.javascript.EslintOverride[]</code> | eslint overrides. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Eslint.property.rules">rules</a></code> | <code>{[ key: string ]: any[]}</code> | eslint rules. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Eslint.property.defaultEslintRules">defaultEslintRules</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.EslintRules">EslintRules</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Eslint.property.defaultOptions">defaultOptions</a></code> | <code>projen.javascript.EslintOptions</code> | *No description.* |

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

##### `ignorePatterns`<sup>Required</sup> <a name="ignorePatterns" id="@thoroc/projen-typescript-git-hooks.Eslint.property.ignorePatterns"></a>

```typescript
public readonly ignorePatterns: string[];
```

- *Type:* string[]

File patterns that should not be linted.

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
public readonly rules: {[ key: string ]: any[]};
```

- *Type:* {[ key: string ]: any[]}

eslint rules.

---

##### `defaultEslintRules`<sup>Required</sup> <a name="defaultEslintRules" id="@thoroc/projen-typescript-git-hooks.Eslint.property.defaultEslintRules"></a>

```typescript
public readonly defaultEslintRules: EslintRules;
```

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.EslintRules">EslintRules</a>

---

##### `defaultOptions`<sup>Required</sup> <a name="defaultOptions" id="@thoroc/projen-typescript-git-hooks.Eslint.property.defaultOptions"></a>

```typescript
public readonly defaultOptions: EslintOptions;
```

- *Type:* projen.javascript.EslintOptions

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
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
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

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

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

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

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
3. Synthesize all sub-projects
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
public addBundledDeps(deps: string): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addBundledDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addCompileCommand.parameter.commands"></a>

- *Type:* string

---

##### `addDeps` <a name="addDeps" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addDevDeps"></a>

```typescript
public addDevDeps(deps: string): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addDevDeps.parameter.deps"></a>

- *Type:* string

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
public addKeywords(keywords: string): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addKeywords.parameter.keywords"></a>

- *Type:* string

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: string): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addPeerDeps.parameter.deps"></a>

- *Type:* string

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
public addTestCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.addTestCommand.parameter.commands"></a>

- *Type:* string

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


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
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
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version required by this package. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum node.js version required by this package. |
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

Maximum node version required by this package.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

Minimum node.js version required by this package.

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

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

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
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksManager.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksManager.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksManager.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

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


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksManager.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.GitHooksManager.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

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
| <code><a href="#@thoroc/projen-typescript-git-hooks.Husky.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Husky.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Husky.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Husky.createHook">createHook</a></code> | *No description.* |

---

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
| <code><a href="#@thoroc/projen-typescript-git-hooks.Husky.of">of</a></code> | Returns the singletone component of a project or undefined if there is none. |

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
| <code><a href="#@thoroc/projen-typescript-git-hooks.Husky.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Husky.property.lintStaged">lintStaged</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.LintStaged">LintStaged</a></code> | *No description.* |

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
| <code><a href="#@thoroc/projen-typescript-git-hooks.HuskyHookFile.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.HuskyHookFile.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.HuskyHookFile.synthesize">synthesize</a></code> | Writes the file to the project's output directory. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.HuskyHookFile.addLine">addLine</a></code> | Adds a line to the text file. |

---

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


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.HuskyHookFile.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.HuskyHookFile.property.absolutePath">absolutePath</a></code> | <code>string</code> | The absolute path of this file. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.HuskyHookFile.property.path">path</a></code> | <code>string</code> | The file path, relative to the project root. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.HuskyHookFile.property.changed">changed</a></code> | <code>boolean</code> | Indicates if the file has been changed during synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.HuskyHookFile.property.marker">marker</a></code> | <code>string</code> | The projen marker, used to identify files as projen-generated. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.HuskyHookFile.property.executable">executable</a></code> | <code>boolean</code> | Indicates if the file should be marked as executable. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.HuskyHookFile.property.readonly">readonly</a></code> | <code>boolean</code> | Indicates if the file should be read-only or read-write. |

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

The file path, relative to the project root.

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
| <code><a href="#@thoroc/projen-typescript-git-hooks.IssueTemplate.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.IssueTemplate.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.IssueTemplate.synthesize">synthesize</a></code> | Writes the file to the project's output directory. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.IssueTemplate.addLine">addLine</a></code> | Adds a line to the text file. |

---

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


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.IssueTemplate.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.IssueTemplate.property.absolutePath">absolutePath</a></code> | <code>string</code> | The absolute path of this file. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.IssueTemplate.property.path">path</a></code> | <code>string</code> | The file path, relative to the project root. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.IssueTemplate.property.changed">changed</a></code> | <code>boolean</code> | Indicates if the file has been changed during synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.IssueTemplate.property.marker">marker</a></code> | <code>string</code> | The projen marker, used to identify files as projen-generated. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.IssueTemplate.property.executable">executable</a></code> | <code>boolean</code> | Indicates if the file should be marked as executable. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.IssueTemplate.property.readonly">readonly</a></code> | <code>boolean</code> | Indicates if the file should be read-only or read-write. |

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

The file path, relative to the project root.

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
| <code><a href="#@thoroc/projen-typescript-git-hooks.Jest.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Jest.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Jest.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Jest.addIgnorePattern">addIgnorePattern</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Jest.addReporter">addReporter</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Jest.addSetupFile">addSetupFile</a></code> | Adds a a setup file to Jest's setupFiles configuration. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Jest.addSetupFileAfterEnv">addSetupFileAfterEnv</a></code> | Adds a a setup file to Jest's setupFilesAfterEnv configuration. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Jest.addSnapshotResolver">addSnapshotResolver</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Jest.addTestMatch">addTestMatch</a></code> | Adds a test match pattern. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Jest.addWatchIgnorePattern">addWatchIgnorePattern</a></code> | Adds a watch ignore pattern. |

---

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

##### `addReporter` <a name="addReporter" id="@thoroc/projen-typescript-git-hooks.Jest.addReporter"></a>

```typescript
public addReporter(reporter: JestReporter): void
```

###### `reporter`<sup>Required</sup> <a name="reporter" id="@thoroc/projen-typescript-git-hooks.Jest.addReporter.parameter.reporter"></a>

- *Type:* projen.javascript.JestReporter

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

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Jest.of">of</a></code> | Returns the singletone Jest component of a project or undefined if there is none. |

---

##### `of` <a name="of" id="@thoroc/projen-typescript-git-hooks.Jest.of"></a>

```typescript
import { Jest } from '@thoroc/projen-typescript-git-hooks'

Jest.of(project: Project)
```

Returns the singletone Jest component of a project or undefined if there is none.

###### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.Jest.of.parameter.project"></a>

- *Type:* projen.Project

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Jest.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Jest.property.config">config</a></code> | <code>any</code> | Escape hatch. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Jest.property.jestVersion">jestVersion</a></code> | <code>string</code> | Jest version, including `@` symbol, like `@^29`. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Jest.property.file">file</a></code> | <code>projen.JsonFile</code> | Jest config file. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Jest.property.configFilePath">configFilePath</a></code> | <code>string</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.Jest.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

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
| <code><a href="#@thoroc/projen-typescript-git-hooks.Lefthook.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Lefthook.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Lefthook.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Lefthook.addCommand">addCommand</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Lefthook.addScript">addScript</a></code> | *No description.* |

---

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
| <code><a href="#@thoroc/projen-typescript-git-hooks.Lefthook.of">of</a></code> | Returns the singletone component of a project or undefined if there is none. |

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
| <code><a href="#@thoroc/projen-typescript-git-hooks.Lefthook.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Lefthook.property.config">config</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.LefthookConfig">LefthookConfig</a></code> | *No description.* |

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
| <code><a href="#@thoroc/projen-typescript-git-hooks.LintStaged.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LintStaged.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LintStaged.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LintStaged.addRule">addRule</a></code> | *No description.* |

---

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
| <code><a href="#@thoroc/projen-typescript-git-hooks.LintStaged.of">of</a></code> | Returns the singletone component of a project or undefined if there is none. |

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
| <code><a href="#@thoroc/projen-typescript-git-hooks.LintStaged.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.LintStaged.property.rules">rules</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.LintStagedRule">LintStagedRule</a>[]</code> | *No description.* |

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
| <code><a href="#@thoroc/projen-typescript-git-hooks.Markdownlint.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Markdownlint.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Markdownlint.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Markdownlint.addIgnorePattern">addIgnorePattern</a></code> | Defines Markdownlint ignore Patterns these patterns will be added to the file .markdownlintignore. |

---

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
| <code><a href="#@thoroc/projen-typescript-git-hooks.Markdownlint.of">of</a></code> | Returns the singletone component of a project or undefined if there is none. |

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
| <code><a href="#@thoroc/projen-typescript-git-hooks.Markdownlint.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Markdownlint.property.defaultRules">defaultRules</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules">MarkdownlintRules</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Markdownlint.property.options">options</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintOptions">MarkdownlintOptions</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Markdownlint.property.ignoreFile">ignoreFile</a></code> | <code>projen.IgnoreFile</code> | The .markdownlintignore file. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Markdownlint.property.rules">rules</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.MarkdownlintRules">MarkdownlintRules</a></code> | Direct access to the markdownlint rules (escape hatch). |

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


### Prettier <a name="Prettier" id="@thoroc/projen-typescript-git-hooks.Prettier"></a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.Prettier.Initializer"></a>

```typescript
import { Prettier } from '@thoroc/projen-typescript-git-hooks'

new Prettier(project: GitHooksEnabledProject, options?: PrettierOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Prettier.Initializer.parameter.project">project</a></code> | <code><a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject">GitHooksEnabledProject</a></code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Prettier.Initializer.parameter.options">options</a></code> | <code>projen.javascript.PrettierOptions</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.Prettier.Initializer.parameter.project"></a>

- *Type:* <a href="#@thoroc/projen-typescript-git-hooks.GitHooksEnabledProject">GitHooksEnabledProject</a>

---

##### `options`<sup>Optional</sup> <a name="options" id="@thoroc/projen-typescript-git-hooks.Prettier.Initializer.parameter.options"></a>

- *Type:* projen.javascript.PrettierOptions

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Prettier.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Prettier.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Prettier.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Prettier.addIgnorePattern">addIgnorePattern</a></code> | Defines Prettier ignore Patterns these patterns will be added to the file .prettierignore. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Prettier.addOverride">addOverride</a></code> | Add a prettier override. |

---

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
| <code><a href="#@thoroc/projen-typescript-git-hooks.Prettier.of">of</a></code> | *No description.* |

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
| <code><a href="#@thoroc/projen-typescript-git-hooks.Prettier.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Prettier.property.overrides">overrides</a></code> | <code>projen.javascript.PrettierOverride[]</code> | Returns all Prettier overrides. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Prettier.property.settings">settings</a></code> | <code>projen.javascript.PrettierSettings</code> | Direct access to the prettier settings. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Prettier.property.ignoreFile">ignoreFile</a></code> | <code>projen.IgnoreFile</code> | The .prettierIgnore file. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.Prettier.property.defaultPrettierOptions">defaultPrettierOptions</a></code> | <code>projen.javascript.PrettierOptions</code> | *No description.* |

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


### PullRequestJestCoverageComment <a name="PullRequestJestCoverageComment" id="@thoroc/projen-typescript-git-hooks.PullRequestJestCoverageComment"></a>

#### Initializers <a name="Initializers" id="@thoroc/projen-typescript-git-hooks.PullRequestJestCoverageComment.Initializer"></a>

```typescript
import { PullRequestJestCoverageComment } from '@thoroc/projen-typescript-git-hooks'

new PullRequestJestCoverageComment(github: GitHub)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.PullRequestJestCoverageComment.Initializer.parameter.github">github</a></code> | <code>projen.github.GitHub</code> | *No description.* |

---

##### `github`<sup>Required</sup> <a name="github" id="@thoroc/projen-typescript-git-hooks.PullRequestJestCoverageComment.Initializer.parameter.github"></a>

- *Type:* projen.github.GitHub

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.PullRequestJestCoverageComment.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.PullRequestJestCoverageComment.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.PullRequestJestCoverageComment.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `postSynthesize` <a name="postSynthesize" id="@thoroc/projen-typescript-git-hooks.PullRequestJestCoverageComment.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@thoroc/projen-typescript-git-hooks.PullRequestJestCoverageComment.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@thoroc/projen-typescript-git-hooks.PullRequestJestCoverageComment.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.PullRequestJestCoverageComment.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.PullRequestJestCoverageComment.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### PullRequestLabeler <a name="PullRequestLabeler" id="@thoroc/projen-typescript-git-hooks.PullRequestLabeler"></a>

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
| <code><a href="#@thoroc/projen-typescript-git-hooks.PullRequestLabeler.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.PullRequestLabeler.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@thoroc/projen-typescript-git-hooks.PullRequestLabeler.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

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


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@thoroc/projen-typescript-git-hooks.PullRequestLabeler.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@thoroc/projen-typescript-git-hooks.PullRequestLabeler.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


## Protocols <a name="Protocols" id="Protocols"></a>

### ISerializer <a name="ISerializer" id="@thoroc/projen-typescript-git-hooks.ISerializer"></a>

- *Implemented By:* <a href="#@thoroc/projen-typescript-git-hooks.EditorConfigParams">EditorConfigParams</a>, <a href="#@thoroc/projen-typescript-git-hooks.LefthookCommand">LefthookCommand</a>, <a href="#@thoroc/projen-typescript-git-hooks.LefthookConfig">LefthookConfig</a>, <a href="#@thoroc/projen-typescript-git-hooks.ISerializer">ISerializer</a>

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

