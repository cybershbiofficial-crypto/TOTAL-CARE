import { RevealText, RevealBlock } from "@/components/site/Reveal";

export function Philosophy() {
  return (
    <section id="philosophy" className="relative bg-background py-10 md:py-14 lg:py-18">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-12 md:gap-24">
          <div className="md:col-span-5">
            <RevealBlock>
              <div className="text-mono-xs text-accent font-medium tracking-widest">
                01 — Why Choose Us
              </div>
            </RevealBlock>
            <h2 className="mt-8 text-display-lg text-foreground">
              <RevealText text="Uncompromising" />
              <br />
              <RevealText text="Quality," delay={80} />
              <br />
              <span className="text-accent">
                <RevealText text="Certified Experts." delay={160} />
              </span>
            </h2>

            <RevealBlock
              delay={300}
              className="mt-12 max-w-md space-y-6 text-[15px] leading-relaxed text-mute"
            >
              <p>
                TOTAL CARE sets the benchmark for skilled workforce deployment and high-end
                renovation execution. We don't just supply labour; we supply peace of mind. Every
                tradesman is rigorously tested, safety-certified, and managed by our experienced
                engineering desk.
              </p>
              <p>
                From rapid emergency plumbing support to deploying a complete structural team for a
                corporate headquarters, we guarantee precision, strict compliance with safety
                standards, and absolute transparency.
              </p>
            </RevealBlock>

            <RevealBlock
              delay={500}
              className="mt-14 grid grid-cols-2 gap-y-8 gap-x-6 border-t border-line/60 pt-10 text-sm"
            >
              {[
                ["01", "Certified Professionals"],
                ["02", "Strict Safety Standards"],
                ["03", "Absolute Transparency"],
                ["04", "On-Time Completion"],
              ].map(([n, label]) => (
                <div key={n}>
                  <div className="text-mono-xs text-accent font-medium">{n}</div>
                  <div className="mt-2 text-foreground font-medium">{label}</div>
                </div>
              ))}
            </RevealBlock>
          </div>

          <div className="relative md:col-span-6 md:col-start-7">
            <RevealBlock y={60}>
              <figure className="relative overflow-hidden border border-line/40">
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=100&w=2400&auto=format&fit=crop"
                  alt="Professional engineers collaborating"
                  loading="lazy"
                  width={1600}
                  height={1200}
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
                <figcaption className="absolute bottom-6 left-6 text-mono-xs text-foreground font-bold">
                  Quality Assurance · Technical Precision
                </figcaption>
              </figure>
            </RevealBlock>
            <RevealBlock
              delay={200}
              className="mt-8 flex items-center justify-between text-mono-xs text-mute"
            >
              <span>Detail 04 / 12</span>
              <span>© TOTAL CARE</span>
            </RevealBlock>
          </div>
        </div>
      </div>
    </section>
  );
}
