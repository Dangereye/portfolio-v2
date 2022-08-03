import PropTypes from "prop-types";
export default function AnchorGroup({ heading, list }) {
  return (
    <div className="list-group">
      <h3 className="heading heading--h3">{heading}</h3>
      <ul className="list">
        {list.map((item) => (
          <li key={item.name} className="list__item">
            <a
              href={item.anchor ? item.anchor : "/"}
              target="_blank"
              rel="noreferrer"
            >
              {item.name ? item.name : "N/A"}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

AnchorGroup.defaultProps = {
  heading: "Anchors heading",
  list: [
    { name: "Anchor item 01", anchor: "/" },
    { name: "Anchor item 02", anchor: "/" },
    { name: "Anchor item 03", anchor: "/" },
    { name: "Anchor item 04", anchor: "/" },
  ],
};

AnchorGroup.propTypes = {
  heading: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      anchor: PropTypes.string,
    })
  ),
};
