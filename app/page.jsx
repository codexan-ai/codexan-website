import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Platforms from "@/components/Platforms";
import Process from "@/components/Process";
import CaseStudies from "@/components/CaseStudies";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Platforms />
      <Process />
      <CaseStudies />
      <About />
      <Contact />
    </>
  );
}
