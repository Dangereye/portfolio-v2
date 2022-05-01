export default function ListGroup({ heading, list }) {
  return (
    <div className="list-group">
      <h3 className="heading heading--h3">{heading}</h3>
      <ul className="list">
        {list.map((item) => (
          <li key={item} className="list__item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
