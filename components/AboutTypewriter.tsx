"use client";

import { useEffect, useRef, useState } from "react";

// yevtam.com-style typewriter: the narrative types itself out, character by
// character, with a blinking caret. Copy is drawn from Raj's bio.
const PARAGRAPHS = [
  "I'm Raj — a Senior Product Designer with roots in data and engineering.",
  "By day I design 0→1 AI and fintech products at Katalyst Labs. By night I build side projects — 20+ and counting.",
  "I think, then I build: research, prototype, argue about trade-offs, and ship. Not just a designer — a builder who happens to design.",
];

const FULL = PARAGRAPHS.join("\n\n");

export default function AboutTypewriter({
  onDone,
}: {
  /** Fires once the full narrative has finished typing (or immediately under reduced-motion). */
  onDone?: () => void;
}) {
  const [count, setCount] = useState(0);

  // Keep the latest callback without re-running the typing effect.
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    // Respect reduced-motion: show the whole thing at once.
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setCount(FULL.length);
      onDoneRef.current?.();
      return;
    }

    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      i += 1;
      setCount(i);
      if (i >= FULL.length) {
        onDoneRef.current?.();
        return;
      }
      // Pause a beat at the paragraph breaks; type at a lively, uneven pace.
      const justTyped = FULL[i - 1];
      const delay = justTyped === "\n" ? 120 : 8 + Math.random() * 16;
      timer = setTimeout(tick, delay);
    };
    timer = setTimeout(tick, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="mx-auto min-h-[420px] max-w-[860px] px-2 pb-24 pt-7 sm:pt-20">
      <div className="mb-6 font-mono text-[13px] uppercase tracking-[0.18em] text-faint">
        About
      </div>
      <p className="m-0 whitespace-pre-wrap font-sans text-[clamp(19px,2.3vw,30px)] font-medium leading-[1.45] tracking-[-0.01em] text-ink">
        {FULL.slice(0, count)}
        {count < FULL.length && <span className="about-caret" aria-hidden />}
      </p>
    </section>
  );
}
