import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
export default {
    input: 'src/main.ts',
    output: {
        banner: '#!/usr/bin/env node',
        name: 'mmc',
        file: 'bin/mmc.js',
        format: 'umd',
    },
    external: [
        'commander',
        'inquirer',
        'ora',
        'chalk',
        'child_process',
        'fs',
        'path',
        'events',
    ],
    plugins: [resolve(), commonjs(), json(), typescript(), terser()],
}
