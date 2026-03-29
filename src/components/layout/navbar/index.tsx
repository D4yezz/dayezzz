import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMenuStore } from "@/store/useMenuStore";
import { reset, useCursor } from "@/hooks/useCursor";
import { useHoveredStore } from "@/store/useHoveredStore";
import { useLenis } from "../../providers/LenisProvider";
import useMediaQuery from "@/hooks/useMediaQuery";
import LogoLoop from "@/components/ReactBites/LogoLoop";

export const menu = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

function textCloseComponent() {
  return (
    <span className="uppercase text-4xl rotate-90 font-semibold">close</span>
  );
}

const textClose = [
  { node: textCloseComponent(), title: "", href: "" },
  { node: textCloseComponent(), title: "", href: "" },
  { node: textCloseComponent(), title: "", href: "" },
];
export default function Navbar({ welcome = true }) {
  const { open, toggle } = useMenuStore();
  const cursor = useCursor();
  const isDekstop = useMediaQuery("(min-width: 1024px)");
  const setVariant = cursor?.setVariant;
  const url = typeof window !== "undefined" ? window.location.pathname : "";
  const [hovered, setHovered] = useState(false);

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
      className={`flex lg:py-8 py-6 lg:px-16 px-8 font-inter w-full h-fit z-40 ${welcome ? "absolute" : "fixed lg:bg-transparent bg-zinc-800"}`}
    >
      <nav className="flex items-start justify-between w-full">
        <Link
          href="/"
          className="text-3xl font-bold cursor-pointer font-instrument-sans"
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
              className="absolute top-0 left-0 flex flex-col justify-center w-full h-screen p-8 text-gray-300 bg-zinc-800"
            >
              {isDekstop ? (
                <>
                  <motion.button
                    onHoverStart={() => setHovered(true)}
                    onHoverEnd={() => setHovered(false)}
                    onClick={toggle}
                    className="absolute right-0 w-[5vw] duration-300 ease-in-out hover:w-[12vw] flex items-center group justify-center cursor-pointer bg-gray-300 text-zinc-800 h-dvh overflow-hidden"
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hovered ? 0 : 1 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={`${hovered ? "absolute" : "relative"}`}
                    >
                      <LogoLoop
                        logos={textClose}
                        speed={50}
                        direction="down"
                        logoHeight={60}
                        gap={85}
                        hoverSpeed={0}
                        scaleOnHover={false}
                        fadeOut
                        fadeOutColor="#d1d5dc"
                        ariaLabel="Close Menu"
                      />
                    </motion.span>
                    <motion.span
                      initial={{ width: 0 }}
                      animate={{ width: hovered ? "100%" : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex items-center justify-center w-full h-full bg-gray-300"
                    >
                      <div className="group-hover:w-1.5 w-0 h-1/12 group-hover:h-[90%] duration-300 ease-in-out bg-zinc-800 absolute rotate-12 rounded-full" />
                      <div className="group-hover:w-1.5 w-0 h-1/12 group-hover:h-[90%] duration-300 ease-in-out bg-zinc-800 absolute -rotate-12 rounded-full" />
                    </motion.span>
                  </motion.button>
                </>
              ) : (
                <>
                  <button
                    onClick={toggle}
                    className="absolute top-12 right-12 cursor-pointer"
                  >
                    <X size={40} className="cursor-pointer" />
                  </button>
                </>
              )}

              {/* <Link
                href="/"
                className="text-3xl font-bold cursor-pointer font-instrument-sans px-14"
              >
                Dayezzz.
              </Link> */}
              <motion.ul
                exit={{ x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex flex-col w-full h-full gap-2 font-poppins"
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
                        className="relative px-12 py-4 overflow-hidden duration-300 ease-in-out cursor-pointer select-none cursor-box text-6xl w-fit hover:text-gray-800"
                      >
                        <motion.div
                          className="absolute top-0 bottom-0 left-0 z-0 lg:bg-gray-300"
                          initial={{ width: "0%" }}
                          animate={{
                            width: hoveredIndex === index ? "100%" : "0%",
                          }}
                          transition={{ duration: 0.45, ease: "easeInOut" }}
                        />
                        <Link
                          onClick={toggle}
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
