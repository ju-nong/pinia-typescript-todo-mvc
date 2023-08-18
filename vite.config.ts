import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

import Components from "unplugin-vue-components/vite";

const resolveAlias = Object.fromEntries(
    Object.entries({
        "@assets": "./src/assets",
        "@components": "./src/components",
        "@stores": "./src/stores",
    }).map(([key, value]) => [key, path.resolve(__dirname, value)]),
);

export default defineConfig({
    plugins: [
        vue(),
        Components({
            dts: true,
        }),
    ],
    resolve: {
        alias: resolveAlias,
    },
});
