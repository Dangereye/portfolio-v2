import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Modal() {
  const { modal } = useContext(AppContext);

  return (
    <div className="modal">
      <div className="heading heading--h3">{modal.heading}</div>
      <p className="body-text">{modal.message}</p>
      <div className="btns">{modal.buttons}</div>
    </div>
  );
}
