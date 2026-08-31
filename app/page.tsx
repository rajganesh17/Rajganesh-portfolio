import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Community from "@/components/Community";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <div className="mx-auto max-w-content px-8">
      <Navbar />
      <Reveal>
        <Hero />
      </Reveal>
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Capabilities />
      </Reveal>
      <Reveal>
        <Community />
      </Reveal>
      <Reveal>
        <Footer />
      </Reveal>
    </div>
  );
}
