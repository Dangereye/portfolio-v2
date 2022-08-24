import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import useAnimation from "../hooks/useAnimation";
import Navigation from "./Navigation";

export default function MobileMenu() {
  const { menuIsOpen } = useContext(AppContext);
  const id = menuIsOpen ? ".mobile-menu-animate" : null;
  const {} = useAnimation(id, "#mobile-menu", { y: 0, x: -300, stagger: 0.05 });
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
