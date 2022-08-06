import { useState, useEffect } from "react";
import Link from "next/link";
import MobileIcon from "./MobileIcon";
import Navigation from "./Navigation";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const [background, setBackground] = useState(false);

  const handleScroll = () => {
    window.scrollY > 25 ? setBackground(true) : setBackground(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    const animate = gsap.from(".header-animate", {
      opacity: 0,
      scale: 1.2,
      duration: 1,
      delay: 0.3,
      ease: "back.out(1.1)",
      scrollTrigger: "#hero",
    });
    return () => {
      animate.kill();
    };
  }, []);

  return (
    <>
      <header
        className={
          background
            ? "header header-animate background"
            : "header header-animate"
        }
      >
        <div className="container">
          <Link href="/">
            <a className="logo">Craig Puxty</a>
          </Link>
          <Navigation />
          <MobileIcon />
        </div>
      </header>
    </>
  );
}
