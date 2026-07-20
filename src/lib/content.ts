// ============================================================
// Content builder — turns a lightweight PageEntry into a full,
// unique page content model. Uniqueness comes from combining
// service + technology + country data fields, never boilerplate.
// ============================================================
import type { PageEntry } from '@data/pageRegistry';
import { services, serviceBySlug } from '@data/services';
import { scenarios, scenarioBySlug } from '@data/scenarios';
import { countryBySlug } from '@data/countries';
import { techBySlug } from '@data/technologies';
import { cityBySlug } from '@data/cities';
import { fde } from '@data/fde';
import { howToTopicBySlug } from '@data/howToGet';
import type { CtaKey } from '@data/site';

export interface FAQ { q: string; a: string; }
export interface RelatedLink { label: string; href: string; }
export interface ContentSection { h2: string; paras?: string[]; bullets?: string[]; }
export interface Breadcrumb { label: string; href: string; }

export interface PageContent {
  title: string;
  description: string;
  h1: string;
  kicker: string;
  intro: string;
  sections: ContentSection[];
  faqs: FAQ[];
  related: RelatedLink[];
  primaryCta: CtaKey;
  breadcrumb: Breadcrumb[];
  schemaType: 'Service' | 'Article';
}

const BRAND = 'Proxy Support India';
const home: Breadcrumb = { label: 'Home', href: '/' };

const trust =
  'We support you in real time and prepare you thoroughly — we never impersonate candidates or fabricate experience. The word “proxy” here means hands-on, round-wise support, not pretending to be you.';

function whyUs(context: string): ContentSection {
  return {
    h2: `Why candidates choose ${BRAND}`,
    paras: [
      `${BRAND} is built around one idea: ${context} should never fail for a fixable reason. We match you with engineers who work in your exact stack, respond fast on WhatsApp, and stay with you through every round or sprint.`,
      trust,
    ],
    bullets: [
      'Stack-matched experts, not generic coaches',
      'Fast WhatsApp response, time-zone aligned',
      'USA-first, global and India-to-global coverage',
      'Support from profile to interview to on-the-job delivery',
    ],
  };
}

function howItWorks(action: string): ContentSection {
  return {
    h2: 'How it works',
    bullets: [
      `Message us on WhatsApp with your ${action}.`,
      'We match you with a stack-matched expert within hours.',
      'You get a clear plan and real-time support through every step.',
      'We stay with you through the process — interview rounds, delivery and beyond.',
    ],
  };
}

const coreServiceLinks: RelatedLink[] = services.map((s) => ({ label: s.name, href: `/${s.slug}` }));

function baseRelated(extra: RelatedLink[] = []): RelatedLink[] {
  return [
    ...extra,
    { label: 'Proxy Interview Support', href: '/proxy-interview-support' },
    { label: 'Proxy Job Support', href: '/proxy-job-support' },
    { label: 'End-to-End IT Career Proxy Support', href: '/end-to-end-it-career-proxy-support' },
    { label: 'Knowledge Base', href: '/knowledge-base' },
    { label: 'Contact on WhatsApp', href: '/contact' },
  ].filter((v, i, a) => a.findIndex((x) => x.href === v.href) === i);
}

// ---------- SERVICE (core + scenario) ----------
function buildService(entry: PageEntry): PageContent {
  const svc = entry.service ? serviceBySlug(entry.service) : scenarioBySlug(entry.scenario!);
  if (!svc) throw new Error(`Service not found: ${entry.slug}`);
  const sections: ContentSection[] = [
    { h2: 'Who this is for', bullets: svc.forWho },
    { h2: 'What this support includes', bullets: svc.includes },
    howItWorks('situation, stack and target market'),
    whyUs(svc.name.toLowerCase()),
  ];
  const faqs: FAQ[] = [
    { q: `What is ${svc.name.toLowerCase()}?`, a: `${svc.intro}` },
    { q: `Who needs ${svc.name}?`, a: `It’s for ${svc.forWho[0].toLowerCase()} and anyone who wants a stack-matched expert on their side. Share your details on WhatsApp and we’ll tell you honestly if it fits.` },
    { q: 'Which markets do you cover?', a: 'USA (our center market), Canada, UK, Europe, Australia, Singapore, Japan, New Zealand, the Gulf and India.' },
    { q: 'Do you impersonate candidates?', a: trust },
    { q: 'How do I start?', a: `Tap any WhatsApp button on this page and send your details. We reply fast and match you with the right expert.` },
  ];
  return {
    title: `${svc.name} | ${BRAND}`,
    description: svc.short,
    h1: svc.h1,
    kicker: svc.kicker,
    intro: svc.intro,
    sections,
    faqs,
    related: baseRelated(coreServiceLinks.filter((l) => l.href !== `/${svc.slug}`).slice(0, 3)),
    primaryCta: svc.primaryCta,
    breadcrumb: [home, { label: 'Services', href: '/services' }, { label: svc.name, href: `/${svc.slug}` }],
    schemaType: 'Service',
  };
}

// ---------- SERVICE × COUNTRY ----------
function buildServiceCountry(entry: PageEntry): PageContent {
  const svc = serviceBySlug(entry.service!) || scenarioBySlug(entry.service!);
  const c = countryBySlug(entry.country!);
  if (!svc || !c) throw new Error(`Missing data for ${entry.slug}`);
  const name = `${svc.name} in ${c.name}`;
  const sections: ContentSection[] = [
    {
      h2: `How hiring works in ${c.name}`,
      paras: [`${c.angle} ${c.hiringStyle}`, `In-demand right now: ${c.demand}`],
    },
    {
      h2: `How ${svc.name.toLowerCase()} maps to the ${c.name} market`,
      paras: [`We tune ${svc.name.toLowerCase()} to how ${c.name} actually hires — its rounds, its recruiter and vendor channels (${c.channels}), and its ${c.timezone} working hours. For ${c.visaNote.toLowerCase()}, that market fit is what helps your preparation and effort count.`],
      bullets: svc.includes,
    },
    { h2: 'Who this is for', bullets: svc.forWho },
    howItWorks(`target role in ${c.name}`),
  ];
  const faqs: FAQ[] = [
    { q: `Do you offer ${svc.name.toLowerCase()} for ${c.name}?`, a: `Yes. ${svc.name} for ${c.name} is tuned to ${c.hiringStyle.toLowerCase()}` },
    { q: `Which ${c.name} cities do you support?`, a: `We support roles across ${c.cities.slice(0, 5).join(', ')} and remote ${c.name} positions.` },
    { q: `Can I get ${c.name} support from India?`, a: `Yes — we align to ${c.timezone} hours and run India-to-global support so location is never a blocker.` },
    { q: 'Do you impersonate candidates?', a: trust },
  ];
  const related: RelatedLink[] = baseRelated([
    { label: `Proxy Interview Support in ${c.name}`, href: `/proxy-interview-support-${c.slug}` },
    { label: `Proxy Job Support in ${c.name}`, href: `/proxy-job-support-${c.slug}` },
    { label: `${c.name} market overview`, href: `/countries/${c.slug}` },
  ]);
  return {
    title: `${name} — ${svc.name} for ${c.adjective} IT Jobs | ${BRAND}`,
    description: `${svc.name} tuned to the ${c.name} market: ${c.angle} ${svc.short}`,
    h1: `${svc.name} in ${c.name} — ${svc.kicker} Support for ${c.adjective} IT Roles`,
    kicker: `${c.name} · ${svc.kicker}`,
    intro: `${svc.intro} This page focuses on ${c.name}: ${c.angle}`,
    sections,
    faqs,
    related,
    primaryCta: svc.primaryCta,
    breadcrumb: [home, { label: 'Locations', href: '/countries' }, { label: c.name, href: `/countries/${c.slug}` }, { label: svc.name, href: `/${entry.slug}` }],
    schemaType: 'Service',
  };
}

// ---------- TECHNOLOGY (interview / job) ----------
function buildTech(entry: PageEntry): PageContent {
  const t = techBySlug(entry.tech!);
  if (!t) throw new Error(`Tech not found: ${entry.slug}`);
  const isInterview = entry.mode === 'interview';
  const svc = isInterview ? serviceBySlug('proxy-interview-support')! : serviceBySlug('proxy-job-support')!;
  const focus = isInterview ? t.interviewFocus : t.jobFocus;
  const label = isInterview ? 'Proxy Interview Support' : 'Proxy Job Support';
  const sections: ContentSection[] = [
    {
      h2: isInterview ? `What ${t.name} interviews actually test` : `What ${t.name} job support covers`,
      paras: [
        isInterview
          ? `${t.name} interviews focus on ${focus} We map your target JD to the exact rounds you’ll face and prepare you for each one.`
          : `Day-to-day ${t.name} work means ${focus} We help you deliver it in real time — without getting stuck for hours.`,
      ],
      bullets: svc.includes,
    },
    { h2: 'Who this is for', bullets: svc.forWho },
    howItWorks(isInterview ? `${t.name} JD and interview date` : `${t.name} project issue`),
    whyUs(`${t.name} ${isInterview ? 'interviews' : 'delivery'}`),
  ];
  const faqs: FAQ[] = [
    { q: `Do you provide ${t.name} ${label.toLowerCase()}?`, a: `Yes. We match you with an engineer who works in ${t.name} and ${isInterview ? `knows what its interviews ask: ${focus}` : `handles ${t.name} work daily: ${focus}`}` },
    { q: isInterview ? `Which ${t.name} rounds do you support?` : `What ${t.name} tasks can you help with?`, a: isInterview ? 'Recruiter screen, coding, system design, client and final rounds — mapped to your JD.' : 'Tickets, debugging, production issues, deployments, code reviews and client calls.' },
    { q: 'Which markets do you cover?', a: 'USA, Canada, UK, Europe, Australia, Singapore, Japan, New Zealand, the Gulf and India.' },
    { q: 'Do you impersonate candidates?', a: trust },
  ];
  const related: RelatedLink[] = baseRelated([
    { label: `${t.name} ${isInterview ? 'Proxy Job Support' : 'Proxy Interview Support'}`, href: `/${t.slug}-${isInterview ? 'proxy-job-support' : 'proxy-interview-support'}` },
    { label: `${t.name} Interview Questions`, href: `/real-interview-questions` },
    { label: 'All Technologies', href: '/technologies' },
  ]);
  return {
    title: `${t.name} ${label} — USA & Global | ${BRAND}`,
    description: `${t.name} ${label.toLowerCase()} across USA and global markets. ${isInterview ? t.interviewFocus : t.jobFocus}`,
    h1: `${t.name} ${label} — ${isInterview ? 'Prepare for Every Round' : 'Deliver Every Task'} With a ${t.name} Expert`,
    kicker: `${t.category} · ${isInterview ? 'Interview' : 'Job'}`,
    intro: isInterview
      ? `Facing a ${t.name} interview? Our ${t.name} proxy interview support gives you JD-based, round-wise help — from the screen to the final round — with an engineer who lives in ${t.name} every day.`
      : `Stuck on ${t.name} work in a new role? Our ${t.name} proxy job support gives you real-time help with ${focus.replace(/\.$/, '')} — so you deliver with confidence.`,
    sections,
    faqs,
    related,
    primaryCta: isInterview ? 'shareJD' : 'sendProjectIssue',
    breadcrumb: [home, { label: 'Technologies', href: '/technologies' }, { label: t.name, href: `/technologies` }, { label: label, href: `/${entry.slug}` }],
    schemaType: 'Service',
  };
}

// ---------- TECHNOLOGY × COUNTRY ----------
function buildTechCountry(entry: PageEntry): PageContent {
  const t = techBySlug(entry.tech!);
  const c = countryBySlug(entry.country!);
  if (!t || !c) throw new Error(`Missing data for ${entry.slug}`);
  const isInterview = entry.mode === 'interview';
  const focus = isInterview ? t.interviewFocus : t.jobFocus;
  const label = isInterview ? 'Proxy Interview Support' : 'Proxy Job Support';
  const svc = isInterview ? serviceBySlug('proxy-interview-support')! : serviceBySlug('proxy-job-support')!;
  const sections: ContentSection[] = [
    { h2: `${t.name} hiring in ${c.name}`, paras: [`In ${c.name}, ${c.demand} ${isInterview ? c.hiringStyle : ''}`.trim(), isInterview ? `${t.name} interviews here test ${focus}` : `${t.name} roles here involve ${focus}`] },
    { h2: `What our ${t.name} ${label.toLowerCase()} in ${c.name} includes`, bullets: svc.includes },
    { h2: 'Who this is for', bullets: svc.forWho },
    howItWorks(`${t.name} role in ${c.name}`),
  ];
  const faqs: FAQ[] = [
    { q: `Do you offer ${t.name} ${label.toLowerCase()} in ${c.name}?`, a: `Yes — a ${t.name} expert aligned to ${c.name}’s ${c.timezone} hours and hiring style.` },
    { q: `Can I get this from India for a ${c.name} role?`, a: `Yes. We run India-to-${c.name} support aligned to ${c.timezone}.` },
    { q: 'Do you impersonate candidates?', a: trust },
  ];
  const related = baseRelated([
    { label: `${t.name} ${label}`, href: `/${t.slug}-${isInterview ? 'proxy-interview-support' : 'proxy-job-support'}` },
    { label: `${label} in ${c.name}`, href: `/${isInterview ? 'proxy-interview-support' : 'proxy-job-support'}-${c.slug}` },
    { label: `${c.name} market overview`, href: `/countries/${c.slug}` },
  ]);
  return {
    title: `${t.name} ${label} in ${c.name} | ${BRAND}`,
    description: `${t.name} ${label.toLowerCase()} for ${c.adjective} IT roles. ${c.angle}`,
    h1: `${t.name} ${label} in ${c.name}`,
    kicker: `${c.name} · ${t.name}`,
    intro: `${t.name} ${label.toLowerCase()} tuned to the ${c.name} market. ${c.angle} ${isInterview ? `We prepare you for how ${c.name} runs ${t.name} interviews.` : `We help you deliver ${t.name} work on ${c.name} time.`}`,
    sections, faqs, related,
    primaryCta: isInterview ? 'shareJD' : 'sendProjectIssue',
    breadcrumb: [home, { label: 'Technologies', href: '/technologies' }, { label: t.name, href: '/technologies' }, { label: `${label} · ${c.name}`, href: `/${entry.slug}` }],
    schemaType: 'Service',
  };
}

// ---------- TECHNOLOGY × CITY (selected) ----------
function buildTechCity(entry: PageEntry): PageContent {
  const t = techBySlug(entry.tech!);
  const city = cityBySlug(entry.city!);
  if (!t || !city) throw new Error(`Missing data for ${entry.slug}`);
  const c = countryBySlug(city.countrySlug);
  const isInterview = entry.mode === 'interview';
  const focus = isInterview ? t.interviewFocus : t.jobFocus;
  const label = isInterview ? 'Proxy Interview Support' : 'Proxy Job Support';
  const svc = isInterview ? serviceBySlug('proxy-interview-support')! : serviceBySlug('proxy-job-support')!;
  const sections: ContentSection[] = [
    { h2: `${t.name} hiring in ${city.name}`, paras: [`${city.hook} ${c ? c.demand : ''}`.trim(), isInterview ? `${t.name} interviews in ${city.name} test ${focus}` : `${t.name} roles in ${city.name} involve ${focus}`] },
    { h2: `What our ${t.name} ${label.toLowerCase()} in ${city.name} includes`, bullets: svc.includes },
    { h2: 'Who this is for', bullets: svc.forWho },
    howItWorks(`${t.name} role in ${city.name}`),
  ];
  const faqs: FAQ[] = [
    { q: `Do you offer ${t.name} ${label.toLowerCase()} in ${city.name}?`, a: `Yes — a ${t.name} expert for ${city.name} (${c?.name ?? ''}) roles, onsite, hybrid or remote.` },
    { q: `Can I get this remotely for a ${city.name} role?`, a: `Yes${c ? `, including India-to-${c.name} support aligned to ${c.timezone}` : ''}.` },
    { q: 'Do you impersonate candidates?', a: trust },
  ];
  const related = baseRelated([
    { label: `${t.name} ${label}`, href: `/${t.slug}-${isInterview ? 'proxy-interview-support' : 'proxy-job-support'}` },
    { label: `${label} in ${city.name}`, href: `/${city.slug}-${isInterview ? 'proxy-interview-support' : 'proxy-job-support'}` },
    ...(c ? [{ label: `${t.name} ${label} in ${c.name}`, href: `/${t.slug}-${isInterview ? 'proxy-interview-support' : 'proxy-job-support'}-${c.slug}` }] : []),
  ]);
  return {
    title: `${t.name} ${label} in ${city.name} | ${BRAND}`,
    description: `${t.name} ${label.toLowerCase()} for ${city.name} IT roles. ${city.hook}`,
    h1: `${t.name} ${label} in ${city.name}`,
    kicker: `${city.name} · ${t.name}`,
    intro: `${t.name} ${label.toLowerCase()} tuned to ${city.name}. ${city.hook} ${isInterview ? `We prepare you for ${t.name} interviews the way ${city.name} hires.` : `We help you deliver ${t.name} work on ${city.name}-team time.`}`,
    sections, faqs, related,
    primaryCta: isInterview ? 'shareJD' : 'sendProjectIssue',
    breadcrumb: [home, { label: 'Locations', href: '/locations' }, { label: city.name, href: `/${city.slug}-proxy-interview-support` }, { label: `${t.name} ${label}`, href: `/${entry.slug}` }],
    schemaType: 'Service',
  };
}

// ---------- INDIA-TO-GLOBAL ----------
function buildIndiaToGlobal(entry: PageEntry): PageContent {
  const isInterview = entry.mode === 'interview';
  const label = isInterview ? 'Proxy Interview Support' : 'Proxy Job Support';
  const svc = isInterview ? serviceBySlug('proxy-interview-support')! : serviceBySlug('proxy-job-support')!;
  // Special (remote / timezone / night-shift / gulf) pages:
  if (entry.special) {
    const map: Record<string, { h1: string; kicker: string; intro: string; desc: string; extra: string }> = {
      'gulf-job': { h1: 'India-to-Gulf Proxy Job Support', kicker: 'India → Gulf', intro: 'Working a Gulf (UAE/Saudi/Qatar) project from or into the region? We provide real-time proxy job support aligned to Gulf Standard Time.', desc: 'Real-time proxy job support for Gulf IT projects, aligned to GST, from India.', extra: 'Gulf-region roles value delivery-readiness and client-facing confidence — we back you on both.' },
      'remote': { h1: 'Remote Job Support from India', kicker: 'Remote', intro: 'Landed a remote global role and need help delivering it from India? Remote job support gives you real-time backup for tickets, debugging and client calls in any time zone.', desc: 'Real-time remote job support from India for global remote IT roles, any time zone.', extra: 'We align to your team’s hours — including early-morning and late-night overlaps.' },
      'tz-usa': { h1: 'USA Time-Zone Proxy Job Support from India', kicker: 'India → US hours', intro: 'Supporting a US project from India means working EST/CST/PST hours. We provide proxy job support aligned to US time zones so you deliver on your team’s clock.', desc: 'Proxy job support from India aligned to USA (EST/CST/PST) working hours.', extra: 'Night-shift-friendly coverage keeps you responsive during US business hours.' },
      'tz-canada': { h1: 'Canada Time-Zone Proxy Job Support from India', kicker: 'India → CA hours', intro: 'Delivering a Canadian project from India? We align proxy job support to Canadian EST/PST hours so your standups and tickets never slip.', desc: 'Proxy job support from India aligned to Canada (EST/PST) working hours.', extra: 'We cover Toronto and Vancouver business hours from India.' },
      'tz-uk': { h1: 'UK Time-Zone Proxy Job Support from India', kicker: 'India → UK hours', intro: 'On a UK project from India? We align proxy job support to GMT/BST so you’re available for UK standups, calls and deployments.', desc: 'Proxy job support from India aligned to UK (GMT/BST) working hours.', extra: 'The modest IST–UK overlap makes this one of the smoothest global setups.' },
      'night-shift': { h1: 'Night-Shift Proxy Job Support from India', kicker: 'Night shift', intro: 'Working night shifts from India to cover US or global hours? We provide night-shift proxy job support so you’re never alone at 2 AM with a production issue.', desc: 'Night-shift proxy job support from India for US and global time-zone roles.', extra: 'Real-time help through the toughest overnight hours, matched to your stack.' },
    };
    const m = map[entry.special];
    return {
      title: `${m.h1} | ${BRAND}`,
      description: m.desc,
      h1: m.h1,
      kicker: m.kicker,
      intro: m.intro,
      sections: [
        { h2: 'What this covers', paras: [m.extra], bullets: svc.includes },
        { h2: 'Who this is for', bullets: svc.forWho },
        howItWorks('project, stack and working hours'),
        whyUs('remote, time-zone-aligned delivery'),
      ],
      faqs: [
        { q: 'Can you match my team’s time zone?', a: `Yes — that’s the point. ${m.extra}` },
        { q: 'Is this real-time or async?', a: 'Real-time. You get live help during your working hours, plus async follow-up.' },
        { q: 'Do you impersonate candidates?', a: trust },
      ],
      related: baseRelated([
        { label: 'India-to-Global Proxy Support', href: '/india-to-global-proxy-support' },
        { label: 'Real-Time IT Job Support', href: '/real-time-it-job-support' },
        { label: 'Production Issue Support', href: '/production-issue-support' },
      ]),
      primaryCta: 'sendProjectIssue',
      breadcrumb: [home, { label: 'India-to-Global', href: '/india-to-global-proxy-support' }, { label: m.h1, href: `/${entry.slug}` }],
      schemaType: 'Service',
    };
  }
  const c = countryBySlug(entry.country!)!;
  return {
    title: `India to ${c.name} ${label} | ${BRAND}`,
    description: `India-to-${c.name} ${label.toLowerCase()}: ${isInterview ? `clear ${c.adjective} interviews from India` : `deliver ${c.adjective} project work from India`}, aligned to ${c.timezone}.`,
    h1: `India to ${c.name} — ${label} for Your ${c.adjective} Career Move`,
    kicker: `India → ${c.name}`,
    intro: isInterview
      ? `Targeting ${c.name} roles from India? India-to-${c.name} proxy interview support prepares you for ${c.hiringStyle.toLowerCase()} — aligned to ${c.timezone} so distance is never the reason you walk in underprepared.`
      : `Delivering a ${c.name} project from India? India-to-${c.name} proxy job support gives you real-time backup aligned to ${c.timezone}, so you deliver on your team’s clock.`,
    sections: [
      { h2: `The India-to-${c.name} move`, paras: [`${c.angle} ${c.visaNote}`, `In demand: ${c.demand}`] },
      { h2: `What our India-to-${c.name} ${label.toLowerCase()} includes`, bullets: svc.includes },
      { h2: 'Who this is for', bullets: svc.forWho },
      howItWorks(`${c.name} target and your India base`),
    ],
    faqs: [
      { q: `Can I clear a ${c.name} interview from India?`, a: `Yes. We prepare you for ${c.name}’s interview style and align to ${c.timezone}.` },
      { q: `How do you handle the time-zone gap?`, a: `We schedule around ${c.timezone}, including early/late slots and night shifts where needed.` },
      { q: 'Do you impersonate candidates?', a: trust },
    ],
    related: baseRelated([
      { label: `${label} in ${c.name}`, href: `/${isInterview ? 'proxy-interview-support' : 'proxy-job-support'}-${c.slug}` },
      { label: `India to ${c.name} ${isInterview ? 'Job' : 'Interview'} Support`, href: `/india-to-${c.slug}-${isInterview ? 'proxy-job-support' : 'proxy-interview-support'}` },
      { label: 'India-to-Global Proxy Support', href: '/india-to-global-proxy-support' },
    ]),
    primaryCta: isInterview ? 'shareJD' : 'sendProjectIssue',
    breadcrumb: [home, { label: 'India-to-Global', href: '/india-to-global-proxy-support' }, { label: `${c.name} ${label}`, href: `/${entry.slug}` }],
    schemaType: 'Service',
  };
}

// ---------- CITY ----------
function buildCity(entry: PageEntry): PageContent {
  const city = cityBySlug(entry.city!)!;
  const c = countryBySlug(city.countrySlug)!;
  const isInterview = entry.mode === 'interview';
  const label = isInterview ? 'Proxy Interview Support' : 'Proxy Job Support';
  const svc = isInterview ? serviceBySlug('proxy-interview-support')! : serviceBySlug('proxy-job-support')!;
  return {
    title: `${label} in ${city.name} | ${BRAND}`,
    description: `${label} for IT roles in ${city.name}, ${c.name}. ${city.hook}`,
    h1: `${label} in ${city.name}`,
    kicker: `${city.name} · ${c.name}`,
    intro: `Interviewing or working in ${city.name}? ${city.hook} Our ${label.toLowerCase()} is tuned to ${city.name} and the wider ${c.name} market — ${c.angle}`,
    sections: [
      { h2: `Tech hiring in ${city.name}`, paras: [`${city.hook} ${isInterview ? c.hiringStyle : `Roles here involve real project delivery: ${c.demand}`}`] },
      { h2: `What our ${label.toLowerCase()} includes`, bullets: svc.includes },
      { h2: 'Who this is for', bullets: svc.forWho },
      howItWorks(`${city.name} role`),
    ],
    faqs: [
      { q: `Do you support ${city.name} IT roles?`, a: `Yes — ${label.toLowerCase()} for onsite, hybrid and remote roles in ${city.name}.` },
      { q: `Can I get this remotely?`, a: `Yes, including India-to-${c.name} support aligned to ${c.timezone}.` },
      { q: 'Do you impersonate candidates?', a: trust },
    ],
    related: baseRelated([
      { label: `${label} in ${c.name}`, href: `/${isInterview ? 'proxy-interview-support' : 'proxy-job-support'}-${c.slug}` },
      { label: `${city.name} ${isInterview ? 'Proxy Job Support' : 'Proxy Interview Support'}`, href: `/${city.slug}-${isInterview ? 'proxy-job-support' : 'proxy-interview-support'}` },
      { label: 'All Locations', href: '/locations' },
    ]),
    primaryCta: isInterview ? 'shareJD' : 'sendProjectIssue',
    breadcrumb: [home, { label: 'Locations', href: '/locations' }, { label: city.name, href: `/${entry.slug}` }],
    schemaType: 'Service',
  };
}

// ---------- FORWARD DEPLOYED ENGINEER (FDE) ----------
function buildFde(entry: PageEntry): PageContent {
  const isInterview = entry.mode === 'interview';
  const label = isInterview ? 'Proxy Interview Support' : 'Proxy Job Support';
  const focus = isInterview ? fde.interviewFocus : fde.jobFocus;
  const includes = isInterview ? fde.includesInterview : fde.includesJob;
  const c = entry.country ? countryBySlug(entry.country) : undefined;
  const city = entry.city ? cityBySlug(entry.city) : undefined;
  const place = city ? city.name : c ? c.name : '';
  const placeCtx = city ? `${city.name}, ${countryBySlug(city.countrySlug)?.name ?? ''}` : c ? c.name : 'USA & global';

  const h1 = place ? `${fde.abbr} ${label} in ${place}` : `${fde.name} ${label}`;
  const sections: ContentSection[] = [
    { h2: `What a Forward Deployed Engineer does`, paras: [fde.whatIs, fde.whyHot] },
    {
      h2: isInterview ? `What FDE interviews test` : `What FDE job support covers`,
      paras: [isInterview ? `FDE interviews test ${focus}. We map your target loop and prepare you for each round.` : `Day-to-day, an FDE handles ${focus}. We help you deliver it in real time.`],
      bullets: includes,
    },
    { h2: 'Skills we support you on', bullets: fde.skills },
    { h2: 'Who this is for', bullets: fde.forWho },
    howItWorks(isInterview ? 'FDE JD and interview date' : 'FDE deployment or client issue'),
  ];
  if (city || c) {
    sections.splice(1, 0, { h2: `FDE hiring in ${place}`, paras: [`${city ? city.hook + ' ' : ''}${c ? c.angle + ' ' + c.demand : (countryBySlug(city!.countrySlug)?.angle ?? '')}`.trim(), isInterview ? `We prepare you for how ${place} runs FDE interviews.` : `We help you deliver FDE work on ${place} time.`] });
  }
  const faqs: FAQ[] = [
    { q: `What is a Forward Deployed Engineer (FDE)?`, a: fde.whatIs },
    { q: `Do you offer FDE ${label.toLowerCase()}${place ? ` in ${place}` : ''}?`, a: `Yes — a stack-matched expert who knows the FDE loop: ${focus}.` },
    { q: `Why is FDE so high-paying?`, a: fde.whyHot },
    { q: 'Do you impersonate candidates?', a: trust },
  ];
  const related: RelatedLink[] = baseRelated([
    { label: `FDE ${isInterview ? 'Proxy Job Support' : 'Proxy Interview Support'}`, href: `/forward-deployed-engineer-${isInterview ? 'proxy-job-support' : 'proxy-interview-support'}` },
    { label: 'Forward Deployed Engineer — overview', href: '/forward-deployed-engineer' },
    { label: 'High-Paying IT Roles', href: '/high-paying-it-roles' },
    ...fde.relatedTechs.slice(0, 2).map((t) => ({ label: `${t.replace('-', '/').toUpperCase()} ${label}`, href: `/${t}-${isInterview ? 'proxy-interview-support' : 'proxy-job-support'}` })),
  ]);
  const bc: Breadcrumb[] = [home, { label: 'Forward Deployed Engineer', href: '/forward-deployed-engineer' }];
  if (place) bc.push({ label: `${label} · ${place}`, href: `/${entry.slug}` });
  else bc.push({ label, href: `/${entry.slug}` });

  return {
    title: `${fde.abbr} ${label}${place ? ` in ${place}` : ''} — Forward Deployed Engineer | ${BRAND}`,
    description: `Forward Deployed Engineer (FDE) ${label.toLowerCase()}${place ? ` for ${place}` : ' across USA & global markets'}. ${isInterview ? 'Prepare for the FDE loop' : 'Deliver FDE work'} with a stack-matched expert. ${fde.tagline}`,
    h1,
    kicker: `${fde.abbr} · ${isInterview ? 'Interview' : 'Job'}${place ? ' · ' + place : ''}`,
    intro: isInterview
      ? `Targeting a Forward Deployed Engineer role${place ? ` in ${place}` : ''}? FDE is one of 2026’s highest-paying roles. Our FDE proxy interview support gives you JD-based, round-wise help across ${focus} — for ${placeCtx}.`
      : `Working as a Forward Deployed Engineer${place ? ` in ${place}` : ''}? Our FDE proxy job support gives you real-time help with ${focus} — for ${placeCtx}.`,
    sections,
    faqs,
    related,
    primaryCta: isInterview ? 'shareJD' : 'sendProjectIssue',
    breadcrumb: bc,
    schemaType: 'Service',
  };
}

// ---------- HOW TO GET {X} JOBS IN {COUNTRY} ----------
function buildHowToGet(entry: PageEntry): PageContent {
  const topic = howToTopicBySlug(entry.howTo!);
  if (!topic) throw new Error(`Topic not found: ${entry.slug}`);
  const c = entry.country ? countryBySlug(entry.country) : undefined;
  const t = topic.tech ? techBySlug(topic.tech) : undefined;
  const where = c ? c.name : 'USA & global markets';
  const inWhere = c ? `in ${c.name}` : '';
  const demand = c ? c.demand : 'AI/ML, GenAI, cloud, DevOps, data and enterprise roles across USA and global markets';
  const style = c ? c.hiringStyle : 'multi-round loops with coding, system design and behavioral rounds';

  const sections: ContentSection[] = [
    {
      h2: `The ${topic.label} job market ${inWhere}`.trim(),
      paras: [
        c ? `${c.angle} ${demand}` : `${topic.label} is one of 2026’s highest-demand skill areas. ${demand}.`,
        topic.key === 'higher-paying' ? 'Higher-paying roles cluster in AI/ML, GenAI, MLOps, Cloud, DevOps, SRE, Data Engineering and Security — they pay a premium because talent is scarce and interviews are demanding.' : `Employers hiring for ${topic.label} look for candidates who can prove real, current skills — not just keywords.`,
      ],
    },
    {
      h2: `Step 1 — Build a profile that helps you compete for ${topic.jobs}`,
      paras: [`Most candidates are filtered out before a human reads the CV. Engineer an ATS-ready, JD-aligned profile that positions your real ${topic.label} experience for ${where}.`],
      bullets: ['ATS-ready CV with the right keywords', 'LinkedIn optimized for recruiter search', `${topic.label} project story and technology timeline`, 'Honest positioning of your real experience'],
    },
    {
      h2: 'Step 2 — Get found and attract recruiter calls',
      paras: [`A great profile no one sees stays silent. Consistent recruiter and vendor outreach plus job-board strategy${c ? ` (${c.channels})` : ''} works to turn visibility into interview calls.`],
      bullets: ['Recruiter and vendor outreach', 'Daily, targeted applications', 'JD-fit improvements to match more searches', 'Follow-ups that convert leads to interviews'],
    },
    {
      h2: `Step 3 — Clear the ${topic.label} interviews`,
      paras: [`${topic.label} interviews ${inWhere ? `in ${c!.name} ` : ''}run as ${style}. Prepare round-wise — and get real-time proxy interview support for the areas you’re unsure about.`],
      bullets: t ? [`What ${t.name} interviews test: ${t.interviewFocus}`, 'JD-based mapping and mock interviews', 'Coding, system design and client-round preparation'] : ['JD-based mapping and mock interviews', 'Coding, system design and behavioral prep', 'Round-wise, real-time support'],
    },
    {
      h2: 'Step 4 — Prepare for the offer stage and deliver on the job',
      paras: [`Winning an offer is only part of the journey — delivering once you join is the other part. After you start, real-time proxy job support helps you deliver ${topic.label} work from day one.`],
    },
    { h2: 'Who this is for', paras: ['Candidates targeting this field who want a faster, supported path:'], bullets: [`Engineers moving into ${topic.label}${c ? ` roles in ${c.name}` : ''}`, 'Professionals whose profile isn’t getting calls', 'Anyone who needs interview and on-the-job support', c ? `India-to-${c.name} candidates targeting this market from India` : 'India-to-global candidates targeting these roles from India'] },
    {
      h2: `Our full support funnel for ${topic.label} jobs`,
      paras: ['One team covers every stage — start where you are and we take you the rest of the way:'],
      bullets: services.map((s) => `${s.name} — ${s.kicker.toLowerCase()}`),
    },
    whyUs(`getting ${topic.jobs}${c ? ` in ${c.name}` : ''}`),
  ];

  const faqs: FAQ[] = [
    { q: `How do I get ${topic.jobs}${c ? ` in ${c.name}` : ''} in 2026?`, a: `Build a ${topic.label}-aligned profile, market it to the right recruiters, prepare for the interviews with proxy interview support, and deliver with proxy job support. ${where} demand is strong — the bottleneck is usually profile visibility and interview readiness, both of which we help with.` },
    { q: `Is ${topic.label} in demand${c ? ` in ${c.name}` : ''}?`, a: `Yes. ${demand}.` },
    { q: 'Can you help me switch into this field?', a: `Yes — we position and strengthen your real experience for ${topic.label}, prepare you for its interviews, and support you on the job. We never fabricate experience.` },
    { q: c ? `Can I target ${c.name} roles from India?` : 'Do you cover markets outside India?', a: c ? `Yes — India-to-${c.name} support aligned to ${c.timezone}, including night shifts.` : 'Yes — USA (center market), Canada, UK, Europe, Australia, Singapore, Japan, New Zealand, the Gulf and India.' },
  ];

  // Full services funnel + contextual links on every how-to-get page.
  const related: RelatedLink[] = [
    ...coreServiceLinks, // all 7 core services in funnel order
    { label: 'Get Interview Scheduled', href: '/get-interview-scheduled' },
    ...(t ? [
      { label: `${t.name} Proxy Interview Support`, href: `/${t.slug}-proxy-interview-support` },
      { label: `${t.name} Proxy Job Support`, href: `/${t.slug}-proxy-job-support` },
    ] : [{ label: 'High-Paying IT Roles', href: '/high-paying-it-roles' }]),
    ...(c ? [{ label: `${c.name} IT Proxy Support`, href: `/countries/${c.slug}` }] : []),
    { label: 'Real Interview Questions', href: '/real-interview-questions' },
    { label: 'Contact on WhatsApp', href: '/contact' },
  ].filter((v, i, a) => a.findIndex((x) => x.href === v.href) === i);

  const gLabel = c ? `${topic.label} Jobs in ${c.name}` : `${topic.label} Jobs`;
  return {
    title: `How to Get ${topic.label} Jobs${c ? ` in ${c.name}` : ''} in 2026 | ${BRAND}`,
    description: `How to get ${topic.jobs}${c ? ` in ${c.name}` : ''} in 2026: build an ATS profile, attract recruiter calls, prepare for interviews with proxy interview support, and deliver with proxy job support.`,
    h1: `How to Get ${topic.label} Jobs${c ? ` in ${c.name}` : ''} in 2026`,
    kicker: c ? `Career guide · ${c.name}` : 'Career guide · 2026',
    intro: `Want ${topic.jobs}${c ? ` in ${c.name}` : ''}? This 2026 guide walks the full path — profile, recruiter calls, interviews and on-the-job delivery — and how Proxy Support India supports each step. ${c ? c.angle : ''}`.trim(),
    sections,
    faqs,
    related,
    primaryCta: 'moreCalls',
    breadcrumb: [home, { label: 'How to Get IT Jobs', href: '/how-to-get-it-jobs' }, { label: gLabel, href: `/${entry.slug}` }],
    schemaType: 'Article',
  };
}

export function buildContent(entry: PageEntry): PageContent {
  switch (entry.kind) {
    case 'service': return buildService(entry);
    case 'service-country': return buildServiceCountry(entry);
    case 'tech-interview':
    case 'tech-job': return buildTech(entry);
    case 'tech-country': return buildTechCountry(entry);
    case 'india-to-global': return buildIndiaToGlobal(entry);
    case 'city': return buildCity(entry);
    case 'tech-city': return buildTechCity(entry);
    case 'how-to-get': return buildHowToGet(entry);
    case 'fde': return buildFde(entry);
  }
}
