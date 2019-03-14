const Validator = require('../dist/index');

Validator.valid('required|max:10|min:5|string', 123);
