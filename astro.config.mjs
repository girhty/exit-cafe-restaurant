import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/exit-cafe-restaurant/',
  output: 'static',
  integrations: [tailwind()],
  site: 'https://exit-cafe-restaurant.netlify.app',
});