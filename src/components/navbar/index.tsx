import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMenuStore } from "@/store/useMenuStore";
import { handleMove, reset, useCursor } from "@/hooks/useCursor";
import { useHoveredStore } from "@/store/useHoveredStore";
import { useLenis } from "../providers/LenisProvider";
import useMediaQuery from "@/hooks/useMediaQuery";

export const menu = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar({ welcome = true }) {
  const { open, toggle } = useMenuStore();
  const cursor = useCursor();
  const isDekstop = useMediaQuery("(min-width: 1024px)");
  const setVariant = cursor?.setVariant;
  const url = typeof window !== "undefined" ? window.location.pathname : "";

  const { index: hoveredIndex, setIndex: setHoveredIndex } = useHoveredStore();
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    if (open) {
      lenis.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis.start();
      document.body.style.overflow = "auto";
    }
  }, [open, lenis]);

  const onMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    setHoveredIndex(null);
    reset(e);
  };

  return (
    <header
      className={`flex lg:py-8 py-6 lg:px-16 px-8 font-inter w-full h-fit z-10 ${welcome ? "absolute" : "fixed lg:bg-transparent bg-zinc-800"}`}
    >
      <nav className="flex justify-between w-full items-start">
        <Link
          href="/"
          className="text-3xl font-bold font-instrument-sans cursor-pointer"
        >
          Dayezzz.
        </Link>
        <button className="p-1 cursor-pointer" onClick={toggle}>
          <Menu strokeWidth={1.5} size={30} />
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full h-screen bg-zinc-800 text-gray-300 flex flex-col items-center justify-center p-12 "
            >
              <button
                onClick={toggle}
                className="absolute top-12 right-12 cursor-pointer"
              >
                <X size={40} className="cursor-pointer" />
              </button>
              <motion.ul
                exit={{ x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full h-full flex flex-col gap-2 font-poppins"
              >
                {menu.map(
                  (item, index) =>
                    url !== item.href && (
                      <motion.li
                        key={item.name}
                        initial={{ x: -600, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 15,
                          mass: 0.2,
                          delay: index * 0.12,
                        }}
                        onMouseEnter={() => {
                          setHoveredIndex(index);
                          setVariant?.("nav");
                        }}
                        // onMouseMove={handleMove}
                        onMouseLeave={onMouseLeave}
                        // onMouseLeave={()=>setHoveredIndex(null)}
                        data-cursor="box"
                        className="relative cursor-box text-7xl w-fit py-4 px-12 overflow-hidden cursor-pointer hover:text-gray-800 duration-300 ease-in-out select-none"
                      >
                        <motion.div
                          className="absolute left-0 top-0 bottom-0 bg-gray-300 z-0"
                          initial={{ width: "0%" }}
                          animate={{
                            width: hoveredIndex === index ? "100%" : "0%",
                          }}
                          transition={{ duration: 0.45, ease: "easeInOut" }}
                        />
                        <Link
                          href={item.href}
                          className="relative z-10 cursor-pointer"
                        >
                          {item.name}
                        </Link>
                      </motion.li>
                    ),
                )}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
