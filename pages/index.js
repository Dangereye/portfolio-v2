import { useContext } from "react";
import Hero from "../articles/hero/Hero";
import Projects from "../articles/projects/Projects";
import Skills from "../articles/skills/Skills";
import About from "../articles/about/About";
import Contact from "../articles/contact/Contact";
import MobileMenu from "../layout/MobileMenu";
import usePageScroll from "../hooks/usePageScroll";
import { Toast } from "../articles/contact/Toast";
import { AppContext } from "../context/AppContext";

export default function Home() {
  const { menuIsOpen } = useContext(AppContext);
  const {} = usePageScroll();
  return (
    <>
      {!menuIsOpen ? (
        <>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Toast />
        </>
      ) : (
        <MobileMenu />
      )}
    </>
  );
}
