import { createContext, useState } from "react";
export const AppContext = createContext();

const toastDefault = {
  isActive: false,
  message: "Golden brown.",
};

export default function AppProvider({ children }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [toast, setToast] = useState(toastDefault);

  return (
    <AppContext.Provider
      value={{
        menuIsOpen,
        setMenuIsOpen,
        toast,
        setToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
