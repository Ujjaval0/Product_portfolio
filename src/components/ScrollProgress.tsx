"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { getLenisInstance } from "@/components/SmoothScroll";

export default function ScrollProgress() {
  const raw = useMotionValue(0);
  const scaleX = useSpring(raw, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Poll Lenis progress via RAF — this is the correct way to read
    // scroll progress when Lenis is active, avoiding native scroll event conflicts
    const tick = () => {
      const lenis = getLenisInstance();
      if (lenis) {
        raw.set(lenis.progress ?? 0);
      } else {
        // Fallback: native scroll ratio
        const docH = document.documentElement.scrollHeight - window.innerHeight;
        raw.set(docH > 0 ? window.scrollY / docH : 0);
      }
      rafId.current = requestAnimationFrame(tick);
    };
    rafId.current = requestAnimationFrame(tick);
    return () => {
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, [raw]);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] bg-transparent z-[100] pointer-events-none">
      <motion.div
        className="h-full bg-accent origin-left"
        style={{ scaleX }}
      />
    </div>
  );
}
