import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';

let babelOptions = {
	exclude: 'node_modules/**'
};

export default {
	input: 'src/main.js',
	output: {
		exports: 'auto',
		format: 'cjs',
		file: 'dist/index.js'
	},
	plugins: [
		babel(babelOptions),
		terser({ compress: { drop_console: true } }),
		resolve()
	]
};