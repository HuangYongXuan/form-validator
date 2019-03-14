# form-validator

* use (element-ui)

    ```
    rules: {
        column: {
            rules: 'required|min:11|max:11',
            validator: validator.verification,
            trigger: 'blur'
        }
    }
    ```