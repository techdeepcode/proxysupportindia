// ============================================================
// Blog cluster. `body` sections are added per post; the hub and
// SEO read title/description/category. Hook-based, not academic.
// ============================================================
export interface BlogSection { h2: string; paras: string[]; bullets?: string[]; html?: string; }
export interface BlogPost {
  slug: string;
  title: string;        // SEO title
  h1: string;
  description: string;
  category: 'Proxy Support' | 'India-to-Global' | 'Technology' | 'Profile & Recruiter' | 'Career Scenarios';
  readMins: number;
  updated: string;      // e.g. "Jul 2026"
  pain: string;         // fear/pain hook
  urgency: string;      // urgency line
  dream: string;        // outcome line
  body: BlogSection[];
  faqs: { q: string; a: string }[];
  relatedSlugs?: string[];
  // Optional fields used by bespoke (fully-authored) posts. When present,
  // blog/[slug].astro renders the rich body + per-post dates + links.
  keywords?: string[];
  related?: { label: string; href: string }[];
  publishedTime?: string;   // ISO date, e.g. "2026-11-18"
  modifiedTime?: string;    // ISO date
}

// Bespoke, fully-authored posts (rich HTML bodies). These override the
// generic builder in blog/[slug].astro when a slug matches.
import { blogPosts2026 } from './blogPosts';
export const blogs: BlogPost[] = [...blogPosts2026];

// Lightweight index used by the hub before bodies are attached.
export interface BlogStub { slug: string; title: string; description: string; category: BlogPost['category']; readMins: number; updated: string; }
export const blogIndex: BlogStub[] = [
  { slug: 'proxy-interview-support-trends', title: 'Proxy Interview Support in 2026: What’s Changing and Why Demand Is Rising', description: 'How proxy interview support is evolving in 2026 — AI-era rounds, remote loops, and what candidates should know.', category: 'Proxy Support', readMins: 8, updated: 'Jul 2026' },
  { slug: 'proxy-job-support-for-it-professionals', title: 'Proxy Job Support for IT Professionals: A Practical 2026 Guide', description: 'What proxy job support really is, who needs it, and how it helps you deliver day-to-day project work.', category: 'Proxy Support', readMins: 9, updated: 'Jul 2026' },
  { slug: 'end-to-end-it-career-proxy-support-guide', title: 'End-to-End IT Career Proxy Support: The Complete 2026 Guide', description: 'From profile to interview to on-the-job delivery — how end-to-end proxy support closes every gap in your search.', category: 'Proxy Support', readMins: 10, updated: 'Jul 2026' },
  { slug: 'how-to-get-usa-it-interviews-from-india', title: 'How to Get USA IT Interviews from India in 2026', description: 'A realistic playbook for landing US IT interviews from India — profile, channels, and interview prep.', category: 'India-to-Global', readMins: 9, updated: 'Jul 2026' },
  { slug: 'how-to-get-canada-it-interviews-from-india', title: 'How to Get Canada IT Interviews from India in 2026', description: 'Landing Canadian IT interviews from India: PR-aligned planning, channels, and preparation.', category: 'India-to-Global', readMins: 8, updated: 'Jul 2026' },
  { slug: 'how-to-get-uk-it-interviews-from-india', title: 'How to Get UK IT Interviews from India in 2026', description: 'Sponsor-licence roles, competency interviews, and how to get UK IT interviews from India.', category: 'India-to-Global', readMins: 8, updated: 'Jul 2026' },
  { slug: 'how-to-get-europe-it-interviews-from-india', title: 'How to Get Europe IT Interviews from India in 2026', description: 'EU Blue Card, English-first hubs, and a plan to land European IT interviews from India.', category: 'India-to-Global', readMins: 8, updated: 'Jul 2026' },
  { slug: 'how-to-get-australia-it-interviews-from-india', title: 'How to Get Australia IT Interviews from India in 2026', description: 'Skills-shortage roles, sponsorship, and getting Australian IT interviews from India.', category: 'India-to-Global', readMins: 8, updated: 'Jul 2026' },
  { slug: 'how-to-get-singapore-it-interviews-from-india', title: 'How to Get Singapore IT Interviews from India in 2026', description: 'Fast APAC loops, EP roles, and landing Singapore IT interviews from India.', category: 'India-to-Global', readMins: 7, updated: 'Jul 2026' },
  { slug: 'how-to-get-japan-it-interviews-from-india', title: 'How to Get Japan IT Interviews from India in 2026', description: 'English-first global teams, work visas, and getting Japan IT interviews from India.', category: 'India-to-Global', readMins: 7, updated: 'Jul 2026' },
  { slug: 'how-to-get-new-zealand-it-interviews-from-india', title: 'How to Get New Zealand IT Interviews from India in 2026', description: 'Accredited employers and a plan to land NZ IT interviews from India.', category: 'India-to-Global', readMins: 7, updated: 'Jul 2026' },
  { slug: 'best-technologies-for-usa-it-jobs', title: 'Best Technologies for USA IT Jobs in 2026', description: 'The highest-demand US tech stacks in 2026 — AI/ML, cloud, DevOps and more — and how to position for them.', category: 'Technology', readMins: 10, updated: 'Jul 2026' },
  { slug: 'ai-ml-proxy-interview-support-guide', title: 'AI/ML Proxy Interview Support: A 2026 Preparation Guide', description: 'What AI/ML interviews test in 2026 and how proxy interview support helps you clear them.', category: 'Technology', readMins: 9, updated: 'Jul 2026' },
  { slug: 'genai-proxy-interview-support-guide', title: 'GenAI Proxy Interview Support: RAG, LLMs and Evals in 2026', description: 'GenAI interview topics in 2026 — RAG, LLM apps, evaluation — and how to prepare with proxy support.', category: 'Technology', readMins: 9, updated: 'Jul 2026' },
  { slug: 'mlops-proxy-job-support-guide', title: 'MLOps Proxy Job Support: Shipping and Monitoring Models in 2026', description: 'What MLOps roles demand day to day and how proxy job support keeps you delivering.', category: 'Technology', readMins: 8, updated: 'Jul 2026' },
  { slug: 'devops-cloud-proxy-job-support-guide', title: 'DevOps & Cloud Proxy Job Support: A 2026 Field Guide', description: 'Handling pipelines, IaC and incidents in a new DevOps/cloud role with proxy job support.', category: 'Technology', readMins: 9, updated: 'Jul 2026' },
  { slug: 'cloud-security-sre-proxy-support-guide', title: 'Cloud Security & SRE Proxy Support in 2026', description: 'Reliability, security posture and on-call — and how proxy support helps in these high-pressure roles.', category: 'Technology', readMins: 8, updated: 'Jul 2026' },
  { slug: 'data-engineering-proxy-job-support-guide', title: 'Data Engineering Proxy Job Support: Pipelines That Deliver in 2026', description: 'Building and fixing data pipelines in a new role with real-time proxy job support.', category: 'Technology', readMins: 8, updated: 'Jul 2026' },
  { slug: 'workday-proxy-job-support-guide', title: 'Workday Proxy Job Support: HCM, Integrations and Reporting in 2026', description: 'Delivering Workday configuration, integrations and reports with proxy job support.', category: 'Technology', readMins: 8, updated: 'Jul 2026' },
  { slug: 'uipath-rpa-proxy-job-support-guide', title: 'UiPath & RPA Proxy Job Support: Bots in Production in 2026', description: 'REFramework, Orchestrator and production bots — delivered with proxy job support.', category: 'Technology', readMins: 8, updated: 'Jul 2026' },
  { slug: 'profile-engineering-for-it-candidates', title: 'Profile Engineering for IT Candidates: Get Found in 2026', description: 'How to engineer an ATS-ready, JD-aligned profile that recruiters actually find.', category: 'Profile & Recruiter', readMins: 8, updated: 'Jul 2026' },
  { slug: 'profile-marketing-for-it-candidates', title: 'Profile Marketing for IT Candidates: More Calls in 2026', description: 'Turning a silent profile into recruiter calls with consistent, targeted marketing.', category: 'Profile & Recruiter', readMins: 8, updated: 'Jul 2026' },
  { slug: 'profile-managing-for-global-it-jobs', title: 'Profile Managing for Global IT Jobs in 2026', description: 'Running a multi-market job search without dropping the ball, with profile managing.', category: 'Profile & Recruiter', readMins: 8, updated: 'Jul 2026' },
  { slug: 'jd-wise-cv-strategy-for-recruiter-calls', title: 'JD-Wise CV Strategy for More Recruiter Calls in 2026', description: 'Why one CV isn’t enough and how JD-wise versioning drives more recruiter calls.', category: 'Profile & Recruiter', readMins: 7, updated: 'Jul 2026' },
  { slug: 'recruiter-calls-not-coming-what-to-fix', title: 'Recruiter Calls Not Coming? What to Fix First in 2026', description: 'A diagnostic checklist for a silent profile — and the fixes that get the phone ringing.', category: 'Profile & Recruiter', readMins: 7, updated: 'Jul 2026' },
  { slug: 'interview-scheduled-what-to-do-next', title: 'Interview Scheduled? Do These 7 Things Next', description: 'A fast, practical plan for the days between getting an interview and walking in.', category: 'Career Scenarios', readMins: 7, updated: 'Jul 2026' },
  { slug: 'new-job-stuck-in-project-work', title: 'New Job, Stuck in Project Work? Here’s How to Catch Up', description: 'Ramping onto an unfamiliar codebase fast — and where proxy job support fits.', category: 'Career Scenarios', readMins: 8, updated: 'Jul 2026' },
  { slug: 'production-issue-pressure-in-new-it-job', title: 'Production Issue Pressure in a New IT Job: Stay Calm, Fix It', description: 'How to handle a production incident early in a new role without panicking.', category: 'Career Scenarios', readMins: 7, updated: 'Jul 2026' },
  { slug: 'how-to-handle-client-calls-in-new-it-job', title: 'How to Handle Client Calls in a New IT Job', description: 'Framing status, answering tough questions, and sounding senior in client calls.', category: 'Career Scenarios', readMins: 7, updated: 'Jul 2026' },
  { slug: 'from-profile-to-interview-to-job-support', title: 'From Profile to Interview to Job: The Full Support Journey', description: 'How the pieces connect — profile, calls, interviews and job support — into one journey.', category: 'Career Scenarios', readMins: 9, updated: 'Jul 2026' },
  // ---- November 2026 international SEO expansion (USA / UK / Canada / Ireland) ----
  { slug: 'agentic-ai-interview-proxy-usa-2026', title: 'Agentic AI Interview Proxy Support USA 2026: Technical Rounds, System Design & Scheduled Interviews', description: 'AI, Agentic AI and GenAI interviews in the US test agent orchestration, RAG, LLM evals and AI system design. How proxy interview support helps you clear scheduled technical rounds.', category: 'Technology', readMins: 13, updated: 'Nov 2026' },
  { slug: 'it-job-marketing-interview-calls-uk-2026', title: 'Not Getting IT Interview Calls in the UK? Job Marketing, Recruiter Outreach & Profile Visibility in 2026', description: 'Qualified but silent in the UK job market? Why the calls stop coming — and how IT job marketing, recruiter outreach and profile engineering fix visibility and fit in 2026.', category: 'Profile & Recruiter', readMins: 12, updated: 'Nov 2026' },
  { slug: 'canada-it-job-marketing-linkedin-resume-2026', title: 'Canada IT Job Marketing 2026: Get More Recruiter Calls with LinkedIn, Resume & Profile Engineering', description: 'Applying to Canadian IT roles without enough recruiter responses? How profile engineering, ATS-ready resumes, LinkedIn visibility and profile marketing drive more recruiter calls in 2026.', category: 'Profile & Recruiter', readMins: 12, updated: 'Nov 2026' },
  { slug: 'ai-cloud-interview-proxy-ireland-2026', title: 'AI & Cloud Interview Proxy Support Ireland 2026: Technical Interviews, LinkedIn Visibility & Recruiter Outreach', description: 'Dublin and Ireland tech interviews test AI, cloud, data and security depth. How interview proxy support, profile engineering and recruiter outreach fit together in 2026.', category: 'Proxy Support', readMins: 12, updated: 'Nov 2026' },
];

export const blogBySlug = (slug: string) => blogs.find((b) => b.slug === slug);
export const blogStub = (slug: string) => blogIndex.find((b) => b.slug === slug);
