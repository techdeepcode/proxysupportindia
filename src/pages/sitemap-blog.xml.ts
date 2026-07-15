import { urlset, blogUrls } from '../lib/sitemap';
export const GET = () => urlset(blogUrls());
