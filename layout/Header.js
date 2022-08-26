import { useState, useEffect } from "react";
import { useRouter } from "next/router";

// Components
import Link from "next/link";
import MobileIcon from "./MobileIcon";
import Navigation from "./Navigation";

// Animation hooks
import useAnimation from "../hooks/useAnimation";

export default function Header() {
  const [background, setBackground] = useState(false);
  const router = useRouter();
  const { route } = router;

  // Animation
  // useHook(element id,trigger id,{animation options},{trigger options})
  const {} = useAnimation(".header-animate", "#header", {
    y: -300,
    duration: 1,
    delay: 0,
  });

  const handleScroll = () => {
    window.scrollY > 25 ? setBackground(true) : setBackground(false);
  };

  useEffect(() => {
    if (route !== "/") {
      setBackground(true);
    }
  });

  useEffect(() => {
    if (route === "/") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  });

  return (
    <>
      <header
        className={
          background
            ? "header header-animate background"
            : "header header-animate"
        }
        id="header"
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
