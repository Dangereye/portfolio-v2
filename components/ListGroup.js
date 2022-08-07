import PropTypes from "prop-types";
export default function ListGroup({ heading, list, anim, image }) {
  return (
    <div className="list-group">
      <h3 className={`heading heading--h3 ${anim}`}>{heading}</h3>
      <ul className="list">
        {list.map((item) => (
          <li
            key={item}
            className={
              image ? `list__item image ${anim}` : `list__item ${anim}`
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

ListGroup.defaultProps = {
  heading: "Lists heading",
  list: ["List item 01", "List item 02", "List item 03", "List item 04"],
  anim: "",
  image: false,
};

ListGroup.propTypes = {
  heading: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  ),
  anim: PropTypes.string,
  image: PropTypes.bool,
};
