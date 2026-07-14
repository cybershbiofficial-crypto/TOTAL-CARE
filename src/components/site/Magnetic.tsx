import { useEffect, useRef, type ReactNode } from "react";

export function Magnetic({
  children,
  strength = 0.35,
}: {
  children: ReactNode;
  strength?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canHover) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate3d(${dx * strength}px, ${dy * strength}px, 0)`;
    };
    const onLeave = () => {
      el.style.transform = "translate3d(0,0,0)";
    };
    const parent = el.parentElement;
    if (!parent) return;
    parent.setAttribute("data-magnetic", "");
    parent.addEventListener("pointermove", onMove);
    parent.addEventListener("pointerleave", onLeave);
    return () => {
      parent.removeEventListener("pointermove", onMove);
      parent.removeEventListener("pointerleave", onLeave);
    };
  }, [strength]);
  return (
    <span
      ref={ref}
      className="inline-flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
    >
      {children}
    </span>
  );
}
