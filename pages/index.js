import Hero from "../articles/hero/Hero";
import Portfolio from "../articles/portfolio/Portfolio";
import Skills from "../articles/skills/Skills";
import About from "../articles/About";
import Contact from "../articles/contact/Contact";
import usePageScroll from "../hooks/usePageScroll";
import { Toast } from "../articles/contact/Toast";

export default function Home() {
  const {} = usePageScroll();
  return (
    <>
      <Hero />
      <Portfolio />
      <Skills />
      {/* <About /> */}
      <Contact />
      <Toast />
    </>
  );
}
