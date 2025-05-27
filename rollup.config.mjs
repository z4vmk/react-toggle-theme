// Rollup Plugins
import url from '@rollup/plugin-url'
import svgr from '@svgr/rollup'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

import terser from '@rollup/plugin-terser'
import postcss from 'rollup-plugin-postcss'
import typescript from '@rollup/plugin-typescript'
import PeerDepsExternal from 'rollup-plugin-peer-deps-external'

// Package File
import pkg from './package.json' with {type: 'json'}

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

        terser(),
        postcss({
            modules: true
        }),
        typescript({
            tsconfig: './tsconfig.json'
        }),
        PeerDepsExternal()
    ]
}