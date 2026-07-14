import { RevealText, RevealBlock } from "@/components/site/Reveal";

const steps = [
  {
    n: "I",
    label: "Consultation & Scoping",
    body: "We assess your exact project requirements, workforce needs, and strict deadlines to develop a strategic deployment plan.",
  },
  {
    n: "II",
    label: "Site Evaluation",
    body: "Our senior project managers conduct thorough on-site evaluations to identify structural, logistical, and safety requirements.",
  },
  {
    n: "III",
    label: "Transparent Quotation",
    body: "We provide clear, competitive pricing structures for both daily labour supply and complete turnkey project execution.",
  },
  {
    n: "IV",
    label: "Resource Allocation",
    body: "We carefully select and assemble the right teams of certified electricians, plumbers, carpenters, and master painters.",
  },
  {
    n: "V",
    label: "Rapid Deployment",
    body: "Swift mobilization of our skilled workforce to your site, strictly adhering to industrial safety and compliance protocols.",
  },
  {
    n: "VI",
    label: "Project Management",
    body: "Dedicated foremen and site supervisors ensure your project stays on schedule without compromising on quality.",
  },
  {
    n: "VII",
    label: "Quality Assurance",
    body: "Rigorous milestone inspections by our engineering desk guarantee flawless workmanship that exceeds B2B standards.",
  },
  {
    n: "VIII",
    label: "Final Handover",
    body: "Seamless project delivery, complete site clearing, and a final walkthrough to ensure absolute client satisfaction.",
  },
  {
    n: "IX",
    label: "24/7 Support",
    body: "Our relationship continues with round-the-clock emergency maintenance teams available for post-project requirements.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative bg-surface py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <RevealBlock>
              <div className="text-mono-xs text-accent">04 — Process</div>
            </RevealBlock>
            <h2 className="mt-8 text-display-lg text-foreground">
              <RevealText text="Strategic" />
              <br />
              <span className="text-accent">
                <RevealText text="Execution." delay={100} />
              </span>
            </h2>
            <RevealBlock
              delay={250}
              className="mt-8 max-w-sm text-[15px] leading-relaxed text-mute"
            >
              An organized workflow designed for luxury real estate and commercial spaces.
              Uncompromising precision from consultation to handover.
            </RevealBlock>
          </div>

          <ol className="md:col-span-8">
            {steps.map((s, i) => (
              <li
                key={s.n}
                className="border-b border-line/60 py-10 last:border-b-0 md:py-14 group"
              >
                <RevealBlock delay={i * 120} className="grid grid-cols-12 items-start gap-6">
                  <div className="col-span-2 font-display text-3xl font-medium text-accent md:col-span-1 md:text-4xl transition-colors group-hover:text-foreground">
                    {s.n}
                  </div>
                  <h3 className="col-span-10 text-display-md text-foreground md:col-span-4">
                    {s.label}
                  </h3>
                  <p className="col-span-12 max-w-md text-[15px] leading-relaxed text-mute md:col-span-7">
                    {s.body}
                  </p>
                </RevealBlock>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
