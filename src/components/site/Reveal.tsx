import type { ElementType, ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

/** Splits text into words wrapped in reveal masks. */
export function RevealText({
  text,
  as: As = "span",
  className = "",
  delay = 0,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
}) {
  const ref = useReveal<HTMLElement>();
  const words = text.split(" ");
  return (
    <As
      ref={ref as never}
      className={"reveal-root " + className}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {words.map((w, i) => (
        <span key={i} className="reveal-line align-baseline">
          <span className="reveal-inner" data-reveal-child>
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
      <style>{`
        .reveal-root[data-revealed="true"] .reveal-inner {
          transform: translateY(0);
          transition: transform 1.1s var(--ease-out-expo, cubic-bezier(0.16,1,0.3,1));
          transition-delay: calc(var(--reveal-delay, 0ms) + var(--reveal-i, 0) * 55ms);
        }
      `}</style>
    </As>
  );
}

export function RevealBlock({
  children,
  className = "",
  delay = 0,
  y = 28,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={"reveal-block " + className}
      style={
        {
          ["--reveal-delay" as string]: `${delay}ms`,
          ["--reveal-y" as string]: `${y}px`,
        } as React.CSSProperties
      }
    >
      {children}
      <style>{`
        .reveal-block { opacity: 0; transform: translateY(var(--reveal-y, 28px)); transition: opacity 1.1s ease, transform 1.1s cubic-bezier(0.16,1,0.3,1); transition-delay: var(--reveal-delay, 0ms); will-change: opacity, transform; }
        .reveal-block[data-revealed="true"] { opacity: 1; transform: translateY(0); }
      `}</style>
    </div>
  );
}
