const Validator = require('../dist/index');

console.info(Validator);

let result = Validator.valid('required|max:10|string|min:5', 'abc', {string: '12344'});

console.info(Validator.errors);
