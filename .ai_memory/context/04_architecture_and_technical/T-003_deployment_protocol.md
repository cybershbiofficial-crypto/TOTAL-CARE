---
id: T-003
title: Deployment Protocol
tags: [technical, deployment, vercel, github]
links: [X-001, X-002]
importance: 10
status: confirmed
version: 1.0.0
updated: 2026-07-15
supersedes: []
source: internal
---

**1. Core Statement**
**Code must be pushed to GitHub without rewriting history (Lovable sync) and deployed via Vercel CLI for immediate production updates.**

**2. Details**

- **Tier 1 — Git Sync:** `git add .`, `git commit -m "..."`, `git push origin HEAD`. NEVER rebase, amend, or force push to Lovable-connected branches.
- **Tier 2 — Direct Deployment:** Because GitHub webhooks to Vercel can be delayed, use `npx vercel --prod --yes` directly from the development environment to bypass queues.
- **Tier 3 — Code Formatting:** Always run `npx prettier --write .` before committing to maintain the `total-care` standard.

**Pre-launch checklist:**

- [ ] Format code (Prettier)
- [ ] Git commit and push (No force push)
- [ ] Vercel CLI deploy to production

**3. Why it matters**

- Following this protocol guarantees that the client's Lovable editor stays perfectly in sync while allowing for instant production deployments.

**4. Change Log**

- 2026-07-15: Initial creation.
