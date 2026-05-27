"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollReveal({ children, className = "", delay = 0 }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.02, margin: "0px 0px -10px 0px" }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo
        delay: delay / 1000,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
