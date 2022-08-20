// Components
import Link from "next/link";
import Anchor from "../../components/Anchor";
import Feature from "./Feature";

// SVGs
import ReactSvg from "../../svgs/React";
import NextSVG from "../../svgs/Next";
import CompassSvg from "../../svgs/Compass";
import ScreenSvg from "../../svgs/Screens";

// Animation hooks
import useScale from "../../hooks/animation/useScale";
import useMove from "../../hooks/animation/useMove";

export default function Hero() {
  // Animation
  // useHook(element id,trigger id,{animation options},{trigger options})
  const {} = useScale(".hero-animate-bg", "#hero");
  const {} = useMove(".hero-animate-up", "#hero");
  const {} = useMove(".hero-animate-down", "#hero", {
    y: -300,
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
            Specializing in{" "}
            <Anchor anchor="https://reactjs.org" text="React JS" /> and{" "}
            <Anchor anchor="https://nextjs.org/" text="Next JS" /> development.
            <br /> I love building (and occasionally designing) beautiful,
            modern software that's both responsive and performance-driven.
          </p>
          <div className="btns hero-animate-down">
            <Link href="/#projects">
              <a className="btn btn--primary btn--large">Latest projects</a>
            </Link>
          </div>
        </div>
        <div className="features">
          <Feature icon={<ReactSvg />} text="React JS focused" />
          <Feature icon={<NextSVG />} text="Enhanced with Next JS" />
          <Feature icon={<CompassSvg />} text="Modern designs" />
          <Feature icon={<ScreenSvg />} text="Device responsive" />
        </div>
      </div>
    </article>
  );
}
