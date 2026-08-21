const SHEEN =
  "linear-gradient(131deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 55%)";

// Soft mint panel, pulled toward the site's sage (#22B573) so the fold reads
// as one system with the Hero's green dotted texture.
const PANEL = "linear-gradient(155deg,#E7F5EE 0%,#D8F0E2 55%,#CCEBDA 100%)";

type CertProps = { className?: string; style?: React.CSSProperties };

/* Certificate 1 — ISB Executive Education */
function IsbCert({ className = "", style }: CertProps) {
  return (
    <article
      className={`rounded-[10px] bg-[#EFEBE2] p-2 shadow-[0_30px_60px_-26px_rgba(16,24,40,0.5)] ${className}`}
      style={style}
    >
      <div className="rounded-[4px] bg-white px-6 py-6 text-center">
        {/* Logo lockup */}
        <div className="mb-4 flex items-center justify-center gap-1.5">
          <span className="font-display text-[15px] font-bold tracking-tight text-[#0B5C8A]">
            ISB
          </span>
          <span className="h-4 w-px bg-line" />
          <span className="text-left text-[7px] font-semibold uppercase leading-[1.1] tracking-wide text-[#0B5C8A]">
            Executive
            <br />
            Education
          </span>
        </div>

        <p className="mx-auto max-w-[220px] text-[7px] font-medium italic leading-tight text-faint">
          Executive Education at the Indian School of Business awards this
          certificate to
        </p>

        <div className="mt-3 font-display text-[19px] font-semibold italic text-ink">
          Raj Ganesh
        </div>

        <p className="mt-2 text-[7px] font-medium italic text-faint">
          for successfully completing the online programme
        </p>

        <div className="mt-1.5 font-display text-[15px] font-semibold italic text-ink">
          Product Management
        </div>

        <p className="mt-2 text-[7px] font-medium italic text-faint">
          from <span className="text-ink">August 13, 2024</span> to{" "}
          <span className="text-ink">December 17, 2024</span>
        </p>

        {/* Seal + signature row */}
        <div className="mt-4 flex items-end justify-between">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#0B5C8A] text-[7px] font-bold text-white">
            ISB
          </span>
          <div className="text-right">
            <div className="font-script text-[15px] leading-none text-ink">
              Sujatha
            </div>
            <div className="mt-1 border-t border-line pt-1 text-[5.5px] font-semibold italic leading-[1.3] text-faint">
              Sujatha Kumaraswamy
              <br />
              Executive Director, Executive Education
              <br />
              Indian School of Business
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

/* Certificate 2 — Interaction Design Foundation */
function IdfCert({ className = "", style }: CertProps) {
  return (
    <article
      className={`bg-white p-1.5 shadow-[0_34px_66px_-26px_rgba(16,24,40,0.55)] ${className}`}
      style={style}
    >
      <div className="border-[3px] border-double border-[#B9B4A8] p-1">
        <div className="border border-[#D8D3C7] px-6 py-6 text-center">
          {/* Tree emblem */}
          <div className="mx-auto mb-2 grid h-9 w-9 place-items-center rounded-full border border-[#C9C3B5] text-[15px]">
            🌳
          </div>
          <div className="text-[6px] font-semibold uppercase tracking-[0.15em] text-faint">
            Est. 2002
          </div>

          <h3 className="mt-2 font-display text-[15px] font-semibold uppercase tracking-[0.18em] text-ink">
            Course Certificate
          </h3>

          <div className="mt-3 font-display text-[18px] font-semibold text-ink">
            Raj Ganesh
          </div>

          <p className="mx-auto mt-2 max-w-[230px] text-[7px] font-medium leading-tight text-faint">
            with membership number 107034 has successfully completed the course
          </p>

          <div className="mt-1.5 font-display text-[13px] font-semibold italic text-ink">
            “User Experience: The Beginner’s Guide”
          </div>

          <p className="mx-auto mt-2 max-w-[240px] text-[6.5px] font-medium leading-tight text-faint">
            conducted from Apr 22nd 2021 to Jun 29th 2021 with Course
            Certificate ID 107034-2021-589782
          </p>

          {/* Two signatures */}
          <div className="mt-4 flex items-end justify-between gap-4 px-1">
            <div className="flex-1 text-center">
              <div className="font-script text-[13px] leading-none text-ink">
                Mads
              </div>
              <div className="mt-1 border-t border-line pt-1 text-[5.5px] font-semibold italic leading-[1.3] text-faint">
                Founder
                <br />
                Interaction Design Foundation
              </div>
            </div>
            <span className="grid h-7 w-7 flex-none place-items-center rounded-full border border-[#C9C3B5] text-[6px] font-bold text-faint">
              IDF
            </span>
            <div className="flex-1 text-center">
              <div className="font-script text-[13px] leading-none text-ink">
                Rikke
              </div>
              <div className="mt-1 border-t border-line pt-1 text-[5.5px] font-semibold italic leading-[1.3] text-faint">
                Head of Instruction
                <br />
                Interaction Design Foundation
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

/* Small pill used for the floating status chips */
function StatusChips() {
  return (
    <>
      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[12px] font-semibold text-body shadow-[0_10px_24px_-12px_rgba(2,89,78,0.5)] backdrop-blur">
        <span className="text-sage">◆</span> Verified credential
      </span>
      <span className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3 py-1.5 text-[12px] font-semibold text-white shadow-[0_12px_26px_-12px_rgba(16,24,40,0.6)]">
        2 programmes · 100%
      </span>
    </>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="pt-2 pb-14">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-10">
        {/* ---------------- Left — copy column ---------------- */}
        <div className="lg:col-span-5">
          <h2 className="m-0 font-display text-[clamp(34px,5vw,60px)] font-medium leading-[1.0] tracking-[-0.025em] text-ink">
            The proof,
            <br />
            <span className="text-blue">in one place.</span>
          </h2>

          <p className="mt-6 max-w-[440px] text-[clamp(16px,1.9vw,19px)] leading-[1.55] text-body">
            Formal training that backs the work — product strategy from the{" "}
            <span className="font-semibold text-ink">
              Indian School of Business
            </span>
            , and UX fundamentals from the{" "}
            <span className="font-semibold text-ink">
              Interaction Design Foundation
            </span>
            . Always learning, always shipping.
          </p>
        </div>

        {/* ---------------- Right — green panel with certificates ---------------- */}
        <div className="lg:col-span-7">
          <div
            className="relative overflow-hidden rounded-[32px] p-6 sm:p-8 sm:min-h-[560px]"
            style={{ background: PANEL }}
          >
            {/* Sheen */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: SHEEN }}
            />

            {/* Dotted pattern texture */}
            <div
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(2,89,78,0.10) 1.3px, transparent 1.3px)",
                backgroundSize: "22px 22px",
              }}
            />

            {/* Soft glow blobs for depth */}
            <div
              className="pointer-events-none absolute -left-10 top-10 h-56 w-56 rounded-full opacity-70 blur-3xl"
              style={{ background: "rgba(255,255,255,0.6)" }}
            />
            <div
              className="pointer-events-none absolute -right-8 bottom-4 h-64 w-64 rounded-full opacity-60 blur-3xl"
              style={{ background: "rgba(34,181,115,0.18)" }}
            />

            {/* ===== Desktop composition (fanned + absolute) ===== */}
            <div className="hidden sm:block">
              {/* Floating chips */}
              <div
                className="absolute left-6 top-6 z-[6]"
                style={{ transform: "rotate(-3deg)" }}
              >
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[12px] font-semibold text-body shadow-[0_10px_24px_-12px_rgba(2,89,78,0.5)] backdrop-blur">
                  <span className="text-sage">◆</span> Verified credential
                </span>
              </div>
              <div
                className="absolute right-6 top-8 z-[6]"
                style={{ transform: "rotate(3deg)" }}
              >
                <span className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3 py-1.5 text-[12px] font-semibold text-white shadow-[0_12px_26px_-12px_rgba(16,24,40,0.6)]">
                  2 programmes · 100%
                </span>
              </div>

              {/* Sparkles */}
              <span className="pointer-events-none absolute left-1/2 top-4 z-[2] text-[16px] text-sage/50">
                ✦
              </span>
              <span className="pointer-events-none absolute right-1/3 bottom-6 z-[2] text-[13px] text-[#2A9D6E]/50">
                ✦
              </span>

              {/* NEW element — a green "Certified" seal medal */}
              <div
                className="absolute bottom-8 left-8 z-[6] grid h-16 w-16 place-items-center rounded-full text-white shadow-[0_16px_30px_-12px_rgba(2,89,78,0.6)]"
                style={{
                  background: "linear-gradient(150deg,#2FBF84 0%,#1E9E68 100%)",
                  transform: "rotate(-8deg)",
                }}
              >
                <div className="flex flex-col items-center leading-none">
                  <span className="text-[15px]">★</span>
                  <span className="mt-0.5 text-[6.5px] font-bold uppercase tracking-[0.12em]">
                    Certified
                  </span>
                </div>
              </div>

              {/* Certificates */}
              <IsbCert
                className="absolute left-7 top-[70px] z-[4] w-[300px]"
                style={{ transform: "rotate(-4deg)" }}
              />
              <IdfCert
                className="absolute bottom-6 right-7 z-[5] w-[312px]"
                style={{ transform: "rotate(3deg)" }}
              />
            </div>

            {/* ===== Mobile composition (stacked + readable) ===== */}
            <div className="relative z-[4] flex flex-col items-center gap-6 sm:hidden">
              <div className="flex flex-wrap items-center justify-center gap-2">
                <StatusChips />
              </div>

              <IsbCert
                className="w-full max-w-[300px]"
                style={{ transform: "rotate(-1.5deg)" }}
              />
              <IdfCert
                className="w-full max-w-[300px]"
                style={{ transform: "rotate(1.5deg)" }}
              />

              {/* NEW element — seal, inline for mobile */}
              <div
                className="grid h-16 w-16 place-items-center rounded-full text-white shadow-[0_16px_30px_-12px_rgba(2,89,78,0.6)]"
                style={{
                  background: "linear-gradient(150deg,#2FBF84 0%,#1E9E68 100%)",
                  transform: "rotate(-8deg)",
                }}
              >
                <div className="flex flex-col items-center leading-none">
                  <span className="text-[15px]">★</span>
                  <span className="mt-0.5 text-[6.5px] font-bold uppercase tracking-[0.12em]">
                    Certified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
