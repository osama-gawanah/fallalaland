"use client";

import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";
import { WobbleCard } from "@/components/ui/wobble-card";
import {
  Video,
  Gamepad2,
  Palette,
  Users,
  Hammer,
  Lightbulb,
  Radio,
  MapPin,
  Film,
  Camera,
  Scissors,
  Mic,
  Languages,
  Table2,
  Package,
  Home,
  Play,
  Image,
  Monitor,
  Type,
  Gift,
  UserCheck,
  ClipboardCheck,
  Crown,
  Coffee,
  Car,
  UtensilsCrossed,
  Sparkles,
  Shield,
  Box,
  Tent,
  Sparkle,
  Printer,
} from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

interface ServiceItem {
  name: string;
  icon?: any;
}

interface ServiceCategory {
  id: number;
  title: string;
  icon: any;
  gradient: string;
  iconGradient: string;
  glowColor: string;
  bgColor: string;
  items: ServiceItem[];
}

const services: ServiceCategory[] = [
  {
    id: 1,
    title: "Event Production",
    icon: Video,
    gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
    iconGradient: "from-blue-500 to-cyan-500",
    glowColor: "blue",
    bgColor: "bg-blue-800",
    items: [
      { name: "Lighting & sound", icon: Lightbulb },
      { name: "Venue flow", icon: MapPin },
      { name: "Live Streaming", icon: Radio },
      { name: "Editing & Event media direction", icon: Scissors },
      { name: "Photography", icon: Camera },
      { name: "Videography", icon: Film },
      { name: "Highlight reels", icon: Play },
      { name: "Pre, During, and Post event content support", icon: Sparkles },
      { name: "MC", icon: Mic },
      { name: "Translation Services", icon: Languages },
    ],
  },
  {
    id: 2,
    title: "Games and Activities",
    icon: Gamepad2,
    gradient: "from-purple-500/20 via-pink-500/20 to-rose-500/20",
    iconGradient: "from-purple-500 to-pink-500",
    glowColor: "purple",
    bgColor: "bg-purple-800",
    items: [
      { name: "Table & Board games", icon: Table2 },
      { name: "Inflatable Games", icon: Package },
      { name: "Giant Games", icon: Box },
      { name: "PS5 & Kinect Games", icon: Gamepad2 },
      { name: "Indoor & Outdoor Activities", icon: Home },
    ],
  },
  {
    id: 3,
    title: "Branding",
    icon: Palette,
    gradient: "from-orange-500/20 via-amber-500/20 to-yellow-500/20",
    iconGradient: "from-orange-500 to-amber-500",
    glowColor: "orange",
    bgColor: "bg-orange-800",
    items: [
      { name: "Story boarding", icon: Image },
      { name: "Motion graphics", icon: Monitor },
      { name: "2D/3D Design", icon: Palette },
      { name: "Graphics", icon: Type },
      { name: "Branding", icon: Sparkle },
      { name: "Printing", icon: Printer },
      { name: "Giveaways & Gifts", icon: Gift },
    ],
  },
  {
    id: 4,
    title: "Guest Experience",
    icon: Users,
    gradient: "from-emerald-500/20 via-green-500/20 to-lime-500/20",
    iconGradient: "from-emerald-500 to-green-500",
    glowColor: "emerald",
    bgColor: "bg-emerald-800",
    items: [
      { name: "Ushers & hosts", icon: UserCheck },
      { name: "Registration", icon: ClipboardCheck },
      { name: "VIP support", icon: Crown },
      { name: "Hospitality & comfort", icon: Coffee },
      { name: "Valet services", icon: Car },
      { name: "Catering", icon: UtensilsCrossed },
      { name: "Cleaners", icon: Sparkles },
      { name: "Security, Body guard", icon: Shield },
    ],
  },
  {
    id: 5,
    title: "Fabrication",
    icon: Hammer,
    gradient: "from-indigo-500/20 via-violet-500/20 to-purple-500/20",
    iconGradient: "from-indigo-500 to-violet-500",
    glowColor: "indigo",
    bgColor: "bg-indigo-800",
    items: [
      { name: "Booths", icon: Box },
      { name: "Installations", icon: Hammer },
      { name: "Sculptural elements", icon: Sparkle },
      { name: "Tent", icon: Tent },
    ],
  },
];

export function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="w-full  px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <BlurFade delay={BLUR_FADE_DELAY * 15}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm font-medium">
                Our Services
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                WHAT WE DO
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-2xl">
                Comprehensive event solutions tailored to bring your vision to life with excellence and precision.
              </p>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 15}>
            {/* Wobble Cards Grid */}
        <div className="space-y-4 w-full">
          {services.map((service) => (
            <WobbleCard
              key={service.id}
              containerClassName={cn(
                "w-full",
                service.bgColor
              )}
              className="relative"
            >
              <div className="w-full max-w-6xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={cn(
                      "w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0",
                      "bg-gradient-to-br",
                      service.iconGradient
                    )}
                  >
                    {React.createElement(service.icon, {
                      className: "w-7 h-7 text-white",
                      strokeWidth: 2.5,
                    })}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white/70 mb-1">
                      Service {service.id}
                    </div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
                  {service.items.map((item, idx) => {
                    const ItemIcon = item.icon || Sparkles;
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                      >
                        {/* <ItemIcon className="w-5 h-5 text-white flex-shrink-0" strokeWidth={2} /> */}
                        <span className="text-sm text-white/90 font-medium text-nowrap truncate">{item.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </WobbleCard>
          ))}
        </div>
        </BlurFade>
      </div>
    </section>
  );
}

