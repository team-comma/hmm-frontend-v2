const fs = require('fs');
const path = require('path');

const merge = (target, source) => {
  const isObject = (obj) => obj && typeof obj === 'object';

  if (!isObject(target) || !isObject(source)) {
    return source;
  }

  Object.keys(source).forEach((key) => {
    const targetValue = target[key];
    const sourceValue = source[key];

    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      target[key] = targetValue.concat(sourceValue);
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      target[key] = merge(Object.assign({}, targetValue), sourceValue);
    } else {
      target[key] = sourceValue;
    }
  });

  return target;
};

const generateESLintConfigForAllPackages = (rootDir, overrides) => {
  const pkg = require(`${rootDir}/package.json`);
  const { packages } = pkg.workspaces;
  const workspaces = packages.map((package) => package.slice(0, -2));
  const directories = workspaces.reduce((arr, workspace) => {
    arr.push(
      ...fs
        .readdirSync(`${rootDir}/${workspace}`)
        .map((dir) => `${workspace}/${dir}`)
    );
    return arr;
  }, []);

  const config = directories.map((dir) =>
    merge(
      {
        files: [`${dir}/**/*.ts?(x)`],
        settings: {
          'import/resolver': {
            typescript: {
              project: path.resolve(`${rootDir}/${dir}/tsconfig.json`),
            },
          },
        },
      },
      Object.assign({}, overrides[dir])
    )
  );

  return config;
};

module.exports = {
  generateESLintConfigForAllPackages,
};
