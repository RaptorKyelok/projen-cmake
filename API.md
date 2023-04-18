# API Reference <a name="API Reference" id="api-reference"></a>


## Structs <a name="Structs" id="Structs"></a>

### CMakeProjectOptions <a name="CMakeProjectOptions" id="projen-cmake.CMakeProjectOptions"></a>

#### Initializer <a name="Initializer" id="projen-cmake.CMakeProjectOptions.Initializer"></a>

```typescript
import { CMakeProjectOptions } from 'projen-cmake'

const cMakeProjectOptions: CMakeProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-cmake.CMakeProjectOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#projen-cmake.CMakeProjectOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen-cmake.CMakeProjectOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#projen-cmake.CMakeProjectOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#projen-cmake.CMakeProjectOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#projen-cmake.CMakeProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#projen-cmake.CMakeProjectOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#projen-cmake.CMakeProjectOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#projen-cmake.CMakeProjectOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#projen-cmake.CMakeProjectOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#projen-cmake.CMakeProjectOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#projen-cmake.CMakeProjectOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#projen-cmake.CMakeProjectOptions.property.cmakeMinVersion">cmakeMinVersion</a></code> | <code>number</code> | The version of CMake that CMakeLists.txt should specify. |

---

##### `name`<sup>Required</sup> <a name="name" id="projen-cmake.CMakeProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="projen-cmake.CMakeProjectOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="projen-cmake.CMakeProjectOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="projen-cmake.CMakeProjectOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="projen-cmake.CMakeProjectOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="projen-cmake.CMakeProjectOptions.property.outdir"></a>

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

##### `parent`<sup>Optional</sup> <a name="parent" id="projen-cmake.CMakeProjectOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="projen-cmake.CMakeProjectOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="projen-cmake.CMakeProjectOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="projen-cmake.CMakeProjectOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="projen-cmake.CMakeProjectOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="projen-cmake.CMakeProjectOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `cmakeMinVersion`<sup>Optional</sup> <a name="cmakeMinVersion" id="projen-cmake.CMakeProjectOptions.property.cmakeMinVersion"></a>

```typescript
public readonly cmakeMinVersion: number;
```

- *Type:* number
- *Default:* 3.5

The version of CMake that CMakeLists.txt should specify.

---

## Classes <a name="Classes" id="Classes"></a>

### CMakeExecutable <a name="CMakeExecutable" id="projen-cmake.CMakeExecutable"></a>

#### Initializers <a name="Initializers" id="projen-cmake.CMakeExecutable.Initializer"></a>

```typescript
import { CMakeExecutable } from 'projen-cmake'

new CMakeExecutable(project: CMakeProject, name: string, declaration_number: number)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-cmake.CMakeExecutable.Initializer.parameter.project">project</a></code> | <code><a href="#projen-cmake.CMakeProject">CMakeProject</a></code> | *No description.* |
| <code><a href="#projen-cmake.CMakeExecutable.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-cmake.CMakeExecutable.Initializer.parameter.declaration_number">declaration_number</a></code> | <code>number</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen-cmake.CMakeExecutable.Initializer.parameter.project"></a>

- *Type:* <a href="#projen-cmake.CMakeProject">CMakeProject</a>

---

##### `name`<sup>Required</sup> <a name="name" id="projen-cmake.CMakeExecutable.Initializer.parameter.name"></a>

- *Type:* string

---

##### `declaration_number`<sup>Required</sup> <a name="declaration_number" id="projen-cmake.CMakeExecutable.Initializer.parameter.declaration_number"></a>

- *Type:* number

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-cmake.CMakeExecutable.synth">synth</a></code> | *No description.* |

---

##### `synth` <a name="synth" id="projen-cmake.CMakeExecutable.synth"></a>

```typescript
public synth(cmakefile: TextFile): void
```

###### `cmakefile`<sup>Required</sup> <a name="cmakefile" id="projen-cmake.CMakeExecutable.synth.parameter.cmakefile"></a>

- *Type:* projen.TextFile

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-cmake.CMakeExecutable.property.dependsOn">dependsOn</a></code> | <code><a href="#projen-cmake.CMakeFileFragment">CMakeFileFragment</a>[]</code> | *No description.* |
| <code><a href="#projen-cmake.CMakeExecutable.property.postfixLines">postfixLines</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#projen-cmake.CMakeExecutable.property.prefixLines">prefixLines</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#projen-cmake.CMakeExecutable.property.declarationNumber">declarationNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#projen-cmake.CMakeExecutable.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-cmake.CMakeExecutable.property.project">project</a></code> | <code><a href="#projen-cmake.CMakeProject">CMakeProject</a></code> | *No description.* |
| <code><a href="#projen-cmake.CMakeExecutable.property.targetLibraries">targetLibraries</a></code> | <code><a href="#projen-cmake.CMakeLibrary">CMakeLibrary</a>[]</code> | *No description.* |
| <code><a href="#projen-cmake.CMakeExecutable.property.filenames">filenames</a></code> | <code>string[]</code> | *No description.* |

---

##### `dependsOn`<sup>Required</sup> <a name="dependsOn" id="projen-cmake.CMakeExecutable.property.dependsOn"></a>

```typescript
public readonly dependsOn: CMakeFileFragment[];
```

- *Type:* <a href="#projen-cmake.CMakeFileFragment">CMakeFileFragment</a>[]

---

##### `postfixLines`<sup>Required</sup> <a name="postfixLines" id="projen-cmake.CMakeExecutable.property.postfixLines"></a>

```typescript
public readonly postfixLines: string[];
```

- *Type:* string[]

---

##### `prefixLines`<sup>Required</sup> <a name="prefixLines" id="projen-cmake.CMakeExecutable.property.prefixLines"></a>

```typescript
public readonly prefixLines: string[];
```

- *Type:* string[]

---

##### `declarationNumber`<sup>Required</sup> <a name="declarationNumber" id="projen-cmake.CMakeExecutable.property.declarationNumber"></a>

```typescript
public readonly declarationNumber: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="projen-cmake.CMakeExecutable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="projen-cmake.CMakeExecutable.property.project"></a>

```typescript
public readonly project: CMakeProject;
```

- *Type:* <a href="#projen-cmake.CMakeProject">CMakeProject</a>

---

##### `targetLibraries`<sup>Required</sup> <a name="targetLibraries" id="projen-cmake.CMakeExecutable.property.targetLibraries"></a>

```typescript
public readonly targetLibraries: CMakeLibrary[];
```

- *Type:* <a href="#projen-cmake.CMakeLibrary">CMakeLibrary</a>[]

---

##### `filenames`<sup>Required</sup> <a name="filenames" id="projen-cmake.CMakeExecutable.property.filenames"></a>

```typescript
public readonly filenames: string[];
```

- *Type:* string[]

---


### CMakeFileFragment <a name="CMakeFileFragment" id="projen-cmake.CMakeFileFragment"></a>

#### Initializers <a name="Initializers" id="projen-cmake.CMakeFileFragment.Initializer"></a>

```typescript
import { CMakeFileFragment } from 'projen-cmake'

new CMakeFileFragment()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-cmake.CMakeFileFragment.property.dependsOn">dependsOn</a></code> | <code><a href="#projen-cmake.CMakeFileFragment">CMakeFileFragment</a>[]</code> | *No description.* |
| <code><a href="#projen-cmake.CMakeFileFragment.property.postfixLines">postfixLines</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#projen-cmake.CMakeFileFragment.property.prefixLines">prefixLines</a></code> | <code>string[]</code> | *No description.* |

---

##### `dependsOn`<sup>Required</sup> <a name="dependsOn" id="projen-cmake.CMakeFileFragment.property.dependsOn"></a>

```typescript
public readonly dependsOn: CMakeFileFragment[];
```

- *Type:* <a href="#projen-cmake.CMakeFileFragment">CMakeFileFragment</a>[]

---

##### `postfixLines`<sup>Required</sup> <a name="postfixLines" id="projen-cmake.CMakeFileFragment.property.postfixLines"></a>

```typescript
public readonly postfixLines: string[];
```

- *Type:* string[]

---

##### `prefixLines`<sup>Required</sup> <a name="prefixLines" id="projen-cmake.CMakeFileFragment.property.prefixLines"></a>

```typescript
public readonly prefixLines: string[];
```

- *Type:* string[]

---


### CMakeLibrary <a name="CMakeLibrary" id="projen-cmake.CMakeLibrary"></a>

#### Initializers <a name="Initializers" id="projen-cmake.CMakeLibrary.Initializer"></a>

```typescript
import { CMakeLibrary } from 'projen-cmake'

new CMakeLibrary(project: CMakeProject, name: string, declaration_number: number)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-cmake.CMakeLibrary.Initializer.parameter.project">project</a></code> | <code><a href="#projen-cmake.CMakeProject">CMakeProject</a></code> | *No description.* |
| <code><a href="#projen-cmake.CMakeLibrary.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-cmake.CMakeLibrary.Initializer.parameter.declaration_number">declaration_number</a></code> | <code>number</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen-cmake.CMakeLibrary.Initializer.parameter.project"></a>

- *Type:* <a href="#projen-cmake.CMakeProject">CMakeProject</a>

---

##### `name`<sup>Required</sup> <a name="name" id="projen-cmake.CMakeLibrary.Initializer.parameter.name"></a>

- *Type:* string

---

##### `declaration_number`<sup>Required</sup> <a name="declaration_number" id="projen-cmake.CMakeLibrary.Initializer.parameter.declaration_number"></a>

- *Type:* number

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-cmake.CMakeLibrary.addSourceFile">addSourceFile</a></code> | *No description.* |
| <code><a href="#projen-cmake.CMakeLibrary.synth">synth</a></code> | *No description.* |

---

##### `addSourceFile` <a name="addSourceFile" id="projen-cmake.CMakeLibrary.addSourceFile"></a>

```typescript
public addSourceFile(filename: string): CMakeLibrary
```

###### `filename`<sup>Required</sup> <a name="filename" id="projen-cmake.CMakeLibrary.addSourceFile.parameter.filename"></a>

- *Type:* string

---

##### `synth` <a name="synth" id="projen-cmake.CMakeLibrary.synth"></a>

```typescript
public synth(cmakefile: TextFile): void
```

###### `cmakefile`<sup>Required</sup> <a name="cmakefile" id="projen-cmake.CMakeLibrary.synth.parameter.cmakefile"></a>

- *Type:* projen.TextFile

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-cmake.CMakeLibrary.property.dependsOn">dependsOn</a></code> | <code><a href="#projen-cmake.CMakeFileFragment">CMakeFileFragment</a>[]</code> | *No description.* |
| <code><a href="#projen-cmake.CMakeLibrary.property.postfixLines">postfixLines</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#projen-cmake.CMakeLibrary.property.prefixLines">prefixLines</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#projen-cmake.CMakeLibrary.property.declarationNumber">declarationNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#projen-cmake.CMakeLibrary.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-cmake.CMakeLibrary.property.project">project</a></code> | <code><a href="#projen-cmake.CMakeProject">CMakeProject</a></code> | *No description.* |
| <code><a href="#projen-cmake.CMakeLibrary.property.targetLibraries">targetLibraries</a></code> | <code><a href="#projen-cmake.CMakeLibrary">CMakeLibrary</a>[]</code> | *No description.* |
| <code><a href="#projen-cmake.CMakeLibrary.property.filenames">filenames</a></code> | <code>string[]</code> | *No description.* |

---

##### `dependsOn`<sup>Required</sup> <a name="dependsOn" id="projen-cmake.CMakeLibrary.property.dependsOn"></a>

```typescript
public readonly dependsOn: CMakeFileFragment[];
```

- *Type:* <a href="#projen-cmake.CMakeFileFragment">CMakeFileFragment</a>[]

---

##### `postfixLines`<sup>Required</sup> <a name="postfixLines" id="projen-cmake.CMakeLibrary.property.postfixLines"></a>

```typescript
public readonly postfixLines: string[];
```

- *Type:* string[]

---

##### `prefixLines`<sup>Required</sup> <a name="prefixLines" id="projen-cmake.CMakeLibrary.property.prefixLines"></a>

```typescript
public readonly prefixLines: string[];
```

- *Type:* string[]

---

##### `declarationNumber`<sup>Required</sup> <a name="declarationNumber" id="projen-cmake.CMakeLibrary.property.declarationNumber"></a>

```typescript
public readonly declarationNumber: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="projen-cmake.CMakeLibrary.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="projen-cmake.CMakeLibrary.property.project"></a>

```typescript
public readonly project: CMakeProject;
```

- *Type:* <a href="#projen-cmake.CMakeProject">CMakeProject</a>

---

##### `targetLibraries`<sup>Required</sup> <a name="targetLibraries" id="projen-cmake.CMakeLibrary.property.targetLibraries"></a>

```typescript
public readonly targetLibraries: CMakeLibrary[];
```

- *Type:* <a href="#projen-cmake.CMakeLibrary">CMakeLibrary</a>[]

---

##### `filenames`<sup>Required</sup> <a name="filenames" id="projen-cmake.CMakeLibrary.property.filenames"></a>

```typescript
public readonly filenames: string[];
```

- *Type:* string[]

---


### CMakePackage <a name="CMakePackage" id="projen-cmake.CMakePackage"></a>

#### Initializers <a name="Initializers" id="projen-cmake.CMakePackage.Initializer"></a>

```typescript
import { CMakePackage } from 'projen-cmake'

new CMakePackage(project: CMakeProject, name: string, declaration_number: number)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-cmake.CMakePackage.Initializer.parameter.project">project</a></code> | <code><a href="#projen-cmake.CMakeProject">CMakeProject</a></code> | *No description.* |
| <code><a href="#projen-cmake.CMakePackage.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-cmake.CMakePackage.Initializer.parameter.declaration_number">declaration_number</a></code> | <code>number</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen-cmake.CMakePackage.Initializer.parameter.project"></a>

- *Type:* <a href="#projen-cmake.CMakeProject">CMakeProject</a>

---

##### `name`<sup>Required</sup> <a name="name" id="projen-cmake.CMakePackage.Initializer.parameter.name"></a>

- *Type:* string

---

##### `declaration_number`<sup>Required</sup> <a name="declaration_number" id="projen-cmake.CMakePackage.Initializer.parameter.declaration_number"></a>

- *Type:* number

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-cmake.CMakePackage.property.declarationNumber">declarationNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#projen-cmake.CMakePackage.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-cmake.CMakePackage.property.project">project</a></code> | <code><a href="#projen-cmake.CMakeProject">CMakeProject</a></code> | *No description.* |

---

##### `declarationNumber`<sup>Required</sup> <a name="declarationNumber" id="projen-cmake.CMakePackage.property.declarationNumber"></a>

```typescript
public readonly declarationNumber: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="projen-cmake.CMakePackage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="projen-cmake.CMakePackage.property.project"></a>

```typescript
public readonly project: CMakeProject;
```

- *Type:* <a href="#projen-cmake.CMakeProject">CMakeProject</a>

---


### CMakeProject <a name="CMakeProject" id="projen-cmake.CMakeProject"></a>

#### Initializers <a name="Initializers" id="projen-cmake.CMakeProject.Initializer"></a>

```typescript
import { CMakeProject } from 'projen-cmake'

new CMakeProject(options: CMakeProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-cmake.CMakeProject.Initializer.parameter.options">options</a></code> | <code><a href="#projen-cmake.CMakeProjectOptions">CMakeProjectOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="projen-cmake.CMakeProject.Initializer.parameter.options"></a>

- *Type:* <a href="#projen-cmake.CMakeProjectOptions">CMakeProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-cmake.CMakeProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#projen-cmake.CMakeProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#projen-cmake.CMakeProject.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#projen-cmake.CMakeProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#projen-cmake.CMakeProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#projen-cmake.CMakeProject.annotateGenerated">annotateGenerated</a></code> | Consider a set of files as "generated". |
| <code><a href="#projen-cmake.CMakeProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#projen-cmake.CMakeProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#projen-cmake.CMakeProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#projen-cmake.CMakeProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#projen-cmake.CMakeProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#projen-cmake.CMakeProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#projen-cmake.CMakeProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#projen-cmake.CMakeProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#projen-cmake.CMakeProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#projen-cmake.CMakeProject.declareExecutable">declareExecutable</a></code> | *No description.* |
| <code><a href="#projen-cmake.CMakeProject.declareLibrary">declareLibrary</a></code> | *No description.* |
| <code><a href="#projen-cmake.CMakeProject.findPackage">findPackage</a></code> | *No description.* |

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="projen-cmake.CMakeProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="projen-cmake.CMakeProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="projen-cmake.CMakeProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen-cmake.CMakeProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="projen-cmake.CMakeProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(_pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `_pattern`<sup>Required</sup> <a name="_pattern" id="projen-cmake.CMakeProject.addPackageIgnore.parameter._pattern"></a>

- *Type:* string

The glob pattern to exclude.

---

##### `addTask` <a name="addTask" id="projen-cmake.CMakeProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="projen-cmake.CMakeProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="projen-cmake.CMakeProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="projen-cmake.CMakeProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="projen-cmake.CMakeProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="projen-cmake.CMakeProject.annotateGenerated"></a>

```typescript
public annotateGenerated(_glob: string): void
```

Consider a set of files as "generated".

This method is implemented by
derived classes and used for example, to add git attributes to tell GitHub
that certain files are generated.

###### `_glob`<sup>Required</sup> <a name="_glob" id="projen-cmake.CMakeProject.annotateGenerated.parameter._glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="projen-cmake.CMakeProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen-cmake.CMakeProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="projen-cmake.CMakeProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="projen-cmake.CMakeProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="projen-cmake.CMakeProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

By default, this is `npx projen@<version> <task>`

###### `task`<sup>Required</sup> <a name="task" id="projen-cmake.CMakeProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="projen-cmake.CMakeProject.synth"></a>

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

##### `tryFindFile` <a name="tryFindFile" id="projen-cmake.CMakeProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-cmake.CMakeProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="projen-cmake.CMakeProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-cmake.CMakeProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="projen-cmake.CMakeProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-cmake.CMakeProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="projen-cmake.CMakeProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-cmake.CMakeProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `declareExecutable` <a name="declareExecutable" id="projen-cmake.CMakeProject.declareExecutable"></a>

```typescript
public declareExecutable(name: string): CMakeExecutable
```

###### `name`<sup>Required</sup> <a name="name" id="projen-cmake.CMakeProject.declareExecutable.parameter.name"></a>

- *Type:* string

---

##### `declareLibrary` <a name="declareLibrary" id="projen-cmake.CMakeProject.declareLibrary"></a>

```typescript
public declareLibrary(name: string): CMakeExecutable
```

###### `name`<sup>Required</sup> <a name="name" id="projen-cmake.CMakeProject.declareLibrary.parameter.name"></a>

- *Type:* string

---

##### `findPackage` <a name="findPackage" id="projen-cmake.CMakeProject.findPackage"></a>

```typescript
public findPackage(package_name: string): CMakePackage
```

###### `package_name`<sup>Required</sup> <a name="package_name" id="projen-cmake.CMakeProject.findPackage.parameter.package_name"></a>

- *Type:* string

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-cmake.CMakeProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-cmake.CMakeProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen-cmake.CMakeProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-cmake.CMakeProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#projen-cmake.CMakeProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#projen-cmake.CMakeProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#projen-cmake.CMakeProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#projen-cmake.CMakeProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#projen-cmake.CMakeProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#projen-cmake.CMakeProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#projen-cmake.CMakeProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#projen-cmake.CMakeProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#projen-cmake.CMakeProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-cmake.CMakeProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-cmake.CMakeProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-cmake.CMakeProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#projen-cmake.CMakeProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#projen-cmake.CMakeProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#projen-cmake.CMakeProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#projen-cmake.CMakeProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-cmake.CMakeProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#projen-cmake.CMakeProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#projen-cmake.CMakeProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#projen-cmake.CMakeProject.property.defaultCMakeMinVersion">defaultCMakeMinVersion</a></code> | <code>number</code> | *No description.* |

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="projen-cmake.CMakeProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="projen-cmake.CMakeProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="projen-cmake.CMakeProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="projen-cmake.CMakeProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="projen-cmake.CMakeProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="projen-cmake.CMakeProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="projen-cmake.CMakeProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="projen-cmake.CMakeProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="projen-cmake.CMakeProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="projen-cmake.CMakeProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="projen-cmake.CMakeProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="projen-cmake.CMakeProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="projen-cmake.CMakeProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="projen-cmake.CMakeProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="projen-cmake.CMakeProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="projen-cmake.CMakeProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="projen-cmake.CMakeProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="projen-cmake.CMakeProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="projen-cmake.CMakeProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="projen-cmake.CMakeProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="projen-cmake.CMakeProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="projen-cmake.CMakeProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="projen-cmake.CMakeProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `defaultCMakeMinVersion`<sup>Required</sup> <a name="defaultCMakeMinVersion" id="projen-cmake.CMakeProject.property.defaultCMakeMinVersion"></a>

```typescript
public readonly defaultCMakeMinVersion: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-cmake.CMakeProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="projen-cmake.CMakeProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

### CMakeTarget <a name="CMakeTarget" id="projen-cmake.CMakeTarget"></a>

#### Initializers <a name="Initializers" id="projen-cmake.CMakeTarget.Initializer"></a>

```typescript
import { CMakeTarget } from 'projen-cmake'

new CMakeTarget(project: CMakeProject, name: string, declaration_number: number)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-cmake.CMakeTarget.Initializer.parameter.project">project</a></code> | <code><a href="#projen-cmake.CMakeProject">CMakeProject</a></code> | *No description.* |
| <code><a href="#projen-cmake.CMakeTarget.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-cmake.CMakeTarget.Initializer.parameter.declaration_number">declaration_number</a></code> | <code>number</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen-cmake.CMakeTarget.Initializer.parameter.project"></a>

- *Type:* <a href="#projen-cmake.CMakeProject">CMakeProject</a>

---

##### `name`<sup>Required</sup> <a name="name" id="projen-cmake.CMakeTarget.Initializer.parameter.name"></a>

- *Type:* string

---

##### `declaration_number`<sup>Required</sup> <a name="declaration_number" id="projen-cmake.CMakeTarget.Initializer.parameter.declaration_number"></a>

- *Type:* number

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-cmake.CMakeTarget.property.dependsOn">dependsOn</a></code> | <code><a href="#projen-cmake.CMakeFileFragment">CMakeFileFragment</a>[]</code> | *No description.* |
| <code><a href="#projen-cmake.CMakeTarget.property.postfixLines">postfixLines</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#projen-cmake.CMakeTarget.property.prefixLines">prefixLines</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#projen-cmake.CMakeTarget.property.declarationNumber">declarationNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#projen-cmake.CMakeTarget.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-cmake.CMakeTarget.property.project">project</a></code> | <code><a href="#projen-cmake.CMakeProject">CMakeProject</a></code> | *No description.* |
| <code><a href="#projen-cmake.CMakeTarget.property.targetLibraries">targetLibraries</a></code> | <code><a href="#projen-cmake.CMakeLibrary">CMakeLibrary</a>[]</code> | *No description.* |

---

##### `dependsOn`<sup>Required</sup> <a name="dependsOn" id="projen-cmake.CMakeTarget.property.dependsOn"></a>

```typescript
public readonly dependsOn: CMakeFileFragment[];
```

- *Type:* <a href="#projen-cmake.CMakeFileFragment">CMakeFileFragment</a>[]

---

##### `postfixLines`<sup>Required</sup> <a name="postfixLines" id="projen-cmake.CMakeTarget.property.postfixLines"></a>

```typescript
public readonly postfixLines: string[];
```

- *Type:* string[]

---

##### `prefixLines`<sup>Required</sup> <a name="prefixLines" id="projen-cmake.CMakeTarget.property.prefixLines"></a>

```typescript
public readonly prefixLines: string[];
```

- *Type:* string[]

---

##### `declarationNumber`<sup>Required</sup> <a name="declarationNumber" id="projen-cmake.CMakeTarget.property.declarationNumber"></a>

```typescript
public readonly declarationNumber: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="projen-cmake.CMakeTarget.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="projen-cmake.CMakeTarget.property.project"></a>

```typescript
public readonly project: CMakeProject;
```

- *Type:* <a href="#projen-cmake.CMakeProject">CMakeProject</a>

---

##### `targetLibraries`<sup>Required</sup> <a name="targetLibraries" id="projen-cmake.CMakeTarget.property.targetLibraries"></a>

```typescript
public readonly targetLibraries: CMakeLibrary[];
```

- *Type:* <a href="#projen-cmake.CMakeLibrary">CMakeLibrary</a>[]

---



