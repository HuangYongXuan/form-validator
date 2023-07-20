const Validator = require('../dist/index').default;

function testValidatorIp() {
	let data = {
		name: '',
	};

	let rules = {
		name: ['required', 'max:10', 'min:2'],
	};

	let v = Validator.make(data, rules, {}, {}, (msg, params) => {
		console.info(msg, params);
		return msg;
	});

	if (v.fails()) {
		console.error(v.getErrors())
	} else {
		console.info('success')
	}
}

testValidatorIp();
