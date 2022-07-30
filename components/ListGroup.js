export default function ListGroup({ heading, list, image }) {
  return (
    <div className="list-group">
      <h3 className="heading heading--h3">{heading}</h3>
      <ul className="list">
        {list.map((item) => (
          <li key={item} className={image ? "list__item image" : "list__item"}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

ListGroup.defaultProps = {
  heading: "Lists heading",
  list: ["List item 01", "List item 02", "List item 03", "List item 034"],
  image: false,
};
