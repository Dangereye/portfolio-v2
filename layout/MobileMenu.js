import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import useFadeRight from "../hooks/animation/useFadeRight";
import Navigation from "./Navigation";

export default function MobileMenu() {
  const { menuIsOpen } = useContext(AppContext);
  const {} = useFadeRight(menuIsOpen, ".mobile-menu-animate", "#mobile-menu");
  return (
    <div
      className={menuIsOpen ? "mobile-menu open" : "mobile-menu"}
      id="mobile-menu"
    >
      <div className="container">
        <Navigation anim="mobile-menu-animate" />
      </div>
    </div>
  );
}
