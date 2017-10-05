const test = require('ava');

const addPrefix = require('.');

test('throws with invalid params', t => {
  t.throws(() => addPrefix({}, 'string'));
  t.throws(() => addPrefix('string', null));
  t.throws(() => addPrefix([], 5));
});

function doIt(t, opts) {
  t.is(addPrefix(opts.prefix, opts.in), opts.out);
}

test('simple', doIt, {
  prefix: 'prefix',
  in: 'package',
  out: 'prefix-package'
});
test('empty package name', doIt, { prefix: 'prefix', in: '', out: 'prefix-' });
test('empty prefix', doIt, { prefix: '', in: 'package', out: 'package' });
test('scope', doIt, {
  prefix: 'prefix',
  in: '@scope/package',
  out: '@scope/prefix-package'
});
test('spaces', doIt, {
  prefix: 'hello world',
  in: 'more\tspaces\nand things',
  out: 'hello-world-more-spaces-and-things'
});

test('existing prefix', doIt, {
  prefix: 'prefix',
  in: 'prefix-package',
  out: 'prefix-package'
});
test('existing prefix + scope', doIt, {
  prefix: 'prefix',
  in: '@scope/prefix-package',
  out: '@scope/prefix-package'
});

test("slashes that aren't real scopes", doIt, {
  prefix: 'prefix',
  in: 'not_a_scope/package',
  out: 'prefix-not_a_scope/package'
});

test("lots of slashes that aren't real scopes", doIt, {
  prefix: 'prefix',
  in: 'thing/again/not_a_scope/package',
  out: 'prefix-thing/again/not_a_scope/package'
});

test('scopes with extra slashes', doIt, {
  prefix: 'prefix',
  in: '@scope/not_a_scope/package',
  out: '@scope/prefix-not_a_scope/package'
});
