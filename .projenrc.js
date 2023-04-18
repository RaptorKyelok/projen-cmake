const { cdk } = require('projen');
const project = new cdk.JsiiProject({
  author: 'Kyelok',
  authorAddress: 'kyelok.raptor@gmail.com',
  defaultReleaseBranch: 'main',
  name: 'projen-cmake',
  repositoryUrl: 'https://github.com/RaptorKyelok/projen-cmake.git',

  stability: 'experimental',
  keywords: [
    'projen',
    'cmake',
    'c++',
  ],
  license: 'MIT',

  pullRequestTemplateContents: [
    '---',
    'By submitting this pull request, I confirm that my contribution is made under the terms of the MIT license.',
  ],

  jsiiVersion: '5.x',
  typescriptVersion: '5.x',

  packageName: 'projen-cmake',
  deps: ['projen'],
  devDeps: ['@jest/globals'],
  description: 'CMake project type for Projen',
});

project.package.addVersion('0.1.1');
project.package.addPeerDeps('projen');

project.synth();
