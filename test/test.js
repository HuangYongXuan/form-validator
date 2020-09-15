const Validator = require('../dist/index');

let data = {
    name: 9.12
};

let rules = {
    name: ['required', 'numeric', 'min:0', 'max:10', 'decimal:2']
};

let v = Validator.make(data, rules, {}, {});

if (v.fails()) {
    console.error(v.getErrors())
} else {
    console.info('success')
}
