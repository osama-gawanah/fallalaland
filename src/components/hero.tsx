"use client"
import { Button } from "@/components/ui/button"
import LazyVideo from "./lazy-video"
import { motion } from "framer-motion"
import BlurFade from "./magicui/blur-fade"

const BLUR_FADE_DELAY = 0.04;
export function Hero() {

  const buttonNew = (
    <Button asChild className="rounded-full bg-[#581e97] text-white hover:bg-[#581e97]/80 md:px-6 px-4">
      <a href="https://wa.link/rc25na" target="_blank" rel="noopener noreferrer">
        Chat With Us
      </a>
    </Button>
  )

  return (
    <section className="relative md:px-6 px-4">
      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <div className=" md:-mt-12 mb-10">
          <svg id="Layer_1" width={180} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 457.68 154.27">
            <g>
              <path className="cls-1" d="m36.65,102.05v-8.84H0v59.86h10.6v-25.57h22.12v-8.91H10.6v-16.54h26.05Z" />
              <path className="cls-1" d="m87.25,120.58c-1.35-2.56-3.11-4.75-5.3-6.56-2.17-1.83-4.66-3.24-7.47-4.25s-5.64-1.51-8.5-1.51c-3.24,0-6.31.5-9.18,1.55-2.9,1.03-5.41,2.54-7.59,4.5-2.15,1.96-3.86,4.34-5.12,7.13-1.26,2.81-1.9,5.99-1.9,9.5,0,3.31.55,6.42,1.64,9.32,1.1,2.92,2.63,5.44,4.62,7.59,1.99,2.12,4.39,3.77,7.15,4.91,2.79,1.14,5.87,1.65,9.3,1.46,3.02-.11,5.69-.82,8.02-2.15,2.33-1.3,4.2-3.2,5.67-5.67v6.65h10.67v-24.06c0-3.06-.66-5.89-2.01-8.43Zm-9.66,16.02c-.62,1.78-1.49,3.36-2.6,4.73-1.12,1.39-2.47,2.51-4.07,3.38-1.6.87-3.4,1.3-5.44,1.3s-3.98-.46-5.55-1.35c-1.55-.89-2.86-2.06-3.91-3.5-1.03-1.42-1.8-3.06-2.31-4.87-.5-1.83-.75-3.63-.75-5.44,0-2.01.32-3.86.94-5.57s1.46-3.2,2.56-4.46,2.4-2.24,3.95-2.9c1.53-.69,3.22-1.01,5.07-1.01,3.98,0,7.15,1.33,9.5,3.98,2.35,2.67,3.54,6.08,3.54,10.21,0,1.85-.32,3.68-.94,5.48Z" />
              <path className="cls-1" d="m100.21,88.94v64.13h10.67v-64.13h-10.67Z" />
              <path className="cls-1" d="m121.8,88.94v64.13h10.67v-64.13h-10.67Z" />
              <path className="cls-1" d="m187.44,120.58c-1.33-2.56-3.11-4.75-5.28-6.56-2.19-1.83-4.68-3.24-7.49-4.25-2.79-1.01-5.62-1.51-8.48-1.51-3.27,0-6.33.5-9.21,1.55-2.9,1.03-5.42,2.54-7.56,4.5-2.17,1.96-3.88,4.34-5.14,7.13-1.26,2.81-1.9,5.99-1.9,9.5,0,3.31.55,6.42,1.65,9.32,1.1,2.92,2.63,5.44,4.64,7.59,1.99,2.12,4.36,3.77,7.13,4.91,2.79,1.14,5.87,1.65,9.3,1.46,3.02-.11,5.69-.82,8.02-2.15,2.33-1.3,4.23-3.2,5.67-5.67v6.65h10.69v-24.06c0-3.06-.69-5.89-2.03-8.43Zm-9.66,16.02c-.62,1.78-1.48,3.36-2.6,4.73-1.12,1.39-2.47,2.51-4.07,3.38-1.6.87-3.4,1.3-5.41,1.3-2.15,0-4-.46-5.55-1.35-1.58-.89-2.88-2.06-3.91-3.5-1.05-1.42-1.81-3.06-2.33-4.87-.5-1.83-.75-3.63-.75-5.44,0-2.01.32-3.86.94-5.57s1.46-3.2,2.56-4.46c1.1-1.26,2.4-2.24,3.95-2.9,1.53-.69,3.24-1.01,5.09-1.01,3.98,0,7.13,1.33,9.48,3.98,2.35,2.67,3.54,6.08,3.54,10.21,0,1.85-.32,3.68-.94,5.48Z" />
              <path className="cls-1" d="m200.39,88.94v64.13h10.67v-64.13h-10.67Z" />
              <path className="cls-1" d="m266.03,120.58c-1.35-2.56-3.11-4.75-5.3-6.56-2.17-1.83-4.66-3.24-7.47-4.25s-5.64-1.51-8.5-1.51c-3.24,0-6.31.5-9.21,1.55-2.88,1.03-5.39,2.54-7.56,4.5-2.15,1.96-3.86,4.34-5.12,7.13-1.26,2.81-1.9,5.99-1.9,9.5,0,3.31.55,6.42,1.64,9.32,1.1,2.92,2.63,5.44,4.62,7.59,1.99,2.12,4.39,3.77,7.15,4.91s5.87,1.65,9.28,1.46c3.04-.11,5.71-.82,8.04-2.15,2.33-1.3,4.2-3.2,5.67-5.67v6.65h10.67v-24.06c0-3.06-.66-5.89-2.01-8.43Zm-9.66,16.02c-.62,1.78-1.49,3.36-2.6,4.73-1.12,1.39-2.49,2.51-4.09,3.38-1.58.87-3.38,1.3-5.41,1.3s-3.98-.46-5.55-1.35c-1.55-.89-2.86-2.06-3.91-3.5-1.03-1.42-1.8-3.06-2.31-4.87-.5-1.83-.75-3.63-.75-5.44,0-2.01.32-3.86.91-5.57.62-1.71,1.49-3.2,2.58-4.46s2.4-2.24,3.95-2.9c1.53-.69,3.22-1.01,5.07-1.01,3.98,0,7.15,1.33,9.5,3.98,2.35,2.67,3.52,6.08,3.52,10.21,0,1.85-.3,3.68-.91,5.48Z" />
              <path className="cls-1" d="m278.99,88.94v64.13h10.67v-64.13h-10.67Z" />
              <path className="cls-1" d="m344.63,120.58c-1.35-2.56-3.11-4.75-5.3-6.56-2.19-1.83-4.68-3.24-7.47-4.25-2.81-1.01-5.64-1.51-8.5-1.51-3.24,0-6.33.5-9.21,1.55-2.88,1.03-5.41,2.54-7.56,4.5-2.15,1.96-3.86,4.34-5.12,7.13-1.28,2.81-1.9,5.99-1.9,9.5,0,3.31.55,6.42,1.64,9.32,1.07,2.92,2.63,5.44,4.62,7.59,1.99,2.12,4.36,3.77,7.15,4.91,2.76,1.14,5.87,1.65,9.28,1.46,3.04-.11,5.71-.82,8.04-2.15,2.31-1.3,4.2-3.2,5.67-5.67v6.65h10.67v-24.06c0-3.06-.66-5.89-2.01-8.43Zm-9.66,16.02c-.62,1.78-1.48,3.36-2.6,4.73-1.12,1.39-2.49,2.51-4.09,3.38-1.6.87-3.4,1.3-5.42,1.3-2.12,0-3.98-.46-5.55-1.35s-2.88-2.06-3.91-3.5c-1.03-1.42-1.81-3.06-2.31-4.87-.5-1.83-.75-3.63-.75-5.44,0-2.01.3-3.86.91-5.57.62-1.71,1.48-3.2,2.58-4.46,1.07-1.26,2.4-2.24,3.93-2.9,1.55-.69,3.24-1.01,5.09-1.01,3.98,0,7.15,1.33,9.5,3.98,2.35,2.67,3.52,6.08,3.52,10.21,0,1.85-.3,3.68-.91,5.48Z" />
              <path className="cls-1" d="m399.39,121.95c-.59-2.56-1.67-4.87-3.2-6.88-1.55-2.03-3.7-3.66-6.47-4.91-2.79-1.28-6.35-1.9-10.74-1.9s-7.93.62-10.72,1.9c-2.76,1.26-4.94,2.88-6.51,4.91-1.55,2.01-2.65,4.32-3.22,6.88-.59,2.58-.89,5.23-.89,7.91v23.21h10.67v-23.12c0-2.01.18-3.84.5-5.46.34-1.62.91-3.04,1.74-4.2.8-1.19,1.9-2.08,3.27-2.74,1.37-.64,3.11-.96,5.16-.96,4.11,0,6.9,1.23,8.38,3.7,1.46,2.47,2.22,5.69,2.22,9.66v23.12h10.67v-23.21c0-2.67-.3-5.32-.87-7.91Z" />
              <path className="cls-1" d="m447.01,91.7v23.37c-1.62-2.47-3.66-4.23-6.1-5.25-2.44-1.05-5-1.55-7.7-1.55-3.4,0-6.51.57-9.28,1.76-2.76,1.19-5.14,2.81-7.11,4.87-1.97,2.08-3.5,4.52-4.57,7.36-1.1,2.83-1.64,5.89-1.64,9.21,0,3.54.62,6.72,1.9,9.55,1.26,2.83,2.97,5.21,5.12,7.17,2.15,1.96,4.68,3.47,7.56,4.5,2.88,1.03,5.96,1.55,9.21,1.55,2.86,0,5.67-.5,8.45-1.51,2.76-1.01,5.25-2.44,7.43-4.3,2.19-1.85,3.98-4.04,5.35-6.58,1.37-2.56,2.06-5.35,2.06-8.39v-41.76h-10.67Zm-3.61,49.88c-2.35,2.67-5.53,4-9.5,4s-6.92-1.3-9.16-3.95c-2.24-2.63-3.36-5.99-3.36-10.08,0-1.81.25-3.59.75-5.39.5-1.78,1.28-3.4,2.31-4.82,1.03-1.44,2.33-2.6,3.91-3.5,1.58-.89,3.43-1.35,5.55-1.35,2.01,0,3.82.43,5.41,1.3s2.97,1.99,4.09,3.36c1.12,1.39,1.99,2.95,2.6,4.73.62,1.76.91,3.56.91,5.41,0,4.2-1.17,7.63-3.52,10.28Z" />
            </g>
            <path className="cls-1" d="m67.32,67.75c5.04-3.51,10.61-5.96,16.06-8.62,5.53-2.49,11.09-4.95,16.74-7.16,11.24-4.59,22.71-8.59,34.21-12.47,23.06-7.62,46.54-13.97,70.25-19.35,11.83-2.84,23.79-5,35.72-7.38,12-1.94,23.97-4.21,36.05-5.68C300.46,3.54,324.76,1.63,349.09.01c3.07-.2,5.72,2.12,5.92,5.18.2,3.07-2.12,5.72-5.18,5.92-.06,0-.12,0-.18,0h-.16c-24.05.73-48.14,1.73-72.11,4.39-12.02,1.02-23.94,2.84-35.91,4.33-11.9,1.93-23.86,3.64-35.69,6.03-23.72,4.48-47.28,9.94-70.49,16.68-11.58,3.44-23.14,7.01-34.49,11.17-5.71,1.99-11.32,4.24-16.92,6.52-5.51,2.44-11.18,4.7-16.22,7.95h-.02c-.13.1-.29.06-.37-.07-.08-.12-.05-.29.07-.37Z" />
          </svg>
        </div>
      </BlurFade>


      <div className="flex flex-col items-center justify-center">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mt-3 text-center text-5xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeIn", delay: 0 }}
            className="block"
          >
            EVENTS
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeIn", delay: 0.05 }}
            className="block text-[#581e97] drop-shadow-[0_0_20px_rgba(88,30,151,0.35)]"
          >
            DIRECTED
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeIn", delay: 0.1 }}
            className="block"
          >
            LIKE ART
          </motion.span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeIn", delay: 0.15 }}
          className="mt-6"
        >
          {buttonNew}
        </motion.div>

        {/* Phone grid mimic */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeIn", delay: 0.2 }}
          className="mt-10 grid w-full gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2"
        >
          {phoneData.map((p, i) => {
            const visibility = i <= 2 ? "block" : i === 3 ? "hidden md:block" : i === 4 ? "hidden xl:block" : "hidden"

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeIn", delay: i * 0.03 }}
                className={visibility}
              >
                <PhoneCard title={p.title} sub={p.sub} tone={p.tone} gradient={p.gradient} videoSrc={p.videoSrc} />
              </motion.div>
            )
          })}
        </motion.div>
      </div>

    </section>
  )
}

function PhoneCard({
  title = "8°",
  sub = "Clear night. Great for render farm runs.",
  tone = "calm",
  gradient = "from-[#0f172a] via-[#14532d] to-[#052e16]",
  videoSrc,
}: {
  title?: string
  sub?: string
  tone?: string
  gradient?: string
  videoSrc?: string
}) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative rounded-[28px] glass-border bg-neutral-900 p-2"
    >
      <div className="relative aspect-[4/7] w-full overflow-hidden rounded-2xl bg-black">
        <LazyVideo
          src={
            videoSrc ??
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b0f3222371106db366a14ca1c29cef55-1b1EWVSa4w3FL2zslcaCGYTy9vcxjF.mp4"
          }
          className="absolute inset-0 h-full w-full object-cover"
          autoplay={true}
          loop={true}
          muted={true}
          playsInline={true}
          aria-label={`${title} - ${sub}`}
        />

        {/* <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          className="relative z-10 p-3"
        >
          <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />
          <div className="space-y-1 px-1">
            <div className="text-3xl font-bold leading-snug text-white/90">{title}</div>
            <p className="text-xs text-white/70">{sub}</p>
            <div className="mt-3 inline-flex items-center rounded-full bg-black/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-lime-300">
              {tone === "calm" ? "skitbit app" : tone}
            </div>
          </div>
        </motion.div> */}
      </div>
    </motion.div>
  )
}

const phoneData = [
  {
    title: "Conversions",
    sub: "Turn clicks into paying customers.",
    tone: "results",
    gradient: "from-[#0b0b0b] via-[#0f172a] to-[#020617]",
    videoSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20new%20chapter%20in%20the%20story%20of%20success.__Introducing%20the%20new%20TAG%20Heuer%20Carrera%20Day-Date%20collection%2C%20reimagined%20with%20bold%20colors%2C%20refined%20finishes%2C%20and%20upgraded%20functionality%20to%20keep%20you%20focused%20on%20your%20goals.%20__Six%20-nDNoRQyFaZ8oaaoty4XaQz8W8E5bqA.mp4",
  },
  {
    title: "Speed",
    sub: "Launch in days, not weeks.",
    tone: "speed",
    gradient: "from-[#0b1a0b] via-[#052e16] to-[#022c22]",
  },

]
