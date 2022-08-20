import PropTypes from "prop-types";
export default function ListGroup({
  heading,
  list,
  animGroup,
  animItems,
  image,
}) {
  return (
    <div className={`list-group ${animGroup}`}>
      <h3 className={`heading heading--h3 ${animItems}`}>{heading}</h3>
      <ul className="list">
        {list.map((item) => (
          <li
            key={item}
            className={
              image
                ? `list__item image ${animItems}`
                : `list__item ${animItems}`
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
  animGroup: "",
  animItems: "",
  image: false,
};

ListGroup.propTypes = {
  heading: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  ),
  animGroup: PropTypes.string,
  animItems: PropTypes.string,
  image: PropTypes.bool,
};
