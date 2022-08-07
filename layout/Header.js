import { useState, useEffect } from "react";
import Link from "next/link";
import MobileIcon from "./MobileIcon";
import Navigation from "./Navigation";
import useScaleDown from "../hooks/animation/useScaleDown";

export default function Header() {
  const [background, setBackground] = useState(false);
  const {} = useScaleDown(".header-animate", "#hero");

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
