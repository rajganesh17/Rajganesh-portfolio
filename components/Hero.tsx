import Image from "next/image";
import heroPortrait from "@/public/images/hero-portrait.webp";

const CARDS = [
  {
    key: "work",
    gradient: "linear-gradient(150deg,#FCEBD6 0%,#F6C39A 52%,#EBA9C6 100%)",
    rotate: "-5deg",
    zIndex: 2,
    title: "Recent work",
    body: "See how I turn messy, data-heavy product problems into shipped experiences.",
    cta: "Read case studies",
    href: "#work",
  },
  {
    key: "portrait",
  },
  {
    key: "about",
    gradient: "linear-gradient(150deg,#EAE3FF 0%,#C4BAFF 50%,#A4C7FF 100%)",
    rotate: "4deg",
    zIndex: 3,
    title: "About me",
    body: "Product designer and builder shipping AI copilots for finance teams. Founding-designer instincts, 20+ side projects, always learning by building.",
    cta: "More about me",
    href: "#about",
  },
  {
    key: "contact",
    gradient: "linear-gradient(150deg,#CFF0E2 0%,#ABDAF1 54%,#C9C5F3 100%)",
    rotate: "-3deg",
    zIndex: 1,
    title: "Let's talk",
    body: "Open to collaborating, mentoring, or just trading ideas. Tell me what you're building — I'll write back.",
    cta: "Get in touch",
    href: "#contact",
  },
] as const;

export default function Hero() {
  return (
    <section id="top" className="relative pt-1.5 pb-0">
      <div
        className="relative overflow-hidden rounded-[40px] border border-line bg-card px-7 pt-[60px] sm:px-14"
        style={{
          backgroundImage:
            "radial-gradient(rgba(2,89,78,0.06) 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
        }}
      >
        {/* Headline + copy */}
        <div className="relative max-w-[920px]">
          <h1 className="m-0 mb-6 font-display text-[clamp(42px,6vw,80px)] font-medium leading-[1.02] tracking-[-0.02em]">
            <span className="text-ink">Hi, I&apos;m Raj.</span>
            <br />
            <span className="text-blue">Product Designer &amp; Builder.</span>
          </h1>
          <p className="m-0 max-w-[680px] text-[clamp(18px,2vw,24px)] leading-[1.55] text-body">
            Senior Product Designer with a data &amp; engineering background.
            Designing 0&rarr;1 AI &amp; fintech at{" "}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line-soft bg-white py-0.5 pl-1 pr-3 align-middle text-[0.82em] font-semibold text-body">
              <span className="grid h-[19px] w-[19px] place-items-center rounded-[6px] bg-ink font-display text-[12px] text-white">
                K
              </span>
              Katalyst Labs
            </span>{" "}
            by day, building side projects by night.
          </p>
        </div>

        {/* Sticky card row with woven-in portrait */}
        <div className="relative mt-14 flex flex-wrap items-start justify-center gap-0">
          {CARDS.map((card) =>
            card.key === "portrait" ? (
              <div
                key="portrait"
                className="relative z-[4] mt-6 h-[360px] w-[210px] flex-none overflow-hidden rounded-[24px] -mx-3.5"
                style={{
                  transform: "rotate(-1deg)",
                  boxShadow:
                    "0 0 0 1px rgba(0,0,0,0.05), 0 10px 30px -8px rgba(16,24,40,0.25)",
                }}
              >
                <Image
                  src={heroPortrait}
                  alt="Portrait of Raj Ganesh"
                  fill
                  sizes="210px"
                  className="object-cover"
                  priority
                />
              </div>
            ) : (
              <div
                key={card.key}
                className="relative -mx-3.5 flex min-h-[360px] max-w-[340px] flex-1 basis-[240px] flex-col justify-between overflow-hidden rounded-[24px] px-[30px] pb-10 pt-8 transition-transform duration-200 hover:-translate-y-1.5"
                style={{
                  background: card.gradient,
                  transform: `rotate(${card.rotate})`,
                  zIndex: card.zIndex,
                  boxShadow:
                    "0 0 0 1px rgba(0,0,0,0.05), 0 4px 16px 0 rgba(16,24,40,0.08)",
                  marginTop: card.key === "build" ? "-6px" : undefined,
                }}
              >
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(131deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 50%)",
                  }}
                />
                <div className="relative">
                  <div className="mb-4 font-display text-[40px] font-normal leading-[36px] text-body">
                    {card.title}
                  </div>
                  <p className="m-0 text-[15px] font-medium leading-[1.5] text-body">
                    {card.body}
                  </p>
                </div>
                <a
                  href={card.href}
                  className="relative self-start rounded-lg bg-black px-3.5 py-2.5 text-[13px] font-semibold text-white shadow-[0_2px_8px_rgba(0,0,0,0.2),0_1px_2px_rgba(0,0,0,0.12)] transition-colors hover:bg-[#1a1a1a]"
                >
                  {card.cta}
                </a>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
