import { useState } from "react";
import { RevealBlock, RevealText } from "@/components/site/Reveal";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Maximize2, SlidersHorizontal, Eye } from "lucide-react";
import img1 from "@/assets/client/carpenter-woodwork.jpeg";
import img2 from "@/assets/client/ac-maintenance.jpeg";
import img3 from "@/assets/client/plumbing-under-sink.jpeg";
import img4 from "@/assets/client/ac-installation.jpeg";
import img5 from "@/assets/client/tv-wall-mount.jpeg";
import img6 from "@/assets/client/carpenter-cutting.jpeg";
import img7 from "@/assets/client/ceiling-gypsum.jpeg";
import img8 from "@/assets/client/plumbing-sink.jpeg";

const categories = ["All", "Turnkey", "Residential", "Commercial", "Before/After"];

const galleryData = [
  {
    id: 1,
    type: "standard",
    image: img1,
    category: "Turnkey",
    title: "Luxury Carpentry",
    location: "Palm Jumeirah",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    id: 2,
    type: "before-after",
    before: img2,
    after: img4,
    category: "Before/After",
    title: "AC System Upgrade",
    location: "Emirates Hills",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    id: 3,
    type: "standard",
    image: img3,
    category: "Commercial",
    title: "Plumbing Network",
    location: "Business Bay",
    span: "col-span-1 row-span-1",
  },
  {
    id: 4,
    type: "standard",
    image: img5,
    category: "Residential",
    title: "Media Wall Installation",
    location: "Dubai Marina",
    span: "col-span-1 row-span-2",
  },
  {
    id: 5,
    type: "standard",
    image: img6,
    category: "Commercial",
    title: "Retail Fit-out",
    location: "Dubai Mall",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    id: 6,
    type: "before-after",
    before: img7,
    after: img8,
    category: "Before/After",
    title: "Complete Overhaul",
    location: "JVC Dubai",
    span: "col-span-1 row-span-1",
  },
];

export function BeforeAfterGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredGallery = activeCategory === "All" 
    ? galleryData 
    : galleryData.filter(item => item.category === activeCategory || (activeCategory === "Before/After" && item.type === "before-after"));

  return (
    <section className="relative bg-background py-16 md:py-24 border-t border-line/20">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <RevealBlock>
              <div className="text-eyebrow text-accent mb-6">03 — Portfolio</div>
            </RevealBlock>
            <h2 className="text-display-lg text-foreground">
              <RevealText text="Visual." delay={80} />
              <br />
              <span className="text-mute">
                <RevealText text="Excellence." delay={180} />
              </span>
            </h2>
          </div>

          <RevealBlock delay={200} className="max-w-md text-[15px] leading-relaxed text-mute border-l border-accent/50 pl-6">
            Explore our curated gallery of high-end turnkey renovations, custom carpentry, and complete commercial fit-outs across the UAE.
          </RevealBlock>
        </div>

        {/* Category Filters */}
        <RevealBlock delay={300} className="mt-16 flex flex-wrap items-center gap-3 md:gap-6">
          <div className="flex items-center gap-2 mr-4 text-mute">
            <SlidersHorizontal className="h-4 w-4" />
            <span className="text-[11px] uppercase tracking-widest font-bold">Filter</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-500 border
                ${activeCategory === cat 
                  ? 'bg-foreground text-background border-foreground shadow-lg' 
                  : 'bg-transparent text-foreground border-line/50 hover:border-accent hover:text-accent'}`}
            >
              {cat}
            </button>
          ))}
        </RevealBlock>

        {/* Masonry Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {filteredGallery.map((item, index) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <div 
                  className={`group relative overflow-hidden rounded-xl bg-graphite cursor-pointer transition-all duration-700 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/10 border border-line/10 ${item.span}`}
                >
                  {item.type === "standard" ? (
                    <>
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    </>
                  ) : (
                    <div className="absolute inset-0 w-full h-full">
                      {/* Simple CSS-based Before/After split for the thumbnail */}
                      <div className="absolute inset-0 flex">
                        <div className="w-1/2 h-full overflow-hidden relative">
                          <img src={item.before} className="absolute h-full w-[200%] max-w-none object-cover left-0 filter grayscale contrast-125" alt="Before" />
                          <div className="absolute top-4 left-4 bg-background/80 backdrop-blur text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded text-foreground">Before</div>
                        </div>
                        <div className="w-1/2 h-full overflow-hidden relative border-l border-accent">
                          <img src={item.after} className="absolute h-full w-[200%] max-w-none object-cover right-0 transition-transform duration-1000 group-hover:scale-105" alt="After" />
                          <div className="absolute top-4 right-4 bg-accent/90 backdrop-blur text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded text-background">After</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Hover Overlay Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] text-accent font-bold uppercase tracking-widest px-3 py-1 bg-background/50 backdrop-blur-md rounded-full border border-accent/20">
                        {item.category}
                      </span>
                      <div className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-md flex items-center justify-center text-foreground hover:bg-accent hover:text-background transition-colors duration-300">
                        {item.type === "before-after" ? <Eye className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                      </div>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-foreground drop-shadow-md">{item.title}</h3>
                    <p className="text-[13px] text-ivory/80 font-light drop-shadow-sm">{item.location}</p>
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent className="max-w-6xl p-0 overflow-hidden bg-background border-line/20 rounded-2xl">
                {item.type === "standard" ? (
                  <div className="relative w-full h-[80vh]">
                    <img src={item.image} alt={item.title} className="w-full h-full object-contain bg-black/5" />
                    <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-background to-transparent">
                      <div className="inline-block px-4 py-1.5 bg-accent text-background text-[11px] font-bold uppercase tracking-widest mb-3 rounded-full">
                        {item.category}
                      </div>
                      <h3 className="text-4xl font-display font-bold text-foreground">{item.title}</h3>
                      <p className="text-mute text-lg mt-2">{item.location}</p>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-[80vh] flex flex-col md:flex-row bg-background">
                    <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden group/before">
                      <img src={item.before} className="w-full h-full object-cover filter grayscale contrast-125 transition-transform duration-1000 group-hover/before:scale-105" alt="Before" />
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute top-6 left-6 px-4 py-2 bg-background/80 backdrop-blur-md text-foreground text-xs font-bold tracking-widest uppercase rounded">Pre-Renovation</div>
                    </div>
                    <div className="w-px h-full bg-accent relative z-10 hidden md:block" />
                    <div className="h-px w-full bg-accent relative z-10 md:hidden" />
                    <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden group/after">
                      <img src={item.after} className="w-full h-full object-cover transition-transform duration-1000 group-hover/after:scale-105" alt="After" />
                      <div className="absolute bottom-6 right-6 px-4 py-2 bg-accent/90 backdrop-blur-md text-background text-xs font-bold tracking-widest uppercase rounded shadow-2xl">Post-Renovation</div>
                    </div>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
