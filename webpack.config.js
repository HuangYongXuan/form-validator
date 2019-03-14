const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/verify.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    }
};