import PropTypes from "prop-types";
import { Pages } from "../data/Pages";
import Link from "next/link";

export default function Navigation({ anim }) {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {Pages.map((item, i) => (
          <li key={`navigation-link-${i}`} className={anim}>
            <Link href={item.link ? item.link : "/"}>
              <a
                className={
                  item.name.includes("Contact")
                    ? "navigation__link btn btn--primary"
                    : "navigation__link"
                }
              >
                {item.name ? item.name : "N/A"}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Navigation.defaultProps = {
  anim: "",
};

Navigation.propTypes = {
  anim: PropTypes.string,
  Pages: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      link: PropTypes.string,
    })
  ),
};
