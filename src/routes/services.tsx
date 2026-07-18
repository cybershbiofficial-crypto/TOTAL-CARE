import { createFileRoute } from "@tanstack/react-router";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ServicesHero } from "@/components/sections/ServicesHero";
import { Services as ServiceCategories } from "@/components/sections/Services";
import { BeforeAfterGallery } from "@/components/sections/BeforeAfterGallery";

import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

function ServicesPage() {
  useSmoothScroll();
  return (
    <>
      <Nav />
      <main id="main">
        <ServicesHero />
        <ServiceCategories />
        <BeforeAfterGallery />

        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
