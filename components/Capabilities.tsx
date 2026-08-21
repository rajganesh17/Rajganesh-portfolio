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
        <span className="mb-4 inline-block rounded-full border border-line-soft bg-white px-4 py-1.5 text-[13px] font-semibold text-body">
          Case study · Givingli
        </span>
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
          className="relative flex min-h-[560px] flex-col overflow-hidden rounded-[32px] p-9 md:col-span-5 md:row-span-2"
          style={{ background: LAVENDER }}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: SHEEN }}
          />
          <h3 className="relative m-0 font-display text-[40px] font-medium leading-none text-body">
            Customization
          </h3>

          {/* Mock template cards */}
          <div className="relative mt-8 flex flex-1 items-center justify-center">
            {/* Photo / "Happy Birthday" card */}
            <div
              className="relative z-[2] h-[260px] w-[168px] flex-none rounded-[16px] bg-white p-3 shadow-[0_16px_40px_-14px_rgba(16,24,40,0.28)]"
              style={{ transform: "rotate(-4deg)" }}
            >
              <div className="h-[80px] w-full rounded-[10px] bg-[#E7E2D8]" />
              <div className="mt-3 font-display text-[17px] font-semibold leading-tight text-ink">
                Happy
                <br />
                Birthday
              </div>
              <div className="mt-3 space-y-1.5">
                <div className="h-1.5 w-full rounded-full bg-[#EAE6DE]" />
                <div className="h-1.5 w-11/12 rounded-full bg-[#EAE6DE]" />
                <div className="h-1.5 w-3/4 rounded-full bg-[#EAE6DE]" />
              </div>
              <div className="mt-4 flex justify-center gap-1.5 text-[12px]">
                <span>✦</span>
                <span>✦</span>
                <span>✦</span>
              </div>
            </div>

            {/* Cartoon cake card */}
            <div
              className="relative z-[1] -ml-6 grid h-[290px] w-[186px] flex-none place-items-center rounded-[16px] text-[64px] shadow-[0_18px_44px_-14px_rgba(16,24,40,0.3)]"
              style={{
                transform: "rotate(5deg)",
                background:
                  "linear-gradient(150deg,#C4BAFF 0%,#A9A0F5 100%)",
              }}
            >
              🧁
            </div>
          </div>

          {/* Editor toolbar pill */}
          <div className="relative -mt-2 mb-8 flex items-center justify-around gap-1 self-center rounded-[18px] bg-white px-4 py-3 text-center shadow-[0_10px_28px_-12px_rgba(16,24,40,0.28)]">
            {[
              { i: "🧩", l: "Templates" },
              { i: "🅣", l: "Text" },
              { i: "⭐", l: "Stickers" },
              { i: "📷", l: "Video" },
              { i: "🖼️", l: "Photos" },
              { i: "✓", l: "Paint" },
            ].map((t) => (
              <div key={t.l} className="flex flex-col items-center gap-1 px-1">
                <span className="text-[18px] leading-none">{t.i}</span>
                <span className="text-[9px] font-medium text-[#8A8A8A]">
                  {t.l}
                </span>
              </div>
            ))}
          </div>

          <p className="relative m-0 max-w-[360px] text-[19px] font-medium leading-[1.4] text-body">
            Use a pre-designed template or personalize with video, stickers,
            fonts, and more
          </p>
        </article>

        {/* Scheduling — wide card, top-right */}
        <article
          className="relative flex min-h-[280px] flex-col justify-center overflow-hidden rounded-[32px] p-9 md:col-span-7"
          style={{ background: PEACH }}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: SHEEN }}
          />
          <div className="relative max-w-[300px]">
            <h3 className="m-0 font-display text-[38px] font-medium leading-none text-body">
              Scheduling
            </h3>
            <p className="mt-4 text-[19px] font-medium leading-[1.4] text-body">
              Schedule all your cards and gifts now and we&rsquo;ll send them
              later
            </p>
          </div>

          {/* Birthday card + date picker */}
          <div className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 items-start gap-0 lg:flex">
            <div
              className="grid h-[190px] w-[130px] place-items-center rounded-[14px] text-[52px] shadow-[0_16px_36px_-14px_rgba(16,24,40,0.32)]"
              style={{
                transform: "rotate(-6deg)",
                background: "linear-gradient(150deg,#F6C39A 0%,#EBA9C6 100%)",
              }}
            >
              🎂
            </div>
            <div
              className="-ml-6 w-[210px] rounded-[18px] bg-white p-4 shadow-[0_20px_44px_-14px_rgba(16,24,40,0.3)]"
              style={{ transform: "rotate(2deg)" }}
            >
              <div className="mb-2 text-[11px] font-semibold text-[#8A8A8A]">
                When should we deliver this card?
              </div>
              <div className="space-y-1 text-[12px] font-medium text-[#C4C4C4]">
                <div className="flex justify-between">
                  <span>August</span>
                  <span>3:00 AM</span>
                </div>
                <div className="flex justify-between rounded-[8px] bg-[#F1F1F1] px-2 py-1 text-ink">
                  <span className="font-bold">September</span>
                  <span className="font-bold">5:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>October</span>
                  <span>7:00 AM</span>
                </div>
              </div>
              <div className="mt-3 rounded-full bg-ink py-2 text-center text-[12px] font-semibold text-white">
                Set Date
              </div>
            </div>
          </div>
        </article>

        {/* Wallet — bottom-left of right column */}
        <article
          className="relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-[32px] p-8 md:col-span-3"
          style={{ background: MINT }}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: SHEEN }}
          />
          {/* Stacked wallet cards + Givingli Cash card */}
          <div className="relative mt-1">
            <div
              className="absolute -top-3 left-4 h-8 w-[85%] rounded-t-[12px]"
              style={{
                transform: "rotate(-3deg)",
                background: "linear-gradient(120deg,#F6C39A 0%,#EBA9C6 100%)",
              }}
            />
            <div className="relative w-full rounded-[14px] bg-ink px-4 py-4 shadow-[0_16px_34px_-14px_rgba(16,24,40,0.4)]">
              <div className="text-[11px] font-medium text-white/70">
                Givingli Cash
              </div>
              <div className="mt-2 flex items-baseline justify-between">
                <span className="font-display text-[26px] font-medium text-white">
                  $132.00
                </span>
                <span className="rounded-full bg-white/15 px-2.5 py-1 text-[9px] font-semibold tracking-wide text-white">
                  REDEEM
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
          className="relative flex min-h-[260px] flex-col overflow-hidden rounded-[32px] p-8 md:col-span-4"
          style={{ background: BUTTER }}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: SHEEN }}
          />
          <h3 className="relative m-0 font-display text-[30px] font-medium leading-none text-body">
            Inbox
          </h3>
          <p className="relative mt-3 max-w-[220px] text-[15px] font-medium leading-[1.4] text-body">
            Track your gifts, group chats, and sent cards
          </p>

          {/* Inbox rows */}
          <div className="relative mt-auto space-y-2 pt-5">
            {[
              { i: "🎉", t: "Bea, Yannick, Avi", s: "Picnic Party 🌿 · Apr 26" },
              { i: "🌹", t: "Kyle Patterson", s: "I appreciate you 💛 · Apr 25" },
              { i: "PB", t: "Damian Martins", s: "Happy belated bday! · Apr 25" },
            ].map((row) => (
              <div
                key={row.t}
                className="flex items-center gap-2.5 rounded-[12px] bg-white/75 px-2.5 py-2 shadow-[0_4px_12px_-6px_rgba(16,24,40,0.25)]"
              >
                <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-white text-[13px] font-semibold text-body">
                  {row.i}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-[12px] font-semibold text-body">
                    {row.t}
                  </div>
                  <div className="truncate text-[10px] font-medium text-muted">
                    {row.s}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
