import { useState, useEffect } from "react";
import MobileIcon from "./MobileIcon";
import Navigation from "./Navigation";

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

  return (
    <>
      <header className={background ? "header background" : "header"}>
        <div className="container">
          <div className="logo">Craig Puxty</div>
          <Navigation />
          <MobileIcon />
        </div>
      </header>
    </>
  );
}
