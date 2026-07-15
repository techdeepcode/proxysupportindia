// ============================================================
// "How to get {X} jobs in {country}" cluster — high-intent guides
// for 2026 trending technologies × markets, plus higher-paying roles.
// Funnel-connected: profile → calls → interview → job support.
// ============================================================
export interface HowToTopic {
  key: string;      // unique key
  slug: string;     // slug fragment (e.g. "ai-ml-jobs" or "higher-paying-roles")
  label: string;    // display label
  jobs: string;     // phrase for "get X" (e.g. "AI/ML jobs")
  tech?: string;    // technology slug (for cross-links + demand text)
}

export const howToGetTopics: HowToTopic[] = [
  { key: 'ai-ml', slug: 'ai-ml-jobs', label: 'AI/ML', jobs: 'AI/ML jobs', tech: 'ai-ml' },
  { key: 'genai', slug: 'genai-jobs', label: 'GenAI', jobs: 'GenAI jobs', tech: 'genai' },
  { key: 'mlops', slug: 'mlops-jobs', label: 'MLOps', jobs: 'MLOps jobs', tech: 'mlops' },
  { key: 'data-engineering', slug: 'data-engineering-jobs', label: 'Data Engineering', jobs: 'data engineering jobs', tech: 'data-engineering' },
  { key: 'data-science', slug: 'data-science-jobs', label: 'Data Science', jobs: 'data science jobs', tech: 'data-science' },
  { key: 'devops', slug: 'devops-jobs', label: 'DevOps', jobs: 'DevOps jobs', tech: 'devops' },
  { key: 'cloud', slug: 'cloud-jobs', label: 'Cloud', jobs: 'cloud jobs', tech: 'cloud-engineering' },
  { key: 'aws', slug: 'aws-jobs', label: 'AWS', jobs: 'AWS jobs', tech: 'aws' },
  { key: 'azure', slug: 'azure-jobs', label: 'Azure', jobs: 'Azure jobs', tech: 'azure' },
  { key: 'kubernetes', slug: 'kubernetes-jobs', label: 'Kubernetes', jobs: 'Kubernetes jobs', tech: 'kubernetes' },
  { key: 'cybersecurity', slug: 'cybersecurity-jobs', label: 'Cybersecurity', jobs: 'cybersecurity jobs', tech: 'cybersecurity' },
  { key: 'sre', slug: 'sre-jobs', label: 'SRE', jobs: 'SRE jobs', tech: 'sre' },
  { key: 'java', slug: 'java-jobs', label: 'Java', jobs: 'Java jobs', tech: 'java' },
  { key: 'dotnet', slug: 'dotnet-jobs', label: '.NET', jobs: '.NET jobs', tech: 'dotnet' },
  { key: 'full-stack', slug: 'full-stack-jobs', label: 'Full-Stack', jobs: 'full-stack jobs', tech: 'full-stack' },
  { key: 'fde', slug: 'forward-deployed-engineer-jobs', label: 'Forward Deployed Engineer', jobs: 'Forward Deployed Engineer jobs', tech: 'forward-deployed-engineer' },
  { key: 'higher-paying', slug: 'higher-paying-roles', label: 'Higher-Paying IT Roles', jobs: 'higher-paying IT roles' },
];

// Markets this cluster covers (USA-first).
export const howToGetMarkets = ['usa', 'canada', 'uk', 'europe', 'australia', 'singapore', 'japan', 'new-zealand', 'uae', 'india'];

export const howToTopicBySlug = (slug: string) => howToGetTopics.find((t) => t.slug === slug);
