// ============================================================
// Page registry — enumerates every dynamically generated page as
// a lightweight descriptor. Content is built at render time from
// these params (see src/lib/content.ts), so this stays small and
// avoids duplicate-content doorway pages by de-duping slugs.
// ============================================================
import { services } from './services';
import { scenarios } from './scenarios';
import { countries } from './countries';
import { technologies, tier1Techs } from './technologies';
import { cities } from './cities';
import { howToGetTopics, howToGetMarkets } from './howToGet';

export type PageKind =
  | 'service'            // core service (7) + scenarios
  | 'service-country'    // service × country
  | 'tech-interview'     // technology proxy interview support
  | 'tech-job'           // technology proxy job support
  | 'tech-country'       // technology × country (interview/job)
  | 'india-to-global'    // india-to-{country} interview/job + remote/timezone
  | 'city'               // city proxy interview/job support
  | 'tech-city'          // technology × city (selected)
  | 'how-to-get'         // "how to get {X} jobs in {country}"
  | 'fde';               // Forward Deployed Engineer cluster

export interface PageEntry {
  slug: string;          // no leading slash
  kind: PageKind;
  service?: string;
  scenario?: string;
  tech?: string;
  country?: string;
  city?: string;
  mode?: 'interview' | 'job';
  special?: string;      // for india-to-global remote/timezone pages
  howTo?: string;        // how-to-get topic slug
  priority: number;
}

// Country-variant slug base per service (controls the {base}-{country} slug).
const countryBase: Record<string, string> = {
  'proxy-interview-support': 'proxy-interview-support',
  'proxy-job-support': 'proxy-job-support',
  'profile-engineering': 'profile-engineering',
  'profile-marketing': 'profile-marketing',
  'profile-managing': 'profile-managing',
  'get-more-recruiter-calls': 'get-more-recruiter-calls',
  'end-to-end-it-career-proxy-support': 'end-to-end-proxy-support',
  'get-interview-scheduled': 'get-interview-scheduled',
};

// Markets that get technology × country variants for flagship techs.
const techVariantMarkets = ['canada', 'uk', 'europe', 'australia', 'singapore', 'japan', 'new-zealand', 'india'];
const flagshipTechs = ['ai-ml', 'genai', 'devops', 'java', 'dotnet', 'python', 'aws', 'workday', 'uipath', 'data-engineering'];

// India-to-global target markets (explicit per CLAUDE spec).
const indiaToGlobalMarkets = ['usa', 'canada', 'uk', 'europe', 'australia', 'singapore', 'japan', 'new-zealand'];
// Special India-to-global scenario pages.
const indiaToGlobalSpecials = [
  { slug: 'india-to-gulf-proxy-job-support', special: 'gulf-job' },
  { slug: 'remote-job-support-from-india', special: 'remote' },
  { slug: 'usa-time-zone-proxy-job-support-from-india', special: 'tz-usa' },
  { slug: 'canada-time-zone-proxy-job-support-from-india', special: 'tz-canada' },
  { slug: 'uk-time-zone-proxy-job-support-from-india', special: 'tz-uk' },
  { slug: 'night-shift-proxy-job-support-from-india', special: 'night-shift' },
];

export function getAllPages(): PageEntry[] {
  const pages: PageEntry[] = [];
  const seen = new Set<string>();
  const add = (p: PageEntry) => {
    if (seen.has(p.slug)) return;
    seen.add(p.slug);
    pages.push(p);
  };

  // 1) Core service pages + scenario pages
  for (const s of services) add({ slug: s.slug, kind: 'service', service: s.slug, priority: 0.9 });
  for (const s of scenarios) add({ slug: s.slug, kind: 'service', scenario: s.slug, priority: 0.75 });

  // 2) Service × Country variants
  const countryVariantServices = [
    ...services.filter((s) => s.supportsCountryVariants).map((s) => s.slug),
    'get-interview-scheduled',
  ];
  for (const svc of countryVariantServices) {
    const base = countryBase[svc];
    if (!base) continue;
    for (const c of countries) {
      add({
        slug: `${base}-${c.slug}`,
        kind: 'service-country',
        service: svc,
        country: c.slug,
        priority: c.center ? 0.9 : 0.7,
      });
    }
  }

  // 3) Technology proxy interview / job pages
  for (const t of technologies) {
    if (t.interview) add({ slug: `${t.slug}-proxy-interview-support`, kind: 'tech-interview', tech: t.slug, mode: 'interview', priority: t.tier === 1 ? 0.8 : 0.65 });
    if (t.job) add({ slug: `${t.slug}-proxy-job-support`, kind: 'tech-job', tech: t.slug, mode: 'job', priority: t.tier === 1 ? 0.8 : 0.65 });
  }

  // 4) Technology × Country — all tier-1 techs for USA, flagships for wider markets
  for (const t of tier1Techs) {
    for (const mode of ['interview', 'job'] as const) {
      if (mode === 'interview' && !t.interview) continue;
      if (mode === 'job' && !t.job) continue;
      const base = mode === 'interview' ? 'proxy-interview-support' : 'proxy-job-support';
      // USA always
      add({ slug: `${t.slug}-${base}-usa`, kind: 'tech-country', tech: t.slug, country: 'usa', mode, priority: 0.7 });
      // flagship techs across more markets
      if (flagshipTechs.includes(t.slug)) {
        for (const m of techVariantMarkets) {
          add({ slug: `${t.slug}-${base}-${m}`, kind: 'tech-country', tech: t.slug, country: m, mode, priority: 0.6 });
        }
      }
    }
  }

  // 5) India-to-global
  for (const m of indiaToGlobalMarkets) {
    add({ slug: `india-to-${m}-proxy-interview-support`, kind: 'india-to-global', country: m, mode: 'interview', priority: 0.75 });
    add({ slug: `india-to-${m}-proxy-job-support`, kind: 'india-to-global', country: m, mode: 'job', priority: 0.75 });
  }
  for (const sp of indiaToGlobalSpecials) {
    add({ slug: sp.slug, kind: 'india-to-global', special: sp.special, mode: 'job', priority: 0.7 });
  }

  // 6) City pages (interview + job for each city)
  for (const c of cities) {
    add({ slug: `${c.slug}-proxy-interview-support`, kind: 'city', city: c.slug, mode: 'interview', priority: 0.6 });
    add({ slug: `${c.slug}-proxy-job-support`, kind: 'city', city: c.slug, mode: 'job', priority: 0.6 });
  }

  // 6b) Selected technology × city pages (curated, unique local context)
  const selectedTechCities: Array<[string, string, 'interview' | 'job']> = [
    ['ai-ml', 'new-york', 'interview'], ['ai-ml', 'san-francisco', 'job'], ['genai', 'san-jose', 'job'],
    ['devops', 'dallas', 'job'], ['cloud-engineering', 'seattle', 'interview'], ['cybersecurity', 'washington-dc', 'job'],
    ['workday', 'dallas', 'job'], ['uipath', 'toronto', 'interview'], ['java', 'london', 'job'],
    ['dotnet', 'sydney', 'job'], ['ai-ml', 'singapore-city', 'job'], ['devops', 'tokyo', 'interview'],
    ['cloud-engineering', 'auckland', 'job'], ['ai-ml', 'bangalore', 'interview'], ['devops', 'hyderabad', 'job'],
    ['workday', 'pune', 'job'],
  ];
  for (const [tech, city, mode] of selectedTechCities) {
    const base = mode === 'interview' ? 'proxy-interview-support' : 'proxy-job-support';
    add({ slug: `${tech}-${base}-${city}`, kind: 'tech-city', tech, city, mode, priority: 0.55 });
  }

  // 6c) "How to get {X} jobs in {country}" cluster + global variant
  for (const topic of howToGetTopics) {
    add({ slug: `how-to-get-${topic.slug}`, kind: 'how-to-get', howTo: topic.slug, tech: topic.tech, priority: 0.6 });
    for (const m of howToGetMarkets) {
      add({ slug: `how-to-get-${topic.slug}-in-${m}`, kind: 'how-to-get', howTo: topic.slug, tech: topic.tech, country: m, priority: m === 'usa' ? 0.7 : 0.55 });
    }
  }

  // 7) Forward Deployed Engineer (FDE) cluster — interview + job, base + country + city
  const fdeBase = 'forward-deployed-engineer';
  add({ slug: `${fdeBase}-proxy-interview-support`, kind: 'fde', mode: 'interview', priority: 0.8 });
  add({ slug: `${fdeBase}-proxy-job-support`, kind: 'fde', mode: 'job', priority: 0.8 });
  for (const c of countries) {
    add({ slug: `${fdeBase}-proxy-interview-support-${c.slug}`, kind: 'fde', mode: 'interview', country: c.slug, priority: c.center ? 0.75 : 0.6 });
    add({ slug: `${fdeBase}-proxy-job-support-${c.slug}`, kind: 'fde', mode: 'job', country: c.slug, priority: c.center ? 0.75 : 0.6 });
  }
  for (const ct of cities) {
    add({ slug: `${fdeBase}-proxy-interview-support-${ct.slug}`, kind: 'fde', mode: 'interview', city: ct.slug, priority: 0.55 });
    add({ slug: `${fdeBase}-proxy-job-support-${ct.slug}`, kind: 'fde', mode: 'job', city: ct.slug, priority: 0.55 });
  }

  return pages;
}

// Convenience: total count for reporting.
export const allPages = getAllPages();
