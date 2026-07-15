// ============================================================
// Local SEO market data (qualitative only — no fabricated stats,
// salaries or success rates). Complements countries.ts with the
// job-board, currency and region context used on local pages.
// Keyed by country slug (see countries.ts).
// ============================================================
export interface LocalMarket {
  currency: string;
  region: string;
  jobBoards: string[];        // where recruiters/candidates operate
  remoteAngle: string;        // remote / time-zone support angle
}

export const localMarkets: Record<string, LocalMarket> = {
  usa: { currency: 'USD', region: 'North America', jobBoards: ['LinkedIn', 'Dice', 'Indeed', 'Monster'], remoteAngle: 'Remote-first and onsite roles across EST/CST/MST/PST, with strong C2C/W2 vendor demand.' },
  canada: { currency: 'CAD', region: 'North America', jobBoards: ['LinkedIn', 'Indeed Canada', 'Monster Canada', 'Workopolis'], remoteAngle: 'Remote and hybrid roles across EST/PST, often tied to PR timelines.' },
  uk: { currency: 'GBP', region: 'Europe', jobBoards: ['LinkedIn', 'Reed', 'Totaljobs', 'CWJobs', 'Indeed UK'], remoteAngle: 'Permanent and contract roles (inside/outside IR35 context) across GMT/BST.' },
  europe: { currency: 'EUR', region: 'Europe', jobBoards: ['LinkedIn', 'StepStone', 'local EU boards'], remoteAngle: 'English-first, relocation-ready roles across CET, with Blue Card sponsorship.' },
  australia: { currency: 'AUD', region: 'APAC', jobBoards: ['LinkedIn', 'Seek', 'Indeed Australia'], remoteAngle: 'Skills-shortage-driven roles across AEST, with employer sponsorship.' },
  singapore: { currency: 'SGD', region: 'APAC', jobBoards: ['LinkedIn', 'JobStreet', 'MyCareersFuture'], remoteAngle: 'Fast APAC-HQ hiring across SGT for banking, cloud, data and AI.' },
  japan: { currency: 'JPY', region: 'APAC', jobBoards: ['LinkedIn', 'BizReach', 'Daijob', 'Japan-Dev'], remoteAngle: 'Bilingual/global-team roles across JST for cloud, AI, data and DevOps.' },
  'new-zealand': { currency: 'NZD', region: 'APAC', jobBoards: ['LinkedIn', 'Seek NZ', 'Trade Me Jobs'], remoteAngle: 'Accredited-employer roles across NZST for cloud, full-stack and data.' },
  uae: { currency: 'AED', region: 'Gulf', jobBoards: ['LinkedIn', 'GulfTalent', 'Bayt', 'Naukrigulf'], remoteAngle: 'Delivery-ready roles across GST for cloud, cybersecurity, SAP and ERP.' },
  'saudi-arabia': { currency: 'SAR', region: 'Gulf', jobBoards: ['LinkedIn', 'Bayt', 'GulfTalent'], remoteAngle: 'Vision 2030 enterprise programs across AST for cloud, SAP and data.' },
  germany: { currency: 'EUR', region: 'Europe', jobBoards: ['LinkedIn', 'StepStone', 'Xing'], remoteAngle: 'Engineering-depth roles across CET with EU Blue Card sponsorship.' },
  ireland: { currency: 'EUR', region: 'Europe', jobBoards: ['LinkedIn', 'IrishJobs'], remoteAngle: 'Big-tech EU-HQ roles across GMT/IST with Critical Skills permits.' },
  netherlands: { currency: 'EUR', region: 'Europe', jobBoards: ['LinkedIn', 'local boards'], remoteAngle: 'English-first, knowledge-migrant roles across CET with the 30% ruling.' },
  france: { currency: 'EUR', region: 'Europe', jobBoards: ['LinkedIn', 'Welcome to the Jungle', 'APEC'], remoteAngle: 'Structured, increasingly English-first roles across CET with Talent Passport.' },
  sweden: { currency: 'SEK', region: 'Europe', jobBoards: ['LinkedIn', 'The Local'], remoteAngle: 'Product-led roles across CET with skilled-worker permits.' },
  switzerland: { currency: 'CHF', region: 'Europe', jobBoards: ['LinkedIn', 'jobs.ch'], remoteAngle: 'High-comp banking/pharma roles across CET with B/L permits.' },
  'hong-kong': { currency: 'HKD', region: 'APAC', jobBoards: ['LinkedIn', 'JobsDB'], remoteAngle: 'Finance/fintech-led roles across HKT with Top Talent Pass.' },
  india: { currency: 'INR', region: 'India', jobBoards: ['LinkedIn', 'Naukri', 'Indeed India', 'Instahyre', 'Hirist'], remoteAngle: 'India-domestic plus India-to-USA/global support across IST, incl. night shift.' },
};

export const localMarketFor = (slug: string): LocalMarket | undefined => localMarkets[slug];
