"use client";
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
import { motion } from "motion/react";

import ScrollReveal from "@/components/ScrollReveal";

export default function MantraCareCaseStudy({ project }: { project: CaseStudy }) {
  return (
    <article className="min-h-screen pt-36 pb-20 md:pt-44">

      <div className="w-full">

        {/* ── HEADER ── */}
        <header className="border-b border-warm-border pb-8 mb-12">
          <h1 className="element mb-6">
            {project.title}
          </h1>

          <p className="text-xl md:text-2xl text-accent font-semibold mb-6 leading-relaxed">
            {project.oneLiner}
          </p>

        </header>

        {/* Case Study Mockup Image Banner */}
        <div className="relative w-full overflow-hidden rounded-2xl border-0 sm:border border-warm-border bg-transparent sm:bg-warm-bg mb-6 md:mb-12 flex justify-center">
          <img 
            src="/images/mantracare-rebuild.png?v=3"
            alt="MantraCare Product Redesign Mockup"
            className="w-full h-auto max-h-[360px] sm:max-h-[550px] md:max-h-[720px] object-contain filter saturate-[1.02]"
          />
        </div>

        {/* ── CONTENT SECTIONS ── */}
        <div className="mt-16 space-y-16 md:space-y-24">

          {/* ── SECTION 1: WHERE IT STARTED ── */}
          <section id="where-it-started" className="scroll-mt-24 pt-12 border-t border-warm-border/50">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
              <div className="w-full md:w-[22%] shrink-0 self-start">
                <span className="section-label block">01. Where It Started</span>
              </div>
              <div className="w-full md:w-[78%] space-y-6">
                <ScrollReveal variant="focus-fade">
                  <p className="font-normal text-dark/85 leading-relaxed text-sm mb-4">
                    The problem didn't start with data. It started with frustration.
                  </p>
                  <p className="font-normal text-muted leading-relaxed mb-4">
                    I was evaluating MantraCare as a potential user — someone looking for a therapist, trying to understand what was available and what it would cost. I couldn't get there. A login wall appeared before I could see anything. When I created an account and tried a sister app, my credentials didn't work. When I finally got through, the provider directory was empty. I closed the app.
                  </p>
                  <p className="font-normal text-muted leading-relaxed">
                    That experience is what the research confirmed. It wasn't an edge case.
                  </p>
                </ScrollReveal>
                
                <div className="bg-warm-bg/25 border-l-2 border-accent pl-6 py-4 my-6 text-xs text-muted">
                  <p className="font-normal text-dark/80 leading-relaxed">
                    MantraCare is a digital health ecosystem connecting users to therapists, health coaches, and chronic care providers across <strong className="text-accent font-semibold">13 specialized apps</strong> under the same brand. Strong acquisition spend, near-zero conversion. The question wasn't whether the product had problems — it was which ones were causing the most damage and whether they could be fixed without rebuilding everything.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION 2: INITIAL ASSUMPTIONS ── */}
          <section id="assumptions" className="scroll-mt-24 pt-12 border-t border-warm-border/50">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
              <div className="w-full md:w-[22%] shrink-0 self-start">
                <span className="section-label block">02. Initial Assumptions</span>
              </div>
              <div className="w-full md:w-[78%] space-y-8 text-xs">
                <ScrollReveal variant="focus-fade">
                  <h3 className="font-sans text-lg font-bold text-accent mb-4">What I Assumed Going In (And What the Research Did to Those Assumptions)</h3>
                  <p className="font-normal text-muted mb-6">
                    Before running any formal research, I had three hypotheses:
                  </p>
                </ScrollReveal>

                <div className="overflow-x-auto py-2">
                  <table className="w-full text-left border-collapse text-xs md:text-sm">
                    <thead>
                      <tr className="border-b border-warm-border text-dark/50 uppercase text-[10px] tracking-wider">
                        <th className="py-2.5 font-bold">Hypothesis</th>
                        <th className="py-2.5 font-bold">Prediction</th>
                        <th className="py-2.5 font-bold text-right">Result</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-warm-border/30 text-dark/80">
                      <tr className="hover:bg-slate-50/20 transition-colors duration-150">
                        <td className="py-3 font-semibold text-dark">H1 · Onboarding Gate</td>
                        <td className="py-3 text-muted">Mandatory login wall causes main drop-off.</td>
                        <td className="py-3 text-right font-medium text-accent">✓ Confirmed (20% activation)</td>
                      </tr>
                      <tr className="hover:bg-slate-50/20 transition-colors duration-150">
                        <td className="py-3 font-semibold text-dark">H2 · Auth Silos</td>
                        <td className="py-3 text-muted">Separated app credentials lock users out.</td>
                        <td className="py-3 text-right font-medium text-accent">✓ Confirmed (6 of 13 apps)</td>
                      </tr>
                      <tr className="hover:bg-slate-50/20 transition-colors duration-150">
                        <td className="py-3 font-semibold text-dark">H3 · Hidden Directory</td>
                        <td className="py-3 text-muted">Empty directories destroy initial user trust.</td>
                        <td className="py-3 text-right font-medium text-accent">✓ Confirmed (verified in audits)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="font-normal text-muted leading-relaxed">
                  H2 was the one I wasn't sure about going in. I expected some friction between apps. What I found was systematic: the 13 apps had no shared authentication layer. A user who signed up in one app would hit credential conflicts in another. Not occasionally. Every time.
                </p>
              </div>
            </div>
          </section>

          {/* ── SECTION 3: THE RESEARCH ── */}
          <section id="the-research" className="scroll-mt-24 pt-12 border-t border-warm-border/50">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
              <div className="w-full md:w-[22%] shrink-0 self-start">
                <span className="section-label block">03. The Research</span>
              </div>
              <div className="w-full md:w-[78%] space-y-8 text-xs">
                <div className="border-y border-warm-border/50 py-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-accent block mb-4">Sources Used</span>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-warm-bg/20 p-4 rounded-xl">
                      <span className="text-xs font-bold text-dark block mb-1">100+ Reviews</span>
                      <span className="text-[10px] text-muted">Google Play Store reviews mined for recurring friction patterns.</span>
                    </div>
                    <div className="bg-warm-bg/20 p-4 rounded-xl">
                      <span className="text-xs font-bold text-dark block mb-1">Product Audit</span>
                      <span className="text-[10px] text-muted">Hands-on walkthrough across the MantraCare ecosystem.</span>
                    </div>
                    <div className="bg-warm-bg/20 p-4 rounded-xl">
                      <span className="text-xs font-bold text-dark block mb-1">Credential Testing</span>
                      <span className="text-[10px] text-muted">Cross-app credential validation across all 13 sister apps.</span>
                    </div>
                    <div className="bg-warm-bg/20 p-4 rounded-xl">
                      <span className="text-xs font-bold text-dark block mb-1">Competitor Bench</span>
                      <span className="text-[10px] text-muted">Deep analysis benchmarking against Wysa's experience.</span>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-7 space-y-6">
                    <h3 className="font-sans text-lg font-bold text-accent mb-3">What the Competitive Analysis Revealed</h3>
                    <p className="font-normal text-muted mb-4">
                      The pattern was consistent: Wysa lets you experience value before asking for anything. MantraCare asks for commitment — login, then payment — before showing you anything worth committing to. That ordering is the problem.
                    </p>

                    {/* Benchmarking Table */}
                    <div className="overflow-x-auto py-2">
                      <table className="w-full text-left border-collapse text-xs md:text-sm">
                        <thead>
                          <tr className="border-b border-warm-border text-dark/50 uppercase text-[10px] tracking-wider">
                            <th className="py-2.5 font-bold">Friction Point</th>
                            <th className="py-2.5 font-bold">Wysa</th>
                            <th className="py-2.5 font-bold">MantraCare</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-warm-border/30 text-dark/80">
                          <tr className="hover:bg-slate-50/20 transition-colors duration-150">
                            <td className="py-3 font-semibold text-dark">First Screen</td>
                            <td className="py-3 text-muted">Anonymous nickname</td>
                            <td className="py-3 text-muted">Mandatory login</td>
                          </tr>
                          <tr className="hover:bg-slate-50/20 transition-colors duration-150">
                            <td className="py-3 font-semibold text-dark">Trust Signals</td>
                            <td className="py-3 text-muted">Free exploration</td>
                            <td className="py-3 text-muted">Paywall first</td>
                          </tr>
                          <tr className="hover:bg-slate-50/20 transition-colors duration-150">
                            <td className="py-3 font-semibold text-dark">Ecosystem</td>
                            <td className="py-3 text-muted">Unified platform</td>
                            <td className="py-3 text-muted">13 siloed apps</td>
                          </tr>
                          <tr className="hover:bg-slate-50/20 transition-colors duration-150">
                            <td className="py-3 font-semibold text-dark">Crisis Route</td>
                            <td className="py-3 text-muted">Visible helpline</td>
                            <td className="py-3 text-muted">Hidden</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Play Store Reviews Screenshot */}
                  <div className="md:col-span-5 space-y-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent block">Customer Pain Signals</span>
                    <div className="relative overflow-hidden rounded-2xl flex justify-center bg-transparent">
                      <img 
                        src="/images/review.jpeg"
                        alt="MantraCare Google Play Store Customer Reviews"
                        className="w-full h-auto object-contain rounded-xl max-h-[380px] filter saturate-[1.02] mix-blend-multiply"
                      />
                    </div>
                    <span className="text-[9px] text-muted block text-center leading-normal">
                      Play Store reviews showing friction around billing, credential lockout, and empty directories.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION 4: WHAT WAS ACTUALLY BREAKING ── */}
          <section id="what-was-breaking" className="scroll-mt-24 pt-12 border-t border-warm-border/50">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
              <div className="w-full md:w-[22%] shrink-0 self-start">
                <span className="section-label block">04. What Was Breaking</span>
              </div>
              <div className="w-full md:w-[78%] space-y-8 text-xs">
                <ScrollReveal variant="focus-fade">
                  <p className="font-normal text-muted leading-relaxed mb-6">
                    The core issue wasn't missing features. It was a system designed in the wrong sequence.
                  </p>
                </ScrollReveal>

                <div>
                  <h4 className="font-sans text-sm font-bold text-accent mb-3">Funnel breakdown (AARRR)</h4>
                  
                  {/* Funnel Table */}
                  <div className="overflow-x-auto py-2">
                    <table className="w-full text-left border-collapse text-xs md:text-sm">
                      <thead>
                        <tr className="border-b border-warm-border text-dark/50 uppercase text-[10px] tracking-wider">
                          <th className="py-2.5 font-bold">Funnel Stage</th>
                          <th className="py-2.5 font-bold">Conversion</th>
                          <th className="py-2.5 font-bold">Primary Cause</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-warm-border/30 text-dark/80">
                        <tr className="hover:bg-slate-50/20 transition-colors duration-150">
                          <td className="py-3 font-semibold text-dark">1. Acquisition</td>
                          <td className="py-3 font-mono">100%</td>
                          <td className="py-3 text-muted">Multi-app advertising spend</td>
                        </tr>
                        <tr className="hover:bg-slate-50/20 transition-colors duration-150">
                          <td className="py-3 font-semibold text-dark">2. Activation</td>
                          <td className="py-3 font-mono font-bold text-dark/80">~20%</td>
                          <td className="py-3 text-muted">Mandatory login wall at first launch</td>
                        </tr>
                        <tr className="hover:bg-slate-50/20 transition-colors duration-150">
                          <td className="py-3 font-semibold text-dark">3. Retention</td>
                          <td className="py-3 font-mono font-bold text-dark/80">~10%</td>
                          <td className="py-3 text-muted">Empty provider directory after logging in</td>
                        </tr>
                        <tr className="hover:bg-slate-50/20 transition-colors duration-150">
                          <td className="py-3 font-semibold text-dark">4. Revenue</td>
                          <td className="py-3 font-mono">~2%</td>
                          <td className="py-3 text-muted">Redirecting users to external checkout sites</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="font-sans text-sm font-bold text-accent mb-3">Journey Breakdown</h4>
                  <p className="font-normal text-muted mb-4">
                    The intended journey was simple:
                  </p>
                  
                  <div className="bg-warm-bg/25 rounded-xl p-4 flex items-center justify-center gap-2 text-xs font-bold text-dark/80 mb-6 max-w-lg mx-auto">
                    <span>Open App</span>
                    <ArrowRight className="w-4 h-4 text-accent" />
                    <span>Explore Care</span>
                    <ArrowRight className="w-4 h-4 text-accent" />
                    <span>Book Session</span>
                  </div>

                  <p className="font-normal text-muted mb-4">
                    In reality, users encountered friction at multiple stages:
                  </p>

                  <div className="bg-warm-bg/25 rounded-xl p-4 flex flex-wrap items-center justify-center gap-2 text-xs font-bold text-dark/60 mb-6 max-w-xl mx-auto">
                    <span>Mandatory Login</span>
                    <ArrowRight className="w-4 h-4 text-muted" />
                    <span>Credential Conflict</span>
                    <ArrowRight className="w-4 h-4 text-muted" />
                    <span>Empty Directory</span>
                    <ArrowRight className="w-4 h-4 text-muted" />
                    <span>External Checkout</span>
                    <ArrowRight className="w-4 h-4 text-muted" />
                    <span>Drop Off</span>
                  </div>
                </div>

                <div className="mb-8">
                  <span className="font-bold text-accent block mb-3 text-sm">Customer Journey Map</span>
                  <div className="flex justify-center bg-transparent">
                    <img 
                      src="/images/customer%20journey.png"
                      alt="Customer Journey Map"
                      className="w-full h-auto max-h-[280px] sm:max-h-[380px] md:max-h-[460px] object-contain filter saturate-[1.02]"
                    />
                  </div>
                </div>

                <p className="font-normal text-muted mb-6">
                  Each failure compounded the next. A user who got through the login wall still hit an empty directory. A user who found a provider still got redirected to a browser to pay. Every step that should have built confidence destroyed it instead.
                </p>
              </div>
            </div>
          </section>

          {/* ── SECTION 5: PRIORITIZATION ── */}
          <section id="prioritization" className="scroll-mt-24 pt-12 border-t border-warm-border/50">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
              <div className="w-full md:w-[22%] shrink-0 self-start">
                <span className="section-label block">05. Prioritization</span>
              </div>
              <div className="w-full md:w-[78%] space-y-8 text-xs">
                <ScrollReveal variant="focus-fade">
                  <h3 className="font-sans text-lg font-bold text-accent mb-4">What I Chose to Fix — And What I Deliberately Didn't</h3>
                  <p className="font-normal text-muted leading-relaxed mb-6">
                    The audit surfaced 20+ potential improvements. I used an impact vs. effort matrix to cut to the highest-leverage opportunities, evaluated against four criteria: impact on activation, ability to rebuild trust, engineering complexity, and speed to ship.
                  </p>
                </ScrollReveal>

                <div>
                  <h4 className="font-sans text-sm font-bold text-accent mb-3">Four initiatives made the cut:</h4>
                  
                  <div className="overflow-x-auto py-2">
                    <table className="w-full text-left border-collapse text-xs md:text-sm">
                      <thead>
                        <tr className="border-b border-warm-border text-dark/50 uppercase text-[10px] tracking-wider">
                          <th className="py-2.5 font-bold">Initiative</th>
                          <th className="py-2.5 font-bold">Focus</th>
                          <th className="py-2.5 font-bold">Impact Details</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-warm-border/30 text-dark/80">
                        <tr className="hover:bg-slate-50/20 transition-colors duration-150">
                          <td className="py-3 font-semibold text-dark">Guest Mode</td>
                          <td className="py-3 text-muted">Bypass login gate</td>
                          <td className="py-3 text-muted">Browse provider directory before signup prompt</td>
                        </tr>
                        <tr className="hover:bg-slate-50/20 transition-colors duration-150">
                          <td className="py-3 font-semibold text-dark">Single Sign-On (SSO)</td>
                          <td className="py-3 text-muted">Unify authentication</td>
                          <td className="py-3 text-muted">One shared login works across all 13 sister apps</td>
                        </tr>
                        <tr className="hover:bg-slate-50/20 transition-colors duration-150">
                          <td className="py-3 font-semibold text-dark">Live Directories</td>
                          <td className="py-3 text-muted">Visible provider profiles</td>
                          <td className="py-3 text-muted">Transparency in availability, qualifications, and pricing</td>
                        </tr>
                        <tr className="hover:bg-slate-50/20 transition-colors duration-150">
                          <td className="py-3 font-semibold text-dark">In-App Checkout</td>
                          <td className="py-3 text-muted">Native payment sheet</td>
                          <td className="py-3 text-muted">Eliminates redirect loops to external web pages</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-warm-bg/20 p-5 rounded-2xl">
                  <h3 className="font-sans text-sm font-bold text-accent mb-3">What was explicitly deprioritized</h3>
                  <ul className="list-disc list-inside space-y-2.5 text-muted font-normal">
                    <li>
                      <strong className="text-dark font-medium">Full platform consolidation (13 apps → 1):</strong> Right answer architecturally, wrong answer right now. Would require months of backend restructuring and delay any impact.
                    </li>
                    <li>
                      <strong className="text-dark font-medium">Custom in-app chat:</strong> High complexity, low direct effect on activation.
                    </li>
                    <li>
                      <strong className="text-dark font-medium">UI polish:</strong> Not the problem. The system is broken underneath the interface.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION 6: THE STRATEGY ── */}
          <section id="the-strategy" className="scroll-mt-24 pt-12 border-t border-warm-border/50">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
              <div className="w-full md:w-[22%] shrink-0 self-start">
                <span className="section-label block">06. The Strategy</span>
              </div>
              <div className="w-full md:w-[78%] space-y-8 text-xs">
                <ScrollReveal variant="focus-fade">
                  <p className="font-normal text-muted leading-relaxed mb-6">
                    Rather than redesigning the platform, the strategy fixed the sequence: give users something to trust before asking them for anything.
                  </p>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-warm-bg/20 p-5 rounded-2xl">
                    <span className="font-bold text-accent block mb-2 text-sm">1. Guest Mode — remove the gate</span>
                    <p className="text-muted leading-relaxed font-normal">
                      Users browse providers, read credentials, and explore care options before any account is required. Signup appears only after a meaningful interaction, when the user has already decided they want to continue.
                    </p>
                  </div>

                  <div className="bg-warm-bg/20 p-5 rounded-2xl">
                    <span className="font-bold text-accent block mb-2 text-sm">2. SSO — unify the ecosystem</span>
                    <p className="text-muted leading-relaxed font-normal">
                      One account works across all 13 apps. No duplicate signups, no lockout loops, no credential conflicts. Users moving between MantraCare's apps feel continuity rather than friction.
                    </p>
                  </div>

                  <div className="bg-warm-bg/20 p-5 rounded-2xl">
                    <span className="font-bold text-accent block mb-2 text-sm">3. Live Provider Directories — show the product</span>
                    <p className="text-muted leading-relaxed font-normal">
                      Every provider profile displays verified credentials, real-time availability, and transparent pricing. The directory is never empty. Users can evaluate their options before they're asked to pay.
                    </p>
                  </div>

                  <div className="bg-warm-bg/20 p-5 rounded-2xl">
                    <span className="font-bold text-accent block mb-2 text-sm">4. Native In-App Checkout — close the loop</span>
                    <p className="text-muted leading-relaxed font-normal">
                      Replace the external browser redirect with Apple Pay / Google Pay in-app. The booking moment stays inside the product, where trust already exists.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-sans text-lg font-bold text-accent mb-4">User Routing</h3>
                  <p className="font-normal text-muted mb-6">
                    B2B users need verification upfront — employer benefits and insurance eligibility require it. Applying that same gate to B2C users was a mistake with no compliance justification. The dual-routing approach separates those two problems:
                  </p>

                  {/* Dual Routing Flow Diagram */}
                  <div className="relative w-full overflow-hidden rounded-2xl flex justify-center bg-transparent mt-6 max-w-xl mx-auto">
                    <img 
                      src="/images/app%20flow%20miro.jpg"
                      alt="User Dual-Routing Miro App Flow"
                      className="w-full h-auto object-contain rounded-xl max-h-[500px] filter saturate-[1.02] mix-blend-multiply"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION 7: SECOND-ORDER THINKING ── */}
          <section id="second-order-thinking" className="scroll-mt-24 pt-12 border-t border-warm-border/50">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
              <div className="w-full md:w-[22%] shrink-0 self-start">
                <span className="section-label block">07. Second-Order Thinking</span>
              </div>
              <div className="w-full md:w-[78%] space-y-8 text-xs">
                <ScrollReveal variant="focus-fade">
                  <p className="font-normal text-muted leading-relaxed mb-6">
                    Fixing activation has downstream effects worth thinking through before shipping:
                  </p>
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-5 rounded-2xl flex flex-col justify-between shadow-2xs hover:shadow-xs transition-all duration-300">
                    <div>
                      <div className="p-2 bg-slate-50 rounded-lg w-fit mb-3">
                        <Layers className="w-4 h-4 text-slate-700" />
                      </div>
                      <span className="font-bold text-dark block mb-2 text-xs">1. Infrastructure Scaling</span>
                      <p className="text-muted leading-relaxed font-normal">
                        If guest mode works, <strong className="text-accent">anonymous browse sessions increase significantly</strong> which means the system needs to handle unauthenticated state gracefully across all 13 apps, not just the entry point. That's an infrastructure consideration that has to be scoped before the feature ships.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-2xl flex flex-col justify-between shadow-2xs hover:shadow-xs transition-all duration-300">
                    <div>
                      <div className="p-2 bg-slate-50 rounded-lg w-fit mb-3">
                        <UserCheck className="w-4 h-4 text-slate-700" />
                      </div>
                      <span className="font-bold text-dark block mb-2 text-xs">2. Recommendation Logic</span>
                      <p className="text-muted leading-relaxed font-normal">
                        If SSO works and cross-app movement increases, <strong className="text-accent">provider matching and recommendation logic needs to account for users spanning multiple care verticals</strong>. A user who uses the therapy app and the fitness app is a different user than one who only uses one. The current system has no model for that.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-2xl flex flex-col justify-between shadow-2xs hover:shadow-xs transition-all duration-300">
                    <div>
                      <div className="p-2 bg-slate-50 rounded-lg w-fit mb-3">
                        <Activity className="w-4 h-4 text-slate-700" />
                      </div>
                      <span className="font-bold text-dark block mb-2 text-xs">3. Supply Constraint Risks</span>
                      <p className="text-muted leading-relaxed font-normal">
                        If AOV increases from better provider discovery, <strong className="text-accent">the pressure on provider supply grows</strong>. Empty directories were partly a trust design problem, but they were also partly a real supply problem. Fixing the visibility layer doesn't fix supply — and if demand increases faster than supply, the trust problem returns through a different mechanism.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION 8: METRICS ── */}
          <section id="metrics" className="scroll-mt-24 pt-12 border-t border-warm-border/50">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
              <div className="w-full md:w-[22%] shrink-0 self-start">
                <span className="section-label block">08. Metrics</span>
              </div>
              <div className="w-full md:w-[78%] space-y-8 text-xs">

                <div className="bg-warm-bg/30 p-5 rounded-2xl">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-accent block mb-2">North Star Metric</span>
                  <h4 className="font-sans text-base font-bold text-accent mb-2">Activation Rate</h4>
                  <p className="text-xs font-normal text-muted leading-relaxed">
                    The percentage of users who successfully progress from app launch to discovering care providers or engaging with a health service.
                  </p>
                </div>

                <div>
                  <div className="overflow-x-auto py-2">
                    <table className="w-full text-left border-collapse text-xs md:text-sm">
                      <thead>
                        <tr className="border-b border-warm-border text-dark/50 uppercase text-[10px] tracking-wider">
                          <th className="py-2.5 font-bold">Level</th>
                          <th className="py-2.5 font-bold">Metric</th>
                          <th className="py-2.5 font-bold">Tracks</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-warm-border/30 text-dark/80">
                        <tr className="hover:bg-slate-50/20 transition-colors duration-150">
                          <td className="py-3 font-semibold text-dark">North Star</td>
                          <td className="py-3 font-semibold text-dark">Activation rate</td>
                          <td className="py-3 text-muted">Users discovering a provider on first launch</td>
                        </tr>
                        <tr className="hover:bg-slate-50/20 transition-colors duration-150">
                          <td className="py-3 font-semibold text-dark">L1 Metric</td>
                          <td className="py-3 text-muted">Time-to-Value (TTV)</td>
                          <td className="py-3 text-muted">Seconds taken to reach a provider listing</td>
                        </tr>
                        <tr className="hover:bg-slate-50/20 transition-colors duration-150">
                          <td className="py-3 font-semibold text-dark">L1 Metric</td>
                          <td className="py-3 text-muted">Checkout completion</td>
                          <td className="py-3 text-muted">Conversion at the booking payment sheet</td>
                        </tr>
                        <tr className="hover:bg-slate-50/20 transition-colors duration-150">
                          <td className="py-3 font-semibold text-dark">L2 Metric</td>
                          <td className="py-3 text-muted">Cross-app session rate</td>
                          <td className="py-3 text-muted">SSO activity across MantraCare verticals</td>
                        </tr>
                        <tr className="hover:bg-slate-50/20 transition-colors duration-150">
                          <td className="py-3 font-semibold text-dark">L2 Metric</td>
                          <td className="py-3 text-muted">Directory view rate</td>
                          <td className="py-3 text-muted">Search interactions in Guest Mode</td>
                        </tr>
                        <tr className="hover:bg-slate-50/20 transition-colors duration-150">
                          <td className="py-3 font-semibold text-accent">Guardrail</td>
                          <td className="py-3 text-muted">B2B verification rate</td>
                          <td className="py-3 text-muted">Employer compliance validation checks</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-warm-bg/25 text-muted font-normal px-4 py-3 rounded-xl">
                  <span className="font-bold block mb-1 text-[10px] text-accent uppercase tracking-widest">Why the Guardrail Metric Matters</span>
                  <p className="leading-relaxed">
                    The guardrail metric matters. Guest mode is only the right call if B2B verification still completes reliably. If the dual-routing logic fails and B2B users slip through without verification, that's a compliance and business risk, not just a UX problem.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION 9: VALIDATION ── */}
          <section id="validation" className="scroll-mt-24 pt-12 border-t border-warm-border/50">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
              <div className="w-full md:w-[22%] shrink-0 self-start">
                <span className="section-label block">09. Validation</span>
              </div>
              <div className="w-full md:w-[78%] space-y-12 text-xs">
                <ScrollReveal variant="focus-fade">
                  <p className="font-normal text-muted leading-relaxed">
                    Tested with users who had previously experienced access issues and with first-time users unfamiliar with the platform.
                  </p>
                  <p className="text-sm font-semibold text-accent mt-2">
                    79% positive &middot; 14% neutral &middot; 7% friction
                  </p>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-10 md:gap-14">
                  {/* Left Column: Metric */}
                  <div className="space-y-5">
                    <div className="space-y-1.5">
                      <span className="text-5xl md:text-6xl font-sans font-bold text-accent tracking-tight block">79%</span>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-dark block">Positive Sentiment</span>
                    </div>
                    
                    <p className="text-muted leading-relaxed font-normal">
                      Tested users reported immediate comprehension of the value proposition, citing the removal of the mandatory login gate as the primary driver of trust.
                    </p>

                    {/* Sentiment Chart */}
                    <div className="space-y-2 pt-2">
                      <div className="flex h-1.5 w-full rounded-full overflow-hidden bg-slate-100">
                        <div className="bg-accent" style={{ width: "79%" }} />
                        <div className="bg-slate-300" style={{ width: "14%" }} />
                        <div className="bg-slate-200" style={{ width: "7%" }} />
                      </div>
                      <div className="flex justify-between text-[10px] text-muted/80">
                        <span>79% Positive</span>
                        <span>14% Neutral</span>
                        <span>7% Friction</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Quote + Addressal */}
                  <div className="flex flex-col justify-between space-y-6 md:space-y-0">
                    <div className="py-2">
                      <p className="font-sans text-dark/75 text-sm md:text-base leading-relaxed italic font-medium">
                        "I understood what the app could do for me within seconds instead of being blocked by a login screen. Seeing real provider profiles made the platform feel much more trustworthy."
                      </p>
                    </div>
                    
                    <div className="pt-4 border-t border-warm-border/50 text-[11px] text-muted/90 leading-relaxed">
                      The 7% who found Guest Mode disorienting expected a login gate resolved by adding a soft secondary signup option alongside the directory.
                    </div>
                  </div>
                </div>

                {/* Before vs After Image */}
                <div className="mt-10 border-t border-warm-border/30 pt-8">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent block mb-4">Before vs After Flow Comparison</span>
                  <div className="flex justify-center bg-transparent">
                    <img 
                      src="/images/before%20vs%20after.png"
                      alt="Before vs After Redesign Flow Comparison"
                      className="w-full h-auto max-h-[240px] sm:max-h-[350px] md:max-h-[440px] object-contain filter saturate-[1.02]"
                    />
                  </div>
                </div>


              </div>
            </div>
          </section>

          {/* ── SECTION 10: WHAT THIS TAUGHT ME ── */}
          <section id="learnings" className="scroll-mt-24 pt-12 border-t border-warm-border/50">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
              <div className="w-full md:w-[22%] shrink-0 self-start">
                <span className="section-label block">10. What This Taught Me</span>
              </div>
              <div className="w-full md:w-[78%] text-xs">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <span className="font-bold text-accent block mb-2 text-sm">Resequencing Beats Adding Features</span>
                    <p className="text-muted leading-relaxed font-normal">
                      The biggest blocker wasn't a missing feature; it was a bad user sequence. MantraCare had providers and checkout systems, but forced users to sign up and pay before seeing any value. Moving the core value delivery (directory browsing) before the signup wall resolved the friction without writing new code.
                    </p>
                  </div>
                  <div>
                    <span className="font-bold text-accent block mb-2 text-sm">System Architecture Dictates UX</span>
                    <p className="text-muted leading-relaxed font-normal">
                      UX issues are often database issues. Running 13 brand apps with siloed databases caused credential conflicts that no UI redesign could fix. To build trust, we had to fix the infrastructure layer by defining Single Sign-On (SSO) requirements, ensuring a single user identity across the ecosystem.
                    </p>
                  </div>
                  <div>
                    <span className="font-bold text-accent block mb-2 text-sm">Pragmatism Over Perfection</span>
                    <p className="text-muted leading-relaxed font-normal">
                      The hardest part was choosing what not to build. Consolidating 13 apps into one was the ideal engineering path, but it would take months. Delivering a shared SSO layer first solved the user lockout problem in weeks. Launching a fast, high-impact partial solution beats waiting for a perfect, late one.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>

      </div>
    </article>
  );
}
