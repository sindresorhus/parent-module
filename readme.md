# parent-module

> Get the path of the parent module

This module provides a reliable way to get the file path of the module that called your code, working correctly with both CommonJS and ESM modules.

## Install

```sh
npm install parent-module
```

## Usage

```js
// bar.js
import parentModule from 'parent-module';

export default function bar() {
	console.log(parentModule());
	//=> '/Users/sindresorhus/dev/unicorn/foo.js'
}
```

```js
// foo.js
import bar from './bar.js';

bar();
```

## API

### parentModule(filePath?)

Returns: `string | undefined`

Returns the file path of the immediate parent module, or `undefined` if there is no parent module (for example, when called from the top-level of an entry module).

#### filePath

Type: `string`\
Default: `import.meta.filename`

The file path of the module for which to get the parent path.

Useful for getting the parent of a specific module when the call traverses [multiple module levels](fixtures/filepath).

## Tip

Combine it with [`read-package-up`](https://github.com/sindresorhus/read-package-up) to read the package.json of the parent module.

```js
import path from 'node:path';
import {readPackageUpSync} from 'read-package-up';
import parentModule from 'parent-module';

const parent = parentModule();
if (parent) {
	console.log(readPackageUpSync({cwd: path.dirname(parent)}).pkg);
	//=> {name: 'chalk', version: '1.0.0', …}
}
```
