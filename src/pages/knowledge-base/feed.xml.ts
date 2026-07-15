import { rss } from '../../lib/rss';
import { knowledgeBase } from '@data/knowledgeBase';
export const GET = () =>
  rss({
    title: 'Proxy Support India — Knowledge Base',
    description: 'Answers about proxy interview support, proxy job support and profile services.',
    feedPath: '/knowledge-base/feed.xml',
    items: knowledgeBase.map((k) => ({ title: k.title, path: `/knowledge-base/${k.slug}`, description: k.description })),
  });
