import { motion, MotionValue, useTransform } from "framer-motion";
import Image from "next/image";

export default function ImageSection({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [120, 0]);
  return (
    <motion.section
      // style={{ y, opacity }}
      className="sticky top-0 h-screen flex items-center justify-center"
    >
      <motion.div
        style={{ opacity, scale, y }}
        className="w-[20%] h-90 object-cover "
      >
        <Image src="/helm.jpg" alt="cover" width={1000} height={1000} />
      </motion.div>
      {/* <div className="sticky top-0 h-screen flex items-center justify-center">
        <motion.div
          style={{ opacity, scale, y }}
          className="text-white text-center"
        >
          <h1 className="text-6xl font-bold tracking-tight">
            CINEMATIC EXPERIENCE
          </h1>
          <p className="mt-6 text-gray-400">
            Scroll to feel the motion
          </p>
        </motion.div>
      </div> */}
    </motion.section>
  );
}
