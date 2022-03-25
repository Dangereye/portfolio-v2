import MobileIcon from "./MobileIcon";
import Navigation from "./Navigation";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo">logo</div>
          <Navigation />
          <MobileIcon />
        </div>
      </nav>
    </>
  );
}
