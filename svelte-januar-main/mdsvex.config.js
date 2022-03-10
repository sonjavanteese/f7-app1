import { defineMDSveXConfig as defineConfig } from "mdsvex";

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],
  layout: "./src/lib/components/MdLayout.svelte",
  smartypants: {
    dashes: "oldschool",
    quotes: true
  },

  remarkPlugins: [],
  rehypePlugins: [],
});

export default config;
