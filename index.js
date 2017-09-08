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

  const maybeHyphen = prefix.length > 0 ? '-' : '';
  const splitPoint = packageName.indexOf('/') + 1;
  const scope = packageName.substr(0, splitPoint);
  const name = packageName.substr(splitPoint);

  return `${scope}${prefix}${maybeHyphen}${name}`.replace(/\s+/g, '-');
};
