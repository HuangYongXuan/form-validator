const Validator = require('../dist/index');

let data = {
    name: 'adehjrttyrt'
};

let rules = {
    name: 'required|min:6|max:32'
};

let v = Validator.make(data, rules);

if (v.fails()) {
    console.info(v.getErrors())
}
