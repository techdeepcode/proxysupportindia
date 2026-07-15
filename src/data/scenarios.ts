// ============================================================
// Scenario / urgency / special-intent pages. These are NOT
// country swaps — each targets a distinct search intent.
// Shares the Service shape so one layout renders both.
// ============================================================
import type { Service } from './services';

// `getInterviewScheduled` also generates country variants (flag below).
export const scenarios: Service[] = [
  {
    slug: 'global-proxy-support', order: 100, name: 'Global Proxy Support', kicker: 'Anywhere',
    short: 'Proxy interview support and proxy job support across USA, Canada, UK, Europe, Australia, Singapore, Japan, New Zealand, Gulf and India — one team, every time zone.',
    h1: 'Global Proxy Support — Interview & Job Support Across Every Major IT Market',
    intro: 'Chasing roles in more than one country? Global proxy support gives you a single team for proxy interview support and proxy job support across every major market — matched to each region’s interview style, hiring channels and time zone — so you never juggle vendors again.',
    forWho: ['Candidates targeting multiple countries at once', 'Consultants working across USA, UK and Gulf requirements', 'Engineers relocating or going remote-global from India', 'Anyone who wants one point of contact across markets'],
    includes: ['Proxy interview support tuned to each market’s rounds', 'Proxy job support across USA, EU, APAC and Gulf time zones', 'Market-specific recruiter and vendor targeting', 'Consistent support whichever country responds first', 'One team from profile to interview to job', 'Coverage that follows you across regions'],
    primaryCta: 'endToEndPlan', keywords: ['global proxy support', 'international proxy support', 'worldwide interview support'],
    supportsCountryVariants: false, supportsTechVariants: false,
  },
  {
    slug: 'india-to-global-proxy-support', order: 101, name: 'India-to-Global Proxy Support', kicker: 'India → World',
    short: 'From-India proxy support for global IT jobs: time-zone-aligned interview and job support for USA, Canada, UK, Europe, Australia, Singapore, Japan, New Zealand and Gulf roles.',
    h1: 'India-to-Global Proxy Support — Win and Hold Global IT Roles from India',
    intro: 'Sitting in India and targeting global roles? India-to-global proxy support handles the hard parts — time-zone-aligned interview support, remote job support and market-specific positioning — so distance never costs you the offer or the delivery.',
    forWho: ['India-based engineers targeting overseas roles', 'Remote workers supporting USA/UK/AU time zones from India', 'Candidates on H1B/PR/work-visa pipelines', 'Consultants working global C2C from India'],
    includes: ['Time-zone-aligned proxy interview support (incl. night shift)', 'Remote proxy job support for global projects', 'India-to-global profile positioning', 'Market-specific recruiter targeting', 'Coverage for USA, Canada, UK, EU, APAC and Gulf', 'End-to-end support from India'],
    primaryCta: 'endToEndPlan', keywords: ['india to global proxy support', 'remote job support from india', 'global job support india'],
    supportsCountryVariants: false, supportsTechVariants: false,
  },
  {
    slug: 'get-interview-scheduled', order: 102, name: 'Get Interview Scheduled', kicker: 'Get calls',
    short: 'From silent profile to scheduled interviews: profile marketing, recruiter outreach and submissions that convert into real interview slots.',
    h1: 'Get Interview Scheduled — From a Quiet Profile to Confirmed Interview Slots',
    intro: 'The hardest part is often getting the interview at all. Get Interview Scheduled combines profile marketing, recruiter outreach and vendor submissions to turn a silent profile into confirmed interview slots — then hands you into proxy interview support to clear them.',
    forWho: ['Candidates not getting interview calls', 'Bench/consulting candidates needing submissions', 'Professionals with a strong profile but no traction', 'Engineers targeting a specific market'],
    includes: ['Profile marketing and recruiter outreach', 'Vendor submissions and job-board strategy', 'JD-fit improvements to match more searches', 'Screening preparation and scheduling support', 'A direct handoff to proxy interview support', 'Market-specific targeting'],
    primaryCta: 'moreCalls', keywords: ['get interview scheduled', 'get more interviews', 'interview calls', 'schedule interviews'],
    supportsCountryVariants: true, supportsTechVariants: false,
  },
  {
    slug: 'real-time-it-job-support', order: 103, name: 'Real-Time IT Job Support', kicker: 'Live help',
    short: 'Live, on-demand help while you work — screen-share guidance for tickets, bugs, deployments and client calls, in your time zone.',
    h1: 'Real-Time IT Job Support — Live Help While You Deliver the Work',
    intro: 'Stuck mid-task with a deadline closing in? Real-time IT job support puts an experienced engineer alongside you — live — to unblock tickets, debug fast, and get deployments and client calls over the line, right when you need it.',
    forWho: ['Engineers who hit blockers under deadline', 'New joiners still learning the codebase', 'Remote workers on tight sprint timelines', 'Anyone needing help during live client calls'],
    includes: ['Live, on-demand technical guidance', 'Real-time debugging and deployment help', 'Ticket and task walkthroughs', 'Client-call and standup backup', 'Time-zone-aligned availability', 'Stack-matched engineers'],
    primaryCta: 'sendProjectIssue', keywords: ['real-time job support', 'live job support', 'on-demand it support'],
    supportsCountryVariants: false, supportsTechVariants: false,
  },
  {
    slug: 'production-issue-support', order: 104, name: 'Production Issue Support', kicker: 'Incident',
    short: 'Under a production fire? Get real-time troubleshooting, root-cause analysis and safe-fix guidance to stabilize the incident fast.',
    h1: 'Production Issue Support — Stabilize the Incident and Fix the Root Cause',
    intro: 'A production issue on your watch is terrifying when it is not your code. Production issue support gives you real-time triage, root-cause analysis and a safe path to a fix — so you stabilize the system and come out looking dependable.',
    forWho: ['Engineers on-call for unfamiliar systems', 'New joiners hit with a production incident early', 'Support engineers under SLA pressure', 'Anyone facing a high-severity outage'],
    includes: ['Real-time incident triage', 'Root-cause analysis guidance', 'Safe-fix and rollback strategy', 'Log, metric and trace interpretation', 'Post-incident summary help', 'Follow-up hardening advice'],
    primaryCta: 'sendProjectIssue', keywords: ['production issue support', 'production support', 'incident support', 'outage help'],
    supportsCountryVariants: false, supportsTechVariants: false,
  },
  {
    slug: 'project-onboarding-support', order: 105, name: 'Project Onboarding Support', kicker: 'First weeks',
    short: 'Ramp fast on a new project: codebase walkthroughs, environment setup, first-ticket guidance and the context to deliver from week one.',
    h1: 'Project Onboarding Support — Ramp Onto a New Project and Deliver Early',
    intro: 'The first few weeks decide how a new role goes. Project onboarding support helps you understand the codebase, set up your environment, pick up your first tickets and grasp the domain fast — so you deliver early instead of drowning quietly.',
    forWho: ['New joiners onto an unfamiliar codebase', 'Engineers switching stacks or domains', 'Remote joiners with limited hand-holding', 'Anyone under pressure to deliver from week one'],
    includes: ['Codebase and architecture walkthroughs', 'Environment and tooling setup help', 'First-ticket and first-PR guidance', 'Domain and workflow context', 'Team-process and ceremony prep', 'A ramp plan for your first 30–60 days'],
    primaryCta: 'sendProjectIssue', keywords: ['project onboarding support', 'onboarding help', 'new job codebase help'],
    supportsCountryVariants: false, supportsTechVariants: false,
  },
  {
    slug: 'client-call-standup-support', order: 106, name: 'Client Call & Standup Support', kicker: 'Speak up',
    short: 'Walk into client calls and standups prepared: talking points, status framing and answers to the technical questions you will be asked.',
    h1: 'Client Call & Standup Support — Speak With Confidence in Every Meeting',
    intro: 'It is not just the code — it is explaining it. Client call and standup support prepares your talking points, frames your status well, and readies you for the technical questions clients ask, so every meeting builds trust instead of exposing gaps.',
    forWho: ['Engineers nervous in client-facing calls', 'New joiners presenting status early', 'Remote workers on daily standups', 'Anyone fielding tough technical questions live'],
    includes: ['Talking points and status framing', 'Anticipated question preparation', 'Technical explanation coaching', 'Standup and demo readiness', 'Real-time backup during calls where needed', 'Follow-up communication help'],
    primaryCta: 'sendProjectIssue', keywords: ['client call support', 'standup support', 'daily standup help'],
    supportsCountryVariants: false, supportsTechVariants: false,
  },
  {
    slug: 'failed-interview-help', order: 107, name: 'Failed Interview Help', kicker: 'Bounce back',
    short: 'Bombed a round? Get an honest debrief, a targeted gap-fix plan and stronger preparation so the next interview goes differently.',
    h1: 'Failed Interview Help — Turn a Rejection Into Your Next Offer',
    intro: 'A rejection stings, but it is data. Failed interview help debriefs what went wrong, fixes the exact gaps that cost you the round, and rebuilds your preparation — so your next interview ends with a yes.',
    forWho: ['Candidates who just failed a technical round', 'Repeat interviewers stuck at the same stage', 'Professionals losing confidence after rejections', 'Anyone who wants a focused comeback plan'],
    includes: ['Honest interview debrief and gap analysis', 'Targeted preparation on weak areas', 'Mock interviews to rebuild confidence', 'Answer-structuring and communication fixes', 'Round-specific strategy for the next attempt', 'A handoff to proxy interview support'],
    primaryCta: 'shareJD', keywords: ['failed interview help', 'interview rejection help', 'interview comeback'],
    supportsCountryVariants: false, supportsTechVariants: false,
  },
  {
    slug: 'urgent-proxy-interview-support', order: 108, name: 'Urgent Proxy Interview Support', kicker: 'Urgent',
    short: 'Interview in the next day or two? Get fast-tracked, JD-based proxy interview support with a mentor matched to your stack immediately.',
    h1: 'Urgent Proxy Interview Support — Fast-Tracked Help When the Clock Is Ticking',
    intro: 'Interview tomorrow and nowhere near ready? Urgent proxy interview support fast-tracks you — a stack-matched mentor, JD-based prep and round strategy within hours — so a short runway does not cost you the offer.',
    forWho: ['Candidates with an interview in 24–48 hours', 'Professionals who just got a surprise invite', 'Anyone who needs a mentor matched immediately', 'Candidates facing a rescheduled or moved-up round'],
    includes: ['Same-day mentor matching', 'Rapid JD-based interview mapping', 'Round strategy for your exact panel', 'Focused mock on the highest-risk areas', 'Real-time support through the rounds', 'Priority scheduling on WhatsApp'],
    primaryCta: 'shareJD', keywords: ['urgent proxy interview support', 'last minute interview support', 'urgent interview help'],
    supportsCountryVariants: false, supportsTechVariants: false,
  },
  {
    slug: 'same-day-proxy-interview-support', order: 109, name: 'Same-Day Proxy Interview Support', kicker: 'Today',
    short: 'Interview today? Get immediate, same-day proxy interview support — mentor matched now, JD mapped fast, and real-time help through your rounds.',
    h1: 'Same-Day Proxy Interview Support — Immediate Help for an Interview Today',
    intro: 'Interview in a few hours? Same-day proxy interview support gets a stack-matched mentor on your case right now — quick JD mapping, the likely questions, and real-time backup through the rounds — so today still ends in your favour.',
    forWho: ['Candidates interviewing within hours', 'Professionals who need help immediately', 'Anyone caught off-guard by a same-day slot', 'Candidates wanting instant WhatsApp response'],
    includes: ['Immediate mentor matching', 'Fast JD and question mapping', 'Highest-yield last-hour preparation', 'Real-time support during the interview', 'Round-wise quick strategy', 'Instant WhatsApp coordination'],
    primaryCta: 'shareJD', keywords: ['same day proxy interview support', 'same day interview help', 'immediate interview support'],
    supportsCountryVariants: false, supportsTechVariants: false,
  },
];

export const scenarioBySlug = (slug: string) => scenarios.find((s) => s.slug === slug);
