import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";
import Image from "next/image";

const BLUR_FADE_DELAY = 0.04;

export function HeroSection() {
  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="gap-2 flex justify-between">
          <div className="flex-col flex flex-1 space-y-1.5">
            <BlurFade delay={BLUR_FADE_DELAY * 2}>
              <Image src={DATA.logo} alt="Fallalaland Logo" className=" -mt-12 mb-10" width={180} height={180} />
            </BlurFade>
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none"
              yOffset={8}
              text={`Welcome to Fallalaland 👋`}
            />

            <BlurFade delay={BLUR_FADE_DELAY}>
              <Markdown className="prose  max-w-[600px] dark:text-muted-foreground text-black md:text-xl">
                {DATA.description}
              </Markdown>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}

