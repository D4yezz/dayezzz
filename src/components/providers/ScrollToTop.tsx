"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "./LenisProvider";

export default function ScrollToTop() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const resetScroll = () => {
      window.scrollTo(0, 0);

      lenis.scrollTo(0, {
        immediate: true,
      });
    };

    const frame1 = requestAnimationFrame(() => {
      const frame2 = requestAnimationFrame(() => {
        resetScroll();

        setTimeout(resetScroll, 50);
      });

      return () => cancelAnimationFrame(frame2);
    });

    return () => {
      cancelAnimationFrame(frame1);
    };
  }, [pathname, lenis]);

  return null;
}
