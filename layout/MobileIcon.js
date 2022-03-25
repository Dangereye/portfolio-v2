import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function MobileIcon() {
  const { menuIsOpen, setMenuIsOpen } = useContext(AppContext);

  return (
    <div
      className={menuIsOpen ? "mobile-icon open" : "mobile-icon"}
      onClick={() => setMenuIsOpen(!menuIsOpen)}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
