import { defineConfig } from  "vite";
import { svelte } from  "@sveltejs/vite-plugin-svelte";
import WindiCSS from  "vite-plugin-windicss";
export default {
plugins: [WindiCSS(), svelte()]
};