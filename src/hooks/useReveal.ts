import { useEffect, useRef } from "react";

/**
 * IntersectionObserver-based reveal. Adds `data-revealed="true"`
 * on the root and cascades a staggered delay to children matching
 * `[data-reveal-child]` via CSS variable `--reveal-i`.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(options?: {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      el.dataset.revealed = "true";
      return;
    }
    const children = el.querySelectorAll<HTMLElement>("[data-reveal-child]");
    children.forEach((c, i) => c.style.setProperty("--reveal-i", String(i)));

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.dataset.revealed = "true";
            if (options?.once !== false) io.unobserve(el);
          } else if (options?.once === false) {
            el.dataset.revealed = "false";
          }
        }
      },
      {
        threshold: options?.threshold ?? 0.15,
        rootMargin: options?.rootMargin ?? "0px 0px -10% 0px",
      },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [options?.threshold, options?.rootMargin, options?.once]);
  return ref;
}
