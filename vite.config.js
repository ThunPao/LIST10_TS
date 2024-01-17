import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import autoPreprocess from "svelte-preprocess";
import typescript from "@rollup/plugin-typescript";
const production = process.env.NODE_ENV === "production";
export default defineConfig({
    plugins: [
        laravel({
            input: "resources/js/app.js",
            refresh: true,
        }),
        svelte({
            preprocess: autoPreprocess(),
        }),
        typescript({ sourceMap: !production }),
    ],
});
