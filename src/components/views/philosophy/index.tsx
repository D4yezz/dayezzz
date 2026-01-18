import SeparatorSection from "@/components/layout/SeparatorSection";
import useMediaQuery from "@/hooks/useMediaQuery";
import { motion, MotionValue, useTransform } from "framer-motion";

export default function Philosophy({
  scrollYProgress,
  refMobile,
}: {
  scrollYProgress: MotionValue<number>;
  refMobile: React.RefObject<HTMLDivElement | null>;
}) {
  const isDekstop = useMediaQuery("(min-width: 1024px)");
  const y = useTransform(scrollYProgress, [0, 1], ["70%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const titleX = useTransform(scrollYProgress, [0.5, 0.8], [-100, 0]);
  const textX = useTransform(scrollYProgress, [0.5, 0.8], [200, 0]);
  const titleMobile = useTransform(scrollYProgress, [0.2, 0.8], [-450, 0]);
  const textMobile = useTransform(scrollYProgress, [0.2, 0.8], [450, 0]);

  const contentOpacity = useTransform(scrollYProgress, [0.55, 0.7], [0, 1]);

  const bgCircle1Y = useTransform(scrollYProgress, [0, 1], [100, -200]);
  const bgCircle2Y = useTransform(scrollYProgress, [0, 1], [-100, 200]);
  const bgLine1Rotate = useTransform(scrollYProgress, [0.3, 0.9], [0, 45]);
  const bgLine2Rotate = useTransform(scrollYProgress, [0.3, 0.9], [0, -45]);

  return (
    <motion.section
      ref={isDekstop ? null : refMobile}
      style={isDekstop ? { y, opacity } : { opacity }}
      className="relative inset-0 flex flex-col justify-center w-full h-screen px-6 py-8 overflow-x-hidden overflow-y-hidden lg:py-16 lg:h-full lg:absolute text-zinc-300 bg-zinc-800 font-instrument-sans"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: bgCircle1Y }}
          className="absolute border rounded-full -top-40 -right-40 w-96 h-96 border-gray-700/30 blur-2xl"
        />

        <motion.div
          style={{ y: bgCircle2Y }}
          className="absolute border rounded-full -bottom-32 -left-32 w-80 h-80 border-gray-700/20 blur-xl"
        />

        <motion.div
          style={{ rotate: bgLine1Rotate }}
          className="absolute left-0 w-full h-1 top-1/4 bg-linear-to-r from-transparent via-gray-600/20 to-transparent"
        />
        <motion.div
          style={{ rotate: bgLine2Rotate }}
          className="absolute right-0 w-full h-1 top-3/4 bg-linear-to-l from-transparent via-gray-600/20 to-transparent"
        />

        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 50 0 L 0 0 0 50"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute invisible w-2 h-2 rounded-full top-1/3 right-1/4 bg-gray-500/60 md:visible"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 rounded-full bg-gray-400/50"
        />

        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-0 bottom-0 w-px left-1/3 bg-linear-to-b from-transparent via-gray-600/40 to-transparent"
        />
        <motion.div
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute top-0 bottom-0 w-px right-1/3 bg-linear-to-b from-transparent via-gray-600/30 to-transparent"
        />
      </div>

      <SeparatorSection
        scrollYProgress={scrollYProgress}
        number="01"
        title="Digital Identity"
        description="What the name"
      />
      <div className="relative z-10 flex flex-col items-center justify-center w-full py-4 mx-auto lg:gap-8 lg:justify-between lg:flex-row">
        <motion.h1
          style={{
            x: isDekstop ? titleX : titleMobile,
            opacity: contentOpacity,
          }}
          className="lg:text-[13rem] text-[6rem] lg:leading-52 font-geist-sans font-semibold flex items-end gap-2 tracking-tight"
        >
          Dayezzz
          <motion.div
            className="bg-gray-300 rounded-full mb-9 lg:mb-8 lg:size-7 size-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          />
        </motion.h1>

        <motion.p
          style={{ x: isDekstop ? textX : textMobile, opacity: contentOpacity }}
          className="font-semibold lg:text-[2.3rem] text-[1.3rem] text-balance lg:text-right text-center lg:w-1/3 w-full lg:leading-10 leading-6"
        >
          Dayezzz is my creative alias, a name I use to express ideas and craft
          digital experiences. Beyond the screen, my real name is
          <span className="ml-2 font-bold">Dias Adi</span>
        </motion.p>
      </div>
    </motion.section>
  );
}
