import { rss } from '../lib/rss';
import { blogIndex } from '@data/blogs';
export const GET = () =>
  rss({
    title: 'Proxy Support India — Blog',
    description: 'Guides on proxy interview support, proxy job support, India-to-global careers and profile marketing.',
    feedPath: '/rss.xml',
    items: blogIndex.map((b) => ({ title: b.title, path: `/blog/${b.slug}`, description: b.description })),
  });
