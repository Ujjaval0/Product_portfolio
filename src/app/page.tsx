"use client";

import Link from "next/link";
import { portfolio } from "@/data/portfolio";
import { ArrowRight, FileText, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden pt-6 pb-12 md:pt-10 md:pb-16 px-3 md:px-4 border-b border-warm-border/60 bg-transparent">
        <div className="relative mx-auto max-w-6xl pt-0">
          {/* Badge with focus/crop corner accents */}
          <div className="relative inline-block w-fit max-w-max px-5 py-1.5 bg-[#dce3f5]/20 mb-6 select-none">
            {/* Corner brackets */}
            <span className="absolute left-0 top-0 w-2 h-2 border-t-2 border-l-2 border-accent/60" />
            <span className="absolute right-0 top-0 w-2 h-2 border-t-2 border-r-2 border-accent/60" />
            <span className="absolute left-0 bottom-0 w-2 h-2 border-b-2 border-l-2 border-accent/60" />
            <span className="absolute right-0 bottom-0 w-2 h-2 border-b-2 border-r-2 border-accent/60" />
            
            <span className="relative font-sans font-bold text-[14px] md:text-[16px] text-dark tracking-wider uppercase">
              Product · Data · AI
            </span>
          </div>
          
          {/* Giant Title with typography-split styling matching Screenshot 1 and exact CSS properties */}
          <h1 className="font-sans text-[2.8rem] md:text-[95px] lg:text-[105px] font-bold font-[700] text-[#1a1a2e] tracking-[-2px] md:tracking-[-4px] leading-[1.05] md:leading-[1.05] mb-6 md:mb-8">
            <span className="font-display italic font-[400]">Most people see</span> <span className="opacity-[0.92]">features.</span> <span className="font-display italic font-[400]">I see the friction behind them - and build to</span> <span className="opacity-[0.92]">remove it.</span>
          </h1>
          
          {/* Actions Row */}
          <div className="pt-5 border-t border-warm-border/30">
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
      <section id="about" className="relative overflow-hidden py-12 md:py-16 px-3 md:px-4 border-b border-warm-border/60 bg-transparent">
        <div className="relative mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-8 md:gap-10">
          {/* Left Column: Identity details (65%) */}
          <div className="w-full md:w-[65%] flex flex-col items-start text-left">
            <h2 className="font-sans text-xl sm:text-2xl font-extrabold text-dark tracking-tight mb-3">
              Hello, I'm Ujjaval.
            </h2>
            <p className="font-sans text-[22px] font-normal leading-[32px] text-[#2A2A3C]/85 mb-6 text-left">
              A self-taught fresher who got genuinely obsessed with AI and decided to build a career around it.
            </p>
            
            <div className="space-y-6 font-normal text-dark/85">
              <p>
                Every day there's a new model, a new benchmark. Most people see the headline. I want to understand what problem it's actually solving and whether that problem is even real.
              </p>
              <p>
                That curiosity led me to Soul AI, where I spent months at evaluating GPT-4, Claude, and Gemini outputs sharpening how I think about product quality, user expectations, and what "good" actually looks like.
              </p>
              <p>
                I understand how systems work, the architectures, and what happens when product decisions disconnect from technical reality. 
              </p>
              <p>
                No MBA. No shortcuts. Just genuine interest, real work, and a clear direction.<br/>
                <strong>Based in India. Building toward PM.</strong>
              </p>
            </div>
          </div>

          {/* Right Column: Profile Image (35%) */}
          <div className="w-full md:w-[35%] flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="relative w-full max-w-[290px] aspect-[3/4] rounded-3xl overflow-hidden shadow-lg border border-warm-border bg-white">
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
      <section id="works" className="py-12 md:py-16 px-3 md:px-4 bg-transparent border-b border-warm-border/50">
        <div className="mx-auto max-w-6xl">
          <div className="border-b border-warm-border/60 pb-6 mb-6">
            <span className="font-display italic font-medium text-accent text-[22px] leading-[26px] tracking-[-0.48px] block mb-2">Selected Works</span>
            <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-dark tracking-tight mt-2">
              Things I actually built.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.caseStudies.map((project, idx) => {
              const prdLink = project.links.prd || project.links.note;
              const liveLink = project.links.live || project.links.github;

              return (
                <div
                  key={idx}
                  className="group flex flex-col rounded-2xl border border-warm-border bg-white hover:border-accent/40 shadow-[0_2px_8px_rgba(26,26,26,0.02)] hover:shadow-[0_8px_24px_rgba(26,26,26,0.06)] hover:-translate-y-1.5 transition-custom overflow-hidden"
                >
                  {/* ── Top: Project Image / Screenshot ── */}
                  <Link href={`/work/${project.slug}`} className="relative aspect-[16/10] overflow-hidden bg-warm-bg border-b border-warm-border/50 block">
                    <img 
                      src={`/images/${project.slug}.png`}
                      alt={project.title}
                      className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </Link>

                  {/* ── Middle: Content ── */}
                  <div className="flex-1 flex flex-col justify-between p-5">
                    <div>
                      {/* Tags — small spaced uppercase row */}
                      <div className="flex flex-wrap gap-x-2 gap-y-1 mb-2">
                        {project.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[9px] font-bold tracking-wider text-muted uppercase bg-warm-bg px-2 py-0.5 rounded border border-warm-border/40"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Project Title */}
                      <Link href={`/work/${project.slug}`} className="block group/title mt-1">
                        <h3 className="font-sans text-[17px] md:text-lg font-bold text-dark group-hover/title:text-accent transition-custom leading-snug mb-2">
                          {project.title}
                        </h3>
                      </Link>
                    </div>

                    {/* ── Bottom: Action ── */}
                    <div className="pt-4 border-t border-warm-border/40 mt-auto">
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
      <section id="approach" className="py-12 md:py-16 px-3 md:px-4 bg-transparent border-b border-warm-border/50">
        <div className="mx-auto max-w-6xl">
          <div className="border-b border-warm-border/60 pb-6 mb-6">
            <span className="font-display italic font-medium text-accent text-[22px] leading-[26px] tracking-[-0.48px] block mb-2">Approach</span>
            <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-dark tracking-tight mt-2">
              How I think through a problem.
            </h2>
            <p className="mt-2 font-normal font-display italic">Find it. Spec it. Ship it.</p>
          </div>

          <div className="relative border-l border-warm-border/60 pl-8 ml-4 space-y-12">
            <div className="relative">
              <span className="absolute -left-[41px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-warm-bg border-2 border-accent text-accent">
                <span className="h-2 w-2 rounded-full bg-accent" />
              </span>
              <h3 className="font-sans text-xl font-bold text-dark mb-2">1. Find the real problem</h3>
              <p className="max-w-2xl font-normal">
                Most problems people bring to a PM aren't the actual problem. I dig into funnel drop-offs, query the data, and cross-reference user complaints until I find the root cause not just the symptom on the surface. That's where the real work starts.
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-[41px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-warm-bg border-2 border-accent text-accent">
                <span className="h-2 w-2 rounded-full bg-accent" />
              </span>
              <h3 className="font-sans text-xl font-bold text-dark mb-2">2. Define and spec it out</h3>
              <p className="max-w-2xl font-normal">
                Once I've identified what's actually broken, I translate it into something actionable. User journeys, PRDs, acceptance criteria, scope boundaries, and tradeoff decisions written clearly so engineering, design, and stakeholders are all working from the same picture.
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-[41px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-warm-bg border-2 border-accent text-accent">
                <span className="h-2 w-2 rounded-full bg-accent" />
              </span>
              <h3 className="font-sans text-xl font-bold text-dark mb-2">3. Ship, instrument, iterate</h3>
              <p className="max-w-2xl font-normal">
                Shipping is just the beginning. I define success metrics before we build, set up tracking to monitor activation and retention, and use real usage data and feedback loops to drive the next iteration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-12 md:py-16 px-3 md:px-4 bg-transparent border-b border-warm-border/50">
        <div className="mx-auto max-w-6xl">
          <div className="border-b border-warm-border/60 pb-6 mb-6">
            <span className="font-display italic font-medium text-accent text-[22px] leading-[26px] tracking-[-0.48px] block mb-2">Tools & Stack</span>
            <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-dark tracking-tight mt-2">
              Tools I actually use.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Analytics & Data Card */}
            <div className="p-6 rounded-2xl border border-warm-border bg-white shadow-[0_2px_8px_rgba(26,26,26,0.02)] transition-custom hover:border-accent/40 hover:shadow-[0_8px_24px_rgba(26,26,26,0.06)] hover:-translate-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-accent mb-3 block">ANALYTICS & DATA</span>
              <h3 className="font-sans font-bold text-dark text-lg mb-4">SQL, Power BI, Python, Excel</h3>
              <p className="font-normal text-sm text-muted">
                Writing database queries, building operations dashboards, cleaning raw datasets, and tracking user behavior patterns to inform product decisions.
              </p>
            </div>

            {/* Product & Design Card */}
            <div className="p-6 rounded-2xl border border-warm-border bg-white shadow-[0_2px_8px_rgba(26,26,26,0.02)] transition-custom hover:border-accent/40 hover:shadow-[0_8px_24px_rgba(26,26,26,0.06)] hover:-translate-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-accent mb-3 block">PRODUCT & DESIGN</span>
              <h3 className="font-sans font-bold text-dark text-lg mb-4">Figma, Notion, Miro</h3>
              <p className="font-normal text-sm text-muted">
                Mapping user journeys, wireframing product flows, writing PRDs, and collaborating on specs that engineers and designers can actually build from.
              </p>
            </div>

            {/* AI & LLM Tools Card */}
            <div className="p-6 rounded-2xl border border-warm-border bg-white shadow-[0_2px_8px_rgba(26,26,26,0.02)] transition-custom hover:border-accent/40 hover:shadow-[0_8px_24px_rgba(26,26,26,0.06)] hover:-translate-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-accent mb-3 block">AI & LLM TOOLS</span>
              <h3 className="font-sans font-bold text-dark text-lg mb-4">Claude, ChatGPT, Google AI Studio, LLM Eval</h3>
              <p className="font-normal text-sm text-muted">
                Evaluating LLM response quality, designing prompt taxonomies, stress-testing model boundaries, and flagging hallucination and safety patterns across production datasets.
              </p>
            </div>

            {/* Research & Discovery Card */}
            <div className="p-6 rounded-2xl border border-warm-border bg-white shadow-[0_2px_8px_rgba(26,26,26,0.02)] transition-custom hover:border-accent/40 hover:shadow-[0_8px_24px_rgba(26,26,26,0.06)] hover:-translate-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-accent mb-3 block">RESEARCH & DISCOVERY</span>
              <h3 className="font-sans font-bold text-dark text-lg mb-4">Mixpanel, Perplexity, Amplitude</h3>
              <p className="font-normal text-sm text-muted">
                Synthesizing user feedback, analyzing funnel drop-offs, running competitive research, and translating raw signals into actionable product insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 md:py-16 px-3 md:px-4 bg-transparent border-b border-warm-border/50">
        <div className="mx-auto max-w-6xl">
          <div className="border-b border-warm-border/60 pb-6 mb-6">
            <span className="font-display italic font-medium text-accent text-[22px] leading-[26px] tracking-[-0.48px] block mb-2">Experience</span>
            <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-dark tracking-tight mt-2">
              Where I've shown up so far.
            </h2>
          </div>

          <div className="space-y-6">
            {portfolio.experience.map((exp, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl border border-warm-border bg-white shadow-[0_2px_8px_rgba(26,26,26,0.02)] transition-custom hover:border-accent/40 hover:shadow-[0_8px_24px_rgba(26,26,26,0.06)] hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-1">
                      {exp.company}
                    </span>
                    <h3 className="font-sans font-bold text-dark text-lg md:text-xl">
                      {exp.role}
                    </h3>
                  </div>
                  <div className="text-left md:text-right">
                    <span className="text-sm font-semibold text-dark/70 block">
                      {exp.duration}
                    </span>
                    <span className="text-xs text-muted block">
                      {exp.location}
                    </span>
                  </div>
                </div>
                {exp.bullets && exp.bullets.length > 0 && (
                  <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-muted font-normal">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-12 md:py-16 px-3 md:px-4 bg-transparent border-b border-warm-border/50">
        <div className="mx-auto max-w-6xl">
          <div className="border-b border-warm-border/60 pb-6 mb-6">
            <span className="font-display italic font-medium text-accent text-[22px] leading-[26px] tracking-[-0.48px] block mb-2">Education</span>
            <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-dark tracking-tight mt-2">
              Where it started.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {portfolio.education.map((edu, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl border border-warm-border bg-white shadow-[0_2px_8px_rgba(26,26,26,0.02)] transition-custom hover:border-accent/40 hover:shadow-[0_8px_24px_rgba(26,26,26,0.06)] hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-1">
                    {edu.institution} {edu.location ? `· ${edu.location}` : ""}
                  </span>
                  <h3 className="font-sans font-bold text-dark text-lg md:text-xl mb-3">
                    {edu.degree}
                  </h3>
                  {edu.bullets && edu.bullets.length > 0 && (
                    <ul className="list-disc list-outside ml-4 space-y-1.5 text-sm text-muted font-normal">
                      {edu.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="leading-relaxed">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {edu.duration && (
                  <div className="mt-4 pt-3 border-t border-warm-border/30 text-left">
                    <span className="text-sm font-semibold text-dark/70">
                      {edu.duration}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-14 md:py-16 px-3 md:px-4 bg-transparent">
        <div className="mx-auto max-w-6xl text-center">
          <div className="relative p-8 md:p-12 rounded-3xl border border-warm-border bg-white shadow-[0_4px_16px_rgba(26,26,26,0.02)] overflow-hidden">
            {/* Background Grid Pattern inside card */}
            <div className="absolute inset-0 bg-[radial-gradient(#D3D9E5_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />

            <div className="relative max-w-xl mx-auto flex flex-col items-center">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-wider mb-4 shadow-3xs">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" /> Let's Connect
              </div>
              
              <h2 className="font-sans text-3xl md:text-4xl font-bold text-dark tracking-tight mb-4">
                Open to the right conversations!
              </h2>
              
              <p className="mb-8 max-w-md font-normal">
                Available for PM roles, collabs, and honest feedback. Reply within 24 hours.
              </p>

              {/* Grid of CTAs */}
              <div className="grid sm:grid-cols-2 gap-3 w-full max-w-md">
                <a 
                  href="mailto:ujjavalbhardwaj6@gmail.com"
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
