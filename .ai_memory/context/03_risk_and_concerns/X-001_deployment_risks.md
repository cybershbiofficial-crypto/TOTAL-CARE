---
id: X-001
title: Deployment & Security Risks
tags: [risk, security, deployment, vercel]
links: [R-001, T-003, D-001]
importance: 9
status: confirmed
version: 1.0.0
updated: 2026-07-15
supersedes: []
source: internal
---

**1. Core Statement**
**Strict adherence to automated Vercel deployment workflows is required to prevent production downtime and ensure secure access to Supabase CMS.**

**2. Details**

- **Critical threat vectors**:
  1. _Manual Git rewrite risk_: Modifying or rebasing git history breaks the Lovable sync. Mitigation: Never rebase/force-push to Lovable-connected branches.
  2. _Deployment delays_: Vercel webhooks from GitHub can be slow. Mitigation: Push directly using Vercel CLI (`vercel --prod`) for immediate updates.
- **Threat examples by domain**:
  - _Web_: Unauthorized access to the Admin CMS (`/admin`). Protected via Supabase authentication.
  - _B2B_: Leakage of enterprise client data from CMS. Protected via Row Level Security (RLS) in Supabase.

**3. Why it matters**

- Breaking git history destroys the client's Lovable integration; manual deployments without the CLI slow down critical hotfixes.

**4. Change Log**

- 2026-07-15: Initial creation.
