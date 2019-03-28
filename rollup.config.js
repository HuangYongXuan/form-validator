import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import {uglify} from 'rollup-plugin-uglify';

let babelOptions = {
    presets: [
        ['es2015', {'modules': false}]
    ],
    exclude: 'node_modules/**',
    // plugins: ['external-helpers'],
    // externalHelpers: true
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
    entry: 'src/verify.js',
    format: 'cjs',
    dest: 'dist/index.js',
    plugins: [babel(babelOptions), resolve(), uglify(uglifyConfig)]
};