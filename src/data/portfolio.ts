import portfolioData from "./portfolio.json";

export interface CaseStudy {
  slug: string;
  title: string;
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
  problem: string;
  role: string;
  process: {
    title: string;
    content: string;
  }[];
  outcome: string;
  learnings: string;
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
}

export const portfolio: PortfolioData = portfolioData as PortfolioData;
