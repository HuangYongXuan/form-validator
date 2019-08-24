import Validator from './Validator/Validator';

export default {
    errors: [],

    /**
     *
     * @param rules             {string}
     * @param customMessages    {Array}
     * @param customNames       {Object}
     * @param value             {string}
     * @param callBack          {function}
     * @returns {*}
     */
    verification({rules, customMessages = [], customNames}, value, callBack) {
        if (rules === undefined) {
            callBack(new Error('缺少验证规则'));
        }
        let data = {
            name: value
        };
        let dataRules = {
            name: rules
        };
        let v = Validator.make(data, dataRules, customMessages, customNames);

        if (v.fails()) {
            let errors = v.getError('name');
            if (errors && errors.length > 0) {
                this.errors = errors;
                return callBack(new Error(errors.shift()));
            }
        } else {
            callBack();
        }
    },

    /**
     *
     * @param rules             {string | Array}
     * @param value             {string}
     * @param customMessages    {Array}
     * @param customNames       {Object}
     * @returns {Error|boolean}
     */
    valid(rules, value, customMessages = [], customNames) {
        let data = {
            name: value
        };
        let dataRules = {
            name: rules
        };

        let v = Validator.make(data, dataRules, customMessages, customNames);

        if (v.fails()) {
            let errors = v.getError('name');
            if (errors && errors.length > 0) {
                this.errors = errors;
                return new Error(errors.shift());
            }
        } else {
            return true;
        }
    },

    /**
     *
     * @param data              {Object}
     * @param dataRules         {Object}
     * @param customMessages    {Array}
     * @param customNames       {Object}
     * @returns {Validator}
     */
    make(data, dataRules, customMessages = [], customNames) {
        return Validator.make(data, dataRules, customMessages, customNames);
    }
};