# projen-cmake

CMake project type for [Projen](https://github.com/projen/projen)

## Motive

C++ is a language I enjoy working in. However, I've never really been happy with any build systems I ever used. CMake is probably the best, but it still lacks a degree of user-friendliness and intuitiveness. I want a nicer build tool.

In addition, I find myself gravitating towards giving my C++ projects a very similar structure. And many elements of that structure (like unit testing setup) are repetitive and feel ripe for being automated. I want those things automated.

## Usage

Be sure you've installed Projen with `npm install projen` .

Run the command `npx projen new --from projen-cmake` to create a default CMake project. Once this is done, make edits to your `.projenrc.ts` and regenerate with `npx projen` to apply changes to your project's generated files.

## Plan

- [ ] Craft simple `CMakeLists.txt` files
  - [ ] Project declaration
  - [ ] Add executables and libraries
  - [ ] Find packages
  - [ ] Add target libraries, compiler options, etc. from packages
- [ ] Generate good [Catch2](https://github.com/catchorg/Catch2) test configuration
  - [ ] Generate individual unit tests
- [ ] Set up project using [Pitchfork Layout](https://api.csswg.org/bikeshed/?force=1&url=https://raw.githubusercontent.com/vector-of-bool/pitchfork/develop/data/spec.bs) rules by default
- [ ] Glean and implement best ideas from [Lectem's boilerplate](https://github.com/Lectem/cpp-boilerplate/blob/master/CMakeLists.txt)
- [ ] Get [Doxygen](https://www.doxygen.nl/) running also
