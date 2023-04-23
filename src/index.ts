/**
 * projen-cmake
 *
 * Author: Kyelok
 */

import { Project, ProjectOptions, TextFile } from 'projen';
import { ProjenrcTs } from 'projen/lib/typescript';
import * as semver from 'semver';
import { validator } from './validation';

/**
 * The languages that may be specified in a CMake project declaration.
 */
export const cmakeLanguages = [
  'C',
  'CXX',
  'CSharp',
  'CUDA',
  'OBJC',
  'OBJCXX',
  'Fortran',
  'HIP',
  'ISPC',
  'Swift',
  'ASM',
  'ASM_NASM',
  'ASM_MARMASM',
  'ASM_MASM',
  'ASM-ATT',
] as const;
export type CMakeLanguage = typeof cmakeLanguages[number];

export class CMakeFileFragment {
  dependsOn: CMakeFileFragment[] = [];
  prefixLines: string[] = [];
  postfixLines: string[] = [];
}

export class CMakeTarget extends CMakeFileFragment {
  name: string;
  declarationNumber: number;
  project: CMakeProject;
  targetLibraries: CMakeLibrary[] = [];

  /** @internal */
  constructor(project: CMakeProject, name: string, declaration_number: number) {
    super();
    this.project = project;
    this.name = name;
    this.declarationNumber = declaration_number;
  }
}

export class CMakeExecutable extends CMakeTarget {
  filenames: string[] = [];

  /** @internal */
  constructor(project: CMakeProject, name: string, declaration_number: number) {
    super(project, name, declaration_number);
  }

  addFile(filename: string): CMakeLibrary {
    this.filenames.push(filename);
    return this;
  }

  synth(cmakefile: TextFile): void {
    const addexe_str = `add_executable(${this.name}`;
    // Deal with the no-files case
    if (this.filenames.length == 0) {
      validator.warn(`Executable '${this.name}' has no attached source files`);
      cmakefile.addLine(`${addexe_str})`);
      cmakefile.addLine('');
      return;
    }

    // Add given files to the executable definition
    cmakefile.addLine(`${addexe_str} ${this.filenames[0]}`);
    const padding = ' '.repeat(addexe_str.length);
    for (let filename of this.filenames.slice(1)) {
      cmakefile.addLine(`${padding} ${filename}`);
    }
    cmakefile.addLine('');
  }
}

export class CMakeLibrary extends CMakeTarget {
  filenames: string[] = [];

  /** @internal */
  constructor(project: CMakeProject, name: string, declaration_number: number) {
    super(project, name, declaration_number);
  }

  addFile(filename: string): CMakeLibrary {
    this.filenames.push(filename);
    return this;
  }

  synth(cmakefile: TextFile): void {
    const addlib_str = `add_library(${this.name}`;
    // Deal with the no-files case
    if (this.filenames.length == 0) {
      validator.warn(`Library '${this.name}' has no attached source files`);
      cmakefile.addLine(`${addlib_str})`);
      cmakefile.addLine('');
      return;
    }

    // Add given files to the executable definition
    cmakefile.addLine(`${addlib_str} ${this.filenames[0]}`);
    const padding = ' '.repeat(addlib_str.length);
    for (let filename of this.filenames.slice(1)) {
      cmakefile.addLine(`${padding} ${filename}`);
    }
    cmakefile.addLine('');
  }
}

export class CMakePackage {
  name: string;
  declarationNumber: number;
  project: CMakeProject;

  constructor(project: CMakeProject, name: string, declaration_number: number) {
    this.project = project;
    this.name = name;
    this.declarationNumber = declaration_number;
  }
}

export interface CMakeProjectOptions extends ProjectOptions {
  /**
   * The version of CMake that CMakeLists.txt should specify. If a value is passed that
   * isn't coercible to a semantic version, the default value will be used instead.
   *
   * @default "3.5.0"
   */
  readonly cmakeMinVersion?: string;

  /**
   * The version the constructed CMake project will specify.
   *
   * @default undefined
   */
  readonly cmakeProjectVersion?: string;

  /**
   * The languages the CMake project uses.
   *
   * @default undefined
   */
  readonly cmakeProjectLanguages?: CMakeLanguage[];
}


export class CMakeProject extends Project {
  private _cmakefile: TextFile;

  private _executables: CMakeExecutable[] = [];
  private _libraries: CMakeLibrary[] = [];
  private _packages: CMakePackage[] = [];

  private _declarationCounter: number = 1;

  readonly defaultCMakeMinVersion: string = '3.5.0';

  readonly cmakeMinVersion: string;
  readonly cmakeProjectVersion?: string;
  readonly cmakeProjectLanguages?: CMakeLanguage[];

  constructor(options: CMakeProjectOptions) {
    super(options);

    new ProjenrcTs(this);

    this.defaultTask?.exec('ts-node .projenrc.ts');

    this._cmakefile = new TextFile(this, './CMakeLists.txt', { marker: false, readonly: true });

    this.cmakeMinVersion = semver.coerce(options.cmakeMinVersion)?.version ?? this.defaultCMakeMinVersion;
    if (semver.valid(this.cmakeMinVersion) === null) {
      validator.warn(`Bad CMake minimum version specified (${this.cmakeMinVersion}), using default ` +
                     `version instead (${this.defaultCMakeMinVersion})`);
      this.cmakeMinVersion = this.defaultCMakeMinVersion;
    }

    this.cmakeProjectVersion = semver.coerce(options.cmakeProjectVersion)?.version;
    if (this.cmakeProjectVersion === null) {
      validator.warn(`Bad CMake project version specified (${this.cmakeMinVersion}), ignoring`);
    }

    this.cmakeProjectLanguages = options.cmakeProjectLanguages;
  }

  private appendProjenGeneratedNote(cmakelists: TextFile): void {
    cmakelists.addLine('# ~~ This file was auto-generated by Projen.');
    cmakelists.addLine('# ~~ To make changes, please edit .projenrc.ts and run `npx projen` to rebuild.');
    cmakelists.addLine('');
  }

  private appendCmakeMinRequired(cmakelists: TextFile): void {
    cmakelists.addLine(`cmake_minimum_required(VERSION ${this.cmakeMinVersion})`);
    cmakelists.addLine('');
  }

  private appendProjectDeclaration(cmakelists: TextFile): void {
    let project_str = this.name;
    if (this.cmakeProjectVersion !== undefined) {
      project_str += `\n        VERSION ${this.cmakeProjectVersion}`;
    }
    if (this.cmakeProjectLanguages !== undefined) {
      project_str += `\n        LANGUAGES ${this.cmakeProjectLanguages.join(' ')}`;
    }
    cmakelists.addLine(`project(${project_str})`);
    cmakelists.addLine('');
  }

  declareExecutable(name: string): CMakeExecutable {
    const exe = new CMakeExecutable(this, name, this._declarationCounter);
    this._declarationCounter++;
    this._executables.push(exe);
    return exe;
  }

  declareLibrary(name: string): CMakeExecutable {
    const lib = new CMakeLibrary(this, name, this._declarationCounter);
    this._declarationCounter++;
    this._libraries.push(lib);
    return lib;
  }

  findPackage(package_name: string): CMakePackage {
    const cmake_package = new CMakePackage(this, package_name, this._declarationCounter);
    this._declarationCounter++;
    this._packages.push(cmake_package);
    return cmake_package;
  }

  preSynthesize(): void {
    this.appendProjenGeneratedNote(this._cmakefile);
    this.appendCmakeMinRequired(this._cmakefile);
    this.appendProjectDeclaration(this._cmakefile);

    // TODO: attach pre and post lines to each synthesized part
    for (let executable of this._executables) {
      executable.synth(this._cmakefile);
    }
    for (let library of this._libraries) {
      library.synth(this._cmakefile);
    }
    // Add find_package statements as needed
  }

  postSynthesize(): void {
    console.log(`Warnings: ${validator.num_warns}`);
  }
}
