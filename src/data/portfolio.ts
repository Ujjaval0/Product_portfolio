import portfolioData from "./portfolio.json";

export interface CaseStudy {
  slug: string;
  title: string;
  oneLiner: string;
  outcomePunch: string;
  subtitle: string;
  description: string;
  tags: string[];
  skills: string[];
  links: {
    prd?: string;
    live?: string;
    github?: string;
    note?: string;
  };
  // Section 2: Problem Statement
  problem: string;
  problemUser: string;
  problemData: string;
  // Section 3: Goal / Success Metrics
  goalMetrics: {
    goal: string;
    metrics: string[];
  };
  // Section 4: Research / Insights
  research: {
    title: string;
    content: string;
  }[];
  // Section 5: Solution
  solution: string;
  solutionDetails: string[];
  // Section 6: Prioritization (optional)
  prioritization?: string;
  // Section 7: Outcome / Measurement
  measurement: string;
  // Legacy fields
  role: string;
  process: {
    title: string;
    content: string;
  }[];
  outcome: string;
  learnings: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  location: string;
  bullets: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  bullets?: string[];
}

export interface PortfolioData {
  name: string;
  role: string;
  tagline: string;
  email: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
  about: {
    positioning: string;
    skills: string[];
    tools: string[];
  };
  caseStudies: CaseStudy[];
  experience: Experience[];
  education: Education[];
}

export const portfolio: PortfolioData = portfolioData as PortfolioData;
