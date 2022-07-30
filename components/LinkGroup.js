import Link from "next/link";

export default function LinkGroup({ heading, list }) {
  return (
    <div className="list-group">
      <h3 className="heading heading--h3">{heading}</h3>
      <ul className="list">
        {list.map((item) => (
          <li key={item.name} className="list__item">
            <Link href={item.link}>
              <a>{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
LinkGroup.defaultProps = {
  heading: "Links heading",
  list: [
    { name: "Link item 01", link: "/" },
    { name: "Link item 02", link: "/" },
    { name: "Link item 03", link: "/" },
    { name: "Link item 04", link: "/" },
  ],
};
