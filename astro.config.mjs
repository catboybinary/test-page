// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://catboybinary.github.io/test-page',
  base: 'test-page',
  integrations: [preact()],
});