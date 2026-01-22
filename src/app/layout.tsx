import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "./globals.css";
import { LightRays } from "@/components/light-rays";
import 'swiper/css';
import 'swiper/css/effect-cards';

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: "Fallalaland",
    template: `%s | Fallalaland`,
  },
  description: DATA.description,
  openGraph: {
    title: `Fallalaland`,
    description: DATA.description,
    url: DATA.url,
    siteName: `Fallalaland`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `Fallalaland`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative  md:max-w-6xl mx-auto py-12 sm:py-24 border"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          <TooltipProvider delayDuration={0}>

            <div className="absolute top-0 left-0 h-[600px] w-full overflow-hidden">
              <LightRays />
            </div>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
