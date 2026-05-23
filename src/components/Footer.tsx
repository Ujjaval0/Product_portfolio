import { portfolio } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="w-full border-t border-warm-border/60 bg-warm-surface py-10 mt-auto">
      <div className="mx-auto max-w-6xl px-3 md:px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <div>
          <p className="text-sm text-muted">© {new Date().getFullYear()} {portfolio.name}. All rights reserved.</p>
          <p className="text-xs text-muted/70 mt-1">Thinking in systems. Shipping in sprints.</p>
        </div>
        <div className="flex gap-6 font-medium">
          <a
            href={portfolio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-dark transition-custom"
          >
            LinkedIn
          </a>
          <a
            href={portfolio.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-dark transition-custom"
          >
            GitHub
          </a>
          <a
            href={`mailto:${portfolio.email}`}
            className="hover:text-dark transition-custom"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
