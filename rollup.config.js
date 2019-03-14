import babel from 'rollup-plugin-babel'

var babelOptions = {
    presets: [
        ["es2015", {"modules": false}]
    ],
    exclude: 'node_modules/**'
}

export default {
    entry: 'src/verify.js',
    format: 'cjs',
    dest: 'dist/index.js',
    plugins: [ babel(babelOptions) ]
}