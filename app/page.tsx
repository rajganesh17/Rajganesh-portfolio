import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="mx-auto max-w-content px-8">
      <Navbar />
      <Hero />
      <About />
      <Capabilities />
      <Community />
      <Footer />
    </div>
  );
}
