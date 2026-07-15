# Cloudflare — Let AI / Agentic Bots Crawl the Site

`robots.txt` only asks bots politely. **Cloudflare can still block them at the edge**,
regardless of what `robots.txt` says. If you host on Cloudflare Pages / proxy through
Cloudflare, verify these settings so the bots we welcomed are actually allowed through.

> ⚠️ Since 2024–2025 Cloudflare **blocks known AI crawlers by default** on many new
> zones (the "Block AI bots" / "AI Crawl Control" feature). Allowing them in
> `robots.txt` is NOT enough — you must turn the blocking OFF in the dashboard.

## Checklist (Cloudflare dashboard)

1. **Security → Bots → "Block AI bots" / "AI Crawl Control"**
   - Set to **OFF** (or "Allow"). If you see a per-crawler list (AI Audit / AI Crawl
     Control), set **every** AI crawler to **Allow**.
   - This single toggle is the most common reason AI bots get 403s despite robots.txt.

2. **Security → Bots → Bot Fight Mode / Super Bot Fight Mode**
   - **Bot Fight Mode:** OFF (it challenges automated traffic broadly).
   - **Super Bot Fight Mode** (Pro+): set **"Verified bots" → Allow**, and
     **"Definitely automated" → Allow** (or at least don't Block) so declared AI
     crawlers with valid reverse-DNS aren't challenged.

3. **Security → WAF → Custom rules & Managed rules**
   - Make sure no rule blocks/challenges these user-agents or their ASNs.
   - If you have a "block bad bots" rule, add an exception for the bots below.

4. **Security → Settings → Security Level**
   - Keep at **Medium** or lower. "I'm Under Attack" mode JS-challenges everything and
     will break AI crawling.

5. **(Optional) Managed robots.txt**
   - If Cloudflare's "Managed robots.txt" is enabled it may inject its own AI-block
     directives that override ours. Disable it so our `public/robots.txt` is served.

## Optional: WAF "Allow" rule for AI bots (belt-and-suspenders)

Security → WAF → Custom rules → Create → **Action: Skip / Allow**, expression:

```
(http.user_agent contains "GPTBot") or (http.user_agent contains "OAI-SearchBot") or
(http.user_agent contains "ChatGPT-User") or (http.user_agent contains "ClaudeBot") or
(http.user_agent contains "Claude-SearchBot") or (http.user_agent contains "Claude-User") or
(http.user_agent contains "anthropic-ai") or (http.user_agent contains "PerplexityBot") or
(http.user_agent contains "Perplexity-User") or (http.user_agent contains "Google-Extended") or
(http.user_agent contains "Google-CloudVertexBot") or (http.user_agent contains "GoogleOther") or
(http.user_agent contains "Applebot") or (http.user_agent contains "Amazonbot") or
(http.user_agent contains "Meta-ExternalAgent") or (http.user_agent contains "Meta-ExternalFetcher") or
(http.user_agent contains "MistralAI-User") or (http.user_agent contains "DuckAssistBot") or
(http.user_agent contains "YouBot") or (http.user_agent contains "cohere-ai") or
(http.user_agent contains "CCBot") or (http.user_agent contains "Bytespider") or
(http.user_agent contains "AI2Bot") or (http.user_agent contains "Diffbot") or
(http.user_agent contains "FirecrawlAgent") or (http.user_agent contains "PetalBot")
```

Set this rule ABOVE any blocking rule so it wins.

## Verify it works

```bash
# Should return 200 (not 403 / not a JS-challenge page)
curl -A "GPTBot" -I https://proxysupportindia.com/
curl -A "ClaudeBot" -I https://proxysupportindia.com/
curl -A "PerplexityBot" -I https://proxysupportindia.com/

# robots.txt is served and open
curl -s https://proxysupportindia.com/robots.txt | head -20
```

If any return `403` or a Cloudflare challenge, re-check step 1 and 2 above.

_Bot list current as of July 2026. Keep in sync with `public/robots.txt`._
