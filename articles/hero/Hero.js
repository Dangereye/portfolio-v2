import Link from "next/link";
import BgHighlight from "../../components/BgHighlight";
import CompassSvg from "../../svgs/Compass";
import NextSVG from "../../svgs/Next";
import ReactSvg from "../../svgs/React";
import ScreenSvg from "../../svgs/Screens";
import Highlight from "./Highlight";

export default function Hero() {
  return (
    <article className="article article__hero">
      <BgHighlight pos="top-left" />
      <BgHighlight pos="bottom-right" />
      <div className="container">
        <div className="typography-and-cta">
          <div className="heading heading--lead">Front-end developer</div>
          <h1 className="heading heading--h1">
            <div>I build things</div>
            <div>
              for the <span>web</span>
            </div>
          </h1>
          <p className="body-text">
            I love building (and occasionally designing) exceptional user
            experiences. Currently, I'm focused on building with{" "}
            <span>React JS</span> &amp; <span>Next Js</span>.
          </p>
          <div className="btns">
            <Link href="/#portfolio">
              <a className="btn btn--primary btn--large">
                Explore latest projects
              </a>
            </Link>
          </div>
        </div>
        <div className="highlights">
          <Highlight icon={<ReactSvg />} text="React JS Focused" />
          <Highlight icon={<NextSVG />} text="Enhanced with Next JS" />
          <Highlight icon={<CompassSvg />} text="Modern Designs" />
          <Highlight icon={<ScreenSvg />} text="Multi-device responsive" />
        </div>
      </div>
    </article>
  );
}
