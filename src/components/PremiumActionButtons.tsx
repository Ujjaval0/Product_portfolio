"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, ExternalLink } from "lucide-react";

interface Links {
  prd?: string;
  live?: string;
  github?: string;
  note?: string;
}

interface PremiumActionButtonsProps {
  links: Links;
}

// ── Custom GitHub SVG Icon ──────────────────────────────────────────
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    stroke="currentColor"
    strokeWidth="2.2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function PremiumActionButtons({ links }: PremiumActionButtonsProps) {
  // If there are no links, render nothing
  if (!links || (!links.prd && !links.live && !links.github && !links.note)) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center gap-x-10 gap-y-4 mb-12">
      {/* 1. VIEW LIVE PRD (Accent Blue Link with Permanent Blue Underline) */}
      {links.prd && (
        <motion.a
          href={links.prd}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center gap-2 py-1 text-[16px] font-semibold tracking-tight text-[#648DE5] hover:text-[#4F78CD] transition-colors duration-300 cursor-pointer group"
          whileHover="hover"
          whileTap="tap"
        >
          <span className="relative">
            View Live PRD
            {/* Permanent Soft Underline that highlights on Hover */}
            <motion.span
              className="absolute bottom-[-2px] left-0 w-full h-[1.5px] bg-[#648DE5]/40 origin-left"
              variants={{
                hover: { backgroundColor: "rgba(100, 141, 229, 1)", height: "2px" }
              }}
              transition={{ duration: 0.2 }}
            />
          </span>
          
          {/* Sliding diagonal arrow container */}
          <div className="relative w-4 h-4 overflow-hidden shrink-0 text-[#648DE5] group-hover:text-[#4F78CD] transition-colors duration-300">
            <motion.span
              className="absolute inset-0 flex items-center justify-center"
              variants={{
                initial: { x: 0, y: 0 },
                hover: { x: 16, y: -16 }
              }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
            >
              <ArrowUpRight className="h-4 w-4 stroke-[2.2]" />
            </motion.span>
            <motion.span
              className="absolute inset-0 flex items-center justify-center"
              variants={{
                initial: { x: -16, y: 16 },
                hover: { x: 0, y: 0 }
              }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
            >
              <ArrowUpRight className="h-4 w-4 stroke-[2.2]" />
            </motion.span>
          </div>
        </motion.a>
      )}

      {/* 2. LAUNCH LIVE APP (Accent Blue Link with Permanent Blue Underline) */}
      {links.live && (
        <motion.a
          href={links.live}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center gap-2 py-1 text-[16px] font-semibold tracking-tight text-[#648DE5] hover:text-[#4F78CD] transition-colors duration-300 cursor-pointer group"
          whileHover="hover"
          whileTap="tap"
        >
          <span className="relative">
            Launch Live App
            {/* Permanent Soft Underline that highlights on Hover */}
            <motion.span
              className="absolute bottom-[-2px] left-0 w-full h-[1.5px] bg-[#648DE5]/40 origin-left"
              variants={{
                hover: { backgroundColor: "rgba(100, 141, 229, 1)", height: "2px" }
              }}
              transition={{ duration: 0.2 }}
            />
          </span>

          {/* Sliding diagonal external link container */}
          <div className="relative w-4 h-4 overflow-hidden shrink-0 text-[#648DE5] group-hover:text-[#4F78CD] transition-colors duration-300">
            <motion.span
              className="absolute inset-0 flex items-center justify-center"
              variants={{
                initial: { x: 0, y: 0 },
                hover: { x: 16, y: -16 }
              }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
            >
              <ExternalLink className="h-4 w-4 stroke-[2.2]" />
            </motion.span>
            <motion.span
              className="absolute inset-0 flex items-center justify-center"
              variants={{
                initial: { x: -16, y: 16 },
                hover: { x: 0, y: 0 }
              }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
            >
              <ExternalLink className="h-4 w-4 stroke-[2.2]" />
            </motion.span>
          </div>
        </motion.a>
      )}

      {/* 3. METHODOLOGY DOCUMENT (Accent Blue Link with Permanent Blue Underline) */}
      {links.note && (
        <motion.a
          href={links.note}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center gap-2 py-1 text-[16px] font-semibold tracking-tight text-[#648DE5] hover:text-[#4F78CD] transition-colors duration-300 cursor-pointer group"
          whileHover="hover"
          whileTap="tap"
        >
          <span className="relative">
            View Methodology Doc
            {/* Permanent Soft Underline that highlights on Hover */}
            <motion.span
              className="absolute bottom-[-2px] left-0 w-full h-[1.5px] bg-[#648DE5]/40 origin-left"
              variants={{
                hover: { backgroundColor: "rgba(100, 141, 229, 1)", height: "2px" }
              }}
              transition={{ duration: 0.2 }}
            />
          </span>

          {/* Sliding diagonal arrow container */}
          <div className="relative w-4 h-4 overflow-hidden shrink-0 text-[#648DE5] group-hover:text-[#4F78CD] transition-colors duration-300">
            <motion.span
              className="absolute inset-0 flex items-center justify-center"
              variants={{
                initial: { x: 0, y: 0 },
                hover: { x: 16, y: -16 }
              }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
            >
              <ArrowUpRight className="h-4 w-4 stroke-[2.2]" />
            </motion.span>
            <motion.span
              className="absolute inset-0 flex items-center justify-center"
              variants={{
                initial: { x: -16, y: 16 },
                hover: { x: 0, y: 0 }
              }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
            >
              <ArrowUpRight className="h-4 w-4 stroke-[2.2]" />
            </motion.span>
          </div>
        </motion.a>
      )}

      {/* 4. GITHUB REPOSITORY (Dark Link with Permanent Underline) */}
      {links.github && (
        <motion.a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center gap-2 py-1 text-[16px] font-semibold tracking-tight text-[#18181B] hover:text-black transition-colors duration-300 cursor-pointer group"
          whileHover="hover"
          whileTap="tap"
        >
          <GithubIcon className="h-4 w-4 shrink-0 text-[#565E6D] group-hover:text-black transition-colors duration-300" />
          <span className="relative">
            GitHub Repository
            {/* Permanent Soft Underline that highlights on Hover */}
            <motion.span
              className="absolute bottom-[-2px] left-0 w-full h-[1.5px] bg-[#18181B]/30 origin-left"
              variants={{
                hover: { backgroundColor: "rgba(0, 0, 0, 1)", height: "2px" }
              }}
              transition={{ duration: 0.2 }}
            />
          </span>
          
          {/* Sliding diagonal external link container */}
          <div className="relative w-4 h-4 overflow-hidden shrink-0 text-[#565E6D] group-hover:text-black transition-colors duration-300">
            <motion.span
              className="absolute inset-0 flex items-center justify-center"
              variants={{
                initial: { x: 0, y: 0 },
                hover: { x: 16, y: -16 }
              }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
            >
              <ExternalLink className="h-4 w-4 stroke-[2.2]" />
            </motion.span>
            <motion.span
              className="absolute inset-0 flex items-center justify-center"
              variants={{
                initial: { x: -16, y: 16 },
                hover: { x: 0, y: 0 }
              }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
            >
              <ExternalLink className="h-4 w-4 stroke-[2.2]" />
            </motion.span>
          </div>
        </motion.a>
      )}
    </div>
  );
}
