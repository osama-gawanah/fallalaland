"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";
import { 
  Search, 
  Palette, 
  PencilRuler, 
  Box, 
  Wrench, 
  Rocket,
  Sparkles
} from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const steps = [
  {
    number: "01",
    title: "Understand the brand",
    description: "We dive deep into your brand identity, values, and vision to create experiences that truly represent you.",
    icon: Search,
    gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
    iconGradient: "from-blue-500 to-cyan-500",
    glowColor: "blue",
  },
  {
    number: "02",
    title: "Design the concept",
    description: "Our creative team transforms ideas into stunning visual concepts that capture your essence.",
    icon: Palette,
    gradient: "from-purple-500/20 via-pink-500/20 to-rose-500/20",
    iconGradient: "from-purple-500 to-pink-500",
    glowColor: "purple",
  },
  {
    number: "03",
    title: "Sketch the structure",
    description: "We meticulously plan and sketch the structural framework, ensuring every detail is perfect.",
    icon: PencilRuler,
    gradient: "from-orange-500/20 via-amber-500/20 to-yellow-500/20",
    iconGradient: "from-orange-500 to-amber-500",
    glowColor: "orange",
  },
  {
    number: "04",
    title: "Build the 3D model",
    description: "Advanced 3D modeling brings your vision to life with precision and attention to detail.",
    icon: Box,
    gradient: "from-emerald-500/20 via-green-500/20 to-lime-500/20",
    iconGradient: "from-emerald-500 to-green-500",
    glowColor: "emerald",
  },
  {
    number: "05",
    title: "Fabricate with precision",
    description: "State-of-the-art fabrication techniques ensure the highest quality and durability.",
    icon: Wrench,
    gradient: "from-indigo-500/20 via-violet-500/20 to-purple-500/20",
    iconGradient: "from-indigo-500 to-violet-500",
    glowColor: "indigo",
  },
  {
    number: "06",
    title: "Execute on ground",
    description: "Our expert team brings everything together on-site, delivering flawless execution.",
    icon: Rocket,
    gradient: "from-red-500/20 via-rose-500/20 to-pink-500/20",
    iconGradient: "from-red-500 to-rose-500",
    glowColor: "red",
  },
];

interface StepCardProps {
  step: typeof steps[0];
  index: number;
}

function StepCard({ step, index }: StepCardProps) {
  return (
    <BlurFade delay={BLUR_FADE_DELAY * 12 + index * 0.1}>
      <div className="relative group">
        <div
          className={cn(
            "relative p-6 rounded-2xl border transition-all duration-300",
            "bg-gradient-to-br from-background to-muted/20",
            "border-border/50 hover:border-foreground/30",
            "hover:shadow-lg hover:shadow-foreground/5",
            "dark:hover:shadow-foreground/10"
          )}
        >
          {/* Number Badge */}
          <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-br from-foreground to-foreground/80 flex items-center justify-center shadow-lg">
            <span className="text-2xl font-bold text-background">{step.number}</span>
          </div>

          {/* Content */}
          <div className="pt-6 space-y-3">
            <h3 className="text-xl font-bold tracking-tight">{step.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
          </div>

          {/* Decorative gradient overlay on hover */}
          <div
            className={cn(
              "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300",
              "bg-gradient-to-br from-foreground/5 to-transparent pointer-events-none"
            )}
          />
        </div>

        {/* Connecting line (hidden on last item) */}
        {index < steps.length - 1 && index !== 4 && (
          <div className="hidden md:block absolute left-1/2 top-full w-0.5 h-12 -translate-x-1/2 bg-gradient-to-b from-border via-border/50 to-transparent" />
        )}
      </div>
    </BlurFade>
  );
}

export function HowWeWorkSection() {
  return (
    <section id="how-we-work" className="w-full py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <BlurFade delay={BLUR_FADE_DELAY * 12}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm font-medium">
                Process
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                How we work
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-2xl">
                Our proven process ensures every project is delivered with excellence, from concept to execution.
              </p>
            </div>
          </div>
        </BlurFade>

        {/* Steps Grid */}
        <div className="relative">
          {/* Timeline line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-border via-border/30 to-border" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className={cn(
                  "relative",
                  index  === 1 && "lg:mt-24", // Middle column offset
                  index  === 2 && "lg:-mt-24", 
                  index  === 4 && "lg:-mt-24", 

                )}
              >
                <StepCard step={step} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

