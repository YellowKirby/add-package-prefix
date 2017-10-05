function stringInvariant(description, value) {
  const type = typeof value;
  if (type !== 'string') {
    throw new TypeError(
      `Invalid package ${description}. Expected type 'string' but got '${type}'`
    );
  }
}

module.exports = function(prefix, packageName) {
  stringInvariant('prefix', prefix);
  stringInvariant('name', packageName);

  const hasScope = packageName.startsWith('@');
  const splitPoint = hasScope ? packageName.indexOf('/') + 1 : 0;
  const scope = packageName.substr(0, splitPoint);
  const baseName = packageName.substr(splitPoint);
  const needsPrefix = !baseName.startsWith(prefix);
  const needsHyphen = needsPrefix && prefix.length > 0;

  return [scope, needsPrefix && prefix, needsHyphen && '-', baseName]
    .filter(Boolean)
    .join('')
    .replace(/\s+/g, '-');
};
