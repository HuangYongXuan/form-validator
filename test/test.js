const Validator = require('../dist/index');

console.info(Validator);

Validator.valid('required|max:10|min:5|string', 123);

console.info(Validator.errors);