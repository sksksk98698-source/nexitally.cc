import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// Get the site URL from environment variables, or use the default value if not set
const siteUrl = import.meta.env.PUBLIC_SITE_URL || 'https://nexitally.cc';

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  base: '/',
  trailingSlash: 'never',
  envPrefix: 'PUBLIC_',
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  },

  server: {
    port: 5200,
  },

  integrations: [
    mdx(),
    sitemap({
      filter: (page) => {
        return (
          !page.includes('/signin') &&
          !page.includes('/signup') &&
          !page.includes('/sign-in') &&
          !page.includes('/sign-up') &&
          !page.includes('/elements') &&
          !page.includes('/404') &&
          !page.includes('/blog/page/1')
        );
      },
    }),
  ],
});
