import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import AboutContent from "@/components/AboutContent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About — Raj Ganesh",
  description:
    "A little more about Raj Ganesh — Senior Product Designer designing 0→1 AI & fintech at Katalyst Labs, and a builder who ships side projects by night.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-content px-8">
      <Navbar />

      {/* Header: the desk-collage, reused from the home About section */}
      <main className="pt-2">
        <About />
        {/* Typewriter narrative; the footer reveals only once it finishes typing. */}
        <AboutContent>
          <Footer />
        </AboutContent>
      </main>
    </div>
  );
}
