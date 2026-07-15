You are working inside an existing Astro website for:

ProxySupportIndia.com

The website is already created.
Your task is to safely implement the full SEO cluster system.

DO NOT rebuild the site from scratch.
DO NOT replace the current theme.
DO NOT remove existing homepage sections.
DO NOT delete existing pages.
DO NOT rename existing slugs without permission.
DO NOT overwrite existing content unless safely enriching incomplete pages.
DO NOT create duplicate pages.
DO NOT break existing routing, layout, components, CSS, sitemap, robots, schema, or navigation.

Use existing website code as source of truth for:
- layout
- components
- design
- CSS
- routing pattern
- content system
- SEO system
- schema system
- sitemap system

Reference files:
1. jamun-theme-template.html
   Use only as original theme reference if needed.
   Do not copy content from it.

2. proxytechsupport_sitemap.xml
   Use only to understand ProxyTechSupport cluster/page architecture.
   Do not copy ProxyTechSupport content, titles, headings, meta descriptions, FAQs, blogs, interview answers, CTAs, or examples.

MAIN GOAL:
Extend the existing ProxySupportIndia.com site into a full proxy-heavy SEO cluster website covering:
- proxy interview support
- proxy job support
- profile engineering
- profile marketing
- profile managing
- recruiter calls
- end-to-end IT career proxy support
- technology pages
- country pages
- city pages
- technology-country pages
- technology-city pages
- India-to-global pages
- blog pages
- knowledge base pages
- real interview question pages

BRAND:
Proxy Support India

POSITIONING:
End-to-End IT Career Proxy Support

MAIN FUNNEL:
Profile Problem → Recruiter Calls → Interview Scheduled → Proxy Interview Support → Offer / Joining → Proxy Job Support → End-to-End Support

CORE SERVICE ORDER:
1. Proxy Interview Support
2. Proxy Job Support
3. Profile Engineering
4. Profile Marketing
5. Profile Managing
6. Get More Recruiter Calls
7. End-to-End IT Career Proxy Support

PRIMARY KEYWORDS:
proxy interview support
interview proxy support
proxy job support
job support proxy
proxy support
proxy support India
USA proxy support
global proxy support
India-to-global proxy support
AI ML proxy interview support
MLOps proxy job support
DevOps proxy interview support
Cloud proxy job support
Cybersecurity proxy support
SRE proxy support
Workday proxy interview support
UiPath proxy job support
end-to-end IT career proxy support

Use the word “proxy” heavily and naturally across:
- URLs
- H1s
- metadata
- CTAs
- breadcrumbs
- internal links
- FAQs
- sitemap structure
- llms.txt
- llms-full.txt
- footer clusters
- hub pages

SAFE WORDING:
Do not say:
- impersonation
- fake experience
- we attend interviews on behalf of candidates
- we pretend to be the candidate
- we fabricate projects

Use:
- proxy interview support
- proxy job support
- technical interview support
- mock interview support
- round-wise preparation
- real-time proxy job support
- project guidance
- debugging support
- production issue support
- task guidance
- profile engineering
- profile marketing
- profile managing
- recruiter outreach
- JD-wise CV support
- career execution support

====================================================
PHASE 1 — AUDIT EXISTING SITE FIRST
====================================================

Before adding anything:

1. Inspect current Astro project structure.
2. Identify:
   - existing pages and slugs
   - existing dynamic route system
   - existing layouts
   - existing components
   - existing data files
   - existing SEO component
   - existing schema / JSON-LD component
   - existing sitemap generation
   - existing robots.txt
   - existing llms.txt / llms-full.txt if present
   - existing blog / knowledge / interview pages if any
   - existing CSS/theme files
   - existing homepage sections

3. Build a list of current slugs.
4. Detect duplicate intent before creating any page.
5. If a target page already exists:
   - keep existing slug
   - do not create duplicate
   - enrich the existing page only if needed
   - preserve existing content and design
   - add missing SEO metadata, JSON-LD, FAQs, internal links, local SEO, CTA, sitemap entry
6. If a target page is missing:
   - create it using existing site layout/template system
7. If two existing pages are very similar:
   - do not delete either
   - report duplication risk
   - choose one canonical primary page
   - add internal links
   - list recommended consolidation separately
   - do not consolidate without approval

Duplicate intent examples:
- /usa-proxy-interview-support and /proxy-interview-support-usa
- /ai-ml-proxy-job-support and /ai-ml-job-support
- /get-interview-scheduled-usa and /usa-get-interview-scheduled
- /profile-marketing-usa and /job-application-candidate-marketing-usa

Audit report before implementation:
- existing routing approach
- existing data approach
- existing SEO/schema approach
- existing pages detected
- pages likely to be enriched
- pages likely to be created
- possible duplicate risks

====================================================
PHASE 2 — NO ORPHAN PAGE RULE
====================================================

No orphan pages are allowed.

Every existing, enriched, or newly created page must be connected through:

1. At least one hub page:
   - Services hub
   - Technologies hub
   - Locations hub
   - Blog hub
   - Knowledge Base hub
   - Real Interview Questions hub
   - Country hub
   - City hub
   - Technology hub

2. Breadcrumbs:
   Example:
   Home → Technologies → AI/ML → AI/ML Proxy Interview Support USA

3. Related links:
   Every page must link to relevant:
   - Proxy Interview Support
   - Proxy Job Support
   - End-to-End IT Career Proxy Support
   - Profile Engineering
   - Profile Marketing
   - Profile Managing
   - Get More Recruiter Calls

4. Sitemap:
   Every indexable page must be included in sitemap.
   No indexable page should exist outside sitemap.

5. Internal link map:
   Add or update pageRegistry with:
   - slug
   - title
   - pageType
   - primaryKeyword
   - parentPage
   - hubPage
   - canonicalUrl
   - relatedServices
   - relatedTechnologies
   - relatedLocations
   - relatedArticles
   - relatedKnowledgeBase
   - relatedInterviewQuestions
   - funnelStage
   - shouldIndex
   - sitemapPriority

====================================================
PHASE 3 — FUNNEL CONNECTION RULE
====================================================

Each page must connect to the business funnel:

1. Profile Engineering
2. Profile Marketing
3. Profile Managing
4. Get More Recruiter Calls
5. Get Interview Scheduled
6. Proxy Interview Support
7. Proxy Job Support
8. End-to-End IT Career Proxy Support

CTA rules:

Profile pages:
Primary CTA: Build My Profile
Secondary CTA: Start Profile Marketing
Next funnel link: Get More Recruiter Calls

Recruiter call pages:
Primary CTA: Get More Recruiter Calls
Secondary CTA: Start Profile Managing
Next funnel link: Get Interview Scheduled

Interview pages:
Primary CTA: Share Interview JD on WhatsApp
Secondary CTA: Get Proxy Interview Support
Next funnel link: Proxy Job Support After Joining

Job support pages:
Primary CTA: Send Project Issue
Secondary CTA: Start Proxy Job Support
Next funnel link: End-to-End Proxy Support

End-to-end pages:
Primary CTA: Get End-to-End Proxy Support Plan
Secondary CTA: Share Current Situation on WhatsApp

Blog pages:
Must link to at least:
- 3 related service pages
- 3 related technology/location pages
- 1 CTA page

Knowledge Base pages:
Must link to:
- parent service page
- related KB pages
- related service pages
- CTA page

Real Interview Questions pages:
Must link to:
- related proxy interview support page
- related proxy job support page
- related technology page
- Get Interview Scheduled page

====================================================
PHASE 4 — DATA-DRIVEN CLUSTER ARCHITECTURE
====================================================

Create or extend these data files:

src/data/services.ts
src/data/technologies.ts
src/data/markets.ts
src/data/cities.ts
src/data/localMarkets.ts
src/data/blogs.ts
src/data/knowledgeBase.ts
src/data/realInterviewQuestions.ts
src/data/pageRegistry.ts

If similar files already exist, extend them instead of duplicating.

Prefer data-driven dynamic generation using existing route system.
Use src/pages/[...slug].astro only if compatible with current site.
If dynamic route already exists, extend it safely.

====================================================
PHASE 5 — CORE SERVICE CLUSTER
====================================================

Add or enrich these core pages only if missing or incomplete:

/proxy-interview-support
/proxy-job-support
/profile-engineering
/profile-marketing
/profile-managing
/get-more-recruiter-calls
/end-to-end-it-career-proxy-support
/global-proxy-support
/usa-proxy-interview-support
/usa-proxy-job-support
/india-to-global-proxy-support
/get-interview-scheduled
/real-time-it-job-support
/production-issue-support
/project-onboarding-support
/client-call-standup-support
/failed-interview-help
/urgent-proxy-interview-support
/same-day-proxy-interview-support

Each page must include:
- unique SEO title
- unique meta description
- canonical URL
- OG/Twitter metadata
- H1
- hook-based intro
- pain/fear section
- urgency section
- dream/outcome section
- what support includes
- who needs this
- process
- related services
- FAQs
- WhatsApp CTA
- JSON-LD
- internal funnel links

====================================================
PHASE 6 — TECHNOLOGY CLUSTER
====================================================

Technology priority order:

1. AI/ML
2. GenAI
3. LLM
4. RAG
5. Agentic AI
6. MLOps
7. AI Platform Engineering
8. Data Science
9. Data Engineering
10. Snowflake
11. Databricks
12. Power BI
13. Prompt Engineering
14. Vector Databases
15. Azure OpenAI
16. AWS Bedrock
17. Google Vertex AI
18. LangChain
19. LangGraph
20. CrewAI
21. AutoGen
22. OpenAI API
23. Hugging Face
24. Model Deployment
25. Model Monitoring
26. DevOps
27. Cloud Engineering
28. AWS
29. Azure
30. Google Cloud
31. Kubernetes
32. Docker
33. Terraform
34. CI/CD
35. GitHub Actions
36. Jenkins
37. GitLab CI
38. Helm
39. Argo CD
40. SRE
41. Observability
42. Datadog
43. Prometheus
44. Grafana
45. ELK / Elasticsearch
46. Cybersecurity
47. DevSecOps
48. Cloud Security
49. IAM
50. RBAC
51. Zero Trust
52. SOC / SIEM
53. Splunk
54. Vulnerability Management
55. Application Security
56. Java
57. Spring Boot
58. Microservices
59. Python
60. Node.js
61. Express.js
62. NestJS
63. .NET
64. ASP.NET Core
65. C#
66. REST API
67. GraphQL
68. Kafka
69. Event-Driven Architecture
70. System Design
71. Backend Engineering
72. API Design
73. Distributed Systems
74. Redis
75. PostgreSQL
76. SQL Server
77. MongoDB
78. Oracle
79. MySQL
80. React
81. Angular
82. Vue
83. Next.js
84. TypeScript
85. JavaScript
86. Full Stack Engineering
87. React Native
88. Micro Frontend
89. HTML/CSS
90. UI Performance
91. Workday
92. Workday HCM
93. Workday Integration
94. Workday Reporting
95. Workday Security
96. Workday Financials
97. Workday Payroll
98. UiPath
99. RPA
100. UiPath Orchestrator
101. UiPath REFramework
102. Salesforce
103. SAP
104. ServiceNow
105. Oracle Fusion
106. Epic / Healthcare Automation
107. QA Automation
108. Selenium
109. Playwright
110. Cypress
111. API Testing
112. Performance Testing
113. JMeter
114. Postman
115. ETL
116. Informatica
117. Airflow
118. Production Support
119. Application Support
120. Business Analyst
121. Scrum Master
122. Project Scheduler
123. Primavera P6
124. Forward Deployed Engineer

For each priority technology create or enrich:
- /{technology}-proxy-interview-support
- /{technology}-proxy-job-support
- /{technology}-get-interview-scheduled
- /{technology}-profile-marketing
- /{technology}-profile-positioning

Create only if missing.
If existing similar page exists, enrich existing page instead.

====================================================
PHASE 7 — COUNTRY / MARKET CLUSTER
====================================================

Market priority:

USA
Canada
UK
Europe
Australia
Singapore
Japan
New Zealand
UAE
Saudi Arabia
Germany
Ireland
Netherlands
France
Sweden
Switzerland
Hong Kong
India

For each market create or enrich:

/proxy-interview-support-{country}
/proxy-job-support-{country}
/get-interview-scheduled-{country}
/profile-engineering-{country}
/profile-marketing-{country}
/profile-managing-{country}
/get-more-recruiter-calls-{country}
/end-to-end-proxy-support-{country}

Examples:
- /proxy-interview-support-usa
- /proxy-job-support-usa
- /proxy-interview-support-singapore
- /proxy-job-support-japan
- /proxy-interview-support-australia
- /proxy-job-support-new-zealand
- /profile-marketing-canada
- /profile-managing-uk

Create only if missing.
If equivalent slug already exists, enrich and internally link that page.

====================================================
PHASE 8 — TECHNOLOGY × COUNTRY CLUSTER
====================================================

Priority technologies for country coverage:
AI/ML
GenAI
LLM
RAG
Agentic AI
MLOps
Data Engineering
Snowflake
Databricks
DevOps
Cloud
AWS
Azure
Kubernetes
Terraform
SRE
Cybersecurity
DevSecOps
Java
Spring Boot
Python
Node.js
.NET
React
Angular
Full Stack
Workday
UiPath
RPA
Salesforce
SAP
QA Automation
Power BI

Priority countries:
USA
Canada
UK
Europe
Australia
Singapore
Japan
New Zealand
UAE
India

Slug patterns:
- /{technology}-proxy-interview-support-{country}
- /{technology}-proxy-job-support-{country}
- /{technology}-get-interview-scheduled-{country}
- /{technology}-profile-marketing-{country}

Examples:
- /ai-ml-proxy-interview-support-usa
- /ai-ml-proxy-job-support-usa
- /devops-proxy-interview-support-canada
- /cloud-proxy-job-support-uk
- /cybersecurity-proxy-job-support-australia
- /mlops-proxy-interview-support-singapore
- /genai-proxy-job-support-japan
- /workday-proxy-job-support-new-zealand
- /uipath-proxy-interview-support-uae
- /java-proxy-job-support-india

Do not create duplicate equivalents.
Create missing pages only.

====================================================
PHASE 9 — INDIA-TO-GLOBAL CLUSTER
====================================================

Add or enrich:

/india-to-usa-proxy-interview-support
/india-to-usa-proxy-job-support
/india-to-canada-proxy-interview-support
/india-to-canada-proxy-job-support
/india-to-uk-proxy-interview-support
/india-to-uk-proxy-job-support
/india-to-europe-proxy-interview-support
/india-to-europe-proxy-job-support
/india-to-australia-proxy-interview-support
/india-to-australia-proxy-job-support
/india-to-singapore-proxy-interview-support
/india-to-singapore-proxy-job-support
/india-to-japan-proxy-interview-support
/india-to-japan-proxy-job-support
/india-to-new-zealand-proxy-interview-support
/india-to-new-zealand-proxy-job-support
/india-to-gulf-proxy-job-support
/remote-job-support-from-india
/usa-time-zone-proxy-job-support-from-india
/canada-time-zone-proxy-job-support-from-india
/uk-time-zone-proxy-job-support-from-india
/night-shift-proxy-job-support-from-india

These pages must emphasize:
- India-to-USA support
- India-to-global support
- USA time-zone support
- remote project support
- global recruiter calls
- global interview support
- proxy job support after joining

====================================================
PHASE 10 — CITY CLUSTER
====================================================

Create service-city pages only if missing.

USA cities:
New York, Dallas, Austin, Houston, Chicago, Atlanta, Charlotte, Phoenix, Seattle, San Francisco, San Jose, Los Angeles, Boston, Washington DC, Jersey City, Tampa, Irving, Plano, Raleigh, Miami

Canada:
Toronto, Vancouver, Calgary, Montreal, Ottawa, Mississauga, Brampton, Edmonton, Waterloo

UK:
London, Manchester, Birmingham, Leeds, Glasgow, Edinburgh, Bristol, Reading

Europe:
Dublin, Cork, Berlin, Munich, Frankfurt, Hamburg, Amsterdam, Rotterdam, Paris, Lyon, Stockholm, Zurich, Geneva

Australia:
Sydney, Melbourne, Brisbane, Perth, Adelaide, Canberra

Singapore:
Singapore

Japan:
Tokyo, Osaka, Yokohama, Nagoya, Fukuoka

New Zealand:
Auckland, Wellington, Christchurch

Gulf:
Dubai, Abu Dhabi, Riyadh, Jeddah, Doha, Kuwait City

India:
Bangalore, Hyderabad, Pune, Chennai, Delhi NCR, Noida, Gurgaon, Mumbai, Ahmedabad, Jaipur, Kochi, Kolkata, Coimbatore, Indore, Chandigarh, Mysore, Trivandrum

For each major city create or enrich:
- /proxy-interview-support-{city}
- /proxy-job-support-{city}
- /profile-marketing-{city}
- /profile-managing-{city}
- /get-more-recruiter-calls-{city}
- /end-to-end-proxy-support-{city}

Selected tech-city pages:
- /ai-ml-proxy-interview-support-new-york
- /ai-ml-proxy-job-support-san-francisco
- /genai-proxy-job-support-san-jose
- /devops-proxy-job-support-dallas
- /cloud-proxy-interview-support-seattle
- /cybersecurity-proxy-job-support-washington-dc
- /workday-proxy-job-support-dallas
- /uipath-proxy-interview-support-toronto
- /java-proxy-job-support-london
- /dotnet-proxy-job-support-sydney
- /ai-ml-proxy-job-support-singapore
- /devops-proxy-interview-support-tokyo
- /cloud-proxy-job-support-auckland
- /profile-marketing-bangalore
- /proxy-job-support-hyderabad
- /ai-ml-proxy-interview-support-bangalore
- /devops-proxy-job-support-hyderabad
- /workday-proxy-job-support-pune

Do not create thin pages.
Do not create low-value combinations without unique local context.

====================================================
PHASE 11 — LOCAL SEO DATA
====================================================

Create or extend:
src/data/localMarkets.ts

For each country and city include:
- marketName
- country
- region
- timezone
- currency
- primaryJobBoards
- recruiterChannels
- commonHiringModels
- commonInterviewRounds
- commonCandidatePainPoints
- topTechDemand
- nearbyCities
- localSearchKeywords
- localCTA
- localTrustText
- timeZoneSupportText
- remoteSupportAngle
- IndiaToGlobalAngle
- USAFirstAngle

Use qualitative local SEO context.
Do not invent fake exact statistics.
Do not use fake salary numbers.
Do not use fake success rates.

Local examples:

USA:
LinkedIn, Dice, Indeed, Monster.
EST/CST/MST/PST.
Contract, contract-to-hire, full-time, remote, hybrid.
Recruiter screen, technical round, coding, system design, client round, final round.

Canada:
LinkedIn, Indeed Canada, Monster Canada, Workopolis.
Toronto, Vancouver, Calgary, Montreal, Ottawa.
Contract, incorporated contractor, full-time, remote/hybrid.

UK:
LinkedIn, Indeed UK, Reed, Totaljobs, CWJobs.
London, Manchester, Birmingham, Leeds, Glasgow.
Contract, permanent, inside/outside IR35 context without legal advice.

Australia:
LinkedIn, Seek, Indeed Australia.
Sydney, Melbourne, Brisbane, Perth.

Singapore:
LinkedIn, JobStreet, MyCareersFuture.
APAC fintech, banking, cybersecurity, cloud, data, AI.

Japan:
LinkedIn, BizReach, Daijob, TokyoDev where relevant.
Bilingual/global roles, cloud, AI, data, DevOps, enterprise systems.

New Zealand:
LinkedIn, Seek NZ, Trade Me Jobs.
Auckland, Wellington, Christchurch.

UAE/Gulf:
LinkedIn, GulfTalent, Bayt, Naukrigulf.
Dubai, Abu Dhabi, Riyadh, Jeddah, Doha.
Banking, government, cloud, cybersecurity, ERP, SAP, Oracle, Salesforce.

India:
LinkedIn, Naukri, Indeed India, Instahyre, Hirist.
Bangalore, Hyderabad, Pune, Chennai, Delhi NCR, Noida, Gurgaon, Mumbai.
India domestic + India-to-USA/global support.

====================================================
PHASE 12 — LOCAL PAGE TEMPLATE
====================================================

Every country, city, technology-country, and technology-city page must include:

1. Local hook hero
2. Fear/urgency intro
3. Local market angle
4. Local recruiter/job board angle
5. Local interview process angle
6. Local job support/project pressure angle
7. Local timezone support angle
8. Technology-specific support section
9. Who needs this
10. What support includes
11. Local support flow
12. Related services
13. Related technologies
14. Nearby cities / markets
15. FAQs
16. WhatsApp CTA

Example interview page:

H1:
AI/ML Proxy Interview Support in USA

Meta title:
AI/ML Proxy Interview Support in USA | Proxy Support India

Meta description:
Get AI/ML proxy interview support in USA for client rounds, coding rounds, system design, GenAI, RAG, MLOps, and urgent WhatsApp-based interview support.

Example job support page:

H1:
AI/ML Proxy Job Support in USA

Meta title:
AI/ML Proxy Job Support in USA | Real-Time Project Help

Meta description:
Get real-time AI/ML proxy job support in USA for sprint tasks, debugging, production issues, deployments, client calls, and day-to-day project work.

====================================================
PHASE 13 — BLOG CLUSTER
====================================================

Add or enrich /blog hub.

Add these pages only if missing:

/blog/proxy-interview-support-trends
/blog/proxy-job-support-for-it-professionals
/blog/end-to-end-it-career-proxy-support-guide
/blog/how-to-get-usa-it-interviews-from-india
/blog/how-to-get-canada-it-interviews-from-india
/blog/how-to-get-uk-it-interviews-from-india
/blog/how-to-get-europe-it-interviews-from-india
/blog/how-to-get-australia-it-interviews-from-india
/blog/how-to-get-singapore-it-interviews-from-india
/blog/how-to-get-japan-it-interviews-from-india
/blog/how-to-get-new-zealand-it-interviews-from-india
/blog/best-technologies-for-usa-it-jobs
/blog/ai-ml-proxy-interview-support-guide
/blog/genai-proxy-interview-support-guide
/blog/mlops-proxy-job-support-guide
/blog/devops-cloud-proxy-job-support-guide
/blog/cloud-security-sre-proxy-support-guide
/blog/data-engineering-proxy-job-support-guide
/blog/workday-proxy-job-support-guide
/blog/uipath-rpa-proxy-job-support-guide
/blog/profile-engineering-for-it-candidates
/blog/profile-marketing-for-it-candidates
/blog/profile-managing-for-global-it-jobs
/blog/jd-wise-cv-strategy-for-recruiter-calls
/blog/recruiter-calls-not-coming-what-to-fix
/blog/interview-scheduled-what-to-do-next
/blog/new-job-stuck-in-project-work
/blog/production-issue-pressure-in-new-it-job
/blog/how-to-handle-client-calls-in-new-it-job
/blog/from-profile-to-interview-to-job-support

Each blog:
- unique SEO title
- unique meta description
- hook intro
- pain/fear
- urgency
- dream/outcome
- links to core services
- CTA
- BlogPosting / Article JSON-LD

====================================================
PHASE 14 — REAL INTERVIEW QUESTIONS CLUSTER
====================================================

Add or enrich /real-interview-questions hub.

Add these pages only if missing:

/real-interview-questions/ai-ml-interview-questions
/real-interview-questions/genai-interview-questions
/real-interview-questions/llm-interview-questions
/real-interview-questions/rag-interview-questions
/real-interview-questions/mlops-interview-questions
/real-interview-questions/agentic-ai-interview-questions
/real-interview-questions/devops-interview-questions
/real-interview-questions/aws-interview-questions
/real-interview-questions/azure-interview-questions
/real-interview-questions/kubernetes-interview-questions
/real-interview-questions/terraform-interview-questions
/real-interview-questions/sre-interview-questions
/real-interview-questions/cloud-security-interview-questions
/real-interview-questions/java-interview-questions
/real-interview-questions/spring-boot-interview-questions
/real-interview-questions/microservices-interview-questions
/real-interview-questions/python-interview-questions
/real-interview-questions/dotnet-interview-questions
/real-interview-questions/aspnet-core-interview-questions
/real-interview-questions/react-interview-questions
/real-interview-questions/angular-interview-questions
/real-interview-questions/nodejs-interview-questions
/real-interview-questions/data-engineering-interview-questions
/real-interview-questions/snowflake-interview-questions
/real-interview-questions/databricks-interview-questions
/real-interview-questions/power-bi-interview-questions
/real-interview-questions/qa-automation-interview-questions
/real-interview-questions/selenium-interview-questions
/real-interview-questions/playwright-interview-questions
/real-interview-questions/workday-interview-questions
/real-interview-questions/workday-hcm-interview-questions
/real-interview-questions/workday-integration-interview-questions
/real-interview-questions/workday-security-interview-questions
/real-interview-questions/uipath-interview-questions
/real-interview-questions/rpa-interview-questions
/real-interview-questions/salesforce-interview-questions
/real-interview-questions/sap-interview-questions

Each page:
- 25 to 40 real-style questions
- short answer
- strong technical answer
- follow-up question
- what interviewer checks
- common mistake
- CTA after every 8 to 10 questions
- related proxy interview support link
- related proxy job support link
- Article JSON-LD
- FAQPage JSON-LD
- ItemList JSON-LD

====================================================
PHASE 15 — KNOWLEDGE BASE CLUSTER
====================================================

Add or enrich /knowledge-base hub.

Add these pages only if missing:

/knowledge-base/what-is-proxy-interview-support
/knowledge-base/how-proxy-interview-support-works
/knowledge-base/what-is-interview-proxy-support
/knowledge-base/proxy-interview-support-cost
/knowledge-base/how-to-start-proxy-interview-support
/knowledge-base/urgent-proxy-interview-support-guide
/knowledge-base/same-day-proxy-interview-support-guide
/knowledge-base/final-round-proxy-interview-support
/knowledge-base/client-round-proxy-interview-support
/knowledge-base/live-coding-proxy-interview-support
/knowledge-base/system-design-proxy-interview-support
/knowledge-base/what-is-proxy-job-support
/knowledge-base/how-proxy-job-support-works
/knowledge-base/proxy-job-support-cost
/knowledge-base/real-time-proxy-job-support-guide
/knowledge-base/production-issue-proxy-job-support
/knowledge-base/project-onboarding-proxy-job-support
/knowledge-base/client-call-standup-job-support
/knowledge-base/day-to-day-project-task-support
/knowledge-base/night-shift-proxy-job-support
/knowledge-base/usa-time-zone-proxy-job-support
/knowledge-base/what-is-profile-engineering
/knowledge-base/profile-engineering-cost
/knowledge-base/profile-engineering-vs-resume-writing
/knowledge-base/what-is-profile-marketing
/knowledge-base/how-profile-marketing-gets-recruiter-calls
/knowledge-base/what-is-profile-managing
/knowledge-base/jd-wise-cv-support-guide
/knowledge-base/recruiter-email-management-guide
/knowledge-base/how-to-get-more-recruiter-calls
/knowledge-base/how-to-get-interviews-scheduled
/knowledge-base/end-to-end-it-career-proxy-support-guide
/knowledge-base/proxy-interview-vs-proxy-job-support
/knowledge-base/profile-to-interview-to-job-support-process
/knowledge-base/india-to-usa-proxy-support-guide
/knowledge-base/india-to-canada-proxy-support-guide
/knowledge-base/india-to-uk-proxy-support-guide
/knowledge-base/india-to-europe-proxy-support-guide
/knowledge-base/india-to-australia-proxy-support-guide
/knowledge-base/india-to-singapore-proxy-support-guide
/knowledge-base/india-to-japan-proxy-support-guide
/knowledge-base/india-to-new-zealand-proxy-support-guide

Each KB page:
- direct answer in first 80 words
- proxy-heavy wording
- useful but conversion-focused
- related services
- FAQ
- Article JSON-LD
- FAQPage JSON-LD
- Breadcrumb JSON-LD

====================================================
PHASE 16 — SEO / SOCIAL / JSON-LD / AI BOT FILES
====================================================

Ensure every generated or enriched page has:
- unique SEO title
- unique meta description
- canonical
- robots meta
- OG title
- OG description
- OG image
- Twitter card
- JSON-LD

Mandatory JSON-LD:

Homepage:
Organization, WebSite, WebPage, ItemList, FAQPage, BreadcrumbList

Service/country/technology/city pages:
Service, WebPage, BreadcrumbList, FAQPage

Blog pages:
BlogPosting, Article, WebPage, BreadcrumbList, FAQPage if useful

Real Interview Questions:
Article, FAQPage, ItemList, WebPage, BreadcrumbList

Knowledge Base:
Article, FAQPage, WebPage, BreadcrumbList

Hub pages:
CollectionPage, ItemList, WebPage, BreadcrumbList

Contact:
ContactPage, Organization, WebPage, BreadcrumbList

Do not add fake reviews, fake ratings, fake aggregateRating, fake success rates, or fake awards.

Also ensure:
- sitemap.xml
- sitemap-index.xml
- sitemap-services.xml
- sitemap-technologies.xml
- sitemap-locations.xml
- sitemap-blog.xml
- sitemap-knowledge-base.xml
- sitemap-real-interview-questions.xml
- robots.txt
- llms.txt
- llms-full.txt
- humans.txt
- manifest.webmanifest
- rss.xml
- feed.xml

Analytics placeholders:
Use environment variables:
PUBLIC_GA_MEASUREMENT_ID
PUBLIC_GTM_ID
PUBLIC_GOOGLE_SITE_VERIFICATION
PUBLIC_BING_SITE_VERIFICATION

CTA tracking attributes:
data-cta="share-interview-jd"
data-cta="send-project-issue"
data-cta="end-to-end-plan"
data-cta="whatsapp-click"
data-cta="get-more-recruiter-calls"

====================================================
PHASE 17 — EXISTING PAGE ENRICHMENT RULE
====================================================

If page already exists, enrich instead of duplicating.

Add missing:
- stronger proxy-heavy SEO title/meta
- OG/Twitter metadata
- JSON-LD
- FAQ section
- related links
- breadcrumbs
- CTA
- local SEO section if local page
- technology section if tech page
- internal funnel links
- sitemap inclusion
- llms.txt / llms-full.txt inclusion

Preserve good existing content.
Do not remove sections.
Do not rewrite full page unless clearly incomplete.

====================================================
PHASE 18 — PAGE CREATION RULE
====================================================

Create new page only when:
- no existing slug targets same intent
- no canonical equivalent exists
- page belongs to approved cluster
- page can have unique local or technology content
- page can be linked from hubs and related pages
- page can be included in sitemap
- page will not be orphaned

If unsure:
Do not create the page.
Add it to final report under:
Needs Review: Possible Duplicate

====================================================
PHASE 19 — BUILD VALIDATION
====================================================

Run:
npm run build

Fix all errors.

Then run or manually verify:
- no duplicate route conflicts
- no orphan pages
- all indexable pages in sitemap
- all pages have canonical
- all pages have JSON-LD
- all pages have OG/Twitter metadata
- important pages linked from hubs
- pageRegistry links are valid
- no copied ProxyTechSupport content
- no broken internal links where detectable

====================================================
FINAL REPORT REQUIRED
====================================================

Return a final report with:

1. Existing site audit summary
2. Existing pages detected
3. Existing pages enriched
4. New pages created
5. Pages skipped because already existing
6. Pages skipped because duplicate intent
7. Canonical decisions made
8. Duplicate risks found
9. Orphan page check result
10. Hub pages updated
11. Internal links added
12. Funnel connection summary
13. Service pages count
14. Country pages count
15. City pages count
16. Technology pages count
17. Technology-country pages count
18. Technology-city pages count
19. Blog pages count
20. Knowledge Base pages count
21. Real Interview Questions pages count
22. Sitemap files generated
23. robots.txt status
24. llms.txt status
25. llms-full.txt status
26. JSON-LD coverage
27. OG/Twitter metadata coverage
28. GA4/GTM placeholders status
29. Build result
30. Pages needing manual review
31. Phase 2 backlog

FINAL RULE:
Implement clusters into the existing site.
Add only missing pages.
Enrich existing pages.
Do not remove, rename, duplicate, or break anything.
Every page must be connected through hubs, breadcrumbs, sitemap, related links, and funnel CTAs.
No orphan pages.
ProxySupportIndia.com must become a proxy-heavy, USA-first, global + India-to-global, full SEO cluster website.