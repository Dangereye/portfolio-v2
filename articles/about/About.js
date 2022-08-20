// Components
import Image from "next/image";
import Link from "next/link";
import ArticleHeading from "../../components/ArticleHeading";

// Animation hook
import useAnimation from "../../hooks/useAnimation";

export default function About() {
  // Animation
  // useAnimation(element id,trigger id,{animation options},{trigger options})
  const {} = useAnimation(".about-animate", "#about", {
    duration: 1,
    scale: 1.3,
  });

  const {} = useAnimation(".about-animate-text", "#about", {
    y: -300,
    delay: 0.4,
    stagger: 0.05,
    ease: "back.out(1.4)",
  });

  return (
    <article className="article article__about" id="about">
      <div className="container">
        <div className="image about-animate">
          <Image
            src="/img/about/profile.jpg"
            width="500"
            height="500"
            alt="Craig Puxty"
          />
        </div>
        <div className="text">
          <header className="article__header about-animate-text">
            <ArticleHeading lead="About me" h2="Your problems, solved!" />
          </header>
          <p className="body-text body-text--lead about-animate-text">
            Specializing in React JS and Next JS development.
          </p>
          <p className="body-text about-animate-text">
            Hi! I'm Craig Puxty, a bespoke front-end developer from a small town
            in Flintshire, North Wales, UK.
          </p>
          <p className="body-text about-animate-text">
            Over several years, I've dedicated much of my free time to gaining
            proficiency in several front-end technologies and design tools,
            together with some back-end knowledge.
          </p>
          <p className="body-text about-animate-text">
            I am an analytical thinker, able to identify and define problems and
            then develop a workable solution.
          </p>
          <p className="body-text about-animate-text">
            I am meticulous in my development process, following fundamental
            principles; KISS, DRY, navigation, visual hierarchy, consistency,
            etc.
          </p>
          <p className="body-text about-animate-text">
            I can create beautiful, modern software with custom, high-quality
            imagery - that's scalable, device responsive and performance-driven.
          </p>
          <div className="btns about-animate-text">
            <Link href="/#contact">
              <a className="btn btn--large btn--primary ">Contact me</a>
            </Link>
            <a href="/" className="btn btn--large btn--tertiary">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
