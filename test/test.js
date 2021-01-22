const Validator = require('../dist/index');

function testValidatorIp() {
    let data = {
        name: '10.233.12.12'
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