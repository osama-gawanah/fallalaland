"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, LucideIcon } from "lucide-react";
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import { Button } from "./ui/button";

const BLUR_FADE_DELAY = 0.04;

const TrustReasonsCarousel = () => {
  const [position, setPosition] = useState(0);

  const shiftLeft = () => {
    if (position > 0) {
      setPosition((pv) => pv - 1);
    }
  };

  const shiftRight = () => {
    if (position < DATA.trustReasons.length - 1) {
      setPosition((pv) => pv + 1);
    }
  };

  return (
    <section id="why-trust-us" className="overflow-hidden pt-4 pl-6">
      <div className="mx-auto max-w-6xl">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold tracking-tight leading-tight">
              <span className="text-muted-foreground">Why clients </span>
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                trust us
              </span>
            </h2>
            <div className="flex gap-2  md:px-6 px-4">
              <Button
                onClick={shiftLeft}
                disabled={position === 0}
                aria-label="Previous card"
                size={"icon"}
                className="bg-[#581e97] hover:bg-[#581e97]/80"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </Button>
              <Button
                size={"icon"}
                onClick={shiftRight}
                className="bg-[#581e97] hover:bg-[#581e97]/80"
                disabled={position === DATA.trustReasons.length - 1}
                aria-label="Next card"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </Button>
            </div>
          </div>
        </BlurFade>
        <div className="flex gap-6 overflow-hidden pb-4">
          {DATA.trustReasons.map((reason, index) => (
            <TrustReasonCard
              {...reason}
              key={reason.title}
              position={position}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TrustReasonCardProps {
  position: number;
  index: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

const TrustReasonCard = ({
  position,
  index,
  title,
  description,
  icon: Icon,
}: TrustReasonCardProps) => {
  const translateAmt =
    position >= index ? index * 100 : index * 100 - 100 * (index - position);

  return (
    <motion.div
      animate={{ x: `${-translateAmt}%` }}
      transition={{
        ease: "easeInOut",
        duration: 0.35,
      }}
      className={`relative rounded-xl  flex min-h-[200px] w-10/12 max-w-lg shrink-0 flex-col justify-between p-8 md:w-3/5 ${index % 2 ? "bg-[#581e97] text-white" : "bg-white border-2 dark:bg-neutral-900 text-black dark:text-white"
        }`}
    >
      <Icon className="absolute right-2 top-2 w-32 h-32 opacity-20" />
      <h3 className="mb-8 text-3xl font-bold">{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

export default TrustReasonsCarousel;

