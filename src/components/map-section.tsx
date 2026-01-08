import BlurFade from "@/components/magicui/blur-fade";
import { GlobeToMapTransform } from "@/components/ui/globe-to-map-transform";

const BLUR_FADE_DELAY = 0.04;

export function MapSection() {
  return (
    <section id="map" className="flex flex-col gap-4 justify-center items-center min-h-screen  px-6">
      <BlurFade delay={BLUR_FADE_DELAY * 11}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Map
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              CNC Around The World.
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              CNC is a global company that operates in over 4 countries.
            </p>
          </div>
        </div>
      </BlurFade>
      <div className="relative flex flex-col h-[500px] w-full items-stretch gap-2 overflow-clip bg-gray-50 dark:bg-neutral-950">
        <GlobeToMapTransform />
      </div>
    </section>
  );
}

