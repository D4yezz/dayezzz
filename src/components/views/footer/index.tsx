import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef} from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
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
      className="flex flex-col justify-end w-full h-screen py-8 mt-20 overflow-hidden text-gray-300 bg-zinc-800 font-geist-sans perspective-distant"
    >
      <motion.div
        style={{
          opacity,
          scale: scale1,
          rotateX: rotateX1,
          y: element1Y,
          transformStyle: "preserve-3d",
        }}
        className="flex justify-between px-16 h-42"
      >
        <ul className="text-[2rem] font-medium h-full flex flex-col justify-between">
          <li className="group w-fit">
            <a href="mailto:adiasmuhsin1206@gmail.com" target="_blank">
              adiasmuhsin1206@gmail.com
            </a>
            <div className="w-0 group-hover:w-[103%] h-1 bg-gray-300 duration-300 ease-in-out" />
          </li>
          <li className="select-none group w-fit">
            Malang, East Java, Indonesia.
            <div className="w-0 group-hover:w-[103%] h-1 bg-gray-300 duration-300 ease-in-out" />
          </li>
          <li className="select-none group w-fit">
            Freelance & Project-based work
            <div className="w-0 group-hover:w-[103%] h-1 bg-gray-300 duration-300 ease-in-out" />
          </li>
        </ul>
        <div className="flex flex-col justify-between items-end font-medium text-[2rem] h-full">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative flex flex-col overflow-hidden text-gray-300 group w-34 h-1/4"
            >
              <div className="absolute right-0 duration-300 ease-in-out -translate-y-1/2 top-1/2 group-hover:-top-5">
                {item.name}
              </div>
              <div className="absolute right-0 duration-300 ease-in-out -translate-y-1/2 top-15 group-hover:top-1/2">
                {item.name}
              </div>
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
        className="w-full uppercase text-center mt-16 font-bold lg:text-[18vw] font-instrument-sans leading-none select-none"
      >
        <h1 className="flex items-end justify-center">
          Dayezzz
          <div className="w-12 h-12 mb-10 ml-2 bg-gray-300 rounded-full"></div>
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
        className="flex flex-col justify-center w-full gap-4 px-16 my-8"
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
