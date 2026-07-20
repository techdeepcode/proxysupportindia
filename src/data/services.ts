// ============================================================
// Core services in exact priority order (CLAUDE.md).
// Each service drives its own page + country/tech variants.
// ============================================================
import type { CtaKey } from './site';

export interface Service {
  slug: string;
  order: number;
  name: string;
  kicker: string;
  short: string;          // card / meta description
  h1: string;
  intro: string;          // hook-based page intro
  forWho: string[];       // "who this is for"
  includes: string[];     // "what support includes"
  primaryCta: CtaKey;
  keywords: string[];
  // Used by country/tech variant generators:
  supportsCountryVariants: boolean;
  supportsTechVariants: boolean;
}

export const services: Service[] = [
  {
    slug: 'proxy-interview-support',
    order: 1,
    name: 'Proxy Interview Support',
    kicker: 'Interview ahead',
    short: 'JD-based, round-wise proxy interview support for scheduled technical interviews — coding, system design, client and final rounds across USA and global markets.',
    h1: 'Proxy Interview Support — JD-Based, Round-Wise Help to Clear Your Technical Interview',
    intro: 'Interview scheduled and not fully confident? Proxy interview support gives you real-time, JD-based technical support before and through your rounds — from the recruiter screen to coding, system design, client and final rounds — so you walk in fully prepared and can perform at your best.',
    forWho: [
      'Candidates with an interview already scheduled and a short runway to prepare',
      'Working professionals who cannot revise an entire stack alone in a few days',
      'Anyone facing an unfamiliar JD, a new tech round, or a tough client panel',
      'Candidates targeting USA, Canada, UK, Europe, Australia, Singapore, Japan, New Zealand, Gulf or India roles',
    ],
    includes: [
      'JD-wise interview mapping — exactly what this company is likely to ask',
      'Round-wise preparation: recruiter screen, HR/behavioral, coding, system design, client and final rounds',
      'Expert-led mock interviews with real-time feedback and scorecards',
      'Live coding and system design preparation for your target level',
      'Technology-specific interview support matched to your stack',
      'Communication and answer-structuring coaching for global panels',
    ],
    primaryCta: 'shareJD',
    keywords: ['proxy interview support', 'interview proxy support', 'interview support proxy', 'proxy interviewer', 'online interview support'],
    supportsCountryVariants: true,
    supportsTechVariants: true,
  },
  {
    slug: 'proxy-job-support',
    order: 2,
    name: 'Proxy Job Support',
    kicker: 'On the job',
    short: 'Real-time proxy job support to handle day-to-day project work — tickets, debugging, production issues, deployments, code reviews and client calls.',
    h1: 'Proxy Job Support — Real-Time Help to Deliver Your Day-to-Day IT Project Work',
    intro: 'Joined a new role and stuck with unfamiliar code, tight sprints and production pressure? Proxy job support gives you real-time technical help to handle daily tickets, debugging, deployments, code reviews and client calls — so you deliver confidently from week one and stay job-ready.',
    forWho: [
      'Freshly joined candidates onboarding onto an unfamiliar codebase and toolchain',
      'Professionals who cleared the interview but need help delivering the actual work',
      'Anyone under production, sprint or client-call pressure in a new project',
      'Remote/offshore engineers working USA, Canada, UK or Australia time zones from India',
    ],
    includes: [
      'Day-to-day sprint ticket and task delivery guidance',
      'Debugging support and production-issue troubleshooting in real time',
      'Codebase understanding, code-review explanations and deployment help',
      'Client-call and standup preparation so you speak with confidence',
      'Technology-specific job support matched to your project stack',
      'Time-zone-aligned support including night-shift coverage from India',
    ],
    primaryCta: 'sendProjectIssue',
    keywords: ['proxy job support', 'job support proxy', 'online job support', 'real-time job support', 'it project support'],
    supportsCountryVariants: true,
    supportsTechVariants: true,
  },
  {
    slug: 'profile-engineering',
    order: 3,
    name: 'Profile Engineering',
    kicker: 'Get found',
    short: 'ATS-ready CV structuring, LinkedIn optimization, JD-wise alignment and project-story building that positions your real experience for USA and global roles.',
    h1: 'Profile Engineering — Position Your Real Experience to Win Recruiter Attention',
    intro: 'A strong engineer with a weak profile gets skipped. Profile engineering rebuilds your CV, LinkedIn and project story around your target JDs and market — ATS-ready, keyword-aligned and recruiter-friendly — so the right roles start finding you.',
    forWho: [
      'Candidates whose profile does not reflect their real strength',
      'Professionals switching stacks, domains or target markets',
      'Anyone whose CV is not clearing ATS filters or getting shortlisted',
      'Engineers targeting USA/global roles who need market-aligned positioning',
    ],
    includes: [
      'ATS-ready CV structuring and JD-wise keyword alignment',
      'LinkedIn optimization for recruiter search visibility',
      'Technology timeline and project-story building',
      'GitHub / portfolio documentation cleanup where relevant',
      'USA, global and India market-readiness positioning',
      'Honest positioning of your real skills and experience',
    ],
    primaryCta: 'buildProfile',
    keywords: ['profile engineering', 'ats resume', 'linkedin optimization', 'jd wise cv', 'it profile positioning'],
    supportsCountryVariants: true,
    supportsTechVariants: false,
  },
  {
    slug: 'profile-marketing',
    order: 4,
    name: 'Profile Marketing',
    kicker: 'Reach recruiters',
    short: 'Recruiter and vendor outreach, job-board strategy and daily application support across Dice, LinkedIn, Indeed, Naukri and more to put your profile in front of the right recruiters.',
    h1: 'Profile Marketing — Put Your Profile in Front of the Right Recruiters, Daily',
    intro: 'A great profile that nobody sees still gets zero calls. Profile marketing runs consistent recruiter and vendor outreach, job-board strategy and daily applications across Dice, LinkedIn, Indeed and Naukri — so your profile reaches the people who hire.',
    forWho: [
      'Candidates applying daily but hearing nothing back',
      'Professionals without time to run outreach and applications consistently',
      'Bench/consulting candidates who need vendor and C2C reach',
      'Engineers targeting USA, Canada, UK, Europe, Australia and Gulf recruiters',
    ],
    includes: [
      'Recruiter and vendor outreach campaigns',
      'Job-board strategy for Dice, LinkedIn, Indeed, Monster and Naukri',
      'Daily application support and email campaigns',
      'Market-specific recruiter targeting (USA/Canada/UK/Europe/APAC/Gulf/India)',
      'Messaging and follow-up templates that get replies',
      'Response tracking to double down on what works',
    ],
    primaryCta: 'startMarketing',
    keywords: ['profile marketing', 'candidate marketing', 'recruiter outreach', 'dice profile marketing', 'linkedin profile marketing'],
    supportsCountryVariants: true,
    supportsTechVariants: false,
  },
  {
    slug: 'profile-managing',
    order: 5,
    name: 'Profile Managing',
    kicker: 'Run the search',
    short: 'End-to-end job-search execution: JD matching, CV versioning, recruiter replies, follow-ups, interview scheduling and pipeline tracking, managed for you.',
    h1: 'Profile Managing — Your Entire Job Search, Executed and Tracked for You',
    intro: 'Job hunting is a full-time job on top of your job. Profile managing runs the whole execution layer — JD matching, CV versioning, recruiter replies, follow-ups, interview scheduling and pipeline tracking — so nothing slips and every opportunity is worked.',
    forWho: [
      'Busy professionals who cannot manage a full search alongside work',
      'Candidates losing opportunities to slow replies and missed follow-ups',
      'Anyone juggling multiple recruiters, vendors and interview loops',
      'Engineers running parallel USA/global and India pipelines',
    ],
    includes: [
      'JD matching and JD-wise CV versioning',
      'Recruiter replies, vendor communication and follow-ups',
      'Interview calendar and pipeline tracking',
      'Profile refresh based on live market response',
      'Full job-search execution management end to end',
      'Weekly status so you always know where every role stands',
    ],
    primaryCta: 'manageSearch',
    keywords: ['profile managing', 'job search management', 'jd matching', 'recruiter email management', 'pipeline tracking'],
    supportsCountryVariants: true,
    supportsTechVariants: false,
  },
  {
    slug: 'get-more-recruiter-calls',
    order: 6,
    name: 'Get More Recruiter Calls',
    kicker: 'More calls',
    short: 'Strengthen your profile’s pull with recruiters: profile-to-call conversion, vendor submissions, job-board ranking and JD-fit improvements that help your profile attract more recruiter calls.',
    h1: 'Get More Recruiter Calls — Help a Quiet Profile Attract More Recruiters',
    intro: 'If your phone is not ringing, the market is not seeing a match. Get More Recruiter Calls combines profile-to-call optimization, vendor submissions, job-board ranking and JD-fit improvements to fix the exact gaps stopping recruiters from reaching out.',
    forWho: [
      'Candidates whose profile is active but silent',
      'Professionals getting the wrong calls instead of the right ones',
      'Bench candidates who need more vendor submissions',
      'Engineers targeting a specific market that is not responding yet',
    ],
    includes: [
      'Profile-to-call conversion audit and fixes',
      'Vendor submission support and job-board ranking improvement',
      'JD-fit improvement so you match more searches',
      'Initial screening preparation and call scheduling support',
      'Market-specific recruiter-call generation',
      'Ongoing tuning based on which roles respond',
    ],
    primaryCta: 'moreCalls',
    keywords: ['get more recruiter calls', 'recruiter call generation', 'more it interview calls', 'vendor submissions'],
    supportsCountryVariants: true,
    supportsTechVariants: false,
  },
  {
    slug: 'end-to-end-it-career-proxy-support',
    order: 7,
    name: 'End-to-End IT Career Proxy Support',
    kicker: 'Everything',
    short: 'The complete journey: profile engineering, marketing and managing, recruiter calls, proxy interview support, offer support and proxy job support — one team, from profile to on-the-job delivery.',
    h1: 'End-to-End IT Career Proxy Support — From Profile to Interview to On-the-Job Delivery',
    intro: 'Most candidates lose momentum in the gaps — a good profile with no outreach, calls with no interview prep, an offer with no delivery support. End-to-end IT career proxy support closes every gap with one team: profile, marketing, calls, interviews, offer and job support, managed as a single journey.',
    forWho: [
      'Candidates who want one team owning the whole journey',
      'Professionals restarting a stalled job search from scratch',
      'Anyone who needs support from profile all the way through on-the-job delivery',
      'Engineers making an India-to-global career move',
    ],
    includes: [
      'Profile engineering, marketing and managing',
      'Recruiter-call generation and interview scheduling',
      'Proxy interview support across all rounds',
      'Offer support and joining preparation',
      'Proxy job support after you join',
      'A single point of contact across the entire journey',
    ],
    primaryCta: 'endToEndPlan',
    keywords: ['end-to-end it career proxy support', 'it career proxy support', 'complete proxy support', 'career execution support'],
    supportsCountryVariants: true,
    supportsTechVariants: false,
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
