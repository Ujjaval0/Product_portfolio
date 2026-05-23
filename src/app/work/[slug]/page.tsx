import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolio } from "@/data/portfolio";
import { ArrowLeft, ArrowUpRight, CheckCircle2, AlertTriangle, BookOpen, ExternalLink, HelpCircle } from "lucide-react";

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

  // Helper icons/colors for sections
  const sections = [
    { title: "Problem Statement", content: project.problem, icon: AlertTriangle, bg: "bg-amber-500/10 border-amber-500/20 text-accent" },
    { title: "My Role & Ownership", content: project.role, icon: HelpCircle, bg: "bg-blue-500/10 border-blue-500/20 text-blue-600" },
  ];

  return (
    <article className="min-h-screen py-12 px-3 md:px-4 md:py-20">
      <div className="mx-auto max-w-5xl">
        {/* Back Link */}
        <Link 
          href="/#works" 
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-dark transition-custom mb-10 group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" /> Back to Work
        </Link>

        {/* Case Study Header */}
        <header className="border-b border-warm-border pb-8 mb-12">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, idx) => (
              <span 
                key={idx} 
                className="px-2 py-0.5 rounded bg-warm-surface text-[10px] font-semibold tracking-wider text-muted uppercase border border-warm-border/50"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark tracking-tight leading-[1.15] mb-4">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-muted font-normal leading-relaxed mb-6">
            {project.subtitle}
          </p>

          {/* Links Row */}
          <div className="flex flex-wrap gap-3">
            {project.links.prd && (
              <a 
                href={project.links.prd}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-custom shadow-sm"
              >
                View Live PRD <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            {project.links.live && (
              <a 
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-warm-border text-dark text-sm font-medium hover:bg-warm-surface transition-custom"
              >
                Launch Live App <ExternalLink className="h-3.5 w-3.5 text-muted" />
              </a>
            )}
            {project.links.github && (
              <a 
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-warm-border text-dark text-sm font-medium hover:bg-warm-surface transition-custom"
              >
                GitHub Repository <ExternalLink className="h-3.5 w-3.5 text-muted" />
              </a>
            )}
            {project.links.note && (
              <a 
                href={project.links.note}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-warm-border text-dark text-sm font-medium hover:bg-warm-surface transition-custom"
              >
                View Methodology Doc <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </header>

        {/* Case Study Content */}
        <div className="space-y-12">
          {/* Problem & Role Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl border border-warm-border bg-white shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="h-5 w-5 text-accent" />
                <h2 className="font-sans text-lg font-bold text-dark">
                  1. The Problem
                </h2>
              </div>
              <p className="font-normal">
                {project.problem}
              </p>
            </div>

            <div className="p-6 rounded-xl border border-warm-border bg-white shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <h2 className="font-sans text-lg font-bold text-dark">
                  2. My Role & Ownership
                </h2>
              </div>
              <p className="font-normal">
                {project.role}
              </p>
            </div>
          </div>

          {/* Process Section */}
          <div className="py-6">
            <h2 className="font-sans text-2xl font-bold text-dark mb-6">
              3. Process & Methodology
            </h2>
            <div className="relative border-l border-warm-border/60 pl-6 ml-3 space-y-8">
              {project.process.map((step, idx) => (
                <div key={idx} className="relative">
                  {/* Timeline bullet */}
                  <span className="absolute -left-[31px] top-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-warm-bg border-2 border-accent text-accent">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>
                  <h3 className="font-sans text-lg font-bold text-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="font-normal">
                    {step.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Outcome Section */}
          <div className="p-6 md:p-8 rounded-xl border border-accent/20 bg-accent/5">
            <div className="flex items-center gap-2.5 mb-3">
              <CheckCircle2 className="h-6 w-6 text-accent" />
              <h2 className="font-sans text-xl font-bold text-dark">
                4. Outcome & Impact
              </h2>
            </div>
            <p className="font-normal">
              {project.outcome}
            </p>
          </div>

          {/* What I'd Do Differently Section */}
          <div className="p-6 md:p-8 rounded-xl border border-warm-border bg-white shadow-sm">
            <h2 className="font-sans text-lg font-bold text-dark mb-3">
              5. What I'd Do Differently (Self-Reflection)
            </h2>
            <p className="font-normal italic text-dark/75">
              "{project.learnings}"
            </p>
          </div>
        </div>

        {/* Recruiter Call to Action */}
        <div className="mt-16 pt-12 border-t border-warm-border text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted mb-4">
            Like how I think? Let's connect.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href={`mailto:${portfolio.email}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-white font-medium hover:bg-accent-hover transition-custom shadow-sm text-sm"
            >
              Email Ujjaval
            </a>
            <a 
              href={portfolio.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-warm-border text-dark font-medium hover:bg-warm-surface transition-custom text-sm"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
