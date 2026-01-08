'use client';

import { useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { SwiperCards } from "@/components/swiper-cards";
import { Button } from "@/components/ui/button";

const BLUR_FADE_DELAY = 0.04;

interface EventData {
  name: string;
  logo: string;
  bg: "white" | "dark";
  photos: string[];
}

export function EventsSection() {

  const data: EventData[] = [
    {
      name: "AMIVIZ Black Hat.",
      logo: "/events/amiviz-booth-managment/logo.svg",
      bg: "white",
      photos: [
        "/events/amiviz-booth-managment/1.jpg",
        "/events/amiviz-booth-managment/2.jpg",
        "/events/amiviz-booth-managment/3.jpg",
        "/events/amiviz-booth-managment/4.jpg",
      ],
    },
    {
      name: "METATRON.",
      logo: "/events/metatron-dubai/logo.svg",
      bg: "dark",
      photos: [
        "/events/metatron-dubai/1.jpg",
        "/events/metatron-dubai/2.jpg",
        "/events/metatron-dubai/3.jpg",
        "/events/metatron-dubai/4.jpg",
        "/events/metatron-dubai/5.jpg",
        "/events/metatron-dubai/6.jpg",
        "/events/metatron-dubai/7.jpg",
      ],
    },
    {
      name: "Modern Construction Saudi Build.",
      logo: "/events/modern-construction-saudi-build/logo.svg",
      bg: "dark",
      photos: [
        "/events/modern-construction-saudi-build/1.jpg",
        "/events/modern-construction-saudi-build/2.jpg",
        "/events/modern-construction-saudi-build/3.jpg",
        "/events/modern-construction-saudi-build/4.jpg",
        "/events/modern-construction-saudi-build/5.jpg",
        "/events/modern-construction-saudi-build/6.jpg",
        "/events/modern-construction-saudi-build/7.jpg",
        "/events/modern-construction-saudi-build/8.jpg",
        "/events/modern-construction-saudi-build/9.jpg",

      ],
    },
    {
      name: "Nour Net Black Hat.",
      logo: "/events/nour-net-black-hat/logo.svg",
      bg: "dark",
      photos: [
        "/events/nour-net-black-hat/1.jpg",
        "/events/nour-net-black-hat/2.jpg",
        "/events/nour-net-black-hat/3.jpg",
        "/events/nour-net-black-hat/4.jpg",
        "/events/nour-net-black-hat/5.jpg",
        "/events/nour-net-black-hat/6.jpg",
        "/events/nour-net-black-hat/7.jpg",
        "/events/nour-net-black-hat/8.jpg",

      ],
    },
    {
      name: "Nour Net Leap.",
      logo: "/events/nour-net-leap/logo.svg",
      bg: "dark",
      photos: [
        "/events/nour-net-leap/1.jpg",
        "/events/nour-net-leap/2.jpg",
        "/events/nour-net-leap/3.jpg",

      ],
    },
    {
      name: "SGP Founding Day.",
      logo: "/events/saudi-global-port-founding-day/logo.svg",
      bg: "dark",
      photos: [
        "/events/saudi-global-port-founding-day/1.jpg",
        "/events/saudi-global-port-founding-day/2.jpg",
        "/events/saudi-global-port-founding-day/3.jpg",
        "/events/saudi-global-port-founding-day/4.jpg",
        "/events/saudi-global-port-founding-day/5.jpg",
        "/events/saudi-global-port-founding-day/6.jpg",
        "/events/saudi-global-port-founding-day/7.jpg",
        "/events/saudi-global-port-founding-day/8.jpg",
      ],
    },
    {
      name: "SGP Ramadan Iftar.",
      logo: "/events/saudi-global-port-riyadh-ramadan-iftar/logo.svg",
      bg: "dark",
      photos: [
        "/events/saudi-global-port-riyadh-ramadan-iftar/1.jpg",
        "/events/saudi-global-port-riyadh-ramadan-iftar/2.jpg",
        "/events/saudi-global-port-riyadh-ramadan-iftar/3.jpg",
        "/events/saudi-global-port-riyadh-ramadan-iftar/4.jpg",
        "/events/saudi-global-port-riyadh-ramadan-iftar/5.jpg",
        "/events/saudi-global-port-riyadh-ramadan-iftar/6.jpg",
        "/events/saudi-global-port-riyadh-ramadan-iftar/7.jpg",
        "/events/saudi-global-port-riyadh-ramadan-iftar/8.jpg",
        "/events/saudi-global-port-riyadh-ramadan-iftar/9.jpg",
        "/events/saudi-global-port-riyadh-ramadan-iftar/10.jpg",
        "/events/saudi-global-port-riyadh-ramadan-iftar/11.jpg",
        "/events/saudi-global-port-riyadh-ramadan-iftar/12.jpg",
        "/events/saudi-global-port-riyadh-ramadan-iftar/13.jpg",
      ],
    },
    {
      name: "SGP Summer Activity.",
      logo: "/events/summer-refreshments-party/logo.svg",
      bg: "dark",
      photos: [
        "/events/summer-refreshments-party/1.jpg",
        "/events/summer-refreshments-party/2.jpg",
        "/events/summer-refreshments-party/3.jpg",
      ],
    },
    {
      name: "Value Expert Ramadan Iftar.",
      logo: "/events/value-expert/logo.svg",
      bg: "white",
      photos: [
        "/events/value-expert/1.jpg",
        "/events/value-expert/2.jpg",
        "/events/value-expert/3.jpg",
        "/events/value-expert/4.jpg",
        "/events/value-expert/5.jpg",
        "/events/value-expert/6.jpg",
        "/events/value-expert/7.jpg",
        "/events/value-expert/8.jpg",
        "/events/value-expert/9.jpg",
        "/events/value-expert/10.jpg",
        "/events/value-expert/11.jpg",
      ],
    },
    {
      name: "Dammam Integrated Logistics Zone.",
      logo: "/events/dammam-integrated-logistics-zone/logo.svg",
      bg: "dark",
      photos: [
        "/events/dammam-integrated-logistics-zone/1.jpg",
        "/events/dammam-integrated-logistics-zone/2.jpg",
        "/events/dammam-integrated-logistics-zone/3.jpg",
        "/events/dammam-integrated-logistics-zone/4.jpg",
        "/events/dammam-integrated-logistics-zone/5.jpg",
        "/events/dammam-integrated-logistics-zone/6.jpg",
        "/events/dammam-integrated-logistics-zone/7.jpg",
        "/events/dammam-integrated-logistics-zone/8.jpg",
        "/events/dammam-integrated-logistics-zone/9.jpg",
        "/events/dammam-integrated-logistics-zone/10.jpg",
        "/events/dammam-integrated-logistics-zone/11.jpg",
        "/events/dammam-integrated-logistics-zone/12.jpg",
        "/events/dammam-integrated-logistics-zone/13.jpg", 
        "/events/dammam-integrated-logistics-zone/14.jpg",
      ],
    },
  ];





  return (
    <section id="events" className=" px-6">
      <div className="space-y-12 w-full py-12 ">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Our Projects
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Check our latest work
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We&apos;ve worked on a variety of projects, from simple
                websites to complex web applications. Here are a few of our
                favorites.
              </p>
            </div>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 max-w-[800px] mx-auto md:px-0 px-8 md:overflow-visible overflow-hidden">
          {data.map((item, index) => (
            <SwiperCards key={index} data={item} />
          ))}
        </div>

      </div>
    </section>
  );
}

