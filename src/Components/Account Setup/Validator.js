const validators = {
    name: {
        rules: [
            {
                test: /^[a-z0-9_]+$/,
                message: 'Name must contain only alphabets-numeric characters',
            },
            {
                test: (value) => {
                    return value.length > 4;
                },
                message : 'Username must be longer than four characters'
            },
        ],

        errors: [],
        valid: false,
        state: '',
    },

};

export default validators;