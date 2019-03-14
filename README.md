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
    
* validator rule
    
    [laravel 5.6#validation](https://learnku.com/docs/laravel/5.6/validation/1372#c58a91)