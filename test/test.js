const Validator = require('../dist/index');

function testValidatorIp() {
    let data = {
        name: '1.1.1.11A'
    };

    let rules = {
        name: ['required', 'ip']
    };

    let v = Validator.make(data, rules, {}, {});

    if (v.fails()) {
        console.error(v.getErrors())
    } else {
        console.info('success')
    }
}

testValidatorIp();