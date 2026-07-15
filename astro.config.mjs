// @ts-check
import { defineConfig } from 'astro/config';

// ProxySupportIndia.com — static-first SEO architecture, Cloudflare Pages ready.
// Sitemaps are custom endpoints (src/pages/sitemap-*.xml.ts) for per-cluster
// control (services, blog, KB, interview questions, technologies, locations).
export default defineConfig({
  site: 'https://proxysupportindia.com',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
