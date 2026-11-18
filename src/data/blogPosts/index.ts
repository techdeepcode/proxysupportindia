// ============================================================
// Bespoke, fully-authored blog posts (rich HTML bodies).
// Every blog post is now a bespoke BlogPost (no generic fallback),
// each with unique, in-depth, service-targeted content.
// Aggregated here and spread into `blogs` in ../blogs.ts.
// ============================================================
import type { BlogPost } from '../blogs';

// --- November 2026 international SEO set (named exports) ---
import { agenticAiUsa2026 } from './agentic-ai-interview-proxy-usa-2026';
import { itJobMarketingUk2026 } from './it-job-marketing-interview-calls-uk-2026';
import { canadaJobMarketing2026 } from './canada-it-job-marketing-linkedin-resume-2026';
import { aiCloudIreland2026 } from './ai-cloud-interview-proxy-ireland-2026';

// --- Proxy Support ---
import { post as proxyInterviewSupportTrends } from './proxy-interview-support-trends';
import { post as proxyJobSupportForItProfessionals } from './proxy-job-support-for-it-professionals';
import { post as endToEndItCareerProxySupportGuide } from './end-to-end-it-career-proxy-support-guide';

// --- India-to-Global ---
import { post as howToGetUsa } from './how-to-get-usa-it-interviews-from-india';
import { post as howToGetCanada } from './how-to-get-canada-it-interviews-from-india';
import { post as howToGetUk } from './how-to-get-uk-it-interviews-from-india';
import { post as howToGetEurope } from './how-to-get-europe-it-interviews-from-india';
import { post as howToGetAustralia } from './how-to-get-australia-it-interviews-from-india';
import { post as howToGetSingapore } from './how-to-get-singapore-it-interviews-from-india';
import { post as howToGetJapan } from './how-to-get-japan-it-interviews-from-india';
import { post as howToGetNewZealand } from './how-to-get-new-zealand-it-interviews-from-india';

// --- Technology ---
import { post as bestTechnologiesForUsaItJobs } from './best-technologies-for-usa-it-jobs';
import { post as aiMlProxyInterviewSupportGuide } from './ai-ml-proxy-interview-support-guide';
import { post as genaiProxyInterviewSupportGuide } from './genai-proxy-interview-support-guide';
import { post as mlopsProxyJobSupportGuide } from './mlops-proxy-job-support-guide';
import { post as devopsCloudProxyJobSupportGuide } from './devops-cloud-proxy-job-support-guide';
import { post as cloudSecuritySreProxySupportGuide } from './cloud-security-sre-proxy-support-guide';
import { post as dataEngineeringProxyJobSupportGuide } from './data-engineering-proxy-job-support-guide';
import { post as workdayProxyJobSupportGuide } from './workday-proxy-job-support-guide';
import { post as uipathRpaProxyJobSupportGuide } from './uipath-rpa-proxy-job-support-guide';

// --- Profile & Recruiter ---
import { post as profileEngineeringForItCandidates } from './profile-engineering-for-it-candidates';
import { post as profileMarketingForItCandidates } from './profile-marketing-for-it-candidates';
import { post as profileManagingForGlobalItJobs } from './profile-managing-for-global-it-jobs';
import { post as jdWiseCvStrategyForRecruiterCalls } from './jd-wise-cv-strategy-for-recruiter-calls';
import { post as recruiterCallsNotComingWhatToFix } from './recruiter-calls-not-coming-what-to-fix';

// --- Career Scenarios ---
import { post as interviewScheduledWhatToDoNext } from './interview-scheduled-what-to-do-next';
import { post as newJobStuckInProjectWork } from './new-job-stuck-in-project-work';
import { post as productionIssuePressureInNewItJob } from './production-issue-pressure-in-new-it-job';
import { post as howToHandleClientCallsInNewItJob } from './how-to-handle-client-calls-in-new-it-job';
import { post as fromProfileToInterviewToJobSupport } from './from-profile-to-interview-to-job-support';

export const blogPosts2026: BlogPost[] = [
  // Nov 2026 international set (kept first; sorting is handled by the hub)
  agenticAiUsa2026,
  itJobMarketingUk2026,
  canadaJobMarketing2026,
  aiCloudIreland2026,
  // Proxy Support
  proxyInterviewSupportTrends,
  proxyJobSupportForItProfessionals,
  endToEndItCareerProxySupportGuide,
  // India-to-Global
  howToGetUsa,
  howToGetCanada,
  howToGetUk,
  howToGetEurope,
  howToGetAustralia,
  howToGetSingapore,
  howToGetJapan,
  howToGetNewZealand,
  // Technology
  bestTechnologiesForUsaItJobs,
  aiMlProxyInterviewSupportGuide,
  genaiProxyInterviewSupportGuide,
  mlopsProxyJobSupportGuide,
  devopsCloudProxyJobSupportGuide,
  cloudSecuritySreProxySupportGuide,
  dataEngineeringProxyJobSupportGuide,
  workdayProxyJobSupportGuide,
  uipathRpaProxyJobSupportGuide,
  // Profile & Recruiter
  profileEngineeringForItCandidates,
  profileMarketingForItCandidates,
  profileManagingForGlobalItJobs,
  jdWiseCvStrategyForRecruiterCalls,
  recruiterCallsNotComingWhatToFix,
  // Career Scenarios
  interviewScheduledWhatToDoNext,
  newJobStuckInProjectWork,
  productionIssuePressureInNewItJob,
  howToHandleClientCallsInNewItJob,
  fromProfileToInterviewToJobSupport,
];
