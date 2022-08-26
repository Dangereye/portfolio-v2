import { createContext, useState } from "react";

export const AppContext = createContext();

const toastDefault = {
  message: "Golden brown.",
  status: "",
  icon: "",
};

const modalDefault = {
  heading: "heading",
  message: "Modal default text",
  buttons: null,
  isOpen: true,
};

export default function AppProvider({ children }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [modal, setModal] = useState(modalDefault);
  const [toast, setToast] = useState(toastDefault);

  return (
    <AppContext.Provider
      value={{
        menuIsOpen,
        setMenuIsOpen,
        modal,
        setModal,
        toast,
        setToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
