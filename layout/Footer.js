// Components
import Link from "next/link";
import ListGroup from "../components/ListGroup";
import LinkGroup from "../components/LinkGroup";
import IconText from "../components/IconText";
import AnchorGroup from "../components/AnchorGroup";
import DownloadGroup from "../components/DownloadGroup";

// Data
import { Pages } from "../data/Pages";
import { Connect } from "../data/Connect";
import { SourceCode } from "../data/SourceCode";
import { Downloads } from "../data/Downloads";

// Icons
import { MdEmail } from "react-icons/md";
import { BiArrowToTop } from "react-icons/bi";

export default function () {
  return (
    <footer className="footer">
      <Link href="/">
        <a className="btn btn--primary btn--back-to-top">
          <BiArrowToTop />
        </a>
      </Link>

      <div className="container">
        <div className="footer__links">
          <LinkGroup heading="Pages" list={Pages} />
          <AnchorGroup heading="Connect" list={Connect} />
          <AnchorGroup heading="Source Code" list={SourceCode} />
          <DownloadGroup heading="Downloads" list={Downloads} />
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
