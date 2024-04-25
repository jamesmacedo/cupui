import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default {
	input: 'src/Cupui.ts',
	output: [
        {
            file: 'dist/cupui.cjs',
            format: 'cjs'
        },
        {
            file: 'dist/cupui.mjs',
            format: 'es'
        },
    ],
    plugins: [commonjs(),typescript()]
};
