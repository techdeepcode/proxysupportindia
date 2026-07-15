// ============================================================
// Market / country data. Each field feeds unique page content
// so no two country pages read the same.
// ============================================================

export interface Country {
  slug: string;        // url token, e.g. "usa"
  name: string;        // "USA"
  adjective: string;   // "US"
  flag: string;
  region: string;
  center?: boolean;    // USA is the default/center market
  timezone: string;
  hiringStyle: string;     // how interviews run in this market
  demand: string;          // what's hot / who is hiring
  channels: string;        // where recruiters & vendors live
  cities: string[];
  angle: string;           // 1-line positioning angle for intros
  visaNote: string;        // relocation / work-auth context
}

export const countries: Country[] = [
  {
    slug: 'usa', name: 'USA', adjective: 'US', flag: '🇺🇸', region: 'North America', center: true,
    timezone: 'EST/CST/PST',
    hiringStyle: 'Multi-round loops with a recruiter screen, one or two technical/coding rounds, a system design round, and a client or hiring-manager round — heavy on STAR-style behavioral answers and live problem solving.',
    demand: 'AI/ML, GenAI, MLOps, DevOps, Cloud (AWS/Azure), Java, .NET, Data Engineering, Workday and UiPath roles dominate US W2 and C2C demand.',
    channels: 'Dice, LinkedIn, Indeed, and a dense vendor/implementation-partner network running C2C requirements.',
    cities: ['New York', 'Dallas', 'Austin', 'Houston', 'Chicago', 'Atlanta', 'Charlotte', 'Seattle', 'San Francisco', 'San Jose', 'Jersey City'],
    angle: 'The center of global IT hiring — highest volume of remote and onsite requirements and the most structured interview loops.',
    visaNote: 'H1B, GC, USC and OPT/CPT candidates plus C2C consultants working through vendors.',
  },
  {
    slug: 'canada', name: 'Canada', adjective: 'Canadian', flag: '🇨🇦', region: 'North America',
    timezone: 'EST/PST',
    hiringStyle: 'Communication-forward technical rounds, practical coding, and culture-fit conversations, often tied to Express Entry / PR timelines.',
    demand: 'Cloud, DevOps, full-stack, data and Workday roles across Toronto and Vancouver tech hubs and banks.',
    channels: 'LinkedIn, Indeed Canada, and staffing agencies feeding BFSI and product companies.',
    cities: ['Toronto', 'Vancouver', 'Calgary', 'Montreal', 'Ottawa'],
    angle: 'Immigration-linked hiring where clear communication and PR-aligned planning matter as much as the tech round.',
    visaNote: 'PR, work permit, and Express Entry candidates targeting Canadian employers.',
  },
  {
    slug: 'uk', name: 'UK', adjective: 'UK', flag: '🇬🇧', region: 'Europe',
    timezone: 'GMT/BST',
    hiringStyle: 'Competency-based interviewing plus technical deep-dives, favouring structured, evidence-backed answers.',
    demand: 'Cloud, cybersecurity, Java/Spring, .NET, data and SAP roles across London and regional hubs.',
    channels: 'LinkedIn, Reed, CV-Library and sponsor-licence employers plus umbrella/agency contracts.',
    cities: ['London', 'Manchester', 'Birmingham', 'Leeds', 'Glasgow'],
    angle: 'Sponsor-licence and contract-heavy market that rewards competency-based, well-structured interview answers.',
    visaNote: 'Skilled Worker visa (sponsor licence), Global Talent, and inside/outside IR35 contractors.',
  },
  {
    slug: 'europe', name: 'Europe', adjective: 'European', flag: '🇪🇺', region: 'Europe',
    timezone: 'CET',
    hiringStyle: 'Portfolio and practical-assessment emphasis, often with take-home tasks and multi-stage panels across English-first hubs.',
    demand: 'Cloud-native engineering, data, AI/ML and SAP across Germany, Netherlands, Ireland, France, Sweden and Switzerland.',
    channels: 'LinkedIn, StepStone, local job boards and EU Blue Card sponsoring employers.',
    cities: ['Berlin', 'Amsterdam', 'Dublin', 'Paris', 'Stockholm', 'Zurich'],
    angle: 'English-first EU hubs with relocation-ready roles and practical, portfolio-driven assessments.',
    visaNote: 'EU Blue Card, national work permits, and relocation packages for skilled engineers.',
  },
  {
    slug: 'australia', name: 'Australia', adjective: 'Australian', flag: '🇦🇺', region: 'APAC',
    timezone: 'AEST',
    hiringStyle: 'Practical assessments plus culture-fit rounds, with an emphasis on delivery experience and clear communication.',
    demand: 'Cloud, DevOps, data, cybersecurity and full-stack roles on the skills-shortage lists across Sydney and Melbourne.',
    channels: 'Seek, LinkedIn and recruitment agencies feeding banks, telcos and government.',
    cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth'],
    angle: 'Skills-shortage-driven demand where accredited sponsors hire delivery-ready engineers.',
    visaNote: 'Skills-assessment, employer-sponsored (subclass 482/186) and PR candidates.',
  },
  {
    slug: 'singapore', name: 'Singapore', adjective: 'Singapore', flag: '🇸🇬', region: 'APAC',
    timezone: 'SGT',
    hiringStyle: 'Compressed, fast-moving loops that test strong fundamentals and the ability to deliver in fintech-grade environments.',
    demand: 'Cloud, data, AI/ML, backend and cybersecurity roles across banking and APAC regional HQs.',
    channels: 'LinkedIn, JobStreet, MyCareersFuture and specialist tech recruiters.',
    cities: ['Singapore'],
    angle: 'APAC financial hub with fast decision cycles and a premium on rock-solid fundamentals.',
    visaNote: 'Employment Pass (EP) and S Pass candidates targeting regional HQ roles.',
  },
  {
    slug: 'japan', name: 'Japan', adjective: 'Japanese', flag: '🇯🇵', region: 'APAC',
    timezone: 'JST',
    hiringStyle: 'Structured, respectful rounds mixing technical evaluation with alignment and long-term fit, increasingly in English-first global teams.',
    demand: 'Cloud, backend, data and SRE roles across global product companies and gaming/fintech in Tokyo and Osaka.',
    channels: 'LinkedIn, Japan-Dev, bilingual tech recruiters and global-team hiring pipelines.',
    cities: ['Tokyo', 'Osaka'],
    angle: 'Growing English-first engineering market with structured, alignment-focused interviews.',
    visaNote: 'Engineer/Specialist in Humanities work visa and Highly Skilled Professional route.',
  },
  {
    slug: 'new-zealand', name: 'New Zealand', adjective: 'New Zealand', flag: '🇳🇿', region: 'APAC',
    timezone: 'NZST',
    hiringStyle: 'Culture-fit plus practical technical rounds, valuing clear communication and delivery ownership.',
    demand: 'Cloud, full-stack, data and DevOps roles across Auckland and Wellington.',
    channels: 'Seek, LinkedIn and accredited-employer recruitment channels.',
    cities: ['Auckland', 'Wellington'],
    angle: 'Accredited-employer market with quality-of-life appeal and practical interview rounds.',
    visaNote: 'Accredited Employer Work Visa (AEWV) and skilled migrant pathway.',
  },
  {
    slug: 'uae', name: 'UAE', adjective: 'UAE', flag: '🇦🇪', region: 'Gulf',
    timezone: 'GST',
    hiringStyle: 'Client-facing, delivery-readiness rounds focused on hands-on experience and the ability to hit the ground running.',
    demand: 'Cloud, data, cybersecurity, SAP and enterprise app roles across Dubai and Abu Dhabi digital programs.',
    channels: 'LinkedIn, Bayt, Naukri Gulf and consulting/system-integrator hiring.',
    cities: ['Dubai', 'Abu Dhabi'],
    angle: 'Fast-growing Gulf tech sector hiring delivery-ready consultants for enterprise programs.',
    visaNote: 'Employment visa (company-sponsored) and Golden Visa for specialists.',
  },
  {
    slug: 'saudi-arabia', name: 'Saudi Arabia', adjective: 'Saudi', flag: '🇸🇦', region: 'Gulf',
    timezone: 'AST',
    hiringStyle: 'Enterprise-stack and delivery-experience focus tied to large national transformation programs.',
    demand: 'Cloud, SAP, data, cybersecurity and enterprise engineering driven by Vision 2030 programs.',
    channels: 'LinkedIn, Bayt and system-integrator / giga-project hiring pipelines.',
    cities: ['Riyadh', 'Jeddah'],
    angle: 'Vision 2030 is funding large enterprise tech programs hungry for experienced engineers.',
    visaNote: 'Company-sponsored work (Iqama) roles on national programs.',
  },
  {
    slug: 'germany', name: 'Germany', adjective: 'German', flag: '🇩🇪', region: 'Europe',
    timezone: 'CET',
    hiringStyle: 'Deep, methodical technical rounds that reward engineering depth and structured problem solving.',
    demand: 'Cloud-native, Java, data, SAP and automotive-software roles across Berlin, Munich and Frankfurt.',
    channels: 'LinkedIn, StepStone, Xing and EU Blue Card sponsoring employers.',
    cities: ['Berlin', 'Munich', 'Frankfurt'],
    angle: 'Engineering-depth culture where thorough, well-reasoned technical answers win.',
    visaNote: 'EU Blue Card and skilled-worker visa for engineers.',
  },
  {
    slug: 'ireland', name: 'Ireland', adjective: 'Irish', flag: '🇮🇪', region: 'Europe',
    timezone: 'GMT/IST',
    hiringStyle: 'Product-company interview loops similar to US big-tech, run from an EU base.',
    demand: 'Cloud, data, AI/ML and backend roles at the EU HQs of major product companies in Dublin.',
    channels: 'LinkedIn, IrishJobs and big-tech referral pipelines.',
    cities: ['Dublin', 'Cork'],
    angle: 'EU headquarters of global product companies — big-tech style loops from Europe.',
    visaNote: 'Critical Skills Employment Permit and General Employment Permit.',
  },
  {
    slug: 'netherlands', name: 'Netherlands', adjective: 'Dutch', flag: '🇳🇱', region: 'Europe',
    timezone: 'CET',
    hiringStyle: 'Pragmatic, English-first rounds with practical assessments and direct, honest conversations.',
    demand: 'Cloud, data, full-stack and platform-engineering roles across Amsterdam and Eindhoven.',
    channels: 'LinkedIn, local boards and the 30% ruling knowledge-migrant pipeline.',
    cities: ['Amsterdam', 'Rotterdam', 'Eindhoven'],
    angle: 'English-first, knowledge-migrant friendly hub with practical, direct interviews.',
    visaNote: 'Highly Skilled Migrant permit with the 30% ruling advantage.',
  },
  {
    slug: 'france', name: 'France', adjective: 'French', flag: '🇫🇷', region: 'Europe',
    timezone: 'CET',
    hiringStyle: 'Structured rounds blending technical depth with clear reasoning, increasingly English-first in tech hubs.',
    demand: 'Cloud, data, AI/ML and backend roles across Paris tech and enterprise.',
    channels: 'LinkedIn, Welcome to the Jungle and APEC/agency channels.',
    cities: ['Paris', 'Lyon'],
    angle: 'Growing English-first tech scene with structured, reasoning-heavy interviews.',
    visaNote: 'Talent Passport (Passeport Talent) for skilled workers.',
  },
  {
    slug: 'sweden', name: 'Sweden', adjective: 'Swedish', flag: '🇸🇪', region: 'Europe',
    timezone: 'CET',
    hiringStyle: 'Collaborative, values-driven rounds with practical assessments and team-fit emphasis.',
    demand: 'Cloud, data, full-stack and product-engineering roles across Stockholm.',
    channels: 'LinkedIn, The Local and startup/product hiring pipelines.',
    cities: ['Stockholm', 'Gothenburg'],
    angle: 'Collaborative, product-led market that values team fit alongside strong engineering.',
    visaNote: 'Work permit for skilled workers with relocation support.',
  },
  {
    slug: 'switzerland', name: 'Switzerland', adjective: 'Swiss', flag: '🇨🇭', region: 'Europe',
    timezone: 'CET',
    hiringStyle: 'Rigorous, quality-first technical rounds for high-compensation roles in banking and pharma-tech.',
    demand: 'Cloud, data, backend and quant/fintech engineering across Zurich and Geneva.',
    channels: 'LinkedIn, jobs.ch and specialist recruiters for banking/pharma.',
    cities: ['Zurich', 'Geneva'],
    angle: 'High-compensation, quality-first market in banking and pharma technology.',
    visaNote: 'Work/residence permit (B/L) for qualified specialists.',
  },
  {
    slug: 'hong-kong', name: 'Hong Kong', adjective: 'Hong Kong', flag: '🇭🇰', region: 'APAC',
    timezone: 'HKT',
    hiringStyle: 'Fintech-domain plus hybrid technical rounds run at a fast pace.',
    demand: 'Cloud, data, backend and fintech engineering across banking and trading firms.',
    channels: 'LinkedIn, JobsDB and finance-sector recruiters.',
    cities: ['Hong Kong'],
    angle: 'Finance and fintech-led hiring with fast-paced, domain-aware panels.',
    visaNote: 'Employment visa and Top Talent Pass Scheme.',
  },
  {
    slug: 'india', name: 'India', adjective: 'Indian', flag: '🇮🇳', region: 'India',
    timezone: 'IST',
    hiringStyle: 'DSA-heavy coding rounds, system design and managerial rounds across product companies, GCCs and services firms.',
    demand: 'AI/ML, GenAI, cloud, DevOps, data, Java, .NET and full-stack roles across product companies and global capability centers.',
    channels: 'Naukri, LinkedIn, Instahyre, Cutshort and GCC referral pipelines.',
    cities: ['Bangalore', 'Hyderabad', 'Pune', 'Chennai', 'Delhi NCR', 'Noida', 'Gurgaon', 'Mumbai'],
    angle: 'Competitive product/GCC hiring that is DSA-heavy and increasingly system-design focused.',
    visaNote: 'Domestic hiring plus GCCs building global-facing teams.',
  },
];

export const countryBySlug = (slug: string) => countries.find((c) => c.slug === slug);
export const marketNames = countries.map((c) => c.name);

// ISO-2 codes for flag images. Emoji flags don't render on Windows, so we
// serve small flag PNGs (flagcdn) for reliable, cross-platform country icons.
export const isoCode: Record<string, string> = {
  usa: 'us', canada: 'ca', uk: 'gb', europe: 'eu', australia: 'au', singapore: 'sg', japan: 'jp',
  'new-zealand': 'nz', uae: 'ae', 'saudi-arabia': 'sa', germany: 'de', ireland: 'ie', netherlands: 'nl',
  france: 'fr', sweden: 'se', switzerland: 'ch', 'hong-kong': 'hk', india: 'in',
};
export const flagUrl = (slug: string, w: 32 | 20 | 40 = 32) =>
  `https://flagcdn.com/${w}x${Math.round((w * 3) / 4)}/${isoCode[slug] ?? 'un'}.png`;

// In-demand technology slugs per market — rendered as links in the market
// selector. Slugs must exist in technologies.ts (they all have interview + job pages).
export const demandTechs: Record<string, string[]> = {
  usa: ['ai-ml', 'genai', 'mlops', 'devops', 'aws', 'azure', 'java', 'dotnet', 'data-engineering', 'workday', 'uipath'],
  canada: ['cloud-engineering', 'devops', 'full-stack', 'data-engineering', 'workday', 'aws'],
  uk: ['cloud-engineering', 'cybersecurity', 'java', 'dotnet', 'data-engineering', 'sap'],
  europe: ['cloud-engineering', 'data-engineering', 'ai-ml', 'sap', 'java', 'kubernetes'],
  australia: ['cloud-engineering', 'devops', 'data-engineering', 'cybersecurity', 'full-stack', 'aws'],
  singapore: ['cloud-engineering', 'data-engineering', 'ai-ml', 'java', 'cybersecurity', 'backend-engineering'],
  japan: ['cloud-engineering', 'backend-engineering', 'data-engineering', 'sre', 'java', 'kubernetes'],
  'new-zealand': ['cloud-engineering', 'full-stack', 'data-engineering', 'devops', 'java', 'aws'],
  uae: ['cloud-engineering', 'data-engineering', 'cybersecurity', 'sap', 'salesforce', 'devops'],
  'saudi-arabia': ['cloud-engineering', 'sap', 'data-engineering', 'cybersecurity', 'devops', 'servicenow'],
  germany: ['cloud-engineering', 'java', 'data-engineering', 'sap', 'kubernetes', 'devops'],
  ireland: ['cloud-engineering', 'data-engineering', 'ai-ml', 'backend-engineering', 'aws', 'java'],
  netherlands: ['cloud-engineering', 'data-engineering', 'full-stack', 'devops', 'java', 'kubernetes'],
  france: ['cloud-engineering', 'data-engineering', 'ai-ml', 'java', 'backend-engineering', 'devops'],
  sweden: ['cloud-engineering', 'data-engineering', 'full-stack', 'backend-engineering', 'java', 'devops'],
  switzerland: ['cloud-engineering', 'data-engineering', 'java', 'backend-engineering', 'cybersecurity', 'devops'],
  'hong-kong': ['cloud-engineering', 'data-engineering', 'backend-engineering', 'java', 'cybersecurity', 'devops'],
  india: ['ai-ml', 'genai', 'devops', 'cloud-engineering', 'data-engineering', 'java', 'dotnet', 'full-stack'],
};
