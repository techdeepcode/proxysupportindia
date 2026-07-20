// ============================================================
// Knowledge Base depth builder — adds detailed sections, unique
// per-page FAQs and keywords on top of each KB entry's direct
// answer. Structured for SEO, social and agentic/AI indexing.
// ============================================================
import type { KBEntry } from '@data/knowledgeBase';

export interface KbExtras {
  keywords: string[];
  depth: { h2: string; paras: string[]; bullets?: string[] }[];
  faqs: { q: string; a: string }[];
}

const catDepth: Record<string, { h2: string; paras: string[] }[]> = {
  'Proxy Interview Support': [
    { h2: 'How it works in practice', paras: [
      'You share your job description, technology and interview date on WhatsApp. We match you with an in-house engineer who works in your exact stack and knows what this kind of interview asks. They map the job description to the likely rounds — recruiter screen, coding, system design, HR/behavioral, client and final — and build a focused plan for your level and target market.',
      'Before the interview you run mock rounds with real feedback; through the process you get real-time, round-wise support. The aim is simple: you understand every question and answer with confidence, without cramming an entire stack alone.',
    ] },
    { h2: 'What good preparation looks like', paras: [
      'Strong candidates do not memorize answers — they rehearse thinking out loud, handling trade-offs and edge cases, and communicating clearly under time pressure. That is exactly what our support drills, tuned to how your specific company and market interview.',
    ] },
  ],
  'Proxy Job Support': [
    { h2: 'How it works in practice', paras: [
      'You share your project stack and the issue you are facing. We match you with an engineer who ships that kind of work daily, aligned to your working hours — including US time zones and night shifts from India. They help you in real time: understanding the codebase, delivering sprint tickets, debugging, handling production issues and preparing for client calls.',
      'You stay in control and build real understanding as you deliver, so the support makes you stronger rather than dependent.',
    ] },
    { h2: 'Why real-time support matters', paras: [
      'In a new role the cost of being stuck is high — lost hours, missed deadlines and eroding trust. Real-time help turns hours of being blocked into minutes, so your velocity and quality hold while you ramp.',
    ] },
  ],
  'Profile Services': [
    { h2: 'How it works in practice', paras: [
      'We start from your real experience and target roles, then engineer the profile (ATS-ready CV, keyword- and JD-aligned LinkedIn, a coherent project story) so it gets found and shortlisted. From there, consistent marketing and pipeline management turn visibility into recruiter calls and scheduled interviews.',
      'Everything is honest — we position and strengthen what you have genuinely done; we never fabricate experience.',
    ] },
    { h2: 'The visibility-plus-fit principle', paras: [
      'Recruiter calls come from two things working together: being found (search ranking, keywords, outreach) and matching what the role screens for (JD-fit). Break either link and the phone stays quiet; fix both and relevant calls become far more likely.',
    ] },
  ],
  'Process': [
    { h2: 'How the pieces connect', paras: [
      'The IT career journey runs in stages: engineer the profile, market it for recruiter calls, manage the pipeline to schedule interviews, prepare for those interviews with proxy interview support, accept and prepare for the offer, then deliver with proxy job support. Momentum is usually lost in the gaps between these steps.',
      'Handled as one journey by a single team, nothing stalls — which is exactly what end-to-end support is designed to prevent.',
    ] },
  ],
  'India-to-Global': [
    { h2: 'How it works from India', paras: [
      'Targeting a global role from India comes down to fit and execution across a time-zone gap: a profile tuned to that market’s recruiters, interview preparation matched to its hiring style, and reliable job support aligned to its working hours after you join.',
      'We align to your target market’s clock — including early-morning, late-night and night-shift coverage — so location is a detail, not a dealbreaker.',
    ] },
  ],
};

export function buildKbExtras(entry: KBEntry): KbExtras {
  const t = entry.title.replace(/\?$/, '').replace(/^What Is /, '').trim();
  const keywords = [
    t.toLowerCase(), 'proxy support india', entry.category.toLowerCase(),
    'proxy interview support', 'proxy job support',
  ];
  const depth = catDepth[entry.category] ?? [];
  const faqs = entry.faqs ?? [
    { q: entry.title.endsWith('?') ? entry.title : `${entry.title}?`, a: entry.quickAnswer },
    { q: `Who needs ${t.toLowerCase()}?`, a: `Anyone facing the situation this page describes — see “What it includes” above. Share your details on WhatsApp and we will tell you honestly if it fits.` },
    { q: `How do I start with ${t.toLowerCase()}?`, a: 'Tap any WhatsApp button and send your JD, project or target market. We reply fast and match you with an in-house stack expert — we have operated since 2011, with no middlemen.' },
    { q: 'Which markets and time zones do you cover?', a: 'USA (center market), Canada, UK, Europe, Australia, Singapore, Japan, New Zealand, the Gulf and India — aligned to your time zone, including night shifts from India.' },
    { q: 'Do you impersonate candidates?', a: '“Proxy” here means hands-on, real-time support. We prepare and support you — we never impersonate you or fabricate experience.' },
  ];
  return { keywords, depth, faqs };
}
