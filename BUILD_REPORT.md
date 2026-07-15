# ProxySupportIndia.com — Build Report

**Date:** 2026-07-14 · **Stack:** Astro 7 + TypeScript, static-first, Cloudflare Pages ready
**Build:** `npm run build` → ✅ passes · **805 HTML pages** + XML/feed endpoints in `dist/`

---

## 1. Pages created (805 pages)

| Cluster | Count | Notes |
|---|---|---|
| Core + hub pages | 12 | home, /services, /technologies, /countries, /locations, /india-to-global-proxy-support, /blog, /knowledge-base, /real-interview-questions, /contact, /pricing, /about |
| Service pages (core + per-country) | 161 | 7 core services + 10 scenario/urgency pages + service×country variants |
| Technology pages | 390 | {tech}-proxy-interview-support, {tech}-proxy-job-support, tech×country (USA for all tier-1; flagships across 8 more markets) |
| Location pages | 134 | 18 country overviews + 47 cities × 2 + India-to-global (interview/job + remote/time-zone/night-shift) |
| Blog posts | 30 | hook-based (pain → urgency → dream → what works → how we help) |
| Knowledge Base | 42 | answers in first ~80 words + FAQ/Breadcrumb schema |
| Real Interview Questions | 37 | 6 flagship sets fully written (Java, Python, React, DevOps, AWS, GenAI); rest render intro + strong CTA |

> Homepage market selector defaults to **USA** (center market). USA-first, global, India-to-global positioning throughout.

## 2. Clusters created
Core services · Scenario/urgency · Service×Country · Technology (interview/job) · Technology×Country ·
India-to-Global · Cities · Country overviews · Blog · Knowledge Base · Real Interview Questions.

## 3. Files created (high level)
- **Data layer:** `src/data/` — site, services, scenarios, countries, technologies, cities, blogs, knowledgeBase, realInterviewQuestions, questionSets, versions, pageRegistry.
- **Rendering:** `src/lib/content.ts` (page builder), `blogContent.ts`, `sitemap.ts`, `rss.ts`.
- **Components:** SEO, Schema, Analytics, Header, Footer, Hero, ReadinessConsole, UrgentPathCards, ServiceJourney, CoreServices, TechnologyMatrix, MarketSelector, IndiaToGlobal, ProfileToJobFunnel, KnowledgeEngine, TrustBoundary, Breadcrumbs, FAQ, RelatedLinks, CTASection, MobileStickyCTA, PageArticle, WhatsAppIcon.
- **Layouts:** `BaseLayout.astro`.
- **Pages/routes:** `index.astro`, `[...slug].astro` (dynamic engine), hub `index` pages, `countries/[slug]`, blog/KB/RIQ hubs + `[slug]`, contact/pricing/about.
- **SEO/discovery (`public/`):** robots.txt (AI-bot policy), llms.txt, llms-full.txt, humans.txt, .well-known/security.txt, manifest.webmanifest, favicon.svg, og/ placeholder PNGs (+ icons).
- **Endpoints (`src/pages/`):** sitemap-index.xml + 7 cluster sitemaps, rss.xml, feed.xml, knowledge-base/feed.xml, real-interview-questions/feed.xml.

## 4. Build result
`npm run build` completes with **0 errors**, 805 pages, in ~1.7s.

## 5. Sitemap path
`/sitemap-index.xml` → references `/sitemap-pages.xml`, `/sitemap-services.xml`, `/sitemap-technologies.xml`, `/sitemap-locations.xml`, `/sitemap-blog.xml`, `/sitemap-knowledge-base.xml`, `/sitemap-real-interview-questions.xml`. Each entry has `loc`, `lastmod`, `changefreq`, `priority`.

## 6. Robots path
`/robots.txt` — allows search + AI/answer engines by default (Googlebot, Bingbot, GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot, anthropic-ai, Google-Extended, CCBot, Applebot, FacebookBot, LinkedInBot, Twitterbot, Bytespider, Amazonbot) with a comment on how to opt out. Points to sitemap-index.

## 7. Advanced SEO implemented (per ADVANCED_SEO.md)
Reusable SEO component (title/desc/canonical/robots/keywords/author/publisher/OG+alt/Twitter+alt/published+modified/noindex) · per-page-type OG images · GA4 + GTM + Google/Bing verification via `PUBLIC_*` env (no hardcoded IDs; see `.env.example`) · placeholders/comments for Ads/Meta Pixel/LinkedIn/Clarity/Hotjar · robots meta `index,follow,max-image-preview:large,...` · llms.txt / llms-full.txt / humans.txt / security.txt / manifest.webmanifest · RSS + feed (blog, KB, RIQ) · split sitemaps · JSON-LD: Organization, WebSite, WebPage-level, BreadcrumbList, Service, FAQPage, Article, BlogPosting, ItemList, ContactPoint · canonical + consistent trailing-slash · sameAs placeholders in config · conversion `data-cta` attributes · semantic HTML, lazy/preconnect, accessible, mobile-first, sticky WhatsApp CTA · content-freshness (Updated Jul 2026).

## 7b. Mandatory JSON-LD per page type (validated)
Every one of the 805 pages emits a single, valid JSON-LD `@graph` (build check: **805 blocks, 0 invalid**), always including a **WebPage/CollectionPage/ContactPage/AboutPage** node (with `@id`, canonical URL, name, description, `isPartOf` WebSite) plus **BreadcrumbList**, generated dynamically from page data. Type-specific nodes:

| Page type | Nodes emitted |
|---|---|
| Homepage | Organization, WebSite, WebPage, ItemList (services), FAQPage, BreadcrumbList |
| Core service / country / technology / city | Service, WebPage, BreadcrumbList, FAQPage |
| Blog post | Article + BlogPosting, WebPage, BreadcrumbList, FAQPage |
| Real Interview Questions | Article, FAQPage, ItemList (questions), WebPage, BreadcrumbList |
| Knowledge Base | Article, FAQPage, WebPage, BreadcrumbList |
| Hubs (services/technologies/countries/locations/blog/KB/RIQ) | CollectionPage, ItemList, BreadcrumbList |
| Contact | ContactPage, Organization, BreadcrumbList |
| About | AboutPage, Organization, BreadcrumbList |
| Pricing | WebPage, Service, OfferCatalog, FAQPage, BreadcrumbList |

No fake ratings, reviews, aggregateRating or placement guarantees are emitted. `@id` uses the canonical URL; base URL `https://proxysupportindia.com`.

## 8. Skipped / intentional de-duplication
- **Reversed country slugs** (e.g. `/usa-proxy-interview-support`) were **not** generated; the canonical is the service-first `/proxy-interview-support-usa` to avoid duplicate content. `/countries/{slug}` overview links to all its service variants.
- **Alternate recruiter-call slugs** (`/get-usa-recruiter-calls`) folded into canonical `/get-more-recruiter-calls-{country}` to avoid doorway duplication.
- **Tech×country** limited to USA (all tier-1) + flagship techs across 8 more markets, rather than every tech×every country, to keep pages substantive and avoid thin doorways.
- **City marketing/recruiter-call pages** limited to interview+job per city (still unique) rather than 4 near-identical variants.
- **Interview-question bodies:** 6 flagship topics fully written; the other 31 render a strong intro + JD-based CTA and are flagged for expansion.

## 9. Risks / recommendations
- **Replace placeholders before launch:** WhatsApp number + email in `src/data/site.ts`; social URLs in `social`/`sameAs`; branded 1200×630 OG PNGs (currently solid-Jamun placeholders in `public/og/`).
- **Analytics:** set `PUBLIC_GA_MEASUREMENT_ID` / `PUBLIC_GTM_ID` / verification vars in `.env`.
- `@astrojs/sitemap` remains in `package.json` but is unused (custom sitemaps replaced it); can be removed.

## 10. Next recommended improvements
1. Expand the remaining 31 interview-question sets to 25–40 questions each.
2. Write bespoke bodies for the top 8–10 blog posts (generator handles the rest).
3. Add branded OG images per page-type and an OG-image generation step.
4. Add a lightweight site search (+ SearchAction schema) once content volume grows.
5. Consider adding testimonials/case-study proof blocks for conversion.
6. Wire real analytics + Search Console/Bing verification and submit the sitemap.
