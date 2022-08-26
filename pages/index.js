// Components
import Hero from "../articles/hero/Hero";
import Projects from "../articles/projects/Projects";
import Skills from "../articles/skills/Skills";
import About from "../articles/about/About";
import Contact from "../articles/contact/Contact";
import usePageScroll from "../hooks/usePageScroll";
import { Toast } from "../articles/contact/Toast";
import Head from "next/head";

export default function Home() {
  const {} = usePageScroll();
  return (
    <>
      <Head>
        <title>Craig Puxty | Portfolio</title>
        <meta name="author" content="Craig Puxty" />
        <meta
          name="description"
          content="I build things for the web. Specializing in React.js and Next.js development.
I love building (and occasionally designing) beautiful, modern software that's accessible, scalable, responsive and performance-driven."
        />
        <meta
          name="keywords"
          content="web developer, front-end developer, react developer, next developer, software engineer"
        />
      </Head>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Toast />
    </>
  );
}
