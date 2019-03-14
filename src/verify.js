import Validator from './Validator/Validator';

export default {
    verification({rules}, value, callBack) {
        if (rules === undefined) {
            callBack(new Error('缺少验证规则'));
        }
        let data = {
            name: value
        };
        let dataRules = {
            name: rules,
        };
        let v = Validator.make(data, dataRules);

        if (v.fails()) {
            let errors = v.getError('name');
            if (errors && errors.length > 0) {
                return callBack(new Error(errors[0]));
            }
        } else {
            callBack();
        }
    }
}