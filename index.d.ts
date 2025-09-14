/**
Get the path of the parent module.

@param filePath - The file path of the module for which to get the parent path. Default: `import.meta.filename`

Useful for getting the parent of a specific module when the call traverses [multiple module levels](https://github.com/sindresorhus/parent-module/tree/main/fixtures/filepath).

@returns The file path of the parent module, or `undefined` if there is no parent module (for example, when called from the top-level of an entry module).

@example
```
// bar.js
import parentModule from 'parent-module';

export default function bar() {
	console.log(parentModule());
	//=> '/Users/sindresorhus/dev/unicorn/foo.js'
}

// foo.js
import bar from './bar.js';

bar();
```
*/
export default function parentModule(filePath?: string): string | undefined;
