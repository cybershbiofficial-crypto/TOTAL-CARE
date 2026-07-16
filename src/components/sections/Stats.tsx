import { useEffect, useRef, useState } from "react";
import { RevealBlock } from "@/components/site/Reveal";

const stats = [
  { value: 1200, suffix: "+", label: "Certified Professionals", note: "Highly Trained Workforce" },
  { value: 24, suffix: "h", label: "Rapid Deployment", note: "Emergency & Routine" },
  { value: 100, suffix: "%", label: "Safety Compliance", note: "Zero Incident Record" },
  { value: 24, suffix: "/7", label: "Operations Support", note: "Round-the-Clock Teams" },
];

export function Stats() {
  return (
    <section className="relative bg-background py-10 md:py-14 lg:py-18">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="hairline mb-20" />
        <div className="grid gap-16 md:grid-cols-4 md:gap-6">
          {stats.map((s, i) => (
            <RevealBlock key={s.label} delay={i * 120}>
              <Stat {...s} />
            </RevealBlock>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ value, suffix, label, note }: (typeof stats)[number]) {
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) {
            started = true;
            const dur = 1600;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / dur);
              const eased = 1 - Math.pow(1 - t, 3);
              setN(Math.round(value * eased));
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return (
    <div ref={ref} className="border-t border-line/60 pt-8">
      <div className="font-display text-6xl font-medium text-foreground md:text-7xl">
        {n}
        <span className="text-accent">{suffix}</span>
      </div>
      <div className="mt-6 text-[13px] text-foreground">{label}</div>
      <div className="mt-1 text-mono-xs text-mute">{note}</div>
    </div>
  );
}
