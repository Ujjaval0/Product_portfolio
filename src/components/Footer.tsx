"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useState } from "react";

const FONT = 'Manrope, "Manrope Placeholder", sans-serif';

// Heading split into 3 lines for staggered word reveals
const HEADING_LINES = ["Let's build", "something", "together"];

const NAV_LINKS = [
  { label: "Home",    href: "/" },
  { label: "Works",   href: "/#works" },
  { label: "About",   href: "/#about" },
  { label: "Contact", href: "/#connect" },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: portfolio.linkedin },
  { label: "GitHub",   href: portfolio.github },
  { label: "Resume",   href: portfolio.resumeUrl },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect desktop viewport (>= 1024px) to conditionally enable sticky+animations
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Raw progress 0→1 as footer is revealed by scrolling
  const raw = useMotionValue(0);
  // Smooth spring so animations feel fluid during scroll
  const progress = useSpring(raw, { stiffness: 80, damping: 22, mass: 0.8 });

  useEffect(() => {
    // Only run scroll-tracking on desktop for the reveal animation
    if (!isDesktop) {
      raw.set(1); // Force fully visible on mobile/tablet
      return;
    }
    const onScroll = () => {
      const footer = footerRef.current;
      if (!footer) return;
      const footerH  = footer.offsetHeight;
      const docH     = document.documentElement.scrollHeight;
      const scrollY  = window.scrollY;
      const winH     = window.innerHeight;
      const revealed = scrollY + winH - (docH - footerH);
      raw.set(Math.max(0, Math.min(1, revealed / footerH)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [raw, isDesktop]);

  // ── Derived animation values ──────────────────────────────────────

  // Label "Contact"
  const labelOpacity = useTransform(progress, [0, 0.25], [0, 1]);
  const labelY       = useTransform(progress, [0, 0.25], [16, 0]);

  // Heading lines (staggered)
  const line0Opacity = useTransform(progress, [0.05, 0.35], [0, 1]);
  const line0Y       = useTransform(progress, [0.05, 0.35], [50, 0]);
  const line1Opacity = useTransform(progress, [0.12, 0.42], [0, 1]);
  const line1Y       = useTransform(progress, [0.12, 0.42], [50, 0]);
  const line2Opacity = useTransform(progress, [0.2,  0.5 ], [0, 1]);
  const line2Y       = useTransform(progress, [0.2,  0.5 ], [50, 0]);

  const lineAnimations = [
    { opacity: line0Opacity, y: line0Y },
    { opacity: line1Opacity, y: line1Y },
    { opacity: line2Opacity, y: line2Y },
  ];

  // Button
  const btnOpacity = useTransform(progress, [0.3, 0.55], [0, 1]);
  const btnY       = useTransform(progress, [0.3, 0.55], [20, 0]);

  // Nav links (staggered per item)
  const navOpacities = NAV_LINKS.map((_, i) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTransform(progress, [0.2 + i * 0.06, 0.45 + i * 0.06], [0, 1])
  );
  const navYs = NAV_LINKS.map((_, i) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTransform(progress, [0.2 + i * 0.06, 0.45 + i * 0.06], [20, 0])
  );

  // Social links (staggered per item)
  const socialOpacities = SOCIAL_LINKS.map((_, i) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTransform(progress, [0.25 + i * 0.06, 0.5 + i * 0.06], [0, 1])
  );
  const socialYs = SOCIAL_LINKS.map((_, i) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTransform(progress, [0.25 + i * 0.06, 0.5 + i * 0.06], [20, 0])
  );

  // Bottom bar
  const barOpacity = useTransform(progress, [0.4, 0.65], [0, 1]);

  return (
    <footer
      ref={footerRef}
      className="w-full bg-black text-white overflow-hidden px-6 md:px-12 lg:px-20 pt-14 pb-12"
      style={isDesktop ? { position: "sticky", bottom: 0, zIndex: 0 } : { position: "relative", zIndex: 10 }}
    >
      <div className="w-full flex flex-col">

        {/* Top row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-0">

          {/* ── Left CTA ── */}
          <div className="flex flex-col items-start max-w-lg">

            {/* "Contact" label */}
            <motion.span
              style={{ opacity: labelOpacity, y: labelY, fontFamily: FONT, fontSize: "14px", fontWeight: 500, color: "rgba(255,255,255,0.5)", letterSpacing: "0.02em", marginBottom: "24px", display: "block" }}
            >
              Contact
            </motion.span>

            {/* Heading — line by line reveal */}
            <h2 style={{ marginBottom: "40px", letterSpacing: "-0.02em", overflow: "hidden" }}>
              {HEADING_LINES.map((line, i) => (
                <motion.span
                  key={i}
                  style={{
                    opacity: lineAnimations[i].opacity,
                    y: lineAnimations[i].y,
                    display: "block",
                    fontFamily: FONT,
                    fontSize: "clamp(40px, 6vw, 72px)",
                    fontWeight: 700,
                    lineHeight: 1.1,
                    color: "#ffffff",
                  }}
                >
                  {line}
                </motion.span>
              ))}
            </h2>

            {/* "Let's talk" button */}
            <motion.a
              href="mailto:ujjavalbhardwaj6@gmail.com"
              style={{
                opacity: btnOpacity,
                y: btnY,
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 28px",
                borderRadius: "999px",
                border: "1.5px solid rgba(255,255,255,0.35)",
                backgroundColor: "transparent",
                color: "#ffffff",
                fontFamily: FONT,
                fontSize: "16px",
                fontWeight: 500,
                cursor: "pointer",
                textDecoration: "none",
              }}
              whileHover={{
                backgroundColor: "rgba(255,255,255,0.08)",
                borderColor: "rgba(255,255,255,0.7)",
                scale: 1.03,
              }}
              transition={{ duration: 0.2 }}
            >
              Let&apos;s talk
              <ArrowUpRight size={16} />
            </motion.a>
          </div>

          {/* ── Right links ── */}
          <div className="flex flex-wrap gap-x-16 gap-y-8 lg:gap-x-24">

            {/* Nav links */}
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link, i) => (
                <motion.div key={link.label} style={{ opacity: navOpacities[i], y: navYs[i] }}>
                  <Link
                    href={link.href}
                    style={{ fontFamily: FONT, fontSize: "18px", fontWeight: 500, color: "rgba(255,255,255,0.75)", textDecoration: "none", lineHeight: "25.2px", display: "block" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#ffffff")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.75)")}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-4">
              {SOCIAL_LINKS.map((link, i) => (
                <motion.div key={link.label} style={{ opacity: socialOpacities[i], y: socialYs[i] }}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: FONT, fontSize: "18px", fontWeight: 500, color: "rgba(255,255,255,0.75)", textDecoration: "none", lineHeight: "25.2px", display: "inline-flex", alignItems: "center", gap: "6px" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#ffffff")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.75)")}
                  >
                    {link.label}
                    <ArrowUpRight size={14} style={{ opacity: 0.6 }} />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          style={{
            opacity: barOpacity,
            marginTop: "64px",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontFamily: FONT, fontSize: "13px", color: "rgba(255,255,255,0.7)", fontWeight: 400 }}>
            © {new Date().getFullYear()} {portfolio.name}. All rights reserved.
          </span>
          <span style={{ fontFamily: FONT, fontSize: "13px", color: "rgba(255,255,255,0.55)", fontWeight: 400 }}>
            Thinking in systems. Shipping in sprints.
          </span>
        </motion.div>

      </div>
    </footer>
  );
}
