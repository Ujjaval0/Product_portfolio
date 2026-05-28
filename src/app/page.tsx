"use client";

import Link from "next/link";
import { portfolio } from "@/data/portfolio";
import { ArrowRight, FileText, Mail } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const, // easeOutExpo
    },
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section — full viewport height on desktop, auto on mobile */}
      <section
        id="hero"
        className="relative flex flex-col justify-center overflow-hidden bg-transparent min-h-0 pt-20 pb-4 md:min-h-[100svh] md:pt-20 md:pb-0"
      >
        {/* Subtle premium gradient mesh glow */}
        <div className="absolute top-0 right-0 -z-10 w-[70%] h-[70%] max-w-[800px] pointer-events-none opacity-60 bg-[radial-gradient(circle_at_top_right,rgba(100,141,229,0.06),transparent_55%)]" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative w-full pt-4 md:pt-20"
        >
          {/* Tagline */}
          <motion.div variants={itemVariants} className="mb-4 md:mb-10 select-none">
            <span
              className="font-bold text-[13px] md:text-[14px] text-dark/95 tracking-widest uppercase"
              style={{ fontFamily: 'var(--font-manrope), Manrope, "Manrope Placeholder", sans-serif' }}
            >
              Product Management · AI Products
            </span>
          </motion.div>

          {/* Giant Title */}
          <motion.h1 
            variants={itemVariants} 
            className="element mb-6 md:mb-12 ml-0 pl-0"
          >
            Most people see features. <span className="text-[#8E8E93]">I see the friction behind them - and build to remove it.</span>
          </motion.h1>

          {/* Actions Row */}
          <motion.div variants={itemVariants} className="pt-2">
            <div className="flex flex-row flex-wrap items-center gap-3 w-full md:w-auto justify-start">
              <Link
                href="#works"
                className="inline-flex items-center justify-center w-auto px-8 py-3.5 rounded-full bg-black text-white font-medium hover:bg-neutral-800 active:scale-[0.98] transition-all text-base shadow-sm"
              >
                See My Work <span className="text-[17px] ml-1">↗</span>
              </Link>
              <Link
                href="#connect"
                className="inline-flex items-center justify-center w-auto px-8 py-3.5 rounded-full border border-warm-border/80 bg-white/40 backdrop-blur-xs text-dark font-medium hover:bg-dark/[0.04] active:scale-[0.98] transition-all text-base"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>


      {/* Profile & Identity Section */}
      <section id="about" className="hidden md:block relative overflow-hidden pt-8 pb-8 md:pt-10 md:pb-10 bg-transparent">
        <div className="relative w-full flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
          {/* Left Column: Identity details (65%) */}
          <ScrollReveal className="w-full md:w-[65%] flex flex-col items-start text-left order-2 md:order-1">
            <h2
              className="font-sans text-xl sm:text-2xl font-extrabold text-dark tracking-tight mb-3"
              style={{ fontFamily: 'var(--font-manrope), Manrope, "Manrope Placeholder", sans-serif' }}
            >
              Hello, I&apos;m Ujjaval.
            </h2>
            <p className="font-sans text-[22px] font-normal leading-[32px] text-[#2A2A3C]/85 mb-6 text-left">
              A self-taught fresher who got genuinely obsessed with AI and decided to build a career around it.
            </p>
            
            <div className="space-y-6 font-normal text-dark/85">
              <p>
                Every day there's a new model, a new benchmark. I don't just want to use it : I want to know why it was built and whether it was even worth building.
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
          </ScrollReveal>

          {/* Right Column: Profile Image (35%) */}
          <ScrollReveal delay={100} className="w-full md:w-[35%] flex justify-center md:justify-end order-1 md:order-2 mb-6 md:mb-0">
            <div className="relative w-full max-w-[220px] sm:max-w-[260px] md:max-w-[290px] aspect-[3/4] rounded-3xl overflow-hidden shadow-lg border border-warm-border bg-white">
              <img 
                src="/images/profile.png" 
                alt={portfolio.name} 
                className="object-cover w-full h-full filter saturate-[95%] contrast-[101%]"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>


      {/* Selected Works Section */}
      <section id="works" className="pt-10 pb-12 md:pt-32 md:pb-16 bg-transparent">
        <div className="w-full">


          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {portfolio.caseStudies.map((project, idx) => {
              const subtitle = project.slug === "accredian-connect" 
                ? "Accredian" 
                : project.slug === "mantracare-rebuild" 
                  ? "MantraCare UX Rebuild" 
                  : "Soul AI";

              return (
                <ScrollReveal 
                  key={idx} 
                  delay={idx * 100} 
                  className="flex flex-col h-full"
                >
                  <Link href={`/work/${project.slug}`} className="block group">
                    <motion.div
                      className="flex flex-col h-full gap-4"
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {/* ── Project Image / Screenshot ── */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-warm-bg rounded-[24px] border border-warm-border/30 shrink-0">
                        <div className="absolute inset-0 bg-black/[0.01] group-hover:bg-black/[0.04] transition-colors duration-300 z-10" />
                        <img 
                          src={`/images/${project.slug}.png`}
                          alt={project.title}
                          className="object-cover w-full h-full transform group-hover:scale-[1.02] transition-transform duration-500"
                        />
                        
                        {/* Floating Arrow Circle */}
                        <div className="absolute bottom-6 left-6 z-20 w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/25 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-105 group-hover:bg-white group-hover:text-dark shadow-sm">
                          <ArrowRight className="h-5 w-5 transform -rotate-45 transition-transform duration-300" />
                        </div>
                      </div>

                      {/* ── Content ── */}
                      <div className="flex flex-col pt-1">
                        {/* Subtitle */}
                        <span className="text-[15px] font-medium text-[#8E8E93] leading-none mb-2">
                          {subtitle}
                        </span>

                        {/* Project Title */}
                        <h3 className="project-card-heading group-hover:text-accent transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>
                    </motion.div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="approach" className="pt-24 pb-12 md:pt-32 md:pb-16 bg-transparent">
        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6">
          {/* Left Column: Heading */}
          <div className="w-full md:w-[18%] shrink-0 pt-1.5 self-start">
            <ScrollReveal>
              <span className="section-label block">Approach</span>
            </ScrollReveal>
          </div>

          {/* Right Column: Content */}
          <div className="w-full md:w-[82%]">
            <div className="space-y-12">
              <ScrollReveal>
                <h2 className="text-[28px] md:text-[40px] md:leading-[56px] tracking-tight mb-8 font-light text-[#8E8E93]">
                  Find it. <span className="font-semibold text-dark">Spec it.</span> Ship it.
                </h2>
              </ScrollReveal>

              <div className="space-y-12">
                <ScrollReveal>
                  <div>
                    <h3 className="text-[20px] font-bold text-[#2A2A3C] leading-[28.6px] mb-3">1. Find the real problem</h3>
                    <p className="max-w-3xl text-[18px] font-[420] text-[#8E8E93] leading-[28.6px]">
                      Most problems people bring to a PM aren't the actual problem. I dig into funnel drop-offs, query the data, and cross-reference user complaints until I find the root cause not just the symptom on the surface. That's where the real work starts.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                  <div>
                    <h3 className="text-[20px] font-bold text-[#2A2A3C] leading-[28.6px] mb-3">2. Define and spec it out</h3>
                    <p className="max-w-3xl text-[18px] font-[420] text-[#8E8E93] leading-[28.6px]">
                      Once I've identified what's actually broken, I translate it into something actionable. User journeys, PRDs, acceptance criteria, scope boundaries, and tradeoff decisions written clearly so engineering, design, and stakeholders are all working from the same picture.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <div>
                    <h3 className="text-[20px] font-bold text-[#2A2A3C] leading-[28.6px] mb-3">3. Ship, instrument, iterate</h3>
                    <p className="max-w-3xl text-[18px] font-[420] text-[#8E8E93] leading-[28.6px]">
                      Shipping is just the beginning. I define success metrics before we build, set up tracking to monitor activation and retention, and use real usage data and feedback loops to drive the next iteration.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="pt-24 pb-12 md:pt-32 md:pb-16 bg-transparent">
        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6">
          {/* Left Column: Heading */}
          <div className="w-full md:w-[18%] shrink-0 pt-1.5 self-start">
            <ScrollReveal>
              <span className="section-label block">Tools & Stack</span>
            </ScrollReveal>
          </div>

          {/* Right Column: Content */}
          <div className="w-full md:w-[82%]">
            <div className="space-y-12">
              {/* Analytics & Data */}
              <ScrollReveal delay={0}>
                <div>
                  <h3 className="text-[20px] font-bold text-dark mb-1">
                    Analytics & Data
                  </h3>
                  <div className="text-[17px] text-[#8E8E93] mb-3">
                    SQL, Power BI, Python, Excel
                  </div>
                  <p className="text-[18px] font-[420] text-dark leading-[28.6px]">
                    Writing database queries, building operations dashboards, cleaning raw datasets, and tracking user behavior patterns to inform product decisions.
                  </p>
                </div>
              </ScrollReveal>

              {/* Product & Design */}
              <ScrollReveal delay={75}>
                <div>
                  <h3 className="text-[20px] font-bold text-dark mb-1">
                    Product & Design
                  </h3>
                  <div className="text-[17px] text-[#8E8E93] mb-3">
                    Figma, Notion, Miro
                  </div>
                  <p className="text-[18px] font-[420] text-dark leading-[28.6px]">
                    Mapping user journeys, wireframing product flows, writing PRDs, and collaborating on specs that engineers and designers can actually build from.
                  </p>
                </div>
              </ScrollReveal>

              {/* AI & LLM Tools */}
              <ScrollReveal delay={150}>
                <div>
                  <h3 className="text-[20px] font-bold text-dark mb-1">
                    AI & LLM Tools
                  </h3>
                  <div className="text-[17px] text-[#8E8E93] mb-3">
                    Claude, ChatGPT, Google AI Studio, LLM Eval
                  </div>
                  <p className="text-[18px] font-[420] text-dark leading-[28.6px]">
                    Evaluating LLM response quality, designing prompt taxonomies, stress-testing model boundaries, and flagging hallucination and safety patterns across production datasets.
                  </p>
                </div>
              </ScrollReveal>

              {/* Research & Discovery */}
              <ScrollReveal delay={225}>
                <div>
                  <h3 className="text-[20px] font-bold text-dark mb-1">
                    Research & Discovery
                  </h3>
                  <div className="text-[17px] text-[#8E8E93] mb-3">
                    Mixpanel, Perplexity, Amplitude
                  </div>
                  <p className="text-[18px] font-[420] text-dark leading-[28.6px]">
                    Synthesizing user feedback, analyzing funnel drop-offs, running competitive research, and translating raw signals into actionable product insights.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="pt-24 pb-12 md:pt-32 md:pb-16 bg-transparent">
        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6">
          {/* Left Column: Heading */}
          <div className="w-full md:w-[18%] shrink-0 pt-1.5 self-start">
            <ScrollReveal>
              <span className="section-label block">Experience</span>
            </ScrollReveal>
          </div>

          {/* Right Column: Content */}
          <div className="w-full md:w-[82%]">
            <div className="space-y-12">
              <ScrollReveal>
                <h2 className="text-[28px] md:text-[40px] md:leading-[56px] tracking-tight mb-8 font-light text-[#8E8E93]">
                  Started <span className="font-semibold text-dark">figuring</span> things out. <span className="font-semibold text-dark">Haven't stopped.</span>
                </h2>
              </ScrollReveal>

              <div className="space-y-12">
                {portfolio.experience.map((exp, idx) => (
                  <ScrollReveal key={idx} delay={idx * 90}>
                    <div>
                      <h3 className="text-[20px] font-bold text-[#2A2A3C] leading-[28.6px] mb-1">
                        {exp.role}
                      </h3>
                      <div className="text-[20px] font-medium text-[#565E6D] leading-[28.6px] mb-3">
                        {exp.company} · {exp.location} · {exp.duration}
                      </div>
                      {exp.bullets && exp.bullets.length > 0 && (
                        <div className="space-y-3">
                          {exp.bullets.map((bullet, bIdx) => (
                            <p key={bIdx} className="text-[18px] font-[420] text-[#8E8E93] leading-[28.6px]">
                              {bullet}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="pt-24 pb-12 md:pt-32 md:pb-16 bg-transparent">
        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6">
          {/* Left Column: Heading */}
          <div className="w-full md:w-[18%] shrink-0 pt-1.5 self-start">
            <ScrollReveal>
              <span className="section-label block">Education</span>
            </ScrollReveal>
          </div>

          {/* Right Column: Content */}
          <div className="w-full md:w-[82%]">
            <div className="space-y-12">
              {portfolio.education.map((edu, idx) => (
                <ScrollReveal key={idx} delay={idx * 90}>
                  <div>
                    <h3 className="text-[20px] font-bold text-[#2A2A3C] leading-[28.6px] mb-1">
                      {edu.degree}
                    </h3>
                    <div className="text-[20px] font-medium text-[#565E6D] leading-[28.6px] mb-3">
                      {edu.institution}{edu.location ? ` · ${edu.location}` : ""}{edu.duration ? ` · ${edu.duration}` : ""}
                    </div>
                    {edu.bullets && edu.bullets.length > 0 && (
                      <div className="space-y-3">
                        {edu.bullets.map((bullet, bIdx) => (
                          <p key={bIdx} className="text-[18px] font-[420] text-[#8E8E93] leading-[28.6px]">
                            {bullet}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section — redesigned with premium typography & motion */}
      <section id="connect" className="pt-24 pb-20 md:pt-32 md:pb-28 bg-transparent">
        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6">
          {/* Left Column: Heading */}
          <div className="w-full md:w-[18%] shrink-0 pt-1.5 self-start">
            <ScrollReveal>
              <span className="section-label block">Contact</span>
            </ScrollReveal>
          </div>

          {/* Right Column: Content */}
          <div className="w-full md:w-[82%]">
            <div className="space-y-10">
              <ScrollReveal>
                <motion.div 
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/60 backdrop-blur-xs border border-warm-border/80 text-dark text-[11px] font-bold uppercase tracking-wider mb-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] select-none cursor-default"
                  whileHover={{ 
                    y: -1, 
                    borderColor: "rgba(100, 141, 229, 0.4)",
                    boxShadow: "0 4px 15px rgba(100, 141, 229, 0.08)"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                  </span>
                  <span className="tracking-widest font-bold text-accent">Let's Connect</span>
                </motion.div>
                
                <h2 className="text-[28px] md:text-[36px] font-medium text-dark leading-tight mb-4">
                  Open to the right conversations
                </h2>
                
                <p className="max-w-xl text-[19px] text-[#565E6D] leading-[28.6px] mb-8">
                  Available for PM roles, collabs, and honest feedback. Reply within 24 hours.
                </p>

                {/* Giant interactive Email link */}
                <div className="mb-12">
                  <motion.a 
                    href="mailto:ujjavalbhardwaj6@gmail.com"
                    className="inline-block text-[20px] sm:text-[28px] md:text-[36px] lg:text-[48px] font-medium text-dark hover:text-accent tracking-tight transition-colors duration-300 group break-all"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    ujjavalbhardwaj6@gmail.com
                    <span className="inline-block ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 text-accent">↗</span>
                  </motion.a>
                  <div className="h-[1px] bg-warm-border/60 w-full max-w-xl mt-2 origin-left scale-x-100" />
                </div>

                {/* Row of clean social/document links */}
                <div className="flex flex-wrap gap-x-8 gap-y-4 pt-4">
                  <motion.a 
                    href="tel:+919149159993"
                    className="inline-flex items-center gap-1.5 text-[17px] font-medium text-dark hover:text-accent transition-colors group"
                    whileHover={{ y: -2 }}
                  >
                    Phone: +91 9149159993
                    <span className="text-[13px] text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">↗</span>
                  </motion.a>

                  <motion.a 
                    href={portfolio.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[17px] font-medium text-dark hover:text-accent transition-colors group"
                    whileHover={{ y: -2 }}
                  >
                    LinkedIn
                    <span className="text-[13px] text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">↗</span>
                  </motion.a>

                  <motion.a 
                    href={portfolio.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[17px] font-medium text-dark hover:text-accent transition-colors group"
                    whileHover={{ y: -2 }}
                  >
                    GitHub
                    <span className="text-[13px] text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">↗</span>
                  </motion.a>

                  <motion.a 
                    href={portfolio.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[17px] font-medium text-dark hover:text-accent transition-colors group"
                    whileHover={{ y: -2 }}
                  >
                    Resume PDF
                    <span className="text-[13px] text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">↗</span>
                  </motion.a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
