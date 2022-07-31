import Link from "next/link";
import CompassSvg from "../../svgs/Compass";
import NextSVG from "../../svgs/Next";
import ReactSvg from "../../svgs/React";
import ScreenSvg from "../../svgs/Screens";
import Feature from "./Feature";

export default function Hero() {
  return (
    <article className="article article__hero">
      <div className="background"></div>
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
            I love building (and occasionally designing) exceptional user
            experiences. My niche concerns <span>React JS</span> &amp;{" "}
            <span>Next JS</span> orientated development.
          </p>
          <div className="btns">
            <Link href="/#portfolio">
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
