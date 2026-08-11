import type { Metadata } from "next";
import {
  Geist,
  Instrument_Sans,
  Inter,
  Lato,
  Libre_Baskerville,
  Montserrat,
  Old_Standard_TT,
  Poppins,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { CursorProvider } from "@/hooks/useCursor";
import CustomCursor from "@/components/ui/customCursor";
import LenisProvider from "@/components/providers/LenisProvider";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import LoadingScreen from "@/components/layout/PageTransition/LoadingScreen";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/providers/ScrollToTop";
config.autoAddCss = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  // weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const libre = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oldStandard = Old_Standard_TT({
  variable: "--font-old-standard-tt",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const siteUrl = "https://www.dayezzz.my.id";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dias Adi (Dayezzz) | Frontend & Full-Stack Web Developer",
    template: "%s | Dias Adi (Dayezzz)",
  },
  description:
    "Portfolio of Dias Adi (Dayezzz), a Web Developer specializing in React, Next.js, TypeScript, and Tailwind CSS. Explore modern web projects and engineering experience.",
  authors: [{ name: "Dias Adi", url: siteUrl }],
  creator: "Dias Adi",
  keywords: [
    "Dias Adi",
    "Dayezzz",
    "Web Developer Portfolio",
    "Frontend Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Engineer",
    "Software Engineer Portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dias Adi (Dayezzz) | Frontend & Full-Stack Web Developer",
    description:
      "Portfolio of Dias Adi (Dayezzz). Showcasing modern web development projects built with React, Next.js, TypeScript, and Tailwind CSS.",
    url: siteUrl,
    siteName: "Dias Adi Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dias Adi (Dayezzz) Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dias Adi (Dayezzz) | Web Developer Portfolio",
    description:
      "Explore modern web development projects built with React, Next.js, TypeScript, and Tailwind CSS.",
    images: ["/og-image.png"],
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
  verification: {
    google: "TM-zF0zDVhUd4LbxL0Y2SBvV974YtPvrUWRET9RfwKo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dias Adi",
    alternateName: "Dayezzz",
    url: "https://www.dayezzz.my.id",
    jobTitle: "Frontend & Full-Stack Web Developer",
    knowsAbout: [
      "Web Development",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Software Testing",
    ],
    sameAs: [
      "https://github.com/d4yezz",
      "https://www.linkedin.com/in/dias-adi-711832303/",
    ],
  };
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${lato.variable} ${montserrat.variable} ${poppins.variable} ${libre.variable} ${instrumentSans.variable} ${inter.variable} ${oldStandard.variable} antialiased selection:bg-gray-300 selection:text-zinc-800`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LenisProvider>
          <ScrollToTop />
          <CursorProvider>
            <LoadingScreen />
            <CustomCursor />
            <TooltipProvider>
              {children}
              <Analytics />
            </TooltipProvider>
          </CursorProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
