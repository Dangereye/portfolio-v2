import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { MdClose } from "react-icons/md";
import Button from "../../components/Button";

export function Toast() {
  const { toast, setToast } = useContext(AppContext);
  const closeToast = () => {
    setToast({ message: "", status: "" });
  };

  return (
    <div className={`toast ${toast.status}`}>
      <div className="container">
        <div className="toast__message">
          <div className="toast__icon">{toast.icon}</div>
          <div className="toast__text">{toast.message}</div>
        </div>

        <Button
          icon={<MdClose />}
          name={null}
          classes="btn btn--toast "
          func={closeToast}
        />
      </div>
    </div>
  );
}
