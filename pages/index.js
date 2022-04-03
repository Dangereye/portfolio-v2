import About from "../sections/About";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import Photoshop from "../sections/Photoshop";
import Portfolio from "../sections/Portfolio";
import Skills from "../sections/Skills";

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
