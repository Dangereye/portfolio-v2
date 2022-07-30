import ListGroup from "../components/ListGroup";
import LinkGroup from "../components/LinkGroup";
import { Pages } from "../data/Pages";
import { Connect } from "../data/Connect";
import { MdEmail } from "react-icons/md";
import IconText from "../components/IconText";
import AnchorGroup from "../components/AnchorGroup";

export default function () {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__links">
            <LinkGroup heading="Pages" list={Pages} />
            <AnchorGroup heading="Connect" list={Connect} />
            <ListGroup
              heading="Contact"
              list={[
                <IconText icon={<MdEmail />} text="craig_puxty@talktalk.net" />,
              ]}
            />
          </div>
          <div className="copyright">
            &copy; Craig Puxty - 2022. All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
