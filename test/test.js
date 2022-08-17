const Validator = require('../dist/index').default;

function testValidatorIp() {
	let data = {
		name: 'abc',
	};

	let rules = {
		name: ['required', 'regex:/^[a-zA-Z]{1}[A-Za-z0-9_\\-]{1,}$/'],
	};

	let v = Validator.make(data, rules, {}, {}, (msg) => {
		return msg;
	});

	if (v.fails()) {
		console.error(v.getErrors())
	} else {
		console.info('success')
	}
}

testValidatorIp();
