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

const siteUrl = "https://dayezzz.my.id";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dias Adi (Dayezzz) | Frontend & Fullstack Web Developer",
    template: "%s | Dias Adi (Dayezzz)",
  },
  description:
    "Portfolio resmi Dias Adi (Dayezzz), seorang Web Developer spesialis React, Next.js, TypeScript, dan Tailwind CSS. Lihat proyek dan pengalaman terbaru di sini.",
  authors: [{ name: "Dias Adi", url: siteUrl }],
  creator: "Dias Adi",
  keywords: [
    "Dias Adi",
    "Dayezzz",
    "Portfolio Web Developer",
    "Frontend Developer Indonesia",
    "Fullstack Developer Indonesia",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dias Adi (Dayezzz) | Frontend & Fullstack Web Developer",
    description:
      "Portfolio resmi Dias Adi (Dayezzz). Menampilkan berbagai proyek web modern menggunakan Next.js, React, dan Tailwind CSS.",
    url: siteUrl,
    siteName: "Portfolio Dias Adi",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Preview Portfolio Dias Adi (Dayezzz)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dias Adi (Dayezzz) | Web Developer Portfolio",
    description:
      "Portfolio proyek web modern menggunakan React, Next.js, dan Tailwind CSS.",
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
    url: "https://dayezzz.my.id",
    jobTitle: "Frontend Developer / Web Engineer",
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
