# form-validator

* use (element-ui)

    ```
    import validator from 'el-form-validator';
    
    rules: {
        column: {
            rules: 'required|min:11|max:11',
            validator: validator.verification,
            trigger: 'blur'
        }
    }
    ```
    
* or
    
    ```
    import validator from 'el-form-validator';
    
    validator.valid(rules, value)
    
    validator.valid('required|max:10|min:6', '123456') return true
    
    validator.valid('required|max:10|min:6', '12') return error message
    ```
    
    
* make
    ```$js
    let data = [
        name: ''
        ...
    ]
    
    let rules = [
        name: 'required|max:10|min:6'
        ...
    ]
    
    validator.make(data, rules) return Validator
    ```
    
* validator rule
    
    [laravel 5.6#validation](https://learnku.com/docs/laravel/5.6/validation/1372#c58a91)