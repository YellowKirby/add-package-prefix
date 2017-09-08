# add-package-prefix

[![build status](https://img.shields.io/travis/yellowkirby/add-package-prefix.svg)](https://travis-ci.org/yellowkirby/add-package-prefix)
[![code coverage](https://img.shields.io/codecov/c/github/yellowkirby/add-package-prefix.svg)](https://codecov.io/gh/yellowkirby/add-package-prefix)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://github.com/lassjs/lass)
[![license](https://img.shields.io/github/license/yellowkirby/add-package-prefix.svg)](<>)

> Add a (scope-friendly) prefix to an npm package name

Useful when you have a tool that allows package name shorthands. e.g., babel
plugins are resolved by either the direct package name or
`babel-plugin-${packageName}`.


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)


## Install

[npm][]:

```sh
npm install add-package-prefix
```

[yarn][]:

```sh
yarn add add-package-prefix
```


## Usage

> addPlugin(prefix : string, packageName : string)

Prefixes the `packageName` with the given `prefix`, ignoring any [package
scope][package-scope]. Automatically converts spaces to hyphens.

```js
const addPrefix = require('add-package-prefix');

addPrefix('babel-plugin', 'my-cool-project');        // => '@scope/babel-plugin-my-cool-project'
addPrefix('webpack-plugin', '@scope/awesome-thing'); // => '@scope/webpack-plugin-awesome-thing'
addPrefix('yep yep', 'this is fun');                 // => 'yep-yep-this-is-fun'
```


## Contributors

| Name            |
| --------------- |
| **YellowKirby** |


## License

[MIT](LICENSE) © YellowKirby


## 

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/

[package-scope]: https://docs.npmjs.com/misc/scope
