import { motion } from "framer-motion";

type Props = {
  text: string;
  className?: string;
};

// type  charVariantsType = {
//   hidden: {
//     y: string;
//     opacity: number;
//   };
//   show: {
//     y: string;
//     opacity: number;
//     transition: {
//       duration: number;
//       ease: number[];
//     };
//   };
// };

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.035, // jarak antar huruf
    },
  },
};

const charVariants= {
  hidden: {
    y: "100%",
    opacity: 0,
  },
  show: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AnimatedText({ text, className}: Props) {
  return (
    <>
      {/* <motion.span
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={`inline-block ${className}`}
      >
        {text.split("").map((letter, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <motion.span variants={charVariants} className="inline-block">
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          </span>
        ))}
      </motion.span> */}
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          show: {
            transition: { delayChildren: 0.3, staggerChildren: 0.02 },
          },
        }}
        className={`max-w-xl ${className}`}
        // style={style}
      >
        {text
          .split("")
          .map((char, i) => (
            <span key={i} className="inline-block overflow-hidden">
              <motion.span variants={charVariants  } className="inline-block">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            </span>
          ))}
      </motion.p>
    </>
  );
}
