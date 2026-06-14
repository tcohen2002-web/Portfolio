import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
export default defineConfig({
  site: 'https://tal-cohen.me',

  integrations: [
    mdx(),
    tailwind({ applyBaseStyles: false }),
  ],

  build: {
    inlineStylesheets: 'auto',
  },

  vite: {
    build: {
      cssCodeSplit: true,
    },
  },
});