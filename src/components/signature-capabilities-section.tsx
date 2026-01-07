"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";
import Grid from "@/components/ui/grid-pattern";
import {
  Building2,
  Users,
  GraduationCap,
  Sparkles,
  UsersRound,
  Calendar,
  Flag,
  CalendarDays,
} from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const capabilities = [
  {
    title: "Exhibitions and Booths",
    icon: Building2,
    gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
    iconGradient: "from-blue-500 to-cyan-500",
    glowColor: "blue",
  },
  {
    title: "Conferences",
    icon: Users,
    gradient: "from-purple-500/20 via-pink-500/20 to-rose-500/20",
    iconGradient: "from-purple-500 to-pink-500",
    glowColor: "purple",
  },
  {
    title: "Workshops",
    icon: GraduationCap,
    gradient: "from-orange-500/20 via-amber-500/20 to-yellow-500/20",
    iconGradient: "from-orange-500 to-amber-500",
    glowColor: "orange",
  },
  {
    title: "Grand Openings",
    icon: Sparkles,
    gradient: "from-emerald-500/20 via-green-500/20 to-lime-500/20",
    iconGradient: "from-emerald-500 to-green-500",
    glowColor: "emerald",
  },
  {
    title: "Gatherings",
    icon: UsersRound,
    gradient: "from-indigo-500/20 via-violet-500/20 to-purple-500/20",
    iconGradient: "from-indigo-500 to-violet-500",
    glowColor: "indigo",
  },
  {
    title: "Open days",
    icon: Calendar,
    gradient: "from-red-500/20 via-rose-500/20 to-pink-500/20",
    iconGradient: "from-red-500 to-rose-500",
    glowColor: "red",
  },
  {
    title: "National Occasions",
    icon: Flag,
    gradient: "from-amber-500/20 via-yellow-500/20 to-lime-500/20",
    iconGradient: "from-amber-500 to-yellow-500",
    glowColor: "amber",
  },
  {
    title: "Annual Days",
    icon: CalendarDays,
    gradient: "from-teal-500/20 via-cyan-500/20 to-blue-500/20",
    iconGradient: "from-teal-500 to-cyan-500",
    glowColor: "teal",
  },
];

interface CapabilityCardProps {
  capability: typeof capabilities[0];
  index: number;
}

function CapabilityCard({ capability, index }: CapabilityCardProps) {
  const Icon = capability.icon;

  return (
    <BlurFade delay={BLUR_FADE_DELAY * 13 + index * 0.08}>
      <div className="relative group">
        <div
          className={cn(
            "relative p-6 rounded-3xl border overflow-hidden",
            "bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white",
            "border-border/50",
            "transition-all duration-500 ease-out",
            "hover:border-foreground/40 hover:scale-[1.02]",
            "hover:shadow-2xl hover:shadow-foreground/10",
            "dark:hover:shadow-foreground/20",
            "cursor-pointer"
          )}
        >
          {/* Grid Pattern Background */}
          <Grid size={20} />

          {/* Icon with gradient background */}
          <div className="relative z-20 flex items-center gap-4 mb-4">
            <div className="relative">
              {/* Icon glow */}
              <div
                className={cn(
                  "absolute inset-0 rounded-xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500",
                  `bg-gradient-to-br ${capability.iconGradient}`
                )}
              />
              <div
                className={cn(
                  "relative w-14 h-14 rounded-xl flex items-center justify-center",
                  "bg-black",
                
                  "shadow-lg group-hover:shadow-xl transition-all duration-500",
                  "group-hover:scale-110 group-hover:rotate-3"
                )}
              >
                <Icon className="w-7 h-7 text-white" strokeWidth={2} />
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="relative z-20">
            <h3 className="text-base font-bold text-neutral-800 dark:text-white mb-2">
              {capability.title}
            </h3>
          </div>
        </div>
      </div>
    </BlurFade>
  );
}

export function SignatureCapabilitiesSection() {
  return (
    <section id="signature-capabilities" className="w-full px-5">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm font-medium">
                Services
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Signature Capabilities
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-2xl">
                From intimate gatherings to grand-scale events, we deliver exceptional experiences across all types of occasions.
              </p>
            </div>
          </div>
        </BlurFade>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-10 md:gap-2">
          {capabilities.map((capability, index) => (
            <CapabilityCard key={index} capability={capability} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

