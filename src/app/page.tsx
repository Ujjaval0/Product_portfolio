"use client";

import Link from "next/link";
import { useState } from "react";
import { portfolio } from "@/data/portfolio";
import { ArrowRight, FileText, Mail, ArrowUpRight, ChevronDown, ChevronUp, MessageSquare, Phone } from "lucide-react";

export default function Home() {
  // FAQs State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      question: "When does working together make sense?",
      answer: "When you need a product builder who doesn't just write slide decks. I am most useful when you need someone to dig into SQL schemas, draft detailed feature specifications (PRDs), run model evaluations for AI features, and coordinate closely with developers to ship functional MVPs."
    },
    {
      question: "How do you leverage your technical background?",
      answer: "My Computer Applications (BCA) background allows me to read code, write SQL queries, and understand database architecture. I speak the same language as engineers, helping me identify technical constraints early, write clear edge-case specs, and gain developer trust immediately."
    },
    {
      question: "What is your experience with LLMs and AI evaluations?",
      answer: "I worked as an AI evaluator at Soul AI, where I analyzed model outputs for safety, accuracy, and alignment. I treat LLMs as a product interface: designing evaluation rubrics, testing prompt boundary safety (red-teaming), and building feedback loops to systematically improve model performance."
    },
    {
      question: "How do you price your services or plug into teams?",
      answer: "I am actively seeking full-time early-career PM roles, associate PM positions, or internships. I am also open to short-term contract assignments to help you spec an MVP, clean your datasets, or audit your AI outputs."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-20 md:pt-12 md:pb-24 px-3 md:px-4 border-b border-warm-border/60 bg-transparent">
        <div className="relative mx-auto max-w-6xl pt-0">
          {/* Badge */}
          <div className="inline-block px-4 py-1.5 bg-[#E8F0FE] border border-[#D2E3FC] text-dark font-sans font-bold text-lg md:text-xl rounded-md mb-8">
            Make Decisions Confidently.
          </div>
          
          {/* Giant Title with typography-split styling matching Screenshot 1 and exact CSS properties */}
          <h1 className="font-sans text-4xl sm:text-7xl md:text-[110px] font-bold text-dark tracking-[-1px] leading-[1.1] md:leading-[121px] mb-12">
            <span className="font-display italic font-normal">I shape</span> complex systems <span className="font-display italic font-normal">into</span> tools <span className="font-display italic font-normal">people actually use.</span>
          </h1>
          
          {/* Actions Row */}
          <div className="pt-6 border-t border-warm-border/30">
            <div className="flex items-center gap-3">
              <Link 
                href="#connect" 
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-accent text-white font-semibold hover:bg-accent-hover transition-custom shadow-xs text-base"
              >
                Ways to Connect
              </Link>
              <Link 
                href="#works" 
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-transparent border border-dark text-dark font-bold hover:bg-dark/5 transition-custom text-base"
              >
                Go on..
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Profile & Identity Section */}
      <section className="relative overflow-hidden py-20 px-3 md:px-4 border-b border-warm-border/60 bg-transparent">
        <div className="relative mx-auto max-w-6xl grid md:grid-cols-12 gap-12 items-center">
          {/* Left Column: Identity details */}
          <div className="md:col-span-7 flex flex-col items-start text-left">
            <h2 className="font-sans text-xl sm:text-2xl font-extrabold text-dark tracking-tight mb-3">
              Hello 👋 I’m Ujjaval,
            </h2>
            <p className="font-sans text-[24px] font-normal leading-[34.08px] text-[#2A2A3C]/85 mb-6 text-left">
              an engineer-minded product builder with an eye for design, systems, and the little details.
            </p>
            
            <div className="space-y-6 font-normal">
              <p>
                <strong className="font-bold text-dark font-sans">Builder:</strong> I design specs, query schemas, and help build functional React/Vercel MVPs to validate assumptions early (leveraging my BCA technical foundation).
              </p>
              <p>
                <strong className="font-bold text-dark font-sans">Bridge:</strong> I sit between founders, engineers, data pipelines, and user research so everyone works from the same picture.
              </p>
              <p>
                <strong className="font-bold text-dark font-sans">Craft:</strong> I care about the database tables under the hood and the visual clarity on the surface so people trust and use what we ship.
              </p>
            </div>
          </div>

          {/* Right Column: Profile Image styled matching Screenshot 2 */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative max-w-[320px] w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-warm-border bg-white">
              <img 
                src="/images/profile.png" 
                alt={portfolio.name} 
                className="object-cover w-full h-full filter saturate-[95%] contrast-[101%]"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Selected Works Section */}
      <section id="works" className="py-20 md:py-28 px-3 md:px-4 bg-transparent border-b border-warm-border/50">
        <div className="mx-auto max-w-6xl">
          <div className="border-b border-warm-border/60 pb-6 mb-12">
            <span className="font-display italic font-medium text-accent text-[24px] leading-[28.8px] tracking-[-0.48px] block mb-2">Selected Works</span>
            <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-dark tracking-tight mt-2">
              What this looks like in practice.
            </h2>
            <p className="max-w-xl mt-2 font-normal">
              Curated product artifacts showing how I analyze markets, scope requirements, and test AI.
            </p>
          </div>

          <div className="grid gap-4">
            {portfolio.caseStudies.map((project, idx) => {
              const covers = [
                "from-blue-100 via-accent/20 to-blue-50",
                "from-emerald-100 via-teal-100 to-emerald-50",
                "from-purple-100 via-violet-100 to-purple-50",
              ];
              const coverGrad = covers[idx % covers.length];

              return (
                <div
                  key={idx}
                  className="group flex flex-col sm:flex-row rounded-2xl border border-warm-border bg-white hover:border-accent/40 shadow-[0_2px_8px_rgba(26,26,26,0.02)] hover:shadow-[0_8px_24px_rgba(26,26,26,0.06)] transition-custom overflow-hidden"
                >
                  {/* ── Left: Cover ── */}
                  <div className={`sm:w-44 md:w-56 shrink-0 bg-gradient-to-br ${coverGrad} flex items-center justify-center min-h-[110px] sm:min-h-0`}>
                    <div className="flex flex-col items-center gap-2 opacity-35">
                      <div className="w-9 h-9 rounded-full bg-white/70 flex items-center justify-center">
                        <ArrowUpRight className="h-4 w-4 text-dark" />
                      </div>
                      <span className="text-[8px] font-bold uppercase tracking-widest text-dark/60">
                        {project.slug === "data-editorial-prd" ? "PRD · MVP" : project.slug === "ai-economy-dashboard" ? "Dashboard · Data" : "AI · Evaluation"}
                      </span>
                    </div>
                  </div>

                  {/* ── Right: Content ── */}
                  <div className="flex-1 flex flex-col justify-between p-4 md:p-5 border-l border-warm-border/40">

                    {/* Tags — flat spaced uppercase row */}
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-1 mb-2">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-bold tracking-widest text-muted uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="font-sans text-base md:text-lg font-bold text-accent group-hover:text-accent-hover transition-custom leading-snug mb-0.5">
                      {project.title}
                    </h3>

                    {/* One-liner */}
                    <p className="font-display italic text-dark/70 text-sm mb-3">
                      — {project.oneLiner}
                    </p>

                    {/* CTA */}
                    <div>
                      <Link
                        href={`/work/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-accent hover:text-accent-hover transition-custom group/cta"
                      >
                        Read Case Study
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-1" />
                      </Link>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>



      {/* Approach Section */}
      <section id="approach" className="py-20 md:py-28 px-3 md:px-4 bg-transparent border-b border-warm-border/50">
        <div className="mx-auto max-w-6xl">
          <div className="border-b border-warm-border/60 pb-6 mb-12">
            <span className="font-display italic font-medium text-accent text-[24px] leading-[28.8px] tracking-[-0.48px] block mb-2">Approach</span>
            <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-dark tracking-tight mt-2">
              How I usually plug in.
            </h2>
            <p className="mt-2 font-normal">A simple, linear framework for solving unstructured product problems.</p>
          </div>

          <div className="relative border-l border-warm-border/60 pl-8 ml-4 space-y-12">
            <div className="relative">
              <span className="absolute -left-[41px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-warm-bg border-2 border-accent text-accent">
                <span className="h-2 w-2 rounded-full bg-accent" />
              </span>
              <h3 className="font-sans text-xl font-bold text-dark mb-2">1. Start where it hurts</h3>
              <p className="max-w-2xl font-normal">
                You walk me through the bottleneck: the friction point, raw metrics, or speculative features. I talk with support, dig into SQL tables, or query LLM response sheets to identify the root cause of the friction.
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-[41px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-warm-bg border-2 border-accent text-accent">
                <span className="h-2 w-2 rounded-full bg-accent" />
              </span>
              <h3 className="font-sans text-xl font-bold text-dark mb-2">2. Structure & Direction</h3>
              <p className="max-w-2xl font-normal">
                I map the findings into tangible specifications. This includes drawing system schemas, sketching user journeys, writing requirements (PRDs), and wireframing wire models, so we have a concrete structure to align on.
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-[41px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-warm-bg border-2 border-accent text-accent">
                <span className="h-2 w-2 rounded-full bg-accent" />
              </span>
              <h3 className="font-sans text-xl font-bold text-dark mb-2">3. Build, instrument, refine</h3>
              <p className="max-w-2xl font-normal">
                I support engineering through delivery. I help test the MVP, set up tracking metrics to monitor usage, collect feedback loops, and structure iterations based on telemetry data rather than guesswork.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-20 md:py-28 px-3 md:px-4 bg-transparent border-b border-warm-border/50">
        <div className="mx-auto max-w-6xl">
          <div className="border-b border-warm-border/60 pb-6 mb-12">
            <span className="font-display italic font-medium text-accent text-[24px] leading-[28.8px] tracking-[-0.48px] block mb-2">Tools & Stack</span>
            <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-dark tracking-tight mt-2">
              My PM toolkit.
            </h2>
            <p className="mt-2 font-normal">The applications, languages, and frameworks I use to structure requirements and analyze product data.</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Analytics & Data Card */}
            <div className="p-6 rounded-2xl border border-warm-border bg-white shadow-[0_2px_8px_rgba(26,26,26,0.02)]">
              <span className="text-xs font-bold uppercase tracking-wider text-accent mb-3 block">Analytics & Data</span>
              <h3 className="font-sans font-bold text-dark text-lg mb-4">SQL, Power BI, Python, Excel</h3>
              <p className="font-normal text-sm text-muted">
                Writing database queries, building operations dashboards, cleaning raw telemetry logs, and tracking cohort behavior patterns.
              </p>
            </div>

            {/* Product & Design Card */}
            <div className="p-6 rounded-2xl border border-warm-border bg-white shadow-[0_2px_8px_rgba(26,26,26,0.02)]">
              <span className="text-xs font-bold uppercase tracking-wider text-accent mb-3 block">Product & Design</span>
              <h3 className="font-sans font-bold text-dark text-lg mb-4">Figma, Notion, Vercel</h3>
              <p className="font-normal text-sm text-muted">
                Mapping high-fidelity user journeys, drafting comprehensive specifications (PRDs), and launching React-based web MVPs to gather direct customer feedback.
              </p>
            </div>

            {/* AI & Model Alignment Card */}
            <div className="p-6 rounded-2xl border border-warm-border bg-white shadow-[0_2px_8px_rgba(26,26,26,0.02)]">
              <span className="text-xs font-bold uppercase tracking-wider text-accent mb-3 block">AI & Model Alignment</span>
              <h3 className="font-sans font-bold text-dark text-lg mb-4">LLM Eval, Red-Teaming</h3>
              <p className="font-normal text-sm text-muted">
                Stress-testing prompt boundaries, structuring safety and quality guidelines, and building taxonomy systems to prioritize training set corrections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-20 md:py-28 px-3 md:px-4 bg-transparent border-b border-warm-border/50">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="font-display italic font-medium text-accent text-[24px] leading-[28.8px] tracking-[-0.48px] block mb-2">FAQs</span>
            <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-dark tracking-tight mt-2">
              A few questions people usually ask.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="rounded-xl border border-warm-border bg-white overflow-hidden shadow-2xs transition-custom"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-sans font-bold text-dark hover:text-accent transition-custom focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp className="h-4 w-4 text-muted" /> : <ChevronDown className="h-4 w-4 text-muted" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 border-t border-warm-border/30">
                      <p className="font-normal">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-24 px-3 md:px-4 bg-transparent">
        <div className="mx-auto max-w-6xl text-center">
          <div className="relative p-8 md:p-12 rounded-3xl border border-warm-border bg-white shadow-[0_4px_16px_rgba(26,26,26,0.02)] overflow-hidden">
            {/* Background Grid Pattern inside card */}
            <div className="absolute inset-0 bg-[radial-gradient(#D3D9E5_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />

            <div className="relative max-w-xl mx-auto flex flex-col items-center">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-wider mb-4 shadow-3xs">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" /> Let's Connect
              </div>
              
              <h2 className="font-sans text-3xl md:text-4xl font-bold text-dark tracking-tight mb-4">
                You’re right... we should connect!
              </h2>
              
              <p className="mb-8 max-w-md font-normal">
                A short conversation is usually enough to see if there’s a fit. Let me know how you prefer to talk.
              </p>

              {/* Grid of CTAs */}
              <div className="grid sm:grid-cols-2 gap-3 w-full max-w-md">
                <a 
                  href={`mailto:${portfolio.email}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-accent text-white font-semibold hover:bg-accent-hover transition-custom shadow-xs text-sm"
                >
                  <Mail className="h-4 w-4" /> Email Me
                </a>
                
                <a 
                  href={portfolio.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white border border-warm-border text-dark font-semibold hover:bg-warm-surface transition-custom text-sm shadow-2xs"
                >
                  <svg className="h-4 w-4 text-sky-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg> LinkedIn
                </a>

                <a 
                  href={portfolio.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white border border-warm-border text-dark font-semibold hover:bg-warm-surface transition-custom text-sm shadow-2xs"
                >
                  <svg className="h-4 w-4 text-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg> GitHub
                </a>

                <a 
                  href={portfolio.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white border border-warm-border text-dark font-semibold hover:bg-warm-surface transition-custom text-sm shadow-2xs"
                >
                  <FileText className="h-4 w-4 text-muted" /> Resume PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
