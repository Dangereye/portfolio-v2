// Components
import Link from "next/link";
import ListGroup from "../components/ListGroup";
import LinkGroup from "../components/LinkGroup";
import IconText from "../components/IconText";
import AnchorGroup from "../components/AnchorGroup";
import Button from "../components/Button";

// Data
import { Pages } from "../data/Pages";
import { Connect } from "../data/Connect";
import { SourceCode } from "../data/SourceCode";

// Icons
import { MdEmail } from "react-icons/md";
import { BiArrowToTop } from "react-icons/bi";

// Hooks
import useModal from "../hooks/useModal";

export default function () {
  const { downloadCV } = useModal();
  return (
    <footer className="footer">
      <Link href="/">
        <a
          className="btn btn--primary btn--back-to-top"
          aria-label="back to the top"
        >
          <BiArrowToTop />
        </a>
      </Link>

      <div className="container">
        <div className="footer__links">
          <LinkGroup heading="Pages" list={Pages} />
          <AnchorGroup heading="Connect" list={Connect} />
          <AnchorGroup heading="Source Code" list={SourceCode} />
          <div>
            <h3 className="heading heading--h3">Download</h3>
            <Button
              name="Curriculum vitae"
              classes="btn--tertiary"
              func={downloadCV}
            />
          </div>
          <ListGroup
            heading="Contact"
            list={[<IconText icon={<MdEmail />} text="contactpux@gmail.com" />]}
          />
        </div>
        <div className="copyright">
          &copy; Craig Puxty - 2022. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
