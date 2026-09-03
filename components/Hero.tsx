import Image from "next/image";
import heroPortrait from "@/public/images/hero-portrait.webp";

const CARDS = [
  {
    key: "work",
    gradient: "linear-gradient(150deg,#FCEBD6 0%,#F6C39A 52%,#EBA9C6 100%)",
    rot: "sm:-rotate-[5deg]",
    z: "z-[2]",
    title: "My Craft",
    body: "The products I've shipped, the tangled problems behind each one, and the calls I made to untangle them.",
    cta: "Explore my work",
    href: "#capabilities",
  },
  {
    key: "portrait",
  },
  {
    key: "about",
    gradient: "linear-gradient(150deg,#EAE3FF 0%,#C4BAFF 50%,#A4C7FF 100%)",
    rot: "sm:rotate-[4deg]",
    z: "z-[3]",
    title: "The Path",
    body: "How I found my way into design, and the people, detours, and hard lessons that made me the designer I am.",
    cta: "Read my story",
    href: "/about",
  },
  {
    key: "contact",
    gradient: "linear-gradient(150deg,#CFF0E2 0%,#ABDAF1 54%,#C9C5F3 100%)",
    rot: "sm:-rotate-[3deg]",
    z: "z-[1]",
    title: "What's Next",
    body: "Building something interesting, or just want to trade ideas? Tell me what you're working on and let's see where it goes.",
    cta: "Get in touch",
    href: "#contact",
  },
] as const;

export default function Hero() {
  return (
    <section id="top" className="relative pt-1.5 pb-6 sm:pb-0">
      <div
        className="relative overflow-hidden rounded-[40px] border border-line bg-card px-7 pt-[60px] pb-12 sm:px-14 sm:pb-0"
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
            <span className="text-blue">I design &amp; build ideas.</span>
          </h1>
          <p className="m-0 max-w-[680px] text-[clamp(18px,2vw,24px)] leading-[1.55] text-body">
            Senior Product Designer with 5+ years across AI, fintech &amp; B2B
            SaaS. At{" "}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line-soft bg-white py-1 pl-2 pr-3.5 align-middle text-[0.82em] font-semibold text-body">
              <img src="/images/numero.svg" alt="Numero" width={20} height={20} className="rounded-[6px]" />
              Numero
            </span>
            , I designed 0 to 1 products and simplified complex workflows.
          </p>
        </div>

        {/* Sticky card row with woven-in portrait */}
        <div className="group/deck relative mt-10 flex flex-col items-center gap-5 sm:mt-14 sm:flex-row sm:flex-wrap sm:items-start sm:justify-center sm:gap-0">
          {CARDS.map((card) =>
            card.key === "portrait" ? (
              <div
                key="portrait"
                className="relative z-[4] h-[300px] w-full max-w-[340px] flex-none overflow-hidden rounded-[24px] transition-opacity duration-300 sm:mt-6 sm:h-[360px] sm:w-[210px] sm:-mx-3.5 sm:-rotate-1 group-hover/deck:opacity-40 hover:!opacity-100"
                style={{
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
              // Wrapper handles stacking and the sibling fade; the inner shell
              // carries the fan angle and the hover motion, so straightening,
              // lifting and scaling all compose in one transform.
              <div
                key={card.key}
                className={`group/card relative flex w-full max-w-[340px] transition-opacity duration-300 hover:z-30 sm:-mx-3.5 sm:flex-1 sm:basis-[240px] group-hover/deck:opacity-40 hover:!opacity-100 ${card.z}`}
              >
                <div
                  className={`relative flex min-h-[220px] w-full flex-col justify-between gap-6 overflow-hidden rounded-[24px] px-6 pb-7 pt-7 shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_4px_16px_0_rgba(16,24,40,0.08)] transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] will-change-transform sm:min-h-[360px] sm:gap-0 sm:px-[30px] sm:pb-10 sm:pt-8 group-hover/card:rotate-0 group-hover/card:-translate-y-[18px] group-hover/card:scale-[1.06] group-hover/card:shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_44px_72px_-34px_rgba(16,24,40,0.45)] ${card.rot}`}
                  style={{ background: card.gradient }}
                >
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(131deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 50%)",
                    }}
                  />
                  <div className="relative">
                    <div className="mb-3 font-display text-[30px] font-normal leading-[30px] text-body sm:mb-4 sm:text-[40px] sm:leading-[36px]">
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
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
