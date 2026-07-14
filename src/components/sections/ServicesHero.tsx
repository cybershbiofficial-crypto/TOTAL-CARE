import { RevealText, RevealBlock } from "@/components/site/Reveal";

export function ServicesHero() {
  return (
    <section className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden bg-background pt-32 pb-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888086925-0c770f4e7d14?q=80&w=1200&auto=format&fit=crop"
          alt="Luxury Renovation Services"
          className="h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-background" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 text-center md:px-10">
        <RevealBlock>
          <div className="text-mono-xs font-medium uppercase tracking-widest text-accent">
            Our Expertise
          </div>
        </RevealBlock>
        <h1 className="mx-auto mt-6 max-w-4xl text-display-xl text-white">
          <RevealText text="Precision." delay={100} />
          <br />
          <RevealText text="Craftsmanship." delay={250} />
          <br />
          <span className="text-accent">
            <RevealText text="Excellence." delay={400} />
          </span>
        </h1>
        <RevealBlock delay={600}>
          <p className="mx-auto mt-10 max-w-2xl text-[16px] leading-relaxed text-white/80">
            TOTAL CARE delivers uncompromising quality across every trade. From providing certified
            professional labour to executing full-scale luxury turnkey renovations, we bring
            architectural visions to life with absolute precision.
          </p>
        </RevealBlock>
      </div>
    </section>
  );
}
