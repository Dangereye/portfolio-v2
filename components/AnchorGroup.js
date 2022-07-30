export default function AnchorGroup({ heading, list }) {
  return (
    <div className="list-group">
      <h3 className="heading heading--h3">{heading}</h3>
      <ul className="list">
        {list.map((item) => (
          <li key={item.name} className="list__item">
            <a href={item.anchor} target="_blank" rel="noreferrer">
              {item.name}
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
