---
id: L-002
title: Mistakes and Regressions
tags: [learnings, mistakes, bugs]
links: [X-001, T-003]
importance: 10
status: confirmed
version: 1.0.0
updated: 2026-07-15
supersedes: []
source: internal
---

**1. Core Statement**
**This ledger tracks AI agent mistakes and codebase regressions to prevent repeated errors.**

**2. Details**

| Date       | Mistake / Regression                                              | Resolution                                  | Preventive Measure                              |
| ---------- | ----------------------------------------------------------------- | ------------------------------------------- | ----------------------------------------------- |
| 2026-07-14 | Deployed using webhook, causing delay for client review.          | Used `vercel --prod` to bypass queue.       | Always use `vercel --prod` CLI.                 |
| 2026-07-14 | Added new image with wrong path `/images/srv-waterproofing.webp`. | Copied correct file and imported it in TSX. | Verify asset paths immediately after replacing. |

**3. Why it matters**

- Prevents agents from falling into the same failure loops during complex debugging.

**4. Change Log**

- 2026-07-15: Initial creation.
