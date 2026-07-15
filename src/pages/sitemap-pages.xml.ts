import { urlset, corePagesUrls } from '../lib/sitemap';
export const GET = () => urlset(corePagesUrls());
