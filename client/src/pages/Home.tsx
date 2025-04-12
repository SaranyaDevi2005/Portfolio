import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Activities from "@/components/sections/Activities";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="font-sans bg-light text-dark min-h-screen">
      <Header />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Activities />
      <Contact />
      <Footer />
    </div>
  );
}
