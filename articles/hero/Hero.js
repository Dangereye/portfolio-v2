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
            <span>Bringing it</span>
            <span>all together</span>
          </h1>
          <p className="body-text">
            Together we'll develop & grow your ideas into a beautiful, modern,
            easy to use - reality.
          </p>
          <div className="btns">
            <Link href="/#portfolio">
              <a className="btn btn--primary btn--large">Recent Projects</a>
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
