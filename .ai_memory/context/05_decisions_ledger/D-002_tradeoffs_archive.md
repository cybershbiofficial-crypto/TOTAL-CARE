---
id: D-002
title: Tradeoffs Archive
tags: [decisions, tradeoffs]
links: [D-001, R-002, K-001]
importance: 5
status: confirmed
version: 1.0.0
updated: 2026-07-15
supersedes: []
source: internal
---

**1. Core Statement**
**This ledger archives rejected alternatives and accepted tradeoffs in the TOTAL CARE project.**

**2. Details**

- **Rejected alternatives table**:

  | Proposal               | Source        | Rejection Reason                                                      | Superseded by               |
  | ---------------------- | ------------- | --------------------------------------------------------------------- | --------------------------- |
  | Built-in Contact Forms | Initial Scope | Dubai clients prefer instant WhatsApp communication over email forms. | Direct WhatsApp Integration |
  | Standard React Router  | Setup         | Needed better SSR and file-based routing for SEO.                     | TanStack Start              |

- **Accepted tradeoffs table**:
  | Chosen Side            | Sacrifice                                       | Rationale                                                                                    |
  | ---------------------- | ----------------------------------------------- | -------------------------------------------------------------------------------------------- |
  | Vercel CLI Deployments | Clean automated CI/CD logs strictly from GitHub | Need immediate visual deployment feedback for the client without waiting for webhook queues. |
  | GSAP + Lenis           | Slightly higher bundle size                     | The luxury positioning of the brand strictly requires ultra-smooth micro-animations.         |

**3. Why it matters**

- Documents the historical context of "why we didn't do X" so future developers don't repeat mistakes.

**4. Change Log**

- 2026-07-15: Initial creation.
