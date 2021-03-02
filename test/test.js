const Validator = require('../dist/index');

function testValidatorIp() {
	let data = {
		name: '1.1.1.11A',
		array: [1, 2, 3, 4]
	};

	let rules = {
		name: ['required', 'ip'],
		array: 'required|array|min:2|max:3'
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