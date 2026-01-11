import SeparatorSection from "@/components/layout/SeparatorSection";
import { motion, MotionValue, useTransform } from "framer-motion";

export default function Philosophy({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const y = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const titleX = useTransform(scrollYProgress, [0.5, 0.8], [-200, 0]);
  const textX = useTransform(scrollYProgress, [0.5, 0.8], [200, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0.55, 0.7], [0, 1]);

  const bgCircle1Y = useTransform(scrollYProgress, [0, 1], [100, -200]);
  const bgCircle2Y = useTransform(scrollYProgress, [0, 1], [-100, 200]);
  const bgLine1Rotate = useTransform(scrollYProgress, [0.3, 0.9], [0, 45]);
  const bgLine2Rotate = useTransform(scrollYProgress, [0.3, 0.9], [0, -45]);

  return (
    <motion.section
      style={{ y, opacity }}
      className="w-full h-full absolute inset-0 px-6 py-16 text-zinc-300 bg-zinc-800 flex flex-col justify-center font-instrument-sans overflow-y-hidden overflow-x-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: bgCircle1Y }}
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full border border-gray-700/30 blur-2xl"
        />

        <motion.div
          style={{ y: bgCircle2Y }}
          className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full border border-gray-700/20 blur-xl"
        />

        <motion.div
          style={{ rotate: bgLine1Rotate }}
          className="absolute top-1/4 left-0 w-full h-1 bg-linear-to-r from-transparent via-gray-600/20 to-transparent"
        />
        <motion.div
          style={{ rotate: bgLine2Rotate }}
          className="absolute top-3/4 right-0 w-full h-1 bg-linear-to-l from-transparent via-gray-600/20 to-transparent"
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
          className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-gray-500/60"
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
          className="absolute left-1/3 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-gray-600/40 to-transparent"
        />
        <motion.div
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute right-1/3 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-gray-600/30 to-transparent"
        />
      </div>

      <SeparatorSection
        scrollYProgress={scrollYProgress}
        number="01"
        title="Digital Identity"
        description="What the name"
      />
      <div className="flex justify-between gap-8 items-center w-full mx-auto py-4 relative z-10">
        <motion.h1
          style={{ x: titleX, opacity: contentOpacity }}
          className="text-[13rem] leading-52 font-geist-sans font-semibold flex items-end gap-2 tracking-tight"
        >
          Dayezzz
          <motion.div
            className="size-7 rounded-full bg-gray-300 mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          />
        </motion.h1>

        <motion.p
          style={{ x: textX, opacity: contentOpacity }}
          className="font-semibold text-[2.3rem] text-right w-1/3 leading-10"
        >
          Dayezzz is my creative alias, a name I use to express ideas and craft
          digital experiences. Beyond the screen, my real name is
          <span className="font-bold ml-2">Dias Adi</span>
        </motion.p>
      </div>
    </motion.section>
  );
}
