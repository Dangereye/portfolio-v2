import ListGroup from "../components/ListGroup";
import { Pages } from "../data/Pages";
import { Connect } from "../data/Connect";
import { MdEmail } from "react-icons/md";
import IconText from "../components/IconText";

export default function () {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__links">
            <ListGroup heading="Pages" list={Pages} links />
            <ListGroup heading="Connect" list={Connect} anchors />
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
