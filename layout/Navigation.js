import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li>
          <Link href="/#portfolio">
            <a className="navigation__link">Portfolio</a>
          </Link>
        </li>
        <li>
          <Link href="/#skills">
            <a className="navigation__link">Skills</a>
          </Link>
        </li>
        <li>
          <Link href="/#photoshop">
            <a className="navigation__link">Photoshop</a>
          </Link>
        </li>
        <li>
          <Link href="/#about">
            <a className="navigation__link">About</a>
          </Link>
        </li>
        <li>
          <Link href="/#contact">
            <a className="navigation__link btn btn--small btn--primary">
              Contact
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
