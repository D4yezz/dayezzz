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
import "./globals.css";
import { CursorProvider } from "@/hooks/useCursor";
import CustomCursor from "@/components/ui/customCursor";
import LenisProvider from "@/components/providers/LenisProvider";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import LoadingScreen from "@/components/layout/PageTransition/LoadingScreen";
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

export const metadata: Metadata = {
  title: "Dayezzz.",
  description: "Website portfolio Dayezzz.",
  keywords: [
    "Portfolio",
    "React",
    "NextJS",
    "TailwindCSS",
    "TypeScript",
    "Dias",
    "Adi",
    "Dayezzz",
    "Dayezzz.",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${lato.variable} ${montserrat.variable} ${poppins.variable} ${libre.variable} ${instrumentSans.variable} ${inter.variable} ${oldStandard.variable} antialiased`}
      >
        <LenisProvider>
          <CursorProvider>
            <LoadingScreen />
            <CustomCursor />
            {children}
          </CursorProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
