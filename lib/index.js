require('sugar');
var util = require('util');

// HACK: ...until Node.js `require` supports `instanceof` on modules loaded more than once. (bug in Node.js)
var Serializer = global.NodeDocumentSerializer || (global.NodeDocumentSerializer = require('node-document-serializer'));

// -----------------------
//  DOCS
// --------------------
//  - http://msgpack.org
//  - https://github.com/pgriess/node-msgpack

// -----------------------
//  Constructor
// --------------------

// new BSON ()
// new BSON (options)
function BSON () {
  var self = this

  self.klass = BSON;
  self.klass.super_.apply(self, arguments);

  self.engine = require('buffalo');
  self.binary = true;
}

util.inherits(BSON, Serializer);

// -----------------------
//  Class
// --------------------

BSON.defaults = {
  options: {}
};

BSON.options = Object.clone(BSON.defaults.options, true);

BSON.reset = Serializer.reset;

// -----------------------
//  Instance
// --------------------

// #serialize (object)
BSON.prototype.serialize = function(object) {
  var self = this, data;

  try {
    data = self.engine.serialize(object);
  } catch (err) {
    err.name = "Serialization: " + err.name;
    err.message = err.message + "  =>  " + util.inspect(data);
    throw err;
  }

  return data;
};

// #deserialize (data)
BSON.prototype.deserialize = function(data) {
  var self = this, object;

  try {
    object = self.engine.parse(data);
  } catch (err) {
    err.name = "Deserialization: " + err.name;
    err.message = err.message + "  =>  " + util.inspect(data);
    throw err;
  }

  return object;
}

// -----------------------
//  Export
// --------------------

module.exports = BSON;
