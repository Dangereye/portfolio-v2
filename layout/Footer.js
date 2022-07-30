import ListGroup from "../components/ListGroup";

export default function () {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="copyright">
            &copy; Craig Puxty - 2022. All Rights Reserved.
          </div>
          <div className="footer__links">
            <ListGroup />
          </div>
        </div>
      </footer>
    </>
  );
}
