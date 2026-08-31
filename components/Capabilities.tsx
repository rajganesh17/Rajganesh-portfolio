const SHEEN =
  "linear-gradient(131deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 50%)";

// Gradients pulled from the first fold (Hero) so the folds read as one system.
const LAVENDER = "linear-gradient(150deg,#EAE3FF 0%,#C4BAFF 50%,#A4C7FF 100%)";
const PEACH = "linear-gradient(150deg,#FCEBD6 0%,#F6C39A 52%,#EBA9C6 100%)";
const MINT = "linear-gradient(150deg,#CFF0E2 0%,#ABDAF1 54%,#C9C5F3 100%)";
const BUTTER = "linear-gradient(150deg,#FBEFCF 0%,#F6DA8E 55%,#F1C888 100%)";

export default function Capabilities() {
  return (
    <section id="capabilities" className="pt-2 pb-12">
      {/* Section heading */}
      <div className="mb-8 max-w-[760px]">
        <h2 className="m-0 font-display text-[clamp(32px,4.5vw,56px)] font-medium leading-[1.03] tracking-[-0.02em] text-ink">
          Turning a forgotten text into a{" "}
          <span className="text-blue">moment worth keeping</span>
        </h2>
      </div>

      {/* Bento grid: Customization (tall, left) · Scheduling (wide, top-right) ·
          Wallet + Inbox (bottom-right) — mirrors the reference layout. */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-2">
        {/* Customization — tall card, left */}
        <article
          className="group/cap relative flex min-h-[560px] flex-col overflow-hidden rounded-[32px] p-9 transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] will-change-transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_40px_72px_-34px_rgba(16,24,40,0.4)] md:col-span-5 md:row-span-2"
          style={{ background: LAVENDER }}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: SHEEN }}
          />
          <h3 className="relative m-0 font-display text-[40px] font-medium leading-none text-body">
            Extraction
          </h3>

          {/* Layered document + JSON output */}
          <div className="relative mt-8 flex flex-1 items-center justify-center">
            {/* Source document — front card, left */}
            <div
              className="relative z-[2] w-[176px] flex-none rounded-[16px] bg-white p-4 shadow-[0_18px_44px_-16px_rgba(16,24,40,0.3)]"
              style={{ transform: "rotate(-5deg)" }}
            >
              <div className="h-5 w-2/5 rounded-[5px] border border-[#F1A9A9] bg-[#FDECEC]" />
              <div className="mt-3 space-y-1.5">
                <div className="h-1.5 w-4/5 rounded-full bg-[#EAE7F0]" />
                <div className="h-1.5 w-3/5 rounded-full bg-[#EAE7F0]" />
              </div>
              <div className="mt-3 ml-auto h-5 w-1/2 rounded-[5px] border border-[#A9C0F4] bg-[#EEF3FE]" />
              <div className="mt-3 space-y-1.5">
                <div className="h-1.5 w-2/5 rounded-full bg-[#EAE7F0]" />
                <div className="h-1.5 w-3/5 rounded-full bg-[#EAE7F0]" />
              </div>
              <div className="mt-3 h-5 w-1/2 rounded-[5px] border border-[#A9D9C0] bg-[#EAF6F0]" />
              <div className="mt-3 h-5 w-1/2 rounded-[5px] border border-[#F0D6A0] bg-[#FBF3E3]" />
            </div>

            {/* JSON panel — back card, right, peeking */}
            <div className="relative z-[1] -ml-14 w-[272px] flex-none overflow-hidden rounded-[16px] bg-[#0E1117] shadow-[0_26px_54px_-18px_rgba(16,24,40,0.6)]">
              <div className="flex items-center gap-2 border-b border-white/10 px-3.5 py-2.5">
                <span className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#FF5F56]" />
                  <span className="h-2 w-2 rounded-full bg-[#FFBD2E]" />
                  <span className="h-2 w-2 rounded-full bg-[#27C93F]" />
                </span>
                <span className="truncate font-mono text-[9.5px] text-white/55">
                  converted-json-with-bboxes.json
                </span>
              </div>
              <div className="whitespace-pre px-3.5 py-3 font-mono text-[10.5px] leading-[1.65] text-[#8B949E]">
                <div>{"{"}</div>
                <div>{"  "}<span className="text-[#79C0FF]">"label"</span>{": "}<span className="text-[#7EE787]">"Total amount"</span>{","}</div>
                <div>{"  "}<span className="text-[#79C0FF]">"value"</span>{": "}<span className="text-[#7EE787]">"$12,480.00"</span>{","}</div>
                <div>{"  "}<span className="text-[#79C0FF]">"bbox"</span>{": {"}</div>
                <div>{"    "}<span className="text-[#79C0FF]">"page"</span>{": "}<span className="text-[#FFA657]">1</span>{","}</div>
                <div>{"    "}<span className="text-[#79C0FF]">"x1"</span>{": "}<span className="text-[#FFA657]">412</span>{", "}<span className="text-[#79C0FF]">"y1"</span>{": "}<span className="text-[#FFA657]">286</span>{","}</div>
                <div>{"    "}<span className="text-[#79C0FF]">"x2"</span>{": "}<span className="text-[#FFA657]">548</span>{", "}<span className="text-[#79C0FF]">"y2"</span>{": "}<span className="text-[#FFA657]">308</span></div>
                <div>{"}}"}</div>
              </div>
            </div>
          </div>

          {/* Export actions pill */}
          <div className="relative -mt-2 mb-8 flex items-center justify-center gap-2.5 self-center rounded-[18px] bg-white px-3 py-2.5 shadow-[0_10px_28px_-12px_rgba(16,24,40,0.28)]">
            <span className="rounded-full bg-ink px-4 py-2 text-[12px] font-semibold text-white">
              Copy JSON
            </span>
            <span className="rounded-full border border-body/15 px-4 py-2 text-[12px] font-semibold text-body">
              Download JSON
            </span>
          </div>

          <p className="relative m-0 max-w-[360px] text-[19px] font-medium leading-[1.4] text-body">
            Every extracted value returns as JSON with its source page and
            coordinates
          </p>
        </article>

        {/* Scheduling — wide card, top-right */}
        <article
          className="group/cap relative flex min-h-[280px] flex-col justify-center overflow-hidden rounded-[32px] p-9 transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] will-change-transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_40px_72px_-34px_rgba(16,24,40,0.4)] md:col-span-7"
          style={{ background: PEACH }}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: SHEEN }}
          />
          <div className="relative max-w-[300px] lg:max-w-[210px]">
            <h3 className="m-0 font-display text-[38px] font-medium leading-none text-body">
              Scheduling
            </h3>
            <p className="mt-4 text-[19px] font-medium leading-[1.4] text-body">
              Schedule all your cards and gifts now and we&rsquo;ll send them
              later
            </p>
          </div>

          {/* Onboarding scheduling mock (image we created) */}
          <img
            src="/images/scheduling-onboarding.png"
            alt="Scheduling — pick a delivery date"
            className="pointer-events-none absolute right-2 top-1/2 hidden h-[90%] w-auto max-w-[62%] -translate-y-1/2 select-none object-contain object-right lg:block"
          />
        </article>

        {/* Wallet — bottom-left of right column */}
        <article
          className="group/cap relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-[32px] p-8 transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] will-change-transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_40px_72px_-34px_rgba(16,24,40,0.4)] md:col-span-3"
          style={{ background: MINT }}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: SHEEN }}
          />
          {/* Stacked cards + Memos stat card */}
          <div className="relative mt-1">
            <div
              className="absolute -top-3 left-4 h-8 w-[85%] rounded-t-[12px]"
              style={{
                transform: "rotate(-3deg)",
                background: "linear-gradient(120deg,#ABDAF1 0%,#C9C5F3 100%)",
              }}
            />
            <div className="relative w-full rounded-[14px] bg-ink px-4 py-4 shadow-[0_16px_34px_-14px_rgba(16,24,40,0.4)]">
              <div className="text-[11px] font-medium text-white/70">
                Memos Created
              </div>
              <div className="mt-2 flex items-center justify-between">
                <div>
                  <div className="font-display text-[26px] font-medium leading-none text-white">
                    24
                  </div>
                  <div className="mt-1.5 text-[11px] font-medium text-white/60">
                    This month
                  </div>
                </div>
                <span className="rounded-full bg-white/15 px-3 py-1.5 text-[9px] font-semibold tracking-wide text-white">
                  VIEW ALL
                </span>
              </div>
            </div>
          </div>

          <div className="relative mt-6">
            <h3 className="m-0 font-display text-[30px] font-medium leading-none text-body">
              Wallet
            </h3>
            <p className="mt-3 text-[15px] font-medium leading-[1.4] text-body">
              Access all your gifts and save up your Givingli Cash
            </p>
          </div>
        </article>

        {/* Inbox — bottom-right */}
        <article
          className="group/cap relative flex min-h-[260px] flex-col overflow-hidden rounded-[32px] p-8 transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] will-change-transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_40px_72px_-34px_rgba(16,24,40,0.4)] md:col-span-4"
          style={{ background: BUTTER }}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: SHEEN }}
          />
          <h3 className="relative m-0 font-display text-[30px] font-medium leading-none text-body">
            Ask anything
          </h3>
          <p className="relative mt-1.5 max-w-[240px] text-[13px] font-medium leading-[1.3] text-body">
            Chat with your documents and get answers with sources
          </p>

          {/* Document chat */}
          <div className="relative mt-auto pt-2">
            {/* User question */}
            <div className="ml-auto max-w-[85%] rounded-[12px] rounded-tr-[4px] bg-white/60 px-3 py-1 shadow-[0_4px_12px_-6px_rgba(16,24,40,0.2)]">
              <div className="text-[10.5px] font-medium leading-[1.3] text-body">
                What are the key risk factors in Apple&rsquo;s latest 10-K report?
              </div>
            </div>

            {/* AI answer */}
            <div className="mt-1.5 flex items-start gap-2">
              <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-[#E7E5FF] text-[11px] text-[#6C5CE7]">
                ✦
              </span>
              <div className="min-w-0 flex-1 rounded-[12px] rounded-tl-[4px] bg-white/85 px-3 py-1.5 shadow-[0_4px_12px_-6px_rgba(16,24,40,0.25)]">
                <div className="text-[10.5px] font-medium leading-[1.3] text-body">
                  Key risk factors from Apple&rsquo;s latest 10-K:
                </div>
                <ul className="mt-1 space-y-0.5 text-[10px] leading-[1.25] text-body/80">
                  <li>• Heavy reliance on iPhone for most net sales</li>
                  <li>• Intense competition &amp; rapid product transitions</li>
                  <li>• Supply chain concentrated in China &amp; Asia</li>
                </ul>
                <div className="mt-1.5 border-t border-body/10 pt-1 text-[9px] font-medium text-muted">
                  Sources: AAPL 10-K Report 2025 · Page 15–17
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="mt-2 rounded-[12px] border border-body/15 bg-white/85 px-3 py-1.5 shadow-[0_4px_12px_-6px_rgba(16,24,40,0.2)]">
              <div className="flex items-center gap-1.5">
                <span className="flex items-center gap-1 text-[10.5px] font-semibold text-body">
                  10-K
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
                <span className="truncate text-[10.5px] font-medium text-muted">
                  Enter your question here…
                </span>
              </div>
              <div className="mt-1.5 flex items-center justify-between">
                <span className="flex items-center gap-1 text-[10.5px] font-semibold text-body">
                  AAPL
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1 text-[10px] font-medium text-muted">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="16" rx="2" />
                      <path d="M7 9l2.5 3L7 15" />
                      <path d="M13 15h4" />
                    </svg>
                    Prompts
                  </span>
                  <span className="grid h-5 w-6 flex-none place-items-center rounded-[6px] bg-body/10">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="text-body/45">
                      <path d="M5 12h13" />
                      <path d="M12 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
