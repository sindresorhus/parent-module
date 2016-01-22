import path from 'path';
import test from 'ava';
import execa from 'execa';

global.Promise = Promise;

test('main', async t => {
	t.is(path.basename((await execa('node', ['./fixtures/main/1.js'])).stdout), '1.js');
});

test('filepath option', async t => {
	t.is(path.basename((await execa('node', ['./fixtures/filepath/1.js'])).stdout), '1.js');
});
