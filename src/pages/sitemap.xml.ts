// /sitemap.xml — conventional entry point. Serves the same sitemap index
// as /sitemap-index.xml so search engines/tools that probe the default path
// don't 404.
import { sitemapIndex } from '../lib/sitemap';
export const GET = () => sitemapIndex();
