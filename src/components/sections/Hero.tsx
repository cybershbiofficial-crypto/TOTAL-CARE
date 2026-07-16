import { RevealText, RevealBlock } from "@/components/site/Reveal";
import { Magnetic } from "@/components/site/Magnetic";
import heroImg from "@/assets/hero.jpg";

export function Hero({ cmsContent }: { cmsContent?: any[] }) {
  const heroData = cmsContent?.find((c) => c.id === "home_hero")?.content || {
    title: "Enterprise",
    subtitle: "Dubai's Premier Construction Partner",
    description:
      "Elevating commercial and residential spaces across Dubai with unmatched craftsmanship, certified engineering, and flawless execution.",
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-16 overflow-hidden bg-background">
      {/* Background Image with Parallax & Overlay */}
      <div className="absolute inset-0 z-0 bg-background">
        <img
          src={heroImg}
          alt="Luxury Renovation in Dubai"
          className="w-full h-full object-cover opacity-60"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-16">
        <div className="lg:col-span-8 max-w-3xl">
          <RevealBlock>
            <div className="mb-6 inline-flex items-center gap-2 md:gap-3 border border-line/50 bg-surface/80 backdrop-blur-md px-4 py-2 md:px-5 md:py-2.5 rounded-full shadow-lg">
              <span className="flex h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-accent animate-pulse shadow-[0_0_10px_var(--color-accent)]"></span>
              <span className="text-[9px] md:text-[11px] font-bold uppercase tracking-wider md:tracking-widest text-foreground">
                {heroData.subtitle}
              </span>
            </div>
          </RevealBlock>

          <h1 className="text-display-xl text-foreground font-extrabold mb-8 drop-shadow-2xl tracking-tighter leading-none max-w-[18ch]">
            <RevealText text={heroData.title} delay={100} />
            <br />
            <span className="text-accent">
              <RevealText text="Luxury Renovation." delay={200} />
            </span>
          </h1>

          <RevealBlock
            delay={300}
            className="max-w-[45ch] text-base md:text-lg text-ivory/90 leading-relaxed font-light mb-10 drop-shadow-sm"
          >
            {heroData.description}
          </RevealBlock>

          <RevealBlock delay={400} className="flex flex-wrap items-center gap-4 md:gap-6">
            <Magnetic strength={0.2}>
              <a
                href="#contact"
                className="group relative overflow-hidden bg-accent px-8 md:px-10 py-4 md:py-5 text-[11px] md:text-[12px] font-extrabold uppercase tracking-[0.2em] text-background transition-all duration-700 hover:shadow-[0_15px_30px_-5px_rgba(212,175,55,0.4)] ease-[cubic-bezier(0.25,1,0.5,1)] rounded-sm"
              >
                <div className="absolute inset-0 w-0 bg-foreground transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:w-full z-0" />
                <span className="relative z-10 flex items-center gap-3 transition-colors duration-700 group-hover:text-background">
                  Consult Our Experts{" "}
                  <span className="transition-transform duration-700 group-hover:translate-x-2">
                    →
                  </span>
                </span>
              </a>
            </Magnetic>

            <a
              href="#projects"
              className="group flex items-center gap-3 px-6 md:px-8 py-4 md:py-5 text-[11px] md:text-[12px] font-bold uppercase tracking-[0.2em] text-foreground transition-colors hover:text-accent"
            >
              View Projects
              <span className="h-px w-8 bg-line transition-all duration-500 group-hover:w-16 group-hover:bg-accent" />
            </a>
          </RevealBlock>
        </div>

        <div className="lg:col-span-4 lg:text-right hidden lg:flex flex-col items-end gap-12">
          <RevealBlock delay={500}>
            <p className="text-display-md text-foreground drop-shadow-md">500+</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-accent mt-2">
              Projects Completed
            </p>
          </RevealBlock>
          <RevealBlock delay={600}>
            <p className="text-display-md text-foreground drop-shadow-md">100%</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-accent mt-2">
              Compliance Rating
            </p>
          </RevealBlock>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-line/50 to-transparent" />
    </section>
  );
}
