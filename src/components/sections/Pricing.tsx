import { RevealText, RevealBlock } from "@/components/site/Reveal";
import { CheckCircle2 } from "lucide-react";

export function Pricing() {
  return (
    <section id="pricing" className="relative bg-background py-16 md:py-24">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <RevealBlock>
              <div className="text-eyebrow text-accent">03 — Pricing</div>
            </RevealBlock>
            <h2 className="mt-8 text-display-lg text-foreground">
              <RevealText text="Transparent," delay={60} />
              <br />
              <span className="text-mute">
                <RevealText text="Predictable Value." delay={160} />
              </span>
            </h2>
          </div>
          <RevealBlock delay={200} className="max-w-sm text-[15px] leading-relaxed text-mute">
            Clear, competitive pricing structures for both daily maintenance and complete turnkey
            project execution.
          </RevealBlock>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <RevealBlock delay={100}>
            <div className="flex h-full flex-col rounded-[2rem] border border-line/40 bg-surface/30 p-10 md:p-12 transition-all duration-700 hover:border-line/80 hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.2)] ease-[cubic-bezier(0.25,1,0.5,1)]">
              <div className="mb-8">
                <h3 className="text-display-md text-foreground font-extrabold tracking-tight">
                  Basic Plan
                </h3>
                <p className="mt-4 text-[15px] leading-loose text-ivory/80 font-light">
                  Ideal for routine maintenance, minor repairs, and individual trade services.
                </p>
              </div>

              <ul className="mb-10 flex-1 space-y-5 text-[15px] text-foreground font-medium">
                {[
                  "Small home maintenance",
                  "Minor repairs",
                  "Painting",
                  "Electrical work",
                  "Plumbing",
                  "AC servicing",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-4">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-xl border border-line/50 bg-transparent px-8 py-5 text-[12px] font-extrabold uppercase tracking-[0.2em] text-foreground transition-all duration-500 hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]"
              >
                Request a Quote
                <span className="transition-transform group-hover:translate-x-2">→</span>
              </a>
            </div>
          </RevealBlock>

          {/* Premium Plan */}
          <RevealBlock delay={200}>
            <div className="relative flex h-full flex-col rounded-[2rem] border border-accent/80 bg-surface/50 p-10 md:p-12 shadow-[0_15px_40px_-10px_rgba(212,175,55,0.15)] transition-all duration-700 hover:shadow-[0_30px_60px_-15px_rgba(212,175,55,0.25)] hover:-translate-y-2 ease-[cubic-bezier(0.25,1,0.5,1)] backdrop-blur-xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-accent px-6 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-background shadow-lg">
                Most Popular
              </div>

              <div className="mb-8 mt-4">
                <h3 className="text-display-md text-foreground font-extrabold tracking-tight">
                  Premium Plan
                </h3>
                <p className="mt-4 text-[15px] leading-loose text-ivory/80 font-light">
                  Comprehensive turnkey solutions and full-scale workforce deployment.
                </p>
              </div>

              <ul className="mb-10 flex-1 space-y-5 text-[15px] text-foreground font-medium">
                {[
                  "Complete renovation",
                  "Villa renovation",
                  "Commercial projects",
                  "Interior works",
                  "Full labour supply",
                  "Project management",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-4">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-accent px-8 py-5 text-[12px] font-extrabold uppercase tracking-[0.2em] text-background shadow-lg transition-all duration-500 hover:bg-foreground hover:text-background hover:shadow-[0_15px_30px_-5px_rgba(212,175,55,0.4)]"
              >
                Get Started Now
                <span className="transition-transform group-hover:translate-x-2">→</span>
              </a>
            </div>
          </RevealBlock>
        </div>
      </div>
    </section>
  );
}
