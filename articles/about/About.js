import Image from "next/image";
import Link from "next/link";
import ArticleHeading from "../../components/ArticleHeading";
import useScaleDown from "../../hooks/animation/useScaleDown";
import useFadeDown from "../../hooks/animation/useFadeDown";

export default function About() {
  const {} = useScaleDown(".about-animate", "#about");
  const {} = useFadeDown(".about-animate-text", "#about");
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
            <ArticleHeading lead="" h2="About me" />
          </header>
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
          <div className="btns ">
            <Link href="/#contact">
              <a className="btn btn--large btn--primary about-animate-text">
                Contact me
              </a>
            </Link>
            <a
              href="/"
              className="btn btn--large btn--tertiary about-animate-text"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
