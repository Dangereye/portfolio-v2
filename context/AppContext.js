import { createContext, useState } from "react";
export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [slideshowIsOpen, setSlideshowIsOpen] = useState(false);
  const [slideshowIndex, setSlideshowIndex] = useState(0);

  return (
    <AppContext.Provider
      value={{
        menuIsOpen,
        setMenuIsOpen,
        slideshowIsOpen,
        setSlideshowIsOpen,
        slideshowIndex,
        setSlideshowIndex,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
