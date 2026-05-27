"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

const FONT = 'Manrope, "Manrope Placeholder", sans-serif';

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

// Shared easing
const ease = [0.16, 1, 0.3, 1] as const;

export default function Footer() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  // Trigger animations when the sentinel enters the viewport
  const isInView = useInView(sentinelRef, { once: true, amount: 0.1 });

  return (
    <>
      {/* Invisible sentinel in standard flow to trigger reveal animations when reached */}
      <div ref={sentinelRef} className="w-full h-px pointer-events-none bg-transparent" />
      <footer
        className="w-full bg-black text-white px-6 md:px-12 lg:px-20 pt-14 pb-12 sticky bottom-0 z-0"
      >
      <div className="w-full flex flex-col">

        {/* Top row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-0">

          {/* ── Left CTA ── */}
          <div className="flex flex-col items-start max-w-lg">

            {/* "Contact" label */}
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease, delay: 0.05 }}
              style={{ fontFamily: FONT, fontSize: "14px", fontWeight: 500, color: "rgba(255,255,255,0.5)", letterSpacing: "0.02em", marginBottom: "24px", display: "block" }}
            >
              Contact
            </motion.span>

            {/* Heading — line by line reveal */}
            <h2 style={{ marginBottom: "40px", letterSpacing: "-0.02em", overflow: "hidden" }}>
              {HEADING_LINES.map((line, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease, delay: 0.1 + i * 0.08 }}
                  style={{
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
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease, delay: 0.38 }}
              style={{
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
                transition: { duration: 0.2 },
              }}
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
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, ease, delay: 0.15 + i * 0.06 }}
                >
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
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, ease, delay: 0.2 + i * 0.06 }}
                >
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
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, ease, delay: 0.5 }}
          style={{
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
    </>
  );
}
