export class Validator {
    constructor(data, rules, customMessages = {}, customNames = {}, messageCallback = undefined) {
    }

    static make: (data: Object, rules: Object | object[], customMessages?: Object, customNames?: Object, callback?: (error?: Error) => void) => Validator
    fails: () => boolean
    extend: (ruleName: string, callback: (name: string, value: any, params: any) => boolean, customMessage: string) => void
    valid: () => any[]
    invalid: () => any[]
    getErrorMsg: (name: string, rule: string) => string
    getMessage: (name: string, rule: string) => string | Object
    getCustomMessage: (name: string, rule: string) => string | Object
    validate: (name: string, rule: string) => void
    getError: (name: string) => Object
    getErrors: () => Object[]
}

export class StaticValidator {
    make: (data: Object, rules: Object | object[], customMessages?: Object, customNames?: Object, callback?: (error?: Error) => void) => Validator
    valid: (rules: Object | object[], value: string, customMessages?: Object, customNames?: Object, callback?: (error?: Error) => void) => Error | boolean
    verification: (option: VerificationObject, value: string, callback?: (error?: Error) => void) => any
}

export interface VerificationObject {
    rules: string | Object,
    customMessages?: Object,
    customNames?: Object,
    messages?: string
}

export default new StaticValidator()