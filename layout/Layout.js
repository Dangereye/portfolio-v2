import { AppContext } from "../context/AppContext";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";
import Modal from "../components/Modal";

export default function Layout({ children }) {
  const { menuIsOpen, setMenuIsOpen, modal } = useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
    if (menuIsOpen) {
      setMenuIsOpen(false);
    }
  }, [router.asPath]);

  return (
    <div className="layout">
      <Header />
      <MobileMenu />
      {modal.isOpen && <Modal />}
      {children}
      <Footer />
    </div>
  );
}
