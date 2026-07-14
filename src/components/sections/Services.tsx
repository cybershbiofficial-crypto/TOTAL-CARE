import { RevealText, RevealBlock } from "@/components/site/Reveal";
import {
  Shield,
  PaintRoller,
  Grid,
  DoorOpen,
  Zap,
  Wrench,
  Layers,
  Hammer,
  Tv,
  Snowflake,
  Building,
  PhoneCall,
} from "lucide-react";
import imgWaterproofing from "@/assets/client/whater-proffing.jpeg";
import imgPainting from "@/assets/client/painting-yellow.jpeg";
import imgTiling from "@/assets/client/flooring-tiling.jpeg";
import imgDoorPolish from "@/assets/client/door-installation.jpeg";
import imgElectrician from "@/assets/client/electrical-panel.jpeg";
import imgPlumbing from "@/assets/client/plumbing-sink.jpeg";
import imgGypsum from "@/assets/client/ceiling-gypsum.jpeg";
import imgCarpenter from "@/assets/client/carpenter-cutting.jpeg";
import imgTvWall from "@/assets/client/tv-wall-mount.jpeg";
import imgAcService from "@/assets/client/ac-installation.jpeg";
import imgRenovation from "@/assets/client/interior-fitout.jpeg";
import imgCustom from "@/assets/client/kitchen-renovation.jpeg";

const services = [
  {
    n: "01",
    id: "waterproofing",
    icon: Shield,
    image: imgWaterproofing,
    title: "Waterproofing",
    lead: "Professional roof and structural membrane waterproofing systems.",
    items: ["Roof waterproofing", "Wet area sealing", "Basement tanking", "Leakage injection"],
    details: {
      description: "Deploying high-performance elastomeric and bituminous membranes.",
      benefits: ["10-Year warranty", "Thermal insulation"],
    },
  },
  {
    n: "02",
    id: "painting",
    icon: PaintRoller,
    image: imgPainting,
    title: "Wall Painting",
    lead: "Premium interior and exterior painting with flawless finishes.",
    items: ["Luxury wall finishes", "Stucco & textured paints", "Exterior weatherproofing"],
    details: {
      description: "Flawless surface preparation and premium luxury paint applications.",
      benefits: ["Perfect color matching", "Ultra-smooth finish"],
    },
  },
  {
    n: "03",
    id: "tiling",
    icon: Grid,
    image: imgTiling,
    title: "Tile Installation",
    lead: "Precision wall and floor tile laying, marble installation.",
    items: ["Large-format tiles", "Marble book-matching", "Epoxy grouting"],
    details: {
      description: "Elite tile installation for residential and commercial spaces.",
      benefits: ["Zero-lip leveling", "Laser-guided alignment"],
    },
  },
  {
    n: "04",
    id: "doorpolish",
    icon: DoorOpen,
    image: imgDoorPolish,
    title: "Door Polish",
    lead: "Restorative wood polishing and premium door refinishing.",
    items: ["Melamine & PU polishing", "Teak & Oak restoration"],
    details: {
      description: "Transform your wooden entrances and panels with premium wood polish.",
      benefits: ["Enhanced wood grains", "UV protection"],
    },
  },
  {
    n: "05",
    id: "electrician",
    icon: Zap,
    image: imgElectrician,
    title: "Electrician",
    lead: "Certified electrical installation, maintenance, and smart upgrades.",
    items: ["Smart home automation", "DB board upgrading"],
    details: {
      description: "Deploying safety-certified, highly skilled electrical engineers.",
      benefits: ["DEWA-compliant", "Safety certified"],
    },
  },
  {
    n: "06",
    id: "plumbing",
    icon: Wrench,
    image: imgPlumbing,
    title: "Plumbing",
    lead: "Advanced sanitization, piping networks, and fixture installations.",
    items: ["PPR & PEX piping", "Luxury fixture fitting"],
    details: {
      description: "Precision plumbing works utilizing high-quality piping networks.",
      benefits: ["Pressure tested", "Leak-free assurance"],
    },
  },
  {
    n: "07",
    id: "gypsum",
    icon: Layers,
    image: imgGypsum,
    title: "Gypsum Carpenter",
    lead: "Bespoke ceiling grids, partition walls, and ambient light coves.",
    items: ["Suspended ceilings", "Acoustic partitions"],
    details: {
      description: "Creating modern ceiling profiles and partition walls using premium gypsum.",
      benefits: ["Laser-level alignment", "Seamless joining"],
    },
  },
  {
    n: "08",
    id: "carpenter",
    icon: Hammer,
    image: imgCarpenter,
    title: "Wood Carpenter",
    lead: "Custom millwork, bespoke joinery, and premium cabinetry.",
    items: ["Wardrobe integration", "Custom vanity units"],
    details: {
      description: "Master craftsmanship in custom joinery and woodwork.",
      benefits: ["Bespoke dimensions", "Premium hardware"],
    },
  },
  {
    n: "09",
    id: "tvwall",
    icon: Tv,
    image: imgTvWall,
    title: "TV Wall Designer",
    lead: "Luxury media walls with integrated stone, wood, and lighting.",
    items: ["Marble book-matching", "LED backlight profiles"],
    details: {
      description: "Elevate your entertainment spaces with a custom-built media wall.",
      benefits: ["Concealed cabling", "Integrated lighting"],
    },
  },
  {
    n: "10",
    id: "acservice",
    icon: Snowflake,
    image: imgAcService,
    title: "AC Service",
    lead: "Precision HVAC cleaning, diagnostic maintenance, and installations.",
    items: ["Deep duct sanitization", "Compressor diagnostics"],
    details: {
      description: "Keep your indoor air pristine with technical AC servicing.",
      benefits: ["Improved air quality", "Lower power bills"],
    },
  },
  {
    n: "11",
    id: "renovation",
    icon: Building,
    image: imgRenovation,
    title: "All Types of Renovation",
    lead: "Comprehensive turnkey remodeling for luxury villas and offices.",
    items: ["Turnkey villa renovation", "Office workspace design"],
    details: {
      description: "Complete, hassle-free structural, civil, and aesthetic remodeling.",
      benefits: ["All approvals managed", "Strict quality control"],
    },
  },
  {
    n: "12",
    id: "custom",
    icon: PhoneCall,
    image: imgCustom,
    title: "Custom Project?",
    lead: "Have a unique requirement? Our engineering team handles bespoke structural requests.",
    items: ["Bespoke design", "Specialized engineering"],
    details: {
      description:
        "TOTAL CARE has a vast network of specialists and engineers to handle unique projects.",
      benefits: ["Dedicated Consultant", "VIP Priority Service"],
    },
  },
];

export function Services() {
  return (
    <section id="services" className="relative bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <RevealBlock>
              <div className="text-eyebrow text-accent mb-6">02 — Enterprise Expertise</div>
            </RevealBlock>
            <h2 className="text-display-lg text-foreground">
              <RevealText text="Precision." delay={80} />
              <br />
              <span className="text-mute">
                <RevealText text="Craftsmanship." delay={180} />
              </span>
            </h2>
          </div>
          <RevealBlock
            delay={200}
            className="max-w-sm text-lg leading-relaxed text-mute font-light border-l border-accent pl-6"
          >
            From deploying certified specialists to managing full-scale commercial structural
            transformations, we execute every project with absolute precision.
          </RevealBlock>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((s, idx) => (
            <ServiceCard key={s.n} service={s} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: (typeof services)[number]; index: number }) {
  const Icon = service.icon;
  const whatsappNumber = "971563937512";
  const whatsappMessage = encodeURIComponent(
    `Hi TOTAL CARE, I'm interested in your ${service.title} services. Could you provide more details?`,
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <RevealBlock delay={index * 50}>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group text-left relative flex h-[400px] w-full flex-col justify-end overflow-hidden rounded-[2rem] bg-graphite transition-all duration-1000 hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(212,175,55,0.25)] cursor-pointer will-change-transform border border-line/10 ease-[cubic-bezier(0.25,1,0.5,1)]"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            loading="lazy"
            className="w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        <div className="relative z-10 p-8 md:p-10">
          <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-background/50 backdrop-blur-md text-accent ring-1 ring-white/10 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 group-hover:bg-accent group-hover:text-background shadow-lg">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4 font-display tracking-tight leading-tight group-hover:text-accent transition-colors duration-700 drop-shadow-md">
            {service.title}
          </h3>
          <p className="text-[15px] leading-loose text-ivory/80 group-hover:text-ivory transition-colors duration-700 font-light max-w-[65ch]">
            {service.lead}
          </p>

          <div className="mt-8 flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-accent opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
            Chat on WhatsApp <span className="text-lg leading-none">→</span>
          </div>
        </div>
      </a>
    </RevealBlock>
  );
}
