import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Button from "../../components/Button";

export function Toast() {
  const { toast, setToast } = useContext(AppContext);

  const closeToast = () => {
    setToast((prev) => ({ ...prev, isActive: false }));
  };

  return (
    <div className={`toast ${toast.isActive ? "active" : ""}`}>
      <div className="toast__text">{toast.message}</div>
      <Button name="X" classes="btn btn--tertiary" func={closeToast} />
    </div>
  );
}
