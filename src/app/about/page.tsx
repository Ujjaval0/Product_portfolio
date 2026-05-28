"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { portfolio } from "@/data/portfolio";

export default function AboutPage() {
  return (
    <article className="min-h-screen pt-32 pb-20 max-w-2xl mx-auto">

      <div className="flex flex-col gap-8">
        {/* Profile Image (First on mobile page) */}
        <ScrollReveal className="w-full flex justify-center">
          <div className="relative w-full max-w-[240px] aspect-[3/4] rounded-3xl overflow-hidden shadow-lg border border-warm-border bg-white">
            <img 
              src="/images/profile.png" 
              alt={portfolio.name} 
              className="object-cover w-full h-full filter saturate-[95%] contrast-[101%]"
            />
          </div>
        </ScrollReveal>

        {/* Identity Details */}
        <ScrollReveal className="w-full flex flex-col items-start text-left">
          <h1
            className="font-sans text-[22px] sm:text-2xl font-extrabold text-dark tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-manrope), Manrope, "Manrope Placeholder", sans-serif' }}
          >
            Hello, I&apos;m Ujjaval.
          </h1>
          <p className="font-sans text-[20px] font-normal leading-[30px] text-[#2A2A3C]/85 mb-6">
            A self-taught fresher who got genuinely obsessed with AI and decided to build a career around it.
          </p>
          
          <div className="space-y-6 font-normal text-dark/85 text-[16px] leading-[26px]">
            <ScrollReveal variant="focus-fade">
              <p>
                Every day there's a new model, a new benchmark. I don't just want to use it : I want to know why it was built and whether it was even worth building.
              </p>
            </ScrollReveal>
            <ScrollReveal variant="focus-fade">
              <p>
                That curiosity led me to Soul AI, where I spent months evaluating GPT-4, Claude, and Gemini outputs sharpening how I think about product quality, user expectations, and what "good" actually looks like.
              </p>
            </ScrollReveal>
            <ScrollReveal variant="focus-fade">
              <p>
                I understand how systems work, the architectures, and what happens when product decisions disconnect from technical reality. 
              </p>
            </ScrollReveal>
            <ScrollReveal variant="focus-fade">
              <p>
                No MBA. No shortcuts. Just genuine interest, real work, and a clear direction.<br/>
                <strong className="mt-2 block">Based in India. Building toward PM.</strong>
              </p>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </div>
    </article>
  );
}
