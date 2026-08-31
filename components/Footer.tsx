const EMAIL = "rajganesh6.1@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/rajganesh1710/";
const RESUME = "/resume.pdf"; // drop your resume in /public as resume.pdf

// Full-colour Gmail mark.
function GmailIcon() {
  return (
    <svg width="72" height="54" viewBox="0 0 256 193" preserveAspectRatio="xMidYMid" aria-hidden="true">
      <path d="M58.182 192.05V93.14L27.507 65.077 0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455z" fill="#4285F4" />
      <path d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837-27.026 25.798z" fill="#34A853" />
      <path d="M58.182 93.14l-4.174-38.647 4.174-36.989L128 69.868l69.818-52.364 4.669 34.992-4.669 40.644L128 145.504z" fill="#EA4335" />
      <path d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945z" fill="#FBBC04" />
      <path d="M0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.231z" fill="#C5221F" />
    </svg>
  );
}

// Full-colour LinkedIn mark.
function LinkedInIcon() {
  return (
    <svg width="62" height="62" viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="4.2" fill="#0A66C2" />
      <path
        fill="#FFFFFF"
        d="M8.34 18.34H5.67V9.75h2.67zM7 8.58a1.55 1.55 0 110-3.1 1.55 1.55 0 010 3.1zm11.34 9.76h-2.66v-4.18c0-1-.02-2.28-1.39-2.28-1.39 0-1.6 1.08-1.6 2.2v4.26h-2.66V9.75h2.55v1.17h.04c.36-.67 1.22-1.38 2.51-1.38 2.69 0 3.19 1.77 3.19 4.07z"
      />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#1B1E27" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M9 13h6M9 17h6" />
    </svg>
  );
}

// Each card is a wrapper + an inner shell. The WRAPPER holds the fan pose
// (rotation + offset, sm+ only) so it collapses to a clean vertical stack on
// mobile. The INNER shell owns the hover interaction — a smooth lift + deeper
// shadow that composes cleanly with the wrapper's rotation instead of fighting
// it, so nothing jumps.
const CARD_WRAP =
  "group relative w-full max-w-[300px] hover:z-30 sm:h-[356px] sm:w-[262px] sm:max-w-none";
const CARD_SHELL =
  "flex h-full w-full flex-col rounded-[28px] border border-line-soft bg-white p-7 " +
  "shadow-[0_18px_44px_-32px_rgba(16,24,40,0.28)] transition-[transform,box-shadow] " +
  "duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] will-change-transform " +
  "group-hover:-translate-y-[14px] group-hover:scale-[1.035] " +
  "group-hover:shadow-[0_50px_80px_-42px_rgba(16,24,40,0.48)] " +
  "group-active:-translate-y-[6px] group-active:scale-[1.01] group-active:duration-150";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="pb-12 pt-6">
      {/* ── Fanned cards ── */}
      <div className="flex flex-col items-center gap-5 sm:h-[400px] sm:flex-row sm:items-start sm:justify-center sm:gap-0">
        {/* Note */}
        <div className={`${CARD_WRAP} sm:-mr-6 sm:translate-y-[22px] sm:-rotate-[7deg]`}>
          <article className={CARD_SHELL}>
            <div className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#B4B0A6]">Note</div>
            <div className="mt-3.5 flex flex-col gap-2">
              <p className="text-[13.5px] font-semibold leading-[1.4] text-ink">Dear future collaborator,</p>
              <p className="text-[12.5px] leading-[1.5] text-[#4C4C46]">
                I build small, useful things with good people — products with a little bit of magic.
              </p>
              <p className="text-[12.5px] leading-[1.5] text-[#4C4C46]">
                Happy to wear a few hats to ship the best version. Not just a &ldquo;designer&rdquo; — a creator :)
              </p>
              <p className="text-[12.5px] leading-[1.5] text-[#4C4C46]">If that feels like your team, let&rsquo;s chat.</p>
            </div>
            <div className="mt-4 text-[14px] text-[#B4B0A6]">— Raj</div>
          </article>
        </div>

        {/* Write to me */}
        <div className={`${CARD_WRAP} sm:z-[2] sm:-mr-6 sm:translate-y-[6px] sm:-rotate-[2.5deg]`}>
          <a href={`mailto:${EMAIL}`} className={CARD_SHELL}>
            <div className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#B4B0A6]">Gmail</div>
            <div className="flex flex-1 items-center justify-center py-6">
              <span className="transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-[1.12]">
                <GmailIcon />
              </span>
            </div>
            <div>
              <div className="mb-2 text-[20px] font-semibold text-ink transition-colors duration-300 group-hover:text-blue">Write to me</div>
              <div className="text-[14px] text-[#A6A297]">I reply to everything.</div>
            </div>
          </a>
        </div>

        {/* LinkedIn */}
        <div className={`${CARD_WRAP} sm:z-[3] sm:-mr-6 sm:translate-y-[6px] sm:rotate-[2.5deg]`}>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className={CARD_SHELL}>
            <div className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#B4B0A6]">Connect</div>
            <div className="flex flex-1 items-center justify-center py-6">
              <span className="transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-[1.12]">
                <LinkedInIcon />
              </span>
            </div>
            <div>
              <div className="mb-2 text-[20px] font-semibold text-ink transition-colors duration-300 group-hover:text-blue">LinkedIn</div>
              <div className="text-[14px] text-[#A6A297]">Let&rsquo;s stay in touch.</div>
            </div>
          </a>
        </div>

        {/* Resume */}
        <div className={`${CARD_WRAP} sm:translate-y-[22px] sm:rotate-[7deg]`}>
          <a href={RESUME} target="_blank" rel="noopener noreferrer" className={CARD_SHELL}>
            <div className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#B4B0A6]">CV / PDF</div>
            <div className="flex flex-1 items-center justify-center py-6">
              <span className="transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-[1.12]">
                <DocumentIcon />
              </span>
            </div>
            <div>
              <div className="mb-2 text-[20px] font-semibold text-ink transition-colors duration-300 group-hover:text-blue">Resume</div>
              <div className="text-[14px] text-[#A6A297]">Roles, wins, tools.</div>
            </div>
          </a>
        </div>
      </div>

      {/* ── Availability ── */}
      <div className="mt-11 flex items-center justify-center gap-2.5">
        <span className="h-2 w-2 rounded-full bg-sage" />
        <span className="text-[15px] text-faint">Available for new work</span>
      </div>

      {/* ── Email ── */}
      <a
        href={`mailto:${EMAIL}`}
        className="mt-4 block break-all text-center font-sans text-[clamp(30px,8vw,76px)] font-bold leading-none tracking-[-0.03em] text-ink"
      >
        rajganesh6.1<span className="text-blue">@gmail.com</span>
      </a>

      {/* subtext */}
      <p className="mx-auto mt-10 max-w-[560px] text-center text-[17px] leading-relaxed text-[#8A867C]">
        Let&rsquo;s turn your idea into something real — 0&nbsp;→&nbsp;1 AI &amp; fintech, side
        projects, or just trading notes. I&rsquo;ll write back.
      </p>

      {/* ── Baseline bar ── */}
      <div className="mt-14 border-t border-line pt-7">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between">
          <a href="#top" className="flex items-center gap-3 text-[18px] font-semibold tracking-[-0.01em] text-ink">
            <span className="flex h-[60px] w-[60px] shrink-0 items-center justify-center overflow-hidden rounded-full border-[1.5px] border-line-soft bg-[#EFEDE9]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/id-avatar.webp" alt="Raj Ganesh" className="h-full w-full object-cover object-[50%_8%]" />
            </span>
            Raj Ganesh
          </a>

          <span className="text-[14px] text-faint">
            © {year} Raj Ganesh · Made with <span className="text-sage">◆</span> in India
          </span>
        </div>
      </div>
    </footer>
  );
}
