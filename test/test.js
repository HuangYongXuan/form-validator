const Validator = require('../dist/index').default;

function testValidatorIp() {
	let data = {
		name: '',
		data: {
			value: ''
		}
	};

	let rules = {
		name: ['required', 'max:10', 'min:2'],
		'data.value': ['required', 'ip']
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
