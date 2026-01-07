"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { Marquee } from "@/components/ui/marquee";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

const BLUR_FADE_DELAY = 0.04;

interface ClientCardProps {
    name: string;
    logo?: string;
}

function ClientCard({ name, logo }: ClientCardProps) {
    return (
        <div
            className={cn(
                "flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border",
                "bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white",
                "border-border/50",
                "transition-all duration-300",
                "hover:border-foreground/40 hover:scale-105",
                "hover:shadow-lg"
            )}
        >
            {logo ? (
                <img
                    src={logo}
                    alt={name}
                    className="h-12 w-12 object-contain"
                />
            ) : (
                <span className="text-xs font-medium text-muted-foreground">{name}</span>
            )}
        </div>
    );
}

// Client logos mapping - you can add actual logo URLs here
const clientLogos: Record<string, string> = {
    // Add client logo mappings here
    // "Client 1": "/logos/client1.png",
};

export function ClientsSection() {
    return (
        <section id="clients" className="px-6">
            <div className="flex min-h-0 flex-col gap-y-3">
                <BlurFade delay={BLUR_FADE_DELAY * 9}>
                    <h2 className="text-xl font-bold">Clients</h2>
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY * 10}>
                    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                        <Marquee pauseOnHover className="[--duration:20s]">
                            {DATA.clients.slice(0, Math.ceil(DATA.clients.length / 2)).map((client) => (
                                <ClientCard
                                    key={client}
                                    name={client}
                                    logo={clientLogos[client] || `https://via.placeholder.com/48?text=${client}`}
                                />
                            ))}
                        </Marquee>
                        <Marquee reverse pauseOnHover className="[--duration:20s]">
                            {DATA.clients.slice(Math.ceil(DATA.clients.length / 2)).map((client) => (
                                <ClientCard
                                    key={client}
                                    name={client}
                                    logo={clientLogos[client] || `https://via.placeholder.com/48?text=${client}`}
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

