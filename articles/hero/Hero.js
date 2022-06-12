import Link from "next/link";
import BgHighlight from "../../components/BgHighlight";
import CompassSvg from "../../svgs/Compass";
import NextSVG from "../../svgs/Next";
import ReactSvg from "../../svgs/React";
import ScreenSvg from "../../svgs/Screens";
import Feature from "./Feature";

export default function Hero() {
  return (
    <article className="article article__hero">
      <BgHighlight pos="top-left" />
      <BgHighlight pos="bottom-right" />
      <div className="container">
        <div className="typography">
          <div className="heading heading--lead">Front-end developer</div>
          <h1 className="heading heading--h1">
            <div>I build things</div>
            <div>
              for the <span>Web</span>
            </div>
          </h1>
          <p className="body-text">
            I love building (and increasingly designing) exceptional user
            experiences. Currently, my focus is <span>React JS</span> &amp;{" "}
            <span>Next Js</span> driven.
          </p>
          <div className="btns">
            <Link href="/#portfolio">
              <a className="btn btn--primary btn--large">Latest projects</a>
            </Link>
          </div>
        </div>
        <div className="features">
          <Feature icon={<ReactSvg />} text="React JS Focused" />
          <Feature icon={<NextSVG />} text="Enhanced with Next JS" />
          <Feature icon={<CompassSvg />} text="Modern Designs" />
          <Feature icon={<ScreenSvg />} text="Multi-device responsive" />
        </div>
      </div>
    </article>
  );
}
