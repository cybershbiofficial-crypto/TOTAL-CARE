const words = [
  "Skilled Labour Supply",
  "★",
  "Safety First",
  "★",
  "Commercial Fit-Outs",
  "★",
  "24/7 Deployment",
  "★",
  "Complete Renovation",
  "★",
  "Certified Professionals",
  "★",
];

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-line/60 bg-surface py-6">
      <div className="flex animate-[marquee_38s_linear_infinite] gap-16 whitespace-nowrap will-change-transform">
        {[...Array(3)].map((_, k) => (
          <div key={k} className="flex gap-16">
            {words.map((w, i) => (
              <span
                key={`${k}-${i}`}
                className={"text-display-md " + (w === "★" ? "text-accent" : "text-foreground/70")}
              >
                {w}
              </span>
            ))}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee { from { transform: translate3d(0,0,0); } to { transform: translate3d(-33.333%,0,0); } }
        @media (prefers-reduced-motion: reduce) { .animate-\\[marquee_38s_linear_infinite\\] { animation: none; } }
      `}</style>
    </div>
  );
}
