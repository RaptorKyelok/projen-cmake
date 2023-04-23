import { expect, test } from '@jest/globals';
import { Testing } from 'projen';
import * as semver from 'semver';
import { CMakeProject } from '../lib';

test('expect `new CMakeProject()` to generate basic project structure', () => {
  const project = new CMakeProject({ name: 'test-project' });
  let result = Testing.synth(project);
  const filenames = Object.keys(result);
  expect(filenames.length).toBe(5);
  expect(filenames).toContain('.gitignore');
  expect(filenames).toContain('.projen/files.json');
  expect(filenames).toContain('.projen/tasks.json');
  expect(filenames).toContain('CMakeLists.txt');
  expect(filenames).toContain('tsconfig.projen.json');
});


test('CMakeLists.txt should have and use a default minimum required version', () => {
  const project = new CMakeProject({ name: 'test-project' });
  let result = Testing.synth(project);
  let cmakefile = result['CMakeLists.txt'];
  expect(cmakefile).toBeDefined();

  let default_version = project.defaultCMakeMinVersion.toString().replace('.', '\\.');
  let pattern = new RegExp(`^cmake_minimum_required\\(VERSION ${default_version}\\)$`, 'm');
  expect(cmakefile).toMatch(pattern);
});


test.each(['3.2', '3.10', '3.22', 'v3'])('CMakeLists.txt should set minimum required version when given one', (version: string) => {
  const project = new CMakeProject({ name: 'test-project', cmakeMinVersion: version });
  let result = Testing.synth(project);
  let cmakefile = result['CMakeLists.txt'];
  expect(cmakefile).toBeDefined();

  let regexified_version = semver.coerce(version)?.version.replace('.', '\\.');
  let pattern = new RegExp(`^cmake_minimum_required\\(VERSION ${regexified_version}(?:\\.\\d+)*\\)$`, 'm');
  expect(cmakefile).toMatch(pattern);
});


test.each(['', 'version one', 'A'])('CMakeLists.txt should use the default minimum version if not ' +
                                    'given a version that can be coerced to a version number',
(version: string) => {
  const project = new CMakeProject({ name: 'test-project', cmakeMinVersion: version });
  let result = Testing.synth(project);
  let cmakefile = result['CMakeLists.txt'];
  expect(cmakefile).toBeDefined();

  let default_version = project.defaultCMakeMinVersion.toString().replace('.', '\\.');
  let pattern = new RegExp(`^cmake_minimum_required\\(VERSION ${default_version}\\)$`, 'm');
  expect(cmakefile).toMatch(pattern);
});


// TODO: check for presence of project declaration
// TODO: project declaration, VERSION
// TODO: project declaration, LANGUAGES


test('adding an executable to the project should produce an `add_executable` line in CMakeLists.txt', () => {
  const project = new CMakeProject({ name: 'test-project' });
  project.declareExecutable('my-exe');

  let result = Testing.synth(project);
  let cmakefile = result['CMakeLists.txt'];
  expect(cmakefile).toBeDefined();
  expect(cmakefile).toMatch(/^add_executable\(my\-exe\)$/m);
});


test('adding a library to the project should produce an `add_library` line in CMakeLists.txt', () => {
  const project = new CMakeProject({ name: 'test-project' });
  project.declareLibrary('my-lib');

  let result = Testing.synth(project);
  let cmakefile = result['CMakeLists.txt'];
  expect(cmakefile).toBeDefined();
  expect(cmakefile).toMatch(/^add_library\(my\-lib\)$/m);
});
