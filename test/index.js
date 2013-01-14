
var Serializer = require('node-document-serializer');

module.exports = Serializer.Spec('BSON', {
  module: require('..'),
  engine: require('buffalo'),
  options: {},
  pack: require('buffalo').serialize,
  unpack: require('buffalo').deserialize,
  binary: true
});
