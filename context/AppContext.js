export const AppContext = createContext();

import { createContext, useState } from "react";

// Data
import { toastDefault } from "../data/toastDefault";
import { modalDefault } from "../data/modalDefault";

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
