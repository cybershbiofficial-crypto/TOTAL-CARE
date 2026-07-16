import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { RevealText, RevealBlock } from "@/components/site/Reveal";
import { Quote, Star, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Tariq Al Habtoor",
    location: "Emirates Hills, Dubai",
    rating: 5,
    text: "TOTAL CARE transformed our villa beyond expectations. The attention to detail in the custom joinery and marble installation was flawless. Their team managed everything seamlessly from approvals to handover.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Sarah Williams",
    location: "Palm Jumeirah, Dubai",
    rating: 5,
    text: "We hired them for a complete luxury redesign of our penthouse. The gypsum work, the intelligent lighting, and the flawless paint finishes truly created a masterpiece. Absolute professionals.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Mohammed Al Fayed",
    location: "DIFC, Dubai",
    rating: 5,
    text: "As a commercial property developer, I demand excellence. TOTAL CARE delivered a world-class office fit-out on strict deadlines. Their engineering and MEP teams are highly skilled and fully compliant.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Elena Rostova",
    location: "Dubai Marina, Dubai",
    rating: 5,
    text: "The waterproofing and plumbing overhaul they did on my property saved me from continuous maintenance nightmares. Premium materials, highly certified technicians, and absolute transparency.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);

    // Auto play
    const interval = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [emblaApi, onSelect]);

  return (
    <section id="testimonials" className="relative bg-background py-10 md:py-14 lg:py-18 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-foreground/5 rounded-full blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-12 mb-20">
          <div className="max-w-2xl">
            <RevealBlock>
              <div className="text-eyebrow text-accent mb-6">04 — Client Testimonials</div>
            </RevealBlock>
            <h2 className="text-display-lg text-foreground">
              <RevealText text="Trusted by" delay={80} />
              <br />
              <span className="text-mute">
                <RevealText text="Dubai's Elite." delay={180} />
              </span>
            </h2>
          </div>

          <RevealBlock delay={200} className="flex gap-4">
            <button
              onClick={scrollPrev}
              className="h-14 w-14 rounded-full border border-line bg-surface flex items-center justify-center text-foreground hover:bg-accent hover:text-background hover:border-accent transition-all duration-300 shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              className="h-14 w-14 rounded-full border border-line bg-surface flex items-center justify-center text-foreground hover:bg-accent hover:text-background hover:border-accent transition-all duration-300 shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </RevealBlock>
        </div>

        <RevealBlock delay={300}>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-6">
              {testimonials.map((testi) => (
                <div key={testi.id} className="min-w-0 flex-none pl-6 w-full md:w-[600px]">
                  <div className="relative h-full flex flex-col p-10 md:p-12 rounded-[2rem] bg-surface/40 backdrop-blur-2xl border border-white/10 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_30px_60px_-15px_rgba(212,175,55,0.15)] hover:-translate-y-3 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group">
                    <Quote className="absolute top-10 right-10 h-16 w-16 text-accent/10 group-hover:text-accent/20 transition-colors duration-500 transform rotate-180" />

                    <div className="flex gap-1 mb-8">
                      {[...Array(testi.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>

                    <p className="text-lg md:text-xl text-foreground font-light leading-loose mb-10 italic max-w-[55ch]">
                      "{testi.text}"
                    </p>

                    <div className="mt-auto flex items-center gap-5 pt-6 border-t border-line/30">
                      <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-accent/30 shadow-lg">
                        <img
                          src={testi.image}
                          alt={testi.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-display font-extrabold text-lg text-foreground tracking-tight">
                          {testi.name}
                        </h4>
                        <div className="flex items-center gap-1.5 text-xs font-medium text-ivory/70 uppercase tracking-widest mt-1">
                          <MapPin className="h-3 w-3 text-accent" /> {testi.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealBlock>

        {/* Progress indicators */}
        <div className="flex justify-center mt-12 gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === selectedIndex ? "w-8 bg-accent" : "w-2 bg-line"}`}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
