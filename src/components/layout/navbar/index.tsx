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
import { socialLinks } from "@/components/views/cta";

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
      className={`flex lg:py-8 py-6 lg:px-16 px-8 font-inter w-full h-fit z-80 ${welcome ? "absolute" : "fixed lg:bg-transparent bg-zinc-800 top-0"}`}
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
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                exit={{ opacity: 0 }}
                className=" w-full h-screen inset-0 absolute z-90 bg-black/30 backdrop-blur-[5px]"
                onClick={toggle}
              />
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute top-0 right-0 flex flex-col justify-between z-90 lg:w-[60%] w-screen h-screen lg:px-8 px-4 text-gray-300 bg-zinc-800"
              >
                {isDekstop ? (
                  <>
                    <motion.button
                      onHoverStart={() => setHovered(true)}
                      onHoverEnd={() => setHovered(false)}
                      onClick={toggle}
                      className="absolute z-20 right-0 w-[5vw] duration-300 ease-in-out hover:w-[10vw] flex items-center group justify-center cursor-pointer bg-gray-300 text-zinc-800 h-dvh overflow-hidden"
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
                        <div className="group-hover:w-1.5 w-0 h-1/12 group-hover:h-[105%] duration-300 ease-in-out bg-zinc-800 absolute rotate-12 rounded-full" />
                        <div className="group-hover:w-1.5 w-0 h-1/12 group-hover:h-[105%] duration-300 ease-in-out bg-zinc-800 absolute -rotate-12 rounded-full" />
                      </motion.span>
                    </motion.button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={toggle}
                      className="absolute top-8 right-8 cursor-pointer"
                    >
                      <X size={40} className="cursor-pointer" />
                    </button>
                  </>
                )}

                <motion.ul
                  exit={{ x: 100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="flex flex-col w-full h-fit gap-2 lg:py-8 py-4 font-poppins"
                >
                  {menu.map(
                    (item, index) =>
                      url !== item.href && (
                        <motion.li
                          key={item.name}
                          initial={{ x: 600, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: 200, opacity: 0 }}
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
                          className="relative px-6 py-4 overflow-hidden duration-300 ease-in-out cursor-pointer select-none cursor-box lg:text-6xl text-5xl font-medium w-fit hover:text-gray-800"
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
                <div className="flex flex-col w-full px-4 lg:gap-6 gap-5 lg:mb-0 mb-24 lg:py-8 py-4">
                  <div
                    className={`bg-gray-300 w-full h-0.5 duration-300 ease-in-out ${!hovered ? "lg:w-[90%]" : "lg:w-[80%]"}`}
                  ></div>
                  <div className="flex justify-between items-center lg:w-[90%] w-full">
                    <div className="flex flex-col gap-2">
                      <h2 className="lg:text-3xl text-2xl cursor-default font-semibold font-geist-sans flex flex-col overflow-hidden relative group w-40 lg:h-10 h-6">
                        <span className="absolute left-0 duration-300 ease-in-out -translate-y-1/2 top-1/2 group-hover:-top-5">
                          Dayezzz.
                        </span>
                        <span className="absolute left-0 duration-300 ease-in-out -translate-y-1/2 top-15 group-hover:top-1/2">
                          Dias.
                        </span>
                      </h2>
                      <Link
                        href={"mailto:adiasmuhsin1206@gmail.com"}
                        target="_blank"
                        className="lg:text-md text-sm"
                      >
                        @adiasmuhsin1206@gmail.com
                      </Link>
                    </div>
                    <div className={`flex gap-1.5 relative z-10`}>
                      {socialLinks.map((item) => {
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={`lg:size-12 size-10 lg:p-2.5 p-1.5 flex items-center justify-center text-zinc-800 hover:scale-110 duration-300 ease-in-out bg-gray-300 ${!hovered ? "translate-x-0" : "translate-x-40"}`}
                          >
                            {item.icon}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
