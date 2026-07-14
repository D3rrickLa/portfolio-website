// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://D3rrickLa.github.io', 
  base: '/portfolio-website',
  vite: {
    plugins: [tailwindcss()]
  },
  image: {
    domains: ["images.unsplash.com"]
  }
});