import DotGrid from "@/components/ReactBites/DotGrid";
import TextHover from "@/components/ui/TextHover";
import useMediaQuery from "@/hooks/useMediaQuery";
import { motion, useScroll, useTransform } from "framer-motion";
import { Download } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/D4yezz",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15 15"
        fill="currentColor"
      >
        <path d="M7.499.25a7.25 7.25 0 0 1 2.297 14.129c-.367.07-.498-.155-.498-.349c0-.237.009-1.02.009-1.989c0-.676-.233-1.119-.493-1.343c1.615-.18 3.311-.792 3.311-3.577c0-.792-.28-1.438-.745-1.945c.074-.184.322-.92-.073-1.92c-.015-.004-.625-.182-1.992.744A7 7 0 0 0 7.5 3.756A7 7 0 0 0 5.686 4C4.3 3.062 3.69 3.257 3.69 3.257c-.394.998-.146 1.735-.07 1.919a2.8 2.8 0 0 0-.747 1.945c0 2.778 1.693 3.4 3.303 3.583c-.207.181-.394.5-.46.969c-.413.185-1.464.506-2.11-.602c0 0-.383-.695-1.11-.747c0 0-.709-.009-.05.44c.014.008.48.237.804 1.061c.005.016.437 1.407 2.442.972c.004.605.01 1.061.01 1.233c0 .193-.132.416-.495.35A7.25 7.25 0 0 1 7.499.25" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/dias-adi-711832303",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15 15"
        fill="currentColor"
      >
        <path d="M13 1a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM9.675 5.85a2.2 2.2 0 0 0-1.096.231c-.257.129-.527.424-.734.938h-.053V6H6v6.005h1.906V8.812c-.027-.328.077-.75.291-1.002s.521-.312.753-.342h.072c.607 0 1.056.375 1.056 1.321v3.216h1.906L12 8.357c0-1.804-1.166-2.506-2.325-2.506M3.05 12h1.9V6h-1.9zM4 2.93a1.075 1.075 0 1 0 0 2.15a1.075 1.075 0 0 0 0-2.15" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/adidiasz",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        fill="currentColor"
      >
        <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3S645.3 585.4 645.3 512S585.4 378.7 512 378.7M911.8 512c0-55.2.5-109.9-2.6-165c-3.1-64-17.7-120.8-64.5-167.6c-46.9-46.9-103.6-61.4-167.6-64.5c-55.2-3.1-109.9-2.6-165-2.6c-55.2 0-109.9-.5-165 2.6c-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6c46.9 46.9 103.6 61.4 167.6 64.5c55.2 3.1 109.9 2.6 165 2.6c55.2 0 109.9.5 165-2.6c64-3.1 120.8-17.7 167.6-64.5c46.9-46.9 61.4-103.6 64.5-167.6c3.2-55.1 2.6-109.8 2.6-165M512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9S717.1 398.5 717.1 512S625.5 717.1 512 717.1m213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9s47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9" />
      </svg>
    ),
  },
];

export default function Contact() {
  const isDekstop = useMediaQuery("(min-width: 1024px)");
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.5]);
  const blur = useTransform(
    scrollYProgress,
    [0, 0.4, 0.55, 1],
    ["blur(6px)", "blur(0px)", "blur(0px)", "blur(8px)"],
  );
  const element1X = useTransform(scrollYProgress, [0, 0.8], [-100, 0]);
  const element1Y = useTransform(scrollYProgress, [0, 0.8], [200, 0]);
  const element2X = useTransform(scrollYProgress, [0, 0.8], [100, 0]);
  const headingY = useTransform(scrollYProgress, [0, 0.5], [-300, 0]);
  return (
    <section
      ref={ref}
      className="relative flex items-center justify-center w-full h-screen p-4 overflow-hidden lg:p-12 font-geist-sans bg-zinc-800"
    >
      <motion.div
        style={{ filter: blur }}
        className="w-full h-full flex flex-col lg:gap-20 gap-4 items-center justify-center bg-gray-300 text-zinc-800 inset-shadow-[0px_0px_8px] inset-shadow-zinc-800 rounded-sm"
      >
        <motion.div
          style={{ scale, opacity, y: headingY }}
          className="sticky bottom-0 z-20 flex flex-col items-center justify-center gap-8 overflow-y-hidden w-fit"
        >
          <h1 className="lg:font-semibold font-bold lg:text-[8rem] text-[4rem] text-center tracking-tight lg:leading-28 leading-16">
            LET&#39;S WORK <br /> TOGETHER
          </h1>
          <Link
            href={"/contact"}
            className="flex items-center justify-center py-3 overflow-hidden text-xl text-gray-300 duration-200 ease-in-out border-2 cursor-pointer w-50 bg-zinc-800 hover:border-zinc-800 hover:bg-gray-300 hover:text-zinc-800"
          >
            <TextHover text="Contact Now" />
          </Link>
        </motion.div>
        <motion.div
          style={isDekstop ? { opacity, y: 0 } : { opacity, y: element1Y }}
          // style={{ opacity } }
          className="lg:w-[75%] lg:gap-0 gap-8 w-full flex lg:flex-row flex-col lg:justify-between justify-center items-center z-10"
        >
          <motion.button
            // onClick={() => {
            //   const link = document.createElement("a");
            //   link.href = "/5.png";
            //   link.setAttribute("download", "5.png");
            //   link.click();
            // }}
            style={isDekstop ? { x: element1X } : {}}
            className="relative flex flex-col items-center justify-center w-2/4 py-5 overflow-hidden font-medium duration-200 ease-in-out cursor-pointer lg:px-8 lg:py-6 lg:text-xl group border-y-2 lg:w-60 h-fit border-zinc-800 hover:bg-zinc-800 hover:text-gray-300"
          >
            <span className="absolute duration-300 ease-in-out -translate-x-1/2 -translate-y-1/2 top-1/2 group-hover:-top-10 left-1/2">
              See My CV
            </span>
            <Download className="absolute duration-300 ease-in-out -translate-x-1/2 -translate-y-1/2 top-15 group-hover:top-1/2 left-1/2" />
          </motion.button>
          <motion.ul
            style={isDekstop ? { x: element2X } : {}}
            className="flex lg:gap-10 gap-4 items-center justify-center"
          >
            {socialLinks.map((item) => (
              <li
                key={item.name}
                className="rounded-full border-3 border-zinc-800"
              >
                <Link
                  href={item.href}
                  className="size-12 p-2.5 flex items-center justify-center text-zinc-800 hover:scale-80 duration-100 ease-in-out"
                >
                  {item.icon}
                </Link>
              </li>
            ))}
          </motion.ul>
        </motion.div>
        <DotGrid
          dotSize={3}
          gap={24}
          baseColor="#27272a"
          activeColor="#27272a"
          className="opacity-50"
        />
      </motion.div>
    </section>
  );
}
