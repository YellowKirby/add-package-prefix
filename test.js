const test = require('ava');

const addPrefix = require('.');

test('throws with invalid params', t => {
  t.throws(() => addPrefix({}, 'string'));
  t.throws(() => addPrefix('string', null));
  t.throws(() => addPrefix([], 5));
});

function doIt(t, prefix, packageName, expected) {
  t.is(addPrefix(prefix, packageName), expected);
}

test('simple', doIt, 'prefix', 'package', 'prefix-package');
test('empty package name', doIt, 'prefix', '', 'prefix-');
test('empty prefix', doIt, '', 'package', 'package');
test('scope', doIt, 'prefix', '@scope/package', '@scope/prefix-package');
test(
  'spaces',
  doIt,
  'hello world',
  'more\tspaces\nand things',
  'hello-world-more-spaces-and-things'
);
