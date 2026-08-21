import Image from "next/image";
import aboutCollage from "@/public/images/about-collage.svg";

export default function About() {
  return (
    <section id="about" className="pt-0 pb-11 overflow-hidden">
      <div
        className="relative w-full overflow-hidden"
        style={{
          aspectRatio: "1230 / 650",
          containerType: "inline-size",
          marginLeft: "16px",
        }}
      >
        <Image
          src={aboutCollage}
          alt="Desk collage: plant, coffee, notes, a terminal window, a playlist card, and a philosophy board"
          fill
          className="object-contain"
          unoptimized
          priority
        />

        {/* Corrected headline typo ("I THINK, THEN I BULD" in the source asset) */}
        <div
          className="absolute flex items-center justify-center"
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
