import { rss } from '../../lib/rss';
import { riqTopics } from '@data/realInterviewQuestions';
export const GET = () =>
  rss({
    title: 'Proxy Support India — Real Interview Questions',
    description: 'Real-style interview questions by technology with strong answers and follow-ups.',
    feedPath: '/real-interview-questions/feed.xml',
    items: riqTopics.map((t) => ({ title: t.title, path: `/real-interview-questions/${t.slug}`, description: t.description })),
  });
