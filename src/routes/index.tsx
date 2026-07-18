import { createFileRoute } from "@tanstack/react-router";
import { getSiteContent } from "@/lib/cms";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Philosophy } from "@/components/sections/Philosophy";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { BeforeAfterGallery } from "@/components/sections/BeforeAfterGallery";

import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  loader: async () => {
    const cmsContent = await getSiteContent();
    return { cmsContent };
  },
});

function Index() {
  const { cmsContent } = Route.useLoaderData();
  useSmoothScroll();
  return (
    <>
      <Nav />
      <main id="main">
        <Hero cmsContent={cmsContent} />
        <Marquee />
        <Philosophy />
        <Services />
        <Projects />
        <BeforeAfterGallery />

        <Stats />
        <Testimonials />
        <Contact cmsContent={cmsContent} />
      </main>
      <Footer />
    </>
  );
}
