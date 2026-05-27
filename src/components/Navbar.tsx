"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const isFirstMount = useRef(true);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // ── Scroll-direction hide/show ──────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      if (currentY < 60) {
        setVisible(true);
      } else if (delta > 6) {
        setVisible(false);
        setIsOpen(false);
      } else if (delta < -6) {
        setVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Scroll behaviour & anchor handling ─────────────────────────────
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "auto";
    document.documentElement.classList.remove("scroll-smooth");

    if (isFirstMount.current) {
      isFirstMount.current = false;
      window.scrollTo(0, 0);
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
    } else {
      if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        const element = document.getElementById(targetId);
        if (element) element.scrollIntoView({ behavior: "auto" });
      } else {
        window.scrollTo(0, 0);
      }
    }

    let timer: NodeJS.Timeout;

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;
      const isHash =
        href.startsWith("#") ||
        (pathname === "/" && href.startsWith("/#"));
      if (isHash) {
        clearTimeout(timer);
        document.documentElement.style.scrollBehavior = "smooth";
        document.documentElement.classList.add("scroll-smooth");
        timer = setTimeout(() => {
          document.documentElement.style.scrollBehavior = "auto";
          document.documentElement.classList.remove("scroll-smooth");
        }, 1200);
      }
    };

    document.addEventListener("click", handleAnchorClick, { passive: true });
    return () => {
      document.removeEventListener("click", handleAnchorClick);
      clearTimeout(timer);
    };
  }, [pathname]);

  const navLinks = [
    { name: "About",      href: isHome ? "#about"      : "/#about" },
    { name: "Works",      href: isHome ? "#works"      : "/#works" },
    { name: "Experience", href: isHome ? "#experience" : "/#experience" },
    { name: "Contact",    href: isHome ? "#connect"    : "/#connect" },
  ];

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : "-100%" }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-0 z-50 w-full"
    >
      <div className="w-full h-16 flex items-center justify-between relative" style={{ paddingLeft: "80px", paddingRight: "80px" }}>

        {/* Logo — left */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center hover:opacity-70 transition-opacity duration-200 min-w-0"
          style={{
            fontFamily: 'Manrope, "Manrope Placeholder", sans-serif',
            fontSize: '18px',
            fontWeight: 500,
            lineHeight: '25.2px',
            color: 'rgb(0, 0, 0)',
          }}
        >
          <span className="shrink-0">by Ujjaval</span>
        </Link>

        {/* Desktop Nav — absolutely centered */}
        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
              style={{
                fontFamily: 'Manrope, "Manrope Placeholder", sans-serif',
                fontSize: '18px',
                fontWeight: 500,
                lineHeight: '25.2px',
                color: 'rgb(0, 0, 0)',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                textAlign: 'left',
                verticalAlign: 'baseline',
              }}
              className="relative px-4 py-2 rounded-lg"
            >
              {/* Hover pill background */}
              <AnimatePresence>
                {hoveredLink === link.name && (
                  <motion.span
                    layoutId="nav-hover-pill"
                    className="absolute inset-0 rounded-lg bg-dark/[0.06]"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  />
                )}
              </AnimatePresence>

              {/* Link text with subtle lift */}
              <motion.span
                className="relative z-10"
                animate={{
                  y: hoveredLink === link.name ? -1 : 0,
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {link.name}
              </motion.span>
            </Link>
          ))}
        </nav>

        {/* Right spacer (keeps logo truly left-aligned) */}
        <div className="hidden lg:block w-[110px]" />

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center shrink-0">
          <button
            onClick={toggleMenu}
            className="p-1.5 text-dark hover:bg-dark/5 rounded-lg transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="absolute top-full left-0 w-full lg:hidden bg-white/95 backdrop-blur-md py-4 px-4 flex flex-col space-y-1 shadow-lg border-b border-warm-border/40"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.2, ease: "easeOut" }}
              >
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  style={{
                    fontFamily: 'Manrope, "Manrope Placeholder", sans-serif',
                    fontSize: '18px',
                    fontWeight: 500,
                    lineHeight: '25.2px',
                    color: 'rgb(0, 0, 0)',
                  }}
                  className="block py-2.5 px-2 rounded-lg hover:bg-dark/5 transition-colors duration-150 border-b border-warm-border/20 last:border-b-0"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
