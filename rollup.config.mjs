// Rollup Plugins
import url from '@rollup/plugin-url'
import svgr from '@svgr/rollup'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

import postcss from 'rollup-plugin-postcss'
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'

// Package File
import pkg from './package.json' assert {type: 'json'}

export default {
    input: 'src/index.tsx',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            exports: 'named',
            sourcemap: true
        },
        {
            file: pkg.module,
            format: 'es',
            exports: 'named',
            sourcemap: true
        }
    ],
    plugins: [
        url(),
        svgr(),
        resolve(),
        commonjs(),

        postcss({
            modules: true
        }),
        typescript({
            tsconfig: './tsconfig.json'
        }),
        terser()
    ]
}