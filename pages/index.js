import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import About from "../articles/About";
import Contact from "../articles/Contact";
import Hero from "../articles/hero/Hero";
import Photoshop from "../articles/photoshop/Photoshop";
import Portfolio from "../articles/portfolio/Portfolio";
import Skills from "../articles/skills/Skills";
import Slideshow from "../components/Slideshow/Slideshow";

export default function Home() {
  const { slideshowIsOpen } = useContext(AppContext);
  return (
    <>
      {!slideshowIsOpen ? (
        <>
          <Hero />
          <Portfolio />
          <Skills />
          <Photoshop />
          <About />
          <Contact />
        </>
      ) : (
        <Slideshow />
      )}
    </>
  );
}
