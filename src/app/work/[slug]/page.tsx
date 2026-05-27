import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolio } from "@/data/portfolio";
import {
  ArrowLeft, CheckCircle2, AlertTriangle,
  BookOpen, Target, Lightbulb,
  FlaskConical, BarChart3, Layers
} from "lucide-react";

import ScrollReveal from "@/components/ScrollReveal";
import MantraCareCaseStudy from "@/components/MantraCareCaseStudy";
import PremiumActionButtons from "@/components/PremiumActionButtons";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolio.caseStudies.map((cs) => ({
    slug: cs.slug,
  }));
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = portfolio.caseStudies.find((cs) => cs.slug === slug);

  if (!project) {
    notFound();
  }

  if (slug === "mantracare-rebuild") {
    return <MantraCareCaseStudy project={project} />;
  }

  return (
    <article className="min-h-screen pt-36 pb-12 md:pt-44 md:pb-20">

      <div className="w-full">



          <h1 className="element mb-6">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-accent font-semibold mb-6">
            {project.oneLiner}
          </p>

          {/* Links Row */}
          <PremiumActionButtons links={project.links} />


        {/* Project Screenshot */}
        <div className="relative w-full overflow-hidden rounded-2xl border border-warm-border bg-warm-bg mt-16 md:mt-24 mb-12 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex justify-center">
          <img 
            src={`/images/${project.slug}.png`}
            alt={project.title}
            className="w-full h-auto max-h-[240px] sm:max-h-[380px] md:max-h-[600px] object-contain"
          />
        </div>

        {/* ── Content Sections ── */}
        <div className="mt-16 space-y-16 md:space-y-24">

          {/* ── Section 1: Problem Statement ── */}
          <ScrollReveal>
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 pt-12 border-t border-warm-border/50">
              <div className="w-full md:w-[22%] shrink-0">
                <span className="section-label block">01. Problem</span>
              </div>
              <div className="w-full md:w-[78%]">
                <p className="text-[18px] text-dark leading-[28.6px] font-[420] mb-8">
                  {project.problem}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <span className="text-[12px] font-bold uppercase tracking-wider text-[#8E8E93] block mb-1.5">Who is the user?</span>
                    <p className="text-[16px] text-dark/85 leading-relaxed font-[420]">{project.problemUser}</p>
                  </div>
                  <div>
                    <span className="text-[12px] font-bold uppercase tracking-wider text-[#8E8E93] block mb-1.5">Data / Context</span>
                    <p className="text-[16px] text-dark/85 leading-relaxed font-[420]">{project.problemData}</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ── Section 2: Goal & Focus ── */}
          <ScrollReveal>
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 pt-12 border-t border-warm-border/50">
              <div className="w-full md:w-[22%] shrink-0">
                <span className="section-label block">02. Focus</span>
              </div>
              <div className="w-full md:w-[78%]">
                <p className="text-[18px] text-dark leading-[28.6px] font-[420]">{project.goalMetrics.goal}</p>

                {project.goalMetrics.metrics && project.goalMetrics.metrics.length > 0 && (
                  <div className="space-y-4 mt-6">
                    <span className="text-[12px] font-bold uppercase tracking-wider text-[#8E8E93] block mb-2">Success Metrics</span>
                    {project.goalMetrics.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        <span className="text-[16px] text-dark/85 leading-relaxed font-[420]">{metric}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* ── Section 3: Research & Insights ── */}
          <ScrollReveal>
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 pt-12 border-t border-warm-border/50">
              <div className="w-full md:w-[22%] shrink-0">
                <span className="section-label block">03. Research</span>
              </div>
              <div className="w-full md:w-[78%]">
                {project.researchIntro && (
                  <p className="text-[18px] text-dark leading-[28.6px] font-[420] mb-8">
                    {project.researchIntro}
                  </p>
                )}

                <div className="space-y-8 pl-5 border-l-2 border-warm-border/60">
                  {project.research.map((item, idx) => (
                    <div key={idx} className="relative">
                      <span className="absolute -left-[27px] top-2 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-white border border-accent shrink-0">
                        <span className="h-1 w-1 rounded-full bg-accent" />
                      </span>
                      <h4 className="text-[17px] font-bold text-dark mb-1.5">{item.title}</h4>
                      <p className="text-[16px] text-[#8E8E93] leading-relaxed font-[420]">{item.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ── Section 4: Solution & Proposal ── */}
          <ScrollReveal>
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 pt-12 border-t border-warm-border/50">
              <div className="w-full md:w-[22%] shrink-0">
                <span className="section-label block">04. Solution</span>
              </div>
              <div className="w-full md:w-[78%]">
                <p className="text-[18px] text-dark leading-[28.6px] font-[420] mb-6">{project.solution}</p>

                <div className="space-y-6">
                  {project.solutionDetails.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <span className="text-[12px] font-bold text-accent tracking-widest uppercase mt-0.5">
                        0{idx + 1}
                      </span>
                      <span className="text-[16px] text-dark/85 leading-relaxed font-[420]">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ── Section 5: Prioritization ── */}
          {project.prioritization && (
            <ScrollReveal>
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 pt-12 border-t border-warm-border/50">
                <div className="w-full md:w-[22%] shrink-0">
                  <span className="section-label block">05. Prioritisation</span>
                </div>
                <div className="w-full md:w-[78%]">
                  <p className="text-[18px] text-dark leading-[28.6px] font-[420]">{project.prioritization}</p>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* ── Section 6: Outcome & Measurement ── */}
          <ScrollReveal>
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 pt-12 border-t border-warm-border/50">
              <div className="w-full md:w-[22%] shrink-0">
                <span className="section-label block">06. Outcome</span>
              </div>
              <div className="w-full md:w-[78%]">
                {project.measurementPoints ? (
                  <div className="space-y-8">
                    <div>
                      <span className="text-[12px] font-bold uppercase tracking-wider text-accent block mb-1">North Star</span>
                      <p className="text-[24px] font-bold text-dark tracking-tight">{project.measurementPoints.northStar}</p>
                    </div>
                    
                    <div className="space-y-4">
                      <span className="text-[12px] font-bold uppercase tracking-wider text-accent block mb-2">Supporting Metrics</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {project.measurementPoints.points.map((point, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                            <span className="text-[16px] text-dark/85 leading-relaxed font-[420]">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-[18px] text-dark leading-[28.6px] font-[420] whitespace-pre-line">{project.measurement}</p>
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* ── Section 7: Assets & Wireframes ── */}
          {project.additionalImages && project.additionalImages.length > 0 && (
            <ScrollReveal>
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 pt-12 border-t border-warm-border/50">
                <div className="w-full md:w-[22%] shrink-0">
                  <span className="section-label block">07. Assets & Wireframes</span>
                </div>
                <div className="w-full md:w-[78%]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {project.additionalImages.map((img, idx) => (
                      <div key={idx} className="relative overflow-hidden rounded-xl border border-warm-border/40 bg-warm-bg shadow-xs">
                        <img src={img.url} alt={img.caption || `Asset ${idx + 1}`} className="w-full h-auto object-cover" />
                        {img.caption && (
                          <div className="p-3 bg-white border-t border-warm-border/30 text-xs font-medium text-[#8E8E93]">
                            {img.caption}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* ── Section 8: What I'd Do Differently ── */}
          <ScrollReveal>
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 pt-12 border-t border-warm-border/50">
              <div className="w-full md:w-[22%] shrink-0">
                <span className="section-label block">08. Reflection</span>
              </div>
              <div className="w-full md:w-[78%]">
                <p className="text-[18px] italic text-[#8E8E93] leading-[28.6px] font-[420]">
                  "{project.learnings}"
                </p>
              </div>
            </div>
          </ScrollReveal>

        </div>


      </div>
    </article>
  );
}
