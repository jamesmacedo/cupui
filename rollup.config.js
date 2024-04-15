import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default {
	input: 'src/Factory.ts',
	output: [
        {
            file: 'dist/factory.cjs.js',
            format: 'cjs'
        },
        {
            file: 'dist/factory.es.js',
            format: 'es'
        },
    ],
    plugins: [commonjs(),typescript()]
};
