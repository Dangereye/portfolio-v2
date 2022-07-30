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
  heading: "List heading",
  list: [],
  image: false,
};
