import { motion, MotionValue, useTransform } from "framer-motion";

export default function SeparatorSection({
  number,
  title,
  description,
  scrollYProgress,
  className,
  separatorColor = "gray-300",
}: {
  number: string;
  title: string;
  description: string;
  scrollYProgress: MotionValue<number>;
  className?: string;
  separatorColor?: string;
}) {
  const opacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  // const y = useTransform(scrollYProgress, [0, 0.4], [-100, 0]);
  const lineScale = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);

  return (
    <>
      <motion.div
        style={{ opacity }}
        className={`w-full h-7 uppercase font-medium flex items-center md:justify-between z-20 ${className}`}
      >
        <span className="text-sm text-left md:w-1/3 w-fit lg:text-[1.2rem]">
          {number}
        </span>
        <div
          className={`md:invisible visible w-[2.5px] h-full bg-${separatorColor} md:mx-0 mx-2`}
        ></div>
        <h3 className="text-sm text-center md:w-1/3 w-fit text-nowrap lg:text-[1.2rem]">
          {title}
        </h3>
        <p className="w-full text-sm text-right md:w-1/3 lg:text-[1.2rem]">
          {description}
        </p>
      </motion.div>

      <motion.div
        style={{ scaleX: lineScale, opacity }}
        className={`w-full origin-left border-t-2 border-${separatorColor}`}
      />
    </>
  );
}
