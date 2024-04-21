import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default {
	input: 'src/Cupui.ts',
	output: [
        {
            file: 'dist/cupui.cjs.js',
            format: 'cjs'
        },
        {
            file: 'dist/cupui.es.js',
            format: 'es'
        },
    ],
    plugins: [commonjs(),typescript()]
};
