ADVANCED SEO, SOCIAL, ANALYTICS, AI BOT, AND LLM DISCOVERY REQUIREMENTS:

The site must include full modern SEO and AI discovery setup, not only normal title/meta/sitemap.

Create and configure:

1. SEO Metadata System
Create a reusable SEO component that supports:
- title
- meta title
- meta description
- canonical URL
- robots meta
- keywords
- author
- language
- publisher
- page type
- modified date
- published date where applicable
- noindex option
- OG title
- OG description
- OG URL
- OG site name
- OG image
- OG image alt
- OG type
- Twitter card
- Twitter title
- Twitter description
- Twitter image
- Twitter image alt
- structured data JSON-LD

Every page must have unique:
- SEO title
- meta description
- canonical
- OG title
- OG description
- Twitter title
- Twitter description

2. Social Sharing Metadata
Add Open Graph and Twitter/X metadata for every page.

Support previews for:
- WhatsApp
- Facebook
- LinkedIn
- X/Twitter
- Slack
- Discord
- Telegram

Create default OG image:
- /og/default-og.png

Create page-type OG image paths:
- /og/proxy-interview-support-og.png
- /og/proxy-job-support-og.png
- /og/profile-engineering-og.png
- /og/profile-marketing-og.png
- /og/end-to-end-proxy-support-og.png
- /og/ai-ml-proxy-support-og.png
- /og/devops-proxy-support-og.png
- /og/workday-proxy-support-og.png

If images cannot be generated now, create placeholders and a clear config system.

3. Google Analytics / GTAG / GA4
Add gtag support in BaseLayout.

Use environment variables:
PUBLIC_GA_MEASUREMENT_ID
PUBLIC_GOOGLE_SITE_VERIFICATION
PUBLIC_BING_SITE_VERIFICATION
PUBLIC_GTM_ID

If PUBLIC_GA_MEASUREMENT_ID exists, inject GA4 gtag.
If PUBLIC_GTM_ID exists, inject Google Tag Manager.
Do not hardcode fake IDs.

Create clear comments where to add:
- Google Analytics 4
- Google Tag Manager
- Google Ads conversion tracking
- Meta Pixel
- LinkedIn Insight Tag
- Microsoft Clarity
- Hotjar

4. Google Search Console and Bing Verification
Support:
<meta name="google-site-verification" content="..." />
<meta name="msvalidate.01" content="..." />

Use env variables:
PUBLIC_GOOGLE_SITE_VERIFICATION
PUBLIC_BING_SITE_VERIFICATION

5. Robots.txt
Generate /robots.txt with:
- Allow all important pages
- Disallow build/internal paths
- Sitemap URL
- AI crawler policy

Default should allow search indexing.

Include AI bot rules deliberately:
Allow important AI/search bots unless explicitly configured otherwise.

Add user-agent sections for:
Googlebot
Bingbot
GPTBot
OAI-SearchBot
ChatGPT-User
PerplexityBot
ClaudeBot
anthropic-ai
Google-Extended
CCBot
Applebot
FacebookBot
LinkedInBot
Twitterbot
Bytespider
Amazonbot

Default:
Allow: /

But include a clear comment:
Change these to Disallow if the business wants to block AI training or AI crawlers later.

6. Robots Meta Tags
Every indexable page should have:
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

No duplicate/noindex pages unless intentionally configured.

7. llms.txt
Create /llms.txt for AI agents and LLM discovery.

It should include:
- Site name
- Brand positioning
- Main services
- Main markets
- Priority technology clusters
- Important pages
- Blog hub
- Real Interview Questions hub
- Knowledge Base hub
- Contact/WhatsApp CTA page
- Sitemap link
- Guidance that this site is about proxy interview support, proxy job support, profile engineering, profile marketing, profile managing, recruiter calls, and end-to-end IT career proxy support.

Create concise llms.txt that helps AI bots understand the site.

8. llms-full.txt
Create /llms-full.txt as a fuller AI-readable site guide.

It should include:
- Full service descriptions
- Market coverage
- Technology coverage
- Page cluster index
- Internal linking map
- Content usage summary
- Fresh original brand description
- No copied ProxyTechSupport text
- Important URLs
- Contact CTA

This should be longer than llms.txt and optimized for AI answer engines and agentic AI crawlers.

9. humans.txt
Create /humans.txt with:
- Site name
- Brand
- Website
- Tech stack
- Contact placeholder
- Last updated date

10. security.txt
Create /.well-known/security.txt with placeholder:
Contact: mailto:security@proxysupportindia.com
Preferred-Languages: en
Canonical: https://proxysupportindia.com/.well-known/security.txt

11. Web Manifest
Create /manifest.webmanifest:
- name: Proxy Support India
- short_name: Proxy Support
- start_url: /
- display: standalone
- theme_color: Jamun color
- background_color
- icons placeholders

12. RSS / Atom Feeds
Generate:
- /rss.xml for blog
- /feed.xml for blog
- /real-interview-questions/feed.xml if possible
- /knowledge-base/feed.xml if possible

13. Sitemap System
Generate:
- /sitemap.xml
- /sitemap-index.xml if pages are many
- /sitemap-pages.xml
- /sitemap-blog.xml
- /sitemap-knowledge-base.xml
- /sitemap-real-interview-questions.xml
- /sitemap-technologies.xml
- /sitemap-locations.xml
- /sitemap-services.xml

Each sitemap entry must include:
- loc
- lastmod
- priority where useful
- changefreq where useful

14. Schema / JSON-LD
Create reusable Schema component.

Add:
- Organization schema
- WebSite schema
- WebPage schema
- BreadcrumbList schema
- Service schema
- FAQPage schema
- Article schema
- BlogPosting schema
- CollectionPage schema
- ItemList schema
- ContactPoint schema
- LocalBusiness/ProfessionalService schema if appropriate
- SiteNavigationElement schema
- SearchAction schema for site search if search exists

Homepage should include:
Organization
WebSite
WebPage
Service collection
FAQPage
BreadcrumbList

Service pages should include:
Service
FAQPage
BreadcrumbList
WebPage

Blog pages should include:
BlogPosting
Article
BreadcrumbList

Real Interview Question pages should include:
Article
FAQPage
BreadcrumbList
ItemList

Knowledge Base pages should include:
Article
FAQPage
BreadcrumbList

15. Canonicals and Duplicate Control
Every page must have a canonical URL.
No trailing slash mismatch.
Pick one URL style and keep consistent.
Use canonical domain:
https://proxysupportindia.com

Avoid duplicate pages with same content.
If page variants are similar, still write unique content.

16. Social Profiles / SameAs
In site config support sameAs links:
- Website
- WhatsApp
- LinkedIn placeholder
- Instagram placeholder
- Facebook placeholder
- YouTube placeholder
- X/Twitter placeholder

Do not add fake social URLs unless provided.
Use placeholders in config.

17. Conversion Tracking Ready
Add clean placeholders for:
- WhatsApp click tracking
- Share Interview JD CTA tracking
- Send Project Issue CTA tracking
- Get End-to-End Plan CTA tracking
- Phone click tracking
- Contact form submit tracking

Use data attributes:
data-cta="share-interview-jd"
data-cta="send-project-issue"
data-cta="end-to-end-plan"
data-cta="whatsapp-click"

18. Performance SEO
Implement:
- semantic HTML
- lazy loading for images
- responsive images where used
- preconnect for fonts if external fonts are used
- avoid heavy JS
- accessible buttons/links
- clean heading hierarchy
- mobile-first layout
- Core Web Vitals friendly CSS

19. Content Freshness
Add last updated dates for:
- blog pages
- knowledge base pages
- interview question pages
- service pages where useful

20. Build Validation
After build, verify:
- npm run build passes
- sitemap files generated
- robots.txt exists
- llms.txt exists
- llms-full.txt exists
- manifest.webmanifest exists
- RSS/feed files exist
- key pages have OG tags
- key pages have schema JSON-LD
- no copied content from ProxyTechSupport