/**
Get the path of the parent module.

@param filePath - The file path of the module of which to get the parent path.

Useful if you want it to work [multiple module levels down](https://github.com/sindresorhus/parent-module/tree/main/fixtures/filepath).

Default: [`__filename`](https://nodejs.org/api/globals.html#globals_filename)

@example
```
// bar.ts
import parentModule from 'parent-module';

export default () => {
	console.log(parentModule());
	//=> '/Users/sindresorhus/dev/unicorn/foo.ts'
};

// foo.ts
import bar from './bar.js';

bar();
```
*/
export default function parentModule(filePath?: string): string | undefined;
