---
id: T-002
title: TanStack Router Matrix
tags: [technical, routing, tanstack]
links: [K-001, R-001, D-001]
importance: 8
status: confirmed
version: 1.0.0
updated: 2026-07-15
supersedes: []
source: internal
---

**1. Core Statement**
**Routing is handled strictly via TanStack Router with a file-based structure in the `src/routes` directory.**

**2. Details**

| Priority | Mode / Feature  | Behavior                                        | Launch Phase |
| -------- | --------------- | ----------------------------------------------- | ------------ |
| 1        | Public Website  | `__root.tsx`, `index.tsx`, `services.tsx`       | Day 1        |
| 2        | CMS Admin Panel | `/admin/index.tsx` (Protected by Supabase Auth) | Day 1        |
| 3        | Dynamic Pages   | CMS-driven subpages                             | Phase 2      |

**UX rules:**

- Client-side navigation should feel instantaneous.
- WhatsApp links are direct external anchor tags, bypassing TanStack Router.

**3. Why it matters**

- Understanding the `src/routes` tree is essential for adding new pages or modifying the admin panel without breaking the SSR flow.

**4. Change Log**

- 2026-07-15: Initial creation.
