import TrustReasonsCarousel from "@/components/trust-reasons-carousel";
import Stats from "@/components/count-up-stats";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { EventsSection } from "@/components/events-section";
import { MapSection } from "@/components/map-section";
import { ContactSection } from "@/components/contact-section";
import { HowWeWorkSection } from "@/components/how-we-work-section";
import { SignatureCapabilitiesSection } from "@/components/signature-capabilities-section";
import { WhatWeDoSection } from "@/components/what-we-do-section";
import { ClientsSection } from "@/components/clients-section";
import { Hero } from "@/components/hero";

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 relative ">
      <Hero/>
      <HeroSection />
      <AboutSection />
      <TrustReasonsCarousel />
      <Stats />
      <ClientsSection />
      <HowWeWorkSection />
      <WhatWeDoSection />
      {/* <SignatureCapabilitiesSection /> */}
      <EventsSection />
      <MapSection />
      <ContactSection />
    </main>
  );
}
