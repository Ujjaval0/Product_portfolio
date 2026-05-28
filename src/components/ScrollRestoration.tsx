"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { getLenisInstance } from "@/components/SmoothScroll";

/**
 * ScrollRestoration — resets scroll position on every navigation.
 * Special case: navigating back from a /work/* project to "/" scrolls
 * to the #works section so the user lands where they left off.
 */
export default function ScrollRestoration() {
  const pathname = usePathname();
  const prevPathname = useRef<string | null>(null);

  useEffect(() => {
    const previous = prevPathname.current;
    prevPathname.current = pathname;

    // Detect: coming back to home from a project page
    const backToHomeFromProject =
      pathname === "/" &&
      previous !== null &&
      previous.startsWith("/work/");

    const timer = setTimeout(() => {
      const lenis = getLenisInstance();
      if (lenis) {
        lenis.resize();
      }

      // Check if there is a specific hash target in the navigated URL
      const hash = window.location.hash;
      const targetElement = hash && hash !== "#top" ? document.getElementById(hash.substring(1)) : null;

      if (hash === "#top") {
        // If the hash is explicitly #top, scroll to the top of the viewport
        if (lenis) {
          lenis.scrollTo(0, { immediate: true });
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        }
      } else if (targetElement) {
        // If a specific hash target exists on the page, scroll to it
        if (lenis) {
          lenis.scrollTo(targetElement, { offset: -80, immediate: true });
        } else {
          targetElement.scrollIntoView();
        }
      } else if (backToHomeFromProject) {
        // If returning from project generally without a hash (e.g., logo clicked), scroll to works section
        const worksSection = document.getElementById("works");
        if (worksSection) {
          if (lenis) {
            lenis.scrollTo(worksSection, { offset: -80, immediate: true });
          } else {
            worksSection.scrollIntoView();
          }
        }
      } else {
        // All other navigation: reset to the top
        if (lenis) {
          lenis.scrollTo(0, { immediate: true });
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        }
      }
    }, 10);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
