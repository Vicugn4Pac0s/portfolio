// @ts-check
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    resolve: {
      alias: {
        '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
        '@scripts': fileURLToPath(new URL('./src/scripts', import.meta.url)),
      },
    },
  },
});
