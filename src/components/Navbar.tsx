"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { portfolio } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-warm-border/60 bg-warm-bg/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-3 md:px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
          <span className="font-display italic text-dark text-[17px] mr-1.5">by</span>
          <span className="font-sans font-bold tracking-tight text-dark text-[17px] mr-1.5">Ujjaval Bhardwaj</span>
        </Link>
        <nav className="flex items-center space-x-4 sm:space-x-6 md:space-x-7 text-[14.5px] font-medium text-dark/95">
          <Link 
            href="/" 
            className="hover:text-accent transition-custom"
          >
            Home
          </Link>
          <Link 
            href={isHome ? "#works" : "/#works"} 
            className="hover:text-accent transition-custom"
          >
            Works
          </Link>
          <Link 
            href={isHome ? "#approach" : "/#approach"} 
            className="hover:text-accent transition-custom"
          >
            Approach
          </Link>
          <Link 
            href={isHome ? "#tools" : "/#tools"} 
            className="hover:text-accent transition-custom"
          >
            Tools
          </Link>

          <Link 
            href={isHome ? "#connect" : "/#connect"} 
            className="inline-flex items-center justify-center bg-[#1F242E] text-white hover:bg-black px-4.5 py-2 rounded-full transition-custom font-bold text-[13px]"
          >
            Connect
          </Link>
        </nav>
      </div>
    </header>
  );
}
