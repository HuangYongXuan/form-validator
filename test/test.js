const Validator = require('../dist/index').default;

function testValidatorIp() {
	let data = {
		name: '0.123',
		array: [1, 2, 3, 4]
	};

	let rules = {
		name: ['nullable', 'numeric', 'min:0', 'max: 100', 'decimal:2'],
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