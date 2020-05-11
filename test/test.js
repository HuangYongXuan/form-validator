const Validator = require('../dist/index');

let data = {
    name: 9.1242
};

let rules = {
    name: ['required', 'numeric', 'min:0', 'max:10', 'decimal:3']
};

let v = Validator.make(data, rules, {}, {});

if (v.fails()) {
    console.error(v.getErrors())
} else {
    console.info('success')
}
