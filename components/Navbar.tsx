"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 py-[22px]">
      <div className="grid grid-cols-[1fr_auto] items-center gap-4 lg:grid-cols-[1fr_auto_1fr]">
        {/* Left: avatar + name */}
        <a
          href="#top"
          className="justify-self-start flex items-center gap-3 text-[20px] font-bold tracking-[-0.01em] text-ink-soft"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border-[1.5px] border-line-soft bg-ink" />
          Raj Ganesh
        </a>

        {/* Center: pill nav (desktop) */}
        <nav className="hidden items-center gap-0.5 rounded-full bg-white/90 p-1.5 shadow-[0_8px_24px_0_rgba(16,24,40,0.10)] backdrop-blur-sm lg:flex lg:justify-self-center">
          {NAV_LINKS.map((item) => {
            const isHome = item.label === "Home";
            return (
              <a
                key={item.label}
                href={item.href}
                className={
                  isHome
                    ? "rounded-full px-5 py-[9px] text-[15px] font-semibold text-white bg-blue shadow-[0_6px_18px_-6px_rgba(62,111,168,0.5)]"
                    : "rounded-full px-[18px] py-[9px] text-[15px] font-medium text-body transition-colors hover:bg-[#EAE8E4] hover:text-ink"
                }
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right: actions (desktop) */}
        <div className="hidden items-center gap-2.5 lg:flex lg:justify-self-end">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-2xl bg-[#111] px-5 py-[13px] text-[15px] font-semibold text-white shadow-[0_2px_8px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.08)] transition-colors hover:bg-black"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              <path d="m2 7 10 6 10-6"></path>
            </svg>
            Say Hello
          </a>
          <a
            href="https://www.linkedin.com/in/rajganesh1710/"
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-12 w-12 place-items-center rounded-2xl bg-[#111] text-white shadow-[0_2px_8px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.08)] transition-colors hover:bg-black"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21H16.4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H10z" />
            </svg>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="justify-self-end grid h-11 w-11 place-items-center rounded-2xl border border-line-soft bg-white/90 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 top-0 h-0.5 w-4 bg-ink transition-transform ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-4 bg-ink transition-transform ${
                open ? "-translate-y-1 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mt-3 rounded-3xl border border-line-soft bg-white/95 p-3 shadow-[0_8px_24px_0_rgba(16,24,40,0.10)] backdrop-blur-sm lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-2.5 text-[15px] font-medium text-body hover:bg-[#EAE8E4] hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="mt-2 flex items-center gap-2.5 border-t border-line-soft pt-3">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#111] px-5 py-3 text-[15px] font-semibold text-white"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m2 7 10 6 10-6"></path>
              </svg>
              Say Hello
            </a>
            <a
              href="https://www.linkedin.com/in/rajganesh1710/"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-12 w-12 place-items-center rounded-2xl bg-[#111] text-white"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21H16.4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H10z" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
