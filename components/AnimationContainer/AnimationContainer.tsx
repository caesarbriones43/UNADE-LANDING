import React from "react";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const containerVariant = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.2,
    },
  },

  hidden: { opacity: 1, scale: 0 },
};

const itemcontainer = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

type AnimationProps = {
  children: React.ReactNode;
};

const AnimationContainer = ({ children }: AnimationProps) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={containerVariant}
      initial="hidden"
      animate={control}
    >
      <motion.div
        // whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        // onHoverStart={(e) => {}}
        // onHoverEnd={(e) => {}}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default AnimationContainer;