"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "default" | "focus-fade";
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  variant = "default",
}: ScrollRevealProps) {
  const isFocusFade = variant === "focus-fade";

  const initial = isFocusFade
    ? { opacity: 0, y: 10, filter: "blur(4px)" }
    : { opacity: 0, y: 15 };

  const whileInView = isFocusFade
    ? { opacity: 1, y: 0, filter: "blur(0px)" }
    : { opacity: 1, y: 0 };

  const transition = isFocusFade
    ? {
        duration: 0.45,
        ease: [0.215, 0.61, 0.355, 1] as const, // easeOutCubic
        delay: delay / 1000,
      }
    : {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const, // easeOutExpo
        delay: delay / 1000,
      };

  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true, amount: 0.02, margin: "0px 0px -10px 0px" }}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
