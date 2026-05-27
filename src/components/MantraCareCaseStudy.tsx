import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  ExternalLink,
  Target,
  Lightbulb,
  FlaskConical,
  BarChart3,
  Layers,
  Check,
  X,
  Lock,
  User,
  CreditCard,
  UserCheck,
  Activity,
  ChevronRight,
  Sparkles,
  HelpCircle,
  FileText
} from "lucide-react";
import { CaseStudy } from "@/data/portfolio";
import ScrollProgress from "@/components/ScrollProgress";

export default function MantraCareCaseStudy({ project }: { project: CaseStudy }) {
  return (
    <article className="min-h-screen pt-24 pb-20 md:pt-28">
      <ScrollProgress />
      <div className="w-full">

        {/* ── HEADER ── */}
        <header className="border-b border-warm-border pb-8 mb-12">

          <h1 className="font-sans text-3xl sm:text-4xl md:text-5.5xl font-extrabold text-dark tracking-tight leading-[1.1] mb-4">
            {project.title}
          </h1>

          <p className="text-xl md:text-2xl text-accent font-semibold mb-6 italic font-display leading-relaxed">
            {project.oneLiner}
          </p>

          <div className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-warm-border/40 text-sm">
            <div className="bg-white/50 backdrop-blur-xs p-3.5 rounded-xl border border-warm-border/50">
              <span className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">Role</span>
              <span className="font-bold text-dark">{project.role}</span>
            </div>
            <div className="bg-white/50 backdrop-blur-xs p-3.5 rounded-xl border border-warm-border/50">
              <span className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">Timeline</span>
              <span className="font-bold text-dark">2 Weeks (UX Audit & Redesign)</span>
            </div>
            <div className="bg-white/50 backdrop-blur-xs p-3.5 rounded-xl border border-warm-border/50">
              <span className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">Impact Focus</span>
              <span className="font-bold text-dark">Activation, Trust Engineering, SSO</span>
            </div>
          </div>
        </header>

        {/* Case Study Mockup Image Banner */}
        <div className="relative w-full overflow-hidden rounded-2xl border border-warm-border bg-white mb-12 shadow-[0_4px_24px_rgba(26,26,26,0.04)] flex justify-center">
          <img 
            src="/images/mantracare-rebuild.png"
            alt="MantraCare Product Redesign Mockup"
            className="w-full h-auto max-h-[500px] object-cover filter saturate-[1.02]"
          />
        </div>

        {/* ── STEP 1: ABOUT THE PROJECT ── */}
        <section id="step-1" className="bg-white rounded-3xl border border-warm-border p-6 md:p-10 mb-12 shadow-sm scroll-mt-24">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-8 h-8 rounded-full bg-accent/10 text-accent font-bold text-sm flex items-center justify-center shrink-0 border border-accent/20">
              1
            </span>
            <h2 className="font-sans text-2xl md:text-3xl font-extrabold text-dark tracking-tight">About the Project</h2>
          </div>

          <div className="space-y-6">
            <p className="font-normal text-dark/85">
              MantraCare is marketed as an all-in-one platform for mental, physical, and chronic care, designed to connect users with therapists, trainers, and health coaches globally.
            </p>

            {/* Visual: Ideal vs Reality Journey */}
            <div className="bg-warm-bg/40 rounded-2xl border border-warm-border/55 p-6 my-8">
              <h3 className="text-center font-sans font-bold text-sm text-muted uppercase tracking-widest mb-6">The Journey Divergence</h3>
              <div className="grid md:grid-cols-2 gap-8 relative">
                {/* Visual Connector for Desktop */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-warm-border" />

                {/* Left side: The Ideal Journey */}
                <div className="flex flex-col items-center text-center">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> The Ideal Journey
                  </div>
                  <div className="flex flex-col items-center gap-3 w-full max-w-xs">
                    <div className="bg-white border border-warm-border w-full py-3 px-4 rounded-xl shadow-2xs font-bold text-dark text-sm">
                      1. Open Application
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted rotate-90 md:rotate-0" />
                    <div className="bg-white border border-warm-border w-full py-3 px-4 rounded-xl shadow-2xs font-bold text-dark text-sm">
                      2. Select Personal Goals
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted rotate-90 md:rotate-0" />
                    <div className="bg-white border border-emerald-300 bg-emerald-50/10 w-full py-3 px-4 rounded-xl shadow-2xs font-bold text-emerald-800 text-sm">
                      3. Care Delivered Seamlessly
                    </div>
                  </div>
                </div>

                {/* Right side: The Reality */}
                <div className="flex flex-col items-center text-center mt-6 md:mt-0">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold uppercase tracking-wider mb-5">
                    <AlertTriangle className="w-3.5 h-3.5" /> The Reality Encountered
                  </div>
                  <div className="flex flex-col items-center gap-3 w-full max-w-xs">
                    <div className="bg-white border border-rose-200 bg-rose-50/10 w-full py-3 px-4 rounded-xl shadow-2xs font-bold text-rose-800 text-sm">
                      1. Immediate Lockout Gate
                    </div>
                    <ChevronRight className="w-5 h-5 text-rose-300 rotate-90 md:rotate-0" />
                    <div className="bg-white border border-rose-200 bg-rose-50/10 w-full py-3 px-4 rounded-xl shadow-2xs font-bold text-rose-800 text-sm">
                      2. Empty Listings / Directories
                    </div>
                    <ChevronRight className="w-5 h-5 text-rose-300 rotate-90 md:rotate-0" />
                    <div className="bg-white border border-rose-300 bg-rose-50/20 w-full py-3 px-4 rounded-xl shadow-2xs font-bold text-rose-900 text-sm">
                      3. Support Ghosting & External Checkout
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="font-normal text-dark/85">
              I downloaded MantraCare hoping to explore its integration of physical therapy and stress management. However, my excitement turned to frustration at the very first screen. I faced an intrusive login block that locked me out. Once I bypassed it, I found a completely empty expert directory, a broken support system, and a payment page that kicked me out of the app to an unvetted mobile website.
            </p>
            <p className="font-normal text-dark/85">
              I was surprised to see similar reactions from real users on the Play Store, many of whom felt disconnected or abandoned by the app. I decided to utilize my time to analyze the platform, looking past the visual pixels to diagnose the core systemic issues and build a trustworthy, unified wellness experience.
            </p>

            {/* Objective box */}
            <div className="mt-8 rounded-2xl border border-accent/20 bg-accent/5 p-6 flex gap-4">
              <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 h-fit shrink-0">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-accent block mb-1">Project Objective</span>
                <p className="font-sans font-bold text-dark text-base md:text-lg leading-relaxed">
                  Understand the current product and UX challenges of the MantraCare ecosystem, and design a high-leverage, **20% solution that resolves 80%** of its trust and activation problems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── STEP 2: EMPATHY ── */}
        <section id="step-2" className="scroll-mt-24 mb-12">
          {/* Banner */}
          <div className="w-full bg-[#5E7ECB] rounded-t-3xl py-6 px-8 text-white flex items-center justify-between border-x border-t border-warm-border">
            <span className="font-sans text-xl md:text-2xl font-extrabold tracking-tight">2. Empathize</span>
            <span className="text-xs uppercase tracking-widest font-bold bg-white/20 px-3 py-1 rounded-full">Phase 2</span>
          </div>
          
          <div className="bg-white rounded-b-3xl border-x border-b border-warm-border p-6 md:p-10 shadow-sm space-y-8">
            {/* Step flow */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-4 border-b border-warm-border/40">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-accent text-white font-bold text-[11px] flex items-center justify-center shrink-0">1</span>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted block">Step 1</span>
                  <span className="text-xs font-bold text-dark block">Define Research Method</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-accent text-white font-bold text-[11px] flex items-center justify-center shrink-0">2</span>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted block">Step 2</span>
                  <span className="text-xs font-bold text-dark block">Secondary Research</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-accent text-white font-bold text-[11px] flex items-center justify-center shrink-0">3</span>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted block">Step 3</span>
                  <span className="text-xs font-bold text-dark block">Primary Research</span>
                </div>
              </div>
            </div>

            {/* Substep 1 */}
            <div>
              <h3 className="font-sans text-lg font-bold text-dark mb-3">Step 1: Define the Research Method</h3>
              <p className="font-normal text-dark/80">
                Before diving into designs, I established a structured 2-week research plan to audit the app, mine review data, analyze cross-app integration, and benchmark against competitors like Wysa.
              </p>
            </div>

            {/* Substep 2 */}
            <div>
              <h3 className="font-sans text-lg font-bold text-dark mb-4">Step 2: Secondary Research (100+ Reviews Audited)</h3>
              <p className="font-normal text-dark/80 mb-6">
                I analyzed over 100 recent Google Play Store reviews to understand real-world pain points. The feedback fell into consistent, troubling categories:
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl border border-warm-border bg-warm-bg/25">
                  <div className="p-2 bg-rose-50 border border-rose-100 rounded-lg w-fit mb-3">
                    <Lock className="w-5 h-5 text-rose-600" />
                  </div>
                  <h4 className="font-bold text-dark text-sm mb-1.5">Access Blockers</h4>
                  <p className="text-xs font-normal text-muted leading-relaxed">
                    Users get charged but are immediately locked out, unable to access their accounts or retrieve credentials.
                  </p>
                </div>
                <div className="p-5 rounded-2xl border border-warm-border bg-warm-bg/25">
                  <div className="p-2 bg-amber-50 border border-amber-100 rounded-lg w-fit mb-3">
                    <User className="w-5 h-5 text-amber-600" />
                  </div>
                  <h4 className="font-bold text-dark text-sm mb-1.5">Operational Ghosting</h4>
                  <p className="text-xs font-normal text-muted leading-relaxed">
                    Completely unresponsive customer support, or paid trainers and therapists who disappeared post-payment.
                  </p>
                </div>
                <div className="p-5 rounded-2xl border border-warm-border bg-warm-bg/25">
                  <div className="p-2 bg-blue-50 border border-blue-100 rounded-lg w-fit mb-3">
                    <CreditCard className="w-5 h-5 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-dark text-sm mb-1.5">Technical Anxiety</h4>
                  <p className="text-xs font-normal text-muted leading-relaxed">
                    Broken redirects and security fears during forced external browser hops for checkout and payments.
                  </p>
                </div>
              </div>
            </div>

            {/* Substep 3 */}
            <div>
              <h3 className="font-sans text-lg font-bold text-dark mb-4">Step 3: Primary Research (Ecosystem Mapping & Benchmarking)</h3>
              <p className="font-normal text-dark/80 mb-6">
                My primary research focused on mapping MantraCare's brand ecosystem. I discovered they operate **13 separate niche applications** (e.g., DiabetesMantra, PhysioMantra, HerMantra) under the parent brand. Testing these revealed a critical database gatekeeping bug:
              </p>

              {/* Ecosystem Bug Diagram */}
              <div className="bg-red-50/20 border border-red-200/50 rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 block mb-4 text-center">Database Lockout Loop</span>
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <div className="bg-white border border-warm-border px-4 py-2.5 rounded-lg text-xs font-semibold shadow-3xs">
                      1. Create account on **DiabetesMantra**
                    </div>
                    <span className="text-emerald-500 font-bold text-xs">✔ Successful</span>
                  </div>
                  
                  <ChevronRight className="w-5 h-5 text-muted rotate-90" />
                  
                  <div className="bg-white border border-warm-border px-4 py-2.5 rounded-lg text-xs font-semibold shadow-3xs max-w-sm">
                    2. Download **PhysioMantra** & enter same email address
                  </div>
                  
                  <ChevronRight className="w-5 h-5 text-muted rotate-90" />
                  
                  <div className="bg-rose-50 border border-rose-200 px-4 py-2.5 rounded-lg text-xs font-semibold shadow-3xs text-rose-800">
                    3. System throws: **"Your account already exists"**
                  </div>
                  
                  <ChevronRight className="w-5 h-5 text-rose-300 rotate-90 animate-pulse" />
                  
                  <div className="bg-rose-950 text-white px-5 py-3 rounded-xl text-xs font-bold shadow-md">
                    No Single Sign-On (SSO) ➔ User is Locked Out of App #2!
                  </div>
                </div>
              </div>

              <p className="font-normal text-dark/80 mb-6">
                Because there is no Single Sign-On (SSO) or federated identity provider, the database recognizes the email in the parent database but refuses to authenticate the user locally on the second app. This creates an infinite lockout loop.
              </p>

              {/* Benchmarking Table */}
              <div className="mt-8">
                <span className="text-[11px] font-bold uppercase tracking-wider text-accent block mb-3">Benchmarking vs Wysa</span>
                <div className="overflow-x-auto border border-warm-border rounded-xl">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-warm-bg/40 border-b border-warm-border">
                        <th className="p-4 font-sans font-bold text-dark text-xs uppercase tracking-wider">Friction Point</th>
                        <th className="p-4 font-sans font-bold text-emerald-700 text-xs uppercase tracking-wider">Wysa's Approach</th>
                        <th className="p-4 font-sans font-bold text-rose-700 text-xs uppercase tracking-wider">MantraCare's Current Approach</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-warm-border/50">
                      <tr>
                        <td className="p-4 font-bold text-dark text-xs">First Screen Gate</td>
                        <td className="p-4 text-muted text-xs">Anonymous onboarding. Asks only for a name/nickname.</td>
                        <td className="p-4 text-muted text-xs">Strict, immediate Google Login mandatory.</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold text-dark text-xs">Trust Building</td>
                        <td className="p-4 text-muted text-xs">Explains data privacy clearly; free tools are open.</td>
                        <td className="p-4 text-muted text-xs">Demands payment before showing expert credentials.</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold text-dark text-xs">Ecosystem</td>
                        <td className="p-4 text-muted text-xs">One unified app for journaling, AI, and therapy.</td>
                        <td className="p-4 text-muted text-xs">Fragmented across 13 disconnected niche apps.</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold text-dark text-xs">Crisis Intervention</td>
                        <td className="p-4 text-muted text-xs">Highly visible helplines and safety plans upfront.</td>
                        <td className="p-4 text-muted text-xs">No visible crisis support or immediate help routes.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── STEP 3: DEFINE ── */}
        <section id="step-3" className="scroll-mt-24 mb-12">
          {/* Banner */}
          <div className="w-full bg-[#5E7ECB] rounded-t-3xl py-6 px-8 text-white flex items-center justify-between border-x border-t border-warm-border">
            <span className="font-sans text-xl md:text-2xl font-extrabold tracking-tight">3. Define</span>
            <span className="text-xs uppercase tracking-widest font-bold bg-white/20 px-3 py-1 rounded-full">Phase 3</span>
          </div>

          <div className="bg-white rounded-b-3xl border-x border-b border-warm-border p-6 md:p-10 shadow-sm space-y-8">
            
            {/* Step 1: Metric Selection */}
            <div>
              <h3 className="font-sans text-lg font-bold text-dark mb-4">Step 1: Choosing the Right Metric</h3>
              <p className="font-normal text-dark/80 mb-6">
                I used the **AARRR Framework** to identify where product/engineering modifications would have the highest leverage:
              </p>

              {/* AARRR Funnel */}
              <div className="max-w-md mx-auto space-y-4 my-8">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Acquisition (High ad spend on 13 apps)</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full h-6 bg-warm-bg border border-warm-border rounded-md overflow-hidden">
                    <div className="h-full bg-slate-400" style={{ width: "100%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-rose-600 mb-1">
                    <span className="flex items-center gap-1">Activation (Signup walls & DB Lockouts) 🚨 LEAK</span>
                    <span>20%</span>
                  </div>
                  <div className="w-full h-6 bg-warm-bg border border-warm-border rounded-md overflow-hidden">
                    <div className="h-full bg-rose-500" style={{ width: "20%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-rose-600 mb-1">
                    <span className="flex items-center gap-1">Retention (Empty directories & Ghost support) 🚨 LEAK</span>
                    <span>10%</span>
                  </div>
                  <div className="w-full h-6 bg-warm-bg border border-warm-border rounded-md overflow-hidden">
                    <div className="h-full bg-rose-400" style={{ width: "10%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Revenue (Final booking rate)</span>
                    <span>2%</span>
                  </div>
                  <div className="w-full h-6 bg-warm-bg border border-warm-border rounded-md overflow-hidden">
                    <div className="h-full bg-slate-300" style={{ width: "2%" }} />
                  </div>
                </div>
              </div>

              <p className="font-normal text-dark/80">
                Instead of focusing on Acquisition (which is already high due to search-optimized niche apps), we must prioritize Activation and Retention. If users cannot bypass the login screen or find active providers, top-of-funnel acquisition budget is wasted.
              </p>
            </div>

            {/* Step 2: Affinity Map */}
            <div>
              <h3 className="font-sans text-lg font-bold text-dark mb-4">Step 2: Analyze the Data (Affinity Map)</h3>
              <p className="font-normal text-dark/80 mb-6">
                Synthesizing Google Play reviews and user audits, I grouped the problems into three clear affinity clusters:
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                {/* Gatekeeper Cluster */}
                <div className="bg-rose-50/30 border border-rose-100 p-5 rounded-2xl shadow-2xs relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-rose-400" />
                  <span className="text-[10px] font-bold tracking-wider text-rose-600 uppercase block mb-3">The Gatekeeper System</span>
                  <ul className="space-y-2 text-xs font-medium text-dark/80">
                    <li className="flex items-start gap-1.5"><X className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" /> Immediate mandatory signup block</li>
                    <li className="flex items-start gap-1.5"><X className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" /> "Account exists" lockout loops</li>
                    <li className="flex items-start gap-1.5"><X className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" /> Fragmented 13-app databases</li>
                  </ul>
                </div>

                {/* Ghost System */}
                <div className="bg-slate-50/30 border border-slate-200 p-5 rounded-2xl shadow-2xs relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-slate-400" />
                  <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase block mb-3">The Ghost System</span>
                  <ul className="space-y-2 text-xs font-medium text-dark/80">
                    <li className="flex items-start gap-1.5"><X className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" /> Empty expert listings</li>
                    <li className="flex items-start gap-1.5"><X className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" /> External web payment hops</li>
                    <li className="flex items-start gap-1.5"><X className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" /> Unresponsive support channels</li>
                  </ul>
                </div>

                {/* UI/UX Behaviors */}
                <div className="bg-amber-50/30 border border-amber-200 p-5 rounded-2xl shadow-2xs relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-amber-400" />
                  <span className="text-[10px] font-bold tracking-wider text-amber-600 uppercase block mb-3">UI/UX Behaviors</span>
                  <ul className="space-y-2 text-xs font-medium text-dark/80">
                    <li className="flex items-start gap-1.5"><X className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" /> Onboarding screen-loading crashes</li>
                    <li className="flex items-start gap-1.5"><X className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" /> Text overlaps & layout shifts</li>
                    <li className="flex items-start gap-1.5"><X className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" /> Low visual trust signals</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3: Personas */}
            <div>
              <h3 className="font-sans text-lg font-bold text-dark mb-4">Step 3: User Persona</h3>
              
              <div className="bg-white border border-warm-border rounded-2xl overflow-hidden shadow-2xs max-w-2xl mx-auto">
                <div className="bg-accent/10 border-b border-warm-border px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="font-sans text-lg font-bold text-dark">Sarah the Seeker</h4>
                    <span className="text-xs text-muted">Age 32 · Digital Marketer · Bangalore</span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white border border-accent/20 text-accent text-xs font-bold">
                    Target Persona
                  </div>
                </div>
                <div className="p-6 grid sm:grid-cols-2 gap-6 text-xs">
                  <div>
                    <span className="font-bold text-dark uppercase tracking-wider block mb-2">Goals</span>
                    <ul className="list-disc list-inside space-y-1 text-muted font-normal">
                      <li>Manage physical therapy alongside daily stress.</li>
                      <li>Find a certified therapist with transparent pricing.</li>
                    </ul>
                  </div>
                  <div>
                    <span className="font-bold text-dark uppercase tracking-wider block mb-2">Frustrations</span>
                    <ul className="list-disc list-inside space-y-1 text-muted font-normal">
                      <li>Intrusive login gates that lock her out between apps.</li>
                      <li>Feeling "ghosted" by empty directories and silent support.</li>
                    </ul>
                  </div>
                  <div className="sm:col-span-2 border-t border-warm-border/50 pt-4 mt-2">
                    <p className="font-display italic text-sm text-dark/75 leading-relaxed">
                      "Managing my health is stressful enough. I need a platform that feels safe, coherent, and responsive, not an empty shell."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Customer Journey */}
            <div>
              <h3 className="font-sans text-lg font-bold text-dark mb-4">Step 4: Customer Journey Map</h3>
              <div className="overflow-x-auto border border-warm-border rounded-xl">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-warm-bg/40 border-b border-warm-border">
                      <th className="p-3 font-sans font-bold text-dark">Stage</th>
                      <th className="p-3 font-sans font-bold text-dark">1. Discovery</th>
                      <th className="p-3 font-sans font-bold text-dark">2. Onboarding</th>
                      <th className="p-3 font-sans font-bold text-dark">3. Explore Care</th>
                      <th className="p-3 font-sans font-bold text-dark">4. Booking & Pay</th>
                      <th className="p-3 font-sans font-bold text-dark">5. Support</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-warm-border/50 text-muted font-normal">
                    <tr>
                      <td className="p-3 font-bold text-dark">User Goals</td>
                      <td className="p-3">Find integrated care app.</td>
                      <td className="p-3">Set up account quickly.</td>
                      <td className="p-3">View therapist profiles.</td>
                      <td className="p-3">Securely buy session.</td>
                      <td className="p-3">Get app assistance.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-dark">Thinking</td>
                      <td className="p-3">"This seems perfect."</td>
                      <td className="p-3">"Why must I sign in to see anything?"</td>
                      <td className="p-3">"Where is everyone? Why is this blank?"</td>
                      <td className="p-3">"Is this external website safe?"</td>
                      <td className="p-3">"Why isn't anyone replying?"</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-dark">Feeling</td>
                      <td className="p-3 text-sm">Hopeful (😊)</td>
                      <td className="p-3 text-sm">Frustrated (😐)</td>
                      <td className="p-3 text-sm">Disappointed (😟)</td>
                      <td className="p-3 text-sm">Anxious (😰)</td>
                      <td className="p-3 text-sm">Abandoned (😡)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-rose-700">Frictions</td>
                      <td className="p-3 text-rose-600 font-medium">Fragmented App Store</td>
                      <td className="p-3 text-rose-600 font-medium">Database lockouts</td>
                      <td className="p-3 text-rose-600 font-medium">Empty directories</td>
                      <td className="p-3 text-rose-600 font-medium">Web-redirect loops</td>
                      <td className="p-3 text-rose-600 font-medium">Ghosted chat rooms</td>
                    </tr>
                    <tr className="bg-accent/5">
                      <td className="p-3 font-bold text-accent">PM Lever</td>
                      <td className="p-3 text-accent font-bold">Unify ecosystems</td>
                      <td className="p-3 text-accent font-bold">Guest Mode / SSO</td>
                      <td className="p-3 text-accent font-bold">Live Directories</td>
                      <td className="p-3 text-accent font-bold">In-App Checkout</td>
                      <td className="p-3 text-accent font-bold">Active SLAs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Step 5: POV Statement */}
            <div>
              <h3 className="font-sans text-lg font-bold text-dark mb-3">Step 5: POV Statement</h3>
              <div className="bg-warm-bg/40 border border-warm-border p-5 rounded-2xl space-y-3 text-sm">
                <p>
                  <strong>User:</strong> Sarah, a health-conscious but vulnerable individual.
                </p>
                <p>
                  <strong>Needs:</strong> A guided, secure care experience that respects her privacy and time.
                </p>
                <p className="border-t border-warm-border/50 pt-3 text-dark/95">
                  <strong>Insight:</strong> Immediate login blocks and empty expert listings break the core trust loop. If a wellness platform acts like an extractive lead generator, users will abandon it before experiencing its therapeutic value.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ── STEP 4: IDEATE ── */}
        <section id="step-4" className="scroll-mt-24 mb-12">
          {/* Banner */}
          <div className="w-full bg-[#5E7ECB] rounded-t-3xl py-6 px-8 text-white flex items-center justify-between border-x border-t border-warm-border">
            <span className="font-sans text-xl md:text-2xl font-extrabold tracking-tight">4. Ideate</span>
            <span className="text-xs uppercase tracking-widest font-bold bg-white/20 px-3 py-1 rounded-full">Phase 4</span>
          </div>

          <div className="bg-white rounded-b-3xl border-x border-b border-warm-border p-6 md:p-10 shadow-sm space-y-8">
            
            {/* Step 1: HMW */}
            <div>
              <h3 className="font-sans text-lg font-bold text-dark mb-4">Step 1: How Might We (HMW) Questions</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-warm-border bg-white flex gap-3 shadow-3xs">
                  <div className="p-2 bg-accent/10 rounded-lg text-accent h-fit shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <p className="text-xs font-semibold text-dark leading-relaxed">
                    HMW let users explore self-care tools and therapist directories before forcing a login?
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-warm-border bg-white flex gap-3 shadow-3xs">
                  <div className="p-2 bg-accent/10 rounded-lg text-accent h-fit shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <p className="text-xs font-semibold text-dark leading-relaxed">
                    HMW unify the 13 apps so that a single account credentials work seamlessly across the brand?
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-warm-border bg-white flex gap-3 shadow-3xs">
                  <div className="p-2 bg-accent/10 rounded-lg text-accent h-fit shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <p className="text-xs font-semibold text-dark leading-relaxed">
                    HMW make expert directories, real availability, and pricing transparent from day one?
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-warm-border bg-white flex gap-3 shadow-3xs">
                  <div className="p-2 bg-accent/10 rounded-lg text-accent h-fit shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <p className="text-xs font-semibold text-dark leading-relaxed">
                    HMW make support feel reliable, safe, and responsive to user requests?
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2: Prioritization Matrix */}
            <div>
              <h3 className="font-sans text-lg font-bold text-dark mb-4">Step 2: Prioritization Matrix</h3>
              <p className="font-normal text-dark/80 mb-6">
                To balance user needs with engineering constraints, I mapped proposed features onto an **Importance vs. Difficulty** matrix to identify high-leverage items:
              </p>

              {/* 2x2 Grid */}
              <div className="border border-warm-border rounded-2xl overflow-hidden max-w-3xl mx-auto shadow-2xs">
                <div className="grid grid-cols-2 divide-x divide-warm-border border-b border-warm-border">
                  {/* Quadrant: Low ROI */}
                  <div className="p-5 bg-slate-50/40 text-xs min-h-[140px]">
                    <span className="font-bold text-slate-500 uppercase tracking-widest block mb-2.5">Low ROI</span>
                    <ul className="list-disc list-inside space-y-1 text-muted">
                      <li>Complete database merges</li>
                      <li>Custom chat app architectures</li>
                    </ul>
                  </div>

                  {/* Quadrant: Strategic */}
                  <div className="p-5 bg-emerald-50/20 text-xs min-h-[140px]">
                    <div className="flex justify-between items-center mb-2.5">
                      <span className="font-bold text-emerald-800 uppercase tracking-widest block">Strategic (The 20% Focus)</span>
                      <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-[8px] text-emerald-700 font-bold uppercase">Priority</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-emerald-900 font-semibold">
                      <li>Single Sign-On (SSO) Engine</li>
                      <li>In-App Native Payments (Apple/Google Pay)</li>
                      <li>Live Active Provider Directory</li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-2 divide-x divide-warm-border">
                  {/* Quadrant: Quick Wins */}
                  <div className="p-5 bg-blue-50/20 text-xs min-h-[140px]">
                    <span className="font-bold text-blue-800 uppercase tracking-widest block mb-2.5">Quick Wins</span>
                    <ul className="list-disc list-inside space-y-1 text-blue-900">
                      <li>Guest Mode / Delayed Signup</li>
                      <li>Visible Crisis Support Hotlinks</li>
                      <li>Empty-State Placeholder Cards</li>
                    </ul>
                  </div>

                  {/* Quadrant: High ROI */}
                  <div className="p-5 bg-amber-50/20 text-xs min-h-[140px]">
                    <span className="font-bold text-amber-800 uppercase tracking-widest block mb-2.5">High ROI</span>
                    <ul className="list-disc list-inside space-y-1 text-amber-900">
                      <li>Unified Onboarding Funnel</li>
                      <li>Layout bug fixes & crash patches</li>
                      <li>Typography & color harmony polish</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-xs text-muted italic text-center">
                * Our Core 20% Lever: SSO, Guest Onboarding, Active Directories, and Native Checkout yield 80% of the value.
              </div>
            </div>

          </div>
        </section>

        {/* ── STEP 5: PROTOTYPE ── */}
        <section id="step-5" className="scroll-mt-24 mb-12">
          {/* Banner */}
          <div className="w-full bg-[#5E7ECB] rounded-t-3xl py-6 px-8 text-white flex items-center justify-between border-x border-t border-warm-border">
            <span className="font-sans text-xl md:text-2xl font-extrabold tracking-tight">5. Prototype</span>
            <span className="text-xs uppercase tracking-widest font-bold bg-white/20 px-3 py-1 rounded-full">Phase 5</span>
          </div>

          <div className="bg-white rounded-b-3xl border-x border-b border-warm-border p-6 md:p-10 shadow-sm space-y-8">
            
            {/* Step 1: Sketching */}
            <div>
              <h3 className="font-sans text-lg font-bold text-dark mb-3">Step 1: Sketching (Pencil before Pixel)</h3>
              <p className="font-normal text-dark/80 mb-6">
                I started by drafting low-fidelity paper wireframes to map a simplified onboarding flow and active directory interfaces.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto my-6 text-xs">
                <div className="border border-dashed border-slate-300 rounded-xl p-5 bg-slate-50/30 flex flex-col justify-between aspect-[16/10]">
                  <div className="space-y-1.5">
                    <span className="font-bold text-dark">Onboarding Screen Sketch</span>
                    <div className="h-0.5 bg-slate-200" />
                  </div>
                  <div className="py-2 space-y-2">
                    <div className="text-center font-bold text-[10px] text-slate-500">[ Hi, let's start with your name ]</div>
                    <div className="border border-slate-300 rounded h-6 w-32 mx-auto bg-white flex items-center px-2 text-[9px] text-muted">John Doe</div>
                  </div>
                  <div className="flex justify-between items-center text-[9px]">
                    <span className="border border-slate-300 bg-white rounded px-2.5 py-0.5 font-bold">[ Next ]</span>
                    <span className="text-muted">(Skip and browse as Guest)</span>
                  </div>
                </div>

                <div className="border border-dashed border-slate-300 rounded-xl p-5 bg-slate-50/30 flex flex-col justify-between aspect-[16/10]">
                  <div className="space-y-1.5">
                    <span className="font-bold text-dark">Care Goals Screen Sketch</span>
                    <div className="h-0.5 bg-slate-200" />
                  </div>
                  <div className="py-2 space-y-1.5">
                    <div className="text-[10px] font-bold text-slate-500 text-center">[ What are your goals? ]</div>
                    <div className="grid grid-cols-2 gap-1 px-4">
                      <div className="border border-slate-300 rounded p-1 text-[8px] font-bold bg-white text-center">[ ] Sleep</div>
                      <div className="border border-slate-300 rounded p-1 text-[8px] font-bold bg-white text-center">[ ] Pain</div>
                      <div className="border border-slate-300 rounded p-1 text-[8px] font-bold bg-white text-center">[ ] Stress</div>
                      <div className="border border-slate-300 rounded p-1 text-[8px] font-bold bg-white text-center">[ ] Diet</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-[9px]">
                    <span className="border border-slate-300 bg-white rounded px-2.5 py-0.5 font-bold">[ Next ]</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Low-fidelity */}
            <div>
              <h3 className="font-sans text-lg font-bold text-dark mb-4">Step 2: Low-fidelity Wireframes</h3>
              <p className="font-normal text-dark/80 mb-6">
                Next, I mapped out the dual-onboarding flows to handle corporate B2B clients and retail B2C guests seamlessly:
              </p>

              {/* Onboarding Flow */}
              <div className="bg-warm-bg/40 border border-warm-border rounded-2xl p-5 max-w-xl mx-auto flex flex-col items-center gap-4 text-xs font-semibold">
                <div className="bg-white border border-warm-border rounded-lg px-4 py-2 text-center shadow-3xs">
                  Initial App Launch
                </div>
                <ChevronRight className="w-4 h-4 text-muted rotate-90" />
                <div className="text-center text-[10px] text-muted uppercase">Are you here through an employer?</div>
                <div className="flex gap-12">
                  <div className="flex flex-col items-center gap-2">
                    <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-100 text-[10px] font-bold">YES</span>
                    <ChevronRight className="w-4 h-4 text-muted rotate-90" />
                    <div className="bg-white border border-warm-border rounded px-3 py-1.5 text-center">
                      Validate Corporate Email
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted rotate-90" />
                    <div className="bg-white border border-warm-border rounded px-3 py-1.5 text-center bg-accent/5 border-accent/30 text-accent font-bold">
                      Unified Account Setup
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <span className="bg-slate-50 text-slate-700 px-2 py-0.5 rounded border border-slate-200 text-[10px] font-bold">NO</span>
                    <ChevronRight className="w-4 h-4 text-muted rotate-90" />
                    <div className="bg-white border border-warm-border rounded px-3 py-1.5 text-center">
                      Guest Mode Onboarding
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted rotate-90" />
                    <div className="bg-white border border-warm-border rounded px-3 py-1.5 text-center bg-accent/5 border-accent/30 text-accent font-bold">
                      Delayed Auth Milestones
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: High-fidelity */}
            <div>
              <h3 className="font-sans text-lg font-bold text-dark mb-4">Step 3: High-Fidelity Wireframes</h3>
              <p className="font-normal text-dark/80 mb-6">
                The high-fidelity UI layout was optimized for mobile screens, applying key design tokens (Raleway / Inter, soothing wellness palette with navy, mint, and sky blues).
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="border border-warm-border bg-white rounded-2xl p-5 shadow-3xs">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-1.5 bg-accent/15 rounded-lg text-accent shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-xs text-dark">1. Single Sign-On (SSO)</h4>
                  </div>
                  <p className="text-[11px] text-muted leading-relaxed">
                    Safely authenticates cross-app credentials instantly. Users are never locked out when installing brand sister applications.
                  </p>
                </div>

                <div className="border border-warm-border bg-white rounded-2xl p-5 shadow-3xs">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-1.5 bg-accent/15 rounded-lg text-accent shrink-0">
                      <UserCheck className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-xs text-dark">2. Active Directories</h4>
                  </div>
                  <p className="text-[11px] text-muted leading-relaxed">
                    Therapist profiles display credentials, real calendars, and clear hourly pricing with zero empty listing screens.
                  </p>
                </div>

                <div className="border border-warm-border bg-white rounded-2xl p-5 shadow-3xs">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-1.5 bg-accent/15 rounded-lg text-accent shrink-0">
                      <CreditCard className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-xs text-dark">3. Native In-App Payments</h4>
                  </div>
                  <p className="text-[11px] text-muted leading-relaxed">
                    Kicking users out to external browsers is removed. Users select packages and checkout securely using Apple/Google Pay in-app.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── STEP 6: TEST ── */}
        <section id="step-6" className="scroll-mt-24 mb-12">
          {/* Banner */}
          <div className="w-full bg-[#5E7ECB] rounded-t-3xl py-6 px-8 text-white flex items-center justify-between border-x border-t border-warm-border">
            <span className="font-sans text-xl md:text-2xl font-extrabold tracking-tight">6. Test & Success</span>
            <span className="text-xs uppercase tracking-widest font-bold bg-white/20 px-3 py-1 rounded-full">Phase 6</span>
          </div>

          <div className="bg-white rounded-b-3xl border-x border-b border-warm-border p-6 md:p-10 shadow-sm space-y-8">
            
            {/* Step 1: User testing */}
            <div>
              <h3 className="font-sans text-lg font-bold text-dark mb-4">Step 1: User Testing Feedback</h3>
              <p className="font-normal text-dark/80 mb-6">
                We tested the redesigned onboarding and checkout flows with two cohorts: existing users who previously faced database lockouts, and fresh first-time users.
              </p>

              {/* Sentiment chart */}
              <div className="bg-warm-bg/35 rounded-2xl border border-warm-border/60 p-6 max-w-md mx-auto my-6">
                <span className="text-[10px] font-bold text-muted uppercase tracking-wider block mb-4 text-center">User Testing Sentiment</span>
                <div className="flex h-7 rounded-lg overflow-hidden border border-warm-border">
                  <div className="bg-emerald-500 flex items-center justify-center text-[10px] font-bold text-white" style={{ width: "79%" }}>79% Great</div>
                  <div className="bg-amber-400 flex items-center justify-center text-[10px] font-bold text-slate-800" style={{ width: "14%" }}>14% Ok</div>
                  <div className="bg-rose-500 flex items-center justify-center text-[10px] font-bold text-white" style={{ width: "7%" }}>7%</div>
                </div>
                <div className="flex gap-4 justify-center items-center mt-3 text-[10px] text-muted">
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Intuitive & Secure</span>
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> Clear, Needs Content</span>
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-rose-500" /> Prefer Web</span>
                </div>
              </div>

              {/* Quote box */}
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl max-w-xl mx-auto my-6 text-xs text-muted">
                <p className="font-display italic text-sm text-dark/75 leading-relaxed">
                  "I understood what the app could do for me within 3 seconds, instead of being blocked by an immediate login screen. The therapist directory actually showed me real people, which made me feel much safer about booking a session."
                </p>
              </div>
            </div>

            {/* Success Metrics / KPIs */}
            <div>
              <h3 className="font-sans text-lg font-bold text-dark mb-4">Success Metrics & KPIs</h3>
              <p className="font-normal text-dark/80 mb-6">
                To track the real-world impact of the redesign, the product team monitors these key metrics:
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white border border-warm-border p-4.5 rounded-xl flex gap-3 shadow-3xs">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-xs text-dark block">Onboarding Activation Rate</span>
                    <p className="text-[11px] text-muted mt-1 leading-relaxed">
                      The percentage of users successfully completing goals and landing on the dashboard (Target: +35% improvement).
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-warm-border p-4.5 rounded-xl flex gap-3 shadow-3xs">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-xs text-dark block">Time-to-Value (TTV)</span>
                    <p className="text-[11px] text-muted mt-1 leading-relaxed">
                      The duration from launching the app to completing a self-care exercise or viewing a therapist profile.
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-warm-border p-4.5 rounded-xl flex gap-3 shadow-3xs">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-xs text-dark block">Checkout Success Rate</span>
                    <p className="text-[11px] text-muted mt-1 leading-relaxed">
                      Reduction in booking drop-offs by replacing unvetted browser redirects with native payment cards.
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-warm-border p-4.5 rounded-xl flex gap-3 shadow-3xs">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-xs text-dark block">Ecosystem Retention Rate</span>
                    <p className="text-[11px] text-muted mt-1 leading-relaxed">
                      The percentage of users utilizing multiple specialized brand apps under the same unified SSO credentials.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Final result before/after */}
            <div>
              <h3 className="font-sans text-lg font-bold text-dark mb-4">Final Result: Current vs Redesigned</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-rose-200 bg-rose-50/10 rounded-2xl p-5 text-xs">
                  <span className="font-bold text-rose-800 uppercase tracking-wider block mb-3">Current Version</span>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-2 text-rose-700">
                      <X className="w-4 h-4 shrink-0 mt-0.5" />
                      <div>
                        <strong>Gmail Login Mandatory:</strong> Intrusive login gates prevent browsing and cause account database conflict errors.
                      </div>
                    </li>
                    <li className="flex items-start gap-2 text-rose-700">
                      <X className="w-4 h-4 shrink-0 mt-0.5" />
                      <div>
                        <strong>Empty Expert Lists:</strong> Directories show "No providers found", breaking onboarding trust.
                      </div>
                    </li>
                    <li className="flex items-start gap-2 text-rose-700">
                      <X className="w-4 h-4 shrink-0 mt-0.5" />
                      <div>
                        <strong>Web Payment Redirect:</strong> Kick users out to unvetted external web pages for credit card inputs.
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="border border-emerald-200 bg-emerald-50/10 rounded-2xl p-5 text-xs">
                  <span className="font-bold text-emerald-800 uppercase tracking-wider block mb-3">Redesigned Version</span>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-2 text-emerald-700">
                      <Check className="w-4 h-4 shrink-0 mt-0.5 stroke-[2.5]" />
                      <div>
                        <strong>Guest Mode Enabled:</strong> Immediate exploration allowed, asking for name/goals, deferring signup walls.
                      </div>
                    </li>
                    <li className="flex items-start gap-2 text-emerald-700">
                      <Check className="w-4 h-4 shrink-0 mt-0.5 stroke-[2.5]" />
                      <div>
                        <strong>Active Directory Profiles:</strong> Real bios, credentials, calendars, and upfront pricing cards displayed.
                      </div>
                    </li>
                    <li className="flex items-start gap-2 text-emerald-700">
                      <Check className="w-4 h-4 shrink-0 mt-0.5 stroke-[2.5]" />
                      <div>
                        <strong>Native In-App Checkout:</strong> Secure booking and transactions via Google/Apple Pay.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Self reflection */}
            <div className="border-t border-warm-border/50 pt-8">
              <h3 className="font-sans text-lg font-bold text-dark mb-4">Key Takeaways & Learnings</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-50/50 p-4.5 rounded-xl border border-warm-border text-xs">
                  <span className="font-bold text-dark block mb-2">Customer Centricity</span>
                  <p className="text-muted leading-relaxed font-normal">
                    Improving a product is rarely about adding a long list of features. More often, it is about identifying and removing the friction, errors, and unhelpful constraints that stand between the user and value.
                  </p>
                </div>
                <div className="bg-slate-50/50 p-4.5 rounded-xl border border-warm-border text-xs">
                  <span className="font-bold text-dark block mb-2">System-First Design</span>
                  <p className="text-muted leading-relaxed font-normal">
                    UX is not merely a visual layer. If databases are siloed and support loops are broken, even the most beautiful layout fails. Product managers must design the system first, and screens second.
                  </p>
                </div>
                <div className="bg-slate-50/50 p-4.5 rounded-xl border border-warm-border text-xs">
                  <span className="font-bold text-dark block mb-2">Managing PM Trade-offs</span>
                  <p className="text-muted leading-relaxed font-normal">
                    In an ideal world, we would merge all 13 apps. But considering keyword traffic and engineering timelines, an SSO engine is far more pragmatic. Focus on the 20% that delivers 80% of the value.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Recruiter CTA */}
        <div className="mt-16 pt-12 border-t border-warm-border text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted mb-4">
            Like how I think? Let's connect.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:ujjavalbhardwaj6@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-white font-medium hover:bg-accent-hover transition-custom shadow-xs text-sm"
            >
              Email Ujjaval
            </a>
            <a
              href="https://www.linkedin.com/in/ujjaval-bhardwaj"
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
