import { useState, useEffect } from "react";

// Components
import Link from "next/link";
import MobileIcon from "./MobileIcon";
import Navigation from "./Navigation";

// Animation hooks
import useMove from "../hooks/animation/useMove";

export default function Header() {
  const [background, setBackground] = useState(false);

  // Animation
  // useHook(element id,trigger id,{animation options},{trigger options})
  const {} = useMove(".header-animate", "#hero", {
    y: -300,
    duration: 1,
    delay: 0,
  });

  const handleScroll = () => {
    window.scrollY > 25 ? setBackground(true) : setBackground(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

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
