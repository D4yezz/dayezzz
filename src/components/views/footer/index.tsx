import { menu } from "@/components/navbar";
import useMediaQuery from "@/hooks/useMediaQuery";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

// const navigation = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "Portfolio", href: "/portfolio" },
//   { name: "Contact", href: "/contact" },
// ];

export default function Footer() {
  const isDekstop = useMediaQuery("(min-width: 1024px)");
  const year = new Date().getFullYear();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

  const scale1 = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);
  const scale2 = useTransform(scrollYProgress, [0.25, 0.5], [0.9, 1]);
  const element1Y = useTransform(scrollYProgress, [0, 0.3], [40, 0]);
  const element2Y = useTransform(scrollYProgress, [0.25, 0.5], [40, 0]);
  const rotateX1 = useTransform(scrollYProgress, [0, 0.3], [-40, 0]);
  const rotateX2 = useTransform(scrollYProgress, [0.25, 0.5], [-20, 0]);
  return (
    <footer
      ref={ref}
      className="flex flex-col justify-end w-full py-8 overflow-hidden text-gray-300 lg:h-screen lg:mt-20 mt-30 bg-zinc-800 font-geist-sans perspective-distant"
    >
      <motion.div
        style={{
          opacity,
          scale: scale1,
          rotateX: rotateX1,
          y: element1Y,
          transformStyle: "preserve-3d",
        }}
        className="flex flex-col gap-10 lg:flex-row lg:justify-between h-fit lg:px-16 lg:h-42 lg:gap-0"
      >
        <ul className="lg:text-[2rem] text-[1.5rem] font-medium h-full w-full flex flex-col justify-between lg:px-0 px-4">
          <li className="group w-fit">
            <a href="mailto:adiasmuhsin1206@gmail.com" target="_blank">
              adiasmuhsin1206@gmail.com
            </a>
            <div className="w-0 group-hover:w-[103%] h-1 bg-gray-300 duration-300 ease-in-out" />
          </li>
          <li className=" group w-fit">
            Malang, East Java, Indonesia.
            <div className="w-0 group-hover:w-[103%] h-1 bg-gray-300 duration-300 ease-in-out" />
          </li>
          <li className="select-none group w-fit">
            Freelance & Project-based work
            <div className="w-0 group-hover:w-[103%] h-1 bg-gray-300 duration-300 ease-in-out" />
          </li>
        </ul>
        <div className="flex lg:flex-col flex-row justify-between items-end font-medium lg:bg-transparent bg-gray-300 text-zinc-800 lg:text-[2rem] text-[1.4rem] lg:h-full h-fit px-6 w-full">
          {menu.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative flex flex-col overflow-hidden lg:text-gray-300 group lg:w-34 w-fit lg:h-1/4"
            >
              {isDekstop ? (
                <>
                  <div className="absolute right-0 duration-300 ease-in-out -translate-y-1/2 top-1/2 group-hover:-top-5">
                    {item.name}
                  </div>
                  <div className="absolute right-0 duration-300 ease-in-out -translate-y-1/2 top-15 group-hover:top-1/2">
                    {item.name}
                  </div>
                </>
              ) : (
                <>{item.name}</>
              )}
            </Link>
          ))}
        </div>
      </motion.div>
      <motion.div
        style={{
          opacity: opacity2,
          rotateX: rotateX2,
          y: element2Y,
          transformStyle: "preserve-3d",
          scale: scale2,
        }}
        className="w-full uppercase text-center lg:mt-16 mt-10 font-bold text-[18vw] font-instrument-sans leading-none select-none"
      >
        <h1 className="flex items-end justify-center">
          Dayezzz
          <div className="mb-3 ml-2 bg-gray-300 rounded-full lg:w-12 lg:h-12 size-4 lg:mb-10"></div>
        </h1>
      </motion.div>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        animate={{ y: 40, opacity: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.25,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ amount: 0.3 }}
        className="flex flex-col justify-center w-full gap-4 px-4 my-8 lg:px-16"
      >
        <div className="w-full h-0.5 bg-linear-to-r from-gray-300/10 via-gray-300 to-gray-300/10" />
        <div className="flex justify-between">
          <p className="text-sm text-gray-300">
            © {year} Dias Adi. All rights reserved.
          </p>
          <p className="text-sm text-gray-300">Designed & Built by Dias Adi</p>
        </div>
      </motion.div>
    </footer>
  );
}
