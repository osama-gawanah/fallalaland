import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";
import { Highlighter } from "./ui/highlighter";

const BLUR_FADE_DELAY = 0.04;

export function HeroSection() {
  return (
    <section id="hero" className="md:px-6 px-4">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="gap-2 flex justify-between">
          <div className="flex-col flex flex-1 space-y-1.5">

            <div className="flex items-center gap-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold  sm:text-3xl mt-3 leading-none xl:text-5xl/none"
                yOffset={8}
                text={`Welcome to  `}
              />
              <Highlighter action="highlight" className="text-3xl leading-none font-bold sm:text-3xl xl:text-5xl/none"
                color="#FF9800">
                Fallalaland 👋
              </Highlighter>
            </div>

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

