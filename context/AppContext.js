import { createContext, useState } from "react";
export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <AppContext.Provider value={{ menuIsOpen, setMenuIsOpen }}>
      {children}
    </AppContext.Provider>
  );
}
