import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export function AboutSection() {
  return (
    <section id="about" className="px-6">
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold tracking-tight leading-tight">
          <span className="text-muted-foreground">We don&apos;t deliver events.</span>
          <br />
          <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            We deliver impact.
          </span>
        </h2>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <Markdown className="prose max-w-full text-pretty font-sans text-muted-foreground dark:prose-invert">
          {DATA.summary}
        </Markdown>
      </BlurFade>
    </section>
  );
}

