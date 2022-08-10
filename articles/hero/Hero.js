import Link from "next/link";
import CompassSvg from "../../svgs/Compass";
import NextSVG from "../../svgs/Next";
import ReactSvg from "../../svgs/React";
import ScreenSvg from "../../svgs/Screens";
import Feature from "./Feature";

import useScaleDown from "../../hooks/animation/useScaleDown";
import useFadeDown from "../../hooks/animation/useFadeDown";
import Anchor from "../../components/Anchor";

export default function Hero() {
  const {} = useScaleDown(".hero-animate-bg", "#hero");
  const {} = useFadeDown(".hero-animate", "#hero");

  return (
    <article className="article article__hero" id="hero">
      <div className="background hero-animate-bg"></div>
      <div className="container">
        <div className="typography">
          <div className="heading heading--lead hero-animate">
            Front-end developer
          </div>
          <h1 className="heading heading--h1">
            <div className="hero-animate">I build things</div>
            <div className="hero-animate">
              for the <span>Web</span>
            </div>
          </h1>
          <p className="body-text hero-animate">
            I’m a software engineer specializing in{" "}
            <Anchor anchor="https://reactjs.org" text="React JS" /> &amp;{" "}
            <Anchor anchor="https://nextjs.org/" text="Next JS" /> development.
            I love building (and occasionally designing) beautiful, modern,
            responsive and performant user experiences.
          </p>
          <div className="btns hero-animate">
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
