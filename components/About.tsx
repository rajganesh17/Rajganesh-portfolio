import { readFileSync } from "fs";
import path from "path";

// The collage ships as an element-wrapped, size-optimised SVG. It is inlined
// (not an <img>) so each piece's `.cpop:hover` pop can run — an <img> renders
// the SVG but gives its inner nodes no interactivity.
const collageSvg = readFileSync(
  path.join(process.cwd(), "public/images/about-collage.opt.svg"),
  "utf8"
);

export default function About() {
  return (
    <section id="about" className="pt-0 pb-11">
      <div
        className="relative w-full"
        style={{ aspectRatio: "1230 / 650", containerType: "inline-size", marginLeft: "16px" }}
      >
        <div
          className="absolute inset-0 [&>svg]:block [&>svg]:h-full [&>svg]:w-full [&_svg]:overflow-visible"
          dangerouslySetInnerHTML={{ __html: collageSvg }}
        />

        {/* Corrected headline typo ("I THINK, THEN I BULD" in the source asset) */}
        <div
          className="pointer-events-none absolute flex items-center justify-center"
          style={{ left: "34.6%", top: "45.0%", width: "33.2%", height: "8.0%", background: "#F4F3F1" }}
        >
          <span
            className="font-sans font-bold uppercase"
            style={{ fontSize: "2.3cqw", letterSpacing: "0.06em", lineHeight: 1, color: "rgba(27, 30, 39, 0.5)" }}
          >
            I think, then I build
          </span>
        </div>
      </div>
    </section>
  );
}
