"use client";

import { useEffect, useRef, ReactNode } from "react";
import Lenis from "lenis";

interface SmoothScrollProps {
  children: ReactNode;
}

// Module-level ref — avoids window.lenis type conflict from Lenis's own .d.ts
let _lenisInstance: Lenis | null = null;

export function getLenisInstance(): Lenis | null {
  return _lenisInstance;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      // Shorter duration so scroll never feels "stuck"
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      // syncTouch: false lets touch devices and trackpads use browser-native scrolling, avoiding lock-ups
      syncTouch: false,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;
    _lenisInstance = lenis;

    // Automatically recalculate scroll boundaries when height changes (route transitions, image loads)
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });
    
    if (document.body) {
      resizeObserver.observe(document.body);
    }

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(rafId);
      lenis.destroy();
      _lenisInstance = null;
    };
  }, []);

  return <>{children}</>;
}
