import Link from "next/link";
import CompassSvg from "../../svgs/Compass";
import NextSVG from "../../svgs/Next";
import ReactSvg from "../../svgs/React";
import ScreenSvg from "../../svgs/Screens";
import Highlight from "./Highlight";

export default function Hero() {
  return (
    <section className="section section__hero">
      <div className="container">
        <div className="typography-and-cta">
          <h1 className="display-heading">
            <span>Front-End</span>
            <span>Developer</span>
          </h1>
          <p className="body-text">
            Not your average developer - get ready to transform your ideas into
            reality.
          </p>
          <div className="btns">
            <Link href="/#portfolio">
              <a className="btn btn--primary">Recent Projects</a>
            </Link>
          </div>
        </div>
        <div className="highlights">
          <Highlight icon={<ReactSvg />} text="React JS Focused" />
          <Highlight icon={<NextSVG />} text="Next JS Enhanced" />
          <Highlight icon={<CompassSvg />} text="Modern Design" />
          <Highlight icon={<ScreenSvg />} text="Fully Responsive" />
        </div>
      </div>
    </section>
  );
}
