import About from "../articles/About";
import Contact from "../articles/Contact";
import Hero from "../articles/hero/Hero";
import Photoshop from "../articles/photoshop/Photoshop";
import Portfolio from "../articles/portfolio/Portfolio";
import Skills from "../articles/skills/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Portfolio />
      <Skills />
      <Photoshop />
      <About />
      <Contact />
    </>
  );
}
