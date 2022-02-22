import validator from './Validator/Validator';

export class StaticValidator {
	constructor() {
		this.errors = [];
		this.validator = null;
	}

	/**
	 * el
	 * @param rules             {String|Object}
	 * @param customMessages    {Object}
	 * @param customNames       {Object}
	 * @param messages          {String}
	 * @param value             {String}
	 * @param callBack          {function}
	 * @return {*}
	 */
	verification({rules, customMessages = {}, customNames={}, messages = undefined}, value, callBack) {
		if (typeof rules !== 'string' && Array.isArray(rules) === false) {
			return callBack();
		}
		let data = {
			name: value
		};
		rules = {
			name: rules
		};

		this.validator = validator.make(data, rules, customMessages, customNames);

		if (this.validator.fails()) {
			this.errors = this.validator.getError('name');
			if (messages !== undefined) {
				callBack(new Error(messages));
			} else if (this.errors && this.errors.length > 0) {
				return callBack(new Error(this.errors[0]));
			}
		}
		return callBack();
	}

	/**
	 *
	 * @param rules             {string | Array}
	 * @param value             {string}
	 * @param customMessages    {Array}
	 * @param customNames       {Object}
	 * @param callback			{function}
	 * @returns {Error|boolean}
	 */
	valid(rules, value, customMessages = {}, customNames , callback) {
		let data = {
			name: value
		};
		let dataRules = {
			name: rules
		};

		this.validator = validator.make(data, dataRules, customMessages, customNames, callback);

		if (this.validator.fails()) {
			this.errors = this.validator.getError('name');
			if (this.errors && this.errors.length > 0) {
				return new Error(this.errors[0]);
			}
		} else {
			return true;
		}
	}

	/**
	 *
	 * @param data              {Object}
	 * @param dataRules         {Object}
	 * @param customMessages    {Object}
	 * @param customNames       {Object}
	 * @param callback       	{function}
	 * @returns {Validator}
	 */
	make(data, dataRules, customMessages = {}, customNames, callback) {
		return validator.make(data, dataRules, customMessages, customNames, callback);
	}
}

export class Validator extends validator{}

export default new StaticValidator();