const fs = require('fs');
const resolve = require('resolve');
const path = require('path');
const caller = require('caller');

module.exports.require = (file) => {
  const basedir = path.dirname(caller());
  const f = resolve.sync(file, { extensions: ['.graphql', '.gql'], basedir });
  return fs.readFileSync(f, 'utf-8');
};

module.exports.resolve = (file) => {
  const basedir = path.dirname(caller());
  return resolve.sync(file, { extensions: ['.graphql', '.gql'], basedir });
};
