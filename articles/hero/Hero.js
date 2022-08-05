import Link from "next/link";
import CompassSvg from "../../svgs/Compass";
import NextSVG from "../../svgs/Next";
import ReactSvg from "../../svgs/React";
import ScreenSvg from "../../svgs/Screens";
import Feature from "./Feature";

import { useEffect } from "react";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  useEffect(() => {
    const animate = gsap.from(".hero-animate", {
      opacity: 0,
      y: -100,
      stagger: 0.1,
      duration: 0.3,
      delay: 1,
      scrollTrigger: "#hero",
    });
    return () => {
      animate.kill();
    };
  }, []);
  return (
    <article className="article article__hero" id="hero">
      <div className="background"></div>
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
            I love building (and occasionally designing) exceptional user
            experiences. My niche concerns <span>React JS</span> &amp;{" "}
            <span>Next JS</span> orientated development.
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
