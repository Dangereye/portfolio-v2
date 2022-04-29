export default function ArticleHeading({ lead, h2 }) {
  return (
    <>
      <div className="heading heading--lead">{lead}</div>
      <h2 className="heading heading--h2">{h2}</h2>
    </>
  );
}

ArticleHeading.defaultProps = {
  lead: "first heading ",
  h2: "Second heading",
};
