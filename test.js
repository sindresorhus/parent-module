import path from 'node:path';
import test from 'ava';
import execa from 'execa';

test('main', async t => {
	const {stdout} = await execa('node', ['./fixtures/main/1.js']);
	t.is(path.basename(stdout), '1.js');
});

test('filePath option', async t => {
	const {stdout} = await execa('node', ['./fixtures/filepath/1.js']);
	t.is(path.basename(stdout), '1.js');
});
