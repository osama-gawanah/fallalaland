import TrustReasonsCarousel from "@/components/trust-reasons-carousel";
import Stats from "@/components/count-up-stats";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { EventsSection } from "@/components/events-section";
import { MapSection } from "@/components/map-section";
import { ContactSection } from "@/components/contact-section";

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 relative ">
      <HeroSection />
      <AboutSection />
      <TrustReasonsCarousel />
      <Stats />
      <EventsSection />
      <MapSection />
      <ContactSection />
    </main>
  );
}
