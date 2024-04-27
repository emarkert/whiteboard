import { defineConfig } from 'astro/config';
import db from "@astrojs/db";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [db()],
  adapter: netlify()
});