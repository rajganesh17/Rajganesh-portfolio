const EMAIL = "rajganesh6.1@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/rajganesh1710/";
const RESUME = "/resume.pdf"; // drop your resume in /public as resume.pdf

const QUICK_LINKS = [
  { label: "LinkedIn", href: LINKEDIN, external: true },
  { label: "Resume", href: RESUME, external: true },
  { label: "Email", href: `mailto:${EMAIL}`, external: false },
];

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Community", href: "#community" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="pb-10 pt-6">
      <div className="relative overflow-hidden rounded-[32px] border border-line bg-card px-6 py-14 sm:px-12 sm:py-20">
        {/* Soft brand glow */}
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full opacity-60 blur-3xl"
          style={{ background: "rgba(62,111,168,0.12)" }}
        />

        {/* Status pill */}
        <div className="relative inline-flex items-center gap-2 rounded-full border border-line-soft bg-white px-4 py-1.5 text-[13px] font-semibold text-body">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-sage" />
          </span>
          Available for new work
        </div>

        {/* Big statement */}
        <h2 className="relative mt-7 max-w-[900px] font-display text-[clamp(38px,7vw,88px)] font-medium leading-[0.98] tracking-[-0.03em] text-ink">
          Let&apos;s make
          <br />
          something <span className="text-blue">good.</span>
        </h2>

        {/* Oversized email CTA */}
        <a
          href={`mailto:${EMAIL}`}
          className="group relative mt-9 inline-flex max-w-full items-center gap-3 sm:gap-5"
        >
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line-soft bg-white text-ink transition-colors group-hover:bg-[#111] group-hover:text-white sm:h-14 sm:w-14">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </span>
          <span className="min-w-0 break-all font-display text-[clamp(20px,3.6vw,40px)] font-medium tracking-[-0.02em] text-ink underline decoration-line decoration-2 underline-offset-[6px] transition-colors group-hover:decoration-blue">
            {EMAIL}
          </span>
        </a>

        {/* Quick links */}
        <div className="relative mt-10 flex flex-wrap gap-2.5">
          {QUICK_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              {...(l.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="inline-flex items-center gap-1.5 rounded-full border border-line-soft bg-white px-4 py-2 text-[14px] font-semibold text-ink transition-colors hover:bg-[#EAE8E4]"
            >
              {l.label}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7M8 7h9v9" />
              </svg>
            </a>
          ))}
        </div>

        {/* Baseline bar */}
        <div className="relative mt-14 flex flex-col gap-4 border-t border-line pt-6 text-[13px] sm:flex-row sm:items-center sm:justify-between">
          <a
            href="#top"
            className="flex items-center gap-2.5 font-bold tracking-[-0.01em] text-ink-soft"
          >
            <span className="h-7 w-7 rounded-full border-[1.5px] border-line-soft bg-ink" />
            Raj Ganesh
          </a>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-medium text-body transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <span className="text-faint">
            © {year} Raj Ganesh · Made with{" "}
            <span className="text-sage">◆</span> in India
          </span>
        </div>
      </div>
    </footer>
  );
}
