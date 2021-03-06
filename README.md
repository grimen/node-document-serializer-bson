# NODE-DOCUMENT-SERIALIZER-BSON [![Build Status](https://secure.travis-ci.org/grimen/node-document-serializer-bson.png)](http://travis-ci.org/grimen/node-document-serializer-bson)

**Serializer** adapter [bson](http://bson.org) for [node-document](https://github.com/grimen/node-document) ODM for Node.js.


## Installation

```shell
  $ npm install node-document-serializer-bson
```


## Usage

**Basic:**

```javascript
  var Serializer = require('node-document-serializer-bson');

  var serializer = new Serializer();

  var object = {foo: "bar"}, data;

  console.log("Object: ", require('util').inspect(object), typeof object);

  data = serializer.serialize(object);

  console.log("Serialized: ", require('util').inspect(data), typeof data);

  object = serializer.deserialize(data);

  console.log("Deserialized: ", require('util').inspect(object), typeof object);
```

For details; see [node-document](https://github.com/grimen/node-document).


## Test

**Local tests:**

```shell
  $ make test
```


## License

Released under the MIT license.

Copyright (c) [Jonas Grimfelt](http://github.com/grimen)


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/grimen/node-document-serializer-bson/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

