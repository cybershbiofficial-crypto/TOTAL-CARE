import { RevealText, RevealBlock } from "@/components/site/Reveal";

const industries = [
  "Residential & Luxury Villas",
  "Commercial & Offices",
  "Industrial & Warehouses",
  "Hospitality & Hotels",
  "Healthcare Facilities",
  "Retail & Shopping Malls",
  "Educational Buildings",
  "Government Projects",
];

export function Industries() {
  return (
    <section id="industries" className="relative bg-surface py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <RevealBlock>
              <div className="text-mono-xs text-accent">Sectors</div>
            </RevealBlock>
            <h2 className="mt-8 text-display-lg text-foreground">
              <RevealText text="Sectors" delay={80} />
              <br />
              <span className="text-accent">
                <RevealText text="We Serve." delay={180} />
              </span>
            </h2>
          </div>
          <RevealBlock delay={200} className="max-w-sm text-[15px] leading-relaxed text-mute">
            Our skilled workforce and project managers are equipped to handle the unique demands of
            diverse sectors across the UAE.
          </RevealBlock>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <RevealBlock key={ind} delay={i * 100}>
              <div className="group flex h-40 items-center justify-center border border-line/60 bg-background/50 p-6 text-center transition-colors hover:border-accent hover:bg-accent/5">
                <h3 className="text-[15px] tracking-wide text-foreground transition-transform duration-500 group-hover:scale-105">
                  {ind}
                </h3>
              </div>
            </RevealBlock>
          ))}
        </div>
      </div>
    </section>
  );
}
