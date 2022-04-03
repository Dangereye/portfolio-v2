import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function MobileIcon() {
  const { menuIsOpen, setMenuIsOpen } = useContext(AppContext);

  const handleKeyDown = (e) => {
    if (e.code === "Enter") {
      setMenuIsOpen(!menuIsOpen);
    }
  };

  return (
    <div
      tabIndex="0"
      className={menuIsOpen ? "mobile-icon open" : "mobile-icon"}
      onClick={() => setMenuIsOpen(!menuIsOpen)}
      onKeyDown={handleKeyDown}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
