import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolio } from "@/data/portfolio";
import {
  ArrowLeft, ArrowUpRight, CheckCircle2, AlertTriangle,
  BookOpen, ExternalLink, Target, Lightbulb,
  FlaskConical, BarChart3, Layers
} from "lucide-react";

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

  return (
    <article className="min-h-screen py-12 px-3 md:px-4 md:py-20">
      <div className="mx-auto max-w-5xl">

        {/* Back Link */}
        <Link
          href="/#works"
          className="inline-flex items-center gap-2 text-base font-semibold text-dark hover:text-accent transition-custom mb-10 group"
        >
          <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" /> Back to Work
        </Link>

        {/* ── Section 1: Title + One-Liner ── */}
        <header className="border-b border-warm-border pb-10 mb-12">
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded bg-warm-surface text-[10px] font-semibold tracking-wider text-muted uppercase border border-warm-border/50"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark tracking-tight leading-[1.15] mb-3">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-accent font-semibold mb-6 italic font-display">
            {project.oneLiner}
          </p>

          {/* Links Row */}
          <div className="flex flex-wrap gap-3">
            {project.links.prd && (
              <a href={project.links.prd} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-custom shadow-sm">
                View Live PRD <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            {project.links.live && (
              <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-warm-border text-dark text-sm font-medium hover:bg-warm-surface transition-custom">
                Launch Live App <ExternalLink className="h-3.5 w-3.5 text-muted" />
              </a>
            )}
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-warm-border text-dark text-sm font-medium hover:bg-warm-surface transition-custom">
                GitHub Repository <ExternalLink className="h-3.5 w-3.5 text-muted" />
              </a>
            )}
            {project.links.note && (
              <a href={project.links.note} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-warm-border text-dark text-sm font-medium hover:bg-warm-surface transition-custom">
                View Methodology Doc <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </header>

        {/* Project Screenshot */}
        <div className="relative w-full overflow-hidden rounded-2xl border border-warm-border bg-warm-bg mb-12 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex justify-center">
          <img 
            src={`/images/${project.slug}.png`}
            alt={project.title}
            className="w-full h-auto max-h-[600px] object-contain"
          />
        </div>

        {/* ── Content Sections ── */}
        <div className="space-y-10">

          {/* ── Section 2: Problem Statement ── */}
          <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-6 md:p-8">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="p-2 rounded-lg bg-amber-100 border border-amber-200">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
              </div>
              <h2 className="font-sans text-xl font-bold text-dark">2. Problem Statement</h2>
            </div>

            <p className="font-normal text-dark/85 mb-5">{project.problem}</p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl border border-amber-100 p-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 block mb-1.5">Who is the user?</span>
                <p className="text-sm font-normal text-dark/80">{project.problemUser}</p>
              </div>
              <div className="bg-white rounded-xl border border-amber-100 p-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 block mb-1.5">Data / Context</span>
                <p className="text-sm font-normal text-dark/80">{project.problemData}</p>
              </div>
            </div>
          </div>

          {/* ── Section 3: Goal / Success Metrics ── */}
          <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6 md:p-8">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
                <Target className="h-5 w-5 text-accent" />
              </div>
              <h2 className="font-sans text-xl font-bold text-dark">3. Goal & Success Metrics</h2>
            </div>

            <p className="font-normal text-dark/85 mb-5">{project.goalMetrics.goal}</p>

            <div className="space-y-2">
              {project.goalMetrics.metrics.map((metric, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white rounded-xl border border-accent/10 px-4 py-3">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                  <span className="text-sm font-normal text-dark/80">{metric}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Section 4: Research / Insights ── */}
          <div className="rounded-2xl border border-warm-border bg-white p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="p-2 rounded-lg bg-blue-50 border border-blue-100">
                <FlaskConical className="h-5 w-5 text-blue-600" />
              </div>
              <h2 className="font-sans text-xl font-bold text-dark">4. Research & Insights</h2>
            </div>

            <div className="relative border-l border-warm-border/60 pl-6 ml-3 space-y-8">
              {project.research.map((item, idx) => (
                <div key={idx} className="relative">
                  <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-warm-bg border-2 border-blue-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  </span>
                  <h3 className="font-sans text-base font-bold text-dark mb-1.5">{item.title}</h3>
                  <p className="font-normal text-dark/80 text-sm">{item.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Section 5: Solution ── */}
          <div className="rounded-2xl border border-warm-border bg-white p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-100">
                <Lightbulb className="h-5 w-5 text-emerald-600" />
              </div>
              <h2 className="font-sans text-xl font-bold text-dark">5. Solution & Feature Proposal</h2>
            </div>

            <p className="font-normal text-dark/85 mb-5 text-base">{project.solution}</p>

            <div className="space-y-2.5">
              {project.solutionDetails.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-3 rounded-xl bg-warm-surface border border-warm-border/50 px-4 py-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-sm font-normal text-dark/80">{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Section 6: Prioritization (optional) ── */}
          {project.prioritization && (
            <div className="rounded-2xl border border-purple-100 bg-purple-50/40 p-6 md:p-8">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2 rounded-lg bg-purple-100 border border-purple-200">
                  <Layers className="h-5 w-5 text-purple-600" />
                </div>
                <h2 className="font-sans text-xl font-bold text-dark">6. Prioritization</h2>
              </div>
              <p className="font-normal text-dark/85">{project.prioritization}</p>
            </div>
          )}

          {/* ── Section 7: Outcome / Measurement ── */}
          <div className="rounded-2xl border border-accent/25 bg-gradient-to-br from-accent/5 to-accent/10 p-6 md:p-8">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="p-2 rounded-lg bg-accent/15 border border-accent/20">
                <BarChart3 className="h-5 w-5 text-accent" />
              </div>
              <h2 className="font-sans text-xl font-bold text-dark">7. Outcome & What I'd Measure</h2>
            </div>
            <p className="font-normal text-dark/85">{project.measurement}</p>
          </div>

          {/* ── Self-Reflection ── */}
          <div className="p-6 md:p-8 rounded-2xl border border-warm-border bg-white shadow-sm">
            <div className="flex items-center gap-2.5 mb-3">
              <BookOpen className="h-5 w-5 text-muted" />
              <h2 className="font-sans text-lg font-bold text-dark">What I'd Do Differently</h2>
            </div>
            <p className="font-normal italic text-dark/70">"{project.learnings}"</p>
          </div>

        </div>

        {/* Recruiter CTA */}
        <div className="mt-16 pt-12 border-t border-warm-border text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted mb-4">
            Like how I think? Let's connect.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:ujjavalbhardwaj6@gmail.com"
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
