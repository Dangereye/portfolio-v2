import MobileIcon from "./MobileIcon";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo">Craig Puxty</div>
          <Navigation />
          <MobileIcon />
        </div>
      </header>
    </>
  );
}
