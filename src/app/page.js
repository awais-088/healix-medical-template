import Navbar from "@/components/layout/Navbar";
import WhyChoose from "@/sections/whyChoose/WhyChoose";
import Hero from "@/sections/hero/Hero";
import About from "@/sections/about/About";
export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <About />
      <WhyChoose />
    </>
  );
}
