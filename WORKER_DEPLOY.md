Cloudflare Worker — Visitor Counter deploy guide

Overview
--
This project includes a Cloudflare Worker handler at `src/workers/visitor-counter.ts` that increments a KV key `global_visitor_count` and returns `{ count }` on GET `/api/visitor`.

Prerequisites
--
- Install Wrangler CLI: `npm install -g wrangler` or `corepack enable && corepack prepare wrangler@latest --activate`
- Have a Cloudflare account and an API token with Workers/KV permissions, or use `wrangler login`.

Steps
--
1. Create a KV namespace and bind it to `VISITOR_COUNTER`:

```bash
# create the KV namespace and bind it; wrangler will print the namespace id
wrangler kv:namespace create "visitor_counter" --binding VISITOR_COUNTER
```

If the command doesn't automatically update `wrangler.jsonc`, copy the printed `id` and replace `<KV_NAMESPACE_ID>` in `wrangler.jsonc`.

2. (Optional) If you want the Worker to only handle `/api/visitor`, create a Worker route in the Cloudflare dashboard mapping `https://<your-domain>/api/visitor` to this Worker (name `portfolio`), or add an appropriate `routes` entry in `wrangler.jsonc`.

3. Build your project (if needed). This repo appears to use Vite/Bun; run your normal build step so worker files are included in the output if your setup bundles them:

```bash
npm run build
# or
bun build
```

4. Publish with Wrangler:

```bash
wrangler publish
```

5. Test the endpoint:

```bash
curl -i https://your-domain.com/api/visitor
# Expected response body: { "count": 123 }
```

Notes and troubleshooting
--
- If you see permission errors, run `wrangler login` and ensure your API token has `Account` > `Workers` and `Workers KV` permissions.
- The current worker uses simple KV read→increment→put, which is subject to race conditions at very high concurrent write rates. For strong atomicity, consider Durable Objects.
- The frontend fetches `/api/visitor` (see `src/components/VisitorCounter.tsx`) and falls back to a localStorage increment if the request fails.

Need help?
--
I can:
- Attempt to run `wrangler kv:namespace create` and `wrangler publish` from your environment (you'll need to be logged in or provide API token), or
- Replace the KV-backed worker with a Durable Object implementation for atomic increments.
