import PropTypes from "prop-types";

export default function DownloadGroup({ heading, list }) {
  return (
    <div className="list-group">
      <h3 className="heading heading--h3">{heading}</h3>
      <ul className="list">
        {list.map((item) => (
          <li key={item.name} className="list__item">
            <a href={item.link} download>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

DownloadGroup.defaultProps = {
  heading: "Download heading",
  list: [
    { name: "Item 01", link: "/" },
    { name: "Item 02", link: "/" },
    { name: "Item 03", link: "/" },
    { name: "Item 04", link: "/" },
  ],
};

DownloadGroup.propTypes = {
  heading: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      link: PropTypes.string,
    })
  ),
};
