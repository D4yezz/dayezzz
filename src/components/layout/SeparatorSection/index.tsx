import { motion, MotionValue, useTransform } from "framer-motion";

export default function SeparatorSection({
  number,
  title,
  description,
  scrollYProgress,
  className,
}: {
  number: string;
  title: string;
  description: string;
  scrollYProgress: MotionValue<number>;
  className?: string;
}) {
  const opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  // const y = useTransform(scrollYProgress, [0, 0.4], [-100, 0]);
  const lineScale = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);

  return (
    <>
      <motion.div
        style={{ opacity }}
        className={`w-full uppercase font-medium flex justify-between ${className}`}
      >
        <span className="md:w-1/3 text-left">{number}</span>
        <h3 className="md:w-1/3 text-center">{title}</h3>
        <p className="md:w-1/3 text-right">{description}</p>
      </motion.div>

      <motion.div
        style={{ scaleX: lineScale, opacity }}
        className="w-full origin-left border-t-2 border-gray-300"
      />
    </>
  );
}
