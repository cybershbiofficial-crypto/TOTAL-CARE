import { useState } from "react";
import { RevealText, RevealBlock } from "@/components/site/Reveal";
import { Magnetic } from "@/components/site/Magnetic";

const roles = [
  "Electricians",
  "Plumbers",
  "Painters",
  "Tile Workers",
  "Gypsum Installers",
  "Carpenters",
  "AC Technicians",
  "General Labour",
  "Supervisors",
  "Foremen",
];

export function Recruitment() {
  const [sent, setSent] = useState(false);
  return (
    <section id="careers" className="relative bg-surface py-10 md:py-14 lg:py-18">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-5">
            <RevealBlock>
              <div className="text-mono-xs text-accent">Join Our Workforce</div>
            </RevealBlock>
            <h2 className="mt-8 text-display-xl text-foreground">
              <RevealText text="Build your" />
              <br />
              <span className="italic">
                <RevealText text="career here." delay={100} />
              </span>
            </h2>
            <RevealBlock delay={250} className="mt-8 text-[15px] leading-relaxed text-mute">
              We are constantly seeking highly skilled, safety-conscious professionals to join our
              expanding teams across the UAE.
            </RevealBlock>
          </div>

          <RevealBlock delay={200} className="md:col-span-6 md:col-start-7" y={40}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-10"
            >
              <div className="grid gap-10 md:grid-cols-2">
                <label className="block">
                  <div className="text-mono-xs text-mute">Full Name</div>
                  <input
                    required
                    className="mt-3 w-full border-b border-line bg-transparent py-3 text-lg text-foreground outline-none focus:border-accent"
                  />
                </label>
                <label className="block">
                  <div className="text-mono-xs text-mute">Phone Number</div>
                  <input
                    required
                    type="tel"
                    className="mt-3 w-full border-b border-line bg-transparent py-3 text-lg text-foreground outline-none focus:border-accent"
                  />
                </label>
              </div>

              <fieldset>
                <legend className="text-mono-xs text-mute">Trade / Specialization</legend>
                <div className="mt-4 flex flex-wrap gap-2">
                  {roles.map((r) => (
                    <label
                      key={r}
                      className="cursor-pointer border border-line px-4 py-2 text-[12px] tracking-wide text-foreground transition-colors has-checked:border-accent has-checked:bg-accent has-checked:text-background hover:border-accent/60"
                    >
                      <input type="radio" name="role" value={r} required className="sr-only" />
                      {r}
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="block">
                <div className="text-mono-xs text-mute">Years of Experience</div>
                <input
                  required
                  type="number"
                  min="0"
                  className="mt-3 w-full border-b border-line bg-transparent py-3 text-lg text-foreground outline-none focus:border-accent"
                />
              </label>

              <div className="flex flex-col items-start gap-6 pt-4">
                <Magnetic strength={0.3}>
                  <button
                    type="submit"
                    disabled={sent}
                    className="group inline-flex items-center gap-4 rounded-full bg-accent px-8 py-4 text-[12px] uppercase tracking-[0.22em] text-background hover:bg-foreground disabled:opacity-50 transition-colors"
                  >
                    {sent ? "Application Sent" : "Submit Application"}
                    <span aria-hidden className="transition-transform group-hover:translate-x-1.5">
                      {sent ? "✓" : "→"}
                    </span>
                  </button>
                </Magnetic>
                {sent && (
                  <p className="text-[13px] text-accent">
                    Thank you. Our recruitment team will contact you shortly.
                  </p>
                )}
              </div>
            </form>
          </RevealBlock>
        </div>
      </div>
    </section>
  );
}
