"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Delay before the reveal animation starts, in ms. */
  delay?: number;
  /** Extra classes applied to the wrapper. */
  className?: string;
  /** Fraction of the element that must be visible before it reveals. */
  threshold?: number;
};

/**
 * Wraps a section so it fades + rises into view the first time it enters the
 * viewport on scroll. Purely presentational: renders its children unchanged,
 * only toggling the `.reveal` / `.is-visible` classes (see globals.css).
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  threshold = 0.15,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If the browser can't observe, or the user prefers reduced motion,
    // show the content immediately without animating.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
