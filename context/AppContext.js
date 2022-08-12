import { createContext, useState } from "react";
export const AppContext = createContext();

const toastDefault = {
  message: "Golden brown.",
  status: "",
  icon: "",
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
