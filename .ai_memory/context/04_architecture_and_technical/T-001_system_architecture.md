---
id: T-001
title: System Architecture
tags: [technical, architecture, tanstack, react, supabase]
links: [T-002, T-003, K-002]
importance: 10
status: confirmed
version: 1.0.0
updated: 2026-07-15
supersedes: []
source: internal
---

**1. Core Statement**
**TOTAL CARE utilizes TanStack Start (React 19) for full-stack rendering, styled with Tailwind CSS and animated with GSAP + Lenis, backed by Supabase.**

**2. Details**

| Layer         | Choice                          | Notes                                                    |
| ------------- | ------------------------------- | -------------------------------------------------------- |
| Frontend      | TanStack Start (React 19)       | Fast, file-based routing, SSR capabilities.              |
| UI/Animations | Tailwind, GSAP, Lenis           | High-end smooth scrolling and luxury micro-interactions. |
| API           | TanStack Start Server Functions | Embedded API logic within the framework.                 |
| Persistent DB | Supabase (PostgreSQL)           | CMS content and admin data.                              |

**Decoupled storage tiers:**

- **Tier A (persistent):** Supabase CMS data (projects, services, blog).
- **Tier B (ephemeral):** TanStack Query cache.
- **Tier C (never stored):** Admin login passwords (handled securely by Supabase Auth).

**3. Why it matters**

- This architecture enables the high-end luxury feel (GSAP/Lenis) without sacrificing SEO and performance (TanStack SSR).

**4. Change Log**

- 2026-07-15: Initial creation.
