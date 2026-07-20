// ============================================================
// Central site configuration for ProxySupportIndia.com
// EDIT THIS FILE to go live: set the real WhatsApp number + email.
// Everything (CTAs, header, footer, schema) reads from here.
// ============================================================

export const site = {
  name: 'Proxy Support India',
  domain: 'proxysupportindia.com',
  url: 'https://proxysupportindia.com',
  tagline: 'End-to-End IT Career Proxy Support',
  since: 2011, // operating in the proxy IT support world since 2011
  positioning:
    'Proxy Support India provides end-to-end IT career proxy support — starting with proxy interview support and proxy job support, then profile engineering, profile marketing, profile managing, recruiter call generation, and complete job support across USA, Canada, UK, Europe, Australia, Singapore, Japan, New Zealand, Gulf, and India.',
  // ---- CONTACT: replace these placeholders to go live ----
  whatsapp: '919653959626', // international format, no "+" or spaces
  phone: '+919653959626',   // shown on the Call button (E.164 format)
  email: 'hello@proxysupportindia.com',
  // --------------------------------------------------------
  locale: 'en_US',
  lang: 'en',
  author: 'Proxy Support India',
  publisher: 'Proxy Support India',
  defaultOgImage: '/og/default-og.png',
  themeColor: '#2E2159',
};

// ============================================================
// Social profiles — the ONE place to paste your social URLs.
// Leave any blank ('') and it is automatically hidden everywhere
// (header top strip, footer, and schema sameAs). Fill in the ones
// you have; order below = display order of the icons.
// ============================================================
export const social = {
  website: 'https://proxysupportindia.com',
  whatsapp: '',  // channel/community link; blank falls back to wa.me/<number>
  linkedin: 'https://www.linkedin.com/company/proxy-support-india/',
  instagram: 'https://www.instagram.com/proxy_support_india/',
  facebook: 'https://www.facebook.com/proxysupportindia',
  youtube: '',   // e.g. https://www.youtube.com/@proxysupportindia
  twitter: '',   // X — e.g. https://x.com/proxysupportind
  telegram: '',  // e.g. https://t.me/proxysupportindia
  threads: '',   // e.g. https://www.threads.net/@proxysupportindia
  tiktok: '',    // e.g. https://www.tiktok.com/@proxysupportindia
  pinterest: '', // e.g. https://www.pinterest.com/proxysupportindia
  reddit: '',    // e.g. https://www.reddit.com/user/proxysupportindia
  medium: '',    // e.g. https://medium.com/@proxysupportindia
  quora: '',     // e.g. https://www.quora.com/profile/Proxy-Support-India
  github: '',    // e.g. https://github.com/proxysupportindia
};

// Ordered list of social platforms to render as icons (blank URLs skipped).
// `key` matches the icon map in SocialLinks.astro; `label` is the aria-label.
export const socialOrder: { key: keyof typeof social; label: string }[] = [
  { key: 'whatsapp', label: 'WhatsApp' },
  { key: 'linkedin', label: 'LinkedIn' },
  { key: 'instagram', label: 'Instagram' },
  { key: 'facebook', label: 'Facebook' },
  { key: 'youtube', label: 'YouTube' },
  { key: 'twitter', label: 'X (Twitter)' },
  { key: 'telegram', label: 'Telegram' },
  { key: 'threads', label: 'Threads' },
  { key: 'tiktok', label: 'TikTok' },
  { key: 'pinterest', label: 'Pinterest' },
  { key: 'reddit', label: 'Reddit' },
  { key: 'medium', label: 'Medium' },
  { key: 'quora', label: 'Quora' },
  { key: 'github', label: 'GitHub' },
];

// Resolved [key, url, label] tuples for every social link that has a URL.
// WhatsApp falls back to the wa.me deep-link when no channel URL is set.
export function socialLinks(): { key: string; url: string; label: string }[] {
  return socialOrder
    .map(({ key, label }) => {
      let url = social[key];
      if (key === 'whatsapp' && !url) url = `https://wa.me/${site.whatsapp}`;
      return { key, url, label };
    })
    .filter((s) => Boolean(s.url));
}

export function sameAs(): string[] {
  const wa = social.whatsapp || `https://wa.me/${site.whatsapp}`;
  return [
    social.website, wa, social.linkedin, social.instagram, social.facebook,
    social.youtube, social.twitter, social.telegram, social.threads, social.tiktok,
    social.pinterest, social.reddit, social.medium, social.quora, social.github,
  ].filter(Boolean);
}

// Per-page-type OG image map. Falls back to default when unset.
// Generate the PNGs later; paths + config are ready now.
export const ogImages: Record<string, string> = {
  default: '/og/default-og.png',
  'proxy-interview-support': '/og/proxy-interview-support-og.png',
  'proxy-job-support': '/og/proxy-job-support-og.png',
  'profile-engineering': '/og/profile-engineering-og.png',
  'profile-marketing': '/og/profile-marketing-og.png',
  'end-to-end-it-career-proxy-support': '/og/end-to-end-proxy-support-og.png',
  'ai-ml': '/og/ai-ml-proxy-support-og.png',
  devops: '/og/devops-proxy-support-og.png',
  workday: '/og/workday-proxy-support-og.png',
};
// Every page shares the homepage OG image for consistent link-share previews.
// (Per-page OG art can be reintroduced later by returning ogImages[key] once
// real branded PNGs exist — the current per-key entries are placeholder stubs.)
export const ogImageFor = (_key?: string) => ogImages.default;

// Impact metrics shown in hero metric panels.
// Actual, verifiable figures backed by our internal records/database.
export const stats = {
  interviews: '4,000+',   // interviews supported
  jobSupport: '2,500+',   // proxy job-support projects
  profiles: '3,500+',     // profiles engineered & marketed
  higherRoles: '900+',    // candidates supported toward higher-paying roles
};

// Pre-filled WhatsApp message helper — every CTA opens chat with context.
export function waLink(message: string): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}
// Simple "Talk on WhatsApp" link (light greeting, no service-specific script).
export const waTalk = waLink('Hi Proxy Support India, I would like to talk about proxy support.');
// Click-to-call link for the phone button.
export const telLink = `tel:${site.phone}`;

// The canonical CTA set used across the site.
export const ctas = {
  shareJD: {
    label: 'Share Interview JD on WhatsApp',
    message:
      "Hi Proxy Support India, I have an interview coming up and want proxy interview support. Here's my JD / technology / target market:",
  },
  sendProjectIssue: {
    label: 'Send Project Issue',
    message:
      'Hi Proxy Support India, I joined a new job and need proxy job support for my day-to-day project work. My issue is:',
  },
  endToEndPlan: {
    label: 'Get End-to-End Proxy Support Plan',
    message:
      'Hi Proxy Support India, I want an end-to-end IT career proxy support plan — profile to interview to job. My details:',
  },
  moreCalls: {
    label: 'Get More Recruiter Calls',
    message:
      'Hi Proxy Support India, my profile is not getting enough recruiter calls. I want profile marketing + more recruiter calls. My stack + target market:',
  },
  buildProfile: {
    label: 'Build My Profile',
    message:
      'Hi Proxy Support India, I want profile engineering — an ATS + JD-aligned profile for my target market. My current role + target:',
  },
  startMarketing: {
    label: 'Start Profile Marketing',
    message:
      'Hi Proxy Support India, I want to start profile marketing / recruiter outreach for my profile. My stack + target market:',
  },
  manageSearch: {
    label: 'Manage My Job Search',
    message:
      'Hi Proxy Support India, I want profile managing — full job-search execution management. My details:',
  },
} as const;

export type CtaKey = keyof typeof ctas;

// Primary navigation (matches CLAUDE.md spec).
export const nav = {
  main: [
    { label: 'Home', href: '/' },
    { label: 'Proxy Interview Support', href: '/proxy-interview-support' },
    { label: 'Proxy Job Support', href: '/proxy-job-support' },
    {
      label: 'Profile Services',
      href: '/services',
      children: [
        { label: 'Profile Engineering', href: '/profile-engineering' },
        { label: 'Profile Marketing', href: '/profile-marketing' },
        { label: 'Profile Managing', href: '/profile-managing' },
        { label: 'Get More Recruiter Calls', href: '/get-more-recruiter-calls' },
        { label: 'End-to-End IT Career Proxy Support', href: '/end-to-end-it-career-proxy-support' },
      ],
    },
    { label: 'Technologies', href: '/technologies' },
    { label: 'Locations', href: '/countries' },
    { label: 'Real Interview Questions', href: '/real-interview-questions' },
    { label: 'Blog', href: '/blog' },
    { label: 'Knowledge Base', href: '/knowledge-base' },
    { label: 'Contact', href: '/contact' },
  ],
};

// The top urgency bar copy.
export const urgencyBar =
  '24×7 Proxy Interview Support · Proxy Job Support · Profile Engineering | USA · Canada · UK · Europe · Australia · Singapore · Japan · New Zealand · Gulf · India';

// Trust boundary line reused in schema + footer.
export const trustLine =
  'Proxy Support India is a paid IT career support and technical support service. We are not an employer, recruiter or job-placement agency, and our fees are for agreed support services only — we do not sell jobs or vacancies and do not guarantee employment, interviews, recruiter calls, selection, job offers or salary outcomes. Hiring decisions rest solely with employers. We prepare, guide and support candidates in real time — we never impersonate candidates or fabricate experience.';
