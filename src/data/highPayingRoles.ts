// ============================================================
// High-paying, trending IT roles (2026). Each maps to a tech
// with existing proxy interview + job support pages, so the
// section and hub page funnel into real pages (no duplicate).
// ============================================================
export interface HighRole {
  tech: string;    // technology slug
  role: string;    // role title
  blurb: string;   // why it pays / who hires
  salaryUSA: string; // typical USA base salary range (USD)
}

// Typical USA-market BASE salary ranges (USD). Indicative only — actual pay
// varies by experience, company, city and total-comp (bonus/equity).
export const salaryNote =
  'Indicative USA base salary ranges (USD) based on published 2026 market benchmarks. Actual compensation depends on your experience, employer, city and total compensation (bonus/equity). These figures are informational market data only — they are not a promised or guaranteed outcome. Proxy Support India does not guarantee salary, employment or job offers.';

export const highPayingRoles: HighRole[] = [
  { tech: 'forward-deployed-engineer', role: 'Forward Deployed Engineer (FDE)', blurb: '2026’s hottest role — customer-facing engineers who deploy AI/data platforms. Rare skills, top pay.', salaryUSA: '$150K–$260K' },
  { tech: 'ai-ml', role: 'AI / ML Engineer', blurb: 'One of the highest-paid tracks — AI talent is scarce and every company is hiring it.', salaryUSA: '$140K–$220K' },
  { tech: 'genai', role: 'GenAI / LLM Engineer', blurb: 'GenAI and RAG skills command a premium as teams race to ship AI features.', salaryUSA: '$150K–$250K' },
  { tech: 'mlops', role: 'MLOps Engineer', blurb: 'Bridging ML and production is rare and well paid — models are worthless until they ship.', salaryUSA: '$140K–$215K' },
  { tech: 'data-engineering', role: 'Data Engineer', blurb: 'Pipelines power every AI initiative; strong, durable demand and compensation.', salaryUSA: '$120K–$185K' },
  { tech: 'devops', role: 'DevOps Engineer', blurb: 'Core to every cloud team — consistently high-paying and always in demand.', salaryUSA: '$120K–$180K' },
  { tech: 'cloud-engineering', role: 'Cloud Engineer', blurb: 'AWS / Azure / GCP expertise is one of the most reliable high-salary paths.', salaryUSA: '$120K–$185K' },
  { tech: 'sre', role: 'Site Reliability Engineer', blurb: 'Reliability engineering is among the best-paid operations roles in the market.', salaryUSA: '$140K–$210K' },
  { tech: 'cloud-security', role: 'Cloud Security Engineer', blurb: 'A global security-talent shortage keeps cybersecurity pay high everywhere.', salaryUSA: '$130K–$205K' },
  { tech: 'kubernetes', role: 'Platform / Kubernetes Engineer', blurb: 'Container and platform skills are premium in cloud-native organizations.', salaryUSA: '$130K–$200K' },
  { tech: 'data-science', role: 'Data Scientist', blurb: 'Analytics plus ML remains one of the most highly compensated skill sets.', salaryUSA: '$120K–$190K' },
  { tech: 'qa-automation', role: 'QA Automation / SDET', blurb: 'Automation SDETs earn well above manual QA — code-first testing is in demand.', salaryUSA: '$100K–$160K' },
  { tech: 'full-stack', role: 'Full-Stack Engineer', blurb: 'Versatile full-stack engineers stay in demand across product and enterprise.', salaryUSA: '$110K–$175K' },
];
