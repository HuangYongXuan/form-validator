# form-validator

### use (element-ui)

````javascript
import validator from 'el-form-validator';

export default {
    data () {
        return {
            rules: {
                column: {
                    rules: 'required|min:11|max:11',
                    validator: validator.verification,
                    trigger: 'blur'
                }            
            }
        }
    }
}
````
    
### or
    
````javascript
import validator from 'el-form-validator';

validator.valid(rules, value)

validator.valid('required|max:10|min:6', '123456'); // return true

validator.valid('required|max:10|min:6', '12'); // return error message
````

### make

````javascript
let data = {
    name: '',
    ...
}

let rules = {
    name: 'required|max:10|min:6',
    ...
}
// return Validator
validator.make(data, rules);
````

### validator rule
    
    [laravel 5.6#validation](https://learnku.com/docs/laravel/5.6/validation/1372#c58a91)