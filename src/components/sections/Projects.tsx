import { RevealText, RevealBlock } from "@/components/site/Reveal";
import { ArrowRight, MapPin } from "lucide-react";
import project1 from "@/assets/client/interior-fitout.jpeg";
import project2 from "@/assets/client/kitchen-renovation.jpeg";
import project3 from "@/assets/client/electrical-wiring.jpeg";
import project4 from "@/assets/client/painting-wall.jpeg";

const projects = [
  {
    id: "proj-1",
    title: "Emirates Hills Villa",
    location: "Emirates Hills, Sector E",
    category: "Full Renovation",
    description:
      "Complete turnkey structural and interior transformation of a 12,000 sq ft luxury villa.",
    img: project1,
  },
  {
    id: "proj-2",
    title: "Palm Jumeirah Penthouse",
    location: "Palm Jumeirah",
    category: "Interior Fit-out",
    description:
      "High-end bespoke joinery, smart home integration, and premium marble flooring installation.",
    img: project2,
  },
  {
    id: "proj-3",
    title: "DIFC Corporate Office",
    location: "Dubai International Financial Centre",
    category: "Commercial Fit-out",
    description:
      "Modern open-plan corporate workspace with acoustic partitions and intelligent lighting.",
    img: project3,
  },
  {
    id: "proj-4",
    title: "Dubai Marina Apartment",
    location: "Dubai Marina",
    category: "Luxury Redesign",
    description:
      "A complete aesthetic overhaul featuring custom wall paneling and bespoke kitchen design.",
    img: project4,
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative bg-surface py-10 md:py-14 lg:py-18">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-12 border-b border-line pb-12">
          <div className="max-w-2xl">
            <RevealBlock>
              <div className="text-eyebrow text-accent mb-6">03 — Signature Portfolio</div>
            </RevealBlock>
            <h2 className="text-display-lg text-foreground">
              <RevealText text="Crafting." delay={80} />
              <br />
              <span className="text-mute">
                <RevealText text="Legacy Spaces." delay={180} />
              </span>
            </h2>
          </div>
          <RevealBlock delay={200}>
            <a
              href="/services"
              className="inline-flex items-center gap-3 border border-accent px-8 py-4 text-[11px] font-bold uppercase tracking-widest text-foreground transition-all duration-500 hover:bg-accent hover:text-background"
            >
              View Full Gallery <ArrowRight className="h-4 w-4" />
            </a>
          </RevealBlock>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          {projects.map((proj, i) => (
            <RevealBlock
              key={proj.id}
              delay={i * 100}
              className="group relative flex flex-col h-[500px] md:h-[600px] overflow-hidden rounded-[2rem] bg-graphite cursor-pointer shadow-xl hover:shadow-[0_30px_60px_-15px_rgba(212,175,55,0.25)] transition-all duration-1000 hover:-translate-y-3 border border-line/10 ease-[cubic-bezier(0.25,1,0.5,1)]"
            >
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 opacity-70 group-hover:opacity-100 ease-[cubic-bezier(0.25,1,0.5,1)]"
                />
                {/* Premium Luxury Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-1000" />
              </div>

              <div className="relative z-10 flex flex-col justify-end h-full p-10 md:p-12 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">

                <div className="flex items-center justify-between mb-6">
                  <div className="inline-block bg-background/60 backdrop-blur-md border border-line/20 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-accent shadow-sm">
                    {proj.category}
                  </div>
                  <div className="flex items-center gap-2 text-ivory/90 text-[12px] font-medium tracking-widest uppercase">
                    <MapPin className="h-3.5 w-3.5 text-accent" /> {proj.location}
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-display font-extrabold text-foreground mb-4 drop-shadow-lg group-hover:text-accent transition-colors duration-500 tracking-tight leading-tight">
                  {proj.title}
                </h3>

                <p className="text-ivory/80 text-[15px] leading-loose mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 max-w-[65ch]">
                  {proj.description}
                </p>

                <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-accent opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 translate-y-4 group-hover:translate-y-0">
                  Read More <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </RevealBlock>
          ))}
        </div>
      </div>
    </section>
  );
}
