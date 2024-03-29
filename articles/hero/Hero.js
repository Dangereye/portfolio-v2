// Components
import Link from "next/link";
import Anchor from "../../components/Anchor";
import Feature from "./Feature";

// SVGs
import ReactSvg from "../../svgs/React";
import NextSVG from "../../svgs/Next";
import CompassSvg from "../../svgs/Compass";
import ScreenSvg from "../../svgs/Screens";

// Animation hook
import useAnimation from "../../hooks/useAnimation";

export default function Hero() {
  // Animation
  // useAnimation(element id,trigger id,{animation options},{trigger options})
  const {} = useAnimation(".hero-animate-bg", "#hero", {
    y: 0,
    scale: 1.3,
    duration: 1,
  });

  const {} = useAnimation(".hero-animate-up", "#hero", {
    delay: 0,
    duration: 1,
  });

  const {} = useAnimation(".hero-animate-down", "#hero", {
    y: -300,
    delay: 0.4,
    stagger: 0.05,
    ease: "back.out(1.4)",
  });

  return (
    <article className="article article__hero" id="hero">
      <div className="background hero-animate-bg"></div>
      <div className="container">
        <div className="typography">
          <div className="heading heading--lead hero-animate-down">
            Front-end developer
          </div>
          <h1 className="heading heading--h1">
            <div className="hero-animate-down">I build things</div>
            <div className="hero-animate-down">
              for the <span>Web</span>
            </div>
          </h1>
          <p className="body-text hero-animate-down">
            Specialising in{" "}
            <Anchor anchor="https://reactjs.org" text="React.js" /> and{" "}
            <Anchor anchor="https://nextjs.org/" text="Next.js" /> development.
            <br /> I love building (and occasionally designing) beautiful,
            modern software that's accessible, scalable, responsive and
            performance-driven.
          </p>
          <div className="btns hero-animate-down">
            <Link href="/#projects">
              <a className="btn btn--primary btn--large">Latest projects</a>
            </Link>
          </div>
        </div>
        <div className="features hero-animate-up">
          <Feature icon={<ReactSvg />} text="React.js focused" />
          <Feature icon={<NextSVG />} text="Enhanced with Next.js" />
          <Feature icon={<CompassSvg />} text="Modern designs" />
          <Feature icon={<ScreenSvg />} text="Device responsive" />
        </div>
      </div>
    </article>
  );
}
