import { defineConfig } from 'rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
import atImport from 'postcss-import';
import postcssPresetEnv from 'postcss-preset-env';
import { resolve } from "path";
import livereload from 'rollup-plugin-livereload';

export default defineConfig({
    input: 'assets/js/index.js',
    output: {
        dir: "assets/built",
        sourcemap: true,
        format: 'iife',
        plugins: [terser()]
    },
    plugins: [
        commonjs(),
        nodeResolve(),
        postcss({
            extract: true,
            sourceMap: true,
            plugins: [
                atImport(),
                postcssPresetEnv({})
            ],
            minimize: true,
        }),
        process.env.BUILD !== "production" && livereload({
            watch: resolve('.'),
            extraExts: ['hbs'],
            exclusions: [resolve('node_modules')]
        }),
    ]
})
