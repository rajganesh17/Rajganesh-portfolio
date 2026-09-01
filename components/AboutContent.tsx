"use client";

import { useState, type ReactNode } from "react";
import AboutTypewriter from "@/components/AboutTypewriter";

/**
 * Runs the typewriter narrative, then fades the footer (passed as children)
 * into view only once the text has finished typing.
 */
export default function AboutContent({ children }: { children: ReactNode }) {
  const [done, setDone] = useState(false);

  return (
    <>
      <AboutTypewriter onDone={() => setDone(true)} />
      <div className={`reveal ${done ? "is-visible" : ""}`} aria-hidden={!done}>
        {children}
      </div>
    </>
  );
}
