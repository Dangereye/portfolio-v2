import { AppContext } from "../context/AppContext";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
export default function Layout({ children }) {
  const { menuIsOpen, setMenuIsOpen } = useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
    if (menuIsOpen) {
      setMenuIsOpen(false);
    }
  }, [router.asPath]);

  return <div className="layout">{children}</div>;
}
