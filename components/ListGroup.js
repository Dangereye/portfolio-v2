import Link from "next/link";

export default function ListGroup({ heading, list, image, links, anchors }) {
  return (
    <div className="list-group">
      <h3 className="heading heading--h3">{heading}</h3>
      <ul className="list">
        {list.map((item) => (
          <li
            key={item.name}
            className={image ? "list__item image" : "list__item"}
          >
            {links ? (
              <Link href={item.link}>
                <a>{item.name}</a>
              </Link>
            ) : anchors ? (
              <a href={item.anchor} target="_blank" rel="noreferrer">
                {item.name}
              </a>
            ) : item.name ? (
              item.name
            ) : (
              item
            )}
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
  links: false,
  anchors: false,
};
