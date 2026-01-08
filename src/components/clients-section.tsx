"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import Image from "next/image";

const BLUR_FADE_DELAY = 0.04;

interface ClientCardProps {
    src: string;
    alt: string;
}

function ClientCard({ src, alt }: ClientCardProps) {
    return (
        <div
            className={cn(
                "flex h-24 w-40 p-2 shrink-0 items-center justify-center rounded-xl border",
                "bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white",
                "border-border/50",
                "transition-all duration-300",
                "hover:border-foreground/40 hover:scale-105",
                "hover:shadow-lg"
            )}
        >
            <Image
                src={src}
                alt={alt}
                className="h-full w-full object-contain"
                width={160}
                height={96}
            />
        </div>
    );
}
const data = [
    {
        src: "/clients/1.webp",
        alt: "",
    },
    {
        src: "/clients/2.png",
        alt: "",
    },
    {
        src: "/clients/3.webp",
        alt: "",
    },
    {
        src: "/clients/5.webp",
        alt: "",
    },
    {
        src: "/clients/6.webp",
        alt: "",
    },
    {
        src: "/clients/7.webp",
        alt: "",
    },
    {
        src: "/clients/8.webp",
        alt: "",
    },
    {
        src: "/clients/9.webp",
        alt: "",
    },
];
export function ClientsSection() {
    return (
        <section id="clients" className="md:px-6 px-4">
            <div className="flex min-h-0 flex-col gap-y-3">
                <BlurFade delay={BLUR_FADE_DELAY * 9}>
                    <h2 className="text-xl font-bold">Clients</h2>
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY * 10}>
                    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                        <Marquee pauseOnHover className="[--duration:20s]">
                            {data.slice(0, Math.ceil(data.length / 2)).map((client, index) => (
                                <ClientCard
                                    key={index}
                                    src={client.src}
                                    alt={client.alt}
                                />
                            ))}
                        </Marquee>
                        <Marquee reverse pauseOnHover className="[--duration:20s]">
                            {data.slice(Math.ceil(data.length / 2)).map((client, index) => (
                                <ClientCard
                                    key={index + Math.ceil(data.length / 2)}
                                    src={client.src}
                                    alt={client.alt}
                                />
                            ))}
                        </Marquee>
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
                    </div>
                </BlurFade>
            </div>
        </section>
    );
}

