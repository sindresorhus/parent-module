# parent-module

> Get the path of the parent module

Node.js exposes `module.parent`, but it only gives you the first cached parent, which is not necessarily the actual parent.

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
};
```

```js
// foo.js
import bar from './bar.js';

bar();
```

## API

### parentModule(filePath?)

By default, it will return the path of the immediate parent.

#### filePath

Type: `string`\
Default: [`__filename`](https://nodejs.org/api/globals.html#globals_filename)

The file path of the module of which to get the parent path.

Useful if you want it to work [multiple module levels down](fixtures/filepath).

## Tip

Combine it with [`read-package-up`](https://github.com/sindresorhus/read-package-up) to read the package.json of the parent module.

```js
import path from 'node:path';
import {readPackageUpSync} from 'read-package-up';
import parentModule from 'parent-module';

console.log(readPackageUpSync({cwd: path.dirname(parentModule())}).pkg);
//=> {name: 'chalk', version: '1.0.0', …}
```
