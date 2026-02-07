import { defineConfig } from 'rollup';
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
    },
    plugins: [
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
