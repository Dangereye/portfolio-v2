import PropTypes from "prop-types";
import Anchor from "./Anchor";
export default function AnchorGroup({ heading, list }) {
  return (
    <div className="list-group">
      <h3 className="heading heading--h3">{heading}</h3>
      <ul className="list">
        {list.map((item) => (
          <li key={item.name} className="list__item">
            <Anchor anchor={item.anchor} text={item.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

AnchorGroup.defaultProps = {
  heading: "Anchors heading",
  list: [
    { name: "Item 01", anchor: "/" },
    { name: "Item 02", anchor: "/" },
    { name: "Item 03", anchor: "/" },
    { name: "Item 04", anchor: "/" },
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
