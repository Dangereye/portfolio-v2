import { createContext, useState } from "react";
export const AppContext = createContext();

const toastDefault = {
  isActive: false,
  message: "Golden brown.",
};

export default function AppProvider({ children }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [slideshowIsOpen, setSlideshowIsOpen] = useState(false);
  const [slideshowIndex, setSlideshowIndex] = useState(0);
  const [toast, setToast] = useState(toastDefault);

  return (
    <AppContext.Provider
      value={{
        menuIsOpen,
        setMenuIsOpen,
        slideshowIsOpen,
        setSlideshowIsOpen,
        slideshowIndex,
        setSlideshowIndex,
        toast,
        setToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
