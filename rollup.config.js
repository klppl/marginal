import { defineConfig } from 'rollup';
import postcss from 'rollup-plugin-postcss';
import atImport from 'postcss-import';
import postcssPresetEnv from 'postcss-preset-env';
import { resolve } from "path";
import livereload from 'rollup-plugin-livereload';

const isProduction = process.env.BUILD === "production";

export default defineConfig({
    input: 'assets/js/index.js',
    output: {
        dir: "assets/built",
        sourcemap: !isProduction,
        format: 'iife',
    },
    onwarn(warning, warn) {
        if (warning.code === 'EMPTY_BUNDLE') return;
        warn(warning);
    },
    plugins: [
        postcss({
            extract: true,
            sourceMap: !isProduction,
            plugins: [
                atImport(),
                postcssPresetEnv({})
            ],
            minimize: true,
        }),
        !isProduction && livereload({
            watch: resolve('.'),
            extraExts: ['hbs'],
            exclusions: [resolve('node_modules')]
        }),
    ]
})
