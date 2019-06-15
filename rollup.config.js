import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import {uglify} from 'rollup-plugin-uglify';

let babelOptions = {
    exclude: 'node_modules/**'
};

let uglifyConfig = {
    compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
    }
};

export default {
    entry: 'src/main.js',
    format: 'cjs',
    dest: 'dist/index.js',
    plugins: [babel(babelOptions), resolve(), uglify(uglifyConfig)]
};