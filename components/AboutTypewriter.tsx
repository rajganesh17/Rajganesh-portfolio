"use client";

import { useEffect, useRef, useState } from "react";

// yevtam.com-style typewriter: the narrative types itself out, character by
// character, with a blinking caret. Copy is drawn from Raj's bio.
const PARAGRAPHS = [
  "It started with making things.",
  "Back in college, I was the Creative Director at my Rotaract Club and a Department Editor. I didn't know it at the time, but those experiences were slowly pulling me toward design - creating things, working with people, and figuring out how to communicate an idea clearly.",
  "That eventually led me to Katalyst Labs, where I started my product design career.",
  "My first big opportunity was Dataflo, where I worked on a product from 0 to 1. I wasn't just designing screens. I worked across the product, website, and design assets, and got to see how an idea slowly turns into something real.",
  "Then came Numero, where I started working on AI and finance products. The problems were more complex, the workflows were deeper, and the decisions mattered more. It pushed me to think beyond how something looks and focus more on why it should work that way.",
  "Today, I'm a Senior Product Designer with 5+ years of experience across AI, fintech, and B2B SaaS.",
  "I still enjoy the same thing I did back then: taking an idea, making sense of it, and turning it into something useful.",
  "That's probably what keeps me designing.",
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
