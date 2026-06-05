import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tal-cohen.me',
  integrations: [
    mdx(),
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssCodeSplit: true,
    },
  },
  experimental: {
    clientPrerender: true,
  },
});
