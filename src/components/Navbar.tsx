"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    // Force instant scroll behavior by default on page load / path change
    document.documentElement.style.scrollBehavior = "auto";
    document.documentElement.classList.remove("scroll-smooth");
    window.scrollTo(0, 0);

    let timer: NodeJS.Timeout;

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (!anchor) return;
      
      const href = anchor.getAttribute("href");
      if (!href) return;
      
      // Check if it is a same-page anchor link
      const isHash = href.startsWith("#") || (pathname === "/" && href.startsWith("/#"));
      
      if (isHash) {
        clearTimeout(timer);
        // Temporarily enable smooth scroll for this user action
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
    { name: "About", href: isHome ? "#about" : "/#about" },
    { name: "Works", href: isHome ? "#works" : "/#works" },
    { name: "Approach", href: isHome ? "#approach" : "/#approach" },
    { name: "Tools", href: isHome ? "#tools" : "/#tools" },
    { name: "Experience", href: isHome ? "#experience" : "/#experience" },
    { name: "Education", href: isHome ? "#education" : "/#education" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-warm-border/60 bg-warm-bg/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-3 md:px-4 h-16 flex items-center justify-between">
        <Link href="/" onClick={closeMenu} className="flex items-center hover:opacity-90 transition-opacity min-w-0 mr-2">
          <span className="font-display italic text-dark text-[17px] mr-1.5 shrink-0">by</span>
          <span className="font-sans font-bold tracking-tight text-dark text-[17px] mr-1.5 truncate">Ujjaval Bhardwaj</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 md:space-x-7 text-[14.5px] font-medium text-dark/95">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="hover:text-accent transition-custom"
            >
              {link.name}
            </Link>
          ))}

          <Link 
            href={isHome ? "#connect" : "/#connect"} 
            className="inline-flex items-center justify-center bg-[#1F242E] text-white hover:bg-black px-4.5 py-2 rounded-full transition-custom font-bold text-[13px]"
          >
            Connect
          </Link>
        </nav>

        {/* Mobile Navigation Controls */}
        <div className="flex lg:hidden items-center space-x-2.5 shrink-0">
          <Link 
            href={isHome ? "#connect" : "/#connect"} 
            onClick={closeMenu}
            className="hidden md:inline-flex shrink-0 items-center justify-center bg-[#1F242E] text-white hover:bg-black px-3 py-1.5 rounded-full transition-custom font-bold text-[12px]"
          >
            Connect
          </Link>
          <button
            onClick={toggleMenu}
            className="p-1.5 text-dark hover:bg-dark/5 rounded-lg transition-custom shrink-0"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full lg:hidden border-b border-warm-border/60 bg-warm-bg/95 backdrop-blur-md py-4 px-4 flex flex-col space-y-4 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="text-[15px] font-semibold text-dark/90 hover:text-accent py-1 transition-custom border-b border-warm-border/30 last:border-b-0"
            >
              {link.name}
            </Link>
          ))}
          {/* Connect link shown inside hamburger menu ONLY on mobile (under 768px) */}
          <Link
            href={isHome ? "#connect" : "/#connect"}
            onClick={closeMenu}
            className="md:hidden text-[15px] font-semibold text-accent hover:text-accent-hover py-1 transition-custom border-t border-warm-border/30 pt-3"
          >
            Connect
          </Link>
        </div>
      )}
    </header>
  );
}
