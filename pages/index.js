import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import About from "../articles/About";
import Contact from "../articles/contact/Contact";
import Hero from "../articles/hero/Hero";
import Photoshop from "../articles/photoshop/Photoshop";
import Portfolio from "../articles/portfolio/Portfolio";
import Skills from "../articles/skills/Skills";
import Slideshow from "../components/Slideshow/Slideshow";
import usePageScroll from "../hooks/usePageScroll";
import { Toast } from "../articles/contact/Toast";

export default function Home() {
  const { slideshowIsOpen } = useContext(AppContext);
  const {} = usePageScroll();
  return (
    <>
      {!slideshowIsOpen ? (
        <>
          <Hero />
          <Portfolio />
          {/* <Photoshop /> */}
          {/* <Skills /> */}
          {/* <About /> */}
          <Contact />
          <Toast />
        </>
      ) : (
        <Slideshow />
      )}
    </>
  );
}
