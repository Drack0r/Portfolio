import { useRef } from "react";

import { motion, useInView } from "motion/react";

import { fadeUp } from "@/variants/animation";

function RevealOnScroll({ children, variant = fadeUp, delay = 0, className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default RevealOnScroll;
