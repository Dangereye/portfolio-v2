import PropTypes from "prop-types";
import Link from "next/link";

export default function LinkGroup({ heading, list }) {
  return (
    <div className="list-group">
      <h3 className="heading heading--h3">{heading}</h3>
      <ul className="list">
        {list.map((item) => (
          <li key={item.name} className="list__item">
            <Link href={item.link ? item.link : "/"}>
              <a>{item.name ? item.name : "N/A"}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

LinkGroup.defaultProps = {
  heading: "Links heading",
  list: [
    { name: "Item 01", link: "/" },
    { name: "Item 02", link: "/" },
    { name: "Item 03", link: "/" },
    { name: "Item 04", link: "/" },
  ],
};

LinkGroup.propTypes = {
  heading: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      link: PropTypes.string,
    })
  ),
};
