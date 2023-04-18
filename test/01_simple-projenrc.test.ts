import { expect, test } from '@jest/globals';
import { Testing } from 'projen';
import { CMakeProject } from '../';

test('expect new CMakeProject to generate basic project structure', () => {
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
