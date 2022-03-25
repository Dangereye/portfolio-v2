import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Navigation from "./Navigation";

export default function MobileMenu() {
  const { menuIsOpen } = useContext(AppContext);
  return (
    <div className={menuIsOpen ? "mobile-menu open" : "mobile-menu"}>
      <div className="container">
        <Navigation />
      </div>
    </div>
  );
}
