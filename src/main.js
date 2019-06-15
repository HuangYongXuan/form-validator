import Validator from './Validator/Validator';

export default {
    errors: [],

    /**
     *
     * @param rules
     * @param value
     * @param callBack
     * @returns {*}
     */
    verification({rules}, value, callBack) {
        if (rules === undefined) {
            callBack(new Error('缺少验证规则'));
        }
        let data = {
            name: value
        };
        let dataRules = {
            name: rules
        };
        let v = Validator.make(data, dataRules);

        if (v.fails()) {
            let errors = v.getError('name');
            if (errors && errors.length > 0) {
                this.errors = errors;
                return callBack(new Error(errors[0]));
            }
        } else {
            callBack();
        }
    },

    /**
     *
     * @param rules
     * @param value
     * @returns {*}
     */
    valid(rules, value) {
        let data = {
            name: value
        };
        let dataRules = {
            name: rules
        };

        let v = Validator.make(data, dataRules);

        if (v.fails()) {
            let errors = v.getError('name');
            if (errors && errors.length > 0) {
                this.errors = errors;
                return new Error(errors[0]);
            }
        } else {
            return true;
        }
    },

    /**
     *
     * @param data
     * @param dataRules
     * @returns {Validator}
     */
    make(data, dataRules) {
        return Validator.make(data, dataRules);
    }
};