import { useContext } from "react";
import { AppContext } from "../context/AppContext";

// Components
import Button from "../components/Button";

// Data
import { modalDefault } from "../data/modalDefault";

export default function useModal() {
  const { setModal } = useContext(AppContext);

  const closeModal = () => {
    setModal(modalDefault);
  };

  const downloadCV = () =>
    setModal({
      heading: "Confirmation",
      message: "Download curriculum vitae in PDF format?",
      buttons: (
        <>
          <Button
            name="Cancel"
            classes="btn-large btn--secondary"
            func={closeModal}
          />
          <a
            href="/curriculum_vitae.pdf"
            className="btn btn--large btn--primary"
            download
            onClick={closeModal}
          >
            Yes, download CV
          </a>
        </>
      ),
      isOpen: true,
    });

  return { closeModal, downloadCV };
}
